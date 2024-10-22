import styles from "./page.module.css"
import Message from "@/components/home/Message";
import Portrait from "@/components/home/Portrait";
import ContactButton from "@/components/home/ContactButton";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>
        <Message/>
        <ContactButton/>
      </div>
      <Portrait/> 
    </div>
  );
}
