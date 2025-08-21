"use client";

import { useState } from "react";
import Navigation from "../../../../components/navigation";
import styles from "./support.module.css";
import Link from "next/link";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";

export default function Program1() {
  // Function to open the external link in a popup window
  const handleOpenPopup = () => {
    const popupWidth = 600; // Specify your desired width
    const popupHeight = 800; // Specify your desired height
    const left = (window.innerWidth - popupWidth) / 2; // Center horizontally
    const top = (window.innerHeight - popupHeight) / 2; // Center vertically

    window.open(
      "https://www.ihappynanum.com/Nanum/B/O5HB28LU47",
      "popup",
      `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>기부</h1>
            </div>
            <div className={styles.link}>
              <Link href='/donations/volunteer'>후원</Link>
              <p>&gt;</p>
              <Link href='/donations/support'>
                <h4>기부</h4>
              </Link>
            </div>
          </div>
          <div className={styles.contentBox}>
            <h2>당신의 기부가 중독자들을 치료합니다.</h2>
            <ul>
              <li>
                후원은 마약중독자들에게 양질의 지원을 꾸준히 제공할 수 있게
                해주는 중요한 원동력입니다.
              </li>
              <li>
                많은 중독자들이 건강하게 사회에 복귀할 수 있도록 당신의 도움이
                필요합니다.
              </li>
            </ul>

            <div className={styles.out}>
              <div className={styles.just}>
                <p className={styles.text}>기업</p>
                <div className={styles.picture1}></div>
                <div className={styles.picturein}></div>
              </div>
              <div className={styles.just2}>
                <p className={styles.text}>개인</p>
                <div className={styles.picture2}></div>
                <div className={styles.picturein}></div>
              </div>
              <div className={styles.just3}>
                <p className={styles.text}>기관/단체</p>
                <div className={styles.picture3}></div>
                <div className={styles.picturein}></div>
              </div>
            </div>

            <div className={styles.application}>
              <button onClick={handleOpenPopup}>후원하기</button>{" "}
              {/* Open popup on click */}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
