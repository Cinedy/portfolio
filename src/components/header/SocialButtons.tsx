
import styles from "./SocialButtons.module.css"

export default function SocialButtons() {
    return (
      <div className={styles.container}>
        <a href="https://www.linkedin.com/in/silje-melling/"><div className={`${styles.button} ${styles.linkedin}`}></div></a>
        <a href="https://www.instagram.com/silje.melling/"><div className={`${styles.button} ${styles.instagram}`}></div></a>
        <a href="https://github.com/Cinedy"><div className={`${styles.button} ${styles.github}`}></div></a>
      </div>
    );
  }