---
name: figma-to-code
description: Inspeccionar el diseño de Figma del portfolio (solo la página 1) y traducirlo a código React fiel al original en desktop, tablet y mobile. Usar al implementar, ajustar o comparar cualquier página o sección contra Figma, o al exportar iconos y assets.
---

# Figma → código

## Fuente de verdad

- Archivo: `iZriNIfZBEUlmLBy3lyLwn` (https://www.figma.com/design/iZriNIfZBEUlmLBy3lyLwn/portfolio?node-id=0-1).
- **Usar solo la página 1 (`0:1`).** Ignorar "Mejoras futuras" (`46:383`) salvo que el usuario la pida expresamente.
- Frames de la página 1:

| Slug | Desktop 1440 | Mobile 390 |
|---|---|---|
| `home` | `5:2208` "Portafolio · Lisandro Córdoba" | `9:1244` "Portafolio mobile · …" |
| `experiences` | `25:1064` "Empleos · …" | `25:1131` "Empleos mobile · …" |
| `education` | `31:646` "Estudios y cursos · …" | `31:754` "Estudios y cursos mobile · …" |

- Los hijos directos de cada frame son las **secciones** (p. ej. "Encabezado", "Sobre mí", "Selección de formación", "Cierre").
- Datos conocidos: **no hay variables de Figma** (`get_variable_defs` devuelve `{}`), así que los tokens se derivan de los valores de `get_design_context`. **No hay frame tablet.**

## Herramientas (en orden de preferencia)

1. **Figma MCP** (`mcp__plugin_figma_figma__*`):
   - Antes de llamar a `get_design_context`, cargar la skill `figma:figma-design-to-code`, que es obligatoria.
   - `get_metadata(nodeId)` para la estructura. En los frames grandes la respuesta puede venir **sin hijos**. En ese caso pedir los nodos de sección por ID (los IDs salen de la selección actual, de una captura o del usuario) o pedir al usuario que seleccione la sección en Figma desktop.
   - `get_design_context(nodeId)` por **sección**, no por página completa, para conseguir estilos exactos.
   - `get_screenshot(nodeId)` como referencia visual y para comparar.
   - `download_assets` para exportar iconos e imágenes originales.
2. **Extensión de Claude para Chrome** sobre el archivo abierto en el navegador, si el MCP falla.
3. **Capturas o exports manuales** del usuario.

Si ninguna funciona, **detenerse e informar la limitación** antes de suponer cualquier detalle.

## Flujo de trabajo

### 1. Inspección
- [ ] Listar las secciones (hijos directos) del frame desktop y del mobile de la página pedida, y emparejarlas por nombre.
- [ ] Por sección, registrar la jerarquía visual, tipografía (familia, peso, tamaño, interlineado, tracking), colores, espaciados (padding, gap), tamaños, alineación, bordes y radios, sombras y diferencias entre desktop y mobile.
- [ ] Detectar patrones repetidos. Frames con el mismo nombre y estructura ("Formación", "Categoría", "Filtro", "Acción", "Separador") son candidatos a componente reutilizable. Lo que aparece una sola vez es una sección particular.
- [ ] Inventariar iconos y assets con su nodeId (p. ej. "Flecha", "download").
- [ ] Anotar todo dato que falte o sea ambiguo.

### 2. Planificación
- [ ] Mapear cada sección a un componente (nombre en inglés, ver `portfolio-architecture`).
- [ ] Mapear cada valor visual a un token existente, o proponer un token nuevo siguiendo `design-system`.
- [ ] Decidir qué va a `packages/ui` y qué queda en la página.
- [ ] Definir el comportamiento tablet (768–1279 px aprox.) interpolando entre mobile y desktop, y dejarlo explícito en el plan para que el usuario lo valide.
- [ ] Presentar un plan breve antes de editar archivos.

### 3. Implementación
- Respetar el orden y la jerarquía de secciones de Figma.
- Usar tokens y componentes de `packages/ui`. Nada de valores sueltos cuando exista un token.
- Usar los textos reales del diseño, sin lorem ipsum.
- Usar iconos exportados de Figma y **nunca** emojis, caracteres Unicode (→, ↗, ✓…) o iconos de otra fuente en su lugar. Si el export falla, usar un placeholder visible marcado `TODO(icon: <nodeId>)` e informarlo.
- Layout con flex o grid y anchos fluidos. Reproducir medidas fijas de Figma solo cuando sean intencionales (p. ej. el ancho máximo del contenido).

### 4. Comparación
- Con la app en `yarn dev`, comparar cada sección contra `get_screenshot` en 1440 y 390, y revisar 768.
- Verificar tipografía, espaciados, colores, alineaciones e iconos. Corregir las diferencias o justificarlas.
- Si no se puede capturar la app (sin navegador disponible), decirlo y no afirmar que la comparación se hizo.

### 5. Validación
- Aplicar `frontend-quality` (lint, build, accesibilidad, responsive) e informar el resultado.

## Reglas

- Declarar siempre qué nodos se inspeccionaron realmente y con qué herramienta. No afirmar haber visto estilos, medidas o assets que no se pudieron leer.
- No inventar colores, fuentes, medidas ni iconos. Ante la duda, preguntar.
- No tomar como referencia las capturas de otras páginas del archivo.
