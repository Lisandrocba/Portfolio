import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { iconNames } from '../../icons/index.ts'
import { Button } from './Button.tsx'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Acción en forma de píldora de Figma ("Acción", "Filtro", "Volver al inicio"). ' +
          'Hover, active y disabled **no están definidos en Figma**: son estados mínimos con tokens existentes. ' +
          'El focus visible es obligatorio por accesibilidad.',
      },
    },
  },
  args: {
    children: 'Ver CV',
    variant: 'secondary',
    iconPosition: 'end',
    onClick: fn(),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'], table: { defaultValue: { summary: 'secondary' } } },
    icon: { control: 'select', options: [undefined, ...iconNames] },
    iconPosition: { control: 'inline-radio', options: ['start', 'end'], table: { defaultValue: { summary: 'end' } } },
    pressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Figma: "Explorar perfil". */
export const Primary: Story = {
  args: { variant: 'primary', children: 'Explorar perfil', icon: 'arrow-down' },
}

/** Figma: "Ver CV", "Ver más", "Hablemos". */
export const Secondary: Story = {
  args: { children: 'Ver CV', icon: 'download' },
}

/** Figma: "Volver al inicio" lleva el icono antes del texto. */
export const IconAtStart: Story = {
  args: { children: 'Volver al inicio', icon: 'arrow-left', iconPosition: 'start' },
}

export const WithoutIcon: Story = {
  args: { children: 'Hablemos' },
}

/** Con `href` se renderiza como `<a>`. Para enlaces externos agregar `target` y `rel`. */
export const AsLink: Story = {
  args: {
    children: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Lisandrocba',
    target: '_blank',
    rel: 'noreferrer',
  },
}

export const Disabled: Story = {
  args: { children: 'Ver más', icon: 'arrow-up-right', disabled: true },
}

/** Variantes visuales lado a lado. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Button variant="primary" icon="arrow-down">Explorar perfil</Button>
      <Button variant="secondary" icon="arrow-up-right">Hablemos</Button>
      <Button variant="secondary" icon="github">GitHub</Button>
      <Button variant="secondary" icon="linkedin">LinkedIn</Button>
      <Button variant="secondary" disabled>Deshabilitado</Button>
    </div>
  ),
}

/** Figma: "Filtro activo" / "Filtro". `pressed` aplica `aria-pressed` y el estilo de acento. */
export const Filters: Story = {
  render: function FiltersStory() {
    const options = ['Todos', 'Estudios', 'Cursos']
    const [selected, setSelected] = useState(options[0])
    return (
      <div role="group" aria-label="Filtrar formación" style={{ display: 'flex', gap: 12 }}>
        {options.map((option) => (
          <Button key={option} pressed={selected === option} onClick={() => setSelected(option)}>
            {option}
          </Button>
        ))}
      </div>
    )
  },
}
