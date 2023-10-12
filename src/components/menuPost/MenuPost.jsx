import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../Menu/menu.module.css";

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
      {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, aliquid.
          </h3>
          <p className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </p>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
      {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, aliquid.
          </h3>
          <p className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </p>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
      {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, aliquid.
          </h3>
          <p className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </p>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, aliquid.
          </h3>
          <p className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
