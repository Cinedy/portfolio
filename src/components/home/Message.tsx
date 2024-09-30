import styles from "./message.module.css"

export default function Message() {
    return (
      <div className={styles.container}>
        <p className={styles.message}>Hi, I am Silje, and I am an aspiring software developer! </p>
        <div className={styles.flik}></div>
      </div>
    );
  }