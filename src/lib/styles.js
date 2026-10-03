// Shared class strings. See DESIGN.md for when to use each one.

export const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

// Stretches a link over its nearest `relative` ancestor so the whole card is clickable.
// Other links inside the card need `relative z-10` to stay clickable.
export const cardLink = "after:absolute after:inset-0 after:rounded-md focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-primary";

export const eyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-primary";

// Outer wrapper for every top-level page except Home.
export const page = "mx-auto max-w-6xl px-6 pb-20 pt-16 text-left sm:px-10 md:pb-28 md:pt-24";

// The main action on a screen gets `buttonPrimary`; everything beside it gets `buttonOutline`.
export const buttonPrimary = `cosmic-button inline-flex min-h-12 items-center gap-2 ${focusRing}`;
export const buttonOutline = `inline-flex min-h-12 items-center gap-2 rounded-full border bg-background/60 px-6 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/5 ${focusRing}`;

// `linkPrimary` leads somewhere new ("Full career", "Explore projects");
// `linkQuiet` is a secondary or external reference ("Full experience on LinkedIn", "← All projects").
export const linkPrimary = `inline-flex items-center gap-1 rounded-sm py-2 text-sm font-medium text-primary hover:underline ${focusRing}`;
export const linkQuiet = `inline-flex items-center gap-1 rounded-sm py-2 text-sm text-muted transition-colors hover:text-primary ${focusRing}`;
