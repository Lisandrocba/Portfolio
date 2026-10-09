---
name: portfolio-architecture
description: Reglas de estructura del portfolio (carpetas por página, componentes por sección, hooks, datos, ubicación entre apps/web y packages/ui) y configuración del monorepo. Usar al crear o mover archivos, al decidir dónde va un componente o hook, o al agregar dependencias a un workspace.
---

# Arquitectura del portfolio

## Estructura objetivo

```text
apps/web/
  src/
    main.tsx
    routes/
      AppRoutes.tsx        # rutas de react-router: /, /experiences, /education
    components/            # layout de la app compartido entre páginas (SiteHeader, SiteFooter…)
    pages/
      home/
        components/        # una sección por frame hijo de Figma: HeroSection.tsx, AboutSection.tsx…
        hooks/             # solo si hace falta
        data/              # solo si hay listas o contenido extenso (stack, trabajos…)
        HomePage.tsx
      experiences/…/ExperiencesPage.tsx
      education/…/EducationPage.tsx
packages/ui/
  package.json             # name: @portfolio/ui
  src/
    components/            # Button, Text, Title, Chip, Icon
    icons/
    tokens/tokens.css
    index.ts               # exports públicos
```

Crear las carpetas solo cuando se vaya a poner algo dentro. Nada de `hooks/` ni `data/` vacíos.

## Dónde va cada cosa

| Caso | Ubicación |
|---|---|
| Sección o pieza usada en una sola página | `apps/web/src/pages/<page>/components/` |
| Pieza específica del portfolio usada en 2 o más páginas (header, footer, separador con contenido) | `apps/web/src/components/` |
| Pieza genérica, sin textos ni datos del portfolio, configurable por props | `packages/ui/src/components/` |
| Estado o lógica de una página | `apps/web/src/pages/<page>/hooks/` |
| Contenido estático tipado (listas de trabajos, cursos, stack) | `apps/web/src/pages/<page>/data/<name>.ts` |

Ante la duda entre `apps/web/src/components` y `packages/ui`, dejarlo en la app. Se promueve cuando aparezca un segundo uso genérico.

## Reglas

- **Página = carpeta.** `<Page>Page.tsx` solo compone secciones: no lleva estilos de detalle ni lógica.
- **Sección = componente**, una por frame hijo de Figma cuando tenga entidad semántica (`<section>` con su heading). Nombre en inglés y descriptivo, terminado en `Section`: "Sobre mí" → `AboutSection`, "Selección de formación" → `EducationListSection`. Los frames puramente decorativos (separadores, wrappers) no llevan componente propio.
- **Hooks** con prefijo `use` más página o funcionalidad: `useHome`, `useExperiences`, `useEducation` o más específicos como `useEducationFilters`. Crearlos solo si hay estado, efectos o derivaciones no triviales (p. ej. los filtros de Formación). Una página estática no tiene hook.
- **Datos** separados de la presentación solo cuando aporte valor (listas repetidas o contenido largo). Tipar con `type`, exportar `as const` cuando aplique y evitar el `any`.
- Evitar componentes de más de ~150 líneas: dividirlos por subsección. También evitar duplicar markup (extraer el ítem repetido) y crear abstracciones con un solo uso.
- Imports de `packages/ui` siempre desde el paquete (`@portfolio/ui`), nunca con rutas relativas que crucen paquetes.

## Extensiones futuras (chat con IA)

La estructura deja lugar para agregar `apps/web/src/features/<feature>/` sin tocar las páginas. **No crear nada de esto hasta que el usuario lo pida.**

## Monorepo (hecho)

La migración ya está hecha. Así quedó configurado:
- **Raíz:** `package.json` con `"workspaces": ["apps/*", "packages/*"]` y scripts que delegan con `yarn workspace …`. ESLint (`eslint.config.js`) y `typescript` viven en la raíz y cubren todo el repo.
- **`apps/web`** (name `web`): Vite + React. Depende de `"@portfolio/ui": "*"`. El tsconfig tiene `strict`. `tsc -b` tipa también el código de `@portfolio/ui` que importa.
- **`packages/ui`** (name `@portfolio/ui`): se consume como fuente TS, sin build propio. Exporta `"."` → `src/index.ts` y `"./styles.css"`. Tiene su propio `tsconfig.json` (`yarn typecheck`) y Storybook.
- Al agregar dependencias usar `yarn workspace <name> add <pkg>`, no instalarlas en la raíz salvo que sean herramientas compartidas. Mantener las mismas versiones de `react` y `vite` en todos los workspaces para que haya una sola copia.

## Pendiente antes de la primera página

1. **Router:** `yarn workspace web add react-router` (decisión ya acordada). Crear `routes/AppRoutes.tsx` con las 3 rutas.
2. **Verificar:** `yarn lint`, `yarn build` y `yarn dev` (la app carga).
