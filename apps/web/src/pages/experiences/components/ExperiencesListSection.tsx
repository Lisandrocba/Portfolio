import { FilterGroup } from '../../../components/FilterGroup.tsx'
import type { FilterOption } from '../../../components/FilterGroup.tsx'
import { categoryLabels, jobs } from '../data/jobs.ts'
import { useJobFilter } from '../hooks/useJobFilter.ts'
import type { JobFilter } from '../hooks/useJobFilter.ts'
import { JobItem } from './JobItem.tsx'
import styles from './ExperiencesListSection.module.css'

const filterOptions: FilterOption<JobFilter>[] = [
  { value: 'all', label: 'Todos' },
  { value: 'front', label: categoryLabels.front },
  { value: 'fullstack', label: categoryLabels.fullstack },
]

/** Figma: "Selección de empleos" — filtros y etapas. */
export function ExperiencesListSection() {
  const { filter, setFilter, visibleJobs } = useJobFilter(jobs)

  return (
    <section className={styles.section} aria-label="Empleos">
      <FilterGroup options={filterOptions} value={filter} onChange={setFilter} />
      <ul className={styles.list}>
        {visibleJobs.map((job) => (
          <JobItem key={`${job.organization}-${job.period}`} job={job} />
        ))}
      </ul>
    </section>
  )
}
