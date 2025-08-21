"use client";

import { useState } from "react";
import Navigation from "../../../../../components/navigation";
import styles from "./medicine1.module.css";
import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { HiChevronDown } from "react-icons/hi2";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Medicine1() {
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
              <Link href='/addictions/medicine/1'>
                <h4>각성제</h4>
              </Link>
            </div>
          </div>
          <div className={styles.anotherLink}>
            <Link href='/addictions/medicine/1' className={styles.rightnow}>
              <p>각성제</p>
            </Link>
            <p>|</p>
            <Link href='/addictions/medicine/2' className={styles.other}>
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
                  <h3 className={styles.highlight}>각성제 &nbsp;</h3>
                  <h3 className={styles.nextff}>
                    (覺醒劑, 영어: Stimulant, Psychostimulant)
                  </h3>
                </div>
                <div className={styles.textBox}>
                  <p>
                    중추신경계에 작용하여 교감신경계 활성화를 통해 일시적인 활동
                    증가 효과를 보이는 약품을 의미합니다. 정신, 육체적인 기능을
                    감소시키는 진정제와는 효과가 반대됩니다.
                  </p>
                </div>
                <div className={styles.caption}>
                  <p>
                    *중추신경계 (Central Nervous System): 우리 몸의 여러
                    감각기관에서 받아들인 신경정보들을 모아 처리하는
                    중앙처리장치이며 내와 척수가 이에 해당됨 <br />
                  </p>
                  <p className={styles.second}>
                    {" "}
                    *교감신경계(Sympathetic Nervous System) 자율신경계의
                    일종으로 일반적으로 긴장이 되는 상황에 처했을 때 활성화됨
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
                    부작용은 약물에 따라 차이가 있지만 각성제는 공통적으로 두통,
                    불면증, 신경과민, 식욕감소, 구강건조, 오심 등의 부작용이
                    있습니다. 또한, 내성과 의존성을 유발할 수 있으므로 처방
                    약물이라 할지라도 사용의 각별한 주의가 필요한
                    약물입니다.{" "}
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
