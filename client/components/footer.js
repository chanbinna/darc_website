'use client';
import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaTelegramPlane } from 'react-icons/fa'; // Importing YouTube, Instagram, and Telegram icons
import styles from './footer.module.css'; // Assuming you will have a corresponding CSS file

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLinks}>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact/contactus">Contact Us</Link>
                </div>

                <div className={styles.footerSocials}>
                    <a href="https://www.youtube.com/channel/UCgBJ6HVUV81VvwsWh4kVhSw" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/mass9bro/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://t.me/+821084801445" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane className={styles.icon} />
                    </a>
                </div>

                <Link href="/">
                    <button className={styles.homeButton}>Home</button>
                </Link>

                <div className={styles.footerInfo2}>
                    <p>고유 번호: 339-82-00675</p>
                    <p>인천 다르크 이사장: 최진묵</p>
                    <p>TEL: +82 70-4046-1445</p>
                </div>


                <div className={styles.footerInfo3}>
                    <p>
                        사무실 주소: 미추홀구 독정이로 96, 2층 202호
                    </p>
                </div>


                <div className={styles.footerInfo}>
                    <p>© 2024 Korea DARC Association. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;