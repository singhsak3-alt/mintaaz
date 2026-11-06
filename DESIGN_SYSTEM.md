# Mintaaz design system

Rules for anyone (person or AI) changing this site. The approved design is in the
reference HTML pages and the build brief. **Do not change it.** New pages and
sections reuse what's listed here; they don't invent new styles.

## Where things live

| What | File |
| --- | --- |
| Tokens (colours, fonts, radii, widths, motion) | `src/app/globals.css` (`@theme`) |
| Nav, email, social and legal links | `src/content/site.ts` |
| Project list + "Next project" order | `src/content/projects.ts` |
| Case-study content (one file per project) | `src/content/work/<slug>.tsx` |
| Case-study building blocks | `src/components/case/primitives.tsx` |
| Page copy | `src/content/home.ts`, `workPage.ts`, `about.ts`, `contact.ts`, `services.ts` |
| Services, client logos | `src/content/services.ts`, `src/content/clients.ts` |
| Shared components | `src/components/` |
| Images and videos | `public/images/` (names from `image-map.csv`) |

## Tokens: use these, nothing else

Colours (Tailwind class names): `ink` #0A0A0A · `paper` #FFF · `accent` #4338CA ·
`accent-hover` #3730A3 · `accent-soft` #EEF0FF · `accent-line` #C7CBF5 · `accent-tint` #A5B4FC · `wood` #C98354 · `wood-dark` #5B3A20 (home marquee only: `.mz-band`, a drifting `wood` → `wood-dark` cloud gradient, from the hero artwork) ·
`text-1` #262626 · `text-2` #404040 · `text-3` #525252 · `text-4` #A3A3A3 (dark panels only) ·
`on-dark` #D4D4D4 · `line` #E5E5E5 · `line-strong` #D4D4D4 · `line-soft` #EDEDED · `line-faint` #F0F0F0 · `line-dashed` #BDBDBD · `placeholder` #8A8A8A · `surface` #FAFAFA · `surface-2` #F2F2F2.

Client brand colours appear **only** inside that client's case-study image areas and swatches.

Fonts: `font-sans` Inter Tight (all text) · `serif-accent` Instrument Serif italic (one or two
words per heading) · `font-mono` / `eyebrow` JetBrains Mono (labels, meta).

Radii: `rounded-pill` buttons/chips · `rounded-panel` 36px dark panels · `rounded-hero` 32px ·
`rounded-card-lg` 28px · `rounded-card` 24px · `rounded-tile` 20px · `rounded-inner` 14px.

Layout: `container-site` (1320px, 32px sides, 16px on phones) · wide dark panels
`max-w-[var(--container-wide)]` inside `px-4`. Sections are 96–128px apart (`pt-24`–`pt-32`).
Dividers are always 1px `border-line` (1.5px white only on dark panels).

## Components: compose pages from these

| Need | Use |
| --- | --- |
| Any button or button-styled link | `ButtonLink` / `Button` (`primary`, `secondary`, `inverse`; `sm`/`md`/`lg`). A disabled `Button` fades to 40% opacity and ignores hover/clicks |
| Section heading | `SectionHeader` (`size="section"` or `"case"`) + `Accent` for the italic word |
| Project tile | `ProjectCard` (`feature` on Home, `grid` on Work) |
| "What we do" panel | `ServicesPanel` |
| Logo strip | `LogoMarquee` |
| FAQ | `FaqAccordion` |
| Closing black CTA | `CtaBand` |
| Case-study top | `CaseHero` |
| Case-study end | `NextProject` |
| Any image or video | `MediaImage` / `MediaVideo` (or `Img` / `Video` in case studies). Never a raw `<img>`. |
| Case-study sections | `CaseSection`, `Split`, `SideHeading`, `Band` + `BandHeader`, `Statement` |
| Case-study content | `Frame`, `Grid`, `Gap`, `Card`, `Stat`, `Swatches`, `Steps`, `FeatureRow`, `Pills`, `List` |

## Behaviour rules

- Internal links use `next/link`; never pass `scroll={false}`. `ScrollToTop` opens pages at the top.
- `mailto:` and external links use `<a>`; external links open in a new tab with `rel="noopener"`.
- Actions (filters, tabs, accordion, play) are `<button>`s with `aria-pressed` / `aria-selected` / `aria-expanded`.
- Every animation must be safe under `prefers-reduced-motion` (handled globally in `globals.css`).
- Text contrast is at least 4.5:1, and touch targets are at least 44px tall.
- Placeholder copy stays visible in `[square brackets]` until real content is supplied.

## Adding a case study

1. Add an entry to `projects` in `src/content/projects.ts` (name, tags, card summary, cover).
   Its position in the list sets the "Next project" loop.
2. Copy an existing file in `src/content/work/` to `<slug>.tsx`, fill in `hero`, `facts`, `cta`
   and `body`, composing `body` only from `components/case/primitives`.
3. Register it in `src/content/work/index.ts`.
4. Put the images in `public/images/<slug>/`. Paths in content can leave out the extension;
   until a file exists, a grey placeholder tile with the alt text is shown.

The template (`src/app/work/[slug]/page.tsx`) adds the breadcrumb, hero, facts row,
"Next project" and the closing CTA. Don't rebuild those inside a case study.
