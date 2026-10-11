import { PageIntroSection } from '../../components/PageIntroSection.tsx'
import { SubpageFooter } from '../../components/SubpageFooter.tsx'
import { SubpageHeader } from '../../components/SubpageHeader.tsx'
import { EducationListSection } from './components/EducationListSection.tsx'

export function EducationPage() {
  return (
    <>
      <title>Estudios y cursos · Lisandro Córdoba</title>
      <SubpageHeader />
      <main>
        <PageIntroSection
          number="05"
          label="FORMACIÓN"
          titleLines={['Estudios', 'y cursos.']}
          tag="FORMACIÓN ACADÉMICA"
          note="Educación formal y certificaciones del CV. Cursos del más reciente al más antiguo."
        />
        <EducationListSection />
      </main>
      <SubpageFooter edition="FORMACIÓN / 2026" />
    </>
  )
}
