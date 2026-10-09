import type { Preview } from '@storybook/react-vite'
import '../src/styles.css'

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    // Pinta el fondo del token en el propio árbol de la historia: el análisis de contraste de
    // addon-a11y lo ve desde el primer render (el fondo del addon backgrounds se aplica después).
    (Story) => (
      <div style={{ background: 'var(--color-bg)' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      // Fondo de la página 1 de Figma (--color-bg).
      options: {
        portfolio: { name: 'Portfolio', value: '#2c2c2c' },
      },
    },
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
  initialGlobals: {
    backgrounds: { value: 'portfolio' },
  },
}

export default preview
