import type { IconName } from '@portfolio/ui'

export type StackGroup = {
  label: string
  items: string[]
}

export type StackArea = {
  title: string
  // Figma usa el glifo de `panels-top-left` en las áreas sin icono propio (layers, check-circle, tool, ai).
  icon: IconName
  description: string
  groups: StackGroup[]
  focus?: string
}

export const stackAreas: StackArea[] = [
  {
    title: 'Frontend',
    icon: 'panels-top-left',
    description: 'Interfaces rápidas, accesibles y adaptables.',
    groups: [
      { label: 'Frameworks y bibliotecas', items: ['React', 'React Native', 'Next.js'] },
      { label: 'Lenguajes y estilos', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS'] },
    ],
    focus: 'Componentes · Estado · Accesibilidad',
  },
  {
    title: 'Backend',
    icon: 'database',
    description: 'La lógica que sostiene cada experiencia.',
    groups: [
      {
        label: 'Frameworks y bases de datos',
        items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server'],
      },
      { label: 'APIs y ORM', items: ['APIs REST', 'Prisma (ORM)'] },
    ],
    focus: 'APIs REST · Autenticación · Datos',
  },
  {
    title: 'Arquitectura y prácticas',
    icon: 'panels-top-left',
    description: 'Principios y patrones para escalar con claridad.',
    groups: [
      { label: 'Arquitectura', items: ['Microservicios', 'Monorepo'] },
      { label: 'Componentes y diseño', items: ['Design Systems', 'Librerías de Componentes'] },
      { label: 'Principios y APIs', items: ['SOLID', 'Diseño de APIs REST'] },
    ],
  },
  {
    title: 'Testing',
    icon: 'panels-top-left',
    description: 'Herramientas para validar y confiar el código.',
    groups: [{ label: 'Herramientas de testing', items: ['Jest', 'React Testing Library', 'Contract Testing'] }],
  },
  {
    title: 'Herramientas',
    icon: 'panels-top-left',
    description: 'Herramientas de flujo, colaboración y gestión.',
    groups: [
      { label: 'Versionamiento y colaboración', items: ['Git', 'GitHub', 'GitLab', 'ADO'] },
      { label: 'Entorno y gestión', items: ['Docker', 'Jira', 'Scrum/Ágil'] },
    ],
  },
  {
    title: 'Desarrollo asistido por IA',
    icon: 'panels-top-left',
    description: 'Integración con modelos de IA para acelerar el flujo.',
    groups: [
      { label: 'Herramientas de IA', items: ['Claude Code', 'GitHub Copilot CLI'] },
      { label: 'Integraciones', items: ['Conectores MCP', 'Integración de APIs de OpenAI'] },
    ],
  },
]
