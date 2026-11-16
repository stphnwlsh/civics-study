/*
  Civics Study Guide — knowledge base
  One entry per question, in the order the class list gives them.

  Fields
    id       stable number (matches the class list order)
    topic    which unit the question belongs to (see TOPICS)
    q        the question exactly as assigned
    hints    research pointers, revealed one at a time (easiest last)
    terms    key terms to try to use, with short definitions
    search   good phrases to type into the lookup tools
    points   self-check list: what a complete answer usually covers
    answer   the backup answer, as paragraphs (simple HTML allowed)
    sources  where the facts in the backup answer come from

  Figures checked November 2026. Turnout numbers come from the
  U.S. Census Bureau's Current Population Survey (2024 voting supplement),
  the University of Florida Election Lab, and Pew Research Center's
  2024 validated-voter study.
*/

export const TOPICS = {
  rights:  { name: "Voting rights history", short: "Rights", color: "#c8453b", sticker: "Rights Defender" },
  turnout: { name: "Voting & participation", short: "Turnout", color: "#2c6fd1", sticker: "Turnout Pro" },
  polls:   { name: "Public opinion & polling", short: "Polling", color: "#1f8a8a", sticker: "Poll Expert" },
  social:  { name: "How we form opinions", short: "Opinions", color: "#7a4fb5", sticker: "Opinion Detective" },
  culture: { name: "Political culture", short: "Culture", color: "#c96f1e", sticker: "Culture Scholar" },
  ideology:{ name: "Ideology & parties", short: "Ideology", color: "#2f8a55", sticker: "Party Insider" }
};

export const SRC = {
  a15:     { label: "National Archives: 15th Amendment", url: "https://www.archives.gov/milestone-documents/15th-amendment" },
  a19:     { label: "National Archives: 19th Amendment", url: "https://www.archives.gov/milestone-documents/19th-amendment" },
  avra:    { label: "National Archives: Voting Rights Act of 1965", url: "https://www.archives.gov/milestone-documents/voting-rights-act" },
  dojhist: { label: "U.S. Dept. of Justice: History of federal voting rights laws", url: "https://www.justice.gov/crt/history-federal-voting-rights-laws" },
  nvra:    { label: "U.S. Dept. of Justice: National Voter Registration Act", url: "https://www.justice.gov/crt/national-voter-registration-act-1993-nvra" },
  am24:    { label: "Constitution Annotated: 24th Amendment", url: "https://constitution.congress.gov/constitution/amendment-24/" },
  am26:    { label: "Constitution Annotated: 26th Amendment", url: "https://constitution.congress.gov/constitution/amendment-26/" },
  census24:{ label: "U.S. Census Bureau: 2024 voting and registration (press release)", url: "https://www.census.gov/newsroom/press-releases/2025/2024-presidential-election-voting-registration-tables.html" },
  censusRpt:{ label: "U.S. Census Bureau: Voting and Registration in the Election of November 2024", url: "https://www.census.gov/library/publications/2026/demo/p20-590.html" },
  usafacts:{ label: "USAFacts: How voter turnout differs by age, sex, and race", url: "https://usafacts.org/articles/how-many-americans-vote-and-how-do-voting-rates-vary-state/" },
  pewTurn: { label: "Pew Research Center: Voter turnout, 2020–2024", url: "https://www.pewresearch.org/politics/2025/06/26/voter-turnout-2020-2024/" },
  pewVote: { label: "Pew Research Center: Voting patterns in the 2024 election", url: "https://www.pewresearch.org/politics/2025/06/26/voting-patterns-in-the-2024-election/" },
  cawp:    { label: "Rutgers CAWP: Gender differences in the 2024 presidential vote", url: "https://cawp.rutgers.edu/blog/gender-differences-2024-presidential-vote" },
  ballot:  { label: "Ballotpedia: Voter turnout in presidential elections, 1840–2024", url: "https://ballotpedia.org/Voter_turnout_in_presidential_elections,_1840-2024" },
  fed10:   { label: "Library of Congress: Federalist Papers 1–10", url: "https://guides.loc.gov/federalist-papers/text-1-10" },
  fed51:   { label: "Library of Congress: Federalist Papers 51–60", url: "https://guides.loc.gov/federalist-papers/text-51-60" },
  toqv:    { label: "Project Gutenberg: Tocqueville, Democracy in America (Vol. 1)", url: "https://www.gutenberg.org/ebooks/815" },
  constit: { label: "National Archives: The Constitution (full text)", url: "https://www.archives.gov/founding-docs/constitution-transcript" },
  shelby:  { label: "Oyez: Shelby County v. Holder (2013)", url: "https://www.oyez.org/cases/2012/12-96" },
  sentencing:{ label: "The Sentencing Project: Locked Out 2024", url: "https://www.sentencingproject.org/reports/locked-out-2024-four-million-denied-voting-rights-due-to-a-felony-conviction/" },
  pewMoe:  { label: "Pew Research Center: Understanding the margin of error", url: "https://www.pewresearch.org/short-reads/2016/09/08/understanding-the-margin-of-error-in-election-polls/" }
};

export const QUESTIONS = [
/* ───────────────────────── 1 ───────────────────────── */
{
  id: 1, topic: "rights",
  q: "How did literacy tests, poll taxes, and the grandfather clauses effectively prevent newly freed slaves from voting?",
  hints: [
    "Start with the 15th Amendment (1870). What did it forbid states from doing? Then ask: how could a state keep people from voting without ever mentioning race?",
    "Take each tool one at a time. For each, ask: who could pass it or pay it easily, and who could not? Think about who had been denied schooling and who had little money after slavery.",
    "The grandfather clause is the trick question. Look up which date it used (around 1866–1867) and ask whose grandfathers could vote before that date.",
    "For a strong finish, name the laws and court cases that ended each one: Guinn v. United States (1915), the 24th Amendment (1964), and the Voting Rights Act (1965)."
  ],
  terms: [
    { t: "15th Amendment", d: "1870 amendment saying the right to vote cannot be denied because of race, color, or previous condition of servitude." },
    { t: "Literacy test", d: "A reading or knowledge test a person had to pass before registering to vote." },
    { t: "Poll tax", d: "A fee a person had to pay in order to vote." },
    { t: "Grandfather clause", d: "A rule excusing a man from literacy tests or poll taxes if he or his ancestors could vote before about 1867." },
    { t: "Jim Crow", d: "The system of laws and customs that enforced racial segregation and discrimination in the South after Reconstruction." },
    { t: "Disenfranchise", d: "To take away or block someone's right to vote." }
  ],
  search: ["literacy tests poll taxes grandfather clause Reconstruction", "Guinn v. United States 1915", "Jim Crow voting laws"],
  points: [
    "The 15th Amendment banned race discrimination in voting, so states used rules that looked race-neutral",
    "Literacy tests: many freedmen had been denied education, and white officials graded unfairly",
    "Poll taxes: most freedpeople were poor and could not afford the fee",
    "Grandfather clauses: exempted white men whose ancestors voted before 1867, which no formerly enslaved person could claim",
    "Result: Black voting collapsed across the South, until court cases, the 24th Amendment, and the Voting Rights Act ended these tools"
  ],
  answer: [
    "The 15th Amendment (1870) said no state could deny a man the vote because of his race. After Reconstruction ended in 1877, Southern states looked for ways around it. They wrote voting rules that never mentioned race but were designed to keep Black men from the polls.",
    "<b>Literacy tests</b> required voters to read and explain a passage, often from the state constitution. Under slavery, most enslaved people had been forbidden to learn to read, so many freedmen could not pass. Even educated Black men were often failed, because white registrars chose harder passages for them and judged the answers however they liked.",
    "<b>Poll taxes</b> charged a fee to vote. Most freedpeople worked as sharecroppers and had very little cash. In some states unpaid poll taxes added up from year to year, which made voting even harder to afford.",
    "<b>Grandfather clauses</b> let a man skip the literacy test or poll tax if he, or his father or grandfather, had been allowed to vote before about 1867. That protected poor and uneducated white voters. No formerly enslaved person could qualify, because Black men could not vote in the South before that date.",
    "Together, with violence and intimidation added in, these rules worked. In Louisiana, the number of registered Black voters fell from about 130,000 in 1896 to about 1,300 by 1904. The Supreme Court struck down grandfather clauses in <i>Guinn v. United States</i> (1915). The 24th Amendment (1964) banned poll taxes in federal elections, and the Voting Rights Act of 1965 suspended literacy tests."
  ],
  sources: [SRC.a15, SRC.dojhist, SRC.am24, SRC.avra]
},
/* ───────────────────────── 2 ───────────────────────── */
{
  id: 2, topic: "rights",
  q: "What two significant pieces of legislation increased voting opportunities?",
  hints: [
    "The word is legislation, which means laws passed by Congress. Amendments to the Constitution are a different thing, so look for acts of Congress.",
    "One law came out of the civil rights movement and the march from Selma, Alabama, in 1965.",
    "The other law is from 1993 and has a nickname that involves getting a driver's license. Search 'Motor Voter Act'.",
    "For each law, explain what barrier it removed and who it helped."
  ],
  terms: [
    { t: "Voting Rights Act of 1965", d: "Law that banned literacy tests in many states and sent federal officials to make sure Black citizens could register and vote." },
    { t: "Preclearance", d: "A rule in the Voting Rights Act that made certain states get federal approval before changing their voting laws." },
    { t: "National Voter Registration Act (1993)", d: "The 'Motor Voter' law requiring states to offer voter registration at motor vehicle offices and by mail." },
    { t: "Help America Vote Act (2002)", d: "Law passed after the 2000 election to modernize voting machines and statewide voter lists." }
  ],
  search: ["Voting Rights Act of 1965 what it did", "National Voter Registration Act 1993 Motor Voter", "Help America Vote Act 2002"],
  points: [
    "Names the Voting Rights Act of 1965",
    "Explains that it ended literacy tests and added federal oversight (preclearance)",
    "Names the National Voter Registration Act of 1993 (Motor Voter)",
    "Explains that it made registering easier: at the DMV, by mail, at public offices",
    "Gives evidence of effect, such as Black registration rising in Mississippi"
  ],
  answer: [
    "The two laws most textbooks point to are the <b>Voting Rights Act of 1965</b> and the <b>National Voter Registration Act of 1993</b>.",
    "The <b>Voting Rights Act</b> was signed by President Lyndon Johnson after the 1965 Selma marches. It banned literacy tests in the places that used them to discriminate (later banned nationwide) and let federal examiners register voters. It also required states with a history of discrimination to get federal approval, called <i>preclearance</i>, before changing voting rules. The effect was fast: in Mississippi, Black voter registration rose from about 7 percent in 1964 to about 60 percent in 1967.",
    "The <b>National Voter Registration Act</b>, nicknamed the <i>Motor Voter Act</i>, made registering much easier. States must let people register when they get or renew a driver's license, by mail, and at public assistance offices. It also set rules for how states keep voter lists up to date.",
    "If your teacher wants more, the Help America Vote Act of 2002 is a third law worth knowing. Constitutional amendments also expanded voting: the 15th (race), 19th (women), 24th (no poll taxes), and 26th (age 18). Those are amendments, though, not legislation."
  ],
  sources: [SRC.avra, SRC.dojhist, SRC.nvra]
},
/* ───────────────────────── 3 ───────────────────────── */
{
  id: 3, topic: "turnout",
  q: "What is the most important factor that predicts whether a citizen will vote?",
  hints: [
    "Political scientists compare many factors: age, income, race, gender, and how much school a person finished. One stands out above the rest.",
    "Look at the Census Bureau's 2024 voting numbers. Compare people with a high school diploma to people with a college degree.",
    "The answer is education. Your job is to explain why more schooling makes someone more likely to vote."
  ],
  terms: [
    { t: "Voter turnout", d: "The share of eligible people who actually vote." },
    { t: "Socioeconomic status", d: "A person's position in society based on education, income, and job." },
    { t: "Political efficacy", d: "A person's belief that they can understand politics and make a difference." }
  ],
  search: ["education best predictor of voting", "Census 2024 voting rates by education"],
  points: [
    "States that education is the strongest predictor",
    "Gives evidence: 2024 turnout by education level",
    "Explains why: knowledge of how to register and vote, more efficacy, connections, civic skills",
    "Mentions other factors (age, income) as secondary"
  ],
  answer: [
    "The strongest single predictor of whether someone votes is their <b>level of education</b>. The more school a person has completed, the more likely they are to vote.",
    "The 2024 Census survey shows the pattern clearly. About 53 percent of citizens whose highest degree was a high school diploma said they voted. For people with a bachelor's degree it was about 77 percent, and for those with an advanced degree it was about 83 percent.",
    "Education matters for several reasons. School teaches people how government works and why elections matter. It builds skills like reading ballots and following the news. Educated people also tend to feel more <i>political efficacy</i>, the belief that their vote counts, and they are more often asked to take part by friends, coworkers, and groups.",
    "Other factors also predict voting. Older people, people with higher incomes, and people who have lived in one place a long time vote more often. But education is the factor political scientists usually rank first."
  ],
  sources: [SRC.census24, SRC.censusRpt]
},
/* ───────────────────────── 4 ───────────────────────── */
{
  id: 4, topic: "polls",
  q: "Who is John Q. Public?",
  hints: [
    "He isn't a real person. Think about names like 'John Doe' or 'the average Joe'.",
    "Ask yourself what the 'Public' in his name stands for and why a textbook about public opinion would use him.",
    "Bonus: look up the newspaper cartoonist who made the character popular in the 1920s."
  ],
  terms: [
    { t: "Public opinion", d: "The combined views of many people on issues, leaders, and government." },
    { t: "Average citizen", d: "A typical person, not an expert or political insider." }
  ],
  search: ["John Q. Public meaning", "Vaughn Shoemaker John Q. Public cartoon"],
  points: [
    "John Q. Public is not a real person",
    "He stands for the ordinary, average American citizen",
    "Used to talk about what regular people think, as opposed to experts or leaders",
    "Often shown as busy and only somewhat informed about politics"
  ],
  answer: [
    "John Q. Public is not a real person. He is a made-up name for the <b>ordinary, average American citizen</b>, like 'John Doe' or 'the average Joe'. The name was made popular in the 1920s by newspaper cartoonist Vaughn Shoemaker, who drew him as a regular guy dealing with government and politics.",
    "Writers and textbooks use John Q. Public when they talk about what typical people think, as opposed to what politicians, experts, or activists think. In discussions of public opinion he often stands for the citizen who is busy with work and family, pays some attention to politics, but doesn't follow every issue closely. Leaders still need his support, which is why his opinion matters."
  ],
  sources: []
},
/* ───────────────────────── 5 ───────────────────────── */
{
  id: 5, topic: "social",
  q: "What is the theory of social capital?",
  hints: [
    "Capital usually means money or resources. Social capital is a resource too, but it comes from people and relationships.",
    "Look up political scientist Robert Putnam and his book 'Bowling Alone' (2000). Why bowling?",
    "Explain why social capital would matter for democracy, and what Putnam said had happened to it since the 1960s."
  ],
  terms: [
    { t: "Social capital", d: "The networks, trust, and habits of cooperation that come from people's connections to each other." },
    { t: "Civic engagement", d: "Taking part in community and public life, from voting to volunteering." },
    { t: "Voluntary association", d: "A group people choose to join, such as a club, league, or religious congregation." },
    { t: "Robert Putnam", d: "Harvard political scientist who wrote 'Bowling Alone' about the decline of social capital." }
  ],
  search: ["Robert Putnam Bowling Alone social capital", "social capital civic engagement democracy"],
  points: [
    "Defines social capital as networks, trust, and cooperation between people",
    "Explains that groups and clubs build it",
    "Connects it to democracy: more social capital, more participation and trust",
    "Mentions Putnam and 'Bowling Alone' and his claim that it declined"
  ],
  answer: [
    "The theory of <b>social capital</b> says that the connections between people are a kind of resource, just like money or tools. When people join groups, know their neighbors, and trust one another, they can work together to solve problems. That network of relationships and trust is social capital.",
    "Political scientist <b>Robert Putnam</b> made the idea famous in his book <i>Bowling Alone</i> (2000). He argued that communities with lots of clubs, churches, sports leagues, and volunteer groups have stronger democracies. People in those communities vote more, trust government more, and are more likely to get involved in local issues.",
    "Putnam's worry was that social capital in America had been falling since the 1960s. His example: more Americans were bowling than ever, but fewer were bowling in leagues. People were doing things alone instead of together. He blamed changes like television, longer commutes, and generational change. Other scholars disagree on how much it has declined, and some point to new kinds of connection, like online communities."
  ],
  sources: []
},
/* ───────────────────────── 6 ───────────────────────── */
{
  id: 6, topic: "turnout",
  q: "Why is voting turnout so low in the United States?",
  hints: [
    "First check the facts. How many eligible Americans voted in 2024, and how does a midterm year like 2022 compare?",
    "Think about the steps an American has to take to vote that people in many other democracies don't. Who is responsible for getting you registered?",
    "List rule-based reasons (registration, Tuesday voting, many elections) and attitude-based reasons (apathy, low efficacy, feeling your state isn't competitive).",
    "The Census asked nonvoters why they skipped 2024. The top answer is a good piece of evidence."
  ],
  terms: [
    { t: "Voter registration", d: "Signing up with the government to be allowed to vote." },
    { t: "Apathy", d: "Lack of interest or concern." },
    { t: "Political efficacy", d: "Belief that you can understand politics and that your participation matters." },
    { t: "Midterm election", d: "A national election held halfway through a president's term, with no presidential race." },
    { t: "Voter fatigue", d: "Tiredness from being asked to vote too often or on too many offices." }
  ],
  search: ["why is US voter turnout low", "US turnout compared to other democracies", "reasons people did not vote 2024 Census"],
  points: [
    "Uses real numbers (about 64% in 2024, about 46% in the 2022 midterm)",
    "Registration is the voter's job in the U.S.",
    "Elections on a workday Tuesday, and very frequent elections with long ballots",
    "Attitudes: apathy, distrust, low efficacy, feeling one vote won't matter",
    "Uncompetitive races and safe states under the Electoral College",
    "Notes turnout is not low in every election; 2020 and 2024 were high"
  ],
  answer: [
    "U.S. turnout is lower than in many other democracies, especially outside presidential years. About 64 percent of eligible citizens voted in 2024, and only about 46 percent voted in the 2022 midterms. Several things help explain this.",
    "<b>Registration is up to the voter.</b> In many democracies the government registers citizens automatically. In most of the U.S., people must register themselves and sign up again when they move, and Americans move often.",
    "<b>Voting is inconvenient for some.</b> Election Day is a Tuesday, a workday, not a holiday or weekend. Early and mail voting help, but the rules differ from state to state.",
    "<b>There are lots of elections.</b> Because of federalism, Americans vote for federal, state, and local offices, often in primaries and general elections, with long ballots. This can cause voter fatigue.",
    "<b>Attitudes matter.</b> Some people feel their vote won't make a difference or don't trust government. In the 2024 Census survey, the most common reason registered nonvoters gave was that they were not interested or felt their vote wouldn't matter (about 20 percent).",
    "<b>Many races aren't close.</b> Under the Electoral College, people in 'safe' states may feel the result is already decided. Turnout is not always low, though. The 2020 election (about 67 percent) had the highest turnout since 1900, and 2024 was close behind."
  ],
  sources: [SRC.ballot, SRC.censusRpt, SRC.pewTurn]
},
/* ───────────────────────── 7 ───────────────────────── */
{
  id: 7, topic: "social",
  q: "What are the agents of political socialization?",
  hints: [
    "An 'agent' here means a source of influence: who or what teaches you about politics?",
    "Start with the one closest to home. Textbooks usually say it is the most important agent.",
    "Make a list of at least five: think home, school, friends, screens, faith, and big events in history.",
    "For each agent, add one sentence on how it shapes political views."
  ],
  terms: [
    { t: "Political socialization", d: "The lifelong process of learning political beliefs and values." },
    { t: "Agent of socialization", d: "A person, group, or institution that shapes someone's political views." },
    { t: "Peer group", d: "Friends and people of similar age or status." },
    { t: "Generational effect", d: "When a major event shapes the political views of people who lived through it at the same age." }
  ],
  search: ["agents of political socialization", "family most important agent political socialization"],
  points: [
    "Family (usually most important; parents' party often passes to children)",
    "School (civics, Pledge of Allegiance, student government)",
    "Peers and friends",
    "Media, including social media",
    "Religion",
    "Major events and generational experiences",
    "Also: workplace, community groups, political leaders"
  ],
  answer: [
    "Agents of political socialization are the people, groups, and institutions that shape how we think about politics. The main ones are:",
    "<ul><li><b>Family.</b> Usually the most important. Children hear their parents talk about politics and often grow up with the same party identification.</li><li><b>Schools.</b> Teach civics and history, along with traditions like the Pledge of Allegiance. Activities like student elections give practice in democracy.</li><li><b>Peers.</b> Friends, classmates, and coworkers influence opinions, especially in the teenage and young adult years.</li><li><b>Media.</b> News, TV, and social media decide which issues people see and how those issues are presented.</li><li><b>Religion.</b> Faith communities teach moral values that can shape views on social issues.</li><li><b>Major events.</b> Events like wars, the 9/11 attacks, or the COVID-19 pandemic can shape a whole generation's views.</li></ul>",
    "Other agents include the workplace, community groups, and political leaders themselves. These influences keep working throughout life, which is why opinions can change as people get older."
  ],
  sources: []
},
/* ───────────────────────── 8 ───────────────────────── */
{
  id: 8, topic: "social",
  q: "What is political socialization?",
  hints: [
    "Break the term apart: 'socialization' is how people learn the habits and values of their society. Add 'political' to it.",
    "Ask: when does it start, and does it ever stop?",
    "Connect it to question 7: name a few of the agents that do the socializing."
  ],
  terms: [
    { t: "Political socialization", d: "The process by which people develop their political beliefs, values, and attitudes." },
    { t: "Party identification", d: "A person's sense of belonging to a political party." },
    { t: "Political attitudes", d: "A person's feelings and opinions about political issues and leaders." }
  ],
  search: ["political socialization definition", "political socialization lifelong process"],
  points: [
    "A process of learning political beliefs and values",
    "Begins in childhood and continues for life",
    "Shaped by agents such as family, school, peers, media",
    "Explains why people end up with different views"
  ],
  answer: [
    "<b>Political socialization</b> is the process by which people learn their political beliefs, values, and attitudes. It starts in early childhood, when kids pick up ideas from their families, and it continues for the rest of their lives.",
    "Many things shape it: family, school, friends, the media, religion, and major events. Because each person has a different mix of these influences, people end up with different political views. Political socialization also helps pass a country's shared values, like respect for democracy and freedom, from one generation to the next."
  ],
  sources: []
},
/* ───────────────────────── 9 ───────────────────────── */
{
  id: 9, topic: "culture",
  q: "Explain the balance between majority rule and minority rights.",
  hints: [
    "Define both halves first. What does 'majority rule' mean in a democracy? What could go wrong if the majority could do anything it wanted?",
    "James Madison worried about this in Federalist No. 10 and No. 51. Look for the idea of 'faction' and the danger of 'tyranny of the majority'.",
    "Find the parts of the Constitution that protect people even when they are outnumbered: the Bill of Rights, the 14th Amendment, the courts.",
    "A great example: the 1943 Supreme Court case about students who refused to salute the flag (West Virginia v. Barnette)."
  ],
  terms: [
    { t: "Majority rule", d: "The principle that decisions are made by more than half of the voters or representatives." },
    { t: "Minority rights", d: "Rights that protect individuals and smaller groups, which a majority cannot take away." },
    { t: "Tyranny of the majority", d: "When a majority uses its power to oppress people with less power." },
    { t: "Bill of Rights", d: "The first ten amendments to the Constitution, which protect individual liberties." },
    { t: "Judicial review", d: "The power of courts to strike down laws that violate the Constitution." }
  ],
  search: ["majority rule minority rights balance", "Federalist 10 faction tyranny of the majority", "West Virginia v. Barnette 1943"],
  points: [
    "Democracy uses majority rule to make decisions",
    "Danger: a majority could abuse a minority (tyranny of the majority)",
    "The Constitution limits what majorities can do",
    "Examples of protections: Bill of Rights, 14th Amendment, courts, separation of powers, supermajority rules",
    "A concrete example such as Barnette or Brown v. Board"
  ],
  answer: [
    "In a democracy, decisions are usually made by <b>majority rule</b>: the side with more votes wins. But the founders also worried about the <b>tyranny of the majority</b>, where a larger group uses its power to harm a smaller one. James Madison wrote about this danger in Federalist No. 10 and No. 51.",
    "So the U.S. system limits what a majority can do in order to protect <b>minority rights</b>. The Bill of Rights guarantees freedoms such as speech, religion, and a fair trial, and no election can take those away. The 14th Amendment requires 'equal protection of the laws' for everyone. Independent courts can strike down laws that violate those rights. Separation of powers, federalism, and rules that require supermajorities, such as amending the Constitution, also slow down a majority.",
    "A famous example is <i>West Virginia v. Barnette</i> (1943). The Supreme Court ruled that a school could not force Jehovah's Witness students to salute the flag. Justice Robert Jackson wrote that basic rights 'may not be submitted to vote; they depend on the outcome of no elections.' The balance means the majority governs, but within limits that protect everyone."
  ],
  sources: [SRC.fed10, SRC.fed51, SRC.constit]
},
/* ───────────────────────── 10 ───────────────────────── */
{
  id: 10, topic: "turnout",
  q: "How have political participation rates in the United States changed in recent times?",
  hints: [
    "Find turnout for several recent presidential elections and compare. A table or timeline helps.",
    "Look at 1996, then 2008, 2020, and 2024. Is the trend up or down?",
    "Compare midterms too: 2014, 2018, and 2022.",
    "Participation isn't only voting. How have early voting, mail voting, and online activity changed?"
  ],
  terms: [
    { t: "Voting-eligible population (VEP)", d: "Citizens aged 18+ who are allowed to vote." },
    { t: "Midterm election", d: "Congressional election in the middle of a presidential term." },
    { t: "Early voting", d: "Casting a ballot before Election Day, in person or by mail." },
    { t: "Political participation", d: "Any action meant to influence government, such as voting, protesting, or contacting officials." }
  ],
  search: ["US voter turnout trend 1996 to 2024", "2018 midterm turnout highest", "mail voting increase 2020"],
  points: [
    "Turnout hit lows in the 1990s (about 52% in 1996)",
    "Recent rise: 2020 about 67% (highest since 1900), 2024 about 64%",
    "Midterms also rose: 2014 about 37%, 2018 about 50%, 2022 about 46%",
    "More people vote early or by mail",
    "Young people's turnout rose in 2018–2020 but they still vote least",
    "New forms of participation: online activism, small donations"
  ],
  answer: [
    "In recent years participation in the U.S. has <b>gone up</b> after a long slump. In 1996, only about 52 percent of eligible citizens voted for president. Turnout climbed in the 2000s, and in 2020 it reached about 67 percent, the highest in more than a century. In 2024 it was about 64 percent, still one of the highest in modern times.",
    "Midterm elections followed a similar path. Turnout in 2014 was only about 37 percent, the lowest in decades. In 2018 it jumped to about 50 percent, and in 2022 it was about 46 percent.",
    "<b>How</b> people vote has changed too. Early voting and mail voting grew a lot, especially during the COVID-19 pandemic in 2020, and many voters now cast ballots before Election Day.",
    "Young people voted at higher rates in 2018 and 2020, though they dipped again in 2024 and still vote less than older Americans. Participation beyond voting has also shifted online: many people now sign petitions, give small donations, and share political content on social media."
  ],
  sources: [SRC.ballot, SRC.pewTurn, SRC.census24]
},
/* ───────────────────────── 11 ───────────────────────── */
{
  id: 11, topic: "culture",
  q: "What is the role of religion in American politics?",
  hints: [
    "Start with the rules: what does the First Amendment say about religion? What does Article VI say about religious tests for office?",
    "Then think history: which big American movements were led by or organized through religious groups? (Think abolition and civil rights.)",
    "Today, does how often people attend religious services connect to how they vote? Look at Pew Research data.",
    "Keep it balanced: show how religion has influenced people across the political spectrum."
  ],
  terms: [
    { t: "Establishment Clause", d: "First Amendment rule that the government cannot set up an official religion." },
    { t: "Free Exercise Clause", d: "First Amendment protection of people's right to practice their religion." },
    { t: "Separation of church and state", d: "The idea that government and religion should stay independent of each other." },
    { t: "Religiously unaffiliated", d: "People who don't identify with any religion, sometimes called 'nones'." }
  ],
  search: ["religion in American politics", "First Amendment establishment free exercise", "Pew religion and 2024 vote"],
  points: [
    "First Amendment: no established religion, free exercise for all; no religious test for office",
    "Religion has inspired movements (abolition, civil rights, and others)",
    "Religious groups organize voters and lobby on issues",
    "Religion and frequency of attendance connect to voting patterns",
    "Americans are more religious than people in many other wealthy democracies"
  ],
  answer: [
    "Religion plays a big role in American politics, even though the government and religion are kept separate. The First Amendment says the government cannot set up an official religion (the <b>Establishment Clause</b>) and cannot stop people from practicing their faith (the <b>Free Exercise Clause</b>). Article VI also says no religious test can be required to hold office.",
    "Religion has shaped many political movements. Churches and religious leaders helped drive the abolition of slavery and the temperance movement. During the civil rights movement, Black churches were key places for organizing, and leaders like Dr. Martin Luther King Jr. were ministers. Today religious groups on many sides lobby, register voters, and speak out on issues such as abortion, poverty, immigration, and religious liberty.",
    "Religion is also connected to how people vote. In 2024, Pew Research found that Americans who attend services at least monthly favored Donald Trump by a wide margin, while religiously unaffiliated voters favored Kamala Harris by about 70 to 28 percent. Different religious traditions lean in different directions. Compared with people in most other wealthy democracies, Americans are more religious, which helps explain why religion stays important in public life."
  ],
  sources: [SRC.constit, SRC.pewVote]
},
/* ───────────────────────── 12 ───────────────────────── */
{
  id: 12, topic: "social",
  q: "How do elites influence public opinion?",
  hints: [
    "Who counts as an 'elite' in politics? Think beyond the rich: who has a big platform or special influence?",
    "Look up 'agenda setting' and 'framing'. These are two main ways leaders shape opinion.",
    "Think about the 'bully pulpit' of the president. What does it mean?",
    "Many people take 'cues' from leaders they trust, like their party's leaders. How does that work?"
  ],
  terms: [
    { t: "Elites", d: "People with more influence than most, such as elected officials, media figures, experts, and business and interest group leaders." },
    { t: "Agenda setting", d: "Deciding which issues get attention and are seen as important." },
    { t: "Framing", d: "Presenting an issue in a way that encourages a certain interpretation." },
    { t: "Bully pulpit", d: "The president's ability to use the office to speak to the nation and push ideas." },
    { t: "Elite cues", d: "Signals from trusted leaders that help people decide what to think." }
  ],
  search: ["how elites influence public opinion", "agenda setting framing media", "bully pulpit president"],
  points: [
    "Defines elites",
    "Agenda setting: choosing what people think about",
    "Framing: shaping how they think about it",
    "Cues: people follow leaders they trust, especially party leaders",
    "Limits: people filter messages through their own views"
  ],
  answer: [
    "<b>Elites</b> are people with more influence than the average citizen: elected officials, especially the president, journalists and TV hosts, experts, celebrities, and leaders of businesses and interest groups. They shape public opinion in a few main ways.",
    "First, they <b>set the agenda</b>. By talking about some issues a lot and ignoring others, they decide what the public thinks is important. A president can use the <i>bully pulpit</i>, a big speech or announcement, to make the whole country focus on one problem.",
    "Second, they <b>frame</b> issues. The same policy can sound very different depending on the words used, so how a leader or reporter describes it affects how people react.",
    "Third, they give <b>cues</b>. Most people don't have time to study every issue, so they look to leaders they trust, often from their own political party, for guidance. When party leaders take a position, many supporters follow.",
    "Elite influence has limits, though. People filter messages through their own values and experiences, and they often ignore leaders they don't trust."
  ],
  sources: []
},
/* ───────────────────────── 13 ───────────────────────── */
{
  id: 13, topic: "turnout",
  q: "What factors contribute to the development of political efficacy?",
  hints: [
    "First define political efficacy. Then look up the two types: internal and external.",
    "Internal efficacy is about you: do you feel you understand politics? What builds that feeling?",
    "External efficacy is about the government: do you believe it listens? What experiences would raise or lower that belief?",
    "Connect to earlier questions: education and family come up again here."
  ],
  terms: [
    { t: "Political efficacy", d: "A citizen's belief that they can understand and influence government." },
    { t: "Internal efficacy", d: "Confidence in your own ability to understand politics and take part." },
    { t: "External efficacy", d: "Belief that the government will respond to people like you." },
    { t: "Political trust", d: "Confidence that the government generally does what is right." }
  ],
  search: ["political efficacy internal external", "factors that increase political efficacy"],
  points: [
    "Defines efficacy and its two types",
    "Education and civic knowledge",
    "Family background and early socialization",
    "Personal experience of participating and seeing results",
    "Income and resources",
    "Belief that government is fair and responsive (trust); group history of inclusion or exclusion"
  ],
  answer: [
    "<b>Political efficacy</b> is a person's belief that they can understand politics and make a difference. It has two parts. <i>Internal efficacy</i> is confidence in your own ability to take part. <i>External efficacy</i> is the belief that government will actually listen to people like you.",
    "Several factors help build it:",
    "<ul><li><b>Education.</b> Knowing how government works makes people feel more capable of taking part.</li><li><b>Family.</b> Children who see parents vote and discuss politics tend to feel more confident about politics themselves.</li><li><b>Experience.</b> Taking part, such as voting, contacting an official, or joining a campaign, and seeing results raises efficacy. Being ignored lowers it.</li><li><b>Resources.</b> People with more income and free time find it easier to participate and see their influence.</li><li><b>Trust and fairness.</b> When people believe government is honest and responsive, external efficacy goes up. Groups that were historically shut out of politics may have lower external efficacy.</li><li><b>Group membership.</b> Clubs, unions, and religious groups teach civic skills and connect people to action.</li></ul>",
    "Efficacy matters because people who feel effective are much more likely to vote and participate."
  ],
  sources: []
},
/* ───────────────────────── 14 ───────────────────────── */
{
  id: 14, topic: "turnout",
  q: "What is ticket-splitting?",
  hints: [
    "In politics, a party's 'ticket' is its list of candidates. What would it mean to 'split' it?",
    "Compare it to its opposite: straight-ticket voting.",
    "Look for a recent example: in 2024, a few states chose a presidential candidate from one party and a U.S. senator from the other. Which states?",
    "What can ticket-splitting lead to in government? (Hint: divided government.)"
  ],
  terms: [
    { t: "Ticket-splitting", d: "Voting for candidates from different parties for different offices in the same election." },
    { t: "Straight-ticket voting", d: "Voting for all of one party's candidates." },
    { t: "Divided government", d: "When one party controls the presidency and another controls at least one chamber of Congress." },
    { t: "Partisanship", d: "Strong loyalty to one political party." }
  ],
  search: ["ticket splitting definition", "2024 split ticket states Senate president"],
  points: [
    "Definition: voting for different parties for different offices on one ballot",
    "Opposite is straight-ticket voting",
    "An example",
    "It has declined as partisanship grew",
    "Can lead to divided government"
  ],
  answer: [
    "<b>Ticket-splitting</b> means voting for candidates from different political parties for different offices in the same election. For example, a voter might choose a Republican for president and a Democrat for senator. The opposite is <b>straight-ticket voting</b>, choosing every candidate from one party.",
    "Ticket-splitting used to be common, but it has become rare as Americans have grown more loyal to their parties. Still, it happens. In 2024, voters in Arizona, Michigan, Nevada, and Wisconsin chose Donald Trump, a Republican, for president but elected Democrats to the U.S. Senate.",
    "Ticket-splitting can lead to <b>divided government</b>, where one party controls the White House and the other controls part of Congress. Some voters split their tickets on purpose because they like the balance this creates, while others simply prefer particular candidates."
  ],
  sources: []
},
/* ───────────────────────── 15 ───────────────────────── */
{
  id: 15, topic: "culture",
  q: "According to Alexis de Tocqueville’s Democracy in America, why was democracy so successful in the United States?",
  hints: [
    "Who was Tocqueville, and when did he visit America? (He was French and came in 1831.)",
    "He was surprised by how 'equal' American society seemed compared to Europe. Look up 'equality of conditions'.",
    "He was also amazed at how many clubs and groups Americans joined. Search 'Tocqueville voluntary associations'.",
    "Other reasons he gave: local self-government (town meetings), religion, a free press, and the habits or 'mores' of the people. He also warned of one danger. What was it?"
  ],
  terms: [
    { t: "Alexis de Tocqueville", d: "French writer who traveled the U.S. in 1831–32 and wrote Democracy in America (1835, 1840)." },
    { t: "Equality of conditions", d: "Tocqueville's phrase for the lack of a hereditary aristocracy and the broad equality he saw in American society." },
    { t: "Voluntary associations", d: "Groups people choose to join to pursue shared goals." },
    { t: "Mores", d: "The customs, habits, and moral attitudes of a people." },
    { t: "Tyranny of the majority", d: "Tocqueville's warning that majorities could crush dissent." }
  ],
  search: ["Tocqueville Democracy in America why democracy succeeded", "Tocqueville associations equality of conditions"],
  points: [
    "Tocqueville visited in 1831 and wrote Democracy in America",
    "Equality of conditions: no aristocracy, widespread land ownership",
    "Voluntary associations and civic participation",
    "Local self-government, like New England town meetings",
    "Religion supported morals while being separate from government",
    "Mores (habits of the people) mattered most; geography helped too",
    "He also warned about tyranny of the majority"
  ],
  answer: [
    "Alexis de Tocqueville was a French writer who toured the United States in 1831 and 1832. In <i>Democracy in America</i> (1835 and 1840) he explained why democracy worked so well here when it was struggling in Europe.",
    "<ul><li><b>Equality of conditions.</b> America had no aristocracy of nobles, and many ordinary people owned land. People felt roughly equal, which made democracy feel natural.</li><li><b>Associations.</b> Americans constantly formed voluntary groups to solve problems, from churches to civic clubs. This taught them to cooperate and govern themselves.</li><li><b>Local self-government.</b> In places like New England town meetings, citizens ran their own local affairs and learned democracy by practicing it.</li><li><b>Religion.</b> Religion gave Americans shared moral values, and he believed it was strongest because it was separate from the government.</li><li><b>Mores and laws.</b> He thought the habits and attitudes of the people mattered most, more than the laws, and the laws more than geography. Still, America's land and lack of powerful enemies nearby also helped.</li></ul>",
    "Tocqueville also gave a warning. He feared the <b>tyranny of the majority</b>, that the pressure to agree with the majority could silence people who thought differently."
  ],
  sources: [SRC.toqv]
},
/* ───────────────────────── 16 ───────────────────────── */
{
  id: 16, topic: "social",
  q: "How do citizens form political beliefs and opinions?",
  hints: [
    "This question pulls together several others. Start with political socialization (questions 7 and 8).",
    "Then think about personal factors: what does a person's own job, income, or situation have to do with their views? Look up 'self-interest'.",
    "Group identity matters too: race, religion, region, gender, and age.",
    "Finally: how do party identification, the media, and leaders (elites) shape opinions?"
  ],
  terms: [
    { t: "Political socialization", d: "Learning political values from family, school, peers, and more." },
    { t: "Self-interest", d: "Choosing views based on what benefits you personally." },
    { t: "Party identification", d: "Loyalty to a political party, which acts like a lens for viewing issues." },
    { t: "Political ideology", d: "A consistent set of beliefs about the role of government." }
  ],
  search: ["how people form political opinions", "factors that shape political opinions"],
  points: [
    "Political socialization from family, school, peers, media, religion",
    "Self-interest and personal experiences",
    "Group identities: race, religion, region, gender, age, income",
    "Party identification as a lens",
    "Values and ideology",
    "Information from media and cues from leaders"
  ],
  answer: [
    "People form their political beliefs through a mix of influences that build up over a lifetime.",
    "<ul><li><b>Political socialization.</b> Family, school, friends, religion, and the media teach basic values starting in childhood.</li><li><b>Self-interest and experience.</b> People often support policies that affect them directly. A farmer may care about trade rules, and a student about college costs. Personal experiences, like losing a job or serving in the military, can change views.</li><li><b>Group identity.</b> Race, religion, region, gender, age, and income are linked to different opinions, because people in a group often share experiences.</li><li><b>Party identification.</b> Once someone feels like a Democrat or Republican, they often see new issues through that party's lens.</li><li><b>Values and ideology.</b> Core beliefs about liberty, equality, and the role of government help people sort out new issues.</li><li><b>Information and leaders.</b> News sources and trusted leaders shape which issues people care about and how they think about them.</li></ul>",
    "Major events can also shift opinions quickly, as wars, economic crises, and pandemics have."
  ],
  sources: []
},
/* ───────────────────────── 17 ───────────────────────── */
{
  id: 17, topic: "culture",
  q: "How does the political culture of the United States compare to that of Europe?",
  hints: [
    "Pick a few themes and compare: the role of government, individualism, religion, and how many parties there are.",
    "How do Americans and Europeans differ on government health care and welfare programs?",
    "Look up 'American exceptionalism'. It's a term for the idea that U.S. political culture is unusual.",
    "Remember 'Europe' is many countries. It's fine to say 'many European countries'."
  ],
  terms: [
    { t: "Political culture", d: "The widely shared beliefs and values a society holds about politics." },
    { t: "Individualism", d: "The belief that people should be responsible for themselves and free to make their own choices." },
    { t: "Welfare state", d: "A system where government provides wide social benefits like health care and pensions." },
    { t: "American exceptionalism", d: "The idea that the U.S. has a unique political culture and history." },
    { t: "Social democracy", d: "A political approach combining democracy and a market economy with large government social programs, common in Europe." }
  ],
  search: ["American political culture compared to Europe", "American exceptionalism individualism", "Pew Americans Europeans views government role"],
  points: [
    "Americans are more individualistic and stress personal responsibility",
    "Europeans more often expect government to provide social benefits",
    "Americans are more suspicious of big government",
    "Americans are more religious",
    "Two-party system in the U.S. vs. many parties in Europe, including socialist and labor parties",
    "Both share democracy, rule of law, and rights"
  ],
  answer: [
    "The U.S. and European democracies share key values like democracy, the rule of law, and individual rights. But their political cultures differ in important ways.",
    "<ul><li><b>Individualism.</b> Americans put more weight on personal freedom and responsibility. Surveys find Americans are more likely than many Europeans to say success is mostly in a person's own control.</li><li><b>Role of government.</b> Many European countries have large welfare states with government-run health care and generous benefits. Americans are more suspicious of big government and more often prefer private or market solutions.</li><li><b>Equality.</b> Americans tend to focus on equality of opportunity, a fair chance to succeed. Many Europeans are more supportive of government action to make outcomes more equal.</li><li><b>Religion.</b> Americans are more religious than people in most of Western Europe, and religion plays a bigger role in U.S. politics.</li><li><b>Parties.</b> The U.S. has two major parties. Many European countries have several parties, including strong socialist, labor, and green parties.</li></ul>",
    "Some scholars call these differences <b>American exceptionalism</b>, the idea that America's history as a new nation without a feudal aristocracy gave it a different political culture."
  ],
  sources: []
},
/* ───────────────────────── 18 ───────────────────────── */
{
  id: 18, topic: "social",
  q: "What role does religion play in forming political attitudes?",
  hints: [
    "This is about religion as an agent of socialization. What do faith communities teach about right and wrong?",
    "Which political issues are most connected to moral and religious beliefs?",
    "Look at Pew Research: do different religious groups lean toward different parties? Does how often someone attends services matter?",
    "Stay neutral: religion has inspired causes on both the left and the right."
  ],
  terms: [
    { t: "Agent of socialization", d: "A source that shapes political beliefs." },
    { t: "Religiosity", d: "How religious a person is, often measured by how often they attend services or pray." },
    { t: "Social issues", d: "Issues tied to moral values, such as abortion, marriage, and the death penalty." },
    { t: "Evangelical Protestant", d: "Protestant Christian traditions emphasizing personal conversion and the Bible's authority." }
  ],
  search: ["religion and political attitudes", "Pew 2024 vote by religion", "religiosity gap voting"],
  points: [
    "Religion teaches moral values that shape opinions",
    "Strongest on social issues but also poverty, immigration, war",
    "Different traditions lean differently",
    "How often people attend matters (the 'religiosity gap')",
    "Religion inspires people across the political spectrum"
  ],
  answer: [
    "Religion is an important <b>agent of political socialization</b>. Religious teachings about right and wrong shape how many people think about political issues, and congregations are communities where people talk about values and sometimes politics.",
    "Religion's influence is strongest on <b>social issues</b> like abortion, marriage, and religious freedom. It also shapes views on helping the poor, immigration, the death penalty, and war. Different traditions emphasize different teachings, so religion can push people in different political directions.",
    "Voting patterns show this. In 2024, Pew Research found that about 8 in 10 white evangelical Protestants voted for Donald Trump, Catholics leaned toward Trump, and religiously unaffiliated voters strongly favored Kamala Harris. Black Protestants have long voted mostly Democratic. How <i>often</i> people attend services also matters: frequent attenders lean Republican, while people who rarely or never attend lean Democratic.",
    "Religion has inspired causes across the spectrum, from the civil rights movement to anti-abortion activism to campaigns against poverty."
  ],
  sources: [SRC.pewVote]
},
/* ───────────────────────── 19 ───────────────────────── */
{
  id: 19, topic: "polls",
  q: "What are the negative consequences of early exit polls?",
  hints: [
    "Remember: the U.S. has several time zones. When polls close on the East Coast, people in the West can still be voting.",
    "Look up the 1980 election. What did TV networks announce while West Coast polls were still open?",
    "Look up the 2000 election in Florida. How many times did networks change their call?",
    "After listing problems, find out what news networks agreed to do about it."
  ],
  terms: [
    { t: "Exit poll", d: "A survey of voters taken after they cast their ballots." },
    { t: "Projection", d: "A media prediction of who won, based on polls and early results." },
    { t: "Bandwagon effect", d: "When people support whoever appears to be winning." },
    { t: "Down-ballot races", d: "Elections for lower offices listed below the top race on a ballot." }
  ],
  search: ["negative effects early exit polls West Coast", "1980 election early projection Carter conceded", "2000 Florida networks called Gore then Bush"],
  points: [
    "Early projections can discourage people who haven't voted yet, especially in western time zones",
    "Lower turnout can affect down-ballot races too",
    "Exit polls can be wrong, causing confusion (2000 Florida, 2004)",
    "Can reduce trust in elections and media",
    "Networks now agree not to project a state until its polls close"
  ],
  answer: [
    "Exit polls help news networks predict winners and explain why people voted as they did. But when results are announced too early, they can cause problems.",
    "<b>They can discourage voting.</b> The U.S. spans several time zones. In 1980, NBC projected Ronald Reagan as the winner at about 8:15 p.m. Eastern time, and President Jimmy Carter conceded while polls on the West Coast were still open. Some people in the West decided not to bother voting. Fewer voters can also change the outcome of <i>down-ballot</i> races, like those for Congress or local offices.",
    "<b>They can be wrong.</b> In 2000, networks called Florida for Al Gore, then took it back, then called it for George W. Bush, then took that back too. Early exit poll numbers leaked in 2004 also suggested a result that didn't match the final count. Mistakes like these confuse voters and can hurt trust in elections and the media.",
    "Because of these problems, major networks have pledged since the 1980s not to project a winner in a state until its polls have closed."
  ],
  sources: []
},
/* ───────────────────────── 20 ───────────────────────── */
{
  id: 20, topic: "culture",
  q: "What is the difference between a political ideology and a political culture?",
  hints: [
    "Define each term separately first. Look back at question 40 for political culture.",
    "Key difference: which one is shared by almost everyone in a country, and which one divides people into groups?",
    "Give an example of each. Liberty is part of U.S. political culture. Liberalism and conservatism are ideologies.",
    "Try an analogy: one is like the rules of a game everyone agrees on, and the other is like different teams' strategies."
  ],
  terms: [
    { t: "Political ideology", d: "A consistent set of beliefs about what government should do, held by a person or group." },
    { t: "Political culture", d: "The broadly shared values and beliefs a whole society holds about politics." },
    { t: "Core values", d: "Basic beliefs, like liberty and equality, that most citizens share." }
  ],
  search: ["political ideology vs political culture", "political ideology definition"],
  points: [
    "Political culture: values shared broadly across a society",
    "Political ideology: a set of beliefs that differs between people and groups",
    "Culture unites; ideology divides people into groups",
    "Examples of each"
  ],
  answer: [
    "<b>Political culture</b> is the set of basic values and beliefs about government that are <i>shared by most people</i> in a country. In the U.S., that includes liberty, equality, democracy, individualism, and the rule of law. Most Americans agree on these, whatever party they belong to.",
    "<b>Political ideology</b> is a person's or group's <i>specific set of beliefs</i> about what government should do. Ideologies such as liberalism, conservatism, and libertarianism differ from one another, and people disagree about them.",
    "The key difference: political culture is what unites a country, while ideology is where people divide. For example, liberals and conservatives both value liberty and equality, which is political culture. But they disagree about how government should protect those values, which is ideology. Think of political culture as the rules of the game everyone accepts, and ideologies as the different teams' strategies."
  ],
  sources: []
},
/* ───────────────────────── 21 ───────────────────────── */
{
  id: 21, topic: "polls",
  q: "What does a sampling error of + or – 3 percent in a public opinion poll really mean?",
  hints: [
    "A poll asks only a sample, like 1,000 people, not everyone. So the result is an estimate. How far off could it be?",
    "Try it with a number: if a poll says 52% support something, ±3 means the real number is probably between what and what?",
    "Look up the term 'confidence level'. Polls usually report 95% confidence. What does that mean?",
    "Challenge: if Candidate A has 48% and Candidate B has 45%, with ±3, can we say A is really ahead?"
  ],
  terms: [
    { t: "Sampling error (margin of error)", d: "The range within which the true result for the whole population probably falls." },
    { t: "Confidence level", d: "How sure pollsters are that the true value is within the margin of error, usually 95%." },
    { t: "Sample", d: "The smaller group of people actually surveyed." },
    { t: "Statistical tie", d: "When the gap between results is too small, given the margin of error, to say who is really ahead." }
  ],
  search: ["margin of error plus or minus 3 meaning", "poll margin of error 95 percent confidence", "Pew margin of error election polls"],
  points: [
    "A poll surveys a sample, so results are estimates",
    "±3 means the true value is probably within 3 points either way",
    "Worked example (52% means 49% to 55%)",
    "Usually at 95% confidence, so 19 times out of 20",
    "Close races within the margin are a statistical tie",
    "It doesn't cover other errors like bad question wording"
  ],
  answer: [
    "A poll can't ask everyone, so it asks a <b>sample</b>, often about 1,000 people. Because it's only a sample, the result is an estimate. The <b>sampling error</b>, or margin of error, tells you how close that estimate is likely to be to the true answer for the whole population.",
    "A margin of ±3 percent means the real number is probably within 3 points above or below the poll's number. If a poll says 52 percent of Americans support a policy, the true support is probably somewhere between <b>49 and 55 percent</b>.",
    "'Probably' has a specific meaning. Most polls use a 95 percent <b>confidence level</b>: if you ran the same poll 100 times, about 95 of them would land within 3 points of the true value.",
    "This matters for close races. If Candidate A has 48 percent and Candidate B has 45 percent, with ±3, the race is too close to call. A's real support could be as low as 45 percent, and B's could be as high as 48. The margin of error covers only the luck of who got picked. It doesn't cover problems like confusing questions or certain groups refusing to answer."
  ],
  sources: [SRC.pewMoe]
},
/* ───────────────────────── 22 ───────────────────────── */
{
  id: 22, topic: "polls",
  q: "What are straw polls, and are they reliable?",
  hints: [
    "A straw poll is an informal poll. Think about online polls on websites or a show of hands at a meeting. Who decides to take part?",
    "Compare it to a scientific poll, which picks people at random. Why does that difference matter?",
    "Look up the Literary Digest poll of 1936. It asked over 2 million people and still got the election badly wrong. Why?"
  ],
  terms: [
    { t: "Straw poll", d: "An informal, unscientific poll, where people usually choose themselves to take part." },
    { t: "Self-selected sample", d: "A sample made of people who decided to answer on their own." },
    { t: "Random sample", d: "A sample where everyone in the population has an equal chance of being chosen." },
    { t: "Sampling bias", d: "When the sample doesn't represent the population fairly." }
  ],
  search: ["straw poll definition reliability", "Literary Digest 1936 poll failure"],
  points: [
    "Definition: an informal, unscientific poll",
    "Participants choose themselves (self-selected)",
    "Not reliable because the sample isn't random or representative",
    "Literary Digest 1936 example",
    "Can still show enthusiasm among a group"
  ],
  answer: [
    "A <b>straw poll</b> is an informal, unscientific poll. Examples include online polls where anyone can click a choice, call-in polls on TV or radio, or a show of hands at a party meeting.",
    "Straw polls are <b>not reliable</b> for showing what the whole public thinks. The people who answer choose themselves, and those people usually care more or have stronger opinions than average. The sample isn't random, so it doesn't represent the population.",
    "The most famous example is the <i>Literary Digest</i> poll of 1936. The magazine mailed ballots to millions of people, many drawn from its own subscribers, phone books, and car registration lists, and got about 2.4 million back. It predicted Alf Landon would beat Franklin Roosevelt. Instead, Roosevelt won in a landslide, carrying 46 of 48 states. During the Great Depression, people who could afford phones, cars, and magazines were wealthier than average, and those who chose to mail back ballots weren't typical either. George Gallup predicted the result correctly with a much smaller scientific sample.",
    "Straw polls can still show how excited a certain group is, but they can't predict how everyone will vote."
  ],
  sources: []
},
/* ───────────────────────── 23 ───────────────────────── */
{
  id: 23, topic: "social",
  q: "How does race affect public opinion?",
  hints: [
    "Race is one kind of group identity. Why might people who share experiences also share some political views?",
    "Look at Pew Research's 2024 validated-voter data. How did Black, Hispanic, Asian, and White voters vote?",
    "On which issues are the differences between racial groups largest? Think about policing, civil rights, and government programs.",
    "Important: avoid stereotypes. People within every group disagree. What else (education, religion, age) makes a difference within groups?"
  ],
  terms: [
    { t: "Group identity", d: "A sense of belonging to a group that can shape views." },
    { t: "Linked fate", d: "The feeling that what happens to your group affects you personally." },
    { t: "Voting bloc", d: "A group of voters who tend to vote the same way." },
    { t: "Party coalition", d: "The mix of groups that support a political party." }
  ],
  search: ["race and public opinion", "Pew 2024 vote by race validated voters", "racial differences views on policing"],
  points: [
    "Shared experiences, including history of discrimination, shape views",
    "Clear differences in party support (2024 figures)",
    "Biggest gaps on civil rights, policing, government role",
    "Groups are not uniform; education, religion, age, and national origin matter",
    "Opinions shift over time (Hispanic voters moved toward Republicans 2020–2024)"
  ],
  answer: [
    "Race shapes public opinion because people of the same race often share experiences, including, for many groups, a history of discrimination. Those shared experiences can lead to similar views on some issues.",
    "The clearest differences show up in voting. According to Pew Research, in 2024 about 83 percent of Black voters chose Kamala Harris. Hispanic voters were split (about 51 percent Harris and 48 percent Trump), Asian American voters favored Harris (about 57 to 40 percent), and a majority of White voters (about 55 percent) chose Donald Trump.",
    "Racial groups also differ on certain issues. The biggest gaps are on questions about civil rights, discrimination, policing, and the criminal justice system, where personal and community experiences differ a lot. There are also differences on how much government should do to help people.",
    "Race doesn't decide anyone's opinions, though. Within every group, people disagree, and education, religion, age, income, region, and family background all matter. Opinions also change over time. For example, Hispanic voters shifted noticeably toward Republicans between 2020 and 2024."
  ],
  sources: [SRC.pewVote, SRC.pewTurn]
},
/* ───────────────────────── 24 ───────────────────────── */
{
  id: 24, topic: "polls",
  q: "How do pollsters draw a representative sample?",
  hints: [
    "Step 1 is deciding who the poll is about: all adults? registered voters? likely voters?",
    "Step 2 is choosing people at random. Look up 'random digit dialing' and 'address-based sampling'.",
    "Step 3 is checking the sample against Census data. Look up 'weighting' in polls.",
    "Why do polls usually ask only about 1,000 people? And why is it getting harder to get people to answer?"
  ],
  terms: [
    { t: "Population", d: "The whole group a poll wants to learn about." },
    { t: "Random sampling", d: "Choosing people so that everyone has an equal chance of being picked." },
    { t: "Stratified sampling", d: "Dividing the population into groups (like regions) and sampling from each." },
    { t: "Weighting", d: "Adjusting results so the sample matches the population's makeup." },
    { t: "Likely voters", d: "People a pollster predicts will actually vote." }
  ],
  search: ["how pollsters get a representative sample", "poll weighting explained", "random digit dialing address based sampling"],
  points: [
    "Define the population",
    "Random selection (phone, mail, probability-based online panels)",
    "Stratifying by region or groups",
    "Sample size around 1,000 to 1,500",
    "Weighting to match Census data",
    "Screening for likely voters; challenge of low response rates"
  ],
  answer: [
    "A <b>representative sample</b> is a small group that looks like the whole population. Pollsters work to build one in several steps.",
    "<ul><li><b>Define the population.</b> Decide who the poll is about: all adults, registered voters, or likely voters.</li><li><b>Pick people at random.</b> Everyone in the population should have an equal chance to be chosen. Pollsters use random digit dialing of landlines and cell phones, mail to randomly chosen addresses, or online panels recruited at random.</li><li><b>Make sure groups are covered.</b> With <i>stratified sampling</i>, pollsters sample from each region or group so none is left out.</li><li><b>Use enough people.</b> Usually 1,000 to 1,500, which gives a margin of error of about ±3 points.</li><li><b>Weight the results.</b> If the sample has too few young people or too many college graduates compared with Census data, pollsters adjust how much each answer counts so the sample matches the population.</li></ul>",
    "Today fewer people answer surveys, so weighting has become more important. Pollsters also ask questions to figure out who is likely to vote, because not every adult does."
  ],
  sources: [SRC.pewMoe]
},
/* ───────────────────────── 25 ───────────────────────── */
{
  id: 25, topic: "rights",
  q: "How was suffrage extended to women?",
  hints: [
    "Start in 1848 at Seneca Falls, New York. What document came out of that meeting?",
    "Find out why the movement split after the 15th Amendment (1870), and the two strategies it used: state by state, or a national amendment.",
    "Which state or territory let women vote first? Which part of the country led the way?",
    "Look up Alice Paul, Carrie Chapman Catt, and how Tennessee became the deciding state in 1920.",
    "Did the 19th Amendment let all women vote right away? Look into Black, Native American, and Asian American women."
  ],
  terms: [
    { t: "Suffrage", d: "The right to vote." },
    { t: "Seneca Falls Convention", d: "1848 meeting that launched the women's rights movement." },
    { t: "Declaration of Sentiments", d: "The Seneca Falls statement, modeled on the Declaration of Independence, demanding rights for women." },
    { t: "19th Amendment", d: "1920 amendment saying the right to vote cannot be denied on account of sex." },
    { t: "Suffragist", d: "A person who campaigned for women's right to vote." }
  ],
  search: ["women's suffrage timeline Seneca Falls to 19th Amendment", "Alice Paul Carrie Chapman Catt", "Tennessee ratifies 19th Amendment 1920"],
  points: [
    "Seneca Falls (1848), Stanton and Mott, Declaration of Sentiments",
    "Two strategies: state by state, and a federal amendment",
    "Western states/territories first (Wyoming 1869)",
    "Leaders: Anthony, Stanton, Catt, Paul; protests and WWI service",
    "19th Amendment ratified in 1920 when Tennessee approved it",
    "Many women of color still faced barriers after 1920"
  ],
  answer: [
    "Women won the vote after a struggle of more than 70 years. It began at the <b>Seneca Falls Convention</b> in 1848, where Elizabeth Cady Stanton and Lucretia Mott led the writing of the Declaration of Sentiments, which demanded rights for women, including the vote.",
    "After the Civil War, the movement split over the 15th Amendment, which gave Black men the vote but not women. Susan B. Anthony and Stanton pushed for a national amendment, while Lucy Stone and others worked state by state. The groups reunited in 1890. Western territories and states moved first: <b>Wyoming</b> gave women the vote in 1869, and by 1914 most western states had followed.",
    "In the 1910s, leaders used two approaches. Carrie Chapman Catt organized a careful 'Winning Plan' to win over states and Congress. Alice Paul and the National Woman's Party picketed the White House, and some were jailed. Women's work during World War I strengthened their case.",
    "Congress passed the <b>19th Amendment</b> in 1919. It was ratified on August 18, 1920, when Tennessee became the 36th state to approve it. Even so, many Black women in the South were still blocked by poll taxes and literacy tests, and many Native American and Asian American women could not vote until later laws changed."
  ],
  sources: [SRC.a19]
},
/* ───────────────────────── 26 ───────────────────────── */
{
  id: 26, topic: "polls",
  q: "What is a random, or representative sample in a poll?",
  hints: [
    "Two related ideas. 'Random' is about how people are chosen. 'Representative' is about what the sample ends up looking like.",
    "Finish this sentence: in a random sample, every person in the population has...",
    "Try an analogy: how does a cook know whether a whole pot of soup is salty without eating it all?"
  ],
  terms: [
    { t: "Random sample", d: "A sample where every member of the population has an equal chance of being picked." },
    { t: "Representative sample", d: "A sample whose makeup matches the population on things like age, race, gender, and region." },
    { t: "Population", d: "The entire group the poll is trying to describe." },
    { t: "Bias", d: "A tilt that makes results unfair or inaccurate." }
  ],
  search: ["random sample vs representative sample", "why random sampling matters polling"],
  points: [
    "Random: everyone has an equal chance to be chosen",
    "Representative: the sample mirrors the population",
    "Random selection is the best way to get a representative sample",
    "Allows a small sample to describe millions",
    "Contrast with self-selected polls"
  ],
  answer: [
    "A <b>random sample</b> is a group chosen so that every person in the population has an <b>equal chance</b> of being picked. A <b>representative sample</b> is one that looks like the whole population, with about the right share of men and women, young and old, people from each region and race, and so on.",
    "The two ideas go together. Choosing people at random is the best way to end up with a representative sample, because it avoids bias in who gets included. When a sample is both random and representative, a poll of about 1,000 people can accurately describe the views of millions.",
    "Think of tasting soup. If the pot is well stirred, one spoonful tells you how the whole pot tastes. Random sampling is like stirring the pot. Without it, as in an online poll where people choose to answer, you might only taste the salt that settled on top."
  ],
  sources: [SRC.pewMoe]
},
/* ───────────────────────── 27 ───────────────────────── */
{
  id: 27, topic: "turnout",
  q: "What issues affect the ability of people to vote?",
  hints: [
    "This question is about ability (can they vote?), not desire (do they want to?). What practical obstacles might stand in someone's way?",
    "Think about rules: registration deadlines, ID requirements, felony convictions, moving to a new address.",
    "Think about access: polling place locations and hours, transportation, work schedules, disabilities, language.",
    "Many of these are debated. Explain both sides of one debate, like voter ID: what supporters say and what critics say."
  ],
  terms: [
    { t: "Voter ID law", d: "A law requiring voters to show identification at the polls." },
    { t: "Felony disenfranchisement", d: "Laws that take away voting rights from people convicted of serious crimes, at least for a time." },
    { t: "Registration deadline", d: "The last day a person can sign up to vote before an election." },
    { t: "Voter roll purge", d: "Removing names from voter lists, for example people who moved or died." },
    { t: "Accessibility", d: "Making voting possible for people with disabilities." }
  ],
  search: ["barriers to voting United States", "voter ID laws debate", "felony disenfranchisement by state"],
  points: [
    "Registration rules and deadlines; needing to re-register after moving",
    "Voter ID requirements, with both sides of the debate",
    "Felony disenfranchisement (about 4 million people in 2024)",
    "Polling place access: location, hours, lines, transportation, work",
    "Disability access and language assistance",
    "Availability of early and mail voting; voter list maintenance"
  ],
  answer: [
    "Many things can affect whether a person is <i>able</i> to vote, not just whether they want to.",
    "<ul><li><b>Registration.</b> In most states people must register ahead of time, sometimes weeks before Election Day, and register again after moving.</li><li><b>Voter ID laws.</b> Many states require a photo ID. Supporters say this protects against fraud and builds trust. Critics say it burdens people who lack an ID, who are more often elderly, poor, or young.</li><li><b>Felony convictions.</b> Most states limit voting by people convicted of felonies. Some restore the right after prison, others much later. About 4 million Americans couldn't vote in 2024 because of a felony conviction, according to The Sentencing Project.</li><li><b>Getting to the polls.</b> Distance, transportation, long lines, limited hours, and jobs that don't allow time off all matter.</li><li><b>Early and mail voting.</b> Rules vary a lot by state and affect how flexible voting is.</li><li><b>Disability and language.</b> Federal law requires accessible polling places and, in some areas, ballots in other languages.</li><li><b>Voter list maintenance.</b> States remove outdated names. Done carefully it keeps lists accurate, but mistakes can remove eligible voters.</li></ul>",
    "States set most voting rules, so a person's ability to vote can depend on where they live."
  ],
  sources: [SRC.sentencing, SRC.nvra]
},
/* ───────────────────────── 28 ───────────────────────── */
{
  id: 28, topic: "culture",
  q: "What are the culture wars?",
  hints: [
    "The phrase became popular in the early 1990s. Look up sociologist James Davison Hunter's book 'Culture Wars' (1991).",
    "Make a list of issues that are usually called 'culture war' issues. What do they have in common? (They are about values and morality, not money.)",
    "Some scholars, like Morris Fiorina, argue most Americans aren't really at 'war'. What's his point?",
    "Keep it neutral: describe both sides' concerns fairly without picking a winner."
  ],
  terms: [
    { t: "Culture war", d: "A political conflict over values, morality, and how society should live." },
    { t: "Social issues", d: "Issues tied to moral and cultural values." },
    { t: "Polarization", d: "When opinions split into two opposite camps with little middle ground." },
    { t: "Orthodox vs. progressive", d: "Hunter's terms for those who see morality as based on fixed, traditional authority versus those who see it as changing with time." }
  ],
  search: ["culture wars definition James Davison Hunter", "Morris Fiorina culture war myth"],
  points: [
    "Conflict over values and morality rather than economics",
    "Examples: abortion, marriage, guns, religion in public life, immigration, school curricula, gender identity",
    "Hunter (1991): orthodox vs. progressive worldviews",
    "Debate: Fiorina says most Americans are moderate; the conflict is strongest among activists and elites",
    "Linked to polarization between the parties"
  ],
  answer: [
    "The <b>culture wars</b> are political conflicts over moral and cultural values, about how people should live and what society should honor, rather than over money or the economy. The term became popular after sociologist James Davison Hunter's 1991 book <i>Culture Wars</i>.",
    "Hunter argued that Americans were dividing into two camps. One side, which he called <i>orthodox</i>, believes morality comes from fixed, traditional sources such as religious teaching. The other, <i>progressive</i>, believes moral understanding should change with the times.",
    "Issues often described as part of the culture wars include abortion, same-sex marriage, gun rights, the role of religion in public life, immigration, what schools should teach, and gender identity. These issues are hard to compromise on because people see them as questions of right and wrong.",
    "Not everyone agrees the 'war' is as big as it sounds. Political scientist Morris Fiorina argued that most Americans hold moderate, mixed views, and that the sharpest fights happen among activists, politicians, and the media. Still, culture war issues have become closely tied to the divide between the two major parties."
  ],
  sources: []
},
/* ───────────────────────── 29 ───────────────────────── */
{
  id: 29, topic: "culture",
  q: "What are the conflicting philosophies of equality of opportunity and equality of results?",
  hints: [
    "Use a race as an analogy. Equality of opportunity: everyone starts at the same line under the same rules. Equality of results: everyone...?",
    "For each one, list a government policy that fits it. (Think public schools and anti-discrimination laws, versus progressive taxes and welfare programs.)",
    "Why do they conflict? What does each side think is unfair about the other?",
    "Which one do most Americans tend to favor, according to surveys about American values?"
  ],
  terms: [
    { t: "Equality of opportunity", d: "Everyone has the same chance to succeed under the same rules." },
    { t: "Equality of results (outcome)", d: "Government works to make people's actual outcomes, like income or wealth, more equal." },
    { t: "Redistribution", d: "Moving wealth from some people to others, through taxes and programs." },
    { t: "Meritocracy", d: "A system where people succeed based on their talent and effort." }
  ],
  search: ["equality of opportunity vs equality of outcome", "Americans views equality of opportunity"],
  points: [
    "Defines equality of opportunity (fair rules, same chance)",
    "Defines equality of results (government narrows outcome gaps)",
    "Policy examples of each",
    "Why they conflict: arguments on each side",
    "Americans generally favor opportunity; debate is over how much government should do"
  ],
  answer: [
    "<b>Equality of opportunity</b> means everyone should have the same chance to succeed. The rules should be fair and apply to everyone, but people's results will differ based on effort, talent, and choices. Policies that fit this idea include free public schools and laws that ban discrimination in hiring.",
    "<b>Equality of results</b> (or outcome) means government should act to make people's actual conditions, such as income, wealth, or health, more equal. Policies that fit include higher tax rates on the wealthy, welfare programs, and other ways of redistributing resources.",
    "The two ideas conflict. Supporters of equality of opportunity argue that forcing equal results is unfair to people who work hard, reduces freedom, and lowers the incentive to succeed. Supporters of more equal results argue that people don't really start from the same line, because of family wealth, neighborhood, or past discrimination, so equal rules alone don't produce a fair chance.",
    "Most Americans strongly support equality of opportunity, and it is part of the country's political culture. The real political debate is usually about how much government should do to make sure everyone gets a fair start."
  ],
  sources: []
},
/* ───────────────────────── 30 ───────────────────────── */
{
  id: 30, topic: "rights",
  q: "Summarize the legal struggle for African American voting rights.",
  hints: [
    "Build a timeline from 1870 to today. Laws, amendments, and court cases are the main events.",
    "Early part: 15th Amendment, then the Jim Crow tools (see question 1), then cases like Guinn v. United States (1915) and Smith v. Allwright (1944) about 'white primaries'.",
    "Middle part: the civil rights movement, Selma in 1965, the Voting Rights Act, the 24th Amendment, and Harper v. Virginia Board of Elections (1966).",
    "Recent part: Shelby County v. Holder (2013) and Allen v. Milligan (2023). What did each decide?"
  ],
  terms: [
    { t: "15th Amendment", d: "1870 ban on denying the vote because of race." },
    { t: "White primary", d: "A party primary election that excluded Black voters. Struck down in Smith v. Allwright (1944)." },
    { t: "Voting Rights Act of 1965", d: "Landmark law that ended literacy tests and required federal oversight of voting changes in certain areas." },
    { t: "Preclearance", d: "Requirement that certain places get federal approval before changing voting rules." },
    { t: "Shelby County v. Holder", d: "2013 Supreme Court case that struck down the formula deciding which places needed preclearance." }
  ],
  search: ["African American voting rights timeline court cases", "Smith v. Allwright white primary", "Shelby County v. Holder 2013", "Allen v. Milligan 2023"],
  points: [
    "15th Amendment (1870) and Reconstruction",
    "Jim Crow restrictions after 1877",
    "Court cases: Guinn (1915), Smith v. Allwright (1944)",
    "Civil rights movement and Selma; 24th Amendment (1964); Voting Rights Act (1965); Harper (1966)",
    "Results: registration rose sharply",
    "Shelby County (2013) ended preclearance; Section 2 still applies (Allen v. Milligan, 2023)"
  ],
  answer: [
    "<b>1870s: a right on paper.</b> The 15th Amendment (1870) said no one could be denied the vote because of race. During Reconstruction, Black men voted in large numbers and were elected to Congress and state offices.",
    "<b>1877 to 1940s: taken away.</b> After Reconstruction ended, Southern states used poll taxes, literacy tests, grandfather clauses, white primaries, and violence to block Black voters. The NAACP fought back in court. The Supreme Court struck down grandfather clauses in <i>Guinn v. United States</i> (1915) and all-white primaries in <i>Smith v. Allwright</i> (1944), but other barriers remained.",
    "<b>1950s to 1960s: the civil rights movement.</b> Activists organized registration drives and protests. In March 1965, peaceful marchers in Selma, Alabama, were beaten by state troopers on 'Bloody Sunday', which shocked the nation. Congress responded. The <b>24th Amendment</b> (1964) banned poll taxes in federal elections, and the <b>Voting Rights Act of 1965</b> banned literacy tests and required certain states to get federal approval (preclearance) before changing voting rules. In <i>Harper v. Virginia Board of Elections</i> (1966), the Court banned poll taxes in state elections too. Registration soared. In Mississippi, Black registration jumped from about 7 percent to about 60 percent within three years.",
    "<b>Recent decades.</b> Congress renewed the Voting Rights Act several times. In <i>Shelby County v. Holder</i> (2013), the Supreme Court struck down the formula used to decide which places needed preclearance, so that requirement no longer operates unless Congress writes a new formula. Section 2 of the Act, which bans voting rules that discriminate by race anywhere, still applies; in <i>Allen v. Milligan</i> (2023) the Court used it to require a new congressional map in Alabama. Courts and Congress continue to debate how the law should apply today."
  ],
  sources: [SRC.a15, SRC.avra, SRC.am24, SRC.dojhist, SRC.shelby]
},
/* ───────────────────────── 31 ───────────────────────── */
{
  id: 31, topic: "turnout",
  q: "What is the percentage of each age group that votes in presidential elections?",
  hints: [
    "Use the newest numbers: the U.S. Census Bureau's survey of the 2024 presidential election.",
    "Look for these age groups: 18–24, 25–44, 45–64, and 65 and older.",
    "Make a small table, then describe the pattern in one sentence. What happens to turnout as people get older?",
    "Note: Census numbers are based on what people tell a survey, which runs a bit higher than official counts."
  ],
  terms: [
    { t: "Current Population Survey (CPS)", d: "A large Census Bureau survey that asks Americans whether they voted." },
    { t: "Citizen voting-age population", d: "U.S. citizens aged 18 and older." },
    { t: "Turnout rate", d: "The percentage of a group that voted." }
  ],
  search: ["Census 2024 voting rates by age", "voter turnout by age group 2024"],
  points: [
    "18–24: about 48%",
    "25–44: about 60%",
    "45–64: about 70%",
    "65+: about 75%",
    "Pattern: turnout rises with age",
    "Names the source and year"
  ],
  answer: [
    "According to the U.S. Census Bureau's survey of the <b>2024 presidential election</b>, here is the share of U.S. citizens in each age group who said they voted:",
    "<table class='mini'><thead><tr><th>Age group</th><th>Voted</th></tr></thead><tbody><tr><td>18–24</td><td>about 48%</td></tr><tr><td>25–44</td><td>about 60%</td></tr><tr><td>45–64</td><td>about 70%</td></tr><tr><td>65 and older</td><td>about 75%</td></tr><tr><td><b>All citizens 18+</b></td><td><b>65.3%</b></td></tr></tbody></table>",
    "The pattern is clear: <b>turnout rises with age</b>. Citizens 65 and older voted at a rate more than 25 points higher than those aged 18 to 24.",
    "These numbers come from a survey, so they run a little higher than turnout calculated from official ballot counts (about 64 percent in 2024), because some people say they voted when they didn't."
  ],
  sources: [SRC.census24, SRC.usafacts, SRC.censusRpt]
},
/* ───────────────────────── 32 ───────────────────────── */
{
  id: 32, topic: "turnout",
  q: "What constitutes voting turnout?",
  hints: [
    "Turnout is a fraction: (people who voted) ÷ (people who could have voted). The tricky part is the bottom number.",
    "Compare three ways to count the bottom: the voting-age population (VAP), the voting-eligible population (VEP), and registered voters. Who is included in each?",
    "Why would the same election have different turnout numbers depending on who's counting?"
  ],
  terms: [
    { t: "Voter turnout", d: "The share of potential voters who actually voted." },
    { t: "Voting-age population (VAP)", d: "Everyone 18 and older living in the country, including people who can't legally vote." },
    { t: "Voting-eligible population (VEP)", d: "Citizens 18+ who are legally allowed to vote." },
    { t: "Registered voters", d: "People who have signed up to vote." }
  ],
  search: ["voter turnout definition VAP VEP", "voting eligible population vs voting age population"],
  points: [
    "Turnout = number who voted ÷ number who could vote",
    "Different denominators: VAP, VEP, registered voters",
    "VEP is considered most accurate",
    "Numerator: total ballots cast (or votes for highest office)",
    "Example with 2024 numbers"
  ],
  answer: [
    "<b>Voter turnout</b> is the percentage of people who could vote who actually did. It's a fraction: the number of people who voted divided by the number of potential voters.",
    "The tricky part is deciding who counts as a 'potential voter'. There are three common ways:",
    "<ul><li><b>Voting-age population (VAP):</b> everyone 18 and older living in the U.S. This includes noncitizens and others who can't legally vote, so it makes turnout look lower.</li><li><b>Voting-eligible population (VEP):</b> only citizens 18 and older who are legally allowed to vote. Many experts consider this the most accurate measure.</li><li><b>Registered voters:</b> only people who have signed up. This gives the highest turnout numbers, because people who register are already more likely to vote.</li></ul>",
    "For example, about 64 percent of the voting-eligible population voted in 2024, according to the University of Florida Election Lab. The Census Bureau's survey put it at 65.3 percent of citizens, slightly higher because some survey respondents overreport voting."
  ],
  sources: [SRC.ballot, SRC.census24]
},
/* ───────────────────────── 33 ───────────────────────── */
{
  id: 33, topic: "polls",
  q: "What is an exit poll?",
  hints: [
    "The name is a clue: it's taken as people exit somewhere.",
    "What do exit polls ask besides 'who did you vote for'?",
    "Who conducts them? Look up the National Election Pool (Edison Research) and AP VoteCast.",
    "Today many people vote early or by mail. How do exit pollsters reach them?"
  ],
  terms: [
    { t: "Exit poll", d: "A survey of voters right after they vote." },
    { t: "Projection", d: "A prediction of the winner announced by news organizations." },
    { t: "Demographics", d: "Characteristics of a population, like age, race, gender, income." },
    { t: "AP VoteCast", d: "A large election survey run by the Associated Press, an alternative to traditional exit polls." }
  ],
  search: ["what is an exit poll", "Edison Research exit poll National Election Pool", "AP VoteCast"],
  points: [
    "Survey of voters as they leave the polls (plus early/mail voters)",
    "Asks who they voted for, demographics, and issues",
    "Used to project winners and explain results",
    "Run by groups such as Edison Research and AP VoteCast"
  ],
  answer: [
    "An <b>exit poll</b> is a survey of voters taken just after they cast their ballots, traditionally by interviewers standing outside polling places on Election Day. Because so many people now vote early or by mail, pollsters also reach those voters by phone, text, and online.",
    "Exit polls ask how people voted and also about who they are (age, race, gender, religion, education) and what issues mattered most to them. News organizations use them to help project winners on election night and to explain <i>why</i> people voted the way they did.",
    "In recent elections, the National Election Pool, with surveys by Edison Research, has run exit polls for ABC, CBS, CNN, and NBC. The Associated Press and Fox News use a different survey called AP VoteCast."
  ],
  sources: []
},
/* ───────────────────────── 34 ───────────────────────── */
{
  id: 34, topic: "turnout",
  q: "What age group votes the most? The least?",
  hints: [
    "Use the same Census 2024 numbers as question 31.",
    "After you name the groups, explain why. What is different about the life of a 70-year-old and a 20-year-old that might affect voting?",
    "Think: moving often, registering for the first time, habits, and which government programs affect each group."
  ],
  terms: [
    { t: "Life-cycle effect", d: "Changes in political behavior that come with age and life stages." },
    { t: "Residential mobility", d: "How often people move from one home to another." },
    { t: "Habit voting", d: "The pattern that people who have voted before keep voting." }
  ],
  search: ["which age group votes most", "why young people vote less"],
  points: [
    "Most: 65 and older (about 75% in 2024)",
    "Least: 18–24 (about 48% in 2024)",
    "Reasons young people vote less: moving, new to registering, less habit, less contact with campaigns",
    "Reasons older people vote more: settled, habit, programs like Social Security and Medicare"
  ],
  answer: [
    "<b>Americans 65 and older vote the most</b>, and <b>18- to 24-year-olds vote the least</b>. In the 2024 presidential election, about 75 percent of citizens 65 and older said they voted, compared with about 48 percent of those aged 18 to 24.",
    "Young people vote less for several reasons. They move often, for college or new jobs, so they have to register again. Voting for the first time means learning a new process. They haven't yet built a habit of voting, and campaigns contact them less often.",
    "Older Americans vote more because they are more settled in their communities, have voted many times before, and are directly affected by programs like Social Security and Medicare. This is why candidates pay close attention to older voters' concerns."
  ],
  sources: [SRC.census24, SRC.usafacts]
},
/* ───────────────────────── 35 ───────────────────────── */
{
  id: 35, topic: "ideology",
  q: "What are some general traits of populists?",
  hints: [
    "Populists often say they speak for 'the people'. Who do they say is against the people?",
    "Look up the People's Party (Populist Party) of the 1890s. Who were its supporters, and what did they want?",
    "Populism can appear on the left and the right. Find one modern example of each.",
    "Some AP textbooks use an ideology chart with four boxes. Where do populists fit on views about government's role in the economy and in personal behavior?"
  ],
  terms: [
    { t: "Populism", d: "A political approach that claims to champion ordinary people against a corrupt or out-of-touch elite." },
    { t: "Establishment", d: "The powerful people and institutions already in charge." },
    { t: "People's Party", d: "1890s third party of farmers and workers, also called the Populists." },
    { t: "Anti-elitism", d: "Distrust of powerful or privileged groups." }
  ],
  search: ["traits of populism", "People's Party 1890s Omaha Platform", "left-wing and right-wing populism"],
  points: [
    "Claims to speak for ordinary people",
    "Against the 'elite' or establishment",
    "Distrust of big institutions (banks, corporations, government, media, experts)",
    "Strong, plain-spoken leaders; emotional appeals",
    "Can be left or right; examples",
    "On the ideology grid: more government in the economy and support for traditional values"
  ],
  answer: [
    "<b>Populists</b> claim to speak for ordinary, hardworking people against a powerful <b>elite</b> they see as corrupt or out of touch. Common traits include:",
    "<ul><li><b>'The people vs. the elite'.</b> Politics is described as a struggle between regular citizens and powerful insiders.</li><li><b>Anti-establishment views.</b> Distrust of big institutions such as large banks, corporations, the national government, the media, or experts.</li><li><b>Strong, plain-spoken leaders</b> who say they are outsiders and talk in direct, emotional terms.</li><li><b>Appeals to working- and middle-class voters</b> who feel left behind.</li></ul>",
    "Populism can be on the left or the right. The original <b>People's Party</b> of the 1890s was made up of farmers and workers who wanted government to rein in railroads and banks; William Jennings Bryan carried many of their ideas. Today, left-leaning populists such as Senator Bernie Sanders target billionaires and Wall Street, while right-leaning populists such as Donald Trump target political, media, and cultural elites and favor limits on trade and immigration.",
    "On the four-box ideology chart used in many AP textbooks, populists favor <b>more</b> government action in the economy (like liberals) and also support government upholding traditional values (like conservatives)."
  ],
  sources: []
},
/* ───────────────────────── 36 ───────────────────────── */
{
  id: 36, topic: "turnout",
  q: "What is the most common form of political participation?",
  hints: [
    "Make a list of ways people participate in politics, from easy to hard.",
    "Which one do the largest number of Americans do? Even in a low-turnout year, more people do this than anything else.",
    "Add a sentence about the next most common forms (talking about politics, signing petitions, giving money)."
  ],
  terms: [
    { t: "Political participation", d: "Actions people take to influence government." },
    { t: "Conventional participation", d: "Routine ways of taking part, like voting or contacting officials." },
    { t: "Unconventional participation", d: "Less routine actions, such as protests or boycotts." }
  ],
  search: ["most common form of political participation", "forms of political participation"],
  points: [
    "Voting is the most common form",
    "Evidence: about 154 million voted in 2024",
    "Other forms are less common: discussing politics, petitions, donating, contacting officials, protesting, volunteering",
    "Online participation is growing"
  ],
  answer: [
    "<b>Voting</b> is the most common form of political participation in the United States. In 2024, about 154 million Americans said they voted for president, far more than take part in any other political activity.",
    "Other forms of participation are less common. They include talking about politics with others, signing petitions, giving money to candidates or causes, contacting elected officials, volunteering for campaigns, attending rallies or protests, and running for office. Many of these now happen online, such as signing a digital petition or sharing political posts.",
    "Voting is the most common because it takes relatively little time and money, happens on a regular schedule, and is widely seen as a citizen's basic duty."
  ],
  sources: [SRC.census24]
},
/* ───────────────────────── 37 ───────────────────────── */
{
  id: 37, topic: "ideology",
  q: "What are the differences among liberals, conservatives and libertarians in the United States?",
  hints: [
    "Use two questions to sort them: (1) How much should government be involved in the economy? (2) How much should government regulate personal behavior and social issues?",
    "Try making a 2x2 chart. Put each ideology where it belongs. (The fourth box is often labeled 'populist' or 'communitarian'.)",
    "Look up the libertarian idea: 'government should stay out of both your wallet and your bedroom.' Which other group agrees on the wallet part, and which on the other part?",
    "Note: 'liberal' means something different in the U.S. than in Europe."
  ],
  terms: [
    { t: "Liberal", d: "Favors more government action on economic problems and protects individual choice on social issues." },
    { t: "Conservative", d: "Favors limited government in the economy, free markets, and traditional values." },
    { t: "Libertarian", d: "Favors minimal government in both economic and personal matters." },
    { t: "Political spectrum", d: "A way of arranging political views from left to right." }
  ],
  search: ["liberal conservative libertarian differences", "political ideology grid economic personal freedom"],
  points: [
    "Two dimensions: economic and social/personal",
    "Liberals: more economic government role; more personal freedom on social issues",
    "Conservatives: less economic government role; more support for traditional values",
    "Libertarians: less government in both",
    "Examples of issues"
  ],
  answer: [
    "A helpful way to compare them is to ask two questions: How much should government be involved in the <b>economy</b>? And how much should it regulate <b>personal behavior</b> and social issues?",
    "<table class='mini'><thead><tr><th></th><th>Economy</th><th>Personal & social issues</th></tr></thead><tbody><tr><td><b>Liberals</b></td><td>More government: regulation, safety-net programs, health care</td><td>More individual choice and protection of civil rights</td></tr><tr><td><b>Conservatives</b></td><td>Less government: lower taxes, free markets</td><td>Government should uphold traditional values and order</td></tr><tr><td><b>Libertarians</b></td><td>Less government</td><td>Less government</td></tr></tbody></table>",
    "<b>Liberals</b> want government to help solve problems like poverty, lack of health coverage, and pollution, and they emphasize equality and civil rights. <b>Conservatives</b> want lower taxes, less regulation, and a strong national defense, and they often emphasize family, faith, and tradition. <b>Libertarians</b> want government as small as possible in every area: they agree with conservatives about free markets and with liberals about personal freedom.",
    "These are general patterns. Many Americans mix views from different ideologies, and the word 'liberal' in Europe usually means something closer to free-market thinking."
  ],
  sources: []
},
/* ───────────────────────── 38 ───────────────────────── */
{
  id: 38, topic: "ideology",
  q: "What are the views of those generally thought to be conservatives in modern American politics?",
  hints: [
    "Sort views into categories: economy, social issues, national security, the Constitution, and government size.",
    "What do conservatives usually think about taxes, regulation, and the size of the federal government?",
    "What about guns, religion in public life, immigration, and crime?",
    "Conservatism has different wings (fiscal, social, national-security, and populist). Do they always agree? Think about trade."
  ],
  terms: [
    { t: "Limited government", d: "The idea that government's power should be restricted." },
    { t: "Free market", d: "An economy where prices and production are set mostly by competition, not government." },
    { t: "Fiscal conservative", d: "Someone focused on low taxes, low spending, and balanced budgets." },
    { t: "Social conservative", d: "Someone focused on traditional moral and family values." },
    { t: "Originalism", d: "Interpreting the Constitution according to its original meaning." }
  ],
  search: ["conservative views American politics", "types of conservatives fiscal social"],
  points: [
    "Limited federal government; power to states",
    "Lower taxes, less regulation, free markets",
    "Traditional values; religion's role in public life",
    "Strong national defense; support for law enforcement",
    "Gun rights (Second Amendment); stricter immigration enforcement",
    "Original-meaning approach to the Constitution",
    "Different wings that sometimes disagree"
  ],
  answer: [
    "Conservatives in modern American politics generally believe in <b>limited government, free markets, and traditional values</b>. Common views include:",
    "<ul><li><b>Economy:</b> lower taxes, less government spending and regulation, and a free-market system. Many want more power left to states and individuals rather than the federal government.</li><li><b>Social issues:</b> support for traditional family and religious values. Many conservatives oppose abortion and want religion to have a respected place in public life.</li><li><b>Rights:</b> strong support for Second Amendment gun rights and religious liberty.</li><li><b>Law and security:</b> a strong military, support for police, and tough approaches to crime.</li><li><b>Immigration:</b> stricter border security and enforcement of immigration laws.</li><li><b>Constitution:</b> interpreting it by its original meaning and opposing judges making policy.</li></ul>",
    "Conservatism has different wings. <i>Fiscal</i> conservatives focus on taxes and spending, <i>social</i> conservatives on moral issues, and <i>national-security</i> conservatives on defense. In recent years a more <i>populist</i> wing has favored tariffs on imports and more caution about foreign wars, which differs from older conservatives' support for free trade."
  ],
  sources: []
},
/* ───────────────────────── 39 ───────────────────────── */
{
  id: 39, topic: "social",
  q: "How does region affect public opinion in the U.S.?",
  hints: [
    "Look at an electoral map. Which regions usually vote Republican and which usually vote Democratic?",
    "The South changed over time. Look up the 'Solid South' and how it shifted parties from the 1960s on.",
    "Why might regions differ? Think about history, religion, the economy (farming, manufacturing, tech), and who lives there.",
    "Today, many experts say the urban–rural divide matters even more than region. Explain what that means."
  ],
  terms: [
    { t: "Solid South", d: "The South's long-time loyalty to the Democratic Party, from the 1870s until the civil rights era." },
    { t: "Realignment", d: "A lasting shift in which groups support which party." },
    { t: "Urban–rural divide", d: "The split in political views between people in cities and people in the countryside." },
    { t: "Swing state", d: "A state where either party could win." }
  ],
  search: ["regional differences public opinion United States", "Solid South realignment", "urban rural political divide"],
  points: [
    "South: more conservative and religious; shifted from Democratic to Republican",
    "Northeast and West Coast: more liberal",
    "Midwest: mixed and swing states; Mountain West: independent streak",
    "Reasons: history, religion, economy, demographics",
    "Urban–rural divide often bigger than regional divide"
  ],
  answer: [
    "Where people live is linked to their political views. Regions differ because of their history, religious traditions, economies, and the kinds of people who live there.",
    "<ul><li><b>The South</b> tends to be more conservative and more religious. It was solidly Democratic for almost a century after the Civil War, but after the civil rights era it gradually became the most Republican region.</li><li><b>The Northeast and West Coast</b> tend to be more liberal and vote mostly Democratic.</li><li><b>The Midwest</b> is mixed and includes several swing states, like Michigan and Wisconsin.</li><li><b>The Mountain West</b> has a streak of independence and support for limited government, though some states there have become more competitive.</li></ul>",
    "Today many political scientists say the bigger divide is between <b>cities and rural areas</b>. Big cities in every region lean Democratic, rural areas lean Republican, and suburbs are often the battleground. So a voter in rural Oregon may have more in common politically with a voter in rural Alabama than with someone in Portland."
  ],
  sources: []
},
/* ───────────────────────── 40 ───────────────────────── */
{
  id: 40, topic: "culture",
  q: "Define political culture.",
  hints: [
    "Two key ideas: widely shared, and about how government and politics should work.",
    "Give two or three examples of American political culture (see question 45).",
    "One textbook defines it as a 'patterned and sustained way of thinking about how political and economic life ought to be carried out'."
  ],
  terms: [
    { t: "Political culture", d: "The widely shared beliefs, values, and habits a society has about government and politics." },
    { t: "Core values", d: "Basic principles most citizens agree on." },
    { t: "Norms", d: "Unwritten rules of acceptable behavior." }
  ],
  search: ["political culture definition", "American political culture core values"],
  points: [
    "Widely shared beliefs and values",
    "About how government and politics should work and how citizens relate to it",
    "Passed down through socialization",
    "U.S. examples: liberty, equality, democracy, individualism, rule of law"
  ],
  answer: [
    "<b>Political culture</b> is the set of widely shared beliefs, values, and habits that people in a country hold about government, politics, and how citizens should relate to each other. It's a society's common sense about how public life should work.",
    "Political culture is passed from one generation to the next through political socialization. In the United States it includes values like liberty, equality, democracy, individualism, and the rule of law, ideas most Americans accept even when they disagree about specific policies."
  ],
  sources: []
},
/* ───────────────────────── 41 ───────────────────────── */
{
  id: 41, topic: "ideology",
  q: "What are the views of those generally thought to be liberals in modern American politics?",
  hints: [
    "Use the same categories as question 38 so you can compare: economy, social issues, rights, security, immigration, the Constitution.",
    "What do liberals usually think government should do about health care, poverty, and the environment?",
    "What are liberal positions on civil rights, abortion, and gun regulation?",
    "Liberals have different wings too, such as moderates and progressives. How do they differ?"
  ],
  terms: [
    { t: "Liberal (U.S.)", d: "Someone who favors an active government to address social and economic problems and protect civil rights." },
    { t: "Progressive", d: "A liberal who favors bigger and faster changes." },
    { t: "Social safety net", d: "Government programs that help people in need, such as Medicaid and food assistance." },
    { t: "Regulation", d: "Government rules businesses must follow." }
  ],
  search: ["liberal views American politics", "progressive vs moderate Democrats"],
  points: [
    "Active government to solve economic and social problems",
    "Safety net, expanded health coverage, higher taxes on the wealthy",
    "Business and environmental regulation, including climate action",
    "Civil rights and protections for minority groups; abortion rights",
    "Stricter gun laws; immigration reform with a path to citizenship",
    "Different wings: moderates and progressives"
  ],
  answer: [
    "Liberals in modern American politics generally believe government should <b>actively work to solve social and economic problems</b> and protect equal rights. Common views include:",
    "<ul><li><b>Economy:</b> a strong social safety net, expanding access to health care, a higher minimum wage, and higher taxes on the wealthy and corporations to pay for programs.</li><li><b>Regulation:</b> rules on businesses to protect workers, consumers, and the environment, including action on climate change.</li><li><b>Civil rights:</b> strong protections against discrimination based on race, gender, sexual orientation, and gender identity.</li><li><b>Social issues:</b> support for abortion rights and keeping government out of personal decisions.</li><li><b>Guns:</b> stricter gun laws, such as universal background checks.</li><li><b>Immigration:</b> border security combined with a path to citizenship for some undocumented immigrants.</li><li><b>Justice:</b> reforms to policing and the criminal justice system.</li></ul>",
    "Liberals have different wings. <i>Moderates</i> prefer step-by-step changes, while <i>progressives</i> push for bigger changes, such as government-run health insurance for everyone."
  ],
  sources: []
},
/* ───────────────────────── 42 ───────────────────────── */
{
  id: 42, topic: "culture",
  q: "What is the difference between a conflictual and a consensual political culture?",
  hints: [
    "'Consensus' means general agreement. 'Conflict' means disagreement. But agreement or disagreement about what exactly?",
    "Key idea: in a consensual culture, people can argue a lot about policies but still agree on the basic rules. What are 'basic rules'? (Who has the right to govern, accepting election results.)",
    "Which kind of culture has the U.S. usually been described as? Is there a big exception in U.S. history?",
    "Some people argue the U.S. is becoming more conflictual today. What evidence could you use?"
  ],
  terms: [
    { t: "Consensual political culture", d: "People may disagree on policies but agree on the basic rules of government and its legitimacy." },
    { t: "Conflictual political culture", d: "People are deeply divided on basic questions, such as who should govern or whether the system is legitimate." },
    { t: "Legitimacy", d: "Widespread acceptance that the government has the right to rule." },
    { t: "Peaceful transfer of power", d: "Handing over power to election winners without violence." }
  ],
  search: ["consensual vs conflictual political culture", "political culture legitimacy consensus"],
  points: [
    "Consensual: disagree on policies, agree on basic rules and legitimacy",
    "Conflictual: disagree on fundamentals; can lead to instability or violence",
    "The U.S. is usually considered consensual (Civil War as major exception)",
    "Examples of conflictual cultures",
    "Debate over whether polarization is moving the U.S. toward conflict"
  ],
  answer: [
    "In a <b>consensual political culture</b>, people may disagree, sometimes strongly, about policies, but they agree on the <b>basic rules</b>: how leaders are chosen, that the government has the right to rule, and that losers accept the results of fair elections. Disagreements are settled through voting, courts, and debate.",
    "In a <b>conflictual political culture</b>, people disagree about the fundamentals themselves: who should govern, whether the system is legitimate, or even whether the country should stay together. These divisions can lead to instability, unrest, or civil war. Countries split sharply along religious, ethnic, or class lines have often had conflictual political cultures.",
    "The United States is usually described as having a <b>consensual</b> political culture. Americans argue about many issues, but most accept the Constitution and elections. The biggest exception was the Civil War, when the country split over slavery and secession. Today some observers worry that rising polarization and declining trust are pushing the U.S. in a more conflictual direction, while others note that elections are still held and power is still transferred under the Constitution."
  ],
  sources: []
},
/* ───────────────────────── 43 ───────────────────────── */
{
  id: 43, topic: "turnout",
  q: "How can the U.S. improve voting turnout?",
  hints: [
    "Go back to question 6. For each reason turnout is low, think of a fix.",
    "Look up 'automatic voter registration' and 'same-day registration'. Which states use them?",
    "What about making Election Day a holiday, or voting on weekends? What do other countries do? (Look up Australia's compulsory voting.)",
    "Show that these ideas are debated. What concerns do critics raise about some proposals?"
  ],
  terms: [
    { t: "Automatic voter registration (AVR)", d: "Eligible citizens are registered when they interact with government offices like the DMV, unless they opt out." },
    { t: "Same-day registration", d: "Registering and voting on the same day." },
    { t: "Compulsory voting", d: "Laws requiring citizens to vote, as in Australia." },
    { t: "Pre-registration", d: "Allowing 16- and 17-year-olds to sign up so they are ready to vote at 18." },
    { t: "Civic education", d: "Teaching students how government works and how to participate." }
  ],
  search: ["ways to increase voter turnout", "automatic voter registration states", "Australia compulsory voting turnout"],
  points: [
    "Easier registration: automatic, same-day, pre-registration",
    "More convenient voting: early voting, mail voting, holiday or weekend voting",
    "Civic education and outreach to young voters",
    "More competitive elections; fewer, consolidated election dates",
    "Bold ideas like compulsory voting (Australia)",
    "Notes debates about cost, security, and effectiveness"
  ],
  answer: [
    "There are many proposals to raise turnout. Most aim to make voting <b>easier</b> or make people <b>more interested</b>.",
    "<ul><li><b>Make registering easier.</b> Automatic voter registration signs people up when they visit the DMV or other offices unless they opt out. Oregon started it in 2016, and many states now use it. Same-day registration and pre-registering 16- and 17-year-olds also help.</li><li><b>Make voting more convenient.</b> Expand early voting and mail voting, or make Election Day a holiday or move it to a weekend.</li><li><b>Hold fewer elections.</b> Combining local elections with state and national ones on the same date can raise turnout in local races.</li><li><b>Teach civics.</b> Better civic education and outreach can build the habit of voting early in life.</li><li><b>Make races more competitive.</b> People are more likely to vote when they think the result is in doubt.</li><li><b>Require voting.</b> Australia fines people who don't vote, and its turnout is around 90 percent. Many Americans see this as too much government pressure.</li></ul>",
    "These ideas are debated. Supporters say they remove unnecessary barriers. Critics raise concerns about cost, accuracy of voter lists, and election security, and some research finds that convenience changes raise turnout only modestly. Most experts agree that interest and motivation matter as much as rules."
  ],
  sources: []
},
/* ───────────────────────── 44 ───────────────────────── */
{
  id: 44, topic: "social",
  q: "Is there a political gender gap in the United States? Explain.",
  hints: [
    "Yes. Your job is to explain what it is, when it started, and how big it is now.",
    "Define 'gender gap': the difference between how men and women vote. Since about 1980, which party have women favored more than men?",
    "Find the 2024 numbers. Rutgers' Center for American Women and Politics (CAWP) and Pew Research both have them.",
    "There's also a turnout gender gap. Who votes at a higher rate, men or women?",
    "What issues help explain the gap?"
  ],
  terms: [
    { t: "Gender gap", d: "The difference between how women and men vote or think about issues." },
    { t: "Turnout gap", d: "The difference in how often two groups vote." },
    { t: "Exit poll", d: "A survey of voters after they vote." }
  ],
  search: ["gender gap 2024 election CAWP", "women vote more than men turnout Census 2024"],
  points: [
    "Yes; defines the gender gap",
    "Women have voted more Democratic than men since 1980",
    "2024 numbers (about a 9–10 point gap in support for Trump)",
    "Women also vote at higher rates than men",
    "Possible reasons: views on the safety net, health care, abortion, use of force",
    "Gap may be larger among young voters"
  ],
  answer: [
    "Yes. The <b>gender gap</b> is the difference between how women and men vote and what they think about issues. Since about 1980, women have been more likely than men to vote for Democrats, and men more likely to vote for Republicans.",
    "The gap was clear in 2024. According to exit polls reviewed by Rutgers University's Center for American Women and Politics, about 55 percent of men but only about 45 percent of women voted for Donald Trump, a gap of about 10 points. Pew Research's study of verified voters found a similar result: men favored Trump by about 12 points, while women favored Kamala Harris by about 7.",
    "There is also a <b>turnout</b> gender gap. Women have voted at higher rates than men in every presidential election since 1980. In 2024, about 67 percent of women citizens voted, compared with about 64 percent of men.",
    "Researchers point to different views on issues to explain the gap. On average, women are more supportive of government programs like health care and the social safety net, more supportive of abortion rights, and more cautious about military force. Some recent surveys suggest the gap may be especially large among young voters."
  ],
  sources: [SRC.cawp, SRC.pewVote, SRC.census24]
},
/* ───────────────────────── 45 ───────────────────────── */
{
  id: 45, topic: "culture",
  q: "List the core values of political culture in the U.S.",
  hints: [
    "Start with the Declaration of Independence. Which values does it name in its most famous sentence?",
    "Most textbooks list about five to seven values. Look for: liberty, equality, democracy, individualism, rule of law, civic duty, limited government.",
    "For each value, write one short line on what it means. Some, like equality, have more than one meaning (see question 29)."
  ],
  terms: [
    { t: "Liberty", d: "Freedom to act and think without unnecessary government control." },
    { t: "Equality", d: "Equal political rights and equal opportunity, along with equal treatment under the law." },
    { t: "Democracy", d: "Government by the people, through elections and majority rule with minority rights." },
    { t: "Individualism", d: "Belief in personal responsibility and self-reliance." },
    { t: "Rule of law", d: "Everyone, including leaders, must follow the law." },
    { t: "Civic duty", d: "The responsibility of citizens to participate in community and government." }
  ],
  search: ["core values American political culture", "American political culture liberty equality democracy individualism"],
  points: [
    "Liberty", "Equality (political equality and equal opportunity)", "Democracy / popular sovereignty",
    "Individualism and personal responsibility", "Rule of law", "Civic duty",
    "Also often listed: limited government, free enterprise"
  ],
  answer: [
    "The core values of American political culture include:",
    "<ul><li><b>Liberty:</b> people should be free to speak, worship, and live as they choose, with limited government interference.</li><li><b>Equality:</b> all people have equal rights, equal treatment under the law, an equal vote, and an equal opportunity to succeed.</li><li><b>Democracy:</b> government gets its power from the people (popular sovereignty) through elections, with majority rule balanced by minority rights.</li><li><b>Individualism:</b> people are responsible for their own choices and success.</li><li><b>Rule of law:</b> everyone, including the most powerful leaders, must obey the law.</li><li><b>Civic duty:</b> citizens should take part in public life by voting, serving on juries, and staying informed.</li><li><b>Limited government and free enterprise:</b> government power should be restricted, and a market economy is widely supported.</li></ul>",
    "Americans broadly share these values, but they often disagree about how to apply them, which is where ideology comes in."
  ],
  sources: []
},
/* ───────────────────────── 46 ───────────────────────── */
{
  id: 46, topic: "ideology",
  q: "Is there a section in the Constitution that covers political parties and how they can be formed?",
  hints: [
    "Search the full text of the Constitution for the word 'party'. What do you find?",
    "What did George Washington say about parties in his Farewell Address (1796)? What did Madison call them in Federalist No. 10?",
    "If the Constitution doesn't cover them, where do the rules for parties come from? Think about state laws and the First Amendment's freedom of association.",
    "Bonus: the 12th Amendment (1804) was passed partly because of a problem parties caused in the election of 1800."
  ],
  terms: [
    { t: "Political party", d: "An organized group that tries to win elections and control government." },
    { t: "Faction", d: "Madison's word for a group pursuing its own interests against others or the common good." },
    { t: "Freedom of association", d: "The right, protected by the First Amendment, to join with others in groups." },
    { t: "12th Amendment", d: "1804 amendment that had electors cast separate votes for president and vice president." }
  ],
  search: ["does the Constitution mention political parties", "Washington Farewell Address parties", "Federalist 10 factions"],
  points: [
    "No: the Constitution never mentions political parties",
    "Founders distrusted parties/factions (Washington, Madison)",
    "Parties formed anyway in the 1790s (Federalists vs. Democratic-Republicans)",
    "Rules come from state laws, federal election laws, and court rulings",
    "First Amendment freedom of association protects forming parties",
    "12th Amendment as an indirect response to parties"
  ],
  answer: [
    "<b>No.</b> The Constitution does not mention political parties at all, and it has no section explaining how they can be formed.",
    "Many founders distrusted parties. James Madison warned about the dangers of 'factions' in Federalist No. 10, and George Washington's Farewell Address (1796) warned against 'the spirit of party'. Even so, parties formed almost immediately: by the 1790s, Alexander Hamilton's Federalists and Thomas Jefferson's Democratic-Republicans were competing.",
    "Because the Constitution is silent, the rules for parties come from other places. <b>State laws</b> set how parties get on the ballot and how primaries work. <b>Federal laws</b> regulate campaign money. <b>Court decisions</b> have recognized that the First Amendment's freedoms of speech and assembly protect people's right to associate and form parties.",
    "Parties did affect the Constitution indirectly. In the election of 1800, Jefferson and his running mate Aaron Burr tied in the Electoral College. The <b>12th Amendment</b> (1804) fixed this by having electors vote separately for president and vice president."
  ],
  sources: [SRC.constit, SRC.fed10]
},
/* ───────────────────────── 47 ───────────────────────── */
{
  id: 47, topic: "ideology",
  q: "What does it mean to have a partisan, bipartisan, and nonpartisan government?",
  hints: [
    "Look at the root word in all three: 'partisan' comes from 'party'. Then think about what the prefixes 'bi-' and 'non-' mean.",
    "Find one real example of each. For bipartisan, look for a recent law that passed with many votes from both parties.",
    "For nonpartisan, look at local elections (school board, city council) and Nebraska's state legislature.",
    "Explain why each one might be good or bad for getting things done."
  ],
  terms: [
    { t: "Partisan", d: "Strongly favoring one political party; acting mainly for that party." },
    { t: "Bipartisan", d: "Involving cooperation and agreement between the two major parties." },
    { t: "Nonpartisan", d: "Not connected to or influenced by any political party." },
    { t: "Party-line vote", d: "A vote where nearly all members of each party vote with their party." },
    { t: "Gridlock", d: "When government can't act because the sides won't agree." }
  ],
  search: ["partisan bipartisan nonpartisan meaning", "Nebraska nonpartisan unicameral legislature", "bipartisan infrastructure law 2021 Senate vote"],
  points: [
    "Partisan: driven by one party; party-line votes",
    "Bipartisan: both major parties cooperate",
    "Nonpartisan: no party involvement",
    "Examples of each",
    "Effects: partisanship can cause gridlock; bipartisanship helps pass lasting laws"
  ],
  answer: [
    "All three words come from <i>party</i>.",
    "<b>Partisan</b> means strongly favoring one political party. A partisan government or decision is driven mostly by one party's goals. A <i>party-line vote</i>, where nearly every member of one party votes yes and nearly every member of the other votes no, is partisan. High partisanship can lead to gridlock when the parties share power.",
    "<b>Bipartisan</b> means the two major parties work together. A bipartisan law gets significant support from both Democrats and Republicans. For example, the 2021 Infrastructure Investment and Jobs Act passed the Senate 69 to 30, with votes from both parties. Bipartisan laws are often seen as more stable because both sides have a stake in them.",
    "<b>Nonpartisan</b> means not connected to any party at all. Many city council and school board elections are nonpartisan, with no party labels on the ballot. Nebraska's one-house state legislature is officially nonpartisan. Some government agencies, like the Congressional Budget Office and the Census Bureau, are designed to be nonpartisan so they give neutral information."
  ],
  sources: []
}
];
