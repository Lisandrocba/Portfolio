// Etapas laborales (textos de Figma: frames "Empleos" desktop `25:1064` y mobile `25:1131`).
export type JobCategory = 'front' | 'fullstack'

export type Job = {
  period: string
  /** En Figma: mayúsculas en desktop y capitalizado en mobile. Se transforma con CSS. */
  modality: string
  category: JobCategory
  role: string
  organization: string
  location: string
  /** Texto de desktop (≥ 1024 px). */
  summary: string
  /** Versión resumida del frame mobile (< 1024 px). */
  summaryShort: string
  stack: string
}

export const categoryLabels: Record<JobCategory, string> = {
  front: 'Front',
  fullstack: 'Full stack',
}

export const jobs: Job[] = [
  {
    period: 'Sept. 2025 — Presente',
    modality: 'Híbrido',
    category: 'front',
    role: 'Desarrollador Frontend (React / TypeScript)',
    organization: 'Cuenta Banco de Córdoba — Caramel Point',
    location: 'Córdoba, Argentina · Híbrido',
    summary:
      'Desarrollo en 3 productos/equipos bancarios enterprise, monorepos que consumen microservicios. Design System y librería compartida; custom hooks; interfaces Figma validadas con diseño; Jest y React Testing Library, mocks contract testing; Claude Code y GitHub Copilot CLI para refactors/tests/revisión; rotación entre equipos. Logro: librerías cross-proyecto con reglas desarrollo que previenen errores testing y análisis Sonar. Stack React, TypeScript, Monorepo, Microservicios, Design System, Jest, React Testing Library, Contract Testing, Figma, Git.',
    summaryShort:
      'Desarrollo en 3 productos/equipos bancarios enterprise, monorepos/microservicios; Design System compartido, custom hooks, interfaces Figma validadas con diseño; Jest/React Testing Library/contract testing; Claude Code/Copilot CLI; rotación equipos. Logro librerías cross-proyecto para prevenir errores testing y Sonar.',
    stack:
      'React / TypeScript / Monorepo / Microservicios / Design System / Jest / React Testing Library / Contract Testing / Figma / Git',
  },
  {
    period: 'Ene. 2022 — Presente',
    modality: 'Remoto',
    category: 'fullstack',
    role: 'Desarrollador Full Stack',
    organization: 'Freelance — Workana / Clientes independientes',
    location: 'Córdoba, Argentina · Remoto',
    summary:
      'Relevamiento, diseño solución, desarrollo, despliegue, soporte y comunicación con clientes/estimaciones/entregas iterativas. React, Next.js, TypeScript; APIs REST Node.js y Express; PostgreSQL, MongoDB, Prisma. Integración OpenAI para asistentes y automatización. IA Claude Code, Copilot CLI, MCP con plan por feature y skills reutilizables. Destacado: sistema consultora RRHH para búsquedas, candidatos y ruta procesos. Stack React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Prisma, Claude Code, MCP.',
    summaryShort:
      'Relevamiento, diseño solución, desarrollo, despliegue, soporte y comunicación clientes. React/Next.js/TypeScript; APIs REST Node.js/Express, PostgreSQL/MongoDB/Prisma. OpenAI asistentes/automatización; Claude Code/Copilot CLI/MCP. Destacado sistema consultora RRHH búsquedas, candidatos, ruta procesos.',
    stack: 'React / Next.js / TypeScript / Node.js / Express / PostgreSQL / MongoDB / Prisma / Claude Code / MCP',
  },
  {
    period: 'Jul. 2024 — Sept. 2025',
    modality: 'Híbrido',
    category: 'fullstack',
    role: 'Desarrollador Full Stack',
    organization: 'Mindfactory',
    location: 'Córdoba, Argentina · Híbrido',
    summary:
      'Primeros 6 meses backend y luego también frontend. APIs Node.js/TypeScript y decisiones arquitectura escalable; frontend React, Next.js y Vue JavaScript/TypeScript desde Figma; Jest. Stack React, Next.js, Vue, JavaScript, TypeScript, Node.js, Express, MongoDB, SQL, Jest, Figma.',
    summaryShort:
      'Primeros 6 meses backend, después también frontend. APIs Node.js/TypeScript, arquitectura escalable; React/Next.js/Vue desde Figma; Jest.',
    stack: 'React / Next.js / Vue / JavaScript / TypeScript / Node.js / Express / MongoDB / SQL / Jest / Figma',
  },
  {
    period: 'Nov. 2023 — Jul. 2024',
    modality: 'Remoto',
    category: 'fullstack',
    role: 'Desarrollador Full Stack',
    organization: 'Rankerfy',
    location: 'España · Remoto',
    summary:
      'Aplicación web interfaces dinámicas accesibles escalables, APIs y servicios backend. Componentes reutilizables React/TypeScript con Storybook; Node.js/Express/TypeScript, Jest frontend/backend; equipo ágil Jira. Stack React, TypeScript, Node.js, Express, MongoDB, SQL, Storybook, Jest, Jira.',
    summaryShort:
      'Interfaces dinámicas accesibles escalables; componentes React/TypeScript documentados Storybook; APIs Node.js/Express/TypeScript; Jest front/back, colaboración ágil Jira.',
    stack: 'React / TypeScript / Node.js / Express / MongoDB / SQL / Storybook / Jest / Jira',
  },
  {
    period: 'Ene. 2023 — Nov. 2023',
    modality: 'Remoto',
    category: 'front',
    role: 'Desarrollador Frontend',
    organization: 'Softnik',
    location: 'Córdoba, Argentina · Remoto',
    summary:
      'Gestión horarios empleados: registro, días/horarios, validación GPS ingreso/egreso. Interfaces responsivas React/JavaScript/SCSS; Jest/React Testing Library; Scrum/Jira/GitLab. Stack React, JavaScript, SCSS, Jest, React Testing Library, GitLab, Jira, Scrum.',
    summaryShort:
      'Sistema gestión horarios empleados y GPS ingreso/egreso; interfaces React/JavaScript/SCSS; Jest/React Testing Library; Scrum/Jira/GitLab.',
    stack: 'React / JavaScript / SCSS / Jest / React Testing Library / GitLab / Jira / Scrum',
  },
]
