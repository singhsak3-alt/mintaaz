# Mintaaz website

The Mintaaz studio site: Home, Work, Services, About, Contact and 15 case studies.
Built with Next.js 16 (App Router, Cache Components), TypeScript and Tailwind CSS v4.

Before changing anything, read **[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)**. The design is fixed;
new work reuses the existing tokens and components.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

## Images and videos

All media goes in `public/images/`, named as in `image-map.csv` from the design bundle
(for example `public/images/tenx/tenx-app-icon-558458.png`). Any extension works.
Until a file is added, the page shows a grey placeholder tile with its alt text.

## Contact form

`/api/contact` emails submissions through [Resend](https://resend.com). Set these in
Vercel → Project → Environment Variables (or `.env.local` for local testing):

| Variable | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_…` |
| `CONTACT_TO` | `info@mintaaz.com` |
| `CONTACT_FROM` | `Mintaaz <website@mintaaz.com>` (must be a verified Resend sender) |

Without `RESEND_API_KEY`, submissions are logged in development and rejected in production.
A hidden honeypot field filters simple spam bots.

## Placeholders still to replace

Search the project for `[` inside quotes to find them:

- Home CTA reply time `[X]`
- About: founder/team names, bios, photos, milestone years and stories, story paragraphs, mission/vision sentences
- Contact: street address, FAQ price range and start time
- Services: 3D studio render and showreel video
- `src/content/site.ts`: social profile URLs, Privacy and Terms pages, production domain
- `src/content/contact.ts`: swap the "Book a meeting" email link for a booking link if you have one
