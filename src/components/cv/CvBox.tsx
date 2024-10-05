import { ReactNode } from "react";
import styles from "./cvbox.module.css"

interface IProps {
    title: string;
    children: ReactNode;
}

export default function CvBox(props: IProps) {
    return (
      <div className={styles.container}>
        <div className={styles.headerContainer}><h2>{props.title}</h2></div>
        {props.children}
      </div>
    );
  }