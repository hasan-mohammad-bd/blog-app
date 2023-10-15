"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {data, status} = useSession();


  return (
    <>

      <div className={styles.burger} onClick={()=>setOpen(prev => !prev)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.burger} >
            <div className={styles.responsiveMenu}>
                <Link href="/">Homepage</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>

                {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>) : (
        <>
          <Link href="/write">Write</Link><span onClick={signOut}>Logout</span>
        </>
      )}
                
            </div>
        </div>
      )}
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link><span onClick={signOut}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
