import type { HTMLAttributes } from 'react'
import styles from './Title.module.css'

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  /** Nivel semántico: define la etiqueta `h1`–`h6`. No afecta el tamaño. */
  level: 1 | 2 | 3 | 4 | 5 | 6
  /**
   * Tamaño visual, independiente del nivel.
   * sm = 23px · md = 26px · lg = 23→32px · xl = 30→44px · 2xl = 36→60px · 3xl = 36→76px · display = 52→120px (peso 500).
   * Los rangos son fluidos entre 390 y 1440 px de ancho.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'display'
}

/** Título en IBM Plex Mono con la escala de Figma. El nivel semántico y el tamaño se eligen por separado. */
export function Title({ level, size = 'xl', className, ...rest }: TitleProps) {
  const Tag = `h${level}` as const
  const classes = [styles.title, styles[`size-${size}`], className]
    .filter(Boolean)
    .join(' ')

  return <Tag {...rest} className={classes} />
}
