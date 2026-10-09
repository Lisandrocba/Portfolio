import { Icon } from '@portfolio/ui'
import { profile, sectionIds } from '../data/profile.ts'
import styles from './HomeFooter.module.css'

/** Figma: "Contacto y cierre › Cierre" — firma, créditos y volver arriba. */
export function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.signature}>{`{ / } ${profile.name}`}</p>
        <p className={styles.credits}>© 2026 · Diseñado con intención. Construido con código.</p>
        <a href={`#${sectionIds.top}`} className={styles.backToTop}>
          Volver arriba
          <Icon name="arrow-up" />
        </a>
      </div>
    </footer>
  )
}
