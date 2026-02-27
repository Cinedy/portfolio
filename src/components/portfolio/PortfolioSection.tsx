import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './portfoliosection.module.css';

export default function PortfolioSection() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="portfolio" className={styles.section}>
      <p className={styles.label}>Projects</p>
      <h2 className={styles.heading}>What I&apos;ve built</h2>
      <div className={styles.headingAccent} />
      <div className={styles.grid}>
        {featured.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            status={project.status}
          />
        ))}
      </div>
      <div className={styles.cta}>
        <Link href="/portfolio">
          <button className={styles.secondaryBtn}>View all projects</button>
        </Link>
      </div>
    </section>
  );
}
