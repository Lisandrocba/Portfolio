import { Button } from '@portfolio/ui'
import { profile } from '../pages/home/data/profile.ts'
import styles from './SubpageHeader.module.css'

/** Figma: "Encabezado" de Empleos y Formación — identidad y "Volver al inicio". */
export function SubpageHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <p className={styles.identity}>
          <span className={styles.symbol} aria-hidden="true">{'{ / }'}</span>
          <span className={styles.name}>{profile.name}</span>
        </p>
        <nav aria-label="Principal">
          <Button href={import.meta.env.BASE_URL} icon="arrow-left" iconPosition="start">
            Volver al inicio
          </Button>
        </nav>
      </div>
    </header>
  )
}
