import { Chip, Text, Title } from '@portfolio/ui'
import styles from './ExperiencesIntroSection.module.css'

/** Figma: "Presentación de empleos" — referencia de página, título y nota de contenido. */
export function ExperiencesIntroSection() {
  return (
    <section className={styles.section} aria-labelledby="experiences-title">
      {/* Figma: "04 / EXPERIENCIA" en mobile y "04 EXPERIENCIA" en desktop. */}
      <Text variant="label" size="sm" tone="secondary" className={styles.eyebrow}>
        04 <span className={styles.slash}>/ </span>EXPERIENCIA
      </Text>
      <div className={styles.heading}>
        <Title level={1} size="2xl" id="experiences-title" className={styles.title}>
          Cada etapa,<br className={styles.mobileBreak} /> un aprendizaje.
        </Title>
        <div className={styles.note}>
          <Chip variant="accent">EXPERIENCIA PROFESIONAL</Chip>
          <Text size="md" tone="secondary">
            Aplicaciones web de punta a punta, en equipos de producto y como freelance.
          </Text>
        </div>
      </div>
    </section>
  )
}
