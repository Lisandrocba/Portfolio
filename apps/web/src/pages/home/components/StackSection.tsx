import { stackAreas } from '../data/stack.ts'
import { sectionIds } from '../data/profile.ts'
import { SectionHeader } from './SectionHeader.tsx'
import { StackArea } from './StackArea.tsx'
import styles from './StackSection.module.css'

/** Figma: "Tecnologías" — encabezado y áreas de desarrollo. */
export function StackSection() {
  return (
    <section id={sectionIds.stack} className={styles.stack} aria-labelledby="stack-title">
      <SectionHeader
        eyebrow="03 / Stack"
        title="Un stack conectado."
        titleId="stack-title"
        description="Herramientas y prácticas para construir aplicaciones web de punta a punta."
      />
      <div className={styles.areas}>
        {stackAreas.map((area) => (
          <StackArea key={area.title} area={area} />
        ))}
      </div>
    </section>
  )
}
