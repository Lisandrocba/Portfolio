import { PageIntroSection } from '../../components/PageIntroSection.tsx'
import { SubpageFooter } from '../../components/SubpageFooter.tsx'
import { SubpageHeader } from '../../components/SubpageHeader.tsx'
import { ExperiencesListSection } from './components/ExperiencesListSection.tsx'

export function ExperiencesPage() {
  return (
    <>
      <title>Empleos · Lisandro Córdoba</title>
      <SubpageHeader />
      <main>
        <PageIntroSection
          number="04"
          label="EXPERIENCIA"
          titleLines={['Cada etapa,', 'un aprendizaje.']}
          tag="EXPERIENCIA PROFESIONAL"
          note="Aplicaciones web de punta a punta, en equipos de producto y como freelance."
        />
        <ExperiencesListSection />
      </main>
      <SubpageFooter edition="EMPLEOS / 2026" />
    </>
  )
}
