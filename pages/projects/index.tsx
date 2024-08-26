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
                                  src='https://firebasestorage.googleapis.com/v0/b/kietdo-580f0.appspot.com/o/KaptchaProject.jpg?alt=media&token=39c438b9-9f7c-494f-8070-c05f38c8e3c2'
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
                                  src='https://firebasestorage.googleapis.com/v0/b/kietdo-next.appspot.com/o/raspberry.jpg?alt=media&token=2b39d4ed-2b4a-4d99-a474-8d368d57d8c1'
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
                                  src='https://firebasestorage.googleapis.com/v0/b/kietdo-next.appspot.com/o/vim-vault.jpg?alt=media&token=ed1f0058-fbcd-4102-923e-25623bed91c3'
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
                                  src='https://firebasestorage.googleapis.com/v0/b/kietdo-next.appspot.com/o/cybersecurity.jpg?alt=media&token=fcd4b6de-1b99-46fd-87b8-7dc888f85eae'
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
