'use client'
import Link from "next/link";
import styles from "./menu.module.css";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();
    
    return (
      <nav className={styles.container}>
        <Link href="/" className={`${styles.menuButton} ${pathname == "/" ? styles.active : ""}`}>Hjem</Link>
        <Link href="/cv" className={`${styles.menuButton} ${pathname == "/cv" ? styles.active : ""}`}>CV</Link>
        <Link href="/portfolio" className={`${styles.menuButton} ${pathname == "/portfolio" ? styles.active : ""}`}>Portefølje</Link>
        <Link href="/contact" className={`${styles.menuButton} ${pathname == "/contact" ? styles.active : ""}`}>Kontakt meg</Link>
      </nav>
    );
  }