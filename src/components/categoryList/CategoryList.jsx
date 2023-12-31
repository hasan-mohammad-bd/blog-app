import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";
const getData = async () => {
  const res = await fetch('https://blog-app-ochre-kappa.vercel.app/api/categories', {
    cache: "no-cache",
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
  
}
const CategoryList = async () => {
  const data = await getData()


  return (
    <div className={`${styles?.container} category-list`}>
      <h1 className={styles?.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item)=> (
            <Link key={item?._id} href={`/blog?cat=${item?.slug}`} className={`${styles?.category} ${styles[item?.slug]}`}>
            {item.img && <Image
              src={item?.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />}
            {item?.title.charAt(0).toUpperCase() + item?.title.slice(1)}
          </Link>
        ))}
        

      </div>
    </div>
  );
};

export default CategoryList;
