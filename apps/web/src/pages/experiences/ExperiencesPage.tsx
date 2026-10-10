import { SubpageFooter } from '../../components/SubpageFooter.tsx'
import { SubpageHeader } from '../../components/SubpageHeader.tsx'
import { ExperiencesIntroSection } from './components/ExperiencesIntroSection.tsx'
import { ExperiencesListSection } from './components/ExperiencesListSection.tsx'

export function ExperiencesPage() {
  return (
    <>
      <title>Empleos · Lisandro Córdoba</title>
      <SubpageHeader />
      <main>
        <ExperiencesIntroSection />
        <ExperiencesListSection />
      </main>
      <SubpageFooter edition="EMPLEOS / 2026" />
    </>
  )
}
