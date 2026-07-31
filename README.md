# Y Squared — Youth Squared Youth Services

Marketing site for **Y Squared Youth Services Inc.**, a Tampa Bay nonprofit
running S.T.E.A.M. academies and creative programs for youth.

> Today's youth. Tomorrow's leaders.

## Stack

- **Next.js 16** (App Router, static export-friendly) + **TypeScript**
- **Tailwind CSS v4** (theme tokens derived from the logo)
- **Motion** (`motion/react`) for the draw-on logo, scroll reveals, and magnetic CTAs
- Self-hosted fonts via `next/font`: **Spectral** (display serif), **Outfit** (UI), **IBM Plex Mono** (labels)

## Design direction

Institutional-heritage aesthetic with cinematic scroll moments — navy +
metallic silver pulled straight from the Y² mark. Built with the anti-"AI-slop"
[taste-skill](.agents/skills/taste-skill) design system (real design language,
restrained motion, no templated eyebrows).

The Y² logo is rebuilt as an animatable SVG (`components/LogoMark.tsx`): the
frame draws on, the serif **Y** wipes up, and the metallic exponent settles in.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx          section composition
  globals.css       design tokens + base layer
components/
  LogoMark.tsx      animated Y² SVG (draw-on)
  LogoLockup.tsx    mark + wordmark (header/footer)
  Header.tsx        sticky nav with scroll state
  Hero.tsx          hero + pointer parallax
  Mission.tsx  Steam.tsx  Programs.tsx
  Approach.tsx  Involve.tsx  Closer.tsx  Footer.tsx
  Reveal.tsx        scroll-into-view wrapper
  MagneticButton.tsx magnetic CTA (motion values)
public/
  favicon.svg       Y² mark favicon
```

## TODO — real photography (the final 10%)

The program cards currently use designed navy "brand plates" as tasteful
placeholders. Swapping in real photos of the programs is what pushes this from
"beautiful" to "unmistakably prestigious." Suggested shot list:

| Placement | Shot |
|---|---|
| Hero (optional) | Wide, warm photo of a student mid-build / mid-focus |
| The Writers Room | A student at a mic or notebook, mid-thought |
| Media Masters | A kid behind a camera / at an editing screen |
| Y Squared Tech | Hands on a laptop with real code / an AI tool open |
| Kids in the Kitchen | A student plating or tasting a finished dish |
| Homeschool Co-Op | A small group collaborating around a table / project |

Shoot landscape, natural light, candid (not posed), consistent warm-neutral
grade so they sit together. Drop them in `public/programs/` and wire them into
the `Plate` component in `components/Programs.tsx`.

## Not yet built (suggested next steps)

- Mobile nav menu (hamburger) — desktop nav is hidden < 1024px; CTAs + footer
  cover navigation for now
- Real enrollment / volunteer / sponsorship forms (links are placeholders)
- Actual logo asset + generated favicon set (current mark is a faithful SVG
  rebuild)
