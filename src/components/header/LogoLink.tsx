'use client'
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function LogoLink() {
    const pathname = usePathname();
    const href = pathname === '/' ? '#home' : '/#home';

    return (
        <a href={href} className={styles.logo}>
            silje<span className={styles.logoDev}>.dev</span>
        </a>
    );
}
