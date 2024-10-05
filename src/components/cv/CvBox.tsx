import styles from "./cvbox.module.css"

interface IProps {
    title: string;
    content: string;
}

export default function CvBox(props: IProps) {
    return (
      <div className={styles.container}>
        <div className={styles.headerContainer}><h2>{props.title}</h2></div>
        <p className={styles.message}>{props.content}</p>
      </div>
    );
  }