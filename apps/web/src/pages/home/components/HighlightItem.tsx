import { Text, Title } from '@portfolio/ui'
import type { Highlight } from '../data/highlights.ts'
import styles from './HighlightItem.module.css'

type HighlightItemProps = {
  item: Highlight
}

/** Figma: "Trabajo" / "Estudio" — fecha y modalidad, título, organización y, en trabajos, resumen y stack. */
export function HighlightItem({ item }: HighlightItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.meta}>
        <Text variant="label" size="xs" tone="secondary" as="span">{item.period}</Text>
        <Text variant="label" size="2xs" tone="accent" as="span">{item.tag}</Text>
      </div>
      <Title level={4} size="sm">{item.title}</Title>
      <Text size="md">{item.organization}</Text>
      {item.summary && (
        <Text size="lg" tone="secondary" className={styles.summary}>{item.summary}</Text>
      )}
      {item.stack && (
        <Text variant="label" size="2xs" tone="secondary" className={styles.stack}>{item.stack}</Text>
      )}
    </li>
  )
}
