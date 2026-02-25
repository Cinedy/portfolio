import styles from "./herocontent.module.css"

export default function HeroContent() {
    return (
      <div className={styles.container}>
        <p className={styles.greeting}>Hi, I&apos;m</p>
        <h1 className={styles.name}>Silje Melling Strandkleiv</h1>
        <p className={styles.subtitle}> Advisor - Innovation & technology</p>
        <p className={styles.bio}>
          I help organizations navigate the intersection of AI, technology, and people -
          building bridges between strategy and implementation.
        </p>
        <div className={styles.ctas}>
          <a href="#contact"><button className={styles.primaryBtn}>Contact me</button></a>
          <a href="#cv"><button className={styles.secondaryBtn}>View CV</button></a>
        </div>
      </div>
    );
  }
