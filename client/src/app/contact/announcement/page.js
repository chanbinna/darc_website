'use client'
import React from 'react';
import Navigation from "../../../../components/navigation";
import styles from "./resources.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Footer from '../../../../components/footer';
import ScrollToTop from '../../../../components/ScrollToTop';


export default function Mission() {
    return (
        <div className={styles['main-container']}>
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
                            <Link href="/contact/resources"><h4>공지사항.</h4></Link>
                        </div>
                    </div>


                </div>
                <Footer />
            </main>
        </div>
    );
}