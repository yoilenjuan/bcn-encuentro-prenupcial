# BCN Encuentro Prenupcial — Design Brief V6
### Referencia de diseño para VS Code · Basado en encuentro_prenupcial_v6.html

---

## 1. PALETA DE COLORES — TOKENS GLOBALES

```css
:root {
  /* Neutros */
  --C:  #0D0B08;   /* near-black cálido — uso muy restringido */
  --W:  #FFFFFF;   /* blanco puro */

  /* Champagne (fondo predominante en secciones claras) */
  --CH:  #F8F2E6;  /* champagne light  — fondo principal secciones claras */
  --CH2: #F2E8D0;  /* champagne mid    — hover, cards secundarias */
  --CH3: #EAD8B0;  /* champagne deep   — banda, acentos de fondo */

  /* Gold (acento primario en TODA la UI) */
  --G:  #C9A870;   /* gold base        — líneas, iconos, eyebrows */
  --G2: #A07840;   /* gold dark        — texto sobre claro, CTAs */
  --G3: #DEC898;   /* gold light       — texto sobre oscuro, valores KPI */

  /* Texto */
  --T:  #1C1408;   /* texto primario   — títulos, headings */
  --T2: #5C4A30;   /* texto secundario — body copy, descripciones */
  --T3: #9A8870;   /* texto terciario  — labels, captions, fechas */
}
```

### Paleta por sección

| Sección              | Fondo principal         | Fondo secundario/cards   | Acento texto/líneas | Texto principal |
|----------------------|-------------------------|--------------------------|---------------------|-----------------|
| **Portada**          | `#F8F2E6` (--CH) + radial gradients | `rgba(201,168,112,.09)` pill | `#C9A870` (--G) | `#1C1408` (--T) |
| **Índice**           | `#FFFFFF` (--W)         | `#F8F2E6` (--CH) items   | `#C9A870` (--G)     | `#1C1408` (--T) |
| **§01 Resumen**      | `linear-gradient(135deg, #F8F2E6 → #F2E8D0)` | `rgba(255,255,255,.62)` stats | `#A07840` (--G2) | `#1C1408` (--T) |
| **§02 Justificación**| `#FFFFFF` (--W)         | `#F8F2E6` (--CH) cards   | `#C9A870` (--G)     | `#1C1408` (--T) |
| **§03 Propuesta**    | `#1E1610` (dark warm)   | `rgba(248,242,230,.07)` quote | `#C9A870` (--G) / `#DEC898` (--G3) | `#FFFFFF` |
| **§04 Experiencia**  | `#F8F2E6` (--CH)        | `#FFFFFF` cards hover    | `#C9A870` (--G)     | `#1C1408` (--T) |
| **§05 Proveedores**  | `#FFFFFF` (--W)         | `#F8F2E6` (--CH) items   | `#C9A870` (--G)     | `#1C1408` (--T) |
| **§05 barra total**  | `#1E1610` (dark warm)   | —                        | `#DEC898` (--G3)    | `rgba(255,255,255,.28)` |
| **§06 Financiero**   | `#F8F2E6` (--CH)        | `#FFFFFF` cards           | `#C9A870` (--G)     | `#1C1408` (--T) |
| **§06 KPI strip**    | `#1E1610` (dark warm)   | —                        | `#DEC898` (--G3)    | `rgba(255,255,255,.3)` |
| **§07 Metodología**  | `#FFFFFF` (--W)         | `#F8F2E6` (--CH) sidebar | `#C9A870` (--G)     | `#1C1408` (--T) |
| **§08 Equipo**       | `#F8F2E6` (--CH)        | `#FFFFFF` cards           | `#C9A870` (--G)     | `#1C1408` (--T) |
| **§09 Impacto**      | `#FFFFFF` (--W)         | `#F8F2E6` (--CH) cards   | `#A07840` (--G2)    | `#5C4A30` (--T2) |
| **§10 Posicionamiento** | `#F8F2E6` (--CH)     | `#FFFFFF` pillars         | `#C9A870` (--G)     | `#1C1408` (--T) |
| **Cierre**           | `#F8F2E6` (--CH) + radial gradients | — | `#C9A870` (--G) | `#1C1408` (--T) |
| **Banda separadora** | `linear-gradient(90deg, #A07840 0%, #EAD8B0 35%, #DEC898 65%, #A07840 100%)` | | | |

> **Patrón alternado:** Las secciones se alternan entre `#FFFFFF` (blanco) y `#F8F2E6` (champagne).  
> Solo **§03 Propuesta** y las barras de **§05/§06** usan el dark `#1E1610`.

---

## 2. SECCIONES CON LOGO EN GIGANTOGRAFÍA DE BACKGROUND

El sistema de watermark usa la clase `.wm` con texto en Playfair Display a tamaño extremo, color dorado casi transparente, posicionado en absoluto.

```css
.wm {
  position: absolute;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  letter-spacing: -10px;
  pointer-events: none;
  user-select: none;
  line-height: 1;
}
```

### Secciones con watermark gigante:

| Sección              | Clase adicional  | Texto | Tamaño           | Color                        | Posición                              |
|----------------------|------------------|-------|------------------|------------------------------|---------------------------------------|
| **Portada**          | `.cv-wm`         | `EP`  | `clamp(200px, 30vw, 380px)` | `rgba(201,168,112, 0.07)` | `bottom: -30px; right: -8px`          |
| **§01 Resumen**      | `.ex-wm`         | `EP`  | `240px`          | `rgba(201,168,112, 0.08)`    | `bottom: -25px; left: -8px`           |
| **§03 Propuesta**    | `.p-wm`          | `BCN` | `260px`          | `rgba(201,168,112, 0.05)`    | `top: -22px; right: -12px`            |
| **§06 Financiero**   | `.f-wm`          | `EP`  | `220px`          | `rgba(201,168,112, 0.09)`    | `bottom: -18px; right: -12px`         |
| **Cierre**           | `.c-wm`          | `EP`  | `280px`          | `rgba(201,168,112, 0.08)`    | `top: 50%; left: 50%; transform: translate(-50%,-50%)` |

> **Nota:** El watermark del cierre está **centrado exactamente** en la sección, el resto están pegados a las esquinas.  
> `overflow: hidden` activo en todas las secciones contenedoras para que el texto no desborde.

---

## 3. EL LOGO DE LA VERSIÓN 6

La V6 usa **dos elementos de logo** distintos:

### 3a. Logo de cabecera de portada (texto + caja)

```html
<div class="cv-logo">
  <div class="cv-ep">EP</div>
  <div class="cv-name">BCN Encuentro Prenupcial</div>
</div>
```

```css
/* Caja EP cuadrada */
.cv-ep {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #C9A870;                          /* --G */
  border: 1.5px solid rgba(201,168,112,.5);
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -1px;
}

/* Nombre junto a la caja */
.cv-name {
  font-size: 8px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #A07840;                          /* --G2 */
  font-weight: 400;
}
```

### 3b. Logo central de portada — Símbolo de anillos SVG

Posicionado encima del título principal, en el centro de la portada:

```html
<svg width="92" height="48" viewBox="0 0 92 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Anillo izquierdo -->
  <circle cx="28" cy="24" r="20" stroke="#C9A870" stroke-width="2.2"/>
  <circle cx="28" cy="24" r="13" stroke="#C9A870" stroke-width=".7" opacity=".32"/>
  <!-- Anillo derecho -->
  <circle cx="64" cy="24" r="20" stroke="#C9A870" stroke-width="2.2"/>
  <circle cx="64" cy="24" r="13" stroke="#C9A870" stroke-width=".7" opacity=".32"/>
</svg>
```

- **Dos anillos entrelazados** (círculos solapados), trazo exterior 2.2px sólido gold, círculo interior 0.7px gold al 32% opacidad
- Centros en cx=28 y cx=64 (radio 20px cada uno = se solapan en el centro)
- Color único: `#C9A870` (--G gold base)
- El logo-caja **EP** aparece en esquina superior izquierda de la portada
- Los **anillos SVG** aparecen centrados antes del título h1

### 3c. Logo año en esquina superior derecha

```html
<div class="cv-yr">2025</div>
```
```css
.cv-yr {
  font-size: 8px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #9A8870;  /* --T3 */
  font-weight: 400;
}
```

---

## 4. TIPOGRAFÍA POR SECCIÓN

### Fuentes importadas

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
```

| Fuente            | Uso                                              | Pesos              |
|-------------------|--------------------------------------------------|--------------------|
| **Playfair Display** | Títulos, subtítulos, citas, cifras, logo EP   | 400, 500, 700, italic |
| **DM Sans**       | Cuerpo, labels, eyebrows, UI, body copy          | 200, 300, 400, 500 |

---

### Sistema tipográfico global (clases reutilizables)

| Clase   | Font               | Tamaño                     | Peso | Color        | Otros                              |
|---------|--------------------|----------------------------|------|--------------|------------------------------------|
| `h1,h2,h3` | Playfair Display | —                        | 400  | `--T`        | line-height 1.05                   |
| `.TT`   | Playfair Display   | `clamp(30px, 4vw, 50px)`   | 400  | `--T`        | margin-bottom 20px                 |
| `.TT.w` | Playfair Display   | mismo                      | 400  | `#FFFFFF`    | Para secciones oscuras             |
| `.TT em`| Playfair Display   | mismo                      | 400  | `#A07840` (--G2) | italic, para secciones claras  |
| `.TT.w em` | Playfair Display | mismo                    | 400  | `#DEC898` (--G3) | italic, para secciones oscuras |
| `.ey`   | DM Sans            | 9px                        | 400  | `#C9A870` (--G) | letter-spacing 5px, uppercase, flex con línea decorativa 20px |
| `.ey.d` | DM Sans            | 9px                        | 400  | `#A07840` (--G2) | eyebrow oscuro (secciones champagne) |
| `.ey.l` | DM Sans            | 9px                        | 400  | `#DEC898` (--G3) | eyebrow claro (secciones oscuras) |
| `.b1`   | DM Sans            | 14px                       | 300  | `#5C4A30` (--T2) | line-height 1.86                |
| `.b2`   | DM Sans            | 13px                       | 300  | `#5C4A30` (--T2) | line-height 1.85                |
| `.sf`   | Playfair Display   | hereda                     | —    | hereda       | inline serif                       |
| `.sv`   | Playfair Display   | 30px                       | 400  | `#A07840` (--G2) | Valores estadísticos            |
| `.sl`   | DM Sans            | 8px                        | 400  | `#9A8870` (--T3) | Labels de stats, uppercase, letter-spacing 2px |
| `.tag`  | DM Sans            | 8px                        | 400  | `#A07840` (--G2) | letter-spacing 3px, uppercase, border gold |

---

### Tipografía específica por sección

#### PORTADA
| Elemento             | Font               | Tamaño              | Peso | Color                        |
|----------------------|--------------------|---------------------|------|------------------------------|
| Logo "EP" caja       | Playfair Display   | 22px                | 700  | `#C9A870`                    |
| Nombre "BCN EP"      | DM Sans            | 8px / ls:5px        | 400  | `#A07840`                    |
| Año "2025"           | DM Sans            | 8px / ls:4px        | 400  | `#9A8870`                    |
| h1 "Encuentro"       | Playfair Display   | `clamp(58px,9.5vw,112px)` | 300 | `#1C1408`               |
| h1 em "Prenupcial"   | Playfair Display   | mismo               | 300  | `#A07840` italic             |
| Subtítulo            | Playfair Display   | 17px                | —    | `#9A8870` italic             |
| Pill CTA             | DM Sans            | 9px / ls:4px        | 400  | `#A07840` uppercase          |
| Footer items         | DM Sans            | 8px / ls:3px        | 400  | `#9A8870` uppercase          |
| Watermark "EP"       | Playfair Display   | clamp(200px,30vw,380px) | 700 | `rgba(201,168,112,.07)`    |

#### ÍNDICE
| Elemento             | Font               | Tamaño              | Peso | Color         |
|----------------------|--------------------|---------------------|------|---------------|
| Eyebrow              | DM Sans            | 9px / ls:5px        | 400  | `#A07840`     |
| Título sección       | Playfair Display   | 46px                | 400  | `#1C1408`     |
| Título em            | Playfair Display   | mismo               | 400  | `#A07840` italic |
| Descripción intro    | DM Sans            | 14px                | 300  | `#5C4A30`     |
| Número ítem (01–10)  | Playfair Display   | 28px                | 400  | `rgba(201,168,112,.22)` |
| Label ítem           | DM Sans            | 7px / ls:3px        | 400  | `#C9A870` uppercase |
| Nombre ítem          | Playfair Display   | 14px                | 400  | `#1C1408`     |

#### §01 RESUMEN EJECUTIVO
| Elemento             | Font               | Tamaño              | Peso | Color         |
|----------------------|--------------------|---------------------|------|---------------|
| Eyebrow              | DM Sans            | 9px / ls:5px        | 400  | `#A07840`     |
| Título               | Playfair Display   | 44px                | 400  | `#1C1408`     |
| Cita bloque          | Playfair Display   | 21px                | —    | `#1C1408` italic, border-left gold |
| Body copy            | DM Sans            | 14px                | 300  | `#5C4A30`     |
| Tags                 | DM Sans            | 8px / ls:3px        | 400  | `#A07840`     |
| Valor estadística    | Playfair Display   | 30px                | 400  | `#A07840`     |
| Label estadística    | DM Sans            | 8px / ls:2px        | 400  | `#9A8870` uppercase |
| Sub-label "Propósito"| DM Sans            | eyebrow             | 400  | `#A07840`     |
| Watermark "EP"       | Playfair Display   | 240px               | 700  | `rgba(201,168,112,.08)` |

#### §02 JUSTIFICACIÓN
| Elemento             | Font               | Tamaño | Peso | Color     |
|----------------------|--------------------|--------|------|-----------|
| Eyebrow              | DM Sans            | 9px    | 400  | `#A07840` |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#1C1408` |
| Cita oportunidad     | Playfair Display   | 18px   | 400  | `#1C1408` |
| Tarjetas texto       | Playfair Display   | 15px   | 400  | `#1C1408` |
| Cuerpo tarjetas      | DM Sans            | 12px   | 300  | `#5C4A30` |

#### §03 PROPUESTA (sección oscura)
| Elemento             | Font               | Tamaño  | Peso | Color           |
|----------------------|--------------------|---------|------|-----------------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#DEC898` (--G3) |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#FFFFFF`     |
| Cita bloque          | Playfair Display   | 19px    | 300  | `#FFFFFF`       |
| Número aforo         | Playfair Display   | 88px    | 400  | `#DEC898` (--G3) |
| Label aforo          | DM Sans            | 8px / ls:4px | 400 | `rgba(255,255,255,.28)` uppercase |
| Valores breakdown    | Playfair Display   | 21px    | 400  | `#DEC898` (--G3) |
| Labels breakdown     | DM Sans            | 10px    | 300  | `rgba(255,255,255,.34)` |
| Watermark "BCN"      | Playfair Display   | 260px   | 700  | `rgba(201,168,112,.05)` |

#### §04 EXPERIENCIA
| Elemento             | Font               | Tamaño  | Peso | Color           |
|----------------------|--------------------|---------|------|-----------------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#A07840`       |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#1C1408`     |
| Hora card (Acto I…)  | DM Sans            | 8px / ls:3px | 400 | `#C9A870` uppercase |
| Título card          | Playfair Display   | 18px    | 400  | `#1C1408`       |
| Descripción card     | DM Sans            | 12px    | 300  | `#5C4A30`       |

#### §05 PROVEEDORES
| Elemento             | Font               | Tamaño  | Peso | Color           |
|----------------------|--------------------|---------|------|-----------------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#A07840`       |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#1C1408`     |
| Nombre proveedor     | DM Sans            | 9px / ls:1px | 400 | `#1C1408` uppercase |
| Total label          | DM Sans            | 8px / ls:3px | 400 | `rgba(255,255,255,.28)` uppercase |
| Total valor          | Playfair Display   | 26px    | 400  | `#DEC898` (--G3) |

#### §06 FINANCIERO
| Elemento             | Font               | Tamaño  | Peso | Color             |
|----------------------|--------------------|---------|------|-------------------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#A07840`         |
| Título card          | DM Sans            | 8px / ls:4px | 400 | `#C9A870` uppercase |
| Fila label           | DM Sans            | 13px    | 300  | `#5C4A30`         |
| Fila valor ingreso   | Playfair Display   | 15px    | 400  | `#6B9268` (verde) |
| Fila valor coste     | Playfair Display   | 15px    | 400  | `#B07860` (terracota) |
| Fila total           | Playfair Display   | 19px    | 400  | `#A07840`         |
| KPI valor            | Playfair Display   | 24px    | 400  | `#DEC898` (--G3) sobre oscuro |
| KPI label            | DM Sans            | 8px / ls:2px | 400 | `rgba(255,255,255,.3)` |
| Watermark "EP"       | Playfair Display   | 220px   | 700  | `rgba(201,168,112,.09)` |

#### §07 METODOLOGÍA
| Elemento             | Font               | Tamaño  | Peso | Color     |
|----------------------|--------------------|---------|------|-----------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#A07840` |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#1C1408` |
| Semana (timeline)    | DM Sans            | 8px / ls:3px | 400 | `#C9A870` uppercase |
| Título timeline item | Playfair Display   | 18px    | 400  | `#1C1408` |
| Descripción          | DM Sans            | 12px    | 300  | `#5C4A30` |

#### §08 EQUIPO
| Elemento             | Font               | Tamaño  | Peso | Color     |
|----------------------|--------------------|---------|------|-----------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#A07840` |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#1C1408` |
| Cita foto lead       | Playfair Display   | 13px    | —    | `#1C1408` italic |
| Rol persona          | DM Sans            | 7px / ls:3px | 400 | `#C9A870` uppercase |
| Nombre persona       | Playfair Display   | 14px    | 400  | `#1C1408` |
| Descripción persona  | DM Sans            | 11px    | 300  | `#5C4A30` |
| Badge                | DM Sans            | 7px / ls:2px | 400 | `#A07840` uppercase |

#### §09 IMPACTO
| Elemento             | Font               | Tamaño  | Peso | Color     |
|----------------------|--------------------|---------|------|-----------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#A07840` |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#1C1408` |
| Actor (Novios, etc.) | DM Sans            | 8px / ls:4px | 400 | `#A07840` uppercase |
| Ítems lista          | DM Sans            | 12px    | 300  | `#5C4A30` |
| Valor KPI            | Playfair Display   | 34px    | 400  | `#A07840` |
| Label KPI            | DM Sans            | 8px / ls:2px | 400 | `#9A8870` uppercase |

#### §10 POSICIONAMIENTO
| Elemento             | Font               | Tamaño  | Peso | Color     |
|----------------------|--------------------|---------|------|-----------|
| Eyebrow              | DM Sans            | 9px     | 400  | `#A07840` |
| Título               | Playfair Display   | clamp(30–50px) | 400 | `#1C1408` |
| Cita lateral         | Playfair Display   | 20px    | 300  | `#1C1408` italic, border-left gold |
| Tabla th             | DM Sans            | 8px / ls:3px | 400 | `#9A8870` / última col `#A07840` |
| Tabla td             | DM Sans            | 12px    | 300  | `#5C4A30` |
| Pillar título        | Playfair Display   | 15px    | 400  | `#1C1408` |
| Pillar desc          | DM Sans            | 11px    | 300  | `#5C4A30` |
| Frase de marca       | DM Sans            | heredado | 400 | `#A07840` |

#### CIERRE
| Elemento             | Font               | Tamaño              | Peso | Color            |
|----------------------|--------------------|---------------------|------|------------------|
| Label superior       | DM Sans            | 9px / ls:5px        | 400  | `#C9A870`        |
| Título               | Playfair Display   | `clamp(34px,5.5vw,60px)` | 300 | `#1C1408`    |
| Título em            | Playfair Display   | mismo               | 300  | `#A07840` italic |
| Body copy            | DM Sans            | 14px                | 300  | `#5C4A30`        |
| Contacto             | Playfair Display   | 14px                | —    | `#9A8870` italic |
| Watermark "EP"       | Playfair Display   | 280px               | 700  | `rgba(201,168,112,.08)` centrado |

---

## 5. DISEÑO DETALLADO POR SECCIÓN

### PORTADA
- **Background:** `#F8F2E6` (champagne) con tres radial-gradients superpuestos:
  - Ellipse dorada 68%×52% en esquina inferior derecha (88% 108%): `rgba(201,168,112,.22)`
  - Ellipse blanca 52%×42% en esquina superior izquierda (6% 6%): `rgba(250,246,237,.58)`
  - Ellipse blanca 88%×38% centrada arriba (50% 0%): `rgba(255,255,255,.72)`
- **Marco decorativo:** Border `1px solid rgba(201,168,112,.3)` a 22px de los bordes. Inner frame: `1px solid rgba(201,168,112,.12)` a 9px del marco exterior.
- **Esquinas decorativas:** 4 corner brackets `22×22px`, border 2px gold `.72` opacity
- **Estructura grid:** `grid-template-rows: auto 1fr auto auto` (header / mid / image strip / footer)
- **Header (cv-top):** Logo EP izquierda + año derecha. Padding 38px 48px.
- **Centro (cv-mid):** Centrado flex-column. Anillos SVG → h1 → subtítulo italic → pill CTA. Padding 36px 48px.
- **Imagen strip:** 188px alto, `object-fit: cover`, con fade-to-champagne arriba y abajo (pseudo-elementos con `linear-gradient`)
- **Footer:** Border-top gold 20%, background `rgba(248,242,230,.88)`. Labels en DM Sans 8px uppercase.
- **Banda:** 3px gradient gold en el borde inferior.
- **Watermark:** "EP" en Playfair 700 a clamp(200–380px), gold `.07` opacity, absoluto `bottom:-30px; right:-8px`

---

### ÍNDICE
- **Background:** `#FFFFFF` blanco puro
- **Layout:** Max-width 1000px, padding 72px 48px
- **Grid ítems:** 2 columnas, gap 2px. Cada ítem: background `#F8F2E6`, padding 18px 24px, border-left 2px transparent → gold en hover
- **Transición hover:** background a `#F2E8D0`, border-left aparece en gold
- **Número:** Playfair Display 28px, gold `.22` opacity (muy sutil)

---

### §01 RESUMEN EJECUTIVO
- **Background:** `linear-gradient(135deg, #F8F2E6 0%, #F2E8D0 100%)` — champagne gradiente diagonal
- **Layout:** 2 columnas `1.1fr 0.9fr`, gap 52px
- **Stats grid:** 3 columnas, gap 2px. Cards con `rgba(255,255,255,.62)` y border-bottom `rgba(201,168,112,.22)` 2px
- **Propósito box:** background `rgba(255,255,255,.52)`, border-left 2px gold
- **Tags:** border `rgba(201,168,112,.42)`, inline-block, uppercase DM Sans 8px
- **Watermark:** "EP" 240px Playfair 700, gold `.08`, absoluto bottom-left

---

### §02 JUSTIFICACIÓN
- **Background:** `#FFFFFF`
- **Layout:** 2 columnas `1fr 320px`, gap 44px. Columna derecha: 3 tarjetas de problema
- **Tarjetas problema:** background `#F8F2E6`, border-top 2px `rgba(201,168,112,.24)`, padding 20px 18px
- **Cita oportunidad:** background `#F8F2E6`, border-left 3px gold, padding 22px 28px

---

### §03 PROPUESTA _(única sección dark warm)_
- **Background:** `#1E1610` (oscuro cálido, casi negro con matiz marrón)
- **Overlay:** `radial-gradient(ellipse 80% 58% at 50% 118%, rgba(201,168,112,.18) 0%, transparent 55%)` — luz dorada desde abajo
- **Cita bloque:** background `rgba(248,242,230,.07)`, border-left 2px gold
- **Bloque aforo:** background `rgba(248,242,230,.06)`, border `1px solid rgba(201,168,112,.18)`, layout 2 cols: número gigante + breakdown grid
- **Breakdown items:** background `rgba(255,255,255,.03)`, border-left 2px `rgba(201,168,112,.18)`
- **Watermark "BCN":** Playfair 700, 260px, gold `.05`, top-right corner

---

### §04 EXPERIENCIA
- **Background:** `#F8F2E6` (champagne)
- **Cards grid:** 3 columnas, gap 14px
- **Cada card:** background `#FFFFFF`, border-top 2px `rgba(201,168,112,.24)`, overflow hidden
- **Imagen card:** 158px alto, `object-fit: cover`, width 100%
- **Hover card:** `transform: translateY(-4px)`, `box-shadow: 0 14px 44px rgba(201,168,112,.16)`
- **Body card:** padding 18px 17px 22px

---

### §05 PROVEEDORES
- **Background:** `#FFFFFF`
- **Grid items:** 4 columnas, gap 2px. Cada ítem: `#F8F2E6`, padding 18px 13px, centrado flex-column, gap 7px, border-bottom 2px transparent
- **Ícono:** Círculo `40×40px`, `border-radius: 50%`, background `rgba(201,168,112,.13)`, font-size 16px
- **Hover:** background `#F2E8D0`, border-bottom aparece en gold
- **Barra total:** `#1E1610`, padding 20px 32px, flex justify-between. Max-width 1000px. Valor en Playfair 26px gold light.

---

### §06 FINANCIERO
- **Background:** `#F8F2E6` (champagne)
- **Cards financieras:** 2 columnas, gap 16px. Cards en `#FFFFFF`, padding 26px
- **Header card:** DM Sans 8px uppercase, border-bottom `rgba(201,168,112,.18)`
- **Filas:** border-bottom `rgba(0,0,0,.04)`. Total row: border-top 2px gold
- **KPI strip:** 5 columnas, gap 2px. Cada KPI: `#1E1610`, padding 20px 10px, centrado
- **Watermark:** "EP" 220px, gold `.09`, bottom-right

---

### §07 METODOLOGÍA
- **Background:** `#FFFFFF`
- **Layout:** 2 columnas `1fr 310px`, gap 44px. Sidebar derecho con contenido complementario.
- **Timeline:** padding-left 24px, border-left `1px solid rgba(201,168,112,.32)`
- **Punto timeline:** círculo `9×9px`, background gold. Hollow: background white + border 1.5px gold
- **Items timeline:** padding `0 0 28px 24px`

---

### §08 EQUIPO
- **Background:** `#F8F2E6` (champagne)
- **Layout:** 2 columnas `280px 1fr`, gap 44px
- **Columna izquierda:** Imagen `aspect-ratio: 3/4`, border `1px solid rgba(201,168,112,.22)`. Cita en card blanca, border-left 2px gold.
- **Columna derecha:** Stack vertical de cards equipo. Grid 1 columna, gap 2px.
- **Card equipo:** `#FFFFFF`, padding 17px 18px, border-top 2px `rgba(201,168,112,.22)`. Grid `32px 1fr`, gap 12px.
- **Card lead:** border-top-color = gold (`#C9A870`), background `#F2E8D0`
- **Avatar:** Círculo `32×32px`, background `rgba(201,168,112,.15)`

---

### §09 IMPACTO
- **Background:** `#FFFFFF`
- **Impact cards:** 2×2 grid, gap 14px. Cada card: `#F8F2E6`, padding 24px, border-top 2px `rgba(201,168,112,.22)`
- **Lista ítems:** border-bottom `rgba(201,168,112,.09)`, dash `—` en gold
- **KPI strip:** 4 columnas, gap 2px. Cards: `#F8F2E6`, border-bottom 2px `rgba(201,168,112,.2)`

---

### §10 POSICIONAMIENTO
- **Background:** `#F8F2E6` (champagne)
- **Layout:** 2 columnas, gap 52px
- **Tabla VS:** Columnas `Ferias | BCN`. Headers pequeños DM Sans, border-bottom gold. TDs alternados sutil.
- **Pillars grid:** 2×2, gap 2px. Cards en `#FFFFFF`, padding 18px.
- **Frase de marca:** box con background `#FFFFFF`, padding 18px, border-left 2px gold

---

### CIERRE
- **Background:** `#F8F2E6` con dos radial-gradients:
  - Ellipse dorada en 50% 132%: `rgba(201,168,112,.22)`
  - Ellipse blanca en 7% 2%: `rgba(255,255,255,.55)`
- **Layout:** flex-column centrado, `min-height: 76vh`, padding 88px 48px
- **Inner:** max-width 500px, `position: relative; z-index: 2`
- **Línea decorativa:** `width: 36px; height: 1px; background: gold; margin: 18px auto`
- **Watermark:** "EP" 280px Playfair 700, gold `.08`, **centrado exacto** con `transform: translate(-50%, -50%)`

---

## RESUMEN RÁPIDO DE PATRONES REPETIDOS

| Patrón                     | Valor                                              |
|----------------------------|----------------------------------------------------|
| Border-left decorativo     | `2px solid #C9A870`                                |
| Border-top sutil en cards  | `2px solid rgba(201,168,112,.22–.24)`              |
| Separador entre secciones  | `.band` 3px gradient gold                          |
| Sombra hover               | `0 14px 44px rgba(201,168,112,.16)`                |
| Hover traslación           | `translateY(-4px)`                                 |
| Max-width contenido        | `1000px`                                           |
| Padding secciones          | `72px 48px` (desktop) / `44px 22px` (mobile)      |
| Gap entre grids            | `2px` (denso, estilo mosaico sin huecos visibles)  |
| Eyebrow line decorativa    | `width: 20px; height: 1px; background: gold`       |
| Transición global          | `0.2s ease`                                        |
