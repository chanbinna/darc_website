"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation";
import Marquee from "../../components/marquee";
import Footer from "../../components/footer";
import Link from "next/link";
import "../../components/embla.css";
import { FaArrowRight } from "react-icons/fa6";
import YouTube from "react-youtube";
import ScrollToTop from "../../components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the checked testimonials from the API
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/reviews"); // Assuming this is your API
        const data = await response.json();

        if (response.ok) {
          // Filter out the checked testimonials
          const checkedTestimonials = data.reviews.filter(
            (review) => review.checked
          );
          setTestimonials(checkedTestimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <main className={styles.main}>
      <ScrollToTop />
      <SpeedInsights />
      <Navigation activeIndex={activeIndex} />
      <div className={styles.container}>
        <div className={styles.firstScreen}>
          <div className={styles.pictureBox}>
            <div className={styles.firstText}>
              <h1>
                &quot;다르크에서는 아무리 지독한 약물 중독자일지라도 <br />{" "}
                회복할 수 있다라는 희망의 메세지를 받게됩니다.&quot;
              </h1>
              <p>From Reading Guide</p>
              <Link
                href='/contact/contactus'
                passHref
                className={styles.noDecoration}
              >
                <div className={styles.cardSlot} style={{ cursor: "pointer" }}>
                  <h3>상담신청</h3>
                  <div className={styles.arrowSym}>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }} className={styles.secPage}>
          <div className={styles.second}>
            <div className={styles.topBlocks}>
              <div className={styles.Firstblocks}>
                <div className={styles.textinCard}>
                  <span className={styles.linetext}>Our Services</span>
                  <h2>Addiciton Rehabilitation</h2>
                  <p>
                    &quot;중독으로 인해 잘못된 성격, 가치관, 신념등의 문제를
                    확인하고 검토, 수정, 해결해 나아감으로써 단순히 약물을 끊는
                    것이 아닌 온전한 회복에 이를 수 있게 됩니다.&quot;
                  </p>
                </div>
              </div>
              <div className={styles.blocks}>
                <div
                  className={styles.iconCircle}
                  style={{ backgroundColor: "#244186" }}
                >
                  <img src='/icon1.svg' alt='' />
                </div>
                <h2>약물 치료</h2>
                <p>
                  &quot;마약 중독 전문 병원과 연계를 통해 전문적인 치료를
                  진행합니다&quot;
                </p>
              </div>

              <div className={styles.blocks}>
                <div
                  className={styles.iconCircle}
                  style={{ backgroundColor: "#444655" }}
                >
                  <img src='/icon2.svg' alt='' />
                </div>
                <h2>약물 인식 교육</h2>
                <p>
                  &quot;마약류 중독 전문가들이 당사자와 가족들에게 마약류 중독에
                  대한 체계적인 교육을 실시합니다.&quot;
                </p>
              </div>
            </div>
            <div className={styles.bottomBlocks}>
              <div className={styles.blocks}>
                <div
                  className={styles.iconCircle}
                  style={{ backgroundColor: "#a9aabc" }}
                >
                  <img src='/icon3.svg' alt='' />
                </div>
                <h2>직업 재활</h2>
                <p>
                  &quot;재활을 통해 건강한 사회 구성원이 될 수 있도록
                  돕습니다.&quot;
                </p>
              </div>
              <div className={styles.blocks}>
                <div
                  className={styles.iconCircle}
                  style={{ backgroundColor: "#574200" }}
                >
                  <img src='/icon4.svg' alt='' />
                </div>
                <h2>자기 검토/자아 성찰</h2>
                <p>
                  &quot;12단계 프로그램 실천으로 삶에 대한 태도 변화와 가치관을
                  변화시킵니다.&quot;
                </p>
              </div>
              <div className={styles.blocks}>
                <div
                  className={styles.iconCircle}
                  style={{ backgroundColor: "#8d7125" }}
                >
                  <img src='/icon5.svg' alt='' />
                </div>
                <h2>미래 비전 제시</h2>
                <p>&quot;미래에 대한 고민을 함께합니다.&quot;</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wholeWrapper}>
          <div className={styles.videoSlot}>
            <div className={styles.videoWrapper}>
              <YouTube
                videoId='Ruu35RuYqYE'
                opts={{
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            </div>
            <div className={styles.videoTextBox}>
              <h2>회복자들의 경험담</h2>
              <p>
                DARC 멤버들의 <br />
                회복관련 이야기
              </p>
              <div className={styles.buttonWraper2}>
                <Link href='/review' className={styles.noLinkStyle}>
                  <button className={styles.Specificbutton}>자세히 보기</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.testimony}>
            <div className={styles.testimonyText}>
              <h3>Real Stories of Recovery</h3>
              <p>
                Reviews From Around The World <br /> &quot;You can be the next
                one.&quot;
              </p>
            </div>
            <div className={styles.cardWrapper}>
              <div className={styles.testimonyText2}>
                <p>Testimonials</p>
              </div>
              <div className={styles.testcardWrapper}>
                {/* Map over the testimonials */}
                {testimonials.length > 0 ? (
                  testimonials.slice(0, 3).map((testimonial, index) => (
                    <div key={index} className={styles.testCard}>
                      <img src='/star.png' alt='' className={styles.star} />
                      <div className={styles.userCard}>
                        <img
                          src='/userTest.png'
                          alt=''
                          className={styles.user}
                        />
                        <div className={styles.name}>
                          <p>{testimonial.name}</p>
                          <label htmlFor=''>{testimonial.job}</label>
                        </div>
                      </div>
                      <div className={styles.testText}>
                        <p>{testimonial.text}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <h3>현재 존재하는 추천서가 없습니다.</h3>
                )}
              </div>
              <div className={styles.buttonWraper}>
                <Link href='/review/recommend'>
                  <button>자세히 보기</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hospital}>
          <Marquee />
        </div>
      </div>
      <Footer />
    </main>
  );
}
