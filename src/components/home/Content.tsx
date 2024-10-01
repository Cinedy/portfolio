
import styles from "./content.module.css"
import Message from "@/components/home/Message";
import Portrait from "@/components/home/Portrait";
import ContactButton from "./ContactButton";

export default function Content() {
    return (
      <div className={styles.container}>
        <div className={styles.messageContainer}>
          <Message />
          <ContactButton/>
        </div>
        <Portrait />
      </div>
    );
  }