# Monterey Finance — Website Styling Guide

Source of truth: [Marketing Application Designs, node `4896:141`](https://www.figma.com/design/CGQAIdmQwYIbZi4HVAV9Pm/Marketing-Application-Designs?node-id=4896-141). Desktop artboard is **1920 × 7918**.

This document is the implementation spec for fonts, tracking, color, gradients, components, and the labelled assets in `public/`.

---

## 1. Design intent

The site is a dark, full-bleed marketing canvas. A night skyline hero (`hero.png`) carries the brand aurora into the page. Below the fold, the same three-color glow returns as a clipped CTA banner. Type is a two-family system: **Advercase Regular** for display headlines and **Geist** for everything else. Tracking is tight on purpose — serif display at **−1%**, sans body at **−5%**.

---

## 2. Artboard and layout

| Token | Value |
| --- | --- |
| Frame | `Website` · 1920 × 7918 |
| Content inset (section titles / body) | 167px from the left (`8082 − 7915`) |
| Section body measure | 1297px |
| Hero | Full-bleed 1920 × 1081 |
| Navbar inset | 68px left, ~74px right |
| CTA / footer content inset | 108px (`8023 − 7915`) |
| CTA card | 1704 × 622, 38px radius |
| Page canvas after hero | Near-black `#000000` / `#02020C` |

### Vertical rhythm (from top of the 1920 frame)

| Section | Y | Height |
| --- | --- | --- |
| Hero | 0 | 1081 |
| Built from First Principles | 1355 | 929 |
| Live Fund Performance | 2467 | 1196 |
| Open Research Lab | 3848 | 997 |
| Models & Methodology | 5048 | 843 |
| Our Core Principles | 5996 | 398 |
| CTA box | 6543 | 622 |
| Footer | 7282 | 636 |

Headline-to-body gap is **104px** from the top of a 65px Advercase heading to the top of the Geist paragraph (81px heading box + 23px).

---

## 3. Color system

### Brand selection (banner)

These three swatches are the official selection colors on the 1500 × 500 wordmark banner. They travel through the hero skyline, the live-fund chrome, and the footer CTA.

| Role | Hex | RGB | Use |
| --- | --- | --- | --- |
| Cyan | `#00C8FF` | `0, 200, 255` | Lower glow, horizon, brightest aurora |
| Indigo | `#1D13B6` | `29, 19, 182` | Mid glow, brand blue |
| White | `#FFFFFF` | `255, 255, 255` | Logo, headlines, body, buttons |

Black is not in that three-color selection, but it is the **fourth structural color**: the top of every aurora, the page field, and the CTA fill.

### Surface and UI

| Token | Hex / value | Use |
| --- | --- | --- |
| `--bg-page` | `#000000` | Page field after the hero (screenshot sampling reads `#02020C`) |
| `--bg-card` | `#111111` | Models & Methodology tiles |
| `--bg-cta` | `#000000` | CTA rounded rectangle fill |
| `--text-primary` | `#FFFFFF` | Headlines, body, nav links, buttons |
| `--text-muted` | `#949494` | Footer column labels (`Navigation`, `Contact`) |
| `--live` | `#00CF6E` | 12px “Live Fund” status dot |
| `--nav-grad-start` | `rgba(74, 74, 74, 0.68)` | Navbar pill top (`#4A4A4A` at 68%) |
| `--nav-grad-end` | `#191919` | Navbar pill bottom at 96% / 95.673% |
| `--glass-fill` | `rgba(247, 247, 247, 0.16)` | Frosted buttons (`#F7F7F7` at 16%) |
| `--cta-border` | `#FFFFFF` | 1px solid on the CTA card |
| `--shadow-glass` | `0px 4px 11.8px rgba(0, 0, 0, 0.19)` | CTA glass button only |

### CSS variables

```css
:root {
  --color-cyan: #00c8ff;
  --color-indigo: #1d13b6;
  --color-white: #ffffff;
  --color-black: #000000;
  --color-page: #000000;
  --color-card: #111111;
  --color-muted: #949494;
  --color-live: #00cf6e;
  --glass-fill: rgba(247, 247, 247, 0.16);
  --nav-pill: linear-gradient(
    180deg,
    rgba(74, 74, 74, 0.68) 0%,
    #191919 95.673%
  );
}
```

---

## 4. Gradients

### 4.1 Brand aurora (primary)

The banner is **1500 × 500**. The glow is not a flat linear wash. It is a **soft, bottom-weighted aurora**:

1. True black across the top two-fifths.
2. Indigo `#1D13B6` blooming in from the lower half, slightly left of center.
3. Cyan `#00C8FF` hugging the bottom edge, hotter and lighter as it meets the frame.
4. White sitting on top for the logomark and wordmark.

Sampled stops on `public/cta-banner.jpg` (left-center, top → bottom):

| Position | Approx. hex |
| --- | --- |
| Top | `#000000` |
| Upper third | `#000000` → `#060527` |
| Mid | `#140D77` → `#1C13AC` (matches `#1D13B6`) |
| Lower third | `#1066D7` → `#03B9FA` |
| Bottom | `#10D7FE` → `#00C8FF` → near-white cyan |

CSS approximation (use the raster `cta-banner.jpg` in the CTA; this is the token fallback):

```css
.brand-aurora {
  background-color: #000000;
  background-image:
    radial-gradient(120% 70% at 35% 115%, #00c8ff 0%, transparent 55%),
    radial-gradient(90% 55% at 45% 105%, #1d13b6 0%, transparent 62%),
    radial-gradient(80% 40% at 70% 110%, #1d13b6 0%, transparent 50%);
}
```

In Figma the CTA rebuilds this with three blurred vector blobs, clipped to a 1704 × 622 rounded rect. The brightest cyan layer uses **`mix-blend-mode: plus-lighter`**.

**Where it appears**

- Wordmark banner (source of the three swatches)
- Hero skyline atmosphere (`hero.png` already paints the same cyan-to-indigo sky)
- Live Fund “browser chrome” header strip (`fund-performance.png`)
- Bottom CTA card (`cta-banner.jpg`)

### 4.2 Hero overlay

On top of `hero.png`:

```css
background-image: linear-gradient(
  to top,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.3) 86.124%
);
```

This slightly darkens the upper sky so the navbar and hero headline stay readable.

### 4.3 Navbar pills

Linear, top → bottom:

| Stop | Color | Opacity |
| --- | --- | --- |
| 0% | `#4A4A4A` | 68% |
| 96% (95.673% in file) | `#191919` | 100% |

```css
.nav-pill {
  background: linear-gradient(
    180deg,
    rgba(74, 74, 74, 0.68) 0%,
    #191919 95.673%
  );
  border-radius: 17px;
  height: 60px;
}
```

---

## 5. Typography

### 5.1 Chosen families

From the typography board, only two faces are selected (mint highlight):

| Family | Role | Weights in this file |
| --- | --- | --- |
| **Advercase Regular** | Display / editorial headlines, card titles, wordmark | Regular only |
| **Geist** | UI, body, nav, buttons, captions | Regular, Medium, Bold |

Considered and **not** used: Poppins, Inter, Gabarito, DM Sans, Roboto.

Geist is already wired in `app/layout.js` via `next/font/google`. Advercase is a custom serif and must be self-hosted (`next/font/local`) — it is not on Google Fonts.

```css
--font-display: "Advercase", serif; /* Regular */
--font-sans: "Geist", system-ui, sans-serif;
```

### 5.2 Tracking rules (the important part)

Figma letter-spacing is **percentage of font size**. Convert with `em`:

| Family | Letter-spacing | `em` | Example at 32px |
| --- | --- | --- | --- |
| **Advercase** | **−1%** | `-0.01em` | −0.32px |
| **Geist** | **−5%** | `-0.05em` | −1.6px |

This holds at every size in the file. Do not use a single pixel tracking value across the type scale.

```css
.font-display {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: -0.01em; /* −1% */
}

.font-sans {
  font-family: var(--font-sans);
  letter-spacing: -0.05em; /* −5% */
}
```

Proof against Figma tracking (px = size × percent):

| Style | Size | Tracking in file | Percent |
| --- | --- | --- | --- |
| Section headline | 65px Advercase | −0.65px | −1% |
| Hero headline | 48px Advercase | −0.48px | −1% |
| CTA headline | 83px Advercase | −0.83px | −1% |
| Paper title | 27px Advercase | −0.27px | −1% |
| Model card title | 20px Advercase | −0.20px | −1% |
| Section body | 32px Geist | −1.60px | −5% |
| Nav / pills | 24px Geist | −1.20px | −5% |
| Hero lede | 23px Geist | −1.15px | −5% |
| Glass button | 21px Geist | −1.05px | −5% |
| CTA button | 27px Geist | −1.35px | −5% |
| Card body | 16px Geist | −0.80px | −5% |
| Footer label | 28px Geist | −1.40px | −5% |

Exception: the footer wordmark (`49px` Advercase) has **no extra tracking** in the file — treat as `0` or keep −1% if the live wordmark is set in type rather than `full-logo.png`.

### 5.3 Line-height

| Style | Line-height | Notes |
| --- | --- | --- |
| Advercase section headlines (65px) | Auto → box 81px | ~1.25 |
| Advercase hero (48px, two lines) | `normal` | Box 120px |
| Advercase CTA (83px, two lines) | `normal` | Box 206px |
| Geist section body / pillars | **132%** (`1.32`) | Screenshot: 32px / 132% / −5% |
| Geist hero lede | **124%** (`1.24`) | 23px |
| Geist glass / CTA buttons | **118.5%** (`1.185`) | 21px / 27px |
| Geist footer description | **148%** (`1.48`) | 23px Medium |
| Geist nav + footer links | **22px** fixed | 24px and 28px labels share this cap height |

### 5.4 Type scale

#### Display — Advercase Regular, white, tracking −1%

| Name | Size | Line-height | Where |
| --- | --- | --- | --- |
| Display / CTA | 83px | `normal` | “Your Capital with Quantitative Shariah Discipline” |
| Section | 65px | auto (~81px) | Every content section title |
| Hero | 48px | `normal`, 2 lines, centered | “Quantitative Precision. Shariah Integrity.” |
| Footer wordmark | 49px | ~63px box | Footer (or use `full-logo.png`) |
| Paper title | 27px | `normal`, centered | Research cards |
| Card title | 20px | `normal` | Models & Methodology |

#### Sans — Geist, white, tracking −5%

| Name | Size | Weight | Line-height | Where |
| --- | --- | --- | --- | --- |
| Section body | 32px | Regular | 132% | All section intros, 1297px wide |
| Principle title | 32px | **Bold** | 132% | “Equities represent real assets.” etc. |
| Principle body | 32px | Regular | 132% | Same block, mixed weight |
| Principle (col 3) | 30px | Bold + Regular | 132% | “Technology ensures compliance.” |
| Nav links | 24px | Medium | 22px | Research · Universe · Strategies · About |
| Nav pills | 24px | Regular | `normal` | Live Fund, Github |
| Hero lede | 23px | Regular | 124% | 758px, centered |
| Footer body | 23px | Medium | 148% | 858px |
| Footer labels | 28px | Medium | 22px | `#949494` |
| Footer links | 24px | Medium | 22px | Home, Mission, Instagram… |
| Hero glass | 21px | Regular | 118.5% | Read Our Research Papers / View Live Performance |
| CTA glass | 27px | Regular | 118.5% | Explore Research Repositories |
| Paper subtitle | 20px | Regular | 132% | Centered, 389px |
| Card body | 16px | Regular | 132% | 329px, inside `#111` tiles |

### 5.5 Screenshot specs (Figma inspector)

**Section headline — “Built from First Principles”**

- Font: Advercase Regular
- Size: 65
- Line height: Auto
- Letter spacing: **−1%**
- Color: `#FFFFFF`
- Box: 697 × 81

**Section body**

- Font: Geist Regular
- Size: 32
- Line height: **132%**
- Letter spacing: **−5%**
- Color: `#FFFFFF`
- Box: 1297 × 126

**Principle column title**

- Font: Geist **Bold**
- Size: 32
- Line height: **132%**
- Letter spacing: **−5%**
- Mixed with Geist Regular for the sentence that follows
- Column width: 438px, centered

---

## 6. Components

### 6.1 Glass buttons (hero + CTA)

Figma **Glass** effect on the hero pair:

| Parameter | Value |
| --- | --- |
| Light | −45°, 80% |
| Refraction | 86 |
| Depth | 46 |
| Dispersion | 50 |
| Frost | 36 |
| Splay | 0 |
| Fill | `#F7F7F7` at **16%** |
| Corner radius | **9px** |
| Opacity | 100% |

| Button | Size | Type |
| --- | --- | --- |
| Read Our Research Papers | 262 × 48 | Geist Regular 21 / 118.5% / −5% |
| View Live Performance | 228 × 48 | same |
| Explore Research Repositories | 390 × 65 | Geist Regular 27 / 118.5% / −5%, plus `0 4px 11.8px rgba(0,0,0,0.19)` |

```css
.btn-glass {
  background: rgba(247, 247, 247, 0.16);
  border-radius: 9px;
  color: #ffffff;
  font-family: var(--font-sans);
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 1.185;
  backdrop-filter: blur(18px) saturate(1.4);
}
```

Hero pair gap is **21px**.

### 6.2 Navbar pills

- Height 60px, radius **17px**
- Fill: nav gradient in §4.3
- Live Fund: 167 × 60, label + 12px `#00CF6E` disc
- Github: 139 × 60, label + 11px external-link arrow
- Gap between pills: **19px**
- Type: Geist Regular 24, tracking −5%

### 6.3 Model cards

- Size: 366 × 593
- Radius: 11px
- Fill: `#111111`
- Gap: 42px (starts at 8082, 8490, 8898, 9306)
- Title sits near the bottom (Advercase 20), body Geist 16 underneath, 19px inner left padding

### 6.4 Live fund stage

- Size: 1656 × 932
- Radius: 24px
- Asset: `fund-performance.png` (browser chrome + aurora header + document)

### 6.5 Research papers

- Asset: `paper.png` (362 × 460)
- Slight rotation: ≈ −1.8° / −0.75° / +1.8°
- Soft drop (Figma blur ~5px on the raster)
- Title Advercase 27 centered, subtitle Geist 20 / 132% / −5%

### 6.6 Pillars

- Asset: `pillar.png` (302 × 308)
- `mix-blend-mode: hard-light` so marble sits into the black field
- Rotations: −3° / 0° / +3°

---

## 7. Sections and assets

All paths are under `monterey/public/`.

| Asset | File | Native size | Section |
| --- | --- | --- | --- |
| Hero skyline | `hero.png` | 1672 × 941 | Hero background |
| Logo mark | `logo-mark.png` | 111 × 58 | Navbar (white M) |
| Full wordmark | `full-logo.png` | 532 × 63 | Footer lockup |
| Footer watermark | `glass-logo.jpg` | 1130 × 545 | Oversized faded M, bottom of footer |
| Brand aurora | `cta-banner.jpg` | 2556 × 933 | CTA card fill |
| Fund screenshot | `fund-performance.png` | 2484 × 1398 | Live Fund Performance |
| Research paper | `paper.png` | 362 × 460 | Open Research Lab (×3) |
| Corinthian column | `pillar.png` | 302 × 308 | Built from First Principles (×3) |

Ignore the default Next.js SVGs (`next.svg`, `vercel.svg`, `globe.svg`, `window.svg`, `file.svg`).

### Hero

- Full-bleed `hero.png` + overlay in §4.2
- Navbar: `logo-mark.png` left; Geist Medium 24 links; two nav pills right
- Headline: Advercase 48, centered, two lines
- Lede: Geist 23 / 124% / −5%, 758px
- Two glass buttons, 21px gap

### Built from First Principles

- Advercase 65 + Geist 32 / 132% intro
- Three 438px centered columns (Geist Bold 32 title + Regular 32 body; third column 30px)
- Three `pillar.png` images, hard-light, slight rotation

### Live Fund Performance

- Same title + intro pairing
- Rounded 24px stage using `fund-performance.png`

### Open Research Lab

- Same title + intro pairing
- Three rotated `paper.png` cards with Advercase 27 titles and Geist 20 subtitles

### Models & Methodology

- Same title + intro pairing
- Four `#111111` tiles, Advercase 20 + Geist 16

### Our Core Principles

- Advercase 65
- Geist Regular 32 / 132% disc list, 1297px, 48px list indent

### CTA + footer

- CTA: `cta-banner.jpg` clipped to 1704 × 622, 38px radius, 1px white stroke, Advercase 83 centered, glass CTA button
- Footer: `full-logo.png` + Geist Medium 23 description; two link columns; `glass-logo.jpg` as a large, bottom-aligned watermark

---

## 8. Implementation tokens (copy into CSS)

```css
:root {
  /* Color */
  --color-cyan: #00c8ff;
  --color-indigo: #1d13b6;
  --color-white: #ffffff;
  --color-black: #000000;
  --color-card: #111111;
  --color-muted: #949494;
  --color-live: #00cf6e;
  --glass-fill: rgba(247, 247, 247, 0.16);
  --nav-pill: linear-gradient(
    180deg,
    rgba(74, 74, 74, 0.68) 0%,
    #191919 95.673%
  );

  /* Type */
  --tracking-display: -0.01em; /* Advercase −1% */
  --tracking-sans: -0.05em; /* Geist −5% */
  --leading-body: 1.32;
  --leading-lede: 1.24;
  --leading-button: 1.185;
  --leading-footer: 1.48;

  /* Radius */
  --radius-glass: 9px;
  --radius-pill: 17px;
  --radius-card: 11px;
  --radius-stage: 24px;
  --radius-cta: 38px;
}
```

### Do / don’t

- **Do** keep Advercase at `letter-spacing: -0.01em` and Geist at `-0.05em` at every size.
- **Do** keep section body at 32 / 132% / −5%, not a looser paragraph style.
- **Do** reuse `cta-banner.jpg` for the CTA glow rather than inventing a new gradient.
- **Don’t** substitute Inter, Poppins, or another geometric sans for Geist.
- **Don’t** use a positive or zero tracking on UI copy — the file is uniformly tight.
- **Don’t** flatten the aurora into a two-stop linear gradient; it is black → indigo bloom → cyan floor.
