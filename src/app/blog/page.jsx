import CardList from '@/components/CardList/CardList';
import Menu from '@/components/Menu/Menu';
import React from 'react';
import styles from './blogPage.module.css';


const BlogPage = ({searchParams}) => {

    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;
    console.log(searchParams); 
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{cat} Blogs</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu/>
            </div>
            
        </div>
    );
};

export default BlogPage;