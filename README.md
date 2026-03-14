# PC's Paddock Restaurant

Official website for **PC's Paddock**, a family-owned American tavern located inside a renovated 1840s barn in Poughkeepsie, NY. Open since 2007, known for award-winning wings, an onsite smoker, fresh herb garden, and upscale comfort food.

**Address:** 273 Titusville Rd, Poughkeepsie, NY 12603
**Phone:** 845-454-4930
**Hours:** Tue–Thu 12–9 PM · Fri & Sat 12–9:30 PM · Sun 12–8 PM · Mon Closed

---

## Tech Stack

- Single-file `index.html` — all CSS and JS inline
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- Google Fonts: Playfair Display · Lora · Cinzel
- Vanilla JS — no frameworks or build tools required

---

## Local Development

**Serve the site:**
```bash
node serve.mjs
```
Opens at [http://localhost:3000](http://localhost:3000)

**Take a full-page screenshot:**
```bash
node screenshot.mjs http://localhost:3000
# Saved to: temporary screenshots/screenshot-N.png
```

**Screenshot a specific section:**
```bash
node screenshot-section.mjs hero
node screenshot-section.mjs about
node screenshot-section.mjs menu
node screenshot-section.mjs specials
node screenshot-section.mjs hours
node screenshot-section.mjs order
node screenshot-section.mjs reservations
node screenshot-section.mjs footer
```

> Requires Puppeteer installed at `C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer`

---

## File Structure

```
index.html                  — Full site, single file
serve.mjs                   — Local static file server (port 3000)
screenshot.mjs              — Full-page screenshot via Puppeteer
screenshot-section.mjs      — Per-section screenshot via Puppeteer
screenshotsections.mjs      — Batch screenshot all sections
brand_assets/
  pcs_logo_alt.png          — Used in nav + footer
  pcs_logo_round.jpg        — Used in hero
  pcs_logo_shield.png       — Used in about section
  images/
    bbq_smoker.jpg          — Hero background
    pcs_paddock_entrance.jpg — Reservations section background
    chicken_wings.jpg       — Staple menu card
    paddock_bruger.jpg      — Staple menu card
    chimichuri_steak.jpg    — Staple menu card
    bourbon_street.jpg      — Staple menu card
    uber_eats_logo.svg      — Order section
    grubhub_logo.png        — Order section
  menu/
    menu_1.jpg              — Full menu reference
    menu_2.jpg              — Full menu reference
    specials/               — Specials reference images
```

---

## Sections

| # | Section | Notes |
|---|---------|-------|
| 1 | Navigation | Sticky, mobile hamburger drawer |
| 2 | Hero | BBQ smoker photo + animated smoke effect |
| 3 | About | Story, shield logo, badges |
| 4 | Menu | 4 staple cards + slide-up full tabbed menu |
| 5 | Specials | Happy Hour · Wine Wednesdays · St. Patrick's Day |
| 6 | Hours & Location | Full weekly hours + contact info |
| 7 | Order Online | Uber Eats · Grubhub · Call for Takeout |
| 8 | Reservations | Entrance photo background + phone CTA |
| 9 | Email Signup | Free dessert offer, newsletter opt-in |
| 10 | Footer | Logo + address + hours summary |

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--green-deep` | `#1B4332` | Primary brand green |
| `--cream` | `#F5EDD8` | Parchment backgrounds |
| `--gold` | `#C9A84C` | Accents, dividers, CTAs |
| `--brown` | `#6B3F2A` | Warm body text |
| `--charcoal` | `#1C1C1C` | Dark sections, footer |
