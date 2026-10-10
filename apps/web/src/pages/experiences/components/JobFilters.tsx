import { Button, Text } from '@portfolio/ui'
import { categoryLabels } from '../data/jobs.ts'
import type { JobFilter } from '../hooks/useJobFilter.ts'
import styles from './JobFilters.module.css'

const options: { value: JobFilter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'front', label: categoryLabels.front },
  { value: 'fullstack', label: categoryLabels.fullstack },
]

type JobFiltersProps = {
  filter: JobFilter
  onChange: (filter: JobFilter) => void
}

/** Figma: "Filtros" — etiqueta y opciones ("Filtro activo" = `pressed`). */
export function JobFilters({ filter, onChange }: JobFiltersProps) {
  return (
    <div className={styles.filters} role="group" aria-labelledby="job-filters-label">
      <Text variant="label" size="xs" tone="secondary" id="job-filters-label">FILTRO</Text>
      <div className={styles.options}>
        {options.map((option) => (
          <Button
            key={option.value}
            pressed={filter === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
