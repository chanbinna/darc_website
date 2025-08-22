"use client";


import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NoticeDetailClient from "../../../../../components/NoticeDetailClient";
import Navigation from "../../../../../components/navigation";
import styles from "../resources.module.css";
import Link from "next/link";
import Footer from "../../../../../components/footer";
import ScrollToTop from "../../../../../components/ScrollToTop";

export default function NoticeDetailPage() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const res = await fetch(`/api/announcement/${id}`);
        const data = await res.json();
        setNotice(data);
      } catch (err) {
        console.error("Failed to fetch notice:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchNotice();
  }, [id]);

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>공지사항.</h1>
            </div>
            <div className={styles.link}>
              <Link href="/contact/resources">Contact</Link>
              <p>&gt;</p>
              <Link href="/contact/announcement">
                <h4>공지사항</h4>
              </Link>
            </div>
          </div>
          <div className={styles.noticeWrapper}>
            {loading ? (
              <p className={styles.loadingMessage}>공지사항을 불러오는 중...</p>
            ) : (
              <NoticeDetailClient selectedNotice={notice} />
            )}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
