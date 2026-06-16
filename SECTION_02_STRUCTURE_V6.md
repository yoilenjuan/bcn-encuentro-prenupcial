# SECTION §02 — Justificación y Problema
## V6 Structural Blueprint for VS Code Agent

> **Purpose:** Block-by-block layout reference so a VS Code agent can restructure §02 in `index.html` following V6 design language exactly. Every class name, grid position, typography value, colour token, and content string is documented below.

---

## 1. Section Shell

```html
<section id="just" class="just fade-in">
  <div class="wm">PROBLEMA</div>   <!-- watermark, see §5 -->
  <div class="just-in">
    <!-- LEFT COLUMN -->
    <!-- RIGHT COLUMN -->
  </div>
</section>
```

| Property | Value |
|---|---|
| Section selector | `section#just.just` |
| Background colour | `#FFFFFF` |
| Padding (desktop) | `80px 40px` |
| Max-width inner | `1000px` (centred via `margin: 0 auto`) |
| Fade-in animation | `.fade-in` → becomes `.fade-in.is-visible` on IntersectionObserver trigger |

---

## 2. Grid Container `.just-in`

```css
.just-in {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 44px;
  max-width: 1000px;
  margin: 0 auto;
}
```

| Column | Width | Contents |
|---|---|---|
| Left (`1fr`) | Flexible, fills remaining space | Eyebrow · H2 · Body paragraph · Market block |
| Right (`320px`) | Fixed 320 px | 3 × Problem card `.pc` stacked vertically |

**Breakpoint — mobile** (`≤ 768px`): grid collapses to `grid-template-columns: 1fr`, right column stacks below left.

---

## 3. LEFT COLUMN — Block Order (top → bottom)

### Block 1 — Eyebrow Label

```html
<span class="ey d">02 — Justificación y Problema</span>
```

| Property | Value |
|---|---|
| Element | `<span>` |
| Classes | `.ey` (eyebrow base) + `.d` (dark variant) |
| Font family | DM Sans |
| Font size | `9px` |
| Font weight | `600` |
| Text transform | `uppercase` |
| Letter spacing | `5px` |
| Colour | `#A07840` (gold-brown token) |
| Margin bottom | `16px` |
| Display | `block` |

---

### Block 2 — Section H2 Title

```html
<h2 class="TT c">¿Qué problema <em>resolvemos</em>?</h2>
```

| Property | Value |
|---|---|
| Element | `<h2>` |
| Classes | `.TT` (title base) + `.c` (dark/charcoal variant) |
| Font family | Playfair Display |
| Font size | `clamp(30px, 4vw, 50px)` |
| Font weight | `400` (regular — Playfair Display renders with natural elegance at 400) |
| Colour | `#1C1408` (deep warm black token) |
| Margin bottom | `20px` |
| `<em>` style | Italic, same font, same colour — no extra decoration |

---

### Block 3 — Introductory Body Paragraph

```html
<p class="b1">
  El sector nupcial en España mueve más de 2.400 millones de euros al año,
  pero está profundamente fragmentado. Los novios dedican meses a coordinar
  decenas de proveedores sin criterio curatorial, mientras los recintos y
  vendors compiten en precio porque no existe un espacio de encuentro
  premium que alinee oferta y demanda con intención real de compra.
</p>
```

| Property | Value |
|---|---|
| Element | `<p>` |
| Class | `.b1` (body-1 base style) |
| Font family | DM Sans |
| Font size | `14px` |
| Font weight | `400` |
| Line height | `1.75` |
| Colour | `#5C4A30` (warm mid-brown token) |
| Margin bottom | `28px` |

---

### Block 4 — Market Opportunity Block `.mkt`

```html
<div class="mkt">
  <p>
    El mercado nupcial español genera <strong>2.400 millones de euros</strong>
    anualmente. BCN Encuentro Prenupcial se posiciona como el primer evento
    B2B2C premium que conecta recintos, proveedores y parejas con intención
    real de contratación.
  </p>
</div>
```

```css
.mkt {
  background: #F8F2E6;          /* warm parchment */
  border-left: 3px solid #C9A870; /* gold accent line */
  padding: 22px 28px;
  margin-top: 8px;
}

.mkt p {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.65;
  color: #1C1408;
  margin: 0;
}

.mkt strong {
  color: #C9A870;               /* gold highlight on key stat */
  font-weight: 700;
}
```

| Property | Value |
|---|---|
| Background | `#F8F2E6` |
| Left border | `3px solid #C9A870` |
| Padding | `22px 28px` |
| Font (paragraph) | Playfair Display, 18px, colour `#1C1408` |
| `<strong>` colour | `#C9A870` (gold) |

---

## 4. RIGHT COLUMN — 3 × Problem Card `.pc`

The three cards are stacked vertically inside the right grid cell. No wrapper div needed — they sit directly as children of `.just-in` right column or inside a `<div class="pc-stack">`.

```html
<!-- Card 1 -->
<div class="pc">
  <div class="pc-ic">📅</div>
  <div class="pc-tt">Los novios</div>
  <div class="pc-tx">
    Visitan entre 12 y 18 proveedores distintos antes de tomar una decisión,
    invirtiendo meses sin un espacio curado de referencia.
  </div>
</div>

<!-- Card 2 -->
<div class="pc">
  <div class="pc-ic">🏛️</div>
  <div class="pc-tt">Los recintos</div>
  <div class="pc-tx">
    Compiten únicamente en precio porque no disponen de un canal premium
    donde mostrar su propuesta de valor diferencial.
  </div>
</div>

<!-- Card 3 -->
<div class="pc">
  <div class="pc-ic">🛍</div>
  <div class="pc-tt">Los proveedores</div>
  <div class="pc-tx">
    Participan en ferias masivas con baja conversión y sin acceso a
    compradores con intención real de contratación.
  </div>
</div>
```

### Card base styles `.pc`

```css
.pc {
  background: #F8F2E6;
  border-top: 2px solid rgba(201, 168, 112, 0.24);
  padding: 20px 18px;
  margin-bottom: 16px;          /* gap between stacked cards */
}

.pc:last-child {
  margin-bottom: 0;
}
```

### Card icon `.pc-ic`

```css
.pc-ic {
  font-size: 20px;
  margin-bottom: 9px;
  line-height: 1;
}
```

### Card title `.pc-tt`

```css
.pc-tt {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-weight: 400;
  color: #1C1408;
  margin-bottom: 6px;
  line-height: 1.3;
}
```

### Card body `.pc-tx`

```css
.pc-tx {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #5C4A30;
  line-height: 1.72;
}
```

---

## 5. Watermark `.wm`

```html
<div class="wm">PROBLEMA</div>
```

```css
/* Inside section.just — position: relative on .just */
.wm {
  position: absolute;
  top: 40px;
  right: -20px;
  font-family: 'Playfair Display', serif;
  font-size: 200px;             /* V6 uses ~200px for §02 */
  font-weight: 700;
  color: #C9A870;
  opacity: 0.06;                /* 6% — barely visible */
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  line-height: 1;
  z-index: 0;
}
```

> Section content must have `position: relative; z-index: 1` to sit above the watermark layer.

---

## 6. Complete HTML Scaffold (copy-paste ready)

```html
<section id="just" class="just fade-in" style="position: relative; overflow: hidden;">

  <!-- WATERMARK -->
  <div class="wm">PROBLEMA</div>

  <!-- GRID CONTAINER -->
  <div class="just-in">

    <!-- ── LEFT COLUMN ── -->
    <div class="just-left" style="position: relative; z-index: 1;">

      <!-- Eyebrow -->
      <span class="ey d">02 — Justificación y Problema</span>

      <!-- H2 -->
      <h2 class="TT c">¿Qué problema <em>resolvemos</em>?</h2>

      <!-- Intro paragraph -->
      <p class="b1">
        El sector nupcial en España mueve más de 2.400 millones de euros al año,
        pero está profundamente fragmentado. Los novios dedican meses a coordinar
        decenas de proveedores sin criterio curatorial, mientras los recintos y
        vendors compiten en precio porque no existe un espacio de encuentro
        premium que alinee oferta y demanda con intención real de compra.
      </p>

      <!-- Market opportunity block -->
      <div class="mkt">
        <p>
          El mercado nupcial español genera <strong>2.400 millones de euros</strong>
          anualmente. BCN Encuentro Prenupcial se posiciona como el primer evento
          B2B2C premium que conecta recintos, proveedores y parejas con intención
          real de contratación.
        </p>
      </div>

    </div><!-- /just-left -->

    <!-- ── RIGHT COLUMN — 3 PROBLEM CARDS ── -->
    <div class="just-right" style="position: relative; z-index: 1;">

      <div class="pc">
        <div class="pc-ic">📅</div>
        <div class="pc-tt">Los novios</div>
        <div class="pc-tx">
          Visitan entre 12 y 18 proveedores distintos antes de tomar una decisión,
          invirtiendo meses sin un espacio curado de referencia.
        </div>
      </div>

      <div class="pc">
        <div class="pc-ic">🏛️</div>
        <div class="pc-tt">Los recintos</div>
        <div class="pc-tx">
          Compiten únicamente en precio porque no disponen de un canal premium
          donde mostrar su propuesta de valor diferencial.
        </div>
      </div>

      <div class="pc">
        <div class="pc-ic">🛍</div>
        <div class="pc-tt">Los proveedores</div>
        <div class="pc-tx">
          Participan en ferias masivas con baja conversión y sin acceso a
          compradores con intención real de contratación.
        </div>
      </div>

    </div><!-- /just-right -->

  </div><!-- /just-in -->

</section>
```

---

## 7. CSS to Add / Verify in `style.css`

Paste these rules into `style.css` under a `/* §02 JUSTIFICACIÓN */` comment block:

```css
/* ── §02 JUSTIFICACIÓN Y PROBLEMA ───────────────── */
.just {
  background: #ffffff;
  padding: 80px 40px;
  position: relative;
  overflow: hidden;
}

.just-in {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 44px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Eyebrow */
.ey.d {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #A07840;
  margin-bottom: 16px;
}

/* H2 title */
.TT.c {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 400;
  color: #1C1408;
  margin-bottom: 20px;
  line-height: 1.15;
}

.TT.c em {
  font-style: italic;
}

/* Body paragraph */
.b1 {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.75;
  color: #5C4A30;
  margin-bottom: 28px;
}

/* Market opportunity block */
.mkt {
  background: #F8F2E6;
  border-left: 3px solid #C9A870;
  padding: 22px 28px;
  margin-top: 8px;
}

.mkt p {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.65;
  color: #1C1408;
  margin: 0;
}

.mkt strong {
  color: #C9A870;
  font-weight: 700;
}

/* Problem cards */
.pc {
  background: #F8F2E6;
  border-top: 2px solid rgba(201, 168, 112, 0.24);
  padding: 20px 18px;
  margin-bottom: 16px;
}

.pc:last-child {
  margin-bottom: 0;
}

.pc-ic {
  font-size: 20px;
  margin-bottom: 9px;
  line-height: 1;
}

.pc-tt {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-weight: 400;
  color: #1C1408;
  margin-bottom: 6px;
  line-height: 1.3;
}

.pc-tx {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #5C4A30;
  line-height: 1.72;
}

/* Watermark */
.just .wm {
  position: absolute;
  top: 40px;
  right: -20px;
  font-family: 'Playfair Display', serif;
  font-size: 200px;
  font-weight: 700;
  color: #C9A870;
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  line-height: 1;
  z-index: 0;
}

/* Mobile collapse */
@media (max-width: 768px) {
  .just {
    padding: 60px 24px;
  }

  .just-in {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .just .wm {
    font-size: 80px;
    top: 20px;
    right: -10px;
  }
}
```

---

## 8. Visual Layout Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│  section.just  (background: #FFFFFF, padding: 80px 40px)            │
│                                                                      │
│  [WATERMARK "PROBLEMA" — absolute, top:40px right:-20px, 6% opacity]│
│                                                                      │
│  ┌─ .just-in  (grid: 1fr  |  320px,  gap: 44px) ──────────────────┐ │
│  │                                                                  │ │
│  │  LEFT (1fr)                        RIGHT (320px fixed)          │ │
│  │  ┌──────────────────────────────┐  ┌──────────────────────────┐ │ │
│  │  │ .ey.d                        │  │ .pc  (card 1)            │ │ │
│  │  │ "02 — Justificación…"        │  │  📅  Los novios          │ │ │
│  │  │ 9px · DM Sans · gold-brown   │  │  desc text…              │ │ │
│  │  ├──────────────────────────────┤  ├──────────────────────────┤ │ │
│  │  │ .TT.c  <h2>                  │  │ .pc  (card 2)            │ │ │
│  │  │ "¿Qué problema resolvemos?"  │  │  🏛️  Los recintos        │ │ │
│  │  │ clamp(30–50px) · Playfair    │  │  desc text…              │ │ │
│  │  ├──────────────────────────────┤  ├──────────────────────────┤ │ │
│  │  │ .b1  <p>                     │  │ .pc  (card 3)            │ │ │
│  │  │ Intro paragraph              │  │  🛍  Los proveedores     │ │ │
│  │  │ 14px · DM Sans               │  │  desc text…              │ │ │
│  │  ├──────────────────────────────┤  └──────────────────────────┘ │ │
│  │  │ .mkt                         │                               │ │
│  │  │ [gold left border]           │                               │ │
│  │  │ Market opportunity stat      │                               │ │
│  │  │ 18px · Playfair · parchment  │                               │ │
│  │  └──────────────────────────────┘                               │ │
│  └──────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

---

*Reference source: `encuentro_prenupcial_v6.html` — section `#just` / `.just`*
*Document created: 2026-05-19*
