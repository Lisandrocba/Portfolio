import { Chip, Text, Title } from '@portfolio/ui'
import { categoryLabels } from '../data/education.ts'
import type { EducationCategory, EducationEntry } from '../data/education.ts'
import styles from './EducationItem.module.css'

type EducationItemProps = {
  entry: EducationEntry
  category: EducationCategory
}

/** Figma: "Formación" — separador, referencia (fecha y categoría) e información de la formación. */
export function EducationItem({ entry, category }: EducationItemProps) {
  return (
    <li className={styles.item}>
      <article className={styles.content}>
        <div className={styles.reference}>
          <Text variant="label" size="xs" tone="secondary" as="span">{entry.period}</Text>
          <Chip>{categoryLabels[category]}</Chip>
        </div>
        <div className={styles.info}>
          <Title level={3} size="lg" className={styles.title}>{entry.title}</Title>
          <Text size="md" className={styles.institution}>{entry.institution}</Text>
        </div>
      </article>
    </li>
  )
}
