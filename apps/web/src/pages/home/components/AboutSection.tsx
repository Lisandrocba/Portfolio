import { Button, Text, Title } from '@portfolio/ui'
import { profile, sectionIds } from '../data/profile.ts'
import { DevelopmentDiagram } from './DevelopmentDiagram.tsx'
import styles from './AboutSection.module.css'

/** Figma: "Sobre mí › Perfil" — identidad técnica y biografía. */
export function AboutSection() {
  return (
    <section id={sectionIds.about} className={styles.about} aria-labelledby="about-title">
      <div className={styles.profile}>
        <div className={styles.identity}>
          <Text variant="label" size="sm" tone="secondary" className={styles.eyebrow}>02 / SOBRE MÍ</Text>
          <DevelopmentDiagram />
        </div>

        <div className={styles.bio}>
          <Title level={2} size="xl" id="about-title">
            El detalle importa.
            <br />
            El conjunto también.
          </Title>
          <Text size="3xl" className={styles.intro}>
            Soy Lisandro Córdoba, desarrollador full stack con más de 4 años construyendo aplicaciones web punta a
            punta, en equipos de producto y freelance.
          </Text>
          <Text size="xl" tone="secondary">
            Trabajo con React, TypeScript y Next.js, Design Systems, librerías de componentes y testing con Jest y
            React Testing Library. Desarrollo APIs REST con Node.js y Express y modelo datos con PostgreSQL, MongoDB y
            Prisma. Llevo proyectos freelance desde el relevamiento hasta el despliegue y la comunicación con
            clientes, con un flujo asistido por IA: Claude Code, GitHub Copilot CLI y MCP.
          </Text>
          <div className={styles.actions}>
            <Button href={profile.cvHref} icon="download" download>
              Ver CV
            </Button>
            <Text variant="label" size="2xs" tone="secondary" className={styles.note}>
              Cosquín, Córdoba, Argentina
              <br />
              Español · Bilingüe o nativo
              <br />
              Inglés · Básico profesional
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}
