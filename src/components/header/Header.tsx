import Menu from "@/components/header/Menu";
import LogoLink from "@/components/header/LogoLink";
import styles from "./header.module.css";

export default function Header() {
    return (
      <header className={styles.header}>
        <LogoLink />
        <Menu />
      </header>
    );
  }