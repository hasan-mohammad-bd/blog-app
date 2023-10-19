"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      className={styles.container}
      onClick={toggle}
    >
      <Image src="/moon.png" width={14} height={14} alt="" />
      <div
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
        className={styles.ball}
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
