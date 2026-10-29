# Makibul Hossain Tamim — Portfolio

Personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. To check the production version:

```sh
npm run lint
npm run build
npm start
```

## Content

Edit `app/data/portfolio.ts` for profile information, experience, capabilities,
projects, education, certifications, recommendations, and contact links.
`featured: true` places a project in the main grid; other projects appear under
“Explore more work.” Project context and existing Figma/live links remain
available in the expandable details.

The homepage introduces the founder, shows selected work, explains the studio,
and includes capabilities, experience, recommendations, credentials, and contact.
The neutral palette and typography are defined in `app/globals.css`.

## Project artwork

The images in `public/projects/` are the original public Behance project covers:

- Renewably UK: https://www.behance.net/gallery/241451871/Renewably-UK-Certificate-Management-Platform
- MEM: https://www.behance.net/gallery/242534927/MEM-A-Client-First-Contractor-Operating-System
- Cresify: https://www.behance.net/gallery/244518373/Cresify-A-Multivendor-and-service-Provide-Platform
- SportPicks: https://www.behance.net/gallery/244275909/SportPicks-A-Modern-Sports-Analytics-Platform

Project cards identify personal roles. MEM is presented as collaborative
product discovery and UX architecture. Renewably distinguishes the personal
UI/UX case study from Zentura's broader team delivery. Recommendations are
attributed LinkedIn excerpts from February 2026, with links to the source.

## Contact configuration

Copy `.env.example` to `.env` and supply the email settings it describes.
Keep credentials out of source control. The contact endpoint is
`app/api/contact-me/route.ts`.
