<<<<<<< HEAD
import React from 'react';

const MenuCategory = () => {
    return (
        <div>
            this is a MenuCategory file
        </div>
=======
import Link from 'next/link';
import React from 'react';
import styles from '../Menu/menu.module.css'

const MenuCategory = () => {
    return (
        <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>Style</Link>
        <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>Travel</Link>
        <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>Fashion</Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>food</Link>
        <Link href="/blog?cat=code" className={`${styles.category} ${styles.coding}`}>Code</Link>
       </div>
>>>>>>> 018d31409035ffb0d5b5f194b26db5e7e1fef9e2
    );
};

export default MenuCategory;