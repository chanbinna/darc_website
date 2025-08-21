"use client";

import React, { useState } from "react";
import Navigation from "../../../../../components/navigation";
import styles from "../korea/history.module.css";
import Link from "next/link";
import { GoX } from "react-icons/go";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Japan() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>History of DARC</h1>
            </div>
            <div className={styles.link}>
              <Link href='/aboutus/his/korea'>About us</Link>
              <p>&gt;</p>
              <Link href='/aboutus/his/korea'>
                <h4>다르크의 역사</h4>
              </Link>
            </div>
          </div>
          <div className={styles.anotherLink}>
            <Link href='/aboutus/his/korea' className={styles.other}>
              <p>Korea</p>
            </Link>
            <p>|</p>
            <Link href='/aboutus/his/japan' className={styles.rightnow}>
              <p>Japan</p>
            </Link>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.left}>
              <img src='/japanMap.png' alt='' />
            </div>
            <div className={styles.right}>
              <h1>DARC Japan</h1>
              <p>
                1985년, 도쿄, 니포리에 최초로 Group Home이 설립되었습니다. 설립
                이후 Daycare Center, APARI (Asia Pacific Addiction Research
                Institution) 등 다양한 부속기관들을 기반으로 마약중독자들의
                재활에 기여하고 있습니다. <br />
                <br />
                23년 6월 기준, 현재 95개 넘는 공동 가정 생활시설 및
                Daycare-센터가 운영 중이며, 1,500명 이상의 중독자들이 단약 및
                건강한 사회 구성원으로의 복귀를 위해 입소해 있습니다.
              </p>
              <button onClick={handlePopup}>자세히 보기</button>
            </div>
          </div>

          {showPopup && (
            <>
              <div className={styles.popupOverlay} onClick={closePopup}></div>
              <div className={styles.popupContent}>
                <h1>History of DARC Japan</h1>
                <div className={styles.photo2}>
                  <img src='/japan.png' alt='' />
                </div>
                <button onClick={closePopup}>
                  <GoX />
                </button>
              </div>
            </>
          )}
        </div>
        <Footer />
      </main>
    </div>
  );
}
