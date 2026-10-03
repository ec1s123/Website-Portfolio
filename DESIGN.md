# Design system

The rules for building pages on ec1s.com. Use the shared pieces listed here before writing new
class strings. If something new is needed, add it here and in `src/components/ui/` or
`src/lib/styles.js` so the next page can reuse it.

## Principles

- **Editorial, not app-like.** Content sits on the starfield, separated by hairline rules
  (`border-t`, `divide-y`) instead of boxed cards with fills and shadows.
- **One accent.** Primary violet marks what matters: eyebrows, dates, links, the period after a
  page title, and hairlines. Never use it for long passages of text.
- **Every role, project, and article gets its own entry.** Don't merge items to save space; the
  detail is the point.
- **Motion is optional.** Anything that moves on its own (the Home logo marquee) stops entirely
  under `prefers-reduced-motion`. The marquee intentionally has no pause control or hover pause
  (Adam's call: it should flow continuously).
- **Accessible by default.** Text meets WCAG AA in both themes, every interactive element shows
  `focusRing`, and external links say "(opens in a new tab)" to screen readers.

## Brand

- **No logo in the navbar.** Page links start at the left edge; profiles, Résumé, and the theme
  toggle sit on the right. The name is carried by each page's eyebrow ("Adam Eccles / Career") and
  the Home hero. On phones, "Menu" takes the left slot.
- **Favicon:** `public/icon.png`.

## Color

Defined in `src/index.css`. Light and dark values switch with the `.dark` class on `<html>`.

| Token | Use |
| --- | --- |
| `text-foreground` | Headings, titles, names |
| `text-muted` | Body copy, descriptions, secondary links (foreground at 70%) |
| `text-subtle` | Metadata: dates, employment types, captions, bylines (foreground at 60%) |
| `text-primary` | Eyebrows, dates in timelines, links, highlighted numbers |
| `bg-background` / `bg-card` | Page / form fields and other raised surfaces |
| `border` (default) | Hairline rules and dividers |
| `border-primary/40` | The left rule on hairline items |

Don't use `text-foreground/NN` opacities. Anything below 60% fails WCAG AA contrast in light
mode. The only exception is input placeholders (`placeholder:text-foreground/40`).

## Typography

The system font stack throughout. Pick from this scale instead of choosing sizes per page.

| Role | Classes | Example |
| --- | --- | --- |
| Page title (h1) | `PageHeader` | "Two paths. One drive." |
| Lead | `PageHeader` `lead` | The paragraph under a page title |
| Section title (h2) | `text-3xl font-semibold tracking-tight` (`md:text-4xl` via `SectionHeader`) | "Engineering & technology" |
| Group title (h3) | `text-xl font-semibold tracking-tight` | A role title, a game era, an About subsection |
| Item title | `text-sm font-semibold` (`HairlineItem`) | "Workflow automation platform" |
| Body, dense | `text-sm leading-7 text-muted` | Role summaries, section descriptions |
| Body, prose | `leading-7 text-muted` | About page paragraphs |
| Metadata | `text-xs text-subtle` | "Internship", "Dom Sacco · Jun 2025" |
| Eyebrow | `eyebrow` from `lib/styles` | "ADAM ECCLES / CAREER" |
| Date in a timeline | `text-sm font-medium tabular-nums text-primary` + `DateRange` | "Jan 2026 — May 2026" |

Section titles on Home end with a period ("Things I’ve built."). Page titles get a
primary-colored period from `PageHeader` automatically, so don't type one.

## Layout

- **Content column:** `shell` from `lib/styles`. The navbar, every page, and the footer use it, so
  their left edges line up. Don't use Tailwind's `container` for new layout.
- **Page wrapper:** `page` from `lib/styles` (`max-w-6xl`, `px-6 sm:px-10`, standard top and bottom
  padding). Every page except Home uses it.
- **Below the page header:** start the first block with `mt-14 border-t pt-10 md:mt-20 md:pt-14`.
- **Between sections:** a `border-t` with `pt-10`. Use `mt-8` after a `divide-y` list and
  `mt-16` otherwise.
- **Timeline rows:** `grid md:grid-cols-[12rem_1fr] md:gap-10` inside a `divide-y` list, with
  `py-8 first:pt-0`. The left column holds the date or label; the right column holds the content.
  Used by Career (both tracks) and Skills.
- **Spacing:** use `gap` on flex and grid parents, not margins on children.
- **Phones:** test at 390px. Nothing may scroll sideways.

## Components

Shared React components live in `src/components/ui/`, shared class strings in `src/lib/styles.js`.

| Piece | Where | Use it for |
| --- | --- | --- |
| `PageHeader` | `ui/PageHeader.jsx` | The top of every page except Home and the case studies: eyebrow, title, lead, and optional children such as a button |
| `SectionHeader` | `ui/SectionHeader.jsx` | A major section with an optional eyebrow, description, and "see more" link |
| `HairlineList` + `HairlineItem` | `ui/HairlineList.jsx` | Any group of short titled items: role highlights, projects, press, "Beyond playing". Sets the column count from the item count so nothing sits alone in a row. Set `as` to the correct heading level, and `wide` on an item much longer than its siblings to give it a full row. |
| `HairlineLink` | `ui/HairlineList.jsx` | A linked `HairlineItem` title. Use `to` for pages on this site and `href` for other sites. |
| `FeaturedProject` | `ui/FeaturedProject.jsx` | The lead project on the Projects page: media left, details right, whole card links to the case study. |
| `CaseStudyHeader` | `ui/CaseStudy.jsx` | Top of every `/projects/*` page: back link, eyebrow, title, intro, one headline action (`linkUnderline`), and four metadata items. Wrap the page in `caseStudyPage`. |
| `CaseStudySection` | `ui/CaseStudy.jsx` | A case-study section: label ("01 / The problem") and title on the left, content on the right |
| `NumberedList` | `ui/CaseStudy.jsx` | Steps that really are a sequence (pipeline stages). Don't number things that aren't ordered. |
| `TagList` | `ui/TagList.jsx` | Tool and skill pills under a role or project |
| `DateRange` | `ui/DateRange.jsx` | Any start–end date; renders "Present" when there's no end |
| `CareerLogo` | `CareerLogo.jsx` | Organization logos (`compact` in lists) |
| `ProjectCard` | `ProjectCard.jsx` | Project tiles on Home and Projects |
| `buttonPrimary` | `lib/styles` | The one main action on a screen |
| `buttonOutline` | `lib/styles` | Actions beside the main one (Résumé, LinkedIn) |
| `linkPrimary` | `lib/styles` | A link that leads somewhere new ("Full career", "Explore projects") |
| `linkQuiet` | `lib/styles` | A secondary or external reference ("Full experience on LinkedIn") |
| `cardLink` | `lib/styles` | Makes a whole card clickable; other links inside need `relative z-10` |
| `focusRing` | `lib/styles` | Focus style for any custom interactive element |

### When to use what

- **A list of things someone did or made** → `HairlineList`. Each item gets a short title (2–4 words)
  and a sentence or two. Don't use bullet points for these.
- **A list of names** (teams, profiles, skills) → a plain list or `TagList`, no hairlines.
- **A single highlighted figure** (Home stats, Premier Predict results) → a number in
  `text-primary` above a `text-xs text-subtle` label.
- **Boxed cards** (fill, radius, shadow) → only for screenshots, form fields, and figures that
  stand in for a screenshot (system diagrams, UI mockups with synthetic data). Caption every
  figure, and label synthetic examples as synthetic.
- **A project with no screenshots** (confidential work) → an HTML system diagram as the hero
  image. See `ConversationIntent.jsx`.

## Page structure

- **Projects:** personal projects only: one featured project, then the rest. Work projects live
  with their roles on the Career page (as highlights in `src/data/careers.js`, linked to a case
  study with `caseStudy`), so they aren't repeated here.

## Content

- Write in the first person and the active voice. Lead with what was built and the tools used.
- Keep claims to what the work supports. Client work stays anonymized (no client names,
  industries, or data).
- Use sentence case for titles, curly quotes and apostrophes (’), and an em dash with spaces for
  date ranges ("Jan 2026 — May 2026").

## Not yet migrated

These still use their own markup and should move to the shared pieces when next touched:

- The case-study bodies in `PremierPredict.jsx` and `ProjectCaseStudy.jsx` still hand-write their
  sections; move them to `CaseStudySection` and `NumberedList`.
- The Home hero (`HeroSection.jsx`) is intentionally unique, but its eyebrow should use `eyebrow`.
