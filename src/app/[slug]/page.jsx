import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, ratione? </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" fill alt="" className={styles.avatar}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Jogn Due</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                  
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" fill alt="" className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda officiis iusto facere quaerat est consequatur quae aperiam natus fuga?

                        </p>
                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, natus.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam impedit error fugiat atque molestiae inventore, explicabo quos perferendis temporibus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio eum id aut eos magnam quo dolorem eius reiciendis nostrum magni illo nihil nulla earum, cumque tempore nemo aliquid qui.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;