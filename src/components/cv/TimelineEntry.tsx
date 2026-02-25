import styles from "./timelineentry.module.css"

interface IProps {
    year: string;
    role: string;
    company?: string;
    isLast?: boolean;
}

export default function TimelineEntry({ year, role, company, isLast }: IProps) {
    return (
        <div className={styles.entry}>
            <div className={styles.yearCol}>
                <span className={styles.year}>{year}</span>
                {!isLast && <div className={styles.line} />}
            </div>
            <div className={styles.content}>
                <p className={styles.role}>{role}</p>
                {company && <p className={styles.company}>{company}</p>}
            </div>
        </div>
    )
}
