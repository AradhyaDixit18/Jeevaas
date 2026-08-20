# Jeevaas Hospital — Website

Production website for **Jeevaas Hospital**, a multispeciality hospital in Kalyanpur, Kanpur.
Built with React (Create React App), React Router, Tailwind CSS, and Framer Motion.
Appointment and contact forms are delivered by EmailJS.

## Getting started

```bash
npm install
npm start        # local dev server at http://localhost:3000
npm run build     # production build → /build
```

## Where to edit content (no code changes needed)

Everything is driven from a few central files, so most updates are one-line edits:

| What | File |
| --- | --- |
| Hospital name, phone, emergency line, address, hours, email, social | `src/config/site.js` |
| Navigation menu (header, mobile, footer) | `src/config/nav.js` |
| Departments, facilities, patient info, health tips, FAQs, **careers/job openings** | `src/data/content.js` |
| Doctor profiles (empty by default — add real ones) | `doctors` array in `src/data/content.js` |
| Patient testimonials (empty by default — add consented reviews) | `testimonials` array in `src/data/content.js` |
| Colours, fonts, shadows | `tailwind.config.js` |
| Global styles / buttons / patterns | `src/index.css` |

### Adding a department
Add an object to the `services` array in `src/data/content.js` with a `slug`, `icon`
(see keys in `src/components/Icon.js`), `tone` (see `src/lib/tones.js`), `title`, `short`,
`overview`, `points`, `conditions`, and `good_for`. The card, detail page, footer,
booking form, and sitemap pick it up automatically.

### Adding / removing job openings
Edit the `jobOpenings` array in `src/data/content.js`. If the list is empty, the Careers
page automatically shows a general-application message instead.

## Fields to confirm before go-live
Search the code for `⚠ CONFIRM` in `src/config/site.js`:
production domain, whether a dedicated emergency / HR number should be shown, and OPD hours.
Once hours are verified, set `hoursConfirmed: true` to hide the "please confirm hours" note.

## Forms (EmailJS)
Public EmailJS identifiers live in `src/config/emailjs.js` (public keys are safe in the
browser). To change the destination inbox or templates, update the EmailJS dashboard and,
if needed, the environment variables listed in `.env.example`.

## Assets
The hospital logo lives at `public/logo.jpeg`. The design is icon- and gradient-driven,
so it has **no dependency on external or missing images** — nothing renders a broken image.
Real photographs can be added later (Gallery, Doctors, department banners) without code changes.

## Deployment
The build output (`/build`) is a static site. `vercel.json` includes the SPA rewrite so
client-side routes resolve correctly. Deploy to Vercel, Netlify, or any static host.
