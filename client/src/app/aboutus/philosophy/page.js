'use client'

import React, { useState } from 'react';
import Navigation from "../../../../components/navigation";
import styles from "./philosophy.module.css";
import Link from "next/link";
import Footer from '../../../../components/footer';
import ScrollToTop from '../../../../components/ScrollToTop';

export default function philosophy() {
    const [hoveredCircle, setHoveredCircle] = useState(null);
    const [selectedTab, setSelectedTab] = useState("철학");

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
                            <h1>Philosophy.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/aboutus/philosophy">About us</Link>
                            <p>&gt;</p>
                            <Link href="/aboutus/philosophy"><h4>Philosophy</h4></Link>
                        </div>
                    </div>
                    <div className={styles.pageSeperator}>
                        <button
                            className={`${styles.tab} ${selectedTab === "철학" ? styles.active : ""}`}
                            onClick={() => setSelectedTab("철학")}
                        >
                            철학
                        </button>
                        <button
                            className={`${styles.tab} ${selectedTab === "생활철학" ? styles.active : ""}`}
                            onClick={() => setSelectedTab("생활철학")}
                        >
                            생활철학
                        </button>
                    </div>
                    {selectedTab === "철학" ? (
                        <div className={styles.chart}>
                            <img src="/phil.png" alt="철학 이미지" />
                        </div>
                    ) : (
                        <div className={styles.chart}>
                            <img src="/phil-living.png" alt="생활철학 이미지" />
                        </div>
                    )}
                </div>
                <Footer />
            </main>
        </div>
    );
}