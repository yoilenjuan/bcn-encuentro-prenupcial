# BCN Encuentro Prenupcial — Dossier 2025

Dossier profesional interactivo con diseño mediterráneo luxury para el proyecto BCN Encuentro Prenupcial.

---

## 🚀 Inicio rápido en VS Code

### Opción A — Live Server (recomendado)

1. Abre la carpeta del proyecto en VS Code
2. Instala la extensión **Live Server** (aparece sugerida automáticamente)
3. Haz clic derecho sobre `index.html` → **Open with Live Server**
4. El dossier se abre en `http://localhost:5500`

### Opción B — NPM

```bash
npm install
npm start
```

---

## 📁 Estructura del proyecto

```
bcn-encuentro-prenupcial/
│
├── index.html          ← Documento principal del dossier
│
├── css/
│   └── style.css       ← Todo el estilo (variables, layout, componentes)
│
├── js/
│   └── main.js         ← Interactividad (nav flotante, fade-in, parallax)
│
├── assets/
│   └── images/         ← Imágenes locales (si descargas las de Unsplash)
│
├── .vscode/
│   ├── extensions.json ← Extensiones recomendadas para VS Code
│   └── settings.json   ← Configuración del editor
│
├── .prettierrc         ← Formato de código automático
├── .gitignore          ← Archivos a ignorar en Git
├── package.json        ← Scripts NPM
└── README.md           ← Este archivo
```

---

## 🎨 Sistema de diseño

### Paleta de colores (CSS Variables)
| Variable    | Valor     | Uso                      |
|-------------|-----------|--------------------------|
| `--navy`    | `#0D1B2E` | Secciones oscuras, nav   |
| `--ivory`   | `#FAF6EE` | Fondo principal          |
| `--ivory2`  | `#F3EAD8` | Secciones alternadas     |
| `--gold`    | `#C9A260` | Acentos, eyebrows        |
| `--gold2`   | `#E0BB80` | Texto claro sobre oscuro |
| `--terra`   | `#B5603A` | Acento terracota         |
| `--sage`    | `#6B8F71` | Acento verde mediterráneo|

### Tipografías
- **Cormorant Garamond** — Titulares, citas, cifras (serif elegant)
- **Inter** — Cuerpo de texto, labels, UI (sans-serif clean)

---

## 🖼️ Imágenes

Las imágenes vienen de **Unsplash** vía CDN (requiere conexión a internet).

Para uso **offline o producción**, descarga las imágenes y actualiza las URLs en `index.html`:

```html
<!-- Antes (CDN) -->
background-image:url('https://images.unsplash.com/photo-xxxx?w=800&q=80')

<!-- Después (local) -->
background-image:url('assets/images/nombre-imagen.jpg')
```

---

## ✏️ Edición frecuente

### Cambiar colores
Edita las variables en `css/style.css` dentro del bloque `:root { }`.

### Añadir / quitar secciones
Cada sección en `index.html` está marcada con `<!-- §0X NOMBRE -->`.

### Modificar el logo SVG
El logo está en línea dentro del HTML, busca `<svg width="120" height="72"`.

### Actualizar información de partners
Busca `<!-- §05 PROVEEDORES -->` en `index.html` y edita los bloques `.prov-card`.

---

## 🌐 Despliegue

Para publicar en web:

```bash
# GitHub Pages, Netlify, Vercel — simplemente sube la carpeta entera
# No se necesita build: es HTML/CSS/JS puro
```

---

## 📄 Notas

- El modelo financiero muestra "A consultar" intencionalmente. Actualiza con cifras reales en `index.html` buscando `fin-row-val`.
- Las animaciones de fade-in requieren JavaScript habilitado.
- Compatible con Chrome, Firefox, Safari, Edge (últimas 2 versiones).

