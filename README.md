# Riventure — Studio-Quality Websites at Startup Speed

A high-performance, vanilla HTML/CSS/JS agency landing page for **Riventure** — an AI-native digital agency for ambitious startups. Built without any frameworks or build tools. Every interaction, animation, and visual effect is implemented from scratch.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS (custom properties, no preprocessor) |
| Scripting | Vanilla JavaScript (ES6+, no frameworks) |
| Fonts | Cabinet Grotesk (display) + Inter (body) — self-hosted `.woff2` |
| Icons | Inline SVG |
| Logos | External SVGs via [svgl.app](https://svgl.app) |
| Deployment | GitHub → `main` branch |

---

## File Structure

```
Riventure/
├── index.html          # Single-page layout — all sections
├── style.css           # All styles (~1 200 lines)
├── script.js           # All interactivity (~640 lines)
├── .gitignore
├── README.md           # This file
└── assets/
    ├── favicon.png
    ├── webclip.png     # Apple Touch Icon
    ├── fonts/
    │   ├── CabinetGrotesk-Black.woff2
    │   ├── CabinetGrotesk-Bold.woff2
    │   ├── Inter_18pt-Regular.woff2
    │   ├── Inter_18pt-Medium.woff2
    │   └── Inter_18pt-SemiBold.woff2
    └── icons/          # Local SVG fallbacks for logo cells
        ├── claudeai-icon.svg
        ├── openai-icon.svg
        ├── google-icon.svg
        ├── cursor-icon.svg
        ├── webflow-icon.svg
        ├── cloudflare-icon.svg
        ├── vercel-icon.svg
        └── github-icon.svg
```

---

## Page Sections

| # | ID | Heading (h-level) | Description |
|---|---|---|---|
| — | `hero` | `h1` | Full-screen hero with animated sphere, scroll indicator |
| — | logos | — | Tool logo grid (4×2, bordered cells) |
| 01 | `services` | `h2` | 6-row service list with hover arrows |
| 02 | `about` | `h2` | Split layout — animated canvas grid + founder story + process steps |
| 03 | `work` | `h2` | 4-card portfolio grid with outcome metrics |
| 04 | `testimonials` | `h2` | 3-card testimonial grid with outcome-specific quotes |
| — | CTA | `h2` | Full-width call-to-action with globe canvas |
| 05 | `contact` | `h2` | Split layout — info + contact form |
| — | footer | — | Brand + 3-column navigation |

### Heading Hierarchy

```
h1  Hero — "Studio-quality websites. Startup speed."
h2  Services — "Everything your startup needs to launch."
h2  About — "Built by a founder, for founders."
  h3  Strategy & Direction
  h3  Design & Motion
  h3  Development & Launch
h2  Work — "Selected projects"
  h3  Nexus Analytics
  h3  Maison Luxe
  h3  Vertex Capital
  h3  MedSync Pro
h2  Testimonials — "Founders who shipped with us."
h2  CTA — "Ready to build something bold?"
h2  Contact — "Let's build your next thing."
  h3  Footer: Services / Company / Connect
```

No heading levels are skipped. Testimonial author names use `<p class="test-author-name">` (not headings) since they are label text, not document structure.

---

## CSS Architecture

### Custom Properties

Defined in `:root` and overridden in `[data-theme="dark"]`:

```css
--bg          /* Page background */
--fg          /* Primary foreground / text */
--fg-muted    /* Secondary text */
--fg-dim      /* Tertiary text / decorative */
--border      /* All borders and dividers */
--bg-sub      /* Shaded cells (logo grid, etc.) */
--accent      /* Interactive accent (matches --fg) */
--accent-glow /* Soft glow for magnetic buttons */
--radius      /* Border-radius base (100px = pill) */
--ease        /* Custom cubic-bezier for all transitions */
```

### Theme Values

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#f1f1f1` | `#161616` |
| `--fg` | `#161616` | `#f1f1f1` |
| `--border` | `rgba(22,22,22,0.12)` | `rgba(241,241,241,0.1)` |
| `--bg-sub` | `#e8e8e8` | `#1e1e1e` |

### Font Stack

```css
/* Display / headings */
font-family: 'Cabinet Grotesk', sans-serif;
font-weight: 900 (Black) or 700 (Bold);
letter-spacing: -0.05em;
text-transform: uppercase;

/* Body */
font-family: 'Inter', -apple-system, sans-serif;
font-weight: 300–600;
```

---

## JavaScript Modules

All logic lives in `script.js`, organised by section comment blocks:

| Section | What it does |
|---|---|
| **Reduced Motion** | Reads `prefers-reduced-motion`; skips all animations if true |
| **Loader** | Counts from 0→100 on page load, then fades out |
| **Cursor** | Smooth-follow custom cursor; snaps instantly on the About grid; morphs to eye shape on grid hover |
| **Theme** | Toggles `data-theme="dark"` on `<html>`; persists to `localStorage` |
| **Mobile Nav** | Opens/closes slide-in overlay; traps focus; closes on outside click |
| **Smooth Scroll** | Intercepts anchor clicks for smooth section scroll |
| **Reveals** | `IntersectionObserver` on `.fade-up` elements — adds `.visible` class at 15% threshold |
| **Logos Strip** | Separate observer adds `.in-view` to `.logos-strip` to trigger staggered logo reveal animation |
| **Sphere Parallax** | Throttled `scroll` listener moves `.hero-sphere` on the Y axis |
| **Magnetic Buttons** | `.mag-btn` elements attract toward the cursor within a 60px radius |
| **Tilt Cards** | `.work-card` elements tilt ±8° toward the cursor on `mousemove` |
| **Contact Form** | Client-side validation; submits via `fetch` to Formspree endpoint |
| **About Visual** | `<canvas>` — animated grid with random fading squares + cursor proximity glow; uses `IntersectionObserver` + `ResizeObserver`; respects `prefers-reduced-motion` |
| **CTA Globe** | `<canvas>` — rotating wireframe globe with orbital dots |
| **Keyboard Support** | Makes `.service-row` elements activatable via Enter/Space for accessibility |

---

## Animation System

### Scroll Reveal (`fade-up`)

Add `class="fade-up"` to any element. It starts hidden (`opacity: 0; transform: translateY(24px)`) and receives `class="visible"` when it crosses 15% into the viewport.

Delay modifiers: `fd1` through `fd5` add `0.1s` increments.

```html
<p class="fade-up fd2">Visible with a 0.2s delay after entering viewport</p>
```

### Staggered Logo Reveal

The `.logos-strip` wrapper receives `.in-view` via its own observer. Each `.logo-item` uses a CSS custom property `--i` for stagger:

```css
animation-delay: calc(var(--i, 0) * 0.07s);
```

### About Canvas Grid

- **Auto animation**: 15 squares randomly fade in → out → reposition using `performance.now()` timestamps
- **Cursor effect**: ±2 cell radius around cursor gets an opacity fill proportional to distance
- **Eye cursor**: When hovering `.about-visual-wrap`, the custom cursor morphs to an oval with a pupil via `.cursor.on-grid`
- **Performance**: `IntersectionObserver` cancels `requestAnimationFrame` when the section is off-screen; `ResizeObserver` resets the canvas on container resize; DPR-aware scaling

---

## Logo Grid (Tools Section)

4×2 grid layout (2 columns on mobile) using CSS Grid with shared borders.

| Logo | Source | Type |
|---|---|---|
| Claude | `svgl.app/library/claude-ai-wordmark-icon_light.svg` | Wordmark |
| OpenAI | `svgl.app/library/openai_wordmark_light.svg` | Wordmark |
| Google | `svgl.app/library/google-wordmark.svg` | Wordmark |
| Cursor | `svgl.app/library/cursor_wordmark_light.svg` | Wordmark |
| Webflow | `svgl.app/library/webflow.svg` | Icon |
| Cloudflare | `svgl.app/library/cloudflare.svg` | Icon |
| Vercel | `svgl.app/library/vercel_wordmark.svg` | Wordmark |
| GitHub | `svgl.app/library/github_wordmark_light.svg` | Wordmark |

Dark mode: all logos receive `filter: brightness(0) invert(1)` to render as white.

`+` corner markers (`.logo-cross`) appear at the 3 internal grid-line intersections on desktop (hidden on mobile).

---

## Accessibility

- Skip-to-content link (`#main-content`)
- All interactive elements keyboard-navigable (Enter/Space on service rows)
- `aria-label` on all icon-only buttons and SVGs
- `aria-live="polite"` on contact form status messages
- `role="list"` / `role="listitem"` on data lists
- `prefers-reduced-motion`: disables loader, canvas animations, and scroll reveals
- `prefers-color-scheme` is supplemented by manual toggle (stored in `localStorage`)
- Semantic heading hierarchy — no skipped levels (h1 → h2 → h3)

---

## Git & Deployment

```bash
# Remote
https://github.com/rasyadgericko/riventure.git

# Branch
main

# Deploy: push to main — no CI, no build step required
git add <files>
git commit -m "your message"
git push origin main
```

There is no build process. The site is static HTML/CSS/JS — open `index.html` directly in a browser or serve with any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

---

## Local Development

No dependencies to install. Open the file directly:

```bash
# Option 1 — open directly
open index.html

# Option 2 — local server (avoids CORS issues with fonts)
npx serve .
# or
python3 -m http.server 8080
```

---

## Contact Form

The form at `#contact` uses `fetch` to POST to a Formspree endpoint. To wire it up:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint URL
3. In `script.js`, find the `CONTACT FORM` section and replace the `action` URL:

```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... });
```

---

*Last updated: February 2026*
