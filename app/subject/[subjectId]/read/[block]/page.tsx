"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Header from "../../../../../components/layout/Header";
import { cs303Units } from "../../../../../data/cs303/units";
import { cs302Units } from "../../../../../data/cs302/units";
import styles from "./page.module.css";

export default function ReadingView() {
  const { subjectId, block } = useParams();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle initial hydration where params are not yet resolved
  if (!subjectId || !block) {
    return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", color: "var(--text-muted)", fontFamily: "sans-serif" }}>Loading study material...</div>;
  }

  const isCS303 = subjectId === "cs303";
  const isCS302 = subjectId === "cs302";

  // Validate parameters once resolved
  if (!isCS303 && !isCS302) {
    notFound();
  }

  if (isCS303 && (block !== "unit1" && block !== "unit2" && block !== "unit3" && block !== "unit4")) {
    notFound();
  }

  if (isCS302 && block !== "unit1") {
    notFound();
  }

  const unitsList = isCS303 ? cs303Units : cs302Units;
  const unit = unitsList.find(u => u.id === block);
  if (!unit) {
    notFound();
  }

  const [activeId, setActiveId] = useState<string>(() => {
    return unit.topics[0]?.subtopics[0]?.id || "";
  });

  // Set up Scroll-Spy and sidebar auto-scrolling
  useEffect(() => {
    const handleScroll = () => {
      const activeSection = document.getElementById("reading-content-body");
      if (!activeSection) return;

      const headers = activeSection.querySelectorAll("h2, h3");
      let currentTopicId = "";

      const isAtTop = window.scrollY < 50;
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 15);
      const canScroll = document.documentElement.scrollHeight > window.innerHeight + 50;

      if (isAtTop && headers.length > 0) {
        currentTopicId = headers[0].getAttribute("id") || "";
      } else if (isAtBottom && canScroll && headers.length > 0) {
        currentTopicId = headers[headers.length - 1].getAttribute("id") || "";
      } else {
        headers.forEach(header => {
          const rect = header.getBoundingClientRect();
          if (rect.top < 150) {
            currentTopicId = header.getAttribute("id") || "";
          }
        });
      }

      if (currentTopicId && currentTopicId !== activeId) {
        setActiveId(currentTopicId);
        
        // Auto-scroll sidebar item into view
        const activeLink = document.querySelector(`[data-sidebar-id="${currentTopicId}"]`);
        if (activeLink) {
          activeLink.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [block, activeId, unit]);

  // Smooth scroll handler to target element
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Copy code handler
  const handleCopyCode = (e: React.MouseEvent<HTMLButtonElement>, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    const btn = e.currentTarget;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-check" style="color: var(--accent)"></i> Copied!`;
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 2000);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.layout}>
        {/* Left Sidebar */}
        <aside className={styles.sidebar} ref={sidebarRef}>
          <div className={styles.sidebarSticky}>
            <Link href={`/subject/${subjectId}`} className={styles.backButton}>
              <i className="fa-solid fa-arrow-left"></i> Back to Dashboard
            </Link>
            
            <h2 className={styles.sidebarTitle}>{isCS303 ? "CS303 Data Structures" : "CS302 Discrete Structures"}</h2>
            <div className={styles.unitNameBadge}>Unit {unit.number} Index</div>

            <div className={styles.menuWrapper}>
              {unit.topics.map(topic => (
                <div key={topic.id} className={styles.menuGroup}>
                  <div className={styles.menuHeader}>{topic.title}</div>
                  {topic.subtopics.map(sub => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      data-sidebar-id={sub.id}
                      onClick={(e) => handleMenuClick(e, sub.id)}
                      className={`${styles.menuItem} ${activeId === sub.id ? styles.active : ""} ${
                        sub.id !== topic.subtopics[0].id ? styles.subItem : ""
                      }`}
                    >
                      <span>{sub.title}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Reading Panel */}
        <main className={styles.contentPanel} id="reading-content-body">
          <div className={styles.readingHeader}>
            <span className={styles.contentBadge}>UNIT {unit.number} DETAILED STUDY MATERIAL</span>
            <h1 className={styles.mainTitle}>{unit.title}</h1>
            <p className={styles.mainDesc}>{unit.description}</p>
            <hr className={styles.divider} />
          </div>

          {/* Iterate Topics and Subtopics */}
          {unit.topics.map(topic => (
            <div key={topic.id} className={styles.topicSection}>
              {topic.subtopics.map((sub, idx) => {
                const isFirst = idx === 0;
                return (
                  <div key={sub.id} className={styles.subtopicBlock}>
                    {isFirst ? (
                      <h2 id={sub.id} className={styles.h2Heading}>
                        {sub.title}
                      </h2>
                    ) : (
                      <h3 id={sub.id} className={styles.h3Heading}>
                        {sub.title}
                      </h3>
                    )}
                    
                    {/* Render static HTML dynamically */}
                    <div 
                      className={styles.htmlContent}
                      dangerouslySetInnerHTML={{ __html: sub.content }}
                    />
                  </div>
                );
              })}
            </div>
          ))}

          {/* Practice Set Anchor at the end of the Unit */}
          <div className={styles.practiceEndBox}>
            <h3>Ready to test your knowledge?</h3>
            <p>Challenge yourself with the dynamic Unit {unit.number} practice quiz before moving to the next section.</p>
            <Link href={`/subject/${subjectId}/practice/${unit.number}`} className={styles.practiceEndBtn}>
              <i className="fa-solid fa-circle-play"></i> Start Practice Set
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
