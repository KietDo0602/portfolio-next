'use client';

import Head from 'next/head';
import { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import { Select } from '@chakra-ui/react';

const cards_arr = [
    { title: 'Vim', type: 'General', level: 'Intermediate' },
    { title: 'React', type: 'Front-end', level: 'Experienced' },
    { title: 'Next.js', type: 'Front-end', level: 'Experienced' },
    { title: 'AngularJS', type: 'Front-end', level: 'Experienced' },
    { title: 'TypeScript', type: 'Front-end', level: 'Experienced' },
    { title: 'HTML', type: 'Front-end', level: 'Experienced' },
    { title: 'Python', type: 'Back-end', level: 'Intermediate' },
    { title: 'Django', type: 'Back-end', level: 'Intermediate' },
    { title: 'JavaScript', type: 'Front-end', level: 'Experienced' },
    { title: 'SQL', type: 'Back-end', level: 'Experienced' },
    { title: 'MSSQL', type: 'Back-end', level: 'Experienced' },
    { title: 'MongoDB', type: 'Back-end', level: 'Experienced' },
    { title: 'Node.js', type: 'Back-end', level: 'Experienced' },
    { title: 'Git', type: 'General', level: 'Experienced' },
    { title: 'Agile Scrum', type: 'General', level: 'Experienced' },
    { title: 'Pandas', type: 'General', level: 'Intermediate' },
    { title: 'Gerrit', type: 'General', level: 'Experienced' },
    { title: 'CSS', type: 'Front-end', level: 'Experienced' },
    { title: 'Java', type: 'Back-end', level: 'Experienced' },
    { title: 'Java Spring', type: 'Back-end', level: 'Experienced' },
    { title: 'ASP.NET', type: 'Back-end', level: 'Intermediate' },
    { title: 'C++', type: 'Software', level: 'Intermediate' },
    { title: 'C#', type: 'Software', level: 'Intermediate' },
];

export default function SkillsPage() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBy, setFilterBy] = useState('All');

    const filteredList = cards_arr.filter((item) => {
        if (filterBy === 'All' && searchTerm === '') {
            return true;
        } else if (filterBy === 'All') {
            return (
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.type.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            return (
                (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.level
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    item.type
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())) &&
                item.type.toLowerCase().includes(filterBy.toLowerCase())
            );
        }
    });

    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event: any) => {
        setFilterBy(event.target.value);
    };

    return (
        <div>
            <Head>
                <title>Skills</title>
                <link rel='icon' href='/kd.svg' />
            </Head>
            <div className={styles.container}>
                <div className={styles.search_filter}>
                    <input
                        className={styles.search_bar}
                        type='text'
                        value={searchTerm}
                        placeholder='Search'
                        onChange={handleSearchChange}
                    />
                    <Select
                        className={styles.select}
                        id='typeFilter'
                        onChange={handleFilterChange}
                        variant='outline'
                        size='lg'
                        bg='black'
                        borderColor='white'
                        color='white'
                        width='200px'
                        focusBorderColor='#4BBEE3'
                    >
                        <option
                            style={{ color: 'white', backgroundColor: 'black' }}
                            value='All'
                        >
                            All
                        </option>
                        <option
                            style={{ color: 'white', backgroundColor: 'black' }}
                            value='General'
                        >
                            General
                        </option>
                        <option
                            style={{ color: 'white', backgroundColor: 'black' }}
                            value='Front-end'
                        >
                            Front-end
                        </option>
                        <option
                            style={{ color: 'white', backgroundColor: 'black' }}
                            value='Back-end'
                        >
                            Back-end
                        </option>
                        <option
                            style={{ color: 'white', backgroundColor: 'black' }}
                            value='Software'
                        >
                            Software
                        </option>
                    </Select>
                </div>
                <div className={styles.grid_container} id='cardGrid'>
                    {filteredList.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.type}</p>
                            <p>{item.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
