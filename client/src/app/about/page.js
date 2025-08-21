"use client";

import { useEffect } from "react";
import Navigation from "../../../components/navigation";
import styles from "./about.module.css";
import Footer from "../../../components/footer";
import Link from "next/link";
import ScrollToTop from "../../../components/ScrollToTop";

export default function About() {
  const adjustTextboxHeight = () => {
    const textbox = document.querySelector(`.${styles.textbox}`);
    const textboxin = document.querySelector(`.${styles.textboxin}`);
    const content = document.querySelector(`.${styles.content}`);

    if (textbox && textboxin && content) {
      const textboxHeight = textbox.offsetHeight;
      textboxin.style.height = `${textboxHeight}px`;

      // Adjust the top property dynamically
      const topOffset = 15 - textboxHeight; // Example of subtracting the height from 15px
      textboxin.style.top = `${topOffset}px`;

      const marginBottom = 200 - textboxHeight;
      textboxin.style.marginBottom = `${marginBottom}px`;
    }
  };

  useEffect(() => {
    // Adjust height and position on initial load
    adjustTextboxHeight();

    // Adjust height and position on window resize
    window.addEventListener("resize", adjustTextboxHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustTextboxHeight);
    };
  }, []);

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>다르크란?</h1>
            </div>
            <div className={styles.link}>
              <Link href='/'>홈</Link>
              <p>&gt;</p>
              <Link href='/about'>
                <h4>다르크란?</h4>
              </Link>
            </div>
          </div>

          <div className={styles.textbox}>
            <h2>
              DARC = Drug Addiction Rehabilitation Center (약물 중독 재활 센터)
            </h2>
            <p>
              &lsquo;다르크&rsquo;는 약물 중독으로부터 회복하려는 동료들과 함께
              매일 그룹 치료를 실천하는 공동체입니다. 다르크의 목적은 회복을
              열망하는 동료를 서로 도와주는 것뿐이며, &lsquo;다르크&rsquo;
              안에서는 그 어떤 것도 회복의 가치보다 우선될 수 없습니다. 따라서
              모든 의사결정과 운영은 &lsquo;회복&rsquo;의 가치를 최우선으로
              합니다. <br />
              <br />
              &lsquo;다르크&rsquo;의 치료 효과에 대해 의문이 들 수 있습니다.
              하지만 모든 의심을 내려놓고, 철저히 따라와 준다면 지독한 약물
              중독자일지라도 &ldquo;회복할 수 있다.&rdquo;라는 희망의 메시지를
              받게 될 것입니다. <br />
              <br />
              &lsquo;다르크&rsquo;에서 회복하고 있는 동료들이 효과를 증명하고
              있으며, 앞으로 본인 스스로 경험하게 될 것입니다. <br />
              <br />
              다르크 프로그램의 진짜 효과는 건강한 사회 구성원으로서 다시 첫발을
              내디딜 때 체감하게 될 것이고, 앞으로 삶에서 만나게 될 수많은
              어려움을 극복하는데도 훌륭한 길 안내가 되어 줄 것입니다.
            </p>
            <img src='/watermark.svg' alt='watermark' />
          </div>
          <div className={styles.textboxin}></div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
