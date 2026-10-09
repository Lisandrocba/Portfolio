import { Button, Title } from '@portfolio/ui'
import type { Highlight } from '../data/highlights.ts'
import { HighlightItem } from './HighlightItem.tsx'
import { SectionHeader } from './SectionHeader.tsx'
import styles from './HighlightsSection.module.css'

type HighlightsSectionProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  listTitle: string
  items: Highlight[]
  moreHref: string
}

/** Figma: "Experiencia y estudios" — se usa para "Últimos trabajos" y "Últimos estudios". */
export function HighlightsSection({ id, eyebrow, title, description, listTitle, items, moreHref }: HighlightsSectionProps) {
  const titleId = `${id}-title`

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <SectionHeader eyebrow={eyebrow} title={title} titleId={titleId} description={description} />
      <div className={styles.content}>
        <Title level={3} size="md">{listTitle}</Title>
        <div className={styles.entries}>
          <ul className={styles.list}>
            {items.map((item) => (
              <HighlightItem key={item.title} item={item} />
            ))}
          </ul>
          <Button href={moreHref} icon="arrow-up-right" className={styles.more}>
            Ver más
          </Button>
        </div>
      </div>
    </section>
  )
}
