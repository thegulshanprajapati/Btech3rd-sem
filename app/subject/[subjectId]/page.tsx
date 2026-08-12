import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/layout/Header";
import { cs303Units } from "../../../data/cs303/units";
import { cs303Formulas, cs303Complexities } from "../../../data/cs303/revision";
import { cs303Questions } from "../../../data/cs303/questions";

// CS302 imports
import { cs302Units } from "../../../data/cs302/units";
import { cs302Formulas, cs302Complexities } from "../../../data/cs302/revision";
import { cs302Questions } from "../../../data/cs302/questions";

import styles from "./page.module.css";

export function generateStaticParams() {
  return [{ subjectId: "cs303" }, { subjectId: "cs302" }];
}

interface SubjectDashboardProps {
  params: Promise<{ subjectId: string }>;
}

export default async function SubjectDashboard({ params }: SubjectDashboardProps) {
  const resolvedParams = await params;
  const isCS303 = resolvedParams.subjectId === "cs303";
  const isCS302 = resolvedParams.subjectId === "cs302";

  if (!isCS303 && !isCS302) {
    notFound();
  }

  // Load subject-specific dynamic data structures
  const units = isCS303 ? cs303Units : cs302Units;
  const formulas = isCS303 ? cs303Formulas : cs302Formulas;
  const complexities = isCS303 ? cs303Complexities : cs302Complexities;
  const questions = isCS303 ? cs303Questions : cs302Questions;
  const subjectCode = resolvedParams.subjectId.toUpperCase();
  const subjectName = isCS303 ? "Data Structures" : "Discrete Structures";

  const getQuestionCount = (unitNum: number) => {
    if (isCS303) {
      if (unitNum === 1) {
        return questions.filter(q => q.topicId.startsWith("c-") || q.topicId.startsWith("ds-") || q.topicId.startsWith("array-") || q.topicId.startsWith("linked-") || q.topicId.startsWith("singly-") || q.topicId.startsWith("circular-") || q.topicId.startsWith("doubly-") || q.topicId.startsWith("poly-")).length;
      } else if (unitNum === 2) {
        return questions.filter(q => q.topicId.startsWith("stack-") || q.topicId.startsWith("evaluations-") || q.topicId.startsWith("queue-") || q.topicId.startsWith("circular-queue-") || q.topicId.startsWith("deque-") || q.topicId.startsWith("priority-queue-") || q.topicId.startsWith("simulation-")).length;
      } else if (unitNum === 3) {
        return questions.filter(q => q.topicId.startsWith("tree-") || q.topicId.startsWith("bst-") || q.topicId.startsWith("avl-") || q.topicId.startsWith("heaps-") || q.topicId.startsWith("advanced-")).length;
      } else {
        return questions.filter(q => q.topicId.startsWith("tree-") || q.topicId.startsWith("bst-") || q.topicId.startsWith("avl-") || q.topicId.startsWith("heaps-") || q.topicId.startsWith("advanced-") || q.topicId.startsWith("graph-")).length;
      }
    } else {
      // CS302 discrete math filters
      return questions.filter(q => q.topicId.startsWith("countable-") || q.topicId.startsWith("equivalence-") || q.topicId.startsWith("pigeonhole-") || q.topicId.startsWith("induction-") || q.topicId.startsWith("set-") || q.topicId.startsWith("relation-") || q.topicId.startsWith("function-") || q.topicId.startsWith("pigeonhole") || q.topicId.startsWith("induction") || q.topicId.startsWith("contradiction")).length;
    }
  };

  const u1Vvi = questions.filter(q => q.id.startsWith("q-u1-"));
  const u2Vvi = questions.filter(q => q.id.startsWith("q-u2-"));
  const u3Vvi = questions.filter(q => q.id.startsWith("q-u3-"));

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.backLink}>
          <Link href="/">
            <i className="fa-solid fa-arrow-left"></i> Back to Courses
          </Link>
        </div>

        <header className={styles.header}>
          <span className={styles.courseBadge}>COURSE DATABASE</span>
          <h1 className={styles.title}>{subjectCode}: {subjectName}</h1>
          <p className={styles.subtitle}>
            Comprehensive dashboard to access core study units, dynamic pointer representations, practice tests, and consolidated viva interview guides.
          </p>
        </header>

        {/* Section 1: Study Blocks */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Syllabus Study Units</h2>
          <div className={styles.unitsGrid}>
            {units.map((unit) => (
              <div key={unit.id} className={styles.unitCard}>
                <div className={styles.unitCardTop}>
                  <div className={styles.unitNumberBadge}>Unit {unit.number}</div>
                  <h3 className={styles.unitTitle}>{unit.title}</h3>
                  <p className={styles.unitDesc}>{unit.description}</p>
                </div>
                <div className={styles.unitActions}>
                  <Link href={`/subject/${resolvedParams.subjectId}/read/${unit.id}`} className={styles.readBtn}>
                    <i className="fa-solid fa-book-open"></i> Read Notes
                  </Link>
                  <Link href={`/subject/${resolvedParams.subjectId}/practice/${unit.number}`} className={styles.practiceBtn}>
                    <i className="fa-solid fa-circle-play"></i> Practice Set ({getQuestionCount(unit.number)} Qs)
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: VVI Questions Database */}
        <section className={styles.section} id="vvi-database">
          <div className={styles.sectionHeaderLine}>
            <h2 className={styles.sectionHeading}>
              <i className="fa-solid fa-star" style={{ color: "var(--accent)" }}></i> VVI Exam Questions Database
            </h2>
            <p className={styles.sectionSubText}>Review high-frequency theoretical definitions and algorithms compiled for viva examinations.</p>
          </div>

          <div className={styles.vviGrid}>
            {isCS303 ? (
              <>
                <div className={styles.vviCard}>
                  <div className={styles.vviCardHeader}>
                    <i className="fa-solid fa-bookmark"></i> Unit I VVI Database ({u1Vvi.length} Questions)
                  </div>
                  <div className={styles.vviContent}>
                    <ol className={styles.vviList}>
                      <li>
                        <strong>What is a pointer? How is it different from an ordinary variable?</strong>
                        <p>A pointer stores the memory address of another variable, whereas an ordinary variable stores data values directly.</p>
                      </li>
                      <li>
                        <strong>Explain differences between contiguous and non-contiguous allocations.</strong>
                        <p>Contiguous (Arrays) store elements consecutively in memory allowing O(1) access. Non-contiguous (Lists) scatter nodes connected via pointer links requiring O(n) linear traversals.</p>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className={styles.vviCard}>
                  <div className={styles.vviCardHeader}>
                    <i className="fa-solid fa-bookmark"></i> Unit II VVI Database ({u2Vvi.length} Questions)
                  </div>
                  <div className={styles.vviContent}>
                    <ol className={styles.vviList}>
                      <li>
                        <strong>Define Stacks and explain LIFO principle with operations.</strong>
                        <p>A stack is a linear data structure working on Last-In-First-Out basis. Main operations include push (insert at top) and pop (remove from top) operating in O(1).</p>
                      </li>
                      <li>
                        <strong>What is a Circular Queue and why is it preferred over a simple linear queue?</strong>
                        <p>A circular queue connects the last position back to the first to prevent index memory waste occurring in linear queues when front deletes nodes.</p>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className={styles.vviCard}>
                  <div className={styles.vviCardHeader}>
                    <i className="fa-solid fa-bookmark"></i> Unit III VVI Database ({u3Vvi.length} Questions)
                  </div>
                  <div className={styles.vviContent}>
                    <ol className={styles.vviList}>
                      <li>
                        <strong>Explain AVL Trees and Balance Factor definition.</strong>
                        <p>AVL Trees are self-balancing binary search trees keeping left/right child height difference (BF = Left Height - Right Height) inside {"{-1, 0, 1}"} limits.</p>
                      </li>
                      <li>
                        <strong>How are Heaps mapped onto contiguous array indices?</strong>
                        <p>A heap indexes left child at 2i+1, right child at 2i+2, and parent at (i-1)/2 relative to child index i.</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.vviCard}>
                  <div className={styles.vviCardHeader}>
                    <i className="fa-solid fa-bookmark"></i> Unit I VVI Database ({u1Vvi.length} Questions)
                  </div>
                  <div className={styles.vviContent}>
                    <ol className={styles.vviList}>
                      <li>
                        <strong>Explain Countable and Uncountable set differences.</strong>
                        <p>Countable sets can be mapped onto ℕ (e.g. Integers ℤ). Uncountable sets are infinite and cannot be mapped (e.g. Reals ℝ).</p>
                      </li>
                      <li>
                        <strong>Define the Pigeonhole Principle.</strong>
                        <p>If <code>n</code> pigeons are placed inside <code>m</code> holes where <code>n &gt; m</code>, then at least one pigeonhole must contain more than one pigeon.</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Section 3: Revision Guide */}
        <section className={styles.section} id="revision-guide">
          <div className={styles.sectionHeaderLine}>
            <h2 className={styles.sectionHeading}>
              <i className="fa-solid fa-compass" style={{ color: "var(--accent)" }}></i> Study Revision Sheet
            </h2>
            <p className={styles.sectionSubText}>Quick reference tables summarizing algorithms complexities and address calculation math rules.</p>
          </div>

          <div className={styles.revisionContainer}>
            <div className={styles.revSection}>
              <h3>Key Indexing Formulas</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Formula Target</th>
                      <th>Mathematical Representation</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formulas.map((f, idx) => (
                      <tr key={idx}>
                        <td><strong>{f.name}</strong></td>
                        <td><code>{f.formula}</code></td>
                        <td>{f.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.revSection} style={{ marginTop: "30px" }}>
              <h3>Structures Time & Space Complexity Matrix</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Data Structure / Method</th>
                      <th>Target Operation</th>
                      <th>Time Complexity</th>
                      <th>Space Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complexities.map((c, idx) => (
                      <tr key={idx}>
                        <td><strong>{c.structure}</strong></td>
                        <td>{c.operation}</td>
                        <td><code>{c.timeComplexity}</code></td>
                        <td><code>{c.spaceComplexity}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
