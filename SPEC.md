# README design system — "Specimen"

A foundry specimen sheet. The conceit: GitHub SVGs cannot load webfonts, so the
only type available is the reader's own system stack — the page makes a specimen
of exactly that constraint. Nothing on the page is decorative; the type *is* the
graphic.

23 plates, each in a light and a dark cut (46 SVGs) under `/graphics`, plus two
avatar rasters.
`README.md` only stacks `<picture>` blocks — GitHub strips all CSS, so every
piece of layout lives inside the SVG.

## Ground rules

- **No painted backgrounds.** Every plate draws on transparent ground, so it sits
  correctly on `#ffffff`, `#0d1117`, dimmed `#22272e` and high contrast alike.
- **Two cuts, identical geometry.** `*-light.svg` / `*-dark.svg` differ only in
  palette, wired with `<picture><source media="(prefers-color-scheme: dark)">`.
- **Alt text is the content.** SVG text is invisible to Google and to screen
  readers, so every alt is a full descriptive sentence carrying the app name,
  what it does and its platforms. On app plates the alt is also the link text.

## Type

Two families, four weights. There is no third font and no colour doing the work
type should do.

| Role | Family | Size / weight | Tracking |
|---|---|---|---|
| Name (masthead) | sans | 88 / 200 | −1.2 |
| App name | sans | 38 / 300 | −0.6 |
| Section label | sans | 20 / 400 uppercase | +8 |
| Tagline | mono | 16 / 400, bracketed, in a dashed frame | 0 |
| Sample setting (descriptions) | sans | 15.5 / 400 | 0 |
| Contact value | sans | 15 / 400 | 0 |
| Annotation, eyebrow, metadata | mono | 9–10.5 uppercase | +1.4 to +3.4 |
| Guide labels (CAP / X-HEIGHT / BASELINE) | mono | 8 | +1.6 |

```
sans: Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif
mono: ui-monospace, SFMono-Regular, SF Mono, Consolas, Menlo, monospace
```

Weights 200 and 300 resolve to Segoe UI Light on Windows and Helvetica Neue
Thin/Light on macOS. On a system with neither (some Linux setups) they fall back
to regular — the page gets heavier but the layout does not move.

## Palette

Monochrome, plus one ink used only for guides, index numerals and the
"currently building" label. Roughly two dozen marks of colour on the whole page.

| Role | Light cut | Dark cut |
|---|---|---|
| Text | `#101114` | `#eceef1` |
| Sample setting / secondary | `#5c5f66` | `#9aa0a8` |
| Annotation / muted | `#9a9da3` | `#6c727a` |
| Rule (section, frame) | `#c9ccd1` | `#41464d` |
| Hairline (row divider, cell) | `#e2e4e7` | `#2a2e34` |
| Ink (guides, indices) | `#a8412e` | `#d98368` |

## Grid & spacing

| | |
|---|---|
| Design width | **720px** (GitHub's column is ~900px desktop, ~380px phone) |
| Text origin | x = 0, flush left on every plate |
| Right rail | anchored to x = 720, `text-anchor="end"` |

720 rather than 900 on purpose: the plate scales down to the phone's ~380px, so a
narrower design width buys ~25% more effective type on mobile. Nothing is set
below 8px at design size, and that 8px is only the three guide labels.

Vertical rhythm inside plates: 22px between description lines, 26px from index
row to name baseline, 28px from name baseline to first description line. Between plates, rhythm comes from the blank lines in the
markdown — GitHub renders each `<picture>` as its own block.

## Plates

| File | Size | Job |
|---|---|---|
| `masthead` | 720 × 278 | Name at 88/200 with cap-height, x-height and baseline guides ruled across the sheet; tagline set in mono inside a dashed frame below the baseline |
| `building` | 720 × 96 | Currently-building block: ink label, platform tag, headline at 20/300, sample setting |
| `section-*` | 720 × 58 | 3px cap rule, letterspaced label, hairline, "01 / 05" counter |
| `app-*` | 720 × 120–142 | One app as a specimen: index, platforms, version, name at 38/300, sample setting. The version `<text>` carries `data-repo`, which is how the refresh job finds it |
| `stack-*` (×4) | ~90 × 20 | Group label in mono, sized to the text, sitting in a table header cell |
| Stack frame | — | Four separate single-column markdown tables, one per group. GitHub draws and themes the frame; the header cell holds the label plate, the body cell holds shields.io flat-square badges at `#41464d` with brand-coloured logo glyphs |
| `downloads` | 720 × 88 | Linked call to action: the site set at 34/300, ink arrow at the right |
| `social-*` (×2) | 616 × 132 | Platform card: ink label, outline mark, handle at 32/300, URL in mono, count right-aligned on the URL line. Sits flush against a 104px avatar image whose own top and bottom rules continue the plate's, so the hairlines run unbroken across the full 720 |
| `colophon` | 720 × 64 | Email row |

## Version numbers keep themselves current

Each app plate's version sits in its own `<text data-repo="Photon">v1.2.0</text>`.
`.github/workflows/refresh-versions.yml` runs `tools/refresh-versions.mjs` daily
(and on demand), reads each repo's latest release tag from the GitHub API,
rewrites the string in both cuts, and commits only if something moved. The number
stays real type inside the SVG rather than a badge pinned underneath it.

To add a repo to the job, nothing: it reads `data-repo` off whatever plates exist.
To opt a plate out, drop the `data-repo` attribute — that is how The Pit is skipped.

## Adding another app

Indices run 01–07 in Software and 08 (The Pit) in Lab, so a new app takes 08 and
The Pit moves to 09.

1. Copy any `graphics/app-*.svg` pair. Change the name, the description, the
   platform string, the version and the two-digit index. Description height:
   120px total for one line, 142px for two (each extra line is +22px, and
   `height`/`viewBox` must both change).
2. Add one `<a href="…"><picture>…</picture></a>` block to `README.md` in the
   Software section, with a full-sentence alt beginning with the index.
3. Renumber any later plates' indices (currently just The Pit).
4. If the app has releases, give the version `<text>` a `data-repo` matching the
   repo name so the refresh job picks it up.

No plate references any other, and the markdown is a flat stack — reordering apps
is moving one block.

## Known constraints, accepted

- **Mobile.** At ~380px the plates render at ~53%: the app name reads at ~20px,
  the sample setting at ~8px. The alt text carries the same sentence verbatim.
  If mobile legibility matters more than the sheet's proportions, drop the design
  width to 560 and re-run the sizes at the same ratios.
- **Follower counts are static, set in the card SVGs.** Shields' YouTube subscriber endpoint returns `invalid` (its upstream is dead) and Instagram exposes no public counter at all, so both numbers are drawn as text and need editing by hand. A live count would need a small Cloudflare Worker calling the YouTube Data API and the Instagram Graph API, with shields `dynamic/json` pointed at it.
- **Avatars** are 104 × 132 PNGs in two cuts (`graphics/avatar-<platform>-<cut>.png`), sitting inline before each card. A committed SVG cannot fetch an external image, so the photo cannot live inside the plate; instead the plate's top and bottom rules are drawn into the avatar PNG as well, so the hairlines run unbroken across the whole row. Source photos stay as `avatar-instagram-208.png` / `avatar-youtube.jpg`.
- **One third-party fetch**, the only thing on the page not committed to the
  repo: img.shields.io, for the stack badges and the three live GitHub counters
  (followers, stars, last ship). github-readme-stats.vercel.app was tried first
  and is dead — the whole host is unreachable, including its own demo URLs.
- **iOS** appears in Platforms only. Nothing is claimed as a shipped iOS project;
  send me those and I will set the plates.
- **Design-system deviation.** The bound Baron Gartner system's gradient app tile
  and five-bar wave mark are not used here, at your direction. The type scale,
  hairline-and-flat-surface treatment and the anti-hype voice are kept.
