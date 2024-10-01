import styles from "./portrait.module.css"
import Image from 'next/image'

export default function Portrait() {
    return (
      <div className={styles.container}>
        <Image
            src="/Headshot.jpg"
            width={1358/3.3}
            height={1683/3.3}
            alt="picture"
        />
        <div className={styles.gradient}></div>
      </div>
    );
  }