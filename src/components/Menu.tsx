'use client'
import Link from "next/link";
import styles from "./menu.module.css";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();
    
    return (
      <nav className={styles.container}>
        <Link href="/" className={`${styles.menuButton} ${router.pathname == "/" ? styles.active : ""}`}>Hjem</Link>
        <Link href="/cv" className={`${styles.menuButton} ${router.pathname == "/cv" ? styles.active : ""}`}>CV</Link>
        <Link href="/portfolio" className={`${styles.menuButton} ${router.pathname == "/portfolio" ? styles.active : ""}`}>Portefølje</Link>
        <Link href="/contact" className={`${styles.menuButton} ${router.pathname == "/contact" ? styles.active : ""}`}>Kontakt meg</Link>
      </nav>
    );
  }