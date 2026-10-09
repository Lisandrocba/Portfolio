import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text.tsx'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          '`label` usa IBM Plex Mono (etiquetas, fechas, metadatos). `body` usa Inter (párrafos). ' +
          'El interlineado de cuerpo está unificado en `--leading-body` (Figma usa 1.6, 1.65 y 1.7).',
      },
    },
  },
  args: {
    children: 'Educación formal y certificaciones del CV. Cursos del más reciente al más antiguo.',
    variant: 'body',
    tone: 'primary',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['body', 'label'], table: { defaultValue: { summary: 'body' } } },
    size: {
      control: 'select',
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'label: 2xs–md · body: md–3xl. Por defecto: label `xs`, body `lg`.',
    },
    tone: { control: 'inline-radio', options: ['primary', 'secondary', 'accent'], table: { defaultValue: { summary: 'primary' } } },
    weight: { control: 'inline-radio', options: ['regular', 'semibold'], description: 'Solo para `label`.' },
    as: { control: 'inline-radio', options: ['p', 'span', 'div', 'time'], table: { defaultValue: { summary: 'p' } } },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Body: Story = {
  args: { variant: 'body', size: '2xl' },
}

/** Descripción secundaria (Figma: descripciones del stack, 14 px). */
export const Description: Story = {
  args: { variant: 'body', size: 'lg', tone: 'secondary', children: 'Interfaces rápidas, accesibles y adaptables.' },
}

/** Fecha como metadato, con `<time>`. */
export const DateLabel: Story = {
  args: { variant: 'label', size: 'xs', tone: 'secondary', as: 'time', dateTime: '2025-10', children: 'oct. 2025' },
}

export const Eyebrow: Story = {
  args: { variant: 'label', size: 'md', tone: 'accent', children: 'Hola, soy Lisandro_' },
}

/** Subtítulo de grupo del stack. */
export const SemiboldLabel: Story = {
  args: { variant: 'label', size: 'sm', weight: 'semibold', children: 'Frameworks y bibliotecas' },
}

export const LabelScale: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Text variant="label" size="2xs" tone="secondary">2xs · 10px — 01 ESTUDIO</Text>
      <Text variant="label" size="xs" tone="secondary">xs · 11px — FORMACIÓN / 2026</Text>
      <Text variant="label" size="sm" tone="secondary">sm · 12px — Proyectos</Text>
      <Text variant="label" size="md">md · 13px — Hola, soy Lisandro_</Text>
    </div>
  ),
}

export const BodyScale: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
      <Text size="md">md · 13px — UTN Buenos Aires</Text>
      <Text size="lg" tone="secondary">lg · 14px — La lógica que sostiene cada experiencia.</Text>
      <Text size="xl" tone="secondary">xl · 15px — Trabajo con React, TypeScript y Next.js.</Text>
      <Text size="2xl">2xl · 16px — Universidad Tecnológica Nacional – Facultad Regional Córdoba</Text>
      <Text size="3xl">3xl · 17px — Desarrollador Full Stack con más de 4 años de experiencia.</Text>
    </div>
  ),
}
