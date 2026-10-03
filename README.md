# ec1s.com — Adam Eccles's portfolio

Personal site for Adam Eccles: software engineer, former professional VALORANT in-game leader.
Live at **[ec1s.com](https://ec1s.com)**.

The site covers career history (tech and esports), project case studies, press coverage, and a contact
form that delivers messages without exposing an email address.

## Tech stack

| Area | Tool | Notes |
| --- | --- | --- |
| UI | [React 19](https://react.dev) | Function components, no state library |
| Build | [Vite 7](https://vite.dev) | Dev server, production build, sitemap plugin in `vite.config.js` |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) | Theme tokens and custom utilities in `src/index.css` |
| Routing | [React Router 7](https://reactrouter.com) | Client-side routes in `src/App.jsx` |
| Icons | [Lucide](https://lucide.dev) | `lucide-react` |
| Class helpers | `clsx` + `tailwind-merge` | Combined as `cn()` in `src/lib/utils.js` |
| Contact API | Vercel serverless function | `api/contact.js` (Node) |
| Linting | ESLint 9 | React Hooks and React Refresh rules |

## Services

| Service | Used for | Where it's configured |
| --- | --- | --- |
| [Vercel](https://vercel.com) | Hosting, serverless function, security and cache headers | `vercel.json`, Vercel dashboard |
| [Resend](https://resend.com) | Sending contact-form messages | Resend dashboard, Vercel environment variables |
| Domain registrar | `ec1s.com` DNS | Registrar dashboard (plus Resend DNS records if the domain is verified) |
| [GitHub](https://github.com/ec1s123/Website-Portfolio) | Source code | — |

## Getting started

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server. The contact form's API isn't available here. |
| `npx vercel dev` | Runs the site **and** `api/contact.js` locally, using your Vercel environment variables. |
| `npm run build` | Builds to `dist/` and generates `sitemap.xml`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint. |

## Environment variables

Set these in **Vercel → Project → Settings → Environment Variables**, then redeploy. They're only read by
`api/contact.js`; none of them reach the browser.

| Variable | Required | Value |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | API key from Resend with sending access |
| `CONTACT_TO_EMAIL` | Yes | The inbox that receives contact-form messages |
| `CONTACT_FROM_EMAIL` | No | Sender once `ec1s.com` is verified in Resend, e.g. `Portfolio <contact@ec1s.com>`. Without it, Resend's test sender is used, which only delivers to the email on your Resend account. |

Never commit these values. To use them locally, run `npx vercel env pull` (creates `.env.local`, which is
already ignored by git) and then `npx vercel dev`.

## Project structure

```
api/
  contact.js            Contact form endpoint: validation, spam checks, sends via Resend
public/
  resume.pdf            Résumé linked from the navbar, hero, footer and Contact page
  og-image.jpg          1200×630 link-preview image (LinkedIn, Slack, X)
  logos/                Organization logos; provenance in logos/SOURCES.md
  projects/             Project screenshots and charts (WebP for large images)
  robots.txt            Points crawlers to the sitemap
  theme-init.js         Applies the saved light/dark theme before React loads
src/
  App.jsx               Route definitions
  index.css             Theme colors, animations, starfield and utility classes
  pages/                Route-level pages (Home, Careers, case studies, 404)
  components/           Page sections (navbar, footer, careers, contact form…)
    ui/                 Shared design-system components (see DESIGN.md)
  data/                 Site content — edit these to update the site (see below)
  lib/                  Shared helpers: styles, contact validation, starfield, cn()
DESIGN.md               Design system: colors, type scale, layout, shared components
CLAUDE.md               Working rules for AI coding assistants
index.html              Meta description, Open Graph/Twitter tags, structured data
vercel.json             Security headers, caching rules, SPA rewrite
vite.config.js          Vite plugins, including the sitemap generator
```

## Design system

UI rules live in [`DESIGN.md`](DESIGN.md): color tokens, type scale, layout, and the shared
components in `src/components/ui/`. Check it before adding or restyling a page.

## Updating content

Most changes are data edits; the pages read from these files.

| To change… | Edit |
| --- | --- |
| Tech roles, esports teams, press articles | `src/data/careers.js` |
| Organization logos | Add the file to `public/logos/`, map it in `src/data/careerLogos.js`, note the source in `public/logos/SOURCES.md` |
| Project cards (Home and Projects pages) | `src/data/projects.js` |
| Case-study pages | `src/data/projectCaseStudies.js` for open-source projects. Premier Predict and the Conversation Intent Review Platform (a work project) have their own pages in `src/pages/`. |
| Featured projects on Home | `featuredProjects` in `src/components/HomeSections.jsx` |
| Esports stats on Home | `esportsStats` in `src/components/HomeSections.jsx` |
| Social and professional profiles | `src/data/socials.js` |
| Résumé | Replace `public/resume.pdf` (or point `resumeUrl` in `src/data/socials.js` at a hosted link) |
| Page titles and sitemap routes | `src/data/site.js` |
| Site URL | `siteUrl` in `src/data/site.js`, plus the absolute URLs in `index.html` |
| Link-preview text and image | `index.html` and `public/og-image.jpg` |
| Hero copy | `src/components/HeroSection.jsx` |

**Adding a case study:** add an entry to `projectCaseStudies.js`. It automatically gets a page at
`/projects/<slug>`, a card on the Projects page, a page title, and a sitemap entry.

**Adding images:** convert large PNG/JPG screenshots to WebP before adding them (a 2 MB PNG is
typically 50–200 KB as WebP), and include `width` and `height` so the layout doesn't shift while loading.

## How things work

### Contact form

1. `src/components/ContactForm.jsx` validates the fields in the browser and posts JSON to `/api/contact`.
2. `api/contact.js` checks the request, then sends the message through Resend's API with the visitor's
   address as **reply-to**, so replying from your inbox goes straight to them.
3. Both sides use the same rules from `src/lib/contactValidation.js`.

Spam protection, in order:

- **Same-origin check:** requests from other websites are rejected.
- **Honeypot:** a hidden `company` field that people never see; bots that fill it get a fake success.
- **Timing:** submissions within 1.5 seconds of page load get a fake success.
- **Rate limit:** 5 messages per IP per 10 minutes. This is per serverless instance, so it's best-effort;
  add a Vercel Firewall rate-limit rule on `/api/contact` for strict enforcement.
- **Validation and length limits** on every field.

The recipient address exists only in the `CONTACT_TO_EMAIL` environment variable. It isn't in the
source code or the built site.

### SEO and link previews

- `index.html` holds the meta description, Open Graph and Twitter tags, and JSON-LD `Person` data.
- `SiteLayout.jsx` sets each page's `<title>` and canonical URL on navigation.
- The sitemap is generated at build time from `pageTitles` in `src/data/site.js`.

After changing link-preview content, refresh LinkedIn's cache with the
[Post Inspector](https://www.linkedin.com/post-inspector/).

### Headers and caching (`vercel.json`)

- **Security headers** (CSP, HSTS, frame and referrer policies) apply to every path.
- **Pages** are never cached, so updates appear immediately.
- **`/assets/*`** (fingerprinted JS/CSS from Vite) is cached for a year.
- **`/projects/*` and `/logos/*`** are cached for a day.
- **Rewrites** send every route without a file extension to `index.html`, except `/api/*`.

The CSP only allows scripts, styles, images and connections from the site itself. Adding a third-party
script (analytics, embeds, CAPTCHA) requires updating the CSP in `vercel.json`.

## Deployment

When the Vercel project is connected to the GitHub repo, every push to `main` deploys to production and
other branches get preview URLs. Before pushing:

```bash
npm run lint && npm run build
```

After the first deploy with the contact form, send yourself a test message from
`https://ec1s.com/contact` to confirm Resend delivery.

## Housekeeping

- `@radix-ui/react-toast` and `class-variance-authority` are installed but unused, and can be removed.
- `public/_headers` uses Netlify/Cloudflare syntax and is ignored by Vercel; `vercel.json` is the source of truth.
- `public/crossdomain.xml` and `public/clientaccesspolicy.xml` are legacy Flash/Silverlight policy files and can be removed.
