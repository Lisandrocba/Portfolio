import { Button } from '@portfolio/ui'
import { navLinks, profile, sectionIds } from '../data/profile.ts'
import styles from './HomeHeader.module.css'

/** Figma: "Inicio › Navegación" (desktop) y "Navegación" + "Enlaces" (mobile). */
export function HomeHeader() {
  return (
    <header id={sectionIds.top} className={styles.header}>
      <div className={styles.bar}>
        <a href={`#${sectionIds.top}`} className={styles.identity}>
          <span className={styles.symbol} aria-hidden="true">{'{ / }'}</span>
          <span className={styles.name}>{profile.name}</span>
        </a>
        <nav className={styles.nav} aria-label="Secciones">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={`#${sectionIds.contact}`} icon="arrow-up-right" className={styles.cta}>
          Hablemos
        </Button>
      </div>
    </header>
  )
}
