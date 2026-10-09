---
description: Implementa una página del portfolio (home, experiences o education) a partir de la página 1 de Figma
argument-hint: home | experiences | education
---

Implementá la página del portfolio indicada: **$ARGUMENTS**

## 0. Validar el pedido
- El argumento debe ser exactamente `home`, `experiences` o `education`. Si falta o es otro, **detenete** y pedí cuál implementar.
- Verificá que estén hechos los pasos de "Antes de la primera página" de `CLAUDE.md` (sobre todo, que `react-router` esté instalado en `apps/web`). Si no, avisá y proponé hacerlos primero, siguiendo `portfolio-architecture`.

## 1. Contexto
Leé y aplicá las skills `figma-to-code`, `portfolio-architecture`, `design-system` y `frontend-quality`. Revisá qué hay ya en `packages/ui` (componentes, tokens, iconos) y en `apps/web/src/components`.

## 2. Inspección de Figma (solo página 1)
- Usá los nodeIds de la tabla de `CLAUDE.md` para la página pedida (desktop y mobile).
- Listá las secciones (frames hijos) y obtené `get_design_context` y `get_screenshot` de cada una.
- Identificá secciones, patrones repetidos, assets e iconos, y los valores que deberían ser tokens.
- Si el acceso a Figma falla o algún dato no se puede leer, **informá la limitación y pedí el dato** antes de suponer nada.

## 3. Plan (antes de editar archivos)
Presentá un plan breve con:
- Secciones → componentes (nombre y ubicación).
- Tokens a reutilizar o crear, y componentes de `packages/ui` a reutilizar o crear.
- Hooks necesarios (o "ninguno") e iconos a exportar.
- Comportamiento tablet propuesto y datos faltantes.

## 4. Implementación
- Implementá **solo esta página**. No implementes otras páginas, el chat con IA ni funcionalidades no pedidas.
- Reutilizá componentes y tokens existentes. Extendé `packages/ui` solo con piezas genéricas que esta página necesite.
- Creá hooks únicamente si hay estado o lógica real.
- Exportá los iconos originales de Figma a `packages/ui/src/icons/` y usalos con `Icon`.
- Conectá la página a su ruta.

## 5. Validación y comparación
- Ejecutá las validaciones que existan (`yarn lint`, `yarn build`) y corregí los errores introducidos.
- Si podés levantar la app y capturarla, compará contra Figma en 1440, 768 y 390 y corregí las diferencias.

## 6. Resumen final
- Archivos creados y modificados.
- Decisiones tomadas (y las que quedan para el usuario).
- Qué se inspeccionó realmente en Figma y con qué herramienta.
- Validaciones ejecutadas y no ejecutadas, según el informe de `frontend-quality`.
