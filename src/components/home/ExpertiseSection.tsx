import styles from "./expertisesection.module.css"

const cards = [
  {
    title: "AI Strategy",
    description: "Translating AI capabilities into real organizational outcomes — from ideation to responsible deployment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 1 0 5 5"/>
        <circle cx="12" cy="7" r="5"/>
        <path d="M2 22c0-5.523 4.477-10 10-10s10 4.477 10 10"/>
        <path d="M17 7h5M19 5v4"/>
      </svg>
    ),
  },
  {
    title: "Digital Transformation",
    description: "Guiding organizations through technology-driven change with a focus on people, process, and measurable impact.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 10l3 3 4-4 3 3"/>
      </svg>
    ),
  },
  {
    title: "Technology Advisory",
    description: "Providing hands-on guidance on modern tech stacks, AI tools, and digitalization initiatives for complex industries.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
    ),
  },
]

export default function ExpertiseSection() {
  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>What I do</p>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.iconWrap}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
