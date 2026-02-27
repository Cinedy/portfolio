import { ProjectStatus, ProjectTag } from '@/data/projects';
import styles from './projectcard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTag[];
  status: ProjectStatus;
}

const statusClassMap: Record<ProjectStatus, string> = {
  'Live': styles.badgeLive,
  'In Progress': styles.badgeInProgress,
  'Coming Soon': styles.badgeComingSoon,
};

export default function ProjectCard({ title, description, tags, status }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        <span className={`${styles.badge} ${statusClassMap[status]}`}>{status}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <span
            key={tag.label}
            className={tag.variant === 'tool' ? styles.pillTool : styles.pill}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </article>
  );
}
