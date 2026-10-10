# Portfolio · Lisandro Córdoba

Portfolio personal de tres páginas (Home, Experiencias y Formación). Empieza como una web estática y va a crecer de a poco. Las prioridades son la fidelidad visual al diseño de Figma, el código limpio y reutilizable y una arquitectura simple.

## Stack (verificado en el repo)

- Monorepo con **yarn 1 workspaces**: `apps/web` (la app) y `packages/ui` (`@portfolio/ui`). No uses npm ni pnpm.
- React 19, TypeScript ~6.0 con `strict` y Vite 8 (`@vitejs/plugin-react`).
- Estilos: CSS Modules por componente y tokens CSS de `@portfolio/ui`. Sin librería de estilos.
- Storybook 10 (`@storybook/react-vite`, addon-docs, addon-a11y) en `packages/ui`.
- ESLint 10 con flat config **en la raíz** (`eslint.config.js`) para todo el repo.
- Sin router (se instala `react-router` con la primera página) y sin framework de tests.
- Convenciones de código: comillas simples, sin punto y coma, 2 espacios, `import type` para tipos (`verbatimModuleSyntax`) y extensión `.tsx` en imports locales.

## Diseño: Figma

- Archivo: https://www.figma.com/design/iZriNIfZBEUlmLBy3lyLwn/portfolio?node-id=0-1 (fileKey `iZriNIfZBEUlmLBy3lyLwn`).
- **La única referencia es la página 1 (`0:1`).** La página "Mejoras futuras" (`46:383`) no se usa como referencia.
- Frames de la página 1:

| Página | Slug | Desktop 1440 | Mobile 390 |
|---|---|---|---|
| Home ("Portafolio") | `home` | `5:2208` | `9:1244` |
| Experiencias ("Empleos") | `experiences` | `25:1064` | `25:1131` |
| Formación ("Estudios y cursos") | `education` | `31:646` | `31:754` |

- No hay frame tablet ni variables de Figma. Los detalles de inspección están en la skill `figma-to-code`.
- **El Figma MCP tiene cupo limitado (plan Starter)** y se agotó durante la creación de `@portfolio/ui`. Pedí contexto por sección y no repitas llamadas. Si se agota, usá la extensión de Chrome o capturas del usuario.
- Si no podés leer un dato del diseño, decilo y pedilo. **No inventes colores, tipografías, medidas ni iconos.**

## Arquitectura

**Estado actual:** el monorepo está creado. `apps/web` tiene solo el shell (`App.tsx` con un `<main>` vacío). `packages/ui` ya tiene los tokens, `Button`, `Text`, `Title`, `Chip`, `Icon` e iconos (ver `packages/ui/README.md`).

**Arquitectura** (detalle en la skill `portfolio-architecture`):

```text
apps/web/src/
  pages/<page>/{components/,hooks/,<Page>Page.tsx}   # home, experiences, education
  components/   # layout de la app compartido entre páginas (header, footer…)
  routes/       # configuración de react-router
packages/ui/src/
  components/   # Button, Text, Title, Chip, Icon (genéricos, sin contenido del portfolio)
  icons/        # SVG exportados de Figma
  tokens/       # tokens.css (variables CSS)
```

Rutas propuestas: `/`, `/experiences` y `/education`.

### Antes de la primera página

1. ~~Migrar a monorepo~~ (hecho).
2. Instalar `react-router` en `apps/web` (`yarn workspace web add react-router`). Es la decisión de routing ya acordada.
3. Hacer commits separados de la migración y del paquete UI si todavía no se hicieron.

## Convenciones

- Componentes en PascalCase, un componente por archivo, y un componente por sección (frame hijo de Figma) cuando tenga sentido.
- Composición de cada página centralizada en `<Page>Page.tsx` (`HomePage.tsx`, `ExperiencesPage.tsx`, `EducationPage.tsx`).
- Hooks con prefijo `use` en `pages/<page>/hooks/`, **solo si hay estado o lógica real**. Una página estática no necesita hook.
- **Tokens obligatorios:** ningún color, fuente, radio ni sombra sueltos si ya existe un token. Ver `design-system`.
- `packages/ui` solo contiene piezas genéricas y reutilizables. El contenido específico del portfolio vive en `apps/web`.
- Iconos: exportados en SVG desde Figma a `packages/ui/src/icons/` (kebab-case) y usados mediante `<Icon name="…" />`. Nada de emojis, caracteres Unicode ni librerías de iconos.

## Skills (`.claude/skills/`)

| Skill | Responsabilidad |
|---|---|
| `figma-to-code` | Inspeccionar Figma y traducirlo a código fiel (flujo inspección → plan → implementación → comparación → validación) |
| `portfolio-architecture` | Estructura de páginas, secciones, hooks y datos, más la migración a monorepo |
| `design-system` | Tokens, paquete `packages/ui` e iconos |
| `frontend-quality` | TypeScript, accesibilidad, responsive, validaciones e informe |

## Comandos (`.claude/commands/`)

- `/implement-page <home|experiences|education>`: implementa **solo** esa página desde Figma. Ejemplo: `/implement-page home`.
- `/review-page <home|experiences|education>`: revisa una página implementada y separa los problemas visuales de los de código. Ejemplo: `/review-page education`.

## Validaciones

Desde la raíz:
- `yarn lint`: ESLint de todo el repo.
- `yarn typecheck`: `tsc --noEmit` de `@portfolio/ui`, incluidas las historias.
- `yarn build`: `tsc -b && vite build` de `apps/web`.
- `yarn build-storybook`: build estático de Storybook. Usá `yarn storybook` para el modo desarrollo en `:6006`.

Además:
- No hay script de tests. No se agrega un framework de tests para contenido estático. Para lógica interactiva, proponelo antes de instalarlo.
- Informá siempre qué validaciones se ejecutaron y cuáles no.

## Restricciones

- No agregues dependencias sin justificarlas y sin el visto bueno del usuario. Las únicas ya acordadas son `react-router`, pendiente de instalar, y Storybook, ya instalado.
- Nada de abstracciones prematuras, archivos vacíos ni código para funcionalidades no pedidas.
- **No implementes el chat con IA** ni su infraestructura hasta que se pida expresamente.
- Documentación de trabajo en español. Nombres de archivos, componentes y APIs en inglés.

## Decisiones abiertas

- Criterio para tablet (no hay frame): interpolar entre mobile y desktop y validarlo con el usuario.
- Tamaños tipográficos mobile: los frames mobile todavía no se inspeccionaron.
- Iconos del stack (`layers`, `check-circle`, `tool`, `ai`): en Figma tienen el vector de `panels-top-left` y hay que corregirlos en el diseño.
