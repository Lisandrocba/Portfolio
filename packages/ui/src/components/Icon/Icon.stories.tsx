import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '../Text/Text.tsx'
import { iconNames } from '../../icons/index.ts'
import { Icon } from './Icon.tsx'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          'Iconos SVG exportados de Figma. Heredan el color del texto (`currentColor`). ' +
          'Sin `label` son decorativos (`aria-hidden`); con `label` exponen `role="img"` y `aria-label`.',
      },
    },
  },
  args: {
    name: 'arrow-up-right',
  },
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: { type: 'number', min: 8, max: 64 } },
    label: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ color: 'var(--color-text-primary)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 24 }}>
      {iconNames.map((name) => (
        <div key={name} style={{ display: 'grid', justifyItems: 'center', gap: 8 }}>
          <Icon name={name} />
          <Text variant="label" size="xs" tone="secondary">{name}</Text>
        </div>
      ))}
    </div>
  ),
}

/** Tamaños de Figma: 15, 17, 24 y 42 px. El trazo conserva su grosor original. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Icon name="arrow-up-right" size={15} />
      <Icon name="arrow-up-right" size={17} />
      <Icon name="arrow-up-right" size={24} />
      <Icon name="arrow-up-right" size={42} style={{ color: 'var(--color-accent)' }} />
    </div>
  ),
}

/** Decorativo: acompaña a un texto que ya transmite el significado. */
export const Decorative: Story = {
  render: () => (
    <Text as="span" variant="label" size="xs" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      Volver arriba <Icon name="arrow-up" />
    </Text>
  ),
}

/** Accesible: único contenido de un enlace, necesita `label`. */
export const Accessible: Story = {
  render: () => (
    <a href="https://www.linkedin.com/in/lisandrocordoba" style={{ color: 'inherit' }}>
      <Icon name="linkedin" label="LinkedIn de Lisandro Córdoba" />
    </a>
  ),
}
