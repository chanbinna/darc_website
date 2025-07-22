'use client';
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { GrNext } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

export default function Navigation({ activeIndex }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state
    const [menuPage, setMenuPage] = useState(1);
    const pathname = usePathname();
    const dropdownRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        Object.values(dropdownRefs.current).forEach(dropdown => {
            if (dropdown) {
                dropdown.style.display = "none";
            }
        });
    }, [pathname]);

    const handleMouseEnter = (key) => {
        if (dropdownRefs.current[key]) {
            dropdownRefs.current[key].style.display = "block";
        }
    };

    const handleMouseLeave = (key) => {
        if (dropdownRefs.current[key]) {
            dropdownRefs.current[key].style.display = "none";
        }
    };

    const isScrolled = scrollPosition > 0 || activeIndex > 0;

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setMenuPage(1); // Reset to the main menu when opening the menu
    };


    const closeMenu = () => {
        setIsMenuOpen(false); // Close the menu
        setMenuPage(1); // Reset to the main menu page
    };



    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.top}>
                <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FcMenu size={30} /> {/* Hamburger icon */}
                </div>

                <Link href="/">
                    <div className={styles.logo}>
                        <img src="/logo2.png" alt="Logo" />
                    </div>
                </Link>
                <div className={styles.link}>
                    <a href="https://www.youtube.com/channel/UCgBJ6HVUV81VvwsWh4kVhSw">YouTube</a>
                    {/* <p> | </p>  <FaYoutube />   <FaInstagram />*/}
                    <span className={styles.lineb}><p> | </p></span>

                    <a href="https://www.instagram.com/mass9bro/">Instagram</a>

                    <span className={styles.lineb}><p> | </p></span>

                    <a href="https://t.me/+821084801445">Telegram</a>
                </div>
            </div>


            <div className={`${styles.fullscreenMenu} ${isMenuOpen ? styles.open : ""}`}>
                <VscClose
                    className={styles.closeButton}
                    size={30}
                    onClick={closeMenu}
                />
                {menuPage === 1 ? (
                    <div className={styles.Firstbuttons}>
                        {/* Buttons instead of list items */}
                        <div>
                            <button className={styles.menuButton} onClick={() => setMenuPage(7)}>Home
                                <span className={styles.nextSign}><GrNext /></span>
                            </button>
                        </div>
                        <div>
                            <button className={styles.menuButton} onClick={() => setMenuPage(2)}>Addictions
                                <span className={styles.nextSign}><GrNext /></span>
                            </button>
                        </div>
                        <div>
                            <button className={styles.menuButton} onClick={() => setMenuPage(3)}>Treatment
                                <span className={styles.nextSign}><GrNext /></span>
                            </button>
                        </div>
                        <div>
                            <button className={styles.menuButton} onClick={() => setMenuPage(4)}>Donations
                                <span className={styles.nextSign}><GrNext /></span>
                            </button>
                        </div>
                        <div>
                            <button className={styles.menuButton} onClick={() => setMenuPage(5)}>About Us
                                <span className={styles.nextSign}><GrNext /></span>
                            </button>
                        </div>
                        <div>
                            <button className={styles.menuButton} onClick={() => setMenuPage(6)}>Contact
                                <span className={styles.nextSign}><GrNext /></span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => setMenuPage(1)} className={styles.backButton}>Back</button>
                        {menuPage === 7 && (
                            <ul>
                                <li><Link href="/about">다르크란?</Link></li>
                                <li><Link href="/about/schedule">Schedule</Link></li>

                                {/* Space between first and second section */}
                                <li><Link href="/review">Our Story</Link></li>
                                <li><Link href="/review/recommend">추천서</Link></li>

                                {/* Another space between the second and third section */}
                                <li><Link href="/living">Living</Link></li>
                            </ul>
                        )}
                        {menuPage === 2 && (
                            <ul>
                                <li><Link href="/addictions">치료 약물</Link></li>
                                <li><Link href="/addictions/medicine/1">각성제</Link></li>
                                <li><Link href="/addictions/medicine/2">진정, 마취제</Link></li>
                                <li><Link href="/addictions/medicine/3">환각제</Link></li>
                                <li><Link href="/addictions/medicine/4">기타 약물</Link></li>
                            </ul>
                        )}
                        {menuPage === 3 && (
                            <ul>
                                <li><Link href="/treatment">중독 재활</Link></li>
                                <li><Link href="/treatment/rehabilitation/1">치료</Link></li>
                                <li><Link href="/treatment/program/1">프로그램</Link></li>
                                <li><Link href="/treatment/law">사법지원</Link></li>
                            </ul>
                        )}
                        {menuPage === 4 && (
                            <ul>
                                <li><Link href="/donations/volunteer">자원봉사</Link></li>
                                <li><Link href="/donations/support">기부</Link></li>
                            </ul>
                        )}
                        {menuPage === 5 && (
                            <ul>
                                <li><Link href="/aboutus/chairman">이사장님 말씀</Link></li>
                                <li><Link href="/aboutus/value">가치</Link></li>
                                <li><Link href="/aboutus/vision">비전</Link></li>
                                <li><Link href="/aboutus/mission">미션</Link></li>
                                <li><Link href="/aboutus/philosophy">철학</Link></li>
                                <li><Link href="/aboutus/his/korea">역사</Link></li>
                                <li><Link href="/aboutus/his/korea" >Korea</Link></li>
                                <li><Link href="/aboutus/his/japan" >Japan</Link></li>
                                <li><Link href="/aboutus/chart">조직도</Link></li>

                            </ul>
                        )}
                        {menuPage === 6 && (
                            <ul>
                                <li><Link href="/contact/contactus">Contact us</Link></li>
                                <li><Link href="/contact/announcement">공지사항</Link></li>
                                <li><Link href="/contact/media">자료실</Link></li>
                                <li><Link href="/contact/resources">Resources</Link></li>
                            </ul>
                        )}
                    </div>
                )}
            </div>

            <div className={styles.bottom}>
                <ul>
                    <li
                        onMouseEnter={() => handleMouseEnter("home")}
                        onMouseLeave={() => handleMouseLeave("home")}
                    >
                        <span>Home</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.home = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/about"><h4>다르크란?</h4></Link>
                                    <Link href="/about/schedule" className={styles.special1}>Schedule</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/review"><h4>Our Story</h4></Link>
                                    <Link href="/review/recommend">추천서</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/living"><h4>Living</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("addictions")}
                        onMouseLeave={() => handleMouseLeave("addictions")}
                    >
                        <span>Addictions</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.addictions = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/addictions"><h4>치료 약물</h4></Link>
                                    <Link href="/addictions/medicine/1">각성제</Link>
                                    <Link href="/addictions/medicine/2">진정, 마취제</Link>
                                    <Link href="/addictions/medicine/3">환각제</Link>
                                    <Link href="/addictions/medicine/4">기타 약물</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("treatment")}
                        onMouseLeave={() => handleMouseLeave("treatment")}
                    >
                        <span>Treatment</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.treatment = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/treatment"><h4>중독 재활</h4></Link>
                                    <Link href="/treatment/rehabilitation/1">치료</Link>
                                    <Link href="/treatment/program/1">프로그램</Link>
                                    <Link href="/treatment/law">사법지원</Link>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("donations")}
                        onMouseLeave={() => handleMouseLeave("donations")}
                    >
                        <span>Donations</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.donations = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/donations/volunteer"><h4>자원봉사</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/donations/support"><h4>기부</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("aboutus")}
                        onMouseLeave={() => handleMouseLeave("aboutus")}
                    >
                        <span>About us</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.aboutus = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/aboutus/chairman"><h4>이사장님 말씀</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/value"><h4>가치</h4></Link>
                                    <Link href="/aboutus/vision">비전</Link>
                                    <Link href="/aboutus/mission">미션</Link>
                                    <Link href="/aboutus/philosophy">철학</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/his/korea"><h4>역사</h4></Link>
                                    <Link href="/aboutus/his/korea" >Korea</Link>
                                    <Link href="/aboutus/his/japan" className={styles.special2}>Japan</Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/aboutus/chart"><h4>조직도</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={() => handleMouseLeave("contact")}
                    >
                        <span>Contact</span>
                        <div className={styles.dropdown} ref={el => dropdownRefs.current.contact = el}>
                            <div className={styles.linkbox}>
                                <div className={styles.column}>
                                    <Link href="/contact/contactus"><h4>Contact us</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/contact/announcement"><h4>공지사항</h4></Link>
                                    <Link href="/contact/media"><h4>자료실</h4></Link>
                                </div>
                                <div className={styles.column}>
                                    <Link href="/contact/resources"><h4>Resources</h4></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}