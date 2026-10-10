import { jobs } from '../data/jobs.ts'
import { useJobFilter } from '../hooks/useJobFilter.ts'
import { JobFilters } from './JobFilters.tsx'
import { JobItem } from './JobItem.tsx'
import styles from './ExperiencesListSection.module.css'

/** Figma: "Selección de empleos" — filtros y etapas. */
export function ExperiencesListSection() {
  const { filter, setFilter, visibleJobs } = useJobFilter(jobs)

  return (
    <section className={styles.section} aria-label="Empleos">
      <JobFilters filter={filter} onChange={setFilter} />
      <ul className={styles.list}>
        {visibleJobs.map((job) => (
          <JobItem key={`${job.organization}-${job.period}`} job={job} />
        ))}
      </ul>
    </section>
  )
}
