# CLAUDE.md — Frontend Website Rules

## Always Do First
1. **Invoke the `frontend-design` skill** — establishes creative direction, aesthetic tone, and visual identity.
2. **Invoke the `ui-ux-pro-max` skill** — validates the design system against UX/accessibility rules and generates structured recommendations (color palette, typography, spacing system, component rules).
3. Do not write any frontend code until both skills have been invoked.

## Skill Integration: Design + UX
- `frontend-design` governs: aesthetic tone, font personality, color mood, motion character, layout drama.
- `ui-ux-pro-max` governs: contrast ratios (min 4.5:1), touch targets (min 44px), spacing rhythm (4/8px scale), animation timing (150–300ms), accessibility rules.
- When they appear to conflict, UX/accessibility rules from `ui-ux-pro-max` are **non-negotiable**. Creative choices must be adjusted to comply — not the other way around.
- After generating the design system from `ui-ux-pro-max`, extract the color palette, font pairing, and spacing scale and use those as the concrete implementation of the aesthetic direction from `frontend-design`.
- Never use `transition-all`. Only animate `transform` and `opacity`. (Both skills require this.)

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft using the direction from both skills.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer`. Chrome cache is at `C:/Users/ajsta/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## CCS Brand Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Derive all colors from the brand palette in `brand_assets/`.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Depth:** Surfaces must use a layering system (base → elevated → floating) — nothing sits at the same z-plane.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
