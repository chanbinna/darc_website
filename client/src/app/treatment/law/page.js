"use client";
import { useState } from "react";
import Navigation from "../../../../components/navigation";
import styles from "./law.module.css";
import Link from "next/link";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";

export default function Program1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>사법지원</h1>
            </div>
            <div className={styles.link}>
              <Link href='/treatment'>Treatment</Link>
              <p>&gt;</p>
              <Link href='/treatment/law'>
                <h4>사법지원</h4>
              </Link>
            </div>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.box}>
              <h2>프로그램</h2>
              <p>
                인천 다르크는 마약류 중독자가 조금이라도 빠른 치료를 받을 수
                있도록 최선을 다 하겠습니다.
              </p>
              <div className={styles.buttonContainer}>
                <button onClick={openModal}>자세히 보기</button>
              </div>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <h2>사법지원 프로그램</h2>
                <p>
                  한국의 형사사법절차에 마약류 중독 치료를 의무화하는 제도가
                  미정비인 것에 주목했습니다. <br />
                  <br />
                  약물문제로 인하여 형사절차(수사, 재판)가 진행 중인 사람 중
                  다르크에 입소하여 규칙을 준수하고 단약을 유지하는 사람에
                  한하여, 형사 절차에 도움이 될 수 있는 지원을 하고 보석신청 시
                  주거 제한을 다르크에 신청할 수 있도록 지원하고 있습니다.{" "}
                  <br />
                  <br />
                  마약류중독자가 조금이라도 빠른 치료를 받을 수 있도록 최선을
                  다하겠습니다. 사법지원 프로그램에 관심이 있으신 분들은
                  웹사이트의 Contact us에서 문의해주세요.
                </p>
                <div className={styles.buttonContainer}>
                  <button onClick={closeModal}>닫기</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </div>
  );
}
