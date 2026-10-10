# @portfolio/ui

Paquete interno de componentes del portfolio: tokens de diseño, componentes base (`Button`, `Text`, `Title`, `Chip` e `Icon`) e iconos SVG originales de Figma. Lo consume `apps/web` dentro del monorepo y no se publica en npm.

**Fuente de verdad:** página 1 del archivo de Figma, con los frames desktop de Home (`5:2208`) y Formación (`31:646`). Ver `CLAUDE.md` en la raíz.

## Requisitos

- React 19 y React DOM 19, como `peerDependencies`.
- TypeScript 6 con `moduleResolution: "bundler"`.
- Un bundler que entienda **CSS Modules** e imports `?raw`. Vite los soporta sin configuración extra; el paquete se usa con Vite 8.
- yarn 1 workspaces. El paquete vive en `packages/ui` y la app en `apps/web`.

El paquete **no tiene build propio**: exporta código fuente TypeScript (`"exports": { ".": "./src/index.ts" }`) y lo compila el Vite de quien lo consume.

## Integración en la app

1. Agregar la dependencia del workspace en `apps/web/package.json`:
   ```json
   "dependencies": { "@portfolio/ui": "*" }
   ```
   y ejecutar `yarn install` en la raíz.

2. Cargar **una sola vez** los estilos globales (fuentes y tokens) en el entry de la app, antes de los estilos propios:
   ```tsx
   // apps/web/src/main.tsx
   import '@portfolio/ui/styles.css'
   import './index.css'
   ```
   Sin este import los componentes se ven sin tipografía ni colores, porque sus CSS Modules usan las variables `--color-*`, `--font-*`, etc.

3. Importar los componentes por el nombre público del paquete, nunca con rutas internas:
   ```tsx
   import { Button, Chip, Icon, Text, Title } from '@portfolio/ui'
   ```

El fondo de página no lo aplica el paquete. La app lo define en su CSS base con `background: var(--color-bg)`.

## Componentes

### Button

Acción con forma de píldora de 48 px. Corresponde a "Acción", "Filtro" y "Volver al inicio" en Figma.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary'` | `'secondary'` | `primary`: relleno claro. `secondary`: contorno. |
| `icon` | `IconName` | — | Icono de Figma junto al texto. |
| `iconPosition` | `'start' \| 'end'` | `'end'` | Posición del icono. |
| `pressed` | `boolean` | — | Solo en botones. Aplica `aria-pressed` y el estilo de acento (filtros). |
| `href` | `string` | — | Si se indica, se renderiza como `<a>`. |
| `children` | `ReactNode` | — | Texto visible (obligatorio). |

Además acepta los atributos nativos de `<button>` (`onClick`, `type`, `disabled`…) o de `<a>` (`target`, `rel`…). Sin `href` el `type` por defecto es `"button"`.

```tsx
<Button variant="primary" icon="arrow-down" onClick={() => scrollToProfile()}>
  Explorar perfil
</Button>

<Button href="https://github.com/Lisandrocba" icon="github" target="_blank" rel="noreferrer">
  GitHub
</Button>

<Button icon="arrow-left" iconPosition="start" href="/">Volver al inicio</Button>

<Button pressed={filter === 'courses'} onClick={() => setFilter('courses')}>Cursos</Button>
```

Hover, active y disabled **no están definidos en Figma**. Son estados mínimos que usan tokens existentes. El focus visible (outline de acento) es obligatorio.

### Text

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `variant` | `'body' \| 'label'` | `'body'` | `body`: Inter. `label`: IBM Plex Mono. |
| `size` | label: `'2xs' \| 'xs' \| 'sm' \| 'md'` · body: `'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | label `xs` · body `lg` | 10/11/12/13 px · 13/14/15/16/17 px. |
| `tone` | `'primary' \| 'secondary' \| 'accent'` | `'primary'` | Color. |
| `weight` | `'regular' \| 'semibold'` | `'regular'` | Solo con `variant="label"`. |
| `as` | `'p' \| 'span' \| 'div' \| 'time'` | `'p'` | Etiqueta HTML. Con `time` se puede pasar `dateTime`. |

```tsx
<Text size="lg" tone="secondary">Interfaces rápidas, accesibles y adaptables.</Text>
<Text variant="label" size="xs" tone="secondary" as="time" dateTime="2025-10">oct. 2025</Text>
<Text variant="label" size="sm" weight="semibold">Frameworks y bibliotecas</Text>
```

### Title

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | — | Etiqueta `h1`–`h6` (obligatorio). No afecta el tamaño. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| 'display'` | `'xl'` | 23 · 26 · 23→32 · 30→44 · 36→60 · 36→76 · 52→120 px (fluidos entre 390 y 1440 px de ancho). `display` usa peso 500. |

```tsx
<Title level={1} size="2xl">Estudios y cursos.</Title>
<Title level={2} size="xl">Un stack conectado.</Title>
<Title level={3} size="md">Frontend</Title>
```

Elegí `level` según la jerarquía del documento y `size` según el diseño.

### Chip

Etiqueta **no interactiva** ("Etiqueta" y "Categoría" en Figma). Para filtros usá `Button` con `pressed`.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `variant` | `'default' \| 'accent'` | `'default'` | `default`: borde sutil y texto secundario. `accent`: borde y texto de acento. |

```tsx
<Chip>Curso</Chip>
<Chip variant="accent">FORMACIÓN ACADÉMICA</Chip>
```

### Icon

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `name` | `IconName` | — | Icono (obligatorio). |
| `size` | `number` | tamaño original en Figma | Lado en px. El grosor de trazo se mantiene al escalar. Sin `size`, el layout puede fijarlo con la variable CSS `--icon-size` (útil por breakpoint). |
| `label` | `string` | — | Sin `label`: decorativo (`aria-hidden`). Con `label`: `role="img"` + `aria-label`. |

```tsx
<Icon name="arrow-up" />                                {/* decorativo, junto a un texto */}
<Icon name="arrow-up-right" size={42} />                {/* "Símbolo de contacto" */}
<a href="https://www.linkedin.com/in/lisandrocordoba">
  <Icon name="linkedin" label="LinkedIn de Lisandro Córdoba" />
</a>
```

El color se hereda del texto (`currentColor`).

## Tokens

Están en `src/tokens/tokens.css`, como variables CSS en `:root`. Se cargan con `@portfolio/ui/styles.css`.

| Grupo | Tokens |
|---|---|
| Color | `--color-bg`, `--color-text-primary`, `--color-text-secondary`, `--color-accent`, `--color-border-subtle`, `--color-text-inverse` |
| Fuentes | `--font-mono` (IBM Plex Mono), `--font-sans` (Inter), `--font-weight-regular/medium/semibold` |
| Texto | `--text-2xs` … `--text-3xl` (10–17 px), `--title-sm` … `--title-display` (23–120 px; `lg`, `xl`, `2xl`, `3xl` y `display` son fluidos) |
| Tracking | `--tracking-display` (-3 %), `--tracking-heading` (-1 %), `--tracking-contact` (-1.5 %), `--tracking-code` (-8 %) |
| Interlineado | `--leading-display` (1.08), `--leading-heading` (1.15), `--leading-title` (1.3), `--leading-body` (1.65) |
| Espaciado | `--space-2xs` … `--space-7xl` (8–96 px, solo valores repetidos en Figma) |
| Forma | `--radius-pill`, `--border-width`, `--control-height`, `--control-padding-x`, `--control-gap` (un layout puede sobrescribir padding y gap de los controles) |
| Layout | `--layout-content-max` (1280), `--layout-gutter` (fluido 24→80), `--layout-gutter-mobile` (24), `--layout-gutter-desktop` (80) |

Reglas:
- Todo color sale de un token. Antes de crear uno nuevo, buscar si ya existe uno equivalente.
- Los valores que aparecen una sola vez quedan locales en el CSS del componente o de la sección.
- La escala tipográfica está **unificada**: Figma usa interlineados de 1.6, 1.65 y 1.7 y títulos de 42 y 44 px, y acá se usa un solo valor de cada uno.
- Los breakpoints no pueden ser variables CSS. Están documentados al inicio de `tokens.css`: layout mobile < 1024 ≤ layout desktop; los tamaños fluidos interpolan entre 390 y 1440.

## Iconos

Ubicación: `src/icons/<nombre>.svg`, en kebab-case. El registro tipado está en `src/icons/index.ts`.

Disponibles: `arrow-down`, `arrow-left`, `arrow-up`, `arrow-up-right`, `database`, `download`, `github`, `linkedin` y `panels-top-left`.

**Agregar un icono:**
1. Exportar el SVG desde Figma (página 1) con el MCP de Figma (`download_assets` sobre el nodo del icono) o con *Export → SVG* en Figma.
2. Limpiarlo:
   - Quitar `width`, `height`, `style`, `preserveAspectRatio`, `overflow` e `id`.
   - Reemplazar los colores de `stroke` o `fill` por `currentColor`.
   - Conservar `viewBox`, los paths y `stroke-width`.
3. Guardarlo en `src/icons/` y registrarlo en `src/icons/index.ts` con su tamaño original:
   ```ts
   import mail from './mail.svg?raw'
   // …
   mail: { svg: mail, size: 17 },
   ```

No se usan emojis, caracteres Unicode ni librerías de iconos en lugar de los originales.

**Pendientes en Figma:** las capas `layers`, `check-circle`, `tool` y `ai` (sección Stack de Home) contienen el mismo vector que `panels-top-left`. Hay que corregirlas en el diseño antes de exportarlas.

**No son iconos:** "Órbita", "Punto de conexión" e "Indicador" son parte de la ilustración de Home y se implementan en esa página.

## Storybook

Storybook 10 con `@storybook/react-vite`, Autodocs y `addon-a11y`.

```bash
yarn storybook          # desde la raíz: http://localhost:6006
yarn build-storybook    # build estático en packages/ui/storybook-static/
# o dentro del workspace:
yarn workspace @portfolio/ui storybook
```

- Las historias viven junto a cada componente (`*.stories.tsx`). Cada componente tiene una página **Docs** con la tabla de props generada desde los tipos y los JSDoc (`react-docgen-typescript`) y controles interactivos.
- La pestaña **Accessibility** ejecuta axe sobre cada historia.
- `.storybook/preview.tsx` carga `src/styles.css` y usa como fondo `--color-bg`. No agrega otros estilos globales.

## Desarrollo de componentes

1. **Verificar en Figma** que el patrón existe y se repite. No crear componentes para necesidades futuras.
2. Crear `src/components/<Name>/` con:
   - `<Name>.tsx`: props tipadas que extienden las nativas, `className` y `...rest`, y JSDoc en cada prop.
   - `<Name>.module.css`: solo tokens. Los valores aislados quedan locales y comentados con su origen en Figma.
   - `<Name>.stories.tsx`: `meta` con `args` y `argTypes`, y una historia por variante real.
   - `index.ts`: re-export del componente y sus tipos.
3. Exportarlo desde `src/index.ts`.
4. Si hace falta un token nuevo, agregarlo a `src/tokens/tokens.css` con un nombre semántico.
5. Validar desde la raíz: `yarn lint`, `yarn typecheck`, `yarn build` y `yarn build-storybook`.

## Convenciones

- **TypeScript estricto**: nada de `any` e `import type` para tipos. Las variantes se tipan como uniones literales derivadas de Figma.
- **Nombres**: componentes en PascalCase, iconos en kebab-case y tokens semánticos (`--color-text-secondary`, no `--gray`).
- **Variantes**: solo las que existen en Figma. Los estados que Figma no define se documentan como tales.
- **Accesibilidad**: HTML semántico (`button` o `a` según la acción, `h1`–`h6` por jerarquía), focus visible e iconos decorativos ocultos.
- **Reutilización**: el paquete no contiene textos ni datos del portfolio; eso vive en `apps/web`.
