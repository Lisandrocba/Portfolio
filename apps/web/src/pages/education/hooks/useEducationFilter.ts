import { useState } from 'react'
import type { EducationCategory, EducationGroup } from '../data/education.ts'

export type EducationFilter = 'all' | EducationCategory

/** Filtro de "Selección de formación": "Todos", "Estudios" o "Cursos". */
export function useEducationFilter(groups: EducationGroup[]) {
  const [filter, setFilter] = useState<EducationFilter>('all')
  const visibleGroups = filter === 'all' ? groups : groups.filter((group) => group.category === filter)

  return { filter, setFilter, visibleGroups }
}
