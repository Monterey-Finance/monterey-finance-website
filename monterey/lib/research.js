export const RESEARCH_REPO =
  "https://github.com/Monterey-Finance/Monterey-Finance";
export const RESEARCH_FOLDER = `${RESEARCH_REPO}/tree/main/Research`;

export const papers = [
  {
    slug: "cash-generation",
    href: "/research/cash-generation",
    number: "01",
    title: "Cash Generation under AAOIFI Debt Limits",
    subtitle: "An Exploratory Backtest of Halal FCF Quality, 2023–2024",
    question: "After Halal screens, does cash generation still pay?",
    date: "September 2026",
    version: "v1.0",
    status: "Exploratory note",
    image: "/papers/fcf-quality.png",
    rotate: "-1.79deg",
    pdf: `${RESEARCH_REPO}/blob/main/Research/papers/01-fcf-ev/Cash%20Generation%20under%20AAOIFI%20Debt%20Limits.pdf`,
    notebook: `${RESEARCH_REPO}/blob/main/Research/papers/01-fcf-ev/code.ipynb`,
    folder: `${RESEARCH_REPO}/tree/main/Research/papers/01-fcf-ev`,
    internal: true,
  },
  {
    slug: "roic-compounding",
    href: `${RESEARCH_REPO}/blob/main/Research/papers/02-roic-engine/High-ROIC%20Compounding%20under%20AAOIFI%20Debt%20Limits.pdf`,
    number: "02",
    title: "High-ROIC Compounding under AAOIFI Debt Limits",
    subtitle: "An Exploratory Backtest of Halal ROIC Reinvestment, 2022–2024",
    image: "/papers/roic.png",
    rotate: "-0.75deg",
    internal: false,
  },
  {
    slug: "dual-momentum",
    href: `${RESEARCH_REPO}/blob/main/Research/papers/04-dual-momentum-reg-switch/Dual-Momentum%20Regime%20Switching%20under%20Halal%20Screens.pdf`,
    number: "04",
    title: "Dual-Momentum Regime Switching under Halal Screens",
    subtitle:
      "An Exploratory Backtest of 12–1 Relative Strength and a 200-Day SMA Overlay, 2019–2024",
    image: "/papers/dual-momentum.png",
    rotate: "1.79deg",
    internal: false,
  },
  {
    slug: "high-beta",
    href: `${RESEARCH_REPO}/blob/main/Research/papers/05-high-beta/High-Beta%20Acceleration%20in%20Low-Debt%20Tech.pdf`,
    number: "05",
    title: "High-Beta Acceleration in Low-Debt Tech",
    subtitle:
      "An Exploratory Backtest of Upside Participation versus Downside Capture under AAOIFI Screens, 2020–2025",
    image: "/papers/high-beta.png",
    rotate: "-1.2deg",
    internal: false,
  },
  {
    slug: "earnings-surprise",
    href: `${RESEARCH_REPO}/blob/main/Research/papers/06-earn-momentum-sue/Post-Earnings%20Announcement%20Drift%20under%20AAOIFI%20Screens.pdf`,
    number: "06",
    title: "Post-Earnings Announcement Drift under AAOIFI Screens",
    subtitle: "An Exploratory Backtest of Halal Earnings Surprise, 2020–2025",
    image: "/papers/earnings-surprise.png",
    rotate: "0.9deg",
    internal: false,
  },
];

export const fcfPaper = papers[0];

export const books = {
  fcf: {
    id: "fcf",
    label: "Halal FCF quality",
    short: "FCF quality",
    color: "var(--fcf)",
    endNav: 2.028,
    cagr: 42.43,
    vol: 16.13,
    sharpe: 2.15,
    sortino: 3.1,
    maxDd: -11.92,
    calmar: 3.56,
  },
  robust: {
    id: "robust",
    label: "Quality (drop high vol)",
    short: "Drop high-vol",
    color: "var(--robust)",
    endNav: 1.803,
    cagr: 34.26,
    vol: 14.45,
    sharpe: 1.97,
    sortino: 2.85,
    maxDd: -9.39,
    calmar: 3.65,
  },
  spus: {
    id: "spus",
    label: "Halal (SPUS)",
    short: "SPUS",
    color: "var(--spus)",
    endNav: 1.719,
    cagr: 31.11,
    vol: 15.07,
    sharpe: 1.74,
    sortino: 2.58,
    maxDd: -11.46,
    calmar: 2.71,
  },
  spy: {
    id: "spy",
    label: "S&P 500 (SPY)",
    short: "SPY",
    color: "var(--spy)",
    endNav: 1.586,
    cagr: 25.93,
    vol: 12.82,
    sharpe: 1.71,
    sortino: 2.5,
    maxDd: -9.97,
    calmar: 2.6,
  },
};

export const calendarYears = [
  { year: "2023", fcf: 49.12, spy: 26.18, spus: 34.2 },
  { year: "2024", fcf: 35.47, spy: 25.34, spus: 27.67 },
];

export const quintiles = [
  { id: "Q1", label: "Q1 highest", cagr: 37.44, vol: 19.34, maxDd: -15.14, calmar: 2.47 },
  { id: "Q2", label: "Q2", cagr: 35.76, vol: 16.34, maxDd: -10.03, calmar: 3.57 },
  { id: "Q3", label: "Q3", cagr: 27.39, vol: 16.86, maxDd: -13.08, calmar: 2.09 },
  { id: "Q4", label: "Q4", cagr: 11.62, vol: 14.96, maxDd: -14.16, calmar: 0.82 },
  { id: "Q5", label: "Q5 lowest", cagr: 31.08, vol: 15.07, maxDd: -11.74, calmar: 2.65 },
];

export const sectors = [
  { name: "Technology", book: 51.5, universe: 19.1 },
  { name: "Communication", book: 22.8, universe: 5.5 },
  { name: "Healthcare", book: 12.0, universe: 13.4 },
  { name: "Energy", book: 3.5, universe: 4.8 },
  { name: "Staples", book: 3.2, universe: 6.4 },
  { name: "Industrials", book: 2.9, universe: 14.4 },
  { name: "Cyclical", book: 2.8, universe: 11.6 },
  { name: "Financials", book: 2.7, universe: 6.2 },
  { name: "Materials", book: 1.3, universe: 4.6 },
  { name: "Real estate", book: 1.1, universe: 6.6 },
  { name: "Utilities", book: 0.0, universe: 7.1 },
];

export const attribution = {
  spy: { alpha: 9.56, beta: 1.15, r2: 0.83, te: 6.86, ir: 1.87 },
  spus: { alpha: 7.97, beta: 1.02, r2: 0.91, te: 4.95, ir: 1.71 },
};

export const friction = {
  rebalances: 25,
  avgNames: 110.9,
  turnover: 99.9,
  costBps: 10,
  costDrag: 0.1,
  cagrGross: 42.43,
  cagrNet: 42.22,
  purification: 0.01,
};

export const funnel = [
  { id: "spx", label: "S&P 500", count: 503, caption: "Starting list" },
  { id: "activity", label: "After banned businesses", count: 439, caption: "64 names removed" },
  { id: "halal", label: "Halal, positive FCF", count: 233, caption: "AAOIFI + cash from operations" },
  { id: "kept", label: "Top half by FCF margin", count: 116, caption: "The live cut" },
];

export const examples = [
  {
    ticker: "AAPL",
    status: "kept",
    note: "FCF yield 2.8% — expensive on the old rule. FCF margin 27.8% — kept.",
  },
  {
    ticker: "NVDA",
    status: "kept",
    note: "Passed Halal screens. The cheapness sort missed it. Cash generation did not.",
  },
  {
    ticker: "AMZN",
    status: "out",
    note: "Ranked 224 of 255 on FCF margin. Never in the live book.",
  },
  {
    ticker: "TSLA",
    status: "out",
    note: "Ranked 234 of 255. The screen working as written, not a data accident.",
  },
];

export const levers = [
  { lever: "Factor", value: "FCF / sales", kind: "data", basis: "Yahoo annual cash flow, 90-day lag" },
  { lever: "Universe", value: "S&P 500, 503 names", kind: "data", basis: "Current membership" },
  { lever: "Activity screen", value: "64 names removed", kind: "data", basis: "Banned businesses" },
  { lever: "Debt cap", value: "< 30% of 24-month market cap", kind: "data", basis: "AAOIFI Standard 21" },
  { lever: "Keep quantile", value: "Top 50% of FCF margin", kind: "assumption", basis: "Live rule after FCF/EV was dropped" },
  { lever: "Weighting", value: "Market cap", kind: "assumption", basis: "No optimizer, no name cap" },
  { lever: "Rebalance", value: "Month-end", kind: "assumption", basis: "No intra-month stops" },
];

export const findings = [
  {
    kicker: "Finding 1: Total return",
    claim: "The cash-generation book led both benchmarks in a two-year mega-cap boom.",
    reading:
      "42.4% compound annual growth versus 25.9% for SPY and 31.1% for SPUS. The gap is large. The sample is two strong years. These CAGRs are not a forecast of 42% a year.",
    caveat: "There is no down year in this window. Headline numbers use 3 Jan 2023 through 30 Dec 2024 only.",
  },
  {
    kicker: "Finding 2: The factor itself",
    claim: "Higher FCF margin helped. It did not line up as a clean stair-step.",
    reading:
      "Inside the same Halal universe, Q1 and Q2 are the two best CAGRs, which supports keeping the top half. Q5 still beat Q3 and Q4. Q2 had the best Sharpe and Calmar.",
    caveat: "The live book is roughly Q1–Q2 together, not a single quintile. Cash generation paid here. It is not a monotonic quality premium.",
  },
  {
    kicker: "Finding 3: What the book actually is",
    claim: "This is a Halal mega-cap quality and technology portfolio, not a diversified S&P clone.",
    reading:
      "Technology plus communication services averaged 74.3% of weight. Apple, Nvidia, Microsoft, and the two Alphabet lines were a third of the book at year-end 2024. Versus SPUS the beta is 1.02 and R² is 0.91.",
    caveat: "Without a sector-neutral twin I cannot split FCF margin from even more Apple, Nvidia, Microsoft, Alphabet, and Meta than SPUS already owned.",
  },
  {
    kicker: "Finding 4: Friction",
    claim: "Trading costs and purification are small next to the headline. The construction issues are not.",
    reading:
      "A 10 bp cost stub cuts CAGR from 42.43% to 42.22%. Purification drag on available tags is about 1 bp. The serious issues are the in-sample rule change, Yahoo’s short cash-flow history, and double-counting GOOG with GOOGL.",
    caveat: "Cheap FCF/EV was dropped because it lost to SPUS in this same window. 2023–2024 is partly in-sample for the live rule.",
  },
];

export const limits = [
  "No 2022, no 2008, no rate-hike recession, and no hold-out after a rule freeze.",
  "Yahoo annual cash-flow statements typically store only a few years. The first invested date is 3 January 2023.",
  "Sector exclusions use the current S&P list, not the 2019 membership file — survivorship in the universe.",
  "GOOG and GOOGL are both weighted, so Alphabet is overweight versus a single-listing index.",
  "No intra-month compliance monitor. A name that crossed the 30% debt line mid-month is held until month-end.",
  "No sector-neutral twin, so the original question — whether AAOIFI debt caps amplify a quality premium — is not answered.",
];

export const credits = {
  model: "Rao Abdul Hadi",
  writing: "Rao Abdul Hadi",
  lab: "Monterey Finance, Halal Quant Research Lab",
  version: "v1.0 of the FCF quality note, September 2026",
};
