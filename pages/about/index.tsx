import Head from 'next/head';
import styles from './styles.module.css';
import { useEffect } from 'react';

export default function ExperiencePage() {
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
            <title>Experience</title>
            <link rel='icon' href='/kd.svg' />
          </Head>
          <header className={styles.header}>
            <h1>About Me</h1>
            <h2>Software Engineering</h2>
            <h3>University of Waterloo @ 2025</h3>
          </header>
          <section className={styles.content}>
            <div className={styles.about}>
              <h2>Interests & Hobbies</h2>
              <ul className={styles.aboutList}>
                <li className={styles.item}>Programming and Software Development</li>
                <li className={styles.item}>Statistics and Machine Learning</li>
                <li className={styles.item}>Embedded Systems</li>
                <li className={styles.item}>Cybersecurity</li>
                <li className={styles.item}>Gaming and Game Development</li>
                <li className={styles.item}>Football, F1, Basketball</li>
                <li className={styles.item}>Reading Sci-fi, podcasts</li>
              </ul>
            </div>
            <div className={styles.books}>
              <h2>My Favorite Books</h2>
              <ul className={styles.aboutList}>
                <li className={styles.item}><em>Three Body Problem</em> by Cixin Liu</li>
                <li className={styles.item}><em>Clean Code</em> by Robert C. Martin</li>
                <li className={styles.item}><em>Project Hail Mary</em> by Andy Weir</li>
                <li className={styles.item}><em>The Pragmatic Programmer</em> by Andrew Hunt and David Thomas</li>
                <li className={styles.item}><em>Dune</em> by Frank Herbert</li>
                <li className={styles.item}><em>Code Complete</em> by Steve McConnell</li>
                <li className={styles.item}><em>The Martian</em> by Andy Weir</li>
                <li className={styles.item}><em>Bobiverse</em> by Andy Weir</li>
              </ul>
            </div>
          </section>
        </div>
    );
}
