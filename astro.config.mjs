// @ts-check
import { defineConfig } from 'astro/config';

// Served by GitHub Pages as a project site, so every URL lives under /civics-study.
export default defineConfig({
  site: 'https://stphnwlsh.github.io',
  base: '/civics-study',
  trailingSlash: 'ignore',
});
