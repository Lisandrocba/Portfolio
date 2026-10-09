export type Highlight = {
  period: string
  tag: string
  title: string
  organization: string
  summary?: string
  stack?: string
}

export const workHighlights: Highlight[] = [
  {
    period: 'Sept. 2025 — Actualidad',
    tag: 'HÍBRIDO',
    title: 'Desarrollador Frontend (React / TypeScript)',
    organization: 'Cuenta Banco de Córdoba — Caramel Point',
    summary:
      'Desarrollo de funcionalidades en 3 productos bancarios, monorepos, microservicios, Design System compartido, custom hooks, testing y librerías cross-proyecto.',
    stack: 'React / TypeScript / Jest / RTL / Contract Testing',
  },
  {
    period: 'Ene. 2022 — Actualidad',
    tag: 'REMOTO',
    title: 'Desarrollador Full Stack — Freelance',
    organization: 'Workana / Clientes independientes',
    summary:
      'Proyectos de relevamiento a despliegue y soporte. React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Prisma, OpenAI y comunicación con clientes.',
    stack: 'React / Next.js / Node.js / Express / PostgreSQL / MongoDB / Prisma',
  },
]

export const educationHighlights: Highlight[] = [
  { period: 'Oct. 2025', tag: 'CURSO', title: 'Curso de Diseño UX/UI', organization: 'UTN Buenos Aires' },
  { period: 'Sept. 2022', tag: 'CURSO', title: 'Desarrollador Full Stack', organization: 'Coderhouse' },
]
