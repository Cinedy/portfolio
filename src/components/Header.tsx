
import SocialButtons from "@/components/SocialButtons";
import Menu from "@/components/Menu";
import styles from "./header.module.css";

export default function Header() {
    return (
      <header className={styles.header}>
        <SocialButtons />
        <Menu />
      </header>
    );
  }