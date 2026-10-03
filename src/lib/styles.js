// Shared class strings. See DESIGN.md for when to use each one.

export const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

// Stretches a link over its nearest `relative` ancestor so the whole card is clickable.
// Other links inside the card need `relative z-10` to stay clickable.
export const cardLink = "after:absolute after:inset-0 after:rounded-md focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-primary";

export const eyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-primary";

// The content column shared by the navbar, every page, and the footer, so their left edges line up.
export const shell = "mx-auto w-full max-w-6xl px-6 sm:px-10";

// Outer wrapper for every top-level page except Home.
export const page = `${shell} pb-20 pt-16 text-left md:pb-28 md:pt-24`;

// Outer wrapper for /projects/* case studies (less top padding to make room for the back link).
export const caseStudyPage = `${shell} pb-20 pt-10 text-left md:pb-28 md:pt-16`;

// The main action on a screen gets `buttonPrimary`; everything beside it gets `buttonOutline`.
export const buttonPrimary = `cosmic-button inline-flex min-h-12 items-center gap-2 ${focusRing}`;
export const buttonOutline = `inline-flex min-h-12 items-center gap-2 rounded-full border bg-background/60 px-6 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/5 ${focusRing}`;

// `linkPrimary` leads somewhere new ("Full career", "Explore projects");
// `linkQuiet` is a secondary or external reference ("Full experience on LinkedIn", "← All projects").
export const linkPrimary = `inline-flex items-center gap-1 rounded-sm py-2 text-sm font-medium text-primary hover:underline ${focusRing}`;
// `linkUnderline` is the single headline action in a case-study header ("Explore the code").
export const linkUnderline = `inline-flex w-fit items-center gap-2 border-b border-primary pb-2 text-sm font-medium text-primary transition-colors hover:text-foreground ${focusRing}`;
export const linkQuiet = `inline-flex items-center gap-1 rounded-sm py-2 text-sm text-muted transition-colors hover:text-primary ${focusRing}`;
