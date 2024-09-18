'use client';

import Head from 'next/head';
import { useEffect } from 'react';
import styles from 'pages/index.module.css';
import Intro from '../components/HomeComponents/Intro/Intro';
import Description from '../components/HomeComponents/Description/Description';
import Projects from '../components/HomeComponents/Projects/Projects';
import { GoogleTagManager } from '@next/third-parties/google'

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Kiet Do</title>
                <link rel='icon' href='/kd.svg' />
                <GoogleTagManager gtmId="GTM-PPRBQBLX" />
                <meta name="description" content="I'm Kiet, Software Engineer @ Manulife." key="desc" />
                <meta property="og:title" content="Kiet Do" />
                <meta property="og:description" content="Welcome to my portfolio!" />
                <meta property="og:image" content="../public/kd.svg" />
                <meta property="og:url" content="https://www.kietdo.io/" />
                <meta name="twitter:card" content="../public/kd.svg" />
                <meta name="twitter:title" content="Kiet Do" />
                <meta name="twitter:description" content="Welcome to my portfolio!" />
                <meta name="twitter:image" content="../public/kd.svg" />
            </Head>

            <main>
                <Intro />
                <Description />
                <Projects />
            </main>
        </div>
    );
}
