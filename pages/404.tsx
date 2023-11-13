import React from 'react';
import styles from './404.module.css';
import Head from 'next/head';

const NotFoundPage = () => {
    return (
        <div className={styles.not_found_page}>
            <Head>
                <title>404</title>
                <link rel='icon' href='/kd.svg' />
            </Head>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;
