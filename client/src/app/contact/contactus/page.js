'use client';


import React, { useState, useEffect } from 'react';
import Navigation from "../../../../components/navigation";
import styles from "./contactus.module.css";
import Link from "next/link";
import { GoX } from "react-icons/go";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import Footer from '../../../../components/footer';
import ScrollToTop from '../../../../components/ScrollToTop';

export default function Mission() {
    const [showEffects, setShowEffects] = useState(false);

    const toggleEffects = () => {
        setShowEffects(!showEffects);
    };

    useEffect(() => {
        // Load the WhatTime widget script
        const script = document.createElement('script');
        script.src = "https://assets.whattime.co.kr/widget/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup the script on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <ScrollToTop />
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Contact Us.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/contact/contactus">Contact</Link>
                            <p>&gt;</p>
                            <Link href="/contact/contactus"><h4>Contact Us.</h4></Link>
                        </div>
                    </div>

                    <div className={styles.textbox}>
                        <h2 className={styles.textBold}>운영시간: 10:00 - 18:00</h2>
                        <ul>
                            <li>전화 문의: 070-4046-1445</li>
                            <li>기록해주신 문의와 상담내용은 원활한 상담을 위한 목적으로만 사용되며, 모든 내용은 비밀이 보장됩니다.</li>
                            <li>상담 비용은 60분에 10만원입니다. 상담 비용은 마약중독연구소 연구비용으로 사용됩니다.</li>
                            <li>입금 계좌: 국민은행 20840104388688</li>
                            <li>공휴일은 휴무입니다.</li>
                        </ul>
                    </div>

                    {/* <div style={{ marginTop: "40px" }}>
                        <div
                        className="whattime-inline-widget"
                            data-url="https://whattime.co.kr/chanbinna/1h"
                            data-text-color="#1a1a1a"
                            data-button-color="#244186"
                            data-background-color="#ffffff"
                            style={{ minWidth: "1200px", height: "700px" }}
                        ></div>
                        <link href="https://assets.whattime.co.kr/widget/widget.css" rel="stylesheet" />
                    </div> */}


                    <div className={styles.widgetwrapper}>
                        <div
                            className="whattime-inline-widget"
                            data-url="https://whattime.co.kr/koreadarc01/1h2"
                            data-text-color="#1a1a1a"
                            data-button-color="#244186"
                            data-background-color="#ffffff"
                            style={{ width: "100%", height: "700px" }}
                        ></div>
                        <link href="https://assets.whattime.co.kr/widget/widget.css" rel="stylesheet" />
                    </div>



                    <div className={styles.effect}>
                        <hr className={styles.solid} />
                        <div className={styles.oneline}>
                            <div>
                                <h2>개인정보 수집 및 이용에 대한 안내</h2>
                            </div>
                            <button className={styles.toggleButton} onClick={toggleEffects}>
                                {showEffects ? <SlArrowUp /> : <SlArrowDown />}
                            </button>
                        </div>
                        <div className={`${styles.effectsContent} ${showEffects ? styles.show : ''}`}>
                            <p>다르크협회 기업/단체 및 개인의 정보 수집 및 이용 등 처리에 있어 아래의 사항을 관계 법령에 따라 안내 드립니다. <br />
                            </p>
                            <ol>
                                <li>정보수집의 이용 목적: 온라인 문의/신청</li>
                                <li>수집/이용 항목: 성함, 연락처, 이메일</li>
                                <li>보유 및 이용기간: 프로그램 종료 후 6개월, 정보제공자의 삭제 요청시 즉시</li>
                                <li>개인정보처리담당: 전화: / 이메일: koreadarc01@gmail.com</li>
                            </ol>
                        </div>
                    </div>

                    {/* Embed the WhatTime widget here */}

                </div>
                <Footer />
            </main>
        </div>
    );
}