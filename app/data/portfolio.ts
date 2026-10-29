// ============================================================
// DATA FILE — Edit all your portfolio content here
// ============================================================
// This is the single source of truth for your entire website.
// Update names, links, descriptions, and everything else here.
// ============================================================

export const siteConfig = {
  name: "Makibul Hossain Tamim",
  initials: "MHT",
  title: "CEO & Co-Founder, Zentura",
  role: "CEO & Co-Founder at Zentura",
  headline: "Turning ideas into thoughtful digital products.",
  location: "Dhaka, Bangladesh",
  tagline:
    "I lead a product studio in Dhaka, helping founders and businesses move from early ideas to launch through product strategy, design, and engineering.",
  email: "mhtamimm29@gmail.com",
  phone: "+880 1777-914331",

  // ── Social Links ─────────────────────────────────────────────
  socials: {
    linkedin: "https://www.linkedin.com/in/mhtamimm/",
    behance: "https://www.behance.net/tam01",
    github: "https://github.com/mhtamim29",
    instagram: "https://www.instagram.com/mh.ta_mim_01/",
    facebook: "https://www.facebook.com/mh.ta.mim.586198/",
    dribbble: "https://dribbble.com/Makibul_Hossain_Tamim/",
  },
};

// ── About & studio ───────────────────────────────────────────
export const about = [
  "I’m the Co-Founder and CEO of Zentura, a product studio based in Dhaka, Bangladesh.",
  "My background in Computer Science and Engineering and hands-on product design experience shape how I approach business problems, user needs, and technical decisions.",
  "At Zentura, I lead studio direction, client partnerships, and product strategy. I work with clients and our team to clarify requirements, set priorities, and guide products from concept through release.",
  "I value clear communication, shared ownership, and continuous improvement through testing and feedback.",
];

export const highlights = [
  { value: "Zentura", label: "Co-Founder & CEO" },
  { value: "Strategy → Release", label: "Product approach" },
  { value: "Dhaka", label: "Based in Bangladesh" },
];

export const studio = {
  name: "Zentura",
  description:
    "A product studio bringing strategy, design, and engineering into one continuous process. We help founders and businesses define the right problem and turn ideas into digital products.",
  responsibility:
    "I lead studio direction, client partnerships, and product strategy, working closely with our team from discovery through release.",
  url: "https://www.zentura.agency/",
};

// ── Capabilities ─────────────────────────────────────────────
export const capabilities = {
  heading: "Three disciplines. One product mindset.",
  description:
    "I bring business leadership, engineering, and design together to take products from a clear idea to a considered release.",
  areas: [
    {
      id: "leadership",
      number: "01",
      label: "Set the direction",
      title: "CEO & Studio Leadership",
      description:
        "Setting direction, building partnerships, and guiding teams from ambition to delivery.",
      focus: [
        "Business & product strategy",
        "Client partnerships",
        "Team leadership",
      ],
    },
    {
      id: "engineering",
      number: "02",
      label: "Build the foundation",
      title: "Software Engineering",
      description:
        "Turning product requirements into well-structured, connected web applications.",
      focus: [
        "Technical planning",
        "Application development",
        "System integration",
      ],
    },
    {
      id: "design",
      number: "03",
      label: "Shape the experience",
      title: "Product Design",
      description:
        "Making complex products clear, usable, and consistent from discovery to release.",
      focus: ["Product discovery", "UX architecture", "Design systems"],
    },
  ],
} as const;

// ── Projects ─────────────────────────────────────────────────
// Add as many link types as you need per project.
// Supported types: 'figma' | 'live' | 'caseStudy' | 'github' | 'behance' | 'dribbble'
export const projects = [
  {
    index: "01",
    title: "RENEWABLY UK",
    slug: "renewably-uk",
    category: "Compliance platform",
    role: "UI/UX design",
    contributionNote:
      "My contribution focused on UI/UX research and design. The wider platform delivery brought together Zentura’s design and engineering team.",
    featured: true,
    image: "/projects/renewably-uk.png",
    imageAlt: "Renewably UK compliance dashboard case study cover",
    subtitle:
      "Research, user flows, interface design, and design system for renewable energy compliance.",
    description:
      "Renewably UK is a full B2B web platform designed for UK-based renewable energy installation companies, retrofit assessors, and energy professionals. The project involved a complete redesign. The design covers the full user journey — from an onboarding signup flow with role-based selection (Installation Company, Retrofit Assessor, Retrofit Coordinator, Domestic Energy Assessor, Funding Partner, and more) to an authenticated installer portal with dashboards, document management, IBG certificate generation, and compliance tracking.",
    links: [
      {
        type: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/JaANAtUXOpWb9Jxy4w98jl/GavinPrience784?node-id=1362-13854&t=zowsjA2mPRBa5MVI-1",
      },
      { type: "live", label: "Live link", url: "https://renewably.energy/" },
      {
        type: "caseStudy",
        label: "Case Study",
        url: "https://www.behance.net/gallery/241451871/Renewably-UK-Certificate-Management-Platform",
      },
    ],
  },
  {
    index: "02",
    title: "MEM",
    slug: "mem",
    category: "Product discovery",
    role: "Collaborative UX architecture",
    featured: true,
    image: "/projects/mem.png",
    imageAlt: "MEM contractor operating system discovery case study cover",
    subtitle:
      "Product discovery and UX architecture for a client-first contractor operating system.",
    description:
      "A collaborative discovery and UX architecture case study exploring workflow design, system logic, changing requirements, and early product decisions for a complex contractor SaaS platform. This work focuses on discovery and architecture rather than a shipped product.",
    links: [
      {
        type: "caseStudy",
        label: "Case Study",
        url: "https://www.behance.net/gallery/242534927/MEM-A-Client-First-Contractor-Operating-System",
      },
    ],
  },
  {
    index: "03",
    title: "CRESIFY",
    slug: "cresify",
    category: "E-commerce & services",
    role: "UI/UX design",
    featured: true,
    image: "/projects/cresify.png",
    imageAlt: "Cresify project cover from the original Behance case study",
    subtitle:
      "A multivendor marketplace connecting buyers, sellers, and service providers.",
    description:
      "Cresify is a comprehensive multi-vendor e-commerce and service provider platform designed to support four core user roles — buyers, sellers, service providers, and platform administrators. The design covers a public-facing storefront with product discovery, category browsing, and advanced filtering; a seller dashboard for inventory management, order tracking, and analytics; and a full admin panel for vendor approvals, dispute resolution, and platform oversight. The project emphasizes a clean, conversion-focused UI with consistent design tokens, responsive layouts, and streamlined checkout and onboarding flows.",
    links: [
      {
        type: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/B6NdR0OTPEfGQ1ssz8jauL/Cresify?node-id=0-1&t=iABe26PSSzjeCtTM-1",
      }, // ← update
      { type: "live", label: "Live link", url: "https://cresify.com/" }, // ← update
      {
        type: "caseStudy",
        label: "Case Study",
        url: "https://www.behance.net/gallery/244518373/Cresify-A-Multivendor-and-service-Provide-Platform#",
      }, // ← update
    ],
  },
  {
    index: "04",
    title: "SPORTPICKS",
    slug: "sportpicks",
    category: "Sports analytics",
    role: "UI/UX design",
    featured: true,
    image: "/projects/sportpicks.png",
    imageAlt: "SportPicks sports analytics interface case study cover",
    subtitle:
      "A sports analytics experience focused on data clarity, trust, and visual hierarchy.",
    description:
      "SportPicks is a sleek and intuitive sports analytics platform designed to help users make informed decisions through real-time data, predictive insights, and performance metrics. The project focuses on delivering a clean, engaging user experience while handling complex sports data in an accessible way. It features a dynamic dashboard with match insights, statistical breakdowns, and trend analysis; prediction modules powered by historical data; and user-focused interfaces for tracking performance, favorite teams, and betting insights. The design emphasizes clarity, speed, and usability, combining modern UI aesthetics with functional depth to support both casual fans and serious analysts.",
    links: [
      {
        type: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/w0FlH1VrL9wcpiLB45N2AP/badbyzdmxx?node-id=2-3&t=QiWMuHd0aAan514g-1",
      },
      // { type: "live", label: "Live link", url: "#" },
      {
        type: "caseStudy",
        label: "Case Study",
        url: "https://www.behance.net/gallery/244275909/SportPicks-A-Modern-Sports-Analytics-Platform",
      },
    ],
  },
  {
    index: "05",
    title: "FARRIOR HOMES",
    slug: "farrior-homes",
    category: "Real estate",
    role: "UI/UX design",
    featured: false,
    subtitle:
      "A full-featured real estate marketplace with public listings, premium profiles, and a system admin panel",
    description:
      'Michaelfarrior is a comprehensive real estate platform designed for property buyers, sellers, and agents. The project covers three distinct user tiers — a public-facing free profile, a premium subscription experience, and a system admin panel — each with tailored UI flows. The design includes a public landing page with property discovery, blog, and "Why Choose Us" sections; a property listings page with advanced filters (price range, property type, location, bedrooms, bathrooms, square footage); authenticated user profiles with dashboard, saved properties, document management, and messaging; and a full admin panel for user, property, service, and blog management.',
    links: [
      {
        type: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/EpRw6KdFW1JepXWzjmsv6y/Michaelfarrior?node-id=40-2&t=qDIhvSlFW4bPHyQX-1",
      },
      { type: "live", label: "Live link", url: "https://farriorhomes.com/" },
      // { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
  {
    index: "06",
    title: "SURF SHARE",
    slug: "surf-share",
    category: "Photography marketplace",
    role: "UI/UX design",
    featured: false,
    subtitle:
      "A surf photography marketplace connecting wave riders and photographers across global surf destinations",
    description:
      "SurfShare is a multi-role surf photography platform designed for surfers, photographers (contributors), moderators, and admins. The project spans five distinct user experiences — a public-facing website landing page, contributor flows, a logged-in user portal, a moderator dashboard, and a full admin panel. The design includes a public landing page with featured destinations, a gallery with advanced filtering, an interactive surf spot map, and a contributor section; authenticated user flows covering favorites, downloads, and purchase/cart functionality; a contributor signup and photo submission workflow; a moderator panel for content review and approval; and a system admin panel for platform management — all unified under a coastal, photography-driven visual identity.",
    links: [
      {
        type: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/5b824JDzPaejU3Nmg9OlLl/Surf-Share?node-id=2-4&t=E8BkfRYrbJmWEGbB-1",
      },
      { type: "live", label: "Live link", url: "https://surfshare.com.au/" },
      // { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
  {
    index: "07",
    title: "ART NEIDICH",
    slug: "art-neidich",
    category: "Mobile inspection",
    role: "UI design",
    featured: false,
    subtitle:
      "A dual-role mobile inspection platform for admins and field inspectors, with job management, reporting, and real-time notifications",
    description:
      "Art Neidich is a property inspection mobile application designed for two distinct user roles — admins and field inspectors. The admin side covers a comprehensive dashboard with job summaries (total, pending, overdue, and completed today), a full job management system with job creation, filtering, and status tracking, label management, and a notification center. The inspector side features a streamlined workflow for conducting property inspections, annotating findings, capturing and attaching photos, adding location data, and submitting verification reports. The app also includes profile and settings management, an alert and review system, and a clean navigation structure optimized for on-the-go field use.",
    links: [
      {
        type: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/1fkJtBz7Knqd1YOcOQHXwY/artneidich?node-id=5-128&t=iji7SkVizJ86t5DQ-1",
      },
      // { type: "live", label: "Live link", url: "#" },
      // { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    company: "ZENTURA AGENCY",
    role: "CEO & Co-Founder",
    period: "May 2026 – Present",
    location: "Dhaka, Bangladesh · Remote",
    description:
      "Lead studio direction, client partnerships, and product strategy. Work with clients and a cross-functional team to understand problems, clarify requirements, define priorities, and guide digital products from concept through release.",
  },
  {
    company: "FB INTERNATIONAL BD",
    role: "Junior UI/UX Designer",
    period: "Oct 2025 – Apr 2026",
    location: "Dhaka, Bangladesh",
    description:
      "Led end-to-end UI/UX design for 5 projects, from initial research and wireframing to high-fidelity design and deployment. Collaborated closely with developers to ensure seamless implementation, focusing on usability, consistency, and delivering user-centered solutions.",
  },
  {
    company: "ARBEIT TECHNOLOGY LIMITED",
    role: "UI/UX Research & Design Intern",
    period: "Jul 2025 – Oct 2025",
    location: "Dhaka (Remote)",
    description:
      "Contributed to the design of a CMS product by conducting user research, creating wireframes, and developing interactive prototypes. Focused on improving content workflows, usability, and system efficiency through data-driven design decisions.",
  },
  {
    company: "VECTOR CHECKMATE INC.",
    role: "User Interface Designer Intern",
    period: "Jan 2024 – May 2024",
    location: "Dhaka (Remote)",
    description:
      "Designed a mobile application interface from concept to high-fidelity, focusing on usability, visual consistency, and responsive design. Worked closely with developers to ensure seamless and pixel-accurate implementation.",
  },
];

// ── Recommendations ─────────────────────────────────────────
// Excerpts from recommendations on LinkedIn, February 2026.
export const recommendations = [
  {
    name: "Joy Sarkar",
    context: "Client at the time · February 2026",
    quote:
      "Tamim has a strong understanding of user flows, interaction design, and visual hierarchy. He collaborates effectively with cross-functional teams, welcomes feedback, and iterates quickly to ensure designs are both practical and impactful.",
    url: "https://www.linkedin.com/in/mhtamimm/#recommendations",
  },
  {
    name: "Rabab Khan Rongon",
    context: "Direct manager at Vector Checkmate · February 2026",
    quote:
      "What impressed me most was his willingness to understand product context rather than just complete assigned tasks.",
    url: "https://www.linkedin.com/in/mhtamimm/#recommendations",
  },
];

// ── Credentials ──────────────────────────────────────────────
export const education = {
  institution:
    "IUBAT — International University of Business Agriculture and Technology",
  degree: "B.Sc. in Computer Science & Engineering",
  period: "2021 – 2025",
  cgpa: "CGPA: 3.56",
  thesis:
    "An Efficient Priority-Based Securing Data Transfer Approach Using Cryptography Algorithms",
  projects: [
    "Tic Tac Toe (C Language)",
    "Banking Calculation (C++ Language)",
    "Property Management (.NET MVC)",
    "Hospital Management System (PHP, HTML/CSS, MySQL)",
    "Dhaka Metro Ticketing System (MERN Stack)",
  ],
};

export const certifications = [
  {
    issuer: "GP Academy",
    title: "Figma Design System",
    date: "Feb 2026",
    issuedAt: "2026-02",
    url: "https://drive.google.com/file/d/1OrKIryrvR4mQ5k_hOeF5RVV0WikIAmMJ/view?usp=sharing", // ← update with certificate URL
  },
  {
    issuer: "Enhancing Digital Government and Economy (EDGE)",
    title: "Web Development Essentials",
    date: "May 2025",
    issuedAt: "2025-05",
    url: "https://drive.google.com/file/d/1mtyzdx7uJoFN9xEUivurKfN2aT5yinUM/view?usp=sharing",
  },
  {
    issuer: "Google UX Design Certificate",
    title: "Fundamentals of User Experience Design",
    date: "July 2024",
    issuedAt: "2024-07",
    url: "https://drive.google.com/file/d/1Zt3e0k8MKdWfF0EPFJ0v4_KcW4RN3KdM/view?usp=sharing",
  },
  {
    issuer: "Google UX Design Certificate",
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    date: "Aug 2024",
    issuedAt: "2024-08",
    url: "https://drive.google.com/file/d/1QXD7S4lOxiJqo5ERTr-Zi95mNpOXqgOo/view?usp=sharing",
  },
  {
    issuer: "Great Learning Academy",
    title: "Introduction to Web Designing",
    date: "Oct 2024",
    issuedAt: "2024-10",
    url: "https://drive.google.com/file/d/1a6ESYNQxlS4CaR5Ff9lZf_WsK02ct69A/view?usp=sharing",
  },
  {
    issuer: "Great Learning Academy",
    title: "UI/UX for Beginners",
    date: "Sep 2024",
    issuedAt: "2024-09",
    url: "https://drive.google.com/file/d/1Oe0k3S14ixf1T41cTo5SonpQSNq4TEJj/view?usp=sharing",
  },
];

// ── Blog Posts ────────────────────────────────────────────────
export const blogPosts = [
  {
    title: "THE UX REVOLUTION: CRAFTING INTUITIVE USER EXPERIENCES",
    category: "Inspiration",
    date: "Apr 8, 2025",
    url: "#",
  },
  {
    title: "FROM SKETCH TO SCREEN: A DESIGNER'S GUIDE TO UI PERFECTION",
    category: "Design",
    date: "Apr 3, 2025",
    url: "#",
  },
  {
    title: "BUILDING DESIGN SYSTEMS THAT ACTUALLY SCALE",
    category: "Systems",
    date: "Mar 31, 2025",
    url: "#",
  },
  {
    title: "ACCESSIBILITY IS NOT A FEATURE — IT'S A FOUNDATION",
    category: "Research",
    date: "Mar 7, 2025",
    url: "#",
  },
];
