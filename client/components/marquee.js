import React from 'react';
import styles from './marquee.module.css'; // Import the CSS module

const Marquee = () => {
    const logos = [
        '/marquee1.png',
        '/marquee3.png',
        '/marquee4.png',
        '/marquee5.png',
        '/marquee6.png',
        '/marquee2.png',
        '/marquee8.png',
        '/marquee9.png',
        '/marquee7.png',
        // Add more items as needed
    ];

    return (
        <div className={styles.slider}>
            <div className={styles.Marquee}>
                {
                    logos.concat(logos).map((el, index) => (
                        <div className={styles.imageGroup} key={index}>
                            <img src={el} alt={`logo-${index}`} />
                        </div>
                    ))
                }
            </div>
            <div className={styles.Marquee}>
                {
                    logos.concat(logos).map((el, index) => (
                        <div className={styles.imageGroup} key={index}>
                            <img src={el} alt={`logo-${index}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Marquee;