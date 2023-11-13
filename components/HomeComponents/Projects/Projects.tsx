import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const projects = [
    {
        title: 'PWC Technology Solutions',
        src: 'pwc.jpg',
    },
    {
        title: 'RideCo - Transit Labs',
        src: 'rideco.jpeg',
    },
    {
        title: 'Tangam Systems',
        src: 'tangam2.jpg',
    },
];

export default function Index() {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: 'top-=100px',
            end: document.body.offsetHeight - window.innerHeight - 50,
        });
    }, []);

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        alt='project image'
                        priority={true}
                        height={400}
                        width={400}
                    />
                </div>
                <div className={styles.column}>
                    <p>
                        I&quot;ve had the privilege of working in diverse
                        industries as a software developer, each contributing to
                        my growth and expertise.
                    </p>
                </div>
                <div className={styles.column}>
                    <p>
                        From building a dynamic website that determines a
                        company&quot;s security level, to developing a internal
                        tool that speeds up data transfer by thousands of
                        percent, to maintaining a yield-improving casino tool,
                        I&lsquo;ve gathered valuable insights, developed
                        essential skills, and achieved notable milestones.
                    </p>
                </div>
            </div>

            <div className={styles.projectList}>
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            onMouseOver={() => {
                                setSelectedProject(index);
                            }}
                            className={styles.projectEl}
                        >
                            <h2>{project.title}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
