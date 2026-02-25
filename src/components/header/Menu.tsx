'use client'
import styles from "./menu.module.css";
import { useState, useEffect } from "react";

const sections = ['home', 'cv', 'portfolio', 'contact'] as const;
type Section = typeof sections[number];

export default function Menu() {
    const [activeSection, setActiveSection] = useState<Section>('home');

    useEffect(() => {
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
    }, []);

    return (
      <nav className={styles.container}>
        <a href="#home" className={`${styles.menuButton} ${activeSection === 'home' ? styles.active : ''}`}>Home</a>
        <a href="#cv" className={`${styles.menuButton} ${activeSection === 'cv' ? styles.active : ''}`}>CV</a>
        <a href="#portfolio" className={`${styles.menuButton} ${activeSection === 'portfolio' ? styles.active : ''}`}>Portfolio</a>
        <a href="#contact" className={`${styles.menuButton} ${activeSection === 'contact' ? styles.active : ''}`}>Contact Info</a>
      </nav>
    );
  }
