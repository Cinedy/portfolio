
import Menu from "@/components/header/Menu";
import styles from "./header.module.css";

export default function Header() {
    return (
      <header className={styles.header}>
        <a href="#home" className={styles.logo}>
          silje<span className={styles.logoDev}>.dev</span>
        </a>
        <Menu />
      </header>
    );
  }