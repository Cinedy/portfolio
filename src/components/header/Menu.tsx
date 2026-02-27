'use client'
import styles from "./menu.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const sections = ['home', 'cv', 'portfolio', 'contact'] as const;
type Section = typeof sections[number];

function pathnameToSection(pathname: string): Section | null {
    if (pathname === '/portfolio') return 'portfolio';
    return null;
}

export default function Menu() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<Section>('home');

    const staticActive = pathnameToSection(pathname);

    useEffect(() => {
        if (staticActive) return;

        const observers: IntersectionObserver[] = [];

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [staticActive]);

    const active = staticActive ?? activeSection;
    const prefix = pathname === '/' ? '' : '/';

    return (
      <nav className={styles.container}>
        <a href={`${prefix}#home`} className={`${styles.menuButton} ${active === 'home' ? styles.active : ''}`}>Home</a>
        <a href={`${prefix}#cv`} className={`${styles.menuButton} ${active === 'cv' ? styles.active : ''}`}>CV</a>
        <a href={`${prefix}#portfolio`} className={`${styles.menuButton} ${active === 'portfolio' ? styles.active : ''}`}>Portfolio</a>
        <a href={`${prefix}#contact`} className={`${styles.menuButton} ${active === 'contact' ? styles.active : ''}`}>Contact Info</a>
      </nav>
    );
}
