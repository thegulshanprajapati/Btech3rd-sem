"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <i className="fa-solid fa-graduation-cap"></i>
          <span>NotesPortal</span>
        </Link>
        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle Theme"
          title={theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        >
          <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
        </button>
      </div>
    </header>
  );
}
