import type { Meta, StoryObj } from '@storybook/react-vite'
import { Title } from './Title.tsx'

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component:
          '`level` define la etiqueta (`h1`–`h6`) y `size` la apariencia. Elegí el nivel según la jerarquía del documento, ' +
          'no según el tamaño. Tamaños desktop de Figma; los tamaños mobile aún no se inspeccionaron.',
      },
    },
  },
  args: {
    level: 2,
    size: 'xl',
    children: 'Un stack conectado.',
  },
  argTypes: {
    level: { control: 'inline-radio', options: [1, 2, 3, 4, 5, 6] },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'display'],
      table: { defaultValue: { summary: 'xl' } },
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

/** Título de sección (Figma: "Un stack conectado.", 44 px). */
export const Section: Story = {}

/** Título de página (Figma: "Estudios y cursos.", 60 px). */
export const Page: Story = {
  args: { level: 1, size: '2xl', children: 'Estudios y cursos.' },
}

/** Hero de Home (120 px, peso 500). */
export const Display: Story = {
  args: { level: 1, size: 'display', children: 'Full-stack Developer' },
}

/** Mismo tamaño visual con distinto nivel semántico. */
export const LevelVsSize: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Title level={2} size="md">h2 · md — Educación formal</Title>
      <Title level={3} size="md">h3 · md — Frontend</Title>
    </div>
  ),
}

export const Scale: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Title level={3} size="sm">sm · 23px — Desarrollador Full Stack — Freelance</Title>
      <Title level={3} size="md">md · 26px — Cursos y certificaciones</Title>
      <Title level={3} size="lg">lg · 32px — Programador (Técnico en Programación)</Title>
      <Title level={2} size="xl">xl · 44px — Últimos trabajos.</Title>
      <Title level={2} size="2xl">2xl · 60px — Estudios y cursos.</Title>
      <Title level={1} size="display">display · 120px</Title>
    </div>
  ),
}
