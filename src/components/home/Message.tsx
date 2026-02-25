import styles from "./message.module.css"

export default function Message() {
    return (
      <div className={styles.container}>
        <p className={styles.userName}>Silje Melling Strandkleiv</p>
        <p className={styles.message}>Hello, and welcome to my portfolio website. </p>
        <br></br>
        <br></br>
        <p className={styles.message}>My name is Silje, and I am an aspiring software developer.</p>
        <div className={styles.flik}></div>
      </div>
    );
  }