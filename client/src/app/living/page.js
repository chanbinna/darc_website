'use client'
import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../../components/navigation";
import styles from "./living.module.css"
import Link from "next/link";
import ComponentA from "../../../components/componentA";
import ComponentB from "../../../components/componentB";
import ComponentC from "../../../components/componentC";
import Footer from "../../../components/footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function Review() {
    const [activeComponent, setActiveComponent] = useState('A');

    // Function to handle button clicks and change the state
    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };
    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <ScrollToTop />
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>시설 안내.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/">Home</Link>
                            <p>&gt;</p>
                            <Link href="/living"><h4>Living</h4></Link>
                        </div>
                    </div>
                    <div className={styles.pics}>
                        <h1>시설 사진</h1>
                        <div className={styles.button}>
                            <button
                                className={`${styles.button} ${activeComponent === 'A' ? styles.active : ''}`}
                                onClick={() => handleButtonClick('A')}
                            >
                                <h3>전체</h3>
                            </button>
                            <button
                                className={`${styles.button} ${activeComponent === 'B' ? styles.active : ''}`}
                                onClick={() => handleButtonClick('B')}
                            >
                                <h3>사무실</h3>
                            </button>
                            <button
                                className={`${styles.button} ${activeComponent === 'C' ? styles.active : ''}`}
                                onClick={() => handleButtonClick('C')}
                            >
                                <h3>숙소</h3>
                            </button>
                        </div>
                        <div className={styles.changed}>
                            {activeComponent === 'A' && <ComponentA />}
                            {activeComponent === 'B' && <ComponentB />}
                            {activeComponent === 'C' && <ComponentC />}
                        </div>
                    </div>



                </div>
                <Footer />
            </main>
        </div>
    );
}
