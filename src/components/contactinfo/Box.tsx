import { ReactNode } from "react";
import styles from "./box.module.css"

interface IProps {
    title: string;
    children: ReactNode;
  }
  
export default function InfoBox(props: IProps) {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    {props.children}
                </div>
            </div>
        </div>
    );
    
}