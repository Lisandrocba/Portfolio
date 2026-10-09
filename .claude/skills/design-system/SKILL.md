---
name: design-system
description: Tokens de diseño (colores, tipografía, espaciados, radios, sombras, breakpoints), componentes de packages/ui (Button, Text, Title, Chip, Icon) e iconos SVG exportados de Figma. Usar al definir o usar estilos, al crear o modificar componentes compartidos o al agregar iconos.
---

# Design system

> Estado actual: tokens, componentes e iconos ya implementados. La referencia de uso está en `packages/ui/README.md` (no se duplica acá). Esta skill define las reglas para extenderlos.

## Tokens

**Ubicación única:** `packages/ui/src/tokens/tokens.css`, con variables CSS en `:root`. Se carga con `import '@portfolio/ui/styles.css'` (fuentes + tokens) una sola vez en `apps/web/src/main.tsx` y en `.storybook/preview.tsx`.

**Escala tipográfica unificada** (decisión del usuario): Figma usa interlineados de cuerpo de 1.6, 1.65 y 1.7, que acá son un único `--leading-body`. Los títulos de 42 y 44 px se unifican en `--title-xl`. No se reintroducen valores intermedios.

**Origen:** los valores salen de `get_design_context` de Figma, porque el archivo no tiene variables definidas. Nunca se inventan. Si un valor no se pudo leer, no se crea el token y se pregunta.

**Qué tokenizar:**
- **Todos los colores** del diseño (fondos, textos, bordes, acentos y estados).
- Tipografía: familias, pesos y la escala de tamaños e interlineados que realmente se use.
- Espaciados, radios y sombras: solo si se repiten o forman una escala coherente. Un valor aislado y único queda local en el CSS del componente.

**Nombres semánticos**, por función y no por valor:

```css
:root {
  /* color */
  --color-bg: …;
  --color-surface: …;
  --color-text-primary: …;
  --color-text-secondary: …;
  --color-border: …;
  --color-accent: …;
  /* tipografía */
  --font-mono: …;
  --font-weight-regular: …;
  --text-sm: …;
  --text-md: …;
  --text-display: …;
  /* espaciado, radios, sombras */
  --space-1: …;
  --space-2: …;
  --radius-pill: …;
  --shadow-…: …;
}
```

Evitar nombres como `--orange` o `--gray-2`.

**Breakpoints:** las custom properties no funcionan dentro de `@media`, así que están documentados en el comentario inicial de `tokens.css` y se usan literalmente: mobile < 768 ≤ tablet < 1280 ≤ desktop. El contenido desktop mide 1280 px (`--layout-content-max`) con gutters de 80 px; en mobile, 24 px.

**Reglas de uso:**
- Antes de crear un token, buscar uno equivalente (`grep -- "--color-" packages/ui/src/tokens`).
- No mezclar `#hex` o `rgb()` en componentes si existe el token.
- Tema: el diseño de la página 1 se ve oscuro. No implementar modo claro u oscuro alternativo si Figma no lo define.

## Estilos de componentes

- **CSS Modules** (`<Name>.module.css`), tanto en `packages/ui` como en las secciones de `apps/web`. Solo consumen tokens. Los valores aislados quedan locales con un comentario de su origen en Figma.
- Los estados que Figma no define (hover, active, disabled) se resuelven en forma mínima con tokens existentes y se documentan como "no definidos en Figma". El focus visible es obligatorio.
- No agregar Tailwind, styled-components ni otras librerías sin aprobación.

## Componentes de `packages/ui`

Crear cada uno **solo cuando el diseño lo use**, con API mínima:

| Componente | Uso esperado | API orientativa |
|---|---|---|
| `Button` | Acciones ("CV", "GitHub", "LinkedIn", "Volver al inicio") | `variant` (derivada de Figma), `icon?`, `iconPosition?`, y render como `<a>` cuando es enlace (`href`) |
| `Text` | Párrafos y textos de apoyo | `size`, `tone` (primary o secondary), `as?` |
| `Title` | Encabezados | `level: 1–6` (define la etiqueta `h*`), `size?` separado del nivel semántico |
| `Chip` | Categorías y tags del stack (no interactivo) | `variant`: `default` / `accent`. **Los filtros son `Button` con `pressed`**, no `Chip` |
| `Icon` | Iconos SVG de Figma | `name: IconName`, `size?`, `label?` (sin `label` → `aria-hidden`) |

Reglas:
- Props tipadas que extienden las nativas: `ComponentPropsWithoutRef<'button'>` y similares. Pasar `className` y `...rest`.
- Variantes como uniones literales (`'primary' | 'ghost'`) con nombres derivados del rol en Figma, no del color.
- Sin textos ni datos del portfolio dentro de `packages/ui`.
- Export nombrado desde `packages/ui/src/index.ts` (`export { Button } from './components/Button/index.ts'`), junto con los tipos de props.
- Un componente por carpeta: `components/Button/{Button.tsx, Button.module.css, Button.stories.tsx, index.ts}`. Toda variante nueva lleva su historia.

## Iconos

- **Origen:** solo del archivo de Figma. Exportar SVG con `download_assets` o, si no funciona, pedir al usuario el export. No usar emojis, caracteres Unicode ni librerías de iconos.
- **Ubicación:** `packages/ui/src/icons/`, en kebab-case y descriptivos según la forma (`arrow-left.svg`, `arrow-up-right.svg`, `download.svg`, `github.svg`, `linkedin.svg`).
- **Limpieza:** conservar `viewBox`, quitar `width` y `height` fijos, IDs y metadatos de Figma, y reemplazar el fill o stroke monocromo por `currentColor`. Los iconos multicolor se dejan tal cual.
- **Exposición:** `packages/ui/src/icons/index.ts` mantiene un mapa tipado `name → { svg (import ?raw), size }`. `IconName` es una unión derivada de ese mapa.
- **Pendientes en Figma:** `layers`, `check-circle`, `tool` y `ai` tienen el vector de `panels-top-left`. No se exportan hasta que se corrijan en el diseño.
- **Accesibilidad:** decorativo → `aria-hidden="true"`. Si el icono es el único contenido de un control, va con `label` (`aria-label`).
