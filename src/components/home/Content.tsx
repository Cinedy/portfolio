
import styles from "./content.module.css"
import Message from "@/components/home/Message";
import Portrait from "@/components/home/Portrait";

export default function Content() {
    return (
      <div className={styles.container}>
        <Message />
        <Portrait />
      </div>
    );
  }