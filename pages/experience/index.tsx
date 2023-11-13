import Head from 'next/head';
import styles from './styles.module.css';
import { useEffect } from 'react';
import { Image, Link } from '@chakra-ui/react';

export default function ExperiencePage() {
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
                <title>Experience</title>
                <link rel='icon' href='/kd.svg' />
            </Head>
            <div className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.mainTitle}>Work Experience</h1>
                    <div className={styles.experience}>
                        <Link
                            href='https://www.tangamsystems.com/'
                            isExternal
                            _hover={{ textDecoration: 'none' }}
                        >
                            <div className={styles.job}>
                                <Image
                                    src='/images/tangam2.jpg'
                                    className={styles.company_image}
                                    alt='Tangam Logo'
                                />
                                <div className={styles.job_info}>
                                    <h2>Softare Developer</h2>
                                    <p>Tangam Systems</p>
                                    <p className={styles.date}>
                                        September 2023 - December 2023
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href='https://www.rideco.com/'
                            isExternal
                            _hover={{ textDecoration: 'none' }}
                        >
                            <div className={styles.job}>
                                <Image
                                    src='/images/rideco.jpeg'
                                    className={styles.company_image}
                                    alt='RideCo Logo'
                                />
                                <div className={styles.job_info}>
                                    <h2>Full-Stack Sofware Developer</h2>
                                    <p>RideCo - Transit Labs</p>
                                    <p className={styles.date}>
                                        January 2023 - April 2023
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href='https://www.pwc.com/gx/en.html'
                            isExternal
                            _hover={{ textDecoration: 'none' }}
                        >
                            <div className={styles.job}>
                                <Image
                                    src='/images/pwc.jpg'
                                    className={styles.company_image}
                                    alt='PWC Logo'
                                />
                                <div className={styles.job_info}>
                                    <h2>
                                        Software Developer - Front-End Team Lead
                                    </h2>
                                    <p>PWC Technology Solutions</p>
                                    <p className={styles.date}>
                                        September 2021 - December 2021
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
