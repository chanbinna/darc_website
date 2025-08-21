"use client";

import { useState } from "react";
import Navigation from "../../../../../components/navigation";
import styles from "./medicine4.module.css";
import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { HiChevronDown } from "react-icons/hi2";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function Medicine4() {
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
              <Link href='/addictions/medicine/4'>
                <h4>기타 약물</h4>
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
            <Link href='/addictions/medicine/3' className={styles.other}>
              <p>환각제</p>
            </Link>
            <p>|</p>
            <Link href='/addictions/medicine/4' className={styles.rightnow}>
              <p>기타</p>
            </Link>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.medicine}>
              <div className={styles.left}>
                <h2>약물 설명</h2>
                <div className={styles.rows}>
                  <h3 className={styles.highlight}>
                    기타 약물(신종 약물) &nbsp;
                  </h3>
                  <h3></h3>
                </div>
                <div className={styles.textBox}>
                  <p>
                    다양한 신종, 합성 약물들이 생겨나고 있으며 알킬 니트라이트,
                    펜사이클리딘 등 다양한 신종 약물들이 있습니다.
                  </p>
                </div>
                <div className={styles.caption}>
                  <p></p>
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
                    다양한 약물이 새로 발견되고 있고 임상실험을 거치지 않았기에
                    다양한 신체적, 정신적 부작용이 생길 수 있습니다.
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
