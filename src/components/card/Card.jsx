import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
            <span className={styles.date}>11.02.2023 -</span>
            <span className={styles.category}> CULTURE</span>
        </div>
       <Link href="/"> <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, corrupti.</h1></Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sequi nemo dicta suscipit, quod architecto quisquam ab sed a, reiciendis provident autem quibusdam perferendis dolorum illum? Ex dolorum labore ipsam!</p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
