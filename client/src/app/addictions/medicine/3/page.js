"use client";

import { useState } from "react";
import Navigation from "../../../../../components/navigation";
import styles from "./medicine3.module.css";
import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { HiChevronDown } from "react-icons/hi2";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Medicine3() {
  const [showEffects, setShowEffects] = useState(false);

  const toggleEffects = () => {
    console.log("Toggling effects", !showEffects);
    setShowEffects(!showEffects);
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>치료 약물</h1>
            </div>
            <div className={styles.link}>
              <Link href='/addictions'>Addictions</Link>
              <p>&gt;</p>
              <Link href='/addictions/medicine/3'>
                <h4>환각제</h4>
              </Link>
            </div>
          </div>
          <div className={styles.anotherLink}>
            <Link href='/addictions/medicine/1' className={styles.other}>
              <p>각성제</p>
            </Link>
            <p>|</p>
            <Link href='/addictions/medicine/2' className={styles.other}>
              <p>진정, 마취제</p>
            </Link>
            <p>|</p>
            <Link href='/addictions/medicine/3' className={styles.rightnow}>
              <p>환각제</p>
            </Link>
            <p>|</p>
            <Link href='/addictions/medicine/4' className={styles.other}>
              <p>기타</p>
            </Link>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.medicine}>
              <div className={styles.left}>
                <h2>약물 설명</h2>
                <div className={styles.rows}>
                  <h3 className={styles.highlight}>환각제 &nbsp;</h3>
                  <h3 className={styles.nextff}>
                    (幻覺劑, 영어: Psychedelic drug, Hallucinogenic)
                  </h3>
                </div>
                <div className={styles.textBox}>
                  <p>
                    중주신경계에 작용하여 환각을 일으키는 약물로 흥분과 억제
                    효과가 모두 있으며 실제 존재하지 않는 감각을 실제인 것처럼
                    느끼게 합니다.
                  </p>
                </div>
                <div className={styles.caption}>
                  <p>
                    *중추신경계 (Central Nervous System): 우리 몸의 여러
                    감각기관에서 받아들인 신경정보들을 모아 처리하는
                    중앙처리장치이며 내와 척수가 이에 해당됨
                  </p>
                </div>
                <div></div>
              </div>
              <div className={styles.right}>
                <div className={styles.picture}></div>
                <div className={styles.picturein}></div>
              </div>
            </div>
            <div className={styles.effect}>
              <hr class={styles.solid} />
              <div className={styles.oneline}>
                <div>
                  <h2>부작용</h2>
                </div>
                <button className={styles.toggleButton} onClick={toggleEffects}>
                  {showEffects ? <SlArrowUp /> : <SlArrowDown />}
                </button>
              </div>
              <div
                className={`${styles.effectsContent} ${showEffects ? styles.show : ""}`}
              >
                <ul>
                  <li>
                    극심한 공포, 편집증 등의 정신적 부작용과 혈압, 호흡수 또는
                    체온 증가, 동공 확대, 오한, 땀 흘림, 손 떨림, 어지러움
                    식욕부진 등의 신체적인 부작용이 나타날 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
