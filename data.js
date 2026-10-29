// Conference data. Each deadline: date (YYYY-MM-DD), time (HH:MM, default 23:59), tz ('AoE' | 'UTC' | IANA zone),
// status: 'announced' (official site) | 'provisional' (tentative / third-party listing) | 'estimated' (from last year's pattern)
// Last checked: 30 Oct 2026
window.LAST_CHECKED = "2026-10-30";
window.TOPICS = {
  aied:  { label: "AI in education",            color: "#0F8A7E" },
  la:    { label: "Learning analytics & EDM",   color: "#4C57C9" },
  ls:    { label: "Learning sciences & CSCL",   color: "#B87A0B" },
  csed:  { label: "Computing education",        color: "#C03E66" },
  cci:   { label: "Children & HCI",             color: "#8A4CC4" },
  tel:   { label: "Technology-enhanced learning", color: "#3E7A3A" },
  edres: { label: "Education research",         color: "#8B5A3A" },
  engd:  { label: "Engineering education",      color: "#2F6F9F" },
  stem:  { label: "STEM education",             color: "#C4561E" },
  comp:  { label: "Comparative & international education", color: "#5B6B7F" }
};
window.CONFERENCES = [
  {
    id: "lak27", country: "Brazil", start: "2027-03-08", short: "LAK", year: 2027, name: "International Conference on Learning Analytics & Knowledge",
    topics: ["la"], region: "Americas", place: "Recife, Brazil", dates: "8–12 Mar 2027",
    url: "https://www.solaresearch.org/events/lak/lak27/general-call/",
    note: "Research papers will be published as a Journal of Learning Analytics special issue (trial for 2027).",
    deadlines: [
      { label: "Research abstracts", date: "2026-09-21", status: "announced" },
      { label: "Full & short papers", date: "2026-09-28", status: "announced" },
      { label: "Doctoral consortium", date: "2026-10-13", status: "announced" },
      { label: "Practitioner reports", date: "2026-10-22", status: "announced" },
      { label: "AI Agents Academy", date: "2026-10-27", status: "announced" },
      { label: "Posters & demos", date: "2026-11-09", status: "announced" },
      { label: "Workshop papers", date: "2026-12-04", status: "announced", note: "Individual workshops may set their own dates." }
    ]
  },
  {
    id: "isls27", country: "India", start: "2027-06-12", short: "ISLS", year: 2027, name: "ISLS Annual Meeting (ICLS + CSCL)",
    topics: ["ls"], region: "Asia", place: "IIT Bombay, Mumbai, India", dates: "12–16 Jun 2027",
    url: "https://2027.isls.org/",
    deadlines: [
      { label: "Draft submissions (title, abstract)", date: "2026-10-09", status: "announced" },
      { label: "Final papers, posters, symposia", date: "2026-10-21", status: "announced" },
      { label: "Interactive tools & demos", date: "2026-12-06", status: "announced" }
    ]
  },
  {
    id: "csedu27", country: "Italy", start: "2027-04-16", short: "CSEDU", year: 2027, name: "International Conference on Computer Supported Education",
    topics: ["tel"], region: "Europe", place: "Rome, Italy", dates: "Apr 2027",
    url: "https://csedu.scitevents.org/",
    deadlines: [ { label: "Regular papers", date: "2026-11-17", status: "provisional", note: "Listed by a CFP aggregator; confirm on the official site." } ]
  },
  {
    id: "educon27", country: "Romania", start: "2027-04-06", short: "EDUCON", year: 2027, name: "IEEE Global Engineering Education Conference",
    topics: ["engd"], region: "Europe", place: "Timișoara, Romania", dates: "6–9 Apr 2027",
    url: "https://educon-conference.org/2027",
    deadlines: [ { label: "Preliminary papers", date: "2026-11-10", status: "estimated", note: "Based on EDUCON 2026 (10 Nov). Abstract stage was earlier." } ]
  },
  {
    id: "earli27", country: "TBA", start: "2027-08-31", short: "EARLI", year: 2027, name: "EARLI Biennial Conference",
    topics: ["edres", "ls"], region: "Europe", place: "Venue TBA", dates: "Aug/Sep 2027",
    url: "https://www.earli.org/",
    deadlines: [ { label: "Proposals", date: "2026-11-05", time: "23:59", tz: "Europe/Brussels", status: "estimated", note: "EARLI 2025 closed 5 Nov (midnight CET)." } ]
  },
  {
    id: "gccce27", country: "Singapore", start: "2027-05-31", short: "GCCCE", year: 2027, name: "Global Chinese Conference on Computers in Education",
    topics: ["tel"], region: "Asia", place: "Singapore", dates: "from 31 May 2027",
    url: "https://easychair.org/cfp/topic?tid=235916",
    deadlines: [ { label: "Papers", date: "2026-12-15", status: "announced" } ]
  },
  {
    id: "iticse27", country: "United Kingdom", start: "2027-07-12", short: "ITiCSE", year: 2027, name: "ACM Innovation and Technology in Computer Science Education",
    topics: ["csed"], region: "Europe", place: "University of Glasgow, Scotland", dates: "12–14 Jul 2027",
    url: "https://iticse.acm.org/2027/",
    deadlines: [
      { label: "Abstracts (mandatory)", date: "2027-01-11", status: "provisional" },
      { label: "Full papers", date: "2027-01-18", status: "provisional" }
    ]
  },
  {
    id: "icalt27", country: "Germany", start: "2027-07-19", short: "ICALT", year: 2027, name: "IEEE International Conference on Advanced Learning Technologies",
    topics: ["tel"], region: "Europe", place: "FH Dortmund, Germany", dates: "19–22 Jul 2027",
    url: "https://tc.computer.org/tclt/icalt-2027/",
    note: "ICALT has extended its deadline by 2–4 weeks in most recent years.",
    deadlines: [ { label: "All papers (full, short, discussion, DC)", date: "2027-01-15", status: "announced" } ]
  },
  {
    id: "idc27", country: "United States", start: "2027-06-21", short: "IDC", year: 2027, name: "ACM Interaction Design and Children",
    topics: ["cci"], region: "Americas", place: "Seattle, USA", dates: "from 21 Jun 2027",
    url: "https://idc.acm.org/",
    deadlines: [ { label: "Full & short papers", date: "2027-01-18", status: "estimated", note: "IDC has usually closed in mid-to-late January." } ]
  },
  {
    id: "asee27", country: "Canada", start: "2027-06-20", short: "ASEE", year: 2027, name: "ASEE Annual Conference & Exposition",
    topics: ["engd"], region: "Americas", place: "Toronto, Canada", dates: "20–23 Jun 2027",
    url: "https://www.asee.org/events/2027-Annual-Conference-Exposition/Paper-Management/Call-for-Papers",
    deadlines: [ { label: "Draft papers", date: "2027-01-20", status: "provisional", note: "Date from one division's call; divisions can differ." } ]
  },
  {
    id: "aied27", country: "Australia", start: "2027-07-18", short: "AIED", year: 2027, name: "International Conference on Artificial Intelligence in Education",
    topics: ["aied"], region: "Oceania", place: "Adelaide, Australia (Festival of Learning)", dates: "18–23 Jul 2027",
    url: "https://iaied.org/",
    deadlines: [ { label: "Full & short papers", date: "2027-02-01", status: "estimated", note: "AIED 2026 closed 2 Feb; 2025 on 19 Feb." } ]
  },
  {
    id: "las27", country: "Australia", start: "2027-07-18", short: "L@S", year: 2027, name: "ACM Conference on Learning @ Scale",
    topics: ["la", "tel"], region: "Oceania", place: "Adelaide, Australia (Festival of Learning)", dates: "18–23 Jul 2027",
    url: "https://learningatscale.hosting.acm.org/",
    deadlines: [
      { label: "Abstracts", date: "2027-02-08", status: "estimated", note: "L@S 2026: abstracts 9 Feb, papers 16 Feb." },
      { label: "Research papers", date: "2027-02-15", status: "estimated" }
    ]
  },
  {
    id: "edm27", country: "Australia", start: "2027-07-18", short: "EDM", year: 2027, name: "International Conference on Educational Data Mining",
    topics: ["la"], region: "Oceania", place: "Adelaide, Australia (Festival of Learning)", dates: "18–23 Jul 2027",
    url: "https://educationaldatamining.org/",
    deadlines: [
      { label: "Abstracts", date: "2027-02-12", status: "estimated", note: "EDM 2025: abstracts 13 Feb, papers a week later." },
      { label: "Full & short papers", date: "2027-02-19", status: "estimated" }
    ]
  },
  {
    id: "fie27", country: "TBA", start: "2027-10-15", short: "FIE", year: 2027, name: "IEEE Frontiers in Education",
    topics: ["engd", "csed"], region: "TBA", place: "Venue TBA", dates: "Oct 2027",
    url: "https://fie-conference.org/",
    deadlines: [ { label: "Abstracts", date: "2027-02-01", status: "estimated", note: "FIE 2026 abstracts closed 2 Feb (extended)." } ]
  },
  {
    id: "aect27", country: "TBA", start: "2027-10-20", short: "AECT", year: 2027, name: "AECT International Convention",
    topics: ["tel", "edres"], region: "Americas", place: "Venue TBA", dates: "Autumn 2027",
    url: "https://aect.org/",
    deadlines: [ { label: "Proposals", date: "2027-02-16", status: "estimated", note: "AECT 2026 proposals closed 16 Feb." } ]
  },
  {
    id: "icer27", country: "TBA", start: "2027-08-10", short: "ICER", year: 2027, name: "ACM International Computing Education Research",
    topics: ["csed"], region: "TBA", place: "Venue TBA", dates: "Aug 2027",
    url: "https://icer.acm.org/",
    deadlines: [
      { label: "Abstracts", date: "2027-03-12", status: "estimated", note: "ICER moved its deadlines 3–4 weeks earlier in 2026 and expects to keep that." },
      { label: "Research papers", date: "2027-03-19", status: "estimated" }
    ]
  },
  {
    id: "ectel27", country: "TBA", start: "2027-09-15", short: "EC-TEL", year: 2027, name: "European Conference on Technology Enhanced Learning",
    topics: ["tel"], region: "Europe", place: "Venue TBA", dates: "Sep 2027",
    url: "https://ea-tel.eu/",
    deadlines: [
      { label: "Abstracts (mandatory)", date: "2027-03-15", status: "estimated", note: "Recent editions: abstracts mid-March, full papers two weeks later." },
      { label: "Full papers", date: "2027-03-29", status: "estimated" }
    ]
  },
  {
    id: "comped27", country: "Brazil", start: "2027-10-01", short: "CompEd", year: 2027, name: "ACM Global Computing Education Conference",
    topics: ["csed"], region: "Americas", place: "São Paulo, Brazil", dates: "Oct 2027",
    url: "https://sigcse.org/",
    deadlines: [
      { label: "Abstracts", date: "2027-03-17", status: "estimated", note: "CompEd 2025: abstracts 17 Mar, papers 24 Mar." },
      { label: "Full papers", date: "2027-03-24", status: "estimated" }
    ]
  },
  {
    id: "bea27", country: "TBA", start: "2027-07-31", short: "BEA", year: 2027, name: "Workshop on Innovative Use of NLP for Building Educational Applications (at ACL)",
    topics: ["aied"], region: "TBA", place: "With ACL 2027", dates: "31 Jul 2027",
    url: "https://sig-edu.org/",
    deadlines: [ { label: "Papers", date: "2027-04-17", status: "estimated", note: "Based on the 2025 deadline (17 Apr)." } ]
  },
  {
    id: "aera28", country: "TBA", start: "2028-04-15", short: "AERA", year: 2028, name: "AERA Annual Meeting",
    topics: ["edres"], region: "TBA", place: "Venue TBA", dates: "Apr 2028",
    url: "https://www.aera.net/",
    deadlines: [ { label: "Paper & session submissions", date: "2027-07-23", status: "estimated", note: "AERA 2027 closed 24 Jul 2026." } ]
  },
  {
    id: "cesi27", country: "India", start: "2027-11-20", short: "CESI", year: 2027, name: "Annual International Conference of the Comparative Education Society of India",
    topics: ["comp", "edres"], region: "Asia", place: "Venue TBA, India", dates: "Nov/Dec 2027",
    url: "https://www.cesindia.net/",
    deadlines: [ { label: "Abstracts", date: "2027-07-25", status: "estimated", note: "CESI 2026 abstracts closed 25 Jul 2026 (extended)." } ]
  },
  {
    id: "cies28", country: "TBA", start: "2028-03-15", short: "CIES", year: 2028, name: "Comparative and International Education Society Annual Conference",
    topics: ["comp"], region: "Americas", place: "Venue TBA", dates: "Spring 2028",
    url: "https://conference.cies.us/",
    deadlines: [ { label: "All proposals", date: "2027-09-02", time: "23:59", tz: "America/New_York", status: "estimated", note: "Recent CIES deadlines: 10 Sep 2024, 26 Aug 2025, 3 Sep 2026. No extensions are given." } ]
  },
  {
    id: "ecer27", country: "Hungary", start: "2027-08-30", short: "ECER", year: 2027, name: "European Conference on Educational Research (EERA)",
    topics: ["edres", "comp"], region: "Europe", place: "Debrecen, Hungary", dates: "from 30 Aug 2027",
    url: "https://eera-ecer.de/",
    deadlines: [ { label: "Papers, posters & symposia", date: "2027-01-31", status: "estimated", note: "ECER usually closes on 31 Jan; 2026 was extended to 1 Feb." } ]
  },
  {
    id: "bera27", country: "United Kingdom", start: "2027-09-07", short: "BERA", year: 2027, name: "British Educational Research Association Annual Conference",
    topics: ["edres"], region: "Europe", place: "Venue TBA, UK", dates: "Sep 2027",
    url: "https://www.bera.ac.uk/",
    deadlines: [ { label: "Abstracts", date: "2027-01-31", tz: "Europe/London", status: "estimated", note: "BERA abstracts have closed on 31 January every recent year." } ]
  },
  {
    id: "pme50", country: "Japan", start: "2027-07-19", short: "PME", year: 2027, name: "Conference of the International Group for the Psychology of Mathematics Education (PME 50)",
    topics: ["stem"], region: "Asia", place: "Tokyo, Japan", dates: "Jul 2027",
    url: "https://pme50-tokyo.jp/",
    deadlines: [
      { label: "Research forum proposals & pre-submission support", date: "2026-12-01", status: "announced" },
      { label: "Research reports & oral communications", date: "2027-01-15", status: "estimated", note: "PME research reports usually close mid-January." }
    ]
  },
  {
    id: "is2tem27", country: "Singapore", start: "2027-06-01", short: "IS²TEM", year: 2027, name: "International Science and STEM Education Conference",
    topics: ["stem"], region: "Asia", place: "NIE, NTU Singapore", dates: "1–4 Jun 2027",
    url: "https://is2tem-singapore.org/conference2027/",
    deadlines: [
      { label: "Abstract registration", date: "2027-01-18", status: "announced" },
      { label: "Full papers", date: "2027-03-31", status: "announced" }
    ]
  },
  {
    id: "esera27", country: "Spain", start: "2027-08-30", short: "ESERA", year: 2027, name: "European Science Education Research Association Conference",
    topics: ["stem"], region: "Europe", place: "Málaga, Spain", dates: "30 Aug – 3 Sep 2027",
    url: "https://www.esera.org/conference-2027",
    deadlines: [ { label: "Proposals", date: "2027-01-31", status: "estimated", note: "Call not yet published; this is a rough placeholder. Check the ESERA site." } ]
  },
  {
    id: "eesd27", country: "Finland", start: "2027-06-14", short: "EESD", year: 2027, name: "International Conference on Engineering Education for Sustainable Development",
    topics: ["engd", "stem"], region: "Europe", place: "Turku, Finland", dates: "14–17 Jun 2027",
    url: "https://www.turkuamk.fi/en/event/engineering-for-sustainable-development-eesd2027/",
    deadlines: [
      { label: "Abstracts", date: "2026-10-15", status: "announced" },
      { label: "Full papers", date: "2027-02-15", status: "announced" }
    ]
  },
  {
    id: "narst28", country: "TBA", start: "2028-04-01", short: "NARST", year: 2028, name: "NARST Annual International Conference (science education)",
    topics: ["stem"], region: "Americas", place: "Venue TBA", dates: "Spring 2028",
    url: "https://narst.org/",
    deadlines: [ { label: "Proposals", date: "2027-08-15", time: "17:00", tz: "America/New_York", status: "estimated", note: "NARST 2027 closed 15 Aug 2026, 5 pm in the submitter's local time." } ]
  },
  // Recently closed (shown with "Show passed")
  {
    id: "cesi26", country: "India", start: "2026-11-19", short: "CESI", year: 2026, name: "Annual International Conference of the Comparative Education Society of India",
    topics: ["comp", "edres"], region: "Asia", place: "Aligarh Muslim University, India", dates: "19–21 Nov 2026",
    url: "https://www.cesindia.net/cesi-conference-2026.html",
    deadlines: [ { label: "Abstracts (extended)", date: "2026-07-25", status: "announced" } ]
  },
  {
    id: "episteme11", country: "India", start: "2027-01-05", short: "epiSTEME", year: 2027, name: "epiSTEME 11: Review of Research in Science, Technology and Mathematics Education",
    topics: ["stem"], region: "Asia", place: "HBCSE-TIFR, Mumbai, India", dates: "5–8 Jan 2027",
    url: "https://episteme11.hbcse.tifr.res.in/",
    deadlines: [ { label: "Full papers (extended)", date: "2026-07-15", status: "announced" } ]
  },
  {
    id: "narst27", country: "United States", start: "2027-03-14", short: "NARST", year: 2027, name: "NARST 100th Annual International Conference (science education)",
    topics: ["stem"], region: "Americas", place: "Boston, USA", dates: "14–17 Mar 2027",
    url: "https://narst.org/announce/2027-conference-call-for-proposals",
    deadlines: [ { label: "Proposals", date: "2026-08-15", time: "17:00", tz: "America/New_York", status: "announced", note: "Deadline was 5 pm in the submitter's local time." } ]
  },
  {
    id: "cies27", country: "TBA", start: "2027-03-15", short: "CIES", year: 2027, name: "Comparative and International Education Society Annual Conference",
    topics: ["comp"], region: "Americas", place: "See CIES site", dates: "Spring 2027",
    url: "https://conference.cies.us/",
    deadlines: [ { label: "All proposals", date: "2026-09-03", time: "23:59", tz: "America/New_York", status: "announced" } ]
  },
  {
    id: "t4e26", country: "India", start: "2026-12-07", short: "T4E", year: 2026, name: "International Conference on Technology for Education",
    topics: ["tel"], region: "Asia", place: "IIT Jodhpur, India", dates: "7–9 Dec 2026",
    url: "https://sites.google.com/view/t4e2026",
    deadlines: [
      { label: "Abstracts (extended)", date: "2026-07-19", status: "announced" },
      { label: "Full papers (extended)", date: "2026-07-26", status: "announced" },
      { label: "Workshops, teaching & tool demos", date: "2026-09-15", status: "announced" }
    ]
  },
  {
    id: "icce26", country: "New Zealand", start: "2026-11-30", short: "ICCE", year: 2026, name: "International Conference on Computers in Education",
    topics: ["tel"], region: "Oceania", place: "Ōtautahi Christchurch, New Zealand", dates: "30 Nov – 4 Dec 2026",
    url: "https://icce2026.csse.canterbury.ac.nz/",
    deadlines: [
      { label: "Main conference papers", date: "2026-05-12", tz: "UTC", status: "announced" },
      { label: "Workshop papers", date: "2026-08-11", tz: "UTC", status: "announced" }
    ]
  },
  {
    id: "chi27", country: "United States", start: "2027-05-10", short: "CHI", year: 2027, name: "ACM CHI Conference on Human Factors in Computing Systems",
    topics: ["cci"], region: "Americas", place: "Pittsburgh, USA", dates: "10–14 May 2027",
    url: "https://chi2027.acm.org/",
    deadlines: [ { label: "Full papers", date: "2026-09-10", status: "announced" } ]
  },
  {
    id: "aera27", country: "Canada", start: "2027-04-14", short: "AERA", year: 2027, name: "AERA Annual Meeting",
    topics: ["edres"], region: "Americas", place: "Toronto, Canada", dates: "14–18 Apr 2027",
    url: "https://www.aera.net/Events-Meetings/Annual-Meeting/2027-Annual-Meeting-Call-for-Paper-and-Session-Submissions",
    deadlines: [ { label: "Paper & session submissions", date: "2026-07-24", status: "announced" } ]
  }
];
