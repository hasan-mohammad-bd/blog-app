import React from 'react';
import styles from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';
import MenuPost from '../menuPost/MenuPost';
import MenuCategory from '../menuCategory/menuCategory';
const Menu = () => {
    return (
        <div className={styles.container}>

            {/* Most Popular */}
             <h2 className={styles.subtitle}>{"Thats hot"}</h2>
           <h1 className={styles.title}>Most Popular</h1>
            <MenuPost withImage={false}/>
           {/* catagories */}
           <h2 className={styles.subtitle}>Discover by the </h2>
           <h1 className={styles.title}>Categories</h1>
           <MenuCategory/>


           {/* Chosen by the Editor Section */}
           <h2 className={styles.subtitle}>{"Chosen by the editor"}</h2>
           <h1 className={styles.title}>Editors Pick</h1>
            <MenuPost withImage={true}/>

        </div>
    );
};

export default Menu;