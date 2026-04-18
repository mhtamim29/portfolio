// ============================================================
// DATA FILE — Edit all your portfolio content here
// ============================================================
// This is the single source of truth for your entire website.
// Update names, links, descriptions, and everything else here.
// ============================================================

export const siteConfig = {
  name: "Makibul Hossain Tamim",
  initials: "MHT",
  title: "Junior UI/UX Designer",
  tagline:
    "I craft precise, research-driven digital experiences — bridging the gap between user insight and pixel-perfect execution.",
  email: "mhtamimm29@gmail.com",
  phone: "+880 1777-914331",

  // ── CV ──────────────────────────────────────────────────────
  // Place your CV file inside /public/cv/ and set the filename here.
  // Example: if your file is /public/cv/MHT-CV.pdf, set: '/cv/MHT-CV.pdf'
  cvPath:
    "https://drive.usercontent.google.com/u/0/uc?id=1dlS-YrYuHubFNqYBmKXortMVOQ0dI65p&export=download",

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

// ── About Stats ─────────────────────────────────────────────
export const stats = [
  { value: "20+", label: "Clients Served" },
  { value: "7+", label: "Projects Handled" },
  { value: "2+", label: "Years Experience" },
];

// ── Skills ───────────────────────────────────────────────────
export const skills = [
  {
    title: "UX Research & Design",
    tags: [
      "User Interviews",
      "Usability Testing",
      "Persona Development",
      "User Journey Mapping",
      "Information Architecture",
      "Wireframing",
    ],
  },
  {
    title: "UI & Prototyping",
    tags: [
      "Figma",
      "Interactive Prototyping",
      "Design Systems",
      "Component Libraries",
      "Responsive Design",
      "Developer Handoff",
    ],
  },
  {
    title: "Interaction & Visual Design",
    tags: [
      "Typography",
      "Color Theory",
      "Layout Principles",
      "WCAG Accessibility",
      "Version Control (Figma Libraries)",
      "Cross-functional Collaboration",
    ],
  },
  {
    title: "Development",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Git",
      "Responsive Design",
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
// Add as many link types as you need per project.
// Supported types: 'figma' | 'live' | 'caseStudy' | 'github' | 'behance' | 'dribbble'
export const projects = [
  {
    index: "01",
    title: "CRESIFY",
    subtitle: "Multi-Vendor E-Commerce Platform",
    description:
      "Designed a scalable multi-vendor platform covering three distinct user roles — buyer, seller, and service provider — each with a tailored flow. Delivered 30+ screens with a reusable component library, reducing design duplication across breakpoints.",
    links: [
      { type: "figma", label: "Figma", url: "https://www.figma.com/design/B6NdR0OTPEfGQ1ssz8jauL/Cresify?node-id=0-1&t=iABe26PSSzjeCtTM-1" }, // ← update
      { type: "live", label: "Live link", url: "https://cresify.com/" }, // ← update
      { type: "caseStudy", label: "Case Study", url: "https://www.behance.net/gallery/244518373/Cresify-A-Multivendor-and-service-Provide-Platform#" }, // ← update
    ],
  },
  {
    index: "02",
    title: "RENEWABLY UK",
    subtitle: "Insurance & Compliance Dashboard",
    description:
      "Designed a secure, compliance-focused dashboard for UK renewable energy contractors. Built end-to-end certificate generation flows with validation states, real-time status tracking, and WCAG AA contrast — appropriate for a high-stakes regulated environment.",
    links: [
      { type: "figma", label: "Figma", url: "https://figma.com/" },
      { type: "live", label: "Live link", url: "https://renewably.energy/" },
      { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
  {
    index: "03",
    title: "ART NEIDICH",
    subtitle: "Property Inspection Platform",
    description:
      "Designed a structured inspection workflow platform enabling field teams to log, track, and report property conditions. Focused on reducing cognitive load across complex data-entry flows through clear information hierarchy and guided UI patterns.",
    links: [
      { type: "figma", label: "Figma", url: "https://figma.com/" },
      { type: "live", label: "Live link", url: "#" },
      { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
  {
    index: "04",
    title: "SUSTAINABLE ENERGY SOLUTIONS",
    subtitle: "Renewable Energy Project Management",
    description:
      "Designed a project management tool for renewable energy initiatives, focusing on sustainability metrics and stakeholder collaboration. Created intuitive dashboards for tracking project progress, resource allocation, and environmental impact.",
    links: [
      { type: "figma", label: "Figma", url: "https://figma.com/" },
      { type: "live", label: "Live link", url: "#" },
      { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
  {
    index: "05",
    title: "GREEN TECH SOLUTIONS",
    subtitle: "Sustainable Technology Platform",
    description:
      "Designed a platform for sustainable technology solutions, focusing on user engagement and environmental impact. Developed user-friendly interfaces for exploring eco-friendly products and services, with an emphasis on accessibility and visual appeal.",
    links: [
      { type: "figma", label: "Figma", url: "https://figma.com/" },
      { type: "live", label: "Live link", url: "#" },
      { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
  {
    index: "06",
    title: "ECO INNOVATIONS",
    subtitle: "Environmental Technology Solutions",
    description:
      "Designed a platform for environmental technology solutions, focusing on user engagement and sustainability. Created intuitive interfaces for exploring eco-friendly products and services, with an emphasis on accessibility and visual appeal.",
    links: [
      { type: "figma", label: "Figma", url: "https://figma.com/" },
      { type: "live", label: "Live link", url: "#" },
      { type: "caseStudy", label: "Case Study", url: "#" },
    ],
  },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    company: "FB INTERNATIONAL BD",
    role: "Junior UI/UX Designer",
    period: "Oct 2025 – Present",
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
    url: "#", // ← update with certificate URL
  },
  {
    issuer: "Enhancing Digital Government and Economy (EDGE)",
    title: "Web Development Essentials",
    date: "May 2025",
    url: "#",
  },
  {
    issuer: "Google UX Design Certificate",
    title: "Fundamentals of User Experience Design",
    date: "July 2024",
    url: "#",
  },
  {
    issuer: "Google UX Design Certificate",
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    date: "Aug 2024",
    url: "#",
  },
  {
    issuer: "Great Learning Academy",
    title: "UI/UX for Beginners",
    date: "Sep 2024",
    url: "#",
  },
  {
    issuer: "Great Learning Academy",
    title: "Introduction to Web Designing",
    date: "Oct 2024",
    url: "#",
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
