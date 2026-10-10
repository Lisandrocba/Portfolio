import { profile } from '../pages/home/data/profile.ts'
import styles from './SubpageFooter.module.css'

type SubpageFooterProps = {
  /** Texto de edición de la página, p. ej. "EMPLEOS / 2026". */
  edition: string
}

/** Figma: "Cierre" de Empleos y Formación — firma, créditos y edición. */
export function SubpageFooter({ edition }: SubpageFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.signature}>{`{ / } ${profile.name}`}</p>
        <p className={styles.credits}>© 2026 · Diseñado con intención. Construido con código.</p>
        <p className={styles.edition}>{edition}</p>
      </div>
    </footer>
  )
}
