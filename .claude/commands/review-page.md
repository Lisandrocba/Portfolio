---
description: Revisa una página ya implementada (home, experiences o education) contra Figma y los estándares del proyecto
argument-hint: home | experiences | education
---

Revisá la página implementada: **$ARGUMENTS**

## 0. Validar el pedido
- El argumento debe ser `home`, `experiences` o `education`. Si no, detenete y pedí cuál revisar.
- Si la página todavía no existe en `apps/web/src/pages/<page>/`, informalo y terminá.

## 1. Contexto
Aplicá como criterio las skills `figma-to-code`, `portfolio-architecture`, `design-system` y `frontend-quality`. Usá los nodeIds de la tabla de `CLAUDE.md` (solo página 1).

## 2. Revisión
Cubrí cada punto e indicá cuáles no pudiste verificar y por qué:

**Visual**
- Fidelidad a Figma por sección (`get_screenshot` y `get_design_context` frente a la app): tipografía, colores, espaciados, alineación, iconos y textos.
- Responsive en 1440, 768 y 390, sin scroll horizontal.

**Código**
- Tokens: valores sueltos donde existe un token, tokens duplicados o mal nombrados.
- Reutilización de `@portfolio/ui`: markup duplicado que debería ser un `Button`, `Chip`, `Title`, etc.
- Organización: una sección por componente, ubicación correcta, `<Page>Page.tsx` solo compone, y hooks justificados o faltantes.
- Accesibilidad: semántica, headings, enlaces frente a botones, `alt`, `aria-*`, foco y `lang`.
- `yarn lint` y `yarn build` (ejecutalos y reportá los errores).
- Duplicación, complejidad innecesaria, código muerto y dependencias injustificadas.

## 3. Informe
Separá **Problemas visuales** y **Problemas de código**. Ordená cada grupo por prioridad:
- **Crítico**: rompe build o navegación, la accesibilidad es grave, o hay una desviación visual evidente.
- **Importante**: tokens o componentes no reutilizados, o desviación visual menor pero notoria.
- **Menor**: estilo o limpieza.

En cada hallazgo indicá `archivo:línea`, el problema, la referencia de Figma si aplica y la **corrección concreta** propuesta.

## 4. Correcciones
- No reescribas la página completa. Proponé correcciones puntuales.
- Aplicalas solo si el usuario lo pide, empezando por las críticas, y volvé a ejecutar las validaciones.
