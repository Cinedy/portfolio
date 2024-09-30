
import SocialButtons from "@/components/header/SocialButtons";
import Menu from "@/components/header/Menu";
import styles from "./header.module.css";

export default function Header() {
    return (
      <header className={styles.header}>
        <SocialButtons />
        <Menu />
      </header>
    );
  }