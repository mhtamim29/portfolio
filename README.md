# MHT Portfolio — Next.js 14

A clean, professional portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — faithfully implementing the Figma design.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 File Structure

```
src/
├── app/
│   ├── layout.tsx          ← Page metadata (title, description)
│   ├── page.tsx            ← Assembles all sections in order
│   └── globals.css         ← Google Fonts + Tailwind base
│
├── data/
│   └── portfolio.ts        ← ⭐ ALL CONTENT LIVES HERE — edit this file
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← Fixed top navbar + mobile hamburger menu
│   │   └── Footer.tsx      ← Footer with social icons + back to top
│   │
│   ├── sections/           ← One file per page section
│   │   ├── Hero.tsx        ← Name, title, tagline, photo, CV download
│   │   ├── About.tsx       ← Bio + stats (20+, 7+, 1+)
│   │   ├── Skills.tsx      ← Accordion skill categories
│   │   ├── Projects.tsx    ← Project list with links
│   │   ├── Experience.tsx  ← Work history timeline
│   │   ├── Credentials.tsx ← Education + certifications
│   │   ├── CallToAction.tsx← Dark banner section
│   │   └── Contact.tsx     ← Contact form + info
│   │
│   └── ui/                 ← Reusable small components
│       ├── SocialIcons.tsx ← LinkedIn, Behance, Instagram, Dribbble
│       ├── LinkBadge.tsx   ← Project link tags (Figma, Live, Case Study)
│       └── SectionLabel.tsx← "SECTION NAME /" label
│
public/
└── cv/
    └── MHT-CV.pdf          ← Place your CV here
```

---

## ✏️ How to Edit Content

**All your content is in one file: `src/data/portfolio.ts`**

### Update personal info
```ts
export const siteConfig = {
  name: 'Your Name',
  email: 'your@email.com',
  cvPath: '/cv/your-cv.pdf',   // ← file must exist in /public/cv/
  socials: {
    linkedin: 'https://linkedin.com/in/...',
    behance: 'https://behance.net/...',
    // ...
  },
}
```

### Add a project
```ts
export const projects = [
  {
    index: '01',
    title: 'PROJECT NAME',
    subtitle: 'Short description',
    description: 'Longer paragraph...',
    links: [
      { type: 'figma', label: 'Figma', url: 'https://figma.com/...' },
      { type: 'live', label: 'Live link', url: 'https://...' },
      { type: 'caseStudy', label: 'Case Study', url: 'https://...' },
      { type: 'github', label: 'GitHub', url: 'https://github.com/...' },
    ],
    featured: true, // dark background for hero project
  },
  // ...
]
```

### Add a certification
```ts
export const certifications = [
  {
    issuer: 'Google',
    title: 'UX Design Certificate',
    date: 'Jan 2026',
    url: 'https://...',  // ← certificate link opens in new tab
  },
]
```

### Add a work experience
```ts
export const experience = [
  {
    company: 'COMPANY NAME',
    role: 'Your Role',
    period: 'Jan 2024 – Present',
    location: 'Dhaka, Bangladesh',
    description: 'What you did...',
  },
]
```

---

## 📄 CV Download

1. Place your CV file in `/public/cv/` (e.g. `MHT-CV.pdf`)
2. Update `siteConfig.cvPath` in `src/data/portfolio.ts`:
   ```ts
   cvPath: '/cv/MHT-CV.pdf',
   ```
3. The "Download CV" button will automatically trigger a download.

---

## 📬 Contact Form

The form defaults to opening a `mailto:` link. To receive emails properly, integrate a form service:

**Formspree (easiest — free tier available)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form, copy your endpoint ID
3. In `src/components/sections/Contact.tsx`, find the `handleSubmit` function
4. Uncomment the Formspree block and replace `YOUR_FORM_ID`

---

## 🖼️ Profile Photo

To replace the profile photo:
1. Add your image to `/public/images/` (e.g. `profile.jpg`)
2. In `src/components/sections/Hero.tsx`, change:
   ```ts
   const PROFILE_IMAGE = 'https://...'
   // to:
   const PROFILE_IMAGE = '/images/profile.jpg'
   ```

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploy

Works on any platform:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: set build command to `npm run build`, publish dir to `.next`
- **Self-hosted**: run `npm run build && npm run start`
