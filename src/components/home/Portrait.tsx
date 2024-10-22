import styles from "./portrait.module.css"
import Image from 'next/image'

export default function Portrait() {
    return (
      <div className={styles.container}>
        <Image
            src="/Headshot.jpg"
            width={412.5}
            height={510}
            alt="picture"
        />
        <div className={styles.gradient}></div>
      </div>
    );
  }