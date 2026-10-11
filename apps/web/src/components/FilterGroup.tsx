import { useId } from 'react'
import { Button, Text } from '@portfolio/ui'
import styles from './FilterGroup.module.css'

export type FilterOption<T extends string> = {
  value: T
  label: string
}

type FilterGroupProps<T extends string> = {
  options: readonly FilterOption<T>[]
  value: T
  onChange: (value: T) => void
}

/** Figma: "Filtros" de Empleos y Formación — etiqueta y opciones ("Filtro activo" = `pressed`). */
export function FilterGroup<T extends string>({ options, value, onChange }: FilterGroupProps<T>) {
  const labelId = useId()

  return (
    <div className={styles.filters} role="group" aria-labelledby={labelId}>
      <Text variant="label" size="xs" tone="secondary" id={labelId}>FILTRO</Text>
      <div className={styles.options}>
        {options.map((option) => (
          <Button
            key={option.value}
            pressed={value === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
