export const personalInfo = {
  name: "Setegn Derebe Dereje",
  nameAmharic: "ሰጠኝ ደረበ ደረጀ",
  title: "Full-Stack Web Developer & Finance Professional",
  titleAmharic: "ሙሉ-ስታክ የድረ-ገጽ ገንቢ እና የፋይናንስ ባለሙያ",
  degree: "B.Sc. in Accounting & Finance (Distinction, 3.40 CGPA)",
  phone: "0922998963",
  formattedPhone: "+251 922 998 963",
  email: "Abiabisho34@gmail.com",
  github: "https://github.com/Abiabisho",
  portfolio: "https://portfolio-setegn.vercel.app",
  location: "Addis Ababa, Ethiopia",
  profilePicture: "/assets/aistudio/photo_2026-08-08_01-12-30_9e609777.jpg",
  pdfPath: "/assets/aistudio/Abii_895b6c0f.pdf",
  bio: "Results-driven Finance Assistant and Full-Stack Developer with a Bachelor's degree in Accounting & Finance and hands-on experience in financial operations, Peachtree accounting, and full-stack application development. Proven track record in automating workflows, handling ledger management, and building robust web applications.",
  bioAmharic: "የሶፍትዌር ምህንድስናን ከፋይናንስ እና አካውንቲንግ የሙያ እውቀት ጋር በማጣመር ዘመናዊ የድረ-ገጽ አፕሊኬሽኖችን እና የሂሳብ አያያዝ ሥርዓቶችን እሰራለሁ። በPeachtree እና IFRS የሂሳብ አሰራር እንዲሁም በReact, Next.js, እና Node.js የልማት ስራ ልምድ አለኝ።"
};

export const stats = [
  { label: "Admas University", value: "B.Sc. Accounting", sub: "Graduated July 2026" },
  { label: "Academic Standing", value: "3.40 CGPA", sub: "Graduated with Distinction" },
  { label: "National Exit Exam", value: "63 / 100", sub: "FDRE Ministry of Education" },
  { label: "Technical Stack", value: "MERN & Next.js", sub: "React, Node, Express, DBs" }
];

export const skillsData = {
  frontend: [
    { name: "React.js", level: "Expert", desc: "Hooks, Context, State Management, Custom UI Architecture" },
    { name: "Next.js", level: "Advanced", desc: "SSR, SSG, Routing, API Routes, Modern Full-Stack" },
    { name: "JavaScript (ES6+)", level: "Expert", desc: "Async/Await, Functional Programming, DOM & Event systems" },
    { name: "Tailwind CSS", level: "Expert", desc: "Responsive Design, Design Systems, Dark Mode, Animations" },
    { name: "HTML5 & Semantic Web", level: "Expert", desc: "Accessibility (a11y), SEO, Structured Meta" },
    { name: "CSS3 & Modern Motion", level: "Advanced", desc: "Flexbox, CSS Grid, Transitions, Keyframes" }
  ],
  backend: [
    { name: "Node.js", level: "Advanced", desc: "Event-driven runtime, modular services, asynchronous I/O" },
    { name: "Express.js", level: "Advanced", desc: "RESTful API Architecture, Middleware, Error Handling" },
    { name: "MongoDB", level: "Proficient", desc: "NoSQL Schemas, Aggregations, Document Storage" },
    { name: "SQLite", level: "Proficient", desc: "Embedded relational storage, migrations, fast queries" },
    { name: "RESTful APIs", level: "Expert", desc: "JSON Contracts, Authentication (JWT), Endpoint Design" }
  ],
  finance: [
    { name: "Peachtree Accounting", level: "Expert", desc: "Ledger posting, voucher recording, financial reporting" },
    { name: "Financial Statements", level: "Expert", desc: "Balance sheets, Income statements, Cash flows" },
    { name: "IFRS Compliance", level: "Certified", desc: "International Financial Reporting Standards frameworks" },
    { name: "Bank Reconciliation & VAT", level: "Expert", desc: "Audit-ready reconciliation, Ethiopian tax compliance" },
    { name: "Credit Risk Assessment", level: "Advanced", desc: "Loan portfolio evaluation, risk mitigation models" },
    { name: "Payroll & Budgeting", level: "Expert", desc: "Salary computations, tax deductions, cost forecasting" }
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching workflows, open source" },
    { name: "Vercel & Cloud Deploy", level: "Advanced", desc: "CI/CD deployments, environment configuration" },
    { name: "Postman", level: "Advanced", desc: "API testing, automation collections, contract verification" },
    { name: "VS Code", level: "Expert", desc: "Productive dev environment, extensions, debugging" },
    { name: "Microsoft Excel (Advanced)", level: "Expert", desc: "Financial modeling, VLOOKUP, pivot tables, data analysis" },
    { name: "Flutter (Mobile)", level: "Intermediate", desc: "Cross-platform mobile apps, currency & unit calculators" }
  ]
};

export const workExperience = [
  {
    role: "Web Developer (Project-Based)",
    roleAmharic: "የድረ-ገጽ ገንቢ (ፕሮጀክት ተኮር)",
    company: "Qiyas Project",
    location: "Addis Ababa, Ethiopia",
    period: "2026 – Present",
    type: "Contract / Project",
    highlights: [
      "Architected and delivered full-stack web applications using React, Next.js, and Node.js.",
      "Engineered clean RESTful APIs and connected dual-database systems (MongoDB and SQLite) for dynamic data handling.",
      "Implemented responsive, accessible user interfaces styled with Tailwind CSS and modern ES6+ JavaScript.",
      "Collaborated on code reviews, performance optimizations, and cloud deployment pipelines."
    ]
  },
  {
    role: "Finance Assistant (Internship)",
    roleAmharic: "የፋይናንስ ረዳት (ልምምድ)",
    company: "Dibab Savings and Credit Association (SACCO)",
    location: "Addis Ababa, Ethiopia",
    period: "February 2026 – July 2026 (5 months)",
    type: "Financial Institution",
    highlights: [
      "Assisted in daily financial operations including ledger posting, bank reconciliations, and financial record keeping.",
      "Supported senior finance staff in generating monthly balance sheets and income reports using Peachtree Accounting software.",
      "Processed member deposits, loan transactions, and maintained audit-ready physical and digital documentation.",
      "Contributed to credit risk assessment activities, reviewing loan applicant profiles and portfolio monitoring.",
      "Collaborated with senior accountants to ensure compliance with internal controls, VAT requirements, and reporting standards."
    ]
  },
  {
    role: "Administrative & Accounting Support",
    roleAmharic: "የአስተዳደር እና የሂሳብ ድጋፍ",
    company: "Public Sector (Wereda 11 / Yeka Subcity)",
    location: "Addis Ababa, Ethiopia",
    period: "Prior Public Service",
    type: "Public Service",
    highlights: [
      "Managed documentation registers, daily administrative vouchers, and ledger verification.",
      "Facilitated transparent financial record audits and government tax compliance procedures.",
      "Applied structured clerical and communication workflows under tight deadlines."
    ]
  }
];

export const educationAndCredentials = [
  {
    title: "Bachelor of Arts (B.A. / B.Sc.) in Accounting & Finance",
    titleAmharic: "በአካውንቲንግ እና ፋይናንስ የመጀመሪያ ድግሪ",
    institution: "Admas University",
    location: "Addis Ababa, Ethiopia",
    date: "Graduated July 26, 2026",
    status: "Graduated with Distinction",
    details: [
      "Cumulative GPA: 3.40 / 4.00 · Major GPA: 3.47 / 4.00",
      "Awarded Temporary Degree Ref. AU./15/1358/18 with official Registrar and President validation.",
      "Completed 150 credit hours across Financial Management, Cost Accounting, Auditing, IFRS, Econometrics, and Business Law.",
      "Senior Research Paper: 'Credit Risk Management Assessment' at Commercial Bank of Ethiopia (Bole Branch)."
    ],
    credentialType: "University Degree"
  },
  {
    title: "National Exit Examination Certificate",
    titleAmharic: "የብሔራዊ መውጫ ፈተና ሰርተፊኬት",
    institution: "FDRE Ministry of Education, Ethiopia",
    location: "National Assessment Center",
    date: "June 23, 2026",
    status: "PASS · Score: 63.00%",
    details: [
      "Username / Candidate ID: EUEE15507318",
      "Official examination in Accounting and Finance administered nationwide.",
      "Electronic verification QR validated through the official Ministry of Education verification portal."
    ],
    credentialType: "National Certification"
  },
  {
    title: "Level 4 Certificate of Competence (CoC) — Accounts & Budget Service",
    titleAmharic: "ደረጃ 4 የሙያ ብቃት ማረጋገጫ (CoC) — የሂሳብ እና በጀት አገልግሎት",
    institution: "Federal TVET Agency / Center of Competency",
    location: "Misrak Assessment Center",
    date: "Certified 2020",
    status: "Competent (Level IV)",
    details: [
      "Occupational Standard: Accounts and Budget Service (Control No: 3002528).",
      "Certified competence in operating computerized accounting systems, financial statement preparation, and payroll systems.",
      "Covers 23 occupational units including financial statements for non-reporting entities and accrual accounting."
    ],
    credentialType: "Occupational TVET CoC"
  },
  {
    title: "IFRS Short-Term Vocational Training Certificate",
    titleAmharic: "የIFRS አጫጭር የሙያ ስልጠና ሰርተፊኬት",
    institution: "VM Ware Computer and Training Center",
    location: "Addis Ababa, Ethiopia",
    date: "July 06, 2026 (40 Hours)",
    status: "Completed & Certified",
    details: [
      "Comprehensive 40-hour intensive vocational educational training program in International Financial Reporting Standards (IFRS).",
      "Practical accounting guidelines, fair value measurements, asset depreciation, and revenue recognition compliance."
    ],
    credentialType: "Specialized Training"
  },
  {
    title: "Level 3 Certificate of Competence (CoC) & College Diploma",
    titleAmharic: "ደረጃ 3 የሙያ ብቃት እና የኮሌጅ ዲፕሎማ",
    institution: "Admas University & Federal TVET Agency",
    location: "Addis Ababa, Ethiopia",
    date: "Graduated July 2019",
    status: "Completed",
    details: [
      "College Diploma in Accounting & Finance from Admas University (July 2019).",
      "Level 3 National Qualification Certificate in Accounts and Budget Support (Control No: 3002243).",
      "Comprehensive training record: 2,291 total training hours across 25 competencies."
    ],
    credentialType: "Diploma & Level III CoC"
  }
];

export const projectsData = [
  {
    id: "merkato-store",
    title: "Merkato Store",
    titleAmharic: "መርካቶ ስቶር (Merkato Store)",
    subtitle: "Full-Stack Multi-Vendor E-Commerce Platform with Chapa Integration",
    category: "web",
    categoryLabel: "Web Development",
    categoryLabelAmharic: "የድረ-ገጽ ልማት",
    featured: true,
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB", "SQLite", "Chapa API", "Tailwind CSS"],
    github: "https://github.com/Abiabisho/E-commerce.git",
    liveDemo: "https://portfolio-setegn.vercel.app",
    summary: "Engineered and deployed a scalable multi-vendor e-commerce application featuring seamless payment integration and an automated dual-database architecture using MongoDB and SQLite.",
    summaryAmharic: "ፈጣን እና አስተማማኝ የኢ-ኮሜርስ መድረክ ሲሆን፣ የChapa ክፍያ ሥርዓት የተገጠመለት እና MongoDB ከSQLite ጋር በማጣመር የተሰራ ሙሉ-ስታክ አፕሊኬሽን ነው።",
    description: "Merkato Store addresses the booming digital commerce market in Ethiopia. Built with a React & Next.js frontend and a Node.js/Express backend, it features a dual-database architecture: MongoDB handles dynamic product catalogs, seller stores, and media schemas, while SQLite handles deterministic transaction ledgers and order records. Integrated with Chapa API for real-time mobile money and bank card payments.",
    features: [
      "Automated dual-database pipeline: MongoDB for high-velocity catalog search, SQLite for atomic order transactions",
      "Chapa Payment Gateway integration supporting Ethiopian Birr mobile money (Telebirr, CBE Birr) and bank cards",
      "Vendor storefronts with inventory tracking, price modifiers, and discount voucher engines",
      "Responsive shopping cart with persistent state and real-time checkout validation",
      "JWT-based role authentication for customers, merchants, and system administrators"
    ]
  },
  {
    id: "erp-visitor-tracker",
    title: "Business ERP & Operations Management",
    titleAmharic: "የንግድ ስራ አመራር እና ጎብኝዎች መከታተያ ሥርዓት",
    subtitle: "Internal Operations, Inventory & Visitor Tracking System",
    category: "finance",
    categoryLabel: "Financial & Business Apps",
    featured: true,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "SQLite", "Audit Logs"],
    github: "https://github.com/Abiabisho",
    liveDemo: "https://portfolio-setegn.vercel.app",
    summary: "Specialized management software for small business operations, tracking inventory, personnel entry, and operational logs with role-based audit trails.",
    summaryAmharic: "ለአነስተኛ እና መካከለኛ ንግዶች የተዘጋጀ የዕቃ ክምችት፣ የጎብኝዎች እና የዕለት ተዕለት ስራዎች መቆጣጠሪያ ሶፍትዌር።",
    description: "Designed for small-to-medium business environments needing rigorous operational logging and inventory accounting without prohibitive enterprise subscription fees. Features instant check-in/check-out logs, inventory stock balance alerts, and ledger export capabilities.",
    features: [
      "Digital visitor logbook with timestamping, host notification, and security badge tracking",
      "Inventory accounting module with FIFO stock evaluation and low-inventory reorder alerts",
      "Immutable audit log records to prevent record tampering and support financial audits",
      "Clean dashboard with graphical daily throughput and peak traffic metrics"
    ]
  },
  {
    id: "credit-risk-assessment",
    title: "Credit Risk Management & Analytics",
    titleAmharic: "የብድር ስጋት ግምገማ እና ትንተና ሞዴል",
    subtitle: "Senior Academic Research & Financial Default Probability Calculator",
    category: "finance",
    categoryLabel: "Financial & Business Apps",
    featured: true,
    tags: ["Peachtree Analysis", "Financial Modeling", "JavaScript", "IFRS", "Risk Scoring"],
    github: "https://github.com/Abiabisho",
    liveDemo: "https://portfolio-setegn.vercel.app",
    summary: "Academic research and interactive financial tool evaluating credit evaluation procedures, loan default factors, and risk mitigation at Commercial Bank of Ethiopia.",
    summaryAmharic: "በኢትዮጵያ ንግድ ባንክ (ቦሌ ቅርንጫፍ) ላይ የተካሄደ የብድር ስጋት ግምገማ ጥናት እና የብድር መክፈል አቅም መተንተኛ ሞዴል።",
    description: "Based on Setegn Derebe's Senior Academic Research conducted at Commercial Bank of Ethiopia (Bole Branch). Analyzed loan portfolio default rates, evaluated collateral adequacy under Ethiopian banking regulations, and translated key quantitative formulas into an interactive web tool.",
    features: [
      "Automated debt-to-income and debt-service coverage ratio (DSCR) calculator",
      "Probability of default (PD) scoring rubric based on empirical Ethiopian banking data",
      "Collateral haircut and recovery estimate models compliant with NBE guidelines",
      "Exportable summary report for credit committee loan approval packages"
    ]
  },
  {
    id: "portfolio-platform",
    title: "Modern Developer Portfolio & CV Studio",
    titleAmharic: "የገንቢ ፖርትፎሊዮ እና ሲቪ ስቱዲዮ",
    subtitle: "Next-Gen Glassmorphic Portfolio Deployed on Vercel",
    category: "web",
    categoryLabel: "Web Development",
    featured: false,
    tags: ["React", "Tailwind CSS", "Vite", "Print CSS", "Bilingual i18n"],
    github: "https://github.com/Abiabisho",
    liveDemo: "https://portfolio-setegn.vercel.app",
    summary: "High-performance developer portfolio featuring a dark Google Studio aesthetic, interactive CV workspace, and bilingual English/Amharic support.",
    summaryAmharic: "በVercel ላይ የተጫነ፣ ዘመናዊ የGoogle Studio ዲዛይን ያለው፣ በእንግሊዝኛ እና አማርኛ ቋንቋ የሚሰራ የፖርትፎሊዮ ድረ-ገጽ።",
    description: "A showcase of engineering finesse and aesthetic discipline. Provides an interactive CV Studio with print-to-PDF formatting that automatically translates screen styles into a clean, black-and-white A4 paper resume.",
    features: [
      "Custom print stylesheet ensuring pixel-perfect paper resume printing without dark backgrounds",
      "Full bilingual support toggling between English and Amharic with zero delay",
      "Interactive CV Studio with document preview and direct access to original PDF credentials",
      "Zero TypeScript runtime overhead, optimized bundle size with Tailwind CSS v4"
    ]
  },
  {
    id: "flutter-multi-utility",
    title: "Multi-Utility Mobile Applications",
    titleAmharic: "ሁለገብ የሞባይል አፕሊኬሽኖች (Flutter)",
    subtitle: "Cross-Platform Real-Time Financial & Unit Calculators",
    category: "finance",
    categoryLabel: "Financial & Business Apps",
    featured: false,
    tags: ["Flutter", "Dart", "Mobile", "Financial Formulas", "Offline First"],
    github: "https://github.com/Abiabisho",
    liveDemo: "https://portfolio-setegn.vercel.app",
    summary: "Designed and developed mobile tools in Flutter, including cross-platform unit and currency converters tailored for real-time calculation.",
    summaryAmharic: "በFlutter የተገነቡ ፈጣን የገንዘብ ምንዛሪ እና የመለኪያ መለወጫ የሞባይል መተግበሪያዎች።",
    description: "Mobile utility built using Flutter and Dart. Engineered specifically for quick financial conversions, currency exchange calculations with cached offline rates, and tax/VAT computation for Ethiopian traders.",
    features: [
      "Live and offline currency converter with Ethiopian Birr (ETB), USD, EUR, and GBP",
      "VAT and withholding tax quick calculator for Ethiopian commerce",
      "Intuitive numeric keypad and smooth haptic feedback"
    ]
  }
];

export const references = [
  {
    name: "Mr. Ashenafi Addisu (MA)",
    role: "Finance Manager",
    company: "Dibab Savings and Credit Association (SACCO)",
    phone: "+251 92 070 3142",
    relation: "Direct Supervisor during Financial Operations Internship"
  },
  {
    name: "Mr. Gebra (MA)",
    role: "Bank Officer",
    company: "Commercial Bank of Ethiopia",
    phone: "+251 94 148 8434",
    relation: "Professional Mentor & Senior Banking Consultant"
  },
  {
    name: "Mr. Freezer Kelkile (BA)",
    role: "Bank Customer Officer",
    company: "Commercial Banking Sector",
    phone: "+251 91 115 7271",
    relation: "Professional Colleague & Banking Operations Specialist"
  }
];
