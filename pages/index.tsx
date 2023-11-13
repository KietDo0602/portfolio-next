'use client';

import Head from 'next/head';
import { useEffect } from 'react';
import styles from 'pages/index.module.css';
import { Heading } from '@chakra-ui/react';
import Intro from '../components/HomeComponents/Intro/Intro';
import Description from '../components/HomeComponents/Description/Description';
import Projects from '../components/HomeComponents/Projects/Projects';

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Kiet Do</title>
                <link rel='icon' href='/kd.svg' />
            </Head>

            <main>
                <Intro />
                <Description />
                <Projects />
            </main>
        </div>
    );
}
