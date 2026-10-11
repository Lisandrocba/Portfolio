// Formación (textos de Figma: frames "Estudios y cursos" desktop `31:646` y mobile `31:754`).
export type EducationCategory = 'study' | 'course'

export type EducationEntry = {
  period: string
  title: string
  institution: string
}

export type EducationGroup = {
  category: EducationCategory
  title: string
  /** Unidad de la cantidad del encabezado ("01 ESTUDIO", "05 CURSOS"). */
  unit: { singular: string, plural: string }
  entries: EducationEntry[]
}

/** Texto de "Categoría" en cada formación. */
export const categoryLabels: Record<EducationCategory, string> = {
  study: 'Estudio',
  course: 'Curso',
}

export const educationGroups: EducationGroup[] = [
  {
    category: 'study',
    title: 'Educación formal',
    unit: { singular: 'ESTUDIO', plural: 'ESTUDIOS' },
    entries: [
      {
        period: '2017 – 2019',
        title: 'Programador (Técnico en Programación)',
        institution: 'Universidad Tecnológica Nacional – Facultad Regional Córdoba',
      },
    ],
  },
  {
    category: 'course',
    title: 'Cursos y certificaciones',
    unit: { singular: 'CURSO', plural: 'CURSOS' },
    entries: [
      { period: 'oct. 2025', title: 'Curso de Diseño UX/UI', institution: 'UTN Buenos Aires' },
      { period: 'sept. 2022', title: 'Desarrollador Full Stack', institution: 'Coderhouse' },
      { period: 'jun. 2022', title: 'Desarrollador React Native', institution: 'Coderhouse' },
      { period: 'sept. 2021', title: 'Desarrollador Front End', institution: 'Coderhouse' },
      { period: 'jun. 2021', title: 'JavaScript de Cero a Experto', institution: 'Udemy' },
    ],
  },
]
