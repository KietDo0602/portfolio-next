import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = [
    "I'm Kiet!",
    'Software Developer @ Waterloo',
    'Strong work ethic, laid-back approach',
    'Robots, Space and Vim enthusiast 🚂🌌💻',
    'Three Body Problem, LD+R, The Martian, We Are Legion, Subnautica',
];

export default function Description() {
    return (
        <div className={styles.description}>
            {phrases.map((phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>;
            })}
        </div>
    );
}

function AnimatedText({ children }) {
    const text = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: '0px bottom',
                end: 'bottom+=400px bottom',
            },
            opacity: 0,
            left: '-200px',
            ease: 'power3.Out',
        });
    }, []);

    return <p ref={text}>{children}</p>;
}
