'use client'

import React, { useState } from 'react';
import Navigation from "../../../../components/navigation";
import styles from "./value.module.css";
import Link from "next/link";
import Footer from '../../../../components/footer';
import ScrollToTop from '../../../../components/ScrollToTop';

export default function value() {
    const [hoveredCircle, setHoveredCircle] = useState(null);

    const handleMouseEnter = (circle) => {
        setHoveredCircle(circle);
    };

    const handleMouseLeave = () => {
        setHoveredCircle(null);
    };

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <ScrollToTop />
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Value.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/aboutus/value">About us</Link>
                            <p>&gt;</p>
                            <Link href="/aboutus/value"><h4>value</h4></Link>
                        </div>
                    </div>
                    <div className={styles.chart}>
                        <img src="/value.png" alt="" />
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}