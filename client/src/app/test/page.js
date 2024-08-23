'use client';
import React from 'react';
import Navigation1 from "../../../components/navigation";
import Link from "next/link";
import Slider from '../../../components/slider';
import styles from "./test.module.css";

export default function Rehabilitation1() {
    // Define the content and background image for each slide
    const slideData = [
        {
            content: (
                <div>
                    <h4>연극 프로그램.</h4>
                    <p>연극속의 역할에 몰입해 타인의 심리, 행동 이해 능력 향상 시킬 수 있습니다.</p>
                </div>
            ),
            backgroundImage: "/images/rehab1.jpg", // Background image URL for slide 1
        },
        {
            content: (
                <div>
                    <h4>독서 프로그램.</h4>
                    <p>다양한 지식을 책으로 배우고 토론을 통해 타인의 관점을 배워 넓은 시야를 가질 수 있습니다.</p>
                </div>
            ),
            backgroundImage: "/images/rehab1.jpg", // Background image URL for slide 1
        },
        {
            content: (
                <div>
                    <h4>미술 프로그램.</h4>
                    <p>심리 상태를 다양한 형태로 표현하며 올바른 가치관을 형성 시킵니다.</p>
                </div>
            ),
            backgroundImage: "/images/rehab1.jpg", // Background image URL for slide 1
        },

    ];

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation1 />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Program.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/treatment/program/1">Treatment</Link>
                            <p>&gt;</p>
                            <Link href="/treatment/program/1"><h4>프로그램</h4></Link>
                        </div>
                    </div>
                    {/* Pass the slide content and background images as a prop to Slider */}
                    <div className={styles.slide}>
                        <Slider slides={slideData} />
                    </div>
                </div>
            </main>
        </div>
    );
}