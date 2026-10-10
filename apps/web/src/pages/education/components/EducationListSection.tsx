import { FilterGroup } from '../../../components/FilterGroup.tsx'
import type { FilterOption } from '../../../components/FilterGroup.tsx'
import { educationGroups } from '../data/education.ts'
import { useEducationFilter } from '../hooks/useEducationFilter.ts'
import type { EducationFilter } from '../hooks/useEducationFilter.ts'
import { EducationGroupBlock } from './EducationGroupBlock.tsx'
import styles from './EducationListSection.module.css'

const filterOptions: FilterOption<EducationFilter>[] = [
  { value: 'all', label: 'Todos' },
  { value: 'study', label: 'Estudios' },
  { value: 'course', label: 'Cursos' },
]

/** Figma: "Selección de formación" — filtros e historial (educación formal y cursos). */
export function EducationListSection() {
  const { filter, setFilter, visibleGroups } = useEducationFilter(educationGroups)

  return (
    <section className={styles.section} aria-label="Formación">
      <FilterGroup options={filterOptions} value={filter} onChange={setFilter} />
      <div className={styles.history}>
        {visibleGroups.map((group) => (
          <EducationGroupBlock key={group.category} group={group} />
        ))}
      </div>
    </section>
  )
}
