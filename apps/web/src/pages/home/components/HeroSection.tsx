import { Button, Text, Title } from '@portfolio/ui'
import { profile, sectionIds } from '../data/profile.ts'
import { RevealText } from './RevealText.tsx'
import styles from './HeroSection.module.css'

/** Figma: "Inicio › Presentación" + "Pie de presentación". */
export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <div className={styles.presentation}>
          <div className={styles.intro}>
            <p className={styles.greeting}>
              <RevealText text="Hola, soy Lisandro_" durationMs={900} />
            </p>
            <Text size="3xl" className={styles.pitch}>
              Desarrollador Full Stack con más de 4 años creando aplicaciones web de punta a punta.
            </Text>
            <Text variant="label" size="sm" tone="secondary" className={styles.focus}>
              React · Node.js · TypeScript
              <br />
              Equipos de producto y freelance.
              <br />
              Cosquín, Córdoba, Argentina.
            </Text>
          </div>

          <div className={styles.specialty}>
            <div className={styles.heading}>
              <Text variant="label" size="xs" tone="secondary" className={styles.discipline}>
                DESARROLLO WEB / DE PRINCIPIO A FIN
              </Text>
              <Title level={1} size="display" id="hero-title">
                Full-stack
                <br />
                Developer
              </Title>
            </div>
            <div className={styles.actions}>
              <Button variant="primary" icon="arrow-down" href={`#${sectionIds.about}`} className={styles.primary}>
                Explorar perfil
              </Button>
              <div className={styles.social}>
                <Button href={profile.github.href} icon="github" target="_blank" rel="noreferrer">
                  GitHub
                </Button>
                <Button href={profile.linkedin.href} icon="linkedin" target="_blank" rel="noreferrer">
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.mode}>
            <span className={styles.dot} aria-hidden="true" />
            FRONTEND + BACKEND
          </p>
          <Text variant="label" size="xs" tone="secondary" className={styles.edition}>
            PORTAFOLIO / 2026
          </Text>
        </div>
      </div>
    </section>
  )
}
