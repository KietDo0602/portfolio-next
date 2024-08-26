'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import styles from './styles.module.css';

export default function Projects() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <div>
            <Head>
                <title>Projects</title>
                <link rel='icon' href='/kd.svg' />
            </Head>
            <div className={styles.container}>
                <div className={styles.title}>Projects</div>
                <div className={styles.card_container}>
                    <div className={styles.column}>
                        <div className={`${styles.card} ${styles.first}`}>
                            <div className={styles.imageWrapper}>
                                <img
                                  className={styles.image}
                                  alt='Image 1'
                                />
                            </div>
                            <h1>Kaptcha</h1>
                            <p>Status: Finished</p>
                            <p>A unique take on Catpchas...</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img 
                                  className={styles.image}
                                  alt='Image 2' 
                                />
                            </div>
                            <h1>
                                Rasberry Pi - Aiding Object detection with
                                thermal camera
                            </h1>
                            <p>Status: Finished</p>
                            <p>
                                Usually we used images and videos gettings
                                trained to recognize objects, but we should
                                integrate a thermal camera which might improve
                                its accuracy...
                            </p>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img 
                                  className={styles.image}
                                  alt='Image 3' 
                                />
                            </div>
                            <h1>Vim Vault - Directory Navigator</h1>
                            <p>Status: Work In Progress</p>
                            <p>Navigate folders and directory in Vim.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img 
                                  className={styles.image}
                                  alt='Image 4' 
                                />
                            </div>
                            <h1>
                                Dynamic Tool to determine cybersecurity levels
                            </h1>
                            <p>Status: Finished</p>
                            <p>
                                A dynamic tool and quiz that aims to determine a
                                company&quot;s cybersecurity levels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
