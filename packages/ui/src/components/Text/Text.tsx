import type { HTMLAttributes } from 'react'
import styles from './Text.module.css'

type TextBaseProps = HTMLAttributes<HTMLElement> & {
  /** Color del texto. */
  tone?: 'primary' | 'secondary' | 'accent'
  /** Etiqueta HTML. `time` admite `dateTime`. */
  as?: 'p' | 'span' | 'div' | 'time'
  /** Solo con `as="time"`: fecha legible por máquina. */
  dateTime?: string
}

export type LabelTextProps = TextBaseProps & {
  /** `label`: IBM Plex Mono, para etiquetas, fechas, metadatos y navegación. */
  variant: 'label'
  /** 2xs = 10px · xs = 11px · sm = 12px · md = 13px. */
  size?: '2xs' | 'xs' | 'sm' | 'md'
  /** `semibold` se usa en los subtítulos de grupo del stack. */
  weight?: 'regular' | 'semibold'
}

export type BodyTextProps = TextBaseProps & {
  /** `body`: Inter, para párrafos y descripciones. */
  variant?: 'body'
  /** md = 13px · lg = 14px · xl = 15px · 2xl = 16px · 3xl = 17px. */
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  weight?: never
}

export type TextProps = LabelTextProps | BodyTextProps

/** Texto de cuerpo (Inter) o de etiqueta (IBM Plex Mono) con la escala tipográfica de Figma. */
export function Text({
  variant = 'body',
  size,
  tone = 'primary',
  weight = 'regular',
  as: Tag = 'p',
  className,
  ...rest
}: TextProps) {
  const resolvedSize = size ?? (variant === 'label' ? 'xs' : 'lg')
  const classes = [
    styles.text,
    styles[variant],
    styles[`size-${resolvedSize}`],
    styles[`tone-${tone}`],
    weight === 'semibold' && styles.semibold,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Tag {...rest} className={classes} />
}
