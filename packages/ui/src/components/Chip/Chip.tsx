import type { HTMLAttributes } from 'react'
import styles from './Chip.module.css'

export type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  /**
   * `default`: borde sutil y texto secundario (categorías, tecnologías).
   * `accent`: borde y texto de acento (p. ej. "FORMACIÓN ACADÉMICA").
   */
  variant?: 'default' | 'accent'
}

/** Etiqueta no interactiva en forma de píldora (Figma: "Etiqueta", "Categoría"). */
export function Chip({ variant = 'default', className, ...rest }: ChipProps) {
  const classes = [styles.chip, styles[variant], className].filter(Boolean).join(' ')
  return <span {...rest} className={classes} />
}
