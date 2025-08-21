"use client";
import React from "react";
import Navigation1 from "../../../../../components/navigation";
import Link from "next/link";
import Slider from "../../../../../components/slider";
import styles from "./program1.module.css";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Rehabilitation1() {
  // Define the content and background image for each slide
  const slideData = [
    {
      content: (
        <div>
          <h4>프로그램</h4>
          <h2>연극</h2>
          <p>
            연극 속의 역할에 몰입해 타인의 심리, 행동 등을 이해하는 능력을 향상
            시킬 수 있습니다.
          </p>
        </div>
      ),
      backgroundImage: "/act.png", // Background image URL for slide 1
    },
    {
      content: (
        <div>
          <h4>프로그램</h4>
          <h2>독서</h2>
          <p>
            다양한 지식을 책으로 배우고 토론을 통해 타인의 관점을 배워 넓은
            시야를 가질 수 있습니다.
          </p>
        </div>
      ),
      backgroundImage: "/book.png", // Background image URL for slide 1
    },
    {
      content: (
        <div>
          <h4>프로그램</h4>
          <h2>미술</h2>
          <p>
            심리 상태를 다양한 형태로 표현하며 올바른 가치관을 형성시킵니다.
          </p>
        </div>
      ),
      backgroundImage: "/art.png", // Background image URL for slide 1
    },

    {
      content: (
        <div>
          <h4>프로그램</h4>
          <h2>자원봉사</h2>
          <p>
            사회적 연대감 및 공동체 의식을 강화시켜 건강한 가치관을
            형성시킵니다.
          </p>
        </div>
      ),
      backgroundImage: "/programLast.png", // Background image URL for slide 1
    },
  ];

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation1 />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>프로그램</h1>
            </div>
            <div className={styles.link}>
              <Link href='/treatment'>재활/프로그램</Link>
              <p>&gt;</p>
              <Link href='/treatment/program/1'>
                <h4>프로그램</h4>
              </Link>
            </div>
          </div>
          {/* Pass the slide content and background images as a prop to Slider */}
          <div className={styles.slide}>
            <Slider slides={slideData} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
