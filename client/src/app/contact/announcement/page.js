"use client";

import React from "react";
import Navigation from "../../../../components/navigation";
import styles from "./resources.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
// import NoticeClient from "../../../../components/NoticeClient";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";
import { FaL } from "react-icons/fa6";
import dynamic from "next/dynamic";

const NoticeClient = dynamic(
  () => import("../../../../components/NoticeClient"),
  {
    ssr: false,
  }
);

export default function Announcement() {
  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>공지사항</h1>
            </div>
            <div className={styles.link}>
              <Link href='/contact/resources'>고객센터</Link>
              <p>&gt;</p>
              <Link href='/contact/announcement'>
                <h4>공지사항</h4>
              </Link>
            </div>
          </div>
          <div className={styles.noticeWrapper}>
            <NoticeClient isAdmin={false} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
