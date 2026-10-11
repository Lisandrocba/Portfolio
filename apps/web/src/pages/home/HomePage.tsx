import { educationHighlights, workHighlights } from './data/highlights.ts'
import { sectionIds } from './data/profile.ts'
import { AboutSection } from './components/AboutSection.tsx'
import { ContactSection } from './components/ContactSection.tsx'
import { HeroSection } from './components/HeroSection.tsx'
import { HighlightsSection } from './components/HighlightsSection.tsx'
import { HomeFooter } from './components/HomeFooter.tsx'
import { HomeHeader } from './components/HomeHeader.tsx'
import { StackSection } from './components/StackSection.tsx'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <HomeHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <StackSection />
        <HighlightsSection
          id={sectionIds.work}
          eyebrow="04 / EXPERIENCIA"
          title="Últimos trabajos."
          description="Resumen de trayectoria."
          listTitle="Trabajos"
          items={workHighlights}
          moreHref={`${import.meta.env.BASE_URL}experiences`}
        />
        <HighlightsSection
          id={sectionIds.education}
          eyebrow="05 / FORMACIÓN"
          title="Últimos estudios."
          description="Resumen de formación reciente."
          listTitle="Estudios"
          items={educationHighlights}
          moreHref={`${import.meta.env.BASE_URL}education`}
        />
        <ContactSection />
      </main>
      <HomeFooter />
    </div>
  )
}
