/*
  Password-protects the built site.

  GitHub Pages can't ask for a login, so after `astro build` this script encrypts
  every HTML page in dist/ with AES-256-GCM, using a key derived from the
  SITE_PASSWORD environment variable (a repo secret in the deploy workflow).
  Each page is replaced by a small unlock screen that holds the scrambled page.

  The right password unlocks the page in the browser, and the derived key (never
  the password itself) is remembered on that device so other pages open straight
  away. With no SITE_PASSWORD set, the script does nothing, which keeps local
  development simple.
*/
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { webcrypto as crypto } from 'node:crypto';

const DIST = new URL('../dist/', import.meta.url).pathname;
const PASSWORD = process.env.SITE_PASSWORD ?? '';
const ITERATIONS = 600_000;
// Fixed per site so the remembered key keeps working across deploys.
const SALT = new TextEncoder().encode('stphnwlsh/civics-study:v1');

if (!PASSWORD) {
  console.log('[encrypt] SITE_PASSWORD is not set, so pages are left unencrypted.');
  process.exit(0);
}

const b64 = (buf) => Buffer.from(buf).toString('base64');

const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(PASSWORD), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt: SALT, iterations: ITERATIONS, hash: 'SHA-256' },
  baseKey,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt'],
);

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

function shell(payload) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex">
<title>Civics Study</title>
<link rel="icon" href="/civics-study/favicon.svg" type="image/svg+xml">
<style>
:root{--paper:#f6f7f4;--card:#fff;--ink:#1b2440;--muted:#6b7489;--line:#d9dde5;--accent:#2c4a8a;--accent-ink:#fff;--bad:#b23a3a;color-scheme:light}
@media (prefers-color-scheme:dark){:root{--paper:#12161f;--card:#1a2030;--ink:#e7eaf2;--muted:#8f98ad;--line:#2d3549;--accent:#8fb0f2;--accent-ink:#0f1525;--bad:#f08f8f;color-scheme:dark}}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--paper);color:var(--ink);font:400 1rem/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;padding:24px max(16px,env(safe-area-inset-left,0px))}
form{width:100%;max-width:360px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:24px;display:grid;gap:12px}
h1{font:700 1.4rem/1.2 Georgia,serif;margin:0}
p{margin:0;color:var(--muted);font-size:.92rem}
input{font:inherit;color:var(--ink);background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:10px 12px;width:100%}
input:focus{outline:none;border-color:var(--accent)}
button{font:600 1rem/1 system-ui,sans-serif;padding:12px;border-radius:8px;border:0;background:var(--accent);color:var(--accent-ink);cursor:pointer}
button:disabled{opacity:.6}
.err{color:var(--bad);min-height:1.4em}
</style>
</head>
<body>
<form id="unlock" hidden>
  <h1>Civics Study</h1>
  <p>This study site is private. Enter the password to continue.</p>
  <label for="pw" style="font-weight:600">Password</label>
  <input id="pw" type="password" autocomplete="current-password" required autofocus>
  <button id="go" type="submit">Unlock</button>
  <p class="err" id="err" role="status" aria-live="polite"></p>
</form>
<script id="payload" type="application/json">${JSON.stringify(payload)}</script>
<script>
(function(){
  var P = JSON.parse(document.getElementById('payload').textContent);
  var KEY = 'civics:sitekey';
  var enc = new TextEncoder();
  function bytes(b){ return Uint8Array.from(atob(b), function(c){ return c.charCodeAt(0); }); }
  function b64(buf){ var s=''; new Uint8Array(buf).forEach(function(x){ s+=String.fromCharCode(x); }); return btoa(s); }
  function open(key){
    return crypto.subtle.decrypt({ name:'AES-GCM', iv: bytes(P.iv) }, key, bytes(P.data)).then(function(buf){
      var html = new TextDecoder().decode(buf);
      // Swap in the real page. Scripts copied from a parsed document don't run,
      // so each one is rebuilt as a fresh element, which the browser does run.
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var root = document.importNode(doc.documentElement, true);
      root.querySelectorAll('script').forEach(function(old){
        var s = document.createElement('script');
        for (var i = 0; i < old.attributes.length; i++) s.setAttribute(old.attributes[i].name, old.attributes[i].value);
        s.textContent = old.textContent;
        old.replaceWith(s);
      });
      document.documentElement.replaceWith(root);
    });
  }
  function fromRaw(raw){ return crypto.subtle.importKey('raw', bytes(raw), 'AES-GCM', false, ['decrypt']); }
  function showForm(){ document.getElementById('unlock').hidden = false; document.getElementById('pw').focus(); }
  var saved = null; try { saved = localStorage.getItem(KEY); } catch(e) {}
  if (saved) { fromRaw(saved).then(open).catch(function(){ try{localStorage.removeItem(KEY);}catch(e){} showForm(); }); }
  else showForm();
  document.getElementById('unlock').addEventListener('submit', function(e){
    e.preventDefault();
    var btn = document.getElementById('go'), err = document.getElementById('err');
    btn.disabled = true; err.textContent = 'Checking…';
    crypto.subtle.importKey('raw', enc.encode(document.getElementById('pw').value), 'PBKDF2', false, ['deriveKey'])
      .then(function(base){ return crypto.subtle.deriveKey({ name:'PBKDF2', salt: enc.encode(P.salt), iterations: P.iter, hash:'SHA-256' }, base, { name:'AES-GCM', length:256 }, true, ['decrypt']); })
      .then(function(key){ return open(key).then(function(){ return crypto.subtle.exportKey('raw', key); }); })
      .then(function(raw){ try { localStorage.setItem(KEY, b64(raw)); } catch(e) {} })
      .catch(function(){ btn.disabled = false; err.textContent = 'That password did not work. Try again.'; });
  });
})();
</script>
</body>
</html>
`;
}

let count = 0;
for await (const file of htmlFiles(DIST)) {
  const html = await readFile(file);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, html);
  await writeFile(file, shell({ v: 1, salt: new TextDecoder().decode(SALT), iter: ITERATIONS, iv: b64(iv), data: b64(data) }));
  count++;
}
console.log(`[encrypt] Password-protected ${count} pages.`);
