import { useState } from 'react'
import type { Job, JobCategory } from '../data/jobs.ts'

export type JobFilter = 'all' | JobCategory

/** Filtro de "Selección de empleos": "Todos" o una categoría (Front / Full stack). */
export function useJobFilter(jobs: Job[]) {
  const [filter, setFilter] = useState<JobFilter>('all')
  const visibleJobs = filter === 'all' ? jobs : jobs.filter((job) => job.category === filter)

  return { filter, setFilter, visibleJobs }
}
