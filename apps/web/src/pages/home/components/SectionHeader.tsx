import { Text, Title } from '@portfolio/ui'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  titleId: string
  description: string
}

/** Figma: "Encabezado de sección" — referencia, título y descripción (Stack, Trabajos, Estudios). */
export function SectionHeader({ eyebrow, title, titleId, description }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Text variant="label" size="sm" tone="secondary">{eyebrow}</Text>
        <Title level={2} size="xl" id={titleId}>{title}</Title>
      </div>
      <Text size="md" tone="secondary" className={styles.description}>{description}</Text>
    </header>
  )
}
