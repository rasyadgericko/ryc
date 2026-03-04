# CLAUDE.md — RYC Project Guidelines

Rules and guidelines for Claude when working on the RYC website (`rycworks.com`).

---

## Project Overview

**RYC** is an AI-native digital agency landing page. It is a vanilla static site — no frameworks, no build tools. Every change is a direct edit to `index.html`, `style.css`, or `script.js`.

**Live URL:** https://www.rycworks.com
**Repo:** https://github.com/rasyadgericko/ryc
**Hosting:** Static (Vercel/GitHub Pages)

---

## Stack & Constraints

- **HTML5 / CSS3 / Vanilla JS (ES6+)** — no React, no Tailwind, no bundler
- **No npm install** for the main site — zero runtime dependencies
- **No build step** — files are served directly as-is
- Self-hosted fonts, inline-referenced SVG icons, canvas-based animations
- The `design-system/` folder is a separate Storybook project — do not touch it unless explicitly asked
- **Design system access:** `rycworks.com/?designsystem` redirects to `rycworks.com/storybook/`
- The `/storybook/` folder at root is the **built Storybook output** — do not hand-edit it; always rebuild via `cd design-system && npm run build-storybook`

---

## File Structure

```
/
├── index.html          ← Single page (all sections live here)
├── style.css           ← All styles (~2,264 lines, organized by section)
├── script.js           ← All JS (~1,180 lines)
├── assets/
│   ├── fonts/          ← Self-hosted WOFF2 (Cabinet Grotesk + Inter)
│   ├── icons/          ← SVG brand logos for the marquee strip
│   └── works/          ← Project screenshots (WebP)
├── favicon.ico
├── webclip.png         ← Apple touch icon (180×180)
└── ryc-opengraph.jpg   ← Social preview image (1200×630)
```

---

## Brand Identity

### Colors

All colors use CSS custom properties. Never hardcode a hex value — always use the token.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#f1f1f1` | `#0f0f0f` | Page background |
| `--fg` | `#161616` | `#f1f1f1` | Primary text, headings |
| `--fg-muted` | `#555` | `#aaa` | Secondary text |
| `--fg-dim` | `#777` | `#777` | Tertiary text, eyebrows |
| `--border` | `rgba(22,22,22,0.12)` | `rgba(241,241,241,0.1)` | Borders, dividers |
| `--bg-sub` | `#e8e8e8` | `#151515` | Cards, sub-sections |
| `--radius` | `100px` | `100px` | Pill-shaped elements |
| `--ease` | `cubic-bezier(0.16,1,0.3,1)` | same | Custom easing |

**Green pulse** (`#22c55e`) is used only for the availability status dot — do not repurpose it.

### Typography

**Two fonts, no others.** Do not introduce new fonts.

| Font | Weights | Use |
|---|---|---|
| Cabinet Grotesk | 900 (Black), 700 (Bold) | All headings (h1–h3), logo, nav brand |
| Inter | 400, 500, 600 | Body copy, labels, buttons, form fields |

**Heading rules:**
- Always `font-weight: 900`, `text-transform: uppercase`, `letter-spacing: -0.04em` to `-0.05em`
- Line height: `0.92`–`1.05` (tight)
- Size: use `clamp()` for responsive scaling, never fixed `px` on headings

**Eyebrow/label rules:**
- `font-size: 0.68rem`–`0.72rem`, `font-weight: 700`, `letter-spacing: 0.1em`–`0.25em`, `text-transform: uppercase`
- Color: `var(--fg-dim)` or `var(--fg-muted)`

### Visual Style

- Minimalist, high-contrast, premium
- Thin `1px` borders using `var(--border)`
- Subtle noise texture on body (do not remove the `::before` pseudo-element)
- Pill-shaped (`border-radius: var(--radius)`) buttons and tags
- No drop shadows on static elements — shadows only appear on hover

---

## Sections Reference

| Section | Selector / ID | Notes |
|---|---|---|
| Navigation | `<nav>` | Fixed, z-index 1000 |
| Hero | `#hero` | Canvas wave animation, do not alter canvas logic |
| Logo Marquee | `.logos-strip` | Infinite scroll; all `<img>` must have `width` + `height` attributes |
| Services | `#services` | 3-col grid → 2 → 1; spotlight hover effect |
| Process | `#process` / `.how-we-work` | 5-step alternating layout with SVG illustrations |
| About | `#about` | Split layout; left = animated canvas grid |
| Work / Portfolio | `#work` | Left sidebar + right tilt card stage |
| Stats | `.stats-strip` | Dark background, 4 metrics; uses inverted border tokens |
| Testimonials | `#testimonials` | 1 featured + 2 sub-testimonials |
| CTA | `.cta` | Floating pills + globe canvas |
| Contact | `#contact` | Split layout; form posts to Formspree |
| Footer | `<footer>` | 3-col nav + social links |

---

## CSS Rules

### CSS Organization

`style.css` is organized by section — each block is labeled with a comment header like:
```css
/* ===== SECTION NAME ===== */
```
Add new styles in the correct section block, not at the bottom of the file.

### Responsive Breakpoints

Always handle all four breakpoints when adding new components:

| Breakpoint | Target |
|---|---|
| `1200px` | Adjust gaps / layout fine-tuning |
| `1024px` | Collapse 2-column layouts, 3-col → 2-col grids |
| `768px` | Mobile nav, reduce section padding |
| `480px` | Single column everything, tighten typography |

Section padding pattern: `padding: 8rem 4vw` (desktop) → `6rem 5vw` (tablet) → `5rem 6vw` (mobile).

### Animations

- All keyframes go in the `/* ===== ANIMATIONS ===== */` block
- Every animation must have a `@media (prefers-reduced-motion: reduce)` override that disables or flattens it
- Use `var(--ease)` for transitions on interactive elements
- Reveal animations (`.fade-up`, `.reveal-text`) are one-shot — triggered by IntersectionObserver, do not re-trigger

### Specificity

- Do not use `!important`
- Do not use inline styles in HTML (except JS-driven dynamic values like canvas dimensions)
- Theme variants go in `[data-theme="dark"]` blocks, co-located with their base styles

---

## HTML Rules

### Image Requirements

Every `<img>` must have:
- `width` and `height` attributes (prevents CLS, required for PageSpeed)
- `alt` attribute (empty `alt=""` is acceptable for purely decorative images)
- Use `loading="lazy"` for below-fold images; **never** on above-fold images

### Heading Hierarchy

The page has one `<h1>` (hero). All section titles are `<h2>`. Sub-items within sections are `<h3>`. Do not skip levels.

### Accessibility

- Every icon-only button needs `aria-label`
- Interactive non-button elements (e.g., service rows) need `role="button"` + `tabindex="0"` + keyboard handlers (Enter/Space)
- Form fields need `<label>` or `aria-label`
- Dynamic content updates need `aria-live="polite"` where relevant
- Do not remove `class="skip-link"` from the top of `<body>`

### Meta / SEO

When updating page content (headline, description, services), also update:
- `<title>`
- `<meta name="description">`
- `og:title`, `og:description`
- Schema.org JSON-LD blocks (`<script type="application/ld+json">`)

---

## JavaScript Rules

- All JS lives in `script.js` — no inline `<script>` blocks in HTML (except analytics tags)
- Always check `prefersReducedMotion` before starting canvas or animation logic
- Always check `isTouchDevice` before adding magnetic/tilt effects
- Canvas elements must use `ResizeObserver` to handle responsive resizing
- Canvas must scale by DPR (device pixel ratio): `Math.min(window.devicePixelRatio, 2)`
- Use `IntersectionObserver` to pause animations when off-screen (performance)
- Theme changes must propagate to canvas colors — check the existing `updateTheme()` pattern

---

## Adding a New Section

Follow this checklist every time:

1. **HTML** — Add the section in `index.html` in logical page order. Use a semantic element (`<section>`, `<div>`) with an `id` matching its nav anchor.
2. **Nav link** — Add a link in both the desktop nav and the mobile menu if the section is primary.
3. **CSS** — Add a clearly labeled block in `style.css` in the corresponding position. Handle all 4 breakpoints.
4. **Animations** — If the section has reveal animations, add `.fade-up` or `.reveal-text` classes; they are auto-picked up by the IntersectionObserver in `script.js`. Add `prefers-reduced-motion` override.
5. **Accessibility** — Proper heading level, ARIA labels, keyboard support.
6. **Images** — Include `width`, `height`, `alt`, and `loading` attributes.
7. **Dark mode** — Test both themes. Add `[data-theme="dark"]` overrides if needed.
8. **Backup** — After the section is working, ask to create a new `backup/YYYY-MM-DD` branch.

---

## Adding a New Logo to the Marquee

1. Place the SVG in `assets/icons/`
2. Add the `<img>` tag to **all 4** `.logos-set` divs (they are duplicates for infinite scroll)
3. Include `width`, `height`, `alt=""`, and `class="logo-img"` on every `<img>`
4. The dark mode filter (`brightness(0) invert(1)`) applies automatically via `.logo-img`

---

## Updating the Brand

### Color Change
1. Update the CSS custom property values in `:root` and `[data-theme="dark"]`
2. Update `--accent` and `--accent-glow` if applicable
3. Check canvas colors in `script.js` — they are hardcoded strings that must match the new values
4. Update `ryc-opengraph.jpg` if the brand color change is significant

### Font Change
1. Add new WOFF2 files to `assets/fonts/`
2. Add `@font-face` declarations at the top of `style.css`
3. Add `<link rel="preload">` for the new font files in `<head>` of `index.html`
4. Update all `font-family` references
5. Remove unused font files and their preload links

### Logo / Name Change
Update in all of these locations:
- `<nav>` brand text
- `<footer>` brand text
- `<title>` and all `<meta>` tags
- Schema.org JSON-LD
- `og:site_name`
- `alt` text on any logo images

---

## Git & Backup Workflow

- **Main branch** (`main`) is the production branch — always keep it deployable
- **Backup branches** follow the naming convention `backup/YYYY-MM-DD`
- Create a new backup branch before any significant refactor or brand update
- Never force-push to `main`
- Commit messages should be short and descriptive (e.g., `add pricing section`, `fix mobile nav overflow`, `update hero headline`)

---

## Skills to Use

Claude Code skills extend my capabilities for specific task types. Use the right skill for the right job rather than doing everything manually.

### `/frontend-design` — New sections, UI components, visual updates

Invoke this skill when:
- Building a new page section from scratch
- Redesigning an existing section (hero, services, pricing, etc.)
- Creating new UI components (cards, buttons, modals, tabs)
- Improving visual polish or layout quality
- Updating the overall look and feel of the site

This skill enforces production-grade design quality and avoids generic AI aesthetics. It is the primary skill for most RYC development work.

```
/frontend-design build a new [section name] section for the RYC site...
```

---

### `/webapp-testing` — Verify changes work correctly in the browser

Invoke this skill when:
- After adding or modifying a section to confirm it renders correctly
- Checking responsive layouts across breakpoints
- Verifying animations, hover states, and interactive elements
- Catching visual regressions after a refactor
- Confirming dark/light theme renders correctly
- Checking PageSpeed or accessibility issues before committing

Uses Playwright to take screenshots and inspect live browser behavior.

```
/webapp-testing check the new [section] on desktop and mobile, both light and dark theme
```

---

### `/canvas-design` — Static visual assets

Invoke this skill when:
- Creating or regenerating `ryc-opengraph.jpg` (social preview image)
- Designing a new illustration or banner asset for the site
- Producing a poster or static graphic for marketing use

Output is a `.png` or `.pdf` file, not HTML.

```
/canvas-design create a new OG image for RYC with the headline "..."
```

---

### `/simplify` — Code review after changes

Invoke this skill after completing any significant edit to `index.html`, `style.css`, or `script.js`. It will:
- Check for redundant or duplicated code
- Suggest cleaner CSS patterns
- Flag unused variables or dead code
- Ensure consistency with existing conventions

```
/simplify
```

---

### `/pdf` — Generating PDF documents

Invoke this skill when:
- Exporting a proposal, case study, or client report as a PDF
- Producing a printable version of any RYC content

---

### Skill Trigger Summary

| Situation | Skill |
|---|---|
| Adding or redesigning a section | `/frontend-design` |
| Checking the site visually after changes | `/webapp-testing` |
| Creating/updating OG image or static art | `/canvas-design` |
| Reviewing code quality after edits | `/simplify` |
| Exporting a client-facing document | `/pdf` |

---

## What NOT to Do

- Do not install npm packages into the root site directory
- Do not introduce a JavaScript framework (React, Vue, etc.) to the main site
- Do not use `!important` in CSS
- Do not add inline styles to HTML
- Do not skip accessibility requirements (alt text, ARIA labels, keyboard support)
- Do not hardcode hex colors — use CSS custom properties
- Do not add a new font family without explicit approval
- Do not remove the noise texture, the skip-link, or the theme toggle
- Do not add `<img>` tags without `width`, `height`, and `alt` attributes
- Do not commit `.env` files or API keys
