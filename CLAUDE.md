# Working on this repo

- Follow `DESIGN.md` for all UI work. Reuse `src/components/ui/` and `src/lib/styles.js` before
  writing new class strings, and update `DESIGN.md` when you add or change a shared pattern.
- Use the color tokens (`text-muted`, `text-subtle`), never `text-foreground/NN` opacities.
- Site content lives in `src/data/`. See "Updating content" in `README.md`.
- Never put the contact email in client code or the repo. It lives only in the `CONTACT_TO_EMAIL`
  environment variable on Vercel.
- Run `npm run lint && npm run build` before calling a change done.
