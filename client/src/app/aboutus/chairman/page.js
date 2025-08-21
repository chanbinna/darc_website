"use client";

import { Signika } from "next/font/google";
import Navigation from "../../../../components/navigation";
import styles from "./chairman.module.css";
import Link from "next/link";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";

export default function Chairman() {
  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>Director&#39;s Remarks</h1>
            </div>
            <div className={styles.link}>
              <Link href='/aboutus/chairman'>About us</Link>
              <p>&gt;</p>
              <Link href='/aboutus/chairman'>
                <h4>이사장님 말씀</h4>
              </Link>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.left}>
              <div className={styles.letter}>
                <p>
                  안녕하세요, <br />
                  인천 다르크 이사장 최진묵입니다. <br />
                  <br />
                  23년 마약 중독에서 벗어나 상담사가 된 저는 마약중독을 극복한
                  경험으로 현재 현장에서 마약중독자들의 치료와 재활을 직접
                  도우며 힘쓰고 있습니다. <br />
                  <br />
                  대다수의 마약 중독자들은 자신이 마약을 하는 행위가 질병인지
                  모른 채, 평생을 고통 속에서 살아가고 있습니다. 설사 안다고
                  해도 법적인 문제가 야기될까 치료진의 도움을 요청할 수
                  없습니다. <br />
                  <br />
                  마약 중독은 초기에 치료해야 합니다. 치료하기 위해선 음지가
                  아닌 양지에서 중독 문제가 다뤄져야 합니다. 마약 문제를
                  무겁게만 다루어 쉬쉬하는 사회적 분위기가 마약 중독치료 및
                  재활에 도움이 되지 않는다는 것을 깨달았습니다. 말기 중독자의
                  모습을 교육함으로써 초기 마약 사용자에게는 자신은 중독이
                  아니라고 생각하게 만드는 역효과를 가져오고 있습니다.
                  <br />
                  <br />
                  중독 상태에 따른 체계적인 개입과 지역사회에 신뢰받는 마약류
                  중독 재활센터가 되겠습니다.
                </p>
              </div>

              <div className={styles.sign}>
                <p>
                  감사합니다. <br />
                  이사장 최진묵 올림
                </p>
                <img src='/sign.png' alt='sign' />
              </div>
            </div>
            <div className={styles.right}>
              <img src='/chairman.png' alt='no photo' />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
