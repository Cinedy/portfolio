import { projects } from '@/data/projects';
import ProjectCard from '@/components/portfolio/ProjectCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Portfolio — Silje Melling Strandkleiv',
};

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <p className={styles.label}>Work</p>
        <h1 className={styles.heading}>All Projects</h1>
        <div className={styles.headingAccent} />
        <p className={styles.subheading}>
          A selection of projects spanning AI development, automation, advisory work, and web development.
        </p>
      </div>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            status={project.status}
          />
        ))}
      </div>
    </main>
  );
}
