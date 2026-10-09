import { Button, Icon, Text, Title } from '@portfolio/ui'
import { profile, sectionIds } from '../data/profile.ts'
import { RevealText } from './RevealText.tsx'
import styles from './ContactSection.module.css'

/** Figma: "Contacto y cierre › Contacto" — invitación, correo y redes. */
export function ContactSection() {
  return (
    <section id={sectionIds.contact} className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.content}>
        <Text variant="label" size="sm" tone="secondary">05 / CONTACTO</Text>

        <div className={styles.invitation}>
          <Title level={2} size="3xl" id="contact-title" className={styles.title}>
            ¿Una idea en mente?
            <br />
            Hagámosla realidad.
          </Title>
          <span className={styles.symbol} aria-hidden="true">
            <Icon name="arrow-up-right" />
          </span>
        </div>

        <div className={styles.channels}>
          <div className={styles.mail}>
            <Text size="xl" tone="secondary" className={styles.message}>
              Estoy abierto a nuevas oportunidades donde pueda aportar mi experiencia en desarrollo frontend, seguir
              creciendo hacia el full stack y construir productos digitales de calidad junto a un gran equipo.
            </Text>
            <a href={`mailto:${profile.email}`} className={styles.email}>
              <RevealText text={`${profile.email} ↗`} durationMs={855} />
            </a>
            <ul className={styles.directory}>
              <li>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <a href={profile.linkedin.href} target="_blank" rel="noreferrer">{profile.linkedin.label}</a>
              </li>
              <li>
                <a href={profile.github.href} target="_blank" rel="noreferrer">{profile.github.label}</a>
              </li>
            </ul>
          </div>
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
    </section>
  )
}
