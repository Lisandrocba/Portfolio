import type { CSSProperties } from 'react'
import styles from './RevealText.module.css'

type RevealTextProps = {
  text: string
  /** Duración total de la aparición, según la animación "Text · Each character" de Figma. */
  durationMs: number
  className?: string
}

/** Texto que aparece carácter por carácter (opacidad, lineal). El texto completo queda disponible para lectores de pantalla. */
export function RevealText({ text, durationMs, className }: RevealTextProps) {
  const chars = [...text]
  const step = durationMs / chars.length

  return (
    <span className={className}>
      <span className={styles.srOnly}>{text}</span>
      <span aria-hidden="true">
        {chars.map((char, index) => (
          <span
            key={index}
            className={styles.char}
            style={{ '--reveal-delay': `${Math.round(index * step)}ms`, '--reveal-step': `${Math.round(step)}ms` } as CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  )
}
