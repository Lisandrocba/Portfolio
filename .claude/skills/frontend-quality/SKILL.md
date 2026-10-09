---
name: frontend-quality
description: Estándares de calidad y checklist de validación para el portfolio (TypeScript estricto, HTML semántico, accesibilidad, responsive, navegación, dependencias, lint y build). Usar al terminar cualquier implementación o revisión y antes de informar el resultado.
---

# Calidad frontend

## TypeScript
- Nada de `any`. Si un tipo es desconocido, usar `unknown` y estrecharlo. Nada de `as` para silenciar errores.
- Tipar las props explícitamente (`type XProps = { … }`) y usar `import type` para tipos (lo exige `verbatimModuleSyntax`).
- `strict: true` está activo en `apps/web` y `packages/ui`. No desactivarlo ni relajar opciones del tsconfig sin aprobación.

## Componentes
- Una responsabilidad por componente. Si supera ~150 líneas o mezcla varias secciones, dividirlo.
- Reutilizar `@portfolio/ui` y los tokens antes de escribir markup o CSS nuevo.
- Sin código muerto, `console.log` ni comentarios que repitan el código.

## HTML semántico y accesibilidad
- Estructura `header` > `nav`, `main`, `section` (cada una con heading) y `footer`. Un solo `h1` por página y niveles de heading sin saltos.
- `<a>` para navegar (react-router `Link` para rutas internas y `href` para externas con `rel="noreferrer"` si llevan `target="_blank"`). `<button type="button">` para acciones.
- Filtros: `button` con `aria-pressed` o grupo de radios. Que se puedan usar con teclado.
- Imágenes con `alt` significativo, o `alt=""` si son decorativas. Iconos decorativos con `aria-hidden`.
- Foco visible (no quitar `outline` sin reemplazo), contraste suficiente según los colores de Figma y respetar `prefers-reduced-motion` si hay animaciones.
- `<html lang="es">` (hoy está en `en`, corregir en la primera implementación).

## Responsive
- Revisar en **390**, **768** y **1440** px. No hay frame tablet: el 768 se valida contra la interpolación acordada.
- Sin scroll horizontal. Verificar `document.documentElement.scrollWidth <= window.innerWidth` en cada ancho, y revisar textos largos (emails, títulos) y elementos de ancho fijo.
- Si la extensión de Chrome está disponible, comprobarlo sobre `yarn dev`. Si no, decirlo.

## Navegación
- Las tres rutas (`/`, `/experiences`, `/education`) cargan sin errores en consola.
- Los enlaces del header, "Volver al inicio" y "Ver más" llevan al destino correcto.
- Recargar una ruta interna en `yarn preview` no devuelve 404 (anotar si el hosting necesitará un fallback de SPA).

## Dependencias
- No agregar dependencias sin justificarlas y sin aprobación. Las ya acordadas son `react-router` y Storybook.
- Antes de proponer una, comprobar si alcanza con la plataforma o con React.

## Validaciones a ejecutar
Ejecutar solo los scripts que existan. Revisar `package.json` antes:
- `yarn lint`
- `yarn typecheck` (paquete UI, incluidas las historias)
- `yarn build` (incluye `tsc -b` de la app)
- `yarn build-storybook` si se tocó `packages/ui`
- Revisar la pestaña **Accessibility** de Storybook (addon-a11y) en los componentes que se modificaron.

Corregir los errores **introducidos por el cambio**. Si hay errores previos ajenos, informarlos sin arreglarlos por cuenta propia.

## Tests
- No hay framework de tests. No agregar uno para secciones puramente estáticas.
- Si hay lógica interactiva (p. ej. filtros de Formación), proponer al usuario Vitest y Testing Library, con los casos concretos a cubrir. No instalar sin aprobación. Mientras tanto, verificar el comportamiento a mano en el navegador.

## Informe final (obligatorio)
- Validaciones ejecutadas, con su resultado (ok, o error y corrección aplicada).
- Validaciones no ejecutadas y por qué (script inexistente, sin navegador, sin acceso a Figma…).
- Problemas conocidos o pendientes.
