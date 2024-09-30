
import styles from "./SocialButtons.module.css"

export default function SocialButtons() {
    return (
      <div className={styles.container}>
        <div className={`${styles.button} ${styles.linkedin}`}><a></a></div>
        <div className={`${styles.button} ${styles.instagram}`}><a></a></div>
        <div className={`${styles.button} ${styles.github}`}><a></a></div>
      </div>
    );
  }