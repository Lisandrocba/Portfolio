import styles from './DevelopmentDiagram.module.css'

/** Figma: "Diagrama de desarrollo" — dos órbitas, el punto de conexión animado y el símbolo de código. */
export function DevelopmentDiagram() {
  return (
    <div className={styles.diagram}>
      <span className={styles.outerOrbit} aria-hidden="true" />
      <span className={styles.innerOrbit} aria-hidden="true">
        <span className={styles.track}>
          <span className={styles.point} />
        </span>
      </span>
      <span className={styles.code} aria-hidden="true">{'</>'}</span>
      <p className={styles.concept}>DISEÑO ↔ LÓGICA ↔ SISTEMAS</p>
    </div>
  )
}
