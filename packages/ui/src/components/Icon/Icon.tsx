import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { icons, type IconName } from '../../icons/index.ts'
import styles from './Icon.module.css'

export type IconProps = Omit<ComponentPropsWithoutRef<'span'>, 'children'> & {
  /** Icono exportado de Figma. */
  name: IconName
  /**
   * Lado en px. Por defecto, el tamaño original del icono en Figma.
   * Sin `size`, un layout puede fijarlo con la variable CSS `--icon-size` (p. ej. por breakpoint).
   */
  size?: number
  /** Descripción accesible. Sin `label` el icono es decorativo (`aria-hidden`). */
  label?: string
}

/** Icono SVG original de Figma. Hereda el color del texto (`currentColor`). */
export function Icon({ name, size, label, className, style, ...rest }: IconProps) {
  const icon = icons[name]
  const sizing: CSSProperties & Record<`--${string}`, string> = size
    ? { '--icon-size': `${size}px` }
    : { '--icon-default-size': `${icon.size}px` }
  const a11y = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true }

  return (
    <span
      {...rest}
      {...a11y}
      className={className ? `${styles.icon} ${className}` : styles.icon}
      style={{ ...sizing, ...style }}
      // SVG locales del paquete (no provienen de input del usuario).
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  )
}
