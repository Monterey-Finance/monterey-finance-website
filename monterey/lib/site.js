export const site = {
  name: "Monterey Finance",
  title: "Monterey Finance",
  description:
    "Monterey Finance is a quantitative research project focused on designing, testing, and comparing investment strategies for a pool of Sharia-compliant stocks. All work in the first phase is grounded in historical market data, with strategies evaluated through backtests before any live trading is considered.",
  shortDescription:
    "A quantitative research project designing, testing, and comparing investment strategies for Sharia-compliant stocks.",
  logo: {
    src: "/logo-mark.png",
    alt: "Monterey Finance",
    width: 111,
    height: 58,
  },
  embed: {
    src: "/Main Embed.jpg",
    alt: "Monterey Finance — Open Source Quantitative Hedge Fund",
    width: 780,
    height: 388,
    type: "image/jpeg",
  },
  nav: [
    { label: "Research", href: "#research" },
    { label: "Universe", href: "#universe" },
    { label: "Strategies", href: "#strategies" },
    { label: "About", href: "#about" },
  ],
  actions: [
    { label: "Live Fund", href: "#performance", live: true },
    { label: "Github", href: "#", arrow: true },
  ],
  hero: {
    headline: ["Quantitative Precision.", "Shariah Integrity."],
    lede: "Monterey Finance merges data-driven factor models with rigorous Shariah screening to compound wealth without compromise.",
    buttons: [
      { label: "Read Our Research Papers", href: "#research", width: 262 },
      { label: "View Live Performance", href: "#performance", width: 228 },
    ],
  },
  cta: {
    headline: ["Your Capital with Quantitative", "Shariah Discipline"],
    button: { label: "Explore Research Repositories", href: "#research" },
  },
  footer: {
    description:
      "Monterey Finance is a Shariah-compliant quantitative research lab and asset management initiative. We sit at the intersection of systematic quantitative finance, machine learning engineering, and authentic Islamic jurisprudence (Fiqh al-Mu’amalat).",
    wordmark: {
      src: "/full-logo.png",
      alt: "Monterey Finance",
      width: 530,
      height: 63,
    },
    watermark: {
      src: "/glass-logo.jpg",
      alt: "",
      width: 753,
      height: 373,
    },
    navigation: {
      label: "Navigation",
      links: [
        { label: "Home", href: "#top" },
        { label: "Mission", href: "#about" },
        { label: "Research", href: "#research" },
        { label: "About", href: "#principles" },
      ],
    },
    contact: {
      label: "Contact",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Email", href: "#" },
      ],
    },
  },
};

export const liveFund = {
  title: "Live Fund Performance",
  intro:
    "We believe in full transparency. Below is the real-time performance of our quantitative Shariah-compliant fund strategies compared against global market benchmarks.",
};

export const researchLab = {
  title: "Open Research Lab",
  intro:
    "Monterey Finance operates as a quantitative fund and an open research lab. We do not use proprietary black boxes. We test our strategies on historical data and publish our findings as open-access papers.",
  papers: [
    {
      title: "Dual-Momentum Regime Switching under Halal Screens",
      subtitle:
        "An Exploratory Backtest of 12–1 Relative Strength and a 200-Day SMA Overlay, 2019–2024",
      rotate: "-1.79deg",
    },
    {
      title: "High-Beta Acceleration in Low-Debt Tech",
      subtitle:
        "An Exploratory Backtest of Upside Participation versus Downside Capture under AAOIFI Screens, 2020–2025",
      rotate: "-0.75deg",
    },
    {
      title: "Post-Earnings Announcement Drift under AAOIFI Screens",
      subtitle: "An Exploratory Backtest of Halal Earnings Surprise, 2020–2025",
      rotate: "1.79deg",
    },
  ],
};

export const modelsMethodology = {
  title: "Models & Methodology",
  intro:
    "Explore how our investment models select assets, manage risk, and maintain Shariah compliance at every trade.",
  cards: [
    {
      title: "Point-in-Time Shariah Ingestion",
      body: "Our automated screener ingests daily balance sheet data. It applies AAOIFI debt and liquidity ratio thresholds without historical lookahead or survivorship bias.",
    },
    {
      title: "Multi-Factor Allocation Engine",
      body: "Our models rank assets using four primary factors: Value, Momentum, Quality, and Low Volatility.",
    },
    {
      title: "Sector Risk Rebalancing",
      body: "Excluding conventional banks and high-debt firms creates heavy tech sector concentration. Our risk algorithms rebalance factor weights to reduce systemic volatility.",
    },
    {
      title: "Programmatic Purification",
      body: "Non-compliant business revenue (<5%) is calculated down to the specific payout date. Cleansing schedules are fully automated for tax and reporting efficiency.",
    },
  ],
};

export const corePrinciples = {
  title: "Our Core Principles",
  items: [
    "Radical Transparency: Every computation, risk metric, and performance record is open for review.",
    "Uncompromising Integrity: Shariah compliance is an absolute constraint, never a secondary feature.",
    "Scientific Rigor: We rely on empirical data and peer-reviewed methods, not market stories.",
    "Value Compounding: We protect purchasing power and compound investor wealth over long time horizons.",
  ],
};

export const firstPrinciples = {
  title: "Built from First Principles",
  intro:
    "Many investors see a conflict between high returns and Shariah compliance. Conventional financial products rely on interest (Riba) or opaque fees. Meanwhile, traditional Halal funds often lack advanced technology and suffer from heavy sector risk.",
  columns: [
    {
      title: "Equities represent real assets.",
      body: "Stocks are fractional ownership of actual businesses, not zero-sum gambling (Maysir).",
      size: "32px",
      rotate: "-3deg",
    },
    {
      title: "Capital must stay active.",
      body: "Holding idle cash loses value to inflation and Zakat. Capital must flow into real economic growth.",
      size: "32px",
      rotate: "0deg",
    },
    {
      title: "Technology ensures compliance.",
      body: "No manual screening. We use automated algorithms to enforce strict debt limits & dividend cleansing.",
      size: "30px",
      rotate: "3deg",
    },
  ],
};

export const phases = [
  {
    id: "phase-1",
    name: "Phase 1: Quantitative Research",
    body: [
      "Phase 1 is research only, and no live capital will be deployed during this stage. The main tasks are to define the Sharia-compliant stock universe, build quantitative trading and investment strategies for that universe, backtest each strategy against real historical market data, and measure and compare strategy performance.",
      "Phase 1 deliverables include a documented stock universe with compliance rules applied, one or more strategy definitions with clear entry, exit, and risk rules, backtest results with standard performance metrics, and a written summary of findings and limitations.",
    ],
  },
  {
    id: "phase-2",
    name: "Phase 2: Fund Operations",
    body: [
      "Phase 2 is not in scope for the current work, but it may eventually include live portfolio management, investor operations, and regulatory setup similar to a hedge fund. This phase will only be considered after Phase 1 research produces acceptable and repeatable results.",
    ],
  },
];

export const principles = [
  {
    name: "Radical Institutional Transparency",
    body: "No opaque fee structures, hidden portfolio allocations, or black-box decision-making. Every investment methodology, risk model, and performance metric is made explicit and verifiable to align fully with investor trust.",
  },
  {
    name: "Uncompromising Shariah Integrity",
    body: "Adherence to strict Islamic principles is embedded at the institutional core. Compliance is treated as an absolute mandate—ensuring all capital allocation, revenue cleansing, and portfolio management strictly align with authentic Shariah standards.",
  },
  {
    name: "Scientific & Data-Driven Rigor",
    body: "Investment decisions are stripped of emotional bias, market hype, and speculative storytelling. Portfolio strategies are grounded exclusively in empirical research, peer-reviewed financial engineering, and stress-tested quantitative models.",
  },
  {
    name: "Open Empirical Research & Thought Leadership",
    body: "Knowledge should be shared, not hidden. Monterey Finance functions as both an investment manager and a research lab, publishing white papers, strategy backtests, and market insights to advance the broader Halal financial ecosystem.",
  },
  {
    name: "Fiduciary Responsibility & Value Compounding",
    body: "Delivering long-term, risk-adjusted value while safeguarding investor purchasing power against inflation and market volatility. Capital is deployed to generate real economic growth, not short-term speculative gains.",
  },
  {
    name: "Modernizing Islamic Capital Markets",
    body: "Elevating Shariah-compliant investing to match and exceed the technical, analytical, and operational standards of top-tier global quantitative hedge funds and institutional allocators.",
  },
];
