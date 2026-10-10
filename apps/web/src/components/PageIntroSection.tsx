import { Fragment, useId } from 'react'
import { Chip, Text, Title } from '@portfolio/ui'
import styles from './PageIntroSection.module.css'

type PageIntroSectionProps = {
  /** Número de la referencia de página, p. ej. "04". */
  number: string
  /** Nombre de la referencia de página, p. ej. "EXPERIENCIA". */
  label: string
  /** Líneas del título: en mobile se cortan en líneas separadas, en desktop van en una sola. */
  titleLines: readonly string[]
  /** Texto de la etiqueta de la nota, p. ej. "EXPERIENCIA PROFESIONAL". */
  tag: string
  note: string
}

/** Figma: "Presentación de empleos" y "Presentación de formación" — referencia de página, título y nota de contenido. */
export function PageIntroSection({ number, label, titleLines, tag, note }: PageIntroSectionProps) {
  const titleId = useId()

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      {/* Figma: "04 / EXPERIENCIA" en mobile y "04 EXPERIENCIA" en desktop. */}
      <Text variant="label" size="sm" tone="secondary" className={styles.eyebrow}>
        {number} <span className={styles.slash}>/ </span>{label}
      </Text>
      <div className={styles.heading}>
        <Title level={1} size="2xl" id={titleId} className={styles.title}>
          {titleLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <><br className={styles.mobileBreak} />{' '}</>}
              {line}
            </Fragment>
          ))}
        </Title>
        <div className={styles.note}>
          <Chip variant="accent">{tag}</Chip>
          <Text size="md" tone="secondary">{note}</Text>
        </div>
      </div>
    </section>
  )
}
