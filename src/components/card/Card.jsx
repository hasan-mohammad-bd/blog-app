import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({item}) => {
  const {slug, title, desc, img, view, catSlug, userEmail,id} = item;
  console.log(item);
  return (
    <div key={id} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={img} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
            <span className={styles.date}>{item.createdAt.substring(0,10)} -</span>
            <span className={styles.category}> {item.catSlug.toUpperCase()}</span>
        </div>
       <Link href={`/posts/${item.slug}`}> <h1>{title}</h1></Link>
        <p className={desc}>{`${item.desc.substring(0,30)}...`}</p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
