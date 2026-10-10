import { Chip, Text, Title } from '@portfolio/ui'
import { categoryLabels } from '../data/jobs.ts'
import type { Job } from '../data/jobs.ts'
import styles from './JobItem.module.css'

type JobItemProps = {
  job: Job
}

/** Figma: "Etapa" — separador, referencia (período, modalidad, categoría) e información del empleo. */
export function JobItem({ job }: JobItemProps) {
  return (
    <li className={styles.item}>
      <article className={styles.content}>
        <div className={styles.reference}>
          <div className={styles.meta}>
            <Text variant="label" size="xs" tone="secondary" as="span">{job.period}</Text>
            <Text variant="label" size="2xs" tone="accent" as="span" className={styles.modality}>
              {job.modality}
            </Text>
          </div>
          <Chip>{categoryLabels[job.category]}</Chip>
        </div>
        <div className={styles.info}>
          <Title level={2} size="lg" className={styles.role}>{job.role}</Title>
          <Text size="md" className={styles.organization}>
            {job.organization}
            <br />
            {job.location}
          </Text>
          <Text size="xl" tone="secondary" className={styles.summaryShort}>{job.summaryShort}</Text>
          <Text size="xl" tone="secondary" className={styles.summary}>{job.summary}</Text>
          <Text variant="label" size="xs" tone="secondary" className={styles.stack}>{job.stack}</Text>
        </div>
      </article>
    </li>
  )
}
