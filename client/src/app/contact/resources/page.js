"use client";

import React from "react";
import Navigation from "../../../../components/navigation";
import styles from "./resources.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";

export default function Mission() {
  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>Resources</h1>
            </div>
            <div className={styles.link}>
              <Link href='/contact/resources'>Contact</Link>
              <p>&gt;</p>
              <Link href='/contact/resources'>
                <h4>Resources</h4>
              </Link>
            </div>
          </div>

          <div className={styles.textbox}>
            <h2>SNS 우리의 이야기를 들어보세요.</h2>
          </div>

          <div className={styles.divbox}>
            <div
              className={styles.leftLink}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCgBJ6HVUV81VvwsWh4kVhSw",
                  "_blank"
                )
              }
            >
              <h1>
                <FaYoutube />
              </h1>
              <h3>YouTube</h3>
            </div>
            <div
              className={styles.leftLink}
              onClick={() =>
                window.open("https://instagram.com/mass9bro/", "_blank")
              }
            >
              <h1>
                <FaInstagram />
              </h1>
              <h3>Instagram</h3>
            </div>
            <div
              className={styles.leftLink}
              onClick={() =>
                window.open("https://t.me/+821084801445", "_blank")
            }
            >
              <h1>
                <FaTelegramPlane />
              </h1>
              <h3>Telegram</h3>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
