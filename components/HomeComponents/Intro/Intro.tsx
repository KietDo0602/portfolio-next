'use client';
import React, { useRef, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Index() {
    const backgroundRef = useRef(null);
    const introImageRef = useRef(null);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline({
          scrollTrigger: {
              trigger: document.documentElement,
              scrub: true,
              start: "top",
              end: "+=500px",
          },
      })
      timeline
        .from(backgroundRef.current, {clipPath: `inset(15%)`})
        .to(introImageRef.current, {height: "400px", width: "400px"}, 0)
    }, []);

    return (
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={backgroundRef}>
                <Image
                    src={'/images/background-2.jpeg'}
                    fill={true}
                    alt='background image'
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                <div ref={introImageRef} className={styles.introImage}>
                    <Image
                        src={'/images/zima.jpg'}
                        alt='intro image'
                        fill={true}
                        priority={true}
                    />
                </div>
                <h1 data-scroll data-scroll-speed='0.7'>
                    KIET DO
                </h1>
            </div>
        </div>
    );
}
