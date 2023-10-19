import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({item}) => {
  const {slug, title, desc, img, view, catSlug, userEmail,id} = item;
  return (
    <div key={id} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={img} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
            <span className={styles.date}>11.02.2023 -</span>
            <span className={styles.category}> {item.catSlug.toUpperCase()}</span>
        </div>
       <Link href="/"> <h1>{title}</h1></Link>
        <p className={desc}>{item.desc}</p>
        <Link className={styles.link} href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
