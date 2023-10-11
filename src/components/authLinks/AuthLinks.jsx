"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const status = "notauthenticated";
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

                {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          (<Link href="/write">Write</Link>)<span>Logout</span>
        </>
      )}
                
            </div>
        </div>
      )}
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          (<Link href="/write">Write</Link>)<span>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
