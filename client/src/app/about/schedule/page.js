"use client";

import Navigation from "../../../../components/navigation";
import styles from "./schedule.module.css";
import Link from "next/link";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Schedule() {
  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>일정 안내</h1>
              <h3>인천 다르크에서의 생활</h3>
            </div>

            <div className={styles.link}>
              <Link href='/'>홈</Link>
              <p>&gt;</p>
              <Link href='/about/schedule'>
                <h4>일정 안내</h4>
              </Link>
            </div>
          </div>

          <div className={styles.scheduler}>
            {/* Add the TransformWrapper and TransformComponent for zoom functionality */}
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              centerZoomedOut={true}
              centerOnInit={true}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div
                    className={styles.controls}
                    style={{ marginBottom: "10px" }}
                  >
                    <button onClick={() => zoomIn()}>+</button>
                    <button onClick={() => zoomOut()}>-</button>
                    <button onClick={() => resetTransform()}>Reset</button>
                  </div>
                  <TransformComponent>
                    <img src='/schedule.png' alt='Schedule' />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>

            {/* <div className={styles.row}>
                            <div className={styles.blankBlock}>
                            </div>
                            <div className={styles.dayBlock}>
                                <p>월요일</p>
                            </div>
                            <div className={styles.dayBlock}>
                                <p>화요일</p>
                            </div>
                            <div className={styles.dayBlock}>
                                <p>수요일</p>
                            </div>
                            <div className={styles.dayBlock}>
                                <p>목요일</p>
                            </div>
                            <div className={styles.dayBlock}>
                                <p>금요일</p>
                            </div>
                            <div className={styles.dayBlock}>
                                <p>토요일</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>8:00 ~ 9:30
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR1}>
                                    <p>기상 & 아침식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR1}>
                                    <p>기상 & 아침식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR1}>
                                    <p>기상 & 아침식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR1}>
                                    <p>기상 & 아침식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR1}>
                                    <p>기상 & 아침식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR1}>
                                    <p>기상 & 아침식사</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>9:30 ~ 12:00
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR2}>
                                    <p>인지 행동 치료</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR2}>
                                    <p>12단계 촉진 치료</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR2}>
                                    <p>동기 강화 치료</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR2}>
                                    <p>12단계 촉진 치료</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR2}>
                                    <p>인지 행동 치료</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR2_2}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>12:00 ~ 14:00
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR3}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR3}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR3}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR3}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR3}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR3}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>14:00 ~ 15:00
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR4}>
                                    <p>점심 식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR4}>
                                    <p>점심 식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR4}>
                                    <p>점심 식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR4}>
                                    <p>점심 식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR4}>
                                    <p>점심 식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR4}>
                                    <p>점심 식사</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>15:00 ~ 17:00
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR5}>
                                    <p>약물 인식 교육</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR5}>
                                    <p>영성 프로그램</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR5}>
                                    <p>미술 프로그램</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR5}>
                                    <p>독서 프로그램</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR5}>
                                    <p>연극 프로그램</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR5_2}>
                                    <p>다르크 가족참여 <br />자조모임</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>17:00 ~ 19:00
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR6}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR6}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR6}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR6}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR6}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR6}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>19:00 ~ 20:00
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR7}>
                                    <p>자유 <br />NA 모임</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR7}>
                                    <p>학동 <br />NA 모임</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR7_2}>
                                    <p>개인 정비 시간</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR7}>
                                    <p>온유 <br />NA 모임</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR7}>
                                    <p>가정동 <br />NA 모임</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR7}>
                                    <p>치유 <br />NA 모임</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBlock}>
                                <p>19:00 ~ 20:00
                                </p>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR8}>
                                    <p>저녁식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR8}>
                                    <p>저녁식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR8}>
                                    <p>저녁식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR8}>
                                    <p>다르크 <br />주간회의 <br />/저녁식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR8}>
                                    <p>저녁식사</p>
                                </div>
                            </div>
                            <div className={styles.scheduleBlock}>
                                <div className={styles.textBlockR8}>
                                    <p>저녁식사</p>
                                </div>
                            </div>
                        </div> */}
          </div>

          <div className={styles.bottom}>
            <p>
              *노란색 표시 된 프로그램은 외부 전문가 초청을 통해 진행하는
              프로그램으로 상황에 따라 변경가능성 있음 <br />
              *초록색 표시 된 모임은 항상 같은 시간에 있는 자조모임 <br />
              *파란색 표시 된 치료 프로그램은 다르크에서 진행하는 독자적인 치료
              프로그램
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
