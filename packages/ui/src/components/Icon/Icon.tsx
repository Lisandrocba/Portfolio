import type { ComponentPropsWithoutRef } from 'react'
import { icons, type IconName } from '../../icons/index.ts'
import styles from './Icon.module.css'

export type IconProps = Omit<ComponentPropsWithoutRef<'span'>, 'children'> & {
  /** Icono exportado de Figma. */
  name: IconName
  /** Lado en px. Por defecto, el tamaño original del icono en Figma. */
  size?: number
  /** Descripción accesible. Sin `label` el icono es decorativo (`aria-hidden`). */
  label?: string
}

/** Icono SVG original de Figma. Hereda el color del texto (`currentColor`). */
export function Icon({ name, size, label, className, style, ...rest }: IconProps) {
  const icon = icons[name]
  const side = size ?? icon.size
  const a11y = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true }

  return (
    <span
      {...rest}
      {...a11y}
      className={className ? `${styles.icon} ${className}` : styles.icon}
      style={{ width: side, height: side, ...style }}
      // SVG locales del paquete (no provienen de input del usuario).
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  )
}
