'use client'
import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';
const ThemeToggle = () => {

    const {theme} = useContext(ThemeContext);
    return (
        <div className={styles.container}>
            <Image src="/moon.png" width={14} height={14} alt="" />
            <div className={styles.ball}></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    );
};

export default ThemeToggle;