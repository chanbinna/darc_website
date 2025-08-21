"use client";
import React from "react";
import Navigation1 from "../../../../../components/navigation";
import Link from "next/link";
import Slider from "../../../../../components/slider";
import styles from "./rehabilitation1.module.css";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Rehabilitation1() {
  // Define the content and background image for each slide
  const slideData = [
    {
      content: (
        <div>
          <h4>개인치료</h4>
          <h2>상담</h2>
          <p>
            개인이 가진 문제를 해결하기 위해 훈련된 상담사와 면담을 진행합니다.
          </p>
        </div>
      ),
      backgroundImage: "/individual1.png", // Background image URL for slide 1
    },
    {
      content: (
        <div>
          <h4>개인치료</h4>
          <h2>교육</h2>
          <p>전문가의 교육을 통하여 개인이 가진 중독 문제를 해결합니다.</p>
        </div>
      ),
      backgroundImage: "/individual2.png", // Background image URL for slide 1
    },
    {
      content: (
        <div>
          <h4>집단치료</h4>
          <h2>상담</h2>
          <p>
            훈련된 상담사의 지도와 동료 간의 상호작용을 통해 개인을
            성장시킵니다.
          </p>
        </div>
      ),
      backgroundImage: "/group1.png", // Background image URL for slide 1
    },
    {
      content: (
        <div>
          <h4>집단치료</h4>
          <h2>교육</h2>
          <p>교육을 통해 중독이라는 질병에 대처할 방법을 인식할 수 있습니다.</p>
        </div>
      ),
      backgroundImage: "/group2.png", // Background image URL for slide 2
    },
    {
      content: (
        <div>
          <h4>가족치료</h4>
          <h2>상담</h2>
          <p>가족이 건강한 생활을 하도록 전문적인 상담을 제공합니다.</p>
        </div>
      ),
      backgroundImage: "/family1.png", // Background image URL for slide 3
    },
    {
      content: (
        <div>
          <h4>가족치료</h4>
          <h2>교육</h2>
          <p>
            가족이 기능적인 생활을 하도록 다양한 분야 전문가의 교육을
            제공합니다.
          </p>
        </div>
      ),
      backgroundImage: "/family2.png", // Background image URL for slide 4
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
              <h1>치료</h1>
            </div>
            <div className={styles.link}>
              <Link href='/treatment'>재활/프로그램</Link>
              <p>&gt;</p>
              <Link href='/treatment/rehabilitation/1'>
                <h4>치료</h4>
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
