# PC's Paddock

Website for PC's Paddock — a family-owned American restaurant in a renovated
1840s barn in Poughkeepsie, NY. Open since 2007. Known for award-winning
wings, an onsite smoker, and a fresh herb garden.

## Stack

HTML5 · Tailwind CSS (CDN with custom config) · Lora + Playfair Display +
Cinzel (Google Fonts)

## Pages

- `index.html` — Main site
- `brand-identity.html` — Brand style guide

## Running it

Open `index.html` in a browser. No build step.

## Design

Custom Tailwind config extended with the brand palette:

```css
--green-deep: #1B4332;  --green-mid: #2D6A4F;
--cream: #F5EDD8;       --parchment: #E8D5B0;
--gold: #C9A84C;        --brown: #6B3F2A;
```

Font system: Cinzel (logo/display), Playfair Display (headings), Lora (body).

A fixed full-page grain texture overlay (`body::before`) using an inline SVG
`feTurbulence` filter adds texture without an image request. Scroll behavior
is smooth via `html { scroll-behavior: smooth }`.
