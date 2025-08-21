"use client";
import React from "react";
import Navigation1 from "../../../components/navigation";
import Link from "next/link";
import Slider from "../../../components/slider";
import styles from "./treatment.module.css";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../../../components/footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function Rehabilitation1() {
  // Define the content and background image for each slide

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation1 />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>중독 재활</h1>
            </div>
            <div className={styles.link}>
              <Link href='/treatment/'>재활/프로그램</Link>
              <p>&gt;</p>
              <Link href='/treatment/'>
                <h4>중독 재활</h4>
              </Link>
            </div>
          </div>
          <div className={styles.divbox}>
            <div className={styles.leftLink1}>
              <h3>치료.</h3>
              <Link href='/treatment/rehabilitation/1'>
                <button className={styles.cardButton}>
                  <FaArrowRight />
                </button>
              </Link>
            </div>
            <div className={styles.leftLink2}>
              <h3>프로그램.</h3>
              <Link href='/treatment/program/1'>
                <button className={styles.cardButton}>
                  <FaArrowRight />
                </button>
              </Link>
            </div>
            <div className={styles.leftLink3}>
              <h3>사법지원.</h3>
              <Link href='/treatment/law'>
                <button className={styles.cardButton}>
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
