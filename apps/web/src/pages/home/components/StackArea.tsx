import { Chip, Icon, Text, Title } from '@portfolio/ui'
import type { StackArea as StackAreaData } from '../data/stack.ts'
import styles from './StackArea.module.css'

type StackAreaProps = {
  area: StackAreaData
}

/** Figma: "Área técnica" — título con icono, descripción, bloques de etiquetas y foco opcional. */
export function StackArea({ area }: StackAreaProps) {
  return (
    <article className={styles.area}>
      <div className={styles.heading}>
        <Title level={3} size="md">{area.title}</Title>
        <Icon name={area.icon} className={styles.icon} />
      </div>
      <Text size="lg" tone="secondary" className={styles.description}>{area.description}</Text>
      <div className={styles.groups}>
        {area.groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <Text variant="label" size="sm" weight="semibold">{group.label}</Text>
            <ul className={styles.chips}>
              {group.items.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {area.focus && (
        <Text variant="label" size="2xs" tone="secondary" className={styles.focus}>{area.focus}</Text>
      )}
    </article>
  )
}
