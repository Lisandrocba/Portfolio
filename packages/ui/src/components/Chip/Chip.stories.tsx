import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip.tsx'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component:
          'Etiqueta no interactiva (Figma: "Etiqueta", "Categoría"). Para filtros usar `Button` con `pressed`.',
      },
    },
  },
  args: {
    variant: 'default',
    children: 'Curso',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'accent'], table: { defaultValue: { summary: 'default' } } },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

/** Categorías y tecnologías. */
export const Default: Story = {}

/** Figma: "FORMACIÓN ACADÉMICA". */
export const Accent: Story = {
  args: { variant: 'accent', children: 'FORMACIÓN ACADÉMICA' },
}

export const Technologies: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((label) => (
        <Chip key={label}>{label}</Chip>
      ))}
    </div>
  ),
}
