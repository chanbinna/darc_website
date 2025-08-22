"use client";

import React, { useState } from "react";
import Navigation from "../../../../../components/navigation";
import styles from "./history.module.css";
import Link from "next/link";
import { GoX } from "react-icons/go";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Korea() {
  const [selectedCity, setSelectedCity] = useState("Incheon");
  const [showPopup, setShowPopup] = useState(false);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

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
              <h1>다르크의 역사</h1>
            </div>
            <div className={styles.link}>
              <Link href='/aboutus/his/korea'>재단 소개</Link>
              <p>&gt;</p>
              <Link href='/aboutus/his/korea'>
                <h4>다르크의 역사</h4>
              </Link>
            </div>
          </div>
          <div className={styles.anotherLink}>
            <Link href='/aboutus/his/korea' className={styles.rightnow}>
              <p>한국</p>
            </Link>
            <p>|</p>
            <Link href='/aboutus/his/japan' className={styles.other}>
              <p>일본</p>
            </Link>
          </div>
          <div className={styles.onemoreLink}>
            <button
              onClick={() => handleCityClick("Incheon")}
              className={`${styles.cityButton} ${selectedCity === "Incheon" ? styles.selectedCity : ""}`}
            >
              인천
            </button>
            <p>|</p>
            <button
              onClick={() => handleCityClick("Seoul")}
              className={`${styles.cityButton} ${selectedCity === "Seoul" ? styles.selectedCity : ""}`}
            >
              서울
            </button>
            <p>|</p>
            <button
              onClick={() => handleCityClick("Gyeonggi")}
              className={`${styles.cityButton} ${selectedCity === "Gyeonggi" ? styles.selectedCity : ""}`}
            >
              경기도
            </button>
          </div>

          {selectedCity === "Incheon" && (
            <div className={styles.contentBox}>
              <div className={styles.left}>
                <img src='/koreaMap.png' alt='' />
              </div>
              <div className={styles.right}>
                <h1>DARC Incheon</h1>
                <p>
                  2022년, 인천광역시에 비영리단체 인천 다르크 협회가
                  설립되었습니다. 현재 2개의 공동 가정 시설에 10명 내외의
                  중독자들이 입소하여 생활하고 있습니다.
                  <br /> <br />
                  설립 이후, 공동 가정 생활시설, 주간 이용 센터, 마약중독 연구소
                  3가지 시설을 중심으로 약물 재활, 약물 예방 및 인식 교육, 중독
                  연구를 진행 중입니다.
                  <br /> <br />
                  인천다르크는 대한민국의 마약 관련 문제를 해결하기 위해
                  끊임없이 노력하겠습니다.
                </p>
                <button onClick={handlePopup}>자세히 보기</button>
              </div>
            </div>
          )}

          {selectedCity === "Seoul" && (
            <div className={styles.contentBox}>
              <div className={styles.left}>
                <img src='/koreaMap.png' alt='' />
              </div>
              <div className={styles.right}>
                <h1>DARC Seoul</h1>
                <img src='/seoul.svg' alt='' />
              </div>
            </div>
          )}

          {selectedCity === "Gyeonggi" && (
            <div className={styles.contentBox}>
              <div className={styles.left}>
                <img src='/koreaMap.png' alt='' />
              </div>
              <div className={styles.right}>
                <h1>DARC Kyeonggi-do</h1>
                <img src='/kyeonggi.svg' alt='' />
              </div>
            </div>
          )}

          {selectedCity === "Gimhae" && (
            <div className={styles.contentBox}>
              <div className={styles.left}>
                <img src='/koreaMap.png' alt='' />
              </div>
              <div className={styles.right}>
                <h1>DARC Kimhae</h1>
                <img src='/kimhae.svg' alt='' />
              </div>
            </div>
          )}

          {showPopup && (
            <>
              <div className={styles.popupOverlay} onClick={closePopup}></div>
              <div className={styles.popupContent}>
                <h1>연혁</h1>
                <div className={styles.photoeee}>
                  <img src='/incheon.svg' alt='' />
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
