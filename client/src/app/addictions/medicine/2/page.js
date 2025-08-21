"use client";

import { useState } from "react";
import Navigation from "../../../../../components/navigation";
import styles from "./medicine2.module.css";
import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { HiChevronDown } from "react-icons/hi2";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Medicine2() {
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
              <Link href='/addictions'>중독</Link>
              <p>&gt;</p>
              <Link href='/addictions/medicine/2'>
                <h4>진정, 마취제</h4>
              </Link>
            </div>
          </div>
          <div className={styles.anotherLink}>
            <Link href='/addictions/medicine/1' className={styles.other}>
              <p>각성제</p>
            </Link>
            <p>|</p>
            <Link href='/addictions/medicine/2' className={styles.rightnow}>
              <p>진정, 마취제</p>
            </Link>
            <p>|</p>
            <Link href='/addictions/medicine/3' className={styles.other}>
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
                  <h3 className={styles.highlight}>진정, 마취제 &nbsp;</h3>
                  <h3 className={styles.nextff}>
                    (영어: depressants, anesthetic)
                  </h3>
                </div>
                <div className={styles.textBox}>
                  <p>
                    일반적인 진정, 최면, 마취 등 중추신경계를 억제하여 작용을
                    떨어트리는 약물로, 진정과 마취 효과를 통해 수면을 유도하고
                    긴장을 완화시키는 약물입니다.
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
                    벤조디아제핀계열 약물은 졸림, 기억력 감퇴, 어지럼증, 두통,
                    변비, 과민성 등이 흔한 부작용으로 알려져 있고 식욕 변화,
                    시야 흐림, 악몽 등이 간혹 나타나기도 합니다. 또한 장기간
                    투여 시 의존성 위험이 증가합니다.
                  </li>
                  <li>
                    비-벤조디아제핀계열 약물은 졸음, 두통, 어지러움, 불면증
                    악화, 인지장애, 호흡기 감염 등이 발생하며 의존성은
                    벤조디아제핀계열 대비 낮은 편 입니다.
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
