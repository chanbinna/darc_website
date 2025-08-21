"use client";

import React, { useState } from "react";
import Navigation from "../../../../components/navigation";
import styles from "./mission.module.css";
import Link from "next/link";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";

export default function Mission() {
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleMouseEnter = (circle) => {
    setHoveredCircle(circle);
  };

  const handleMouseLeave = () => {
    setHoveredCircle(null);
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>Mission</h1>
            </div>
            <div className={styles.link}>
              <Link href='/aboutus/mission'>About us</Link>
              <p>&gt;</p>
              <Link href='/aboutus/mission'>
                <h4>mission</h4>
              </Link>
            </div>
          </div>
          <div className={styles.chart}>
            <img src='/mission-1.png' alt='' />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
