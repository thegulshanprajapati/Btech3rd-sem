import React from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Academic Syllabus Portal</span>
            <h1 className={styles.title}>
              Excellence in <span>Computer Science</span> Education
            </h1>
            <p className={styles.subtitle}>
              Access structured exam notes, dynamic code representations, and interactive practice engines designed for RadhaRaman Group of Institutes.
            </p>
          </div>
        </section>

        <section className={styles.subjects}>
          <h2 className={styles.sectionTitle}>Available Subjects</h2>
          <div className={styles.grid}>
            
            {/* CS303 Subject Card */}
            <Link href="/subject/cs303" className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <i className="fa-solid fa-folder-open"></i>
                </div>
                <span className={styles.courseCode}>CS303</span>
              </div>
              <h3 className={styles.cardTitle}>Data Structures</h3>
              <p className={styles.cardDesc}>
                Master linear & non-linear structures: arrays math, dynamic linked list traversals, stack representations, and modulo queue wrapping operations.
              </p>
              <div className={styles.cardFooter}>
                <span>Enter Course</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </Link>

            {/* CS302 Subject Card */}
            <Link href="/subject/cs302" className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <i className="fa-solid fa-shapes"></i>
                </div>
                <span className={styles.courseCode}>CS302</span>
              </div>
              <h3 className={styles.cardTitle}>Discrete Structure</h3>
              <p className={styles.cardDesc}>
                Set algebra proofs, countable/uncountable sets, relations equivalences, posets job-scheduling, and proving techniques.
              </p>
              <div className={styles.cardFooter}>
                <span>Enter Course</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </Link>

            {/* Placeholder / Future Subjects Cards */}
            <div className={`${styles.card} ${styles.disabledCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <i className="fa-solid fa-database"></i>
                </div>
                <span className={styles.courseCode}>CS304</span>
              </div>
              <h3 className={styles.cardTitle}>DBMS</h3>
              <p className={styles.cardDesc}>
                Relational algebras, normalization maps, SQL query optimizations, transactions concurrency, and indexing structures. (Coming soon)
              </p>
              <div className={styles.cardFooter}>
                <span>Locked</span>
                <i className="fa-solid fa-lock"></i>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
