import { useId } from 'react'
import { Text, Title } from '@portfolio/ui'
import type { EducationGroup } from '../data/education.ts'
import { EducationItem } from './EducationItem.tsx'
import styles from './EducationGroupBlock.module.css'

type EducationGroupBlockProps = {
  group: EducationGroup
}

/** Figma: "Educación formal" y "Cursos y certificaciones" — encabezado con cantidad y lista de formaciones. */
export function EducationGroupBlock({ group }: EducationGroupBlockProps) {
  const titleId = useId()
  const count = group.entries.length
  const unit = count === 1 ? group.unit.singular : group.unit.plural

  return (
    <section className={styles.group} aria-labelledby={titleId}>
      <header className={styles.header}>
        <Title level={2} size="sm" id={titleId} className={styles.title}>{group.title}</Title>
        <Text variant="label" size="2xs" tone="accent">
          {String(count).padStart(2, '0')} {unit}
        </Text>
      </header>
      <ul className={styles.list}>
        {group.entries.map((entry) => (
          <EducationItem key={`${entry.title}-${entry.period}`} entry={entry} category={group.category} />
        ))}
      </ul>
    </section>
  )
}
