"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { cs303Questions } from "../../../../../data/cs303/questions";
import { cs302Questions } from "../../../../../data/cs302/questions";
import { generatePracticeSet } from "../../../../../lib/quiz/randomize";
import { calculateScoreReport } from "../../../../../lib/quiz/scoring";
import { generateAnalytics } from "../../../../../lib/quiz/statistics";
import { Question } from "../../../../../types/quiz";
import styles from "./page.module.css";

export default function PracticeView() {
  const { subjectId, unit } = useParams();
  const router = useRouter();
  
  // State variables for Practice Session
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [submittedState, setSubmittedState] = useState<{ [key: number]: boolean }>({});
  const [markedForReview, setMarkedForReview] = useState<{ [key: number]: boolean }>({});
  const [codeInputValue, setCodeInputValue] = useState<string>("");
  
  // Phase management
  const [phase, setPhase] = useState<"lobby" | "quiz" | "result">("lobby");
  
  // Mistake Review mode flag
  const [originalSet, setOriginalSet] = useState<Question[]>([]);
  
  // Mobile drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Timer states
  const [timeRemaining, setTimeRemaining] = useState<number>(600); // 10 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  // Time Warning Ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Keyboard accessibility reference
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle initial hydration where params are not yet resolved
  if (!subjectId || !unit) {
    return <div className={styles.loadingWrapper}>Loading practice set...</div>;
  }

  const isCS303 = subjectId === "cs303";
  const isCS302 = subjectId === "cs302";

  // Validate Route Parameters once resolved
  if (!isCS303 && !isCS302) {
    notFound();
  }

  if (isCS303 && (unit !== "1" && unit !== "2" && unit !== "3" && unit !== "4")) {
    notFound();
  }

  if (isCS302 && unit !== "1") {
    notFound();
  }

  const unitNum = parseInt(unit as string);

  // Load question bank for this unit
  const getUnitQuestionBank = () => {
    if (isCS303) {
      if (unitNum === 1) {
        return cs303Questions.filter(q => 
          q.topicId.startsWith("c-") || 
          q.topicId.startsWith("ds-") || 
          q.topicId.startsWith("array-") || 
          q.topicId.startsWith("linked-") ||
          q.topicId.startsWith("singly-") ||
          q.topicId.startsWith("circular-") ||
          q.topicId.startsWith("doubly-") ||
          q.topicId.startsWith("poly-")
        );
      } else if (unitNum === 2) {
        return cs303Questions.filter(q => 
          q.topicId.startsWith("stack-") || 
          q.topicId.startsWith("evaluations-") || 
          q.topicId.startsWith("queue-") ||
          q.topicId.startsWith("circular-queue-") ||
          q.topicId.startsWith("deque-") ||
          q.topicId.startsWith("priority-queue-") ||
          q.topicId.startsWith("simulation-")
        );
      } else if (unitNum === 3) {
        return cs303Questions.filter(q => 
          q.topicId.startsWith("tree-") ||
          q.topicId.startsWith("bst-") ||
          q.topicId.startsWith("avl-") ||
          q.topicId.startsWith("heaps-") ||
          q.topicId.startsWith("advanced-")
        );
      } else {
        return cs303Questions.filter(q => 
          q.topicId.startsWith("tree-") ||
          q.topicId.startsWith("bst-") ||
          q.topicId.startsWith("avl-") ||
          q.topicId.startsWith("heaps-") ||
          q.topicId.startsWith("advanced-") ||
          q.topicId.startsWith("graph-")
        );
      }
    } else {
      // CS302 discrete math filters
      return cs302Questions.filter(q => 
        q.topicId.startsWith("countable-") || 
        q.topicId.startsWith("equivalence-") || 
        q.topicId.startsWith("pigeonhole-") || 
        q.topicId.startsWith("induction-") ||
        q.topicId.startsWith("set-") ||
        q.topicId.startsWith("relation-") ||
        q.topicId.startsWith("function-") ||
        q.topicId.startsWith("pigeonhole") ||
        q.topicId.startsWith("induction") ||
        q.topicId.startsWith("contradiction")
      );
    }
  };

  const questionBank = getUnitQuestionBank();

  // Timer Tick implementation
  useEffect(() => {
    if (isTimerActive && phase === "quiz") {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setPhase("result");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerActive, phase]);

  // Format time remaining MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Initialize randomized quiz set
  const startNewSession = () => {
    const set = generatePracticeSet(questionBank, questionBank.length > 10 ? 10 : questionBank.length);
    setQuestions(set);
    setOriginalSet(set);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedState({});
    setMarkedForReview({});
    setCodeInputValue("");
    setTimeRemaining(600); // 10 mins
    setIsTimerActive(true);
    setPhase("quiz");
    setIsDrawerOpen(false);
  };

  const startSameSession = () => {
    const set = generatePracticeSet(originalSet, originalSet.length);
    setQuestions(set);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedState({});
    setMarkedForReview({});
    setCodeInputValue("");
    setTimeRemaining(600);
    setIsTimerActive(true);
    setPhase("quiz");
    setIsDrawerOpen(false);
  };

  const startMistakeReview = (mistakeQuestions: Question[]) => {
    setQuestions(mistakeQuestions);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedState({});
    setMarkedForReview({});
    setCodeInputValue("");
    setTimeRemaining(600);
    setIsTimerActive(true);
    setPhase("quiz");
    setIsDrawerOpen(false);
  };

  // Active question details
  const activeQuestion = questions[currentIdx];

  // Input checking
  const handleOptionSelect = useCallback((opt: string) => {
    if (submittedState[currentIdx]) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: opt }));
  }, [submittedState, currentIdx]);

  const handleCodeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (submittedState[currentIdx]) return;
    const val = e.target.value;
    setCodeInputValue(val);
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: val }));
  };

  // Submit check answer
  const checkAnswer = useCallback(() => {
    if (!selectedAnswers[currentIdx]) return;
    setSubmittedState(prev => ({ ...prev, [currentIdx]: true }));
  }, [selectedAnswers, currentIdx]);

  // Next / Navigation
  const nextQuestion = useCallback(() => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      const nextAnswer = selectedAnswers[currentIdx + 1] || "";
      setCodeInputValue(nextAnswer);
    } else {
      setIsTimerActive(false);
      const report = calculateScoreReport(questions, selectedAnswers);
      const historyItem = {
        unitId: `unit${unitNum}`,
        score: report.score,
        accuracy: report.accuracy,
        correct: report.correct,
        incorrect: report.incorrect,
        completedAt: new Date().toISOString()
      };
      
      try {
        const history = JSON.parse(localStorage.getItem("practice_history") || "[]");
        history.push(historyItem);
        localStorage.setItem("practice_history", JSON.stringify(history));
      } catch (err) {
        console.error("Failed to save statistics:", err);
      }
      setPhase("result");
    }
  }, [currentIdx, questions.length, selectedAnswers, unitNum]);

  const prevQuestion = useCallback(() => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
      const prevAnswer = selectedAnswers[currentIdx - 1] || "";
      setCodeInputValue(prevAnswer);
    }
  }, [currentIdx, selectedAnswers]);

  const toggleMarkForReview = useCallback(() => {
    setMarkedForReview(prev => ({ ...prev, [currentIdx]: !prev[currentIdx] }));
  }, [currentIdx]);

  // Keyboard Shortcuts (Only active during Quiz phase)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase !== "quiz" || !activeQuestion) return;

      if (document.activeElement?.tagName === "INPUT") {
        if (e.key === "Enter") {
          e.preventDefault();
          checkAnswer();
        }
        return;
      }

      switch (e.key.toLowerCase()) {
        case "a":
          if (activeQuestion.type === "mcq" && activeQuestion.options?.[0]) {
            handleOptionSelect(activeQuestion.options[0]);
          }
          break;
        case "b":
          if (activeQuestion.type === "mcq" && activeQuestion.options?.[1]) {
            handleOptionSelect(activeQuestion.options[1]);
          }
          break;
        case "c":
          if (activeQuestion.type === "mcq" && activeQuestion.options?.[2]) {
            handleOptionSelect(activeQuestion.options[2]);
          }
          break;
        case "d":
          if (activeQuestion.type === "mcq" && activeQuestion.options?.[3]) {
            handleOptionSelect(activeQuestion.options[3]);
          }
          break;
        case "enter":
          e.preventDefault();
          if (!submittedState[currentIdx]) {
            checkAnswer();
          } else {
            nextQuestion();
          }
          break;
        case "n":
          nextQuestion();
          break;
        case "p":
          prevQuestion();
          break;
        case "m":
          toggleMarkForReview();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, activeQuestion, currentIdx, submittedState, selectedAnswers, handleOptionSelect, checkAnswer, nextQuestion, prevQuestion, toggleMarkForReview]);

  // Results analytics
  const scoreReport = calculateScoreReport(questions, selectedAnswers);
  const analytics = generateAnalytics(questions, selectedAnswers);

  const getIncorrectQuestions = () => {
    return questions.filter((q, idx) => {
      const ans = selectedAnswers[idx];
      return !ans || ans.trim() !== q.correctAnswer.trim();
    });
  };

  const mistakes = getIncorrectQuestions();

  // Timer critical indicator formatting
  let timerClass = styles.timerBox;
  if (timeRemaining < 60) {
    timerClass += ` ${styles.timerCritical}`;
  } else if (timeRemaining < 180) {
    timerClass += ` ${styles.timerWarning}`;
  }

  return (
    <div className={styles.quizShell} ref={containerRef} tabIndex={-1}>
      {/* 1. QUIZ LOBBY VIEW */}
      {phase === "lobby" && (
        <div className={styles.lobbyContainer}>
          <div className={styles.lobbyCard}>
            <div className={styles.lobbyIconBox}>
              <i className="fa-solid fa-clipboard-question"></i>
            </div>
            <h1 className={styles.lobbyTitle}>Unit {unitNum} Exam Portal</h1>
            <p className={styles.lobbyDesc}>
              Welcome to the professional exam portal for {isCS303 ? "CS303: Data Structures" : "CS302: Discrete Structures"}. This test features dynamic questions compiled from the unit syllabus.
            </p>
            <div className={styles.lobbyDetails}>
              <div className={styles.detailItem}>
                <i className="fa-solid fa-list-check"></i>
                <div>
                  <h4>{questionBank.length > 10 ? 10 : questionBank.length} Questions</h4>
                  <span>Randomized Set</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <i className="fa-solid fa-clock"></i>
                <div>
                  <h4>10 Minutes</h4>
                  <span>Time Limit</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <i className="fa-solid fa-shield-halved"></i>
                <div>
                  <h4>Standard Mode</h4>
                  <span>Assessment Score</span>
                </div>
              </div>
            </div>
            <div className={styles.lobbyActions}>
              <button onClick={startNewSession} className={styles.startBtn}>
                Begin Dynamic Examination <i className="fa-solid fa-arrow-right"></i>
              </button>
              <Link href={`/subject/${subjectId}`} className={styles.lobbyBackBtn}>
                Exit Portal
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 2. LIVE QUIZ INTERFACE */}
      {phase === "quiz" && activeQuestion && (
        <div className={styles.quizLayout}>
          {/* Header Bar */}
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <button onClick={() => setPhase("lobby")} className={styles.headerBackBtn}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className={styles.headerTitleBox}>
                <h3>Unit {unitNum} Practice</h3>
                <span>{isCS303 ? "CS303: Data Structures" : "CS302: Discrete Structures"}</span>
              </div>
            </div>
            
            {/* Embedded Progress Bar */}
            <div className={styles.progressTracker}>
              <div className={styles.progressMeta}>
                <span>Question {currentIdx + 1} of {questions.length}</span>
                <span>{Math.round(((currentIdx + (submittedState[currentIdx] ? 1 : 0)) / questions.length) * 100)}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${((currentIdx + (submittedState[currentIdx] ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className={styles.headerRight}>
              <div className={timerClass}>
                <i className="fa-regular fa-clock"></i>
                <span>{formatTime(timeRemaining)}</span>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(true)} 
                className={styles.mobileNavTrigger}
                aria-label="View questions list"
              >
                <i className="fa-solid fa-list-ol"></i>
              </button>
            </div>
          </header>

          {/* Main Content Workspace Split */}
          <div className={styles.workspace}>
            {/* Desktop Question Sidebar Navigator */}
            <aside className={styles.sidebar}>
              <h4 className={styles.sidebarTitle}>Navigation Grid</h4>
              <div className={styles.sidebarGrid}>
                {questions.map((_, idx) => {
                  const isCurrent = idx === currentIdx;
                  const isSubmitted = submittedState[idx];
                  const isMarked = markedForReview[idx];
                  const isCorrect = isSubmitted && (selectedAnswers[idx]?.trim() === questions[idx].correctAnswer.trim());
                  
                  let gridClass = styles.gridBtn;
                  if (isCurrent) gridClass += ` ${styles.gridBtnCurrent}`;
                  else if (isMarked) gridClass += ` ${styles.gridBtnMarked}`;
                  else if (isSubmitted) {
                    if (isCorrect) gridClass += ` ${styles.gridBtnCorrect}`;
                    else gridClass += ` ${styles.gridBtnIncorrect}`;
                  }

                  return (
                    <button 
                      key={idx} 
                      onClick={() => {
                        setCurrentIdx(idx);
                        setCodeInputValue(selectedAnswers[idx] || "");
                      }} 
                      className={gridClass}
                    >
                      {isMarked ? (
                        <i className="fa-solid fa-bookmark"></i>
                      ) : isSubmitted ? (
                        isCorrect ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>
                      ) : (
                        (idx + 1).toString().padStart(2, "0")
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Legend */}
              <div className={styles.sidebarLegend}>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotCurrent}`}></span>
                  <span>Active</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotCorrect}`}></span>
                  <span>Correct</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotIncorrect}`}></span>
                  <span>Incorrect</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotMarked}`}></span>
                  <span>For Review</span>
                </div>
              </div>

              {/* Keyboard Helper Card */}
              <div className={styles.shortcutHelper}>
                <h5>Keyboard Shortcuts</h5>
                <ul>
                  <li><kbd>A</kbd>-<kbd>D</kbd> Select option</li>
                  <li><kbd>M</kbd> Toggle review flag</li>
                  <li><kbd>Enter</kbd> Check / Next</li>
                  <li><kbd>P</kbd> / <kbd>N</kbd> Prev / Next</li>
                </ul>
              </div>
            </aside>

            {/* Central Main Question Area Panel */}
            <main className={styles.questionPanel}>
              <div className={styles.questionContainer}>
                {/* Meta tags */}
                <div className={styles.metaRow}>
                  <span className={`${styles.difficultyBadge} ${styles[activeQuestion.difficulty]}`}>
                    {activeQuestion.difficulty.toUpperCase()}
                  </span>
                  <span className={styles.topicText}>
                    Topic: {activeQuestion.topicId}
                  </span>
                </div>

                {/* Question Text */}
                <h1 className={styles.questionText}>
                  {activeQuestion.questionText}
                </h1>

                {/* MCQ Answer Options List */}
                {activeQuestion.type === "mcq" && activeQuestion.options && (
                  <div className={styles.optionsList}>
                    {activeQuestion.options.map((opt, idx) => {
                      const isSelected = selectedAnswers[currentIdx] === opt;
                      const isSubmitted = submittedState[currentIdx];
                      const isCorrect = opt === activeQuestion.correctAnswer;
                      const isSelectedIncorrect = isSelected && !isCorrect;

                      let optClass = styles.optionCard;
                      if (isSelected) optClass += ` ${styles.optSelected}`;
                      if (isSubmitted) {
                        if (isCorrect) optClass += ` ${styles.optCorrect}`;
                        else if (isSelectedIncorrect) optClass += ` ${styles.optIncorrect}`;
                        else optClass += ` ${styles.optDisabled}`;
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isSubmitted}
                          onClick={() => handleOptionSelect(opt)}
                          className={optClass}
                        >
                          <span className={styles.optLetter}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className={styles.optValue}>{opt}</span>
                          <div className={styles.optStatusIcon}>
                            {isSubmitted && isCorrect && <i className="fa-solid fa-circle-check"></i>}
                            {isSubmitted && isSelectedIncorrect && <i className="fa-solid fa-circle-xmark"></i>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Code Fill Answer Box */}
                {activeQuestion.type === "code" && activeQuestion.codeContext && (
                  <div className={styles.codeCompletionBox}>
                    <span className={styles.codeInstruction}>Fill the missing part represented by <code>______</code>:</span>
                    <div className={styles.codeSnippetBlock}>
                      <pre><code>{activeQuestion.codeContext.starterCode}</code></pre>
                    </div>
                    <div className={styles.codeInputWrapper}>
                      <input 
                        type="text" 
                        disabled={submittedState[currentIdx]}
                        value={codeInputValue}
                        onChange={handleCodeInputChange}
                        placeholder="Enter dynamic expression snippet..."
                        className={styles.codeField}
                      />
                      {submittedState[currentIdx] && (
                        <div className={styles.codeResultIndicator}>
                          {selectedAnswers[currentIdx]?.trim() === activeQuestion.correctAnswer.trim() ? (
                            <span className={styles.codeCorrectMsg}>✓ Correct Answer Matching</span>
                          ) : (
                            <span className={styles.codeIncorrectMsg}>✗ Expected: <code>{activeQuestion.correctAnswer}</code></span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Practice feedback panel showing explanation */}
                {submittedState[currentIdx] && (
                  <div className={`${styles.feedbackCard} ${selectedAnswers[currentIdx]?.trim() === activeQuestion.correctAnswer.trim() ? styles.feedbackCorrect : styles.feedbackIncorrect}`}>
                    <div className={styles.feedbackTitleRow}>
                      <h4>
                        {selectedAnswers[currentIdx]?.trim() === activeQuestion.correctAnswer.trim() ? (
                          <><i className="fa-solid fa-circle-check"></i> CORRECT ANSWER</>
                        ) : (
                          <><i className="fa-solid fa-circle-xmark"></i> INCORRECT OPTION SELECTED</>
                        )}
                      </h4>
                    </div>
                    <div className={styles.feedbackBody}>
                      <p><strong>Correct Answer:</strong> <code>{activeQuestion.correctAnswer}</code></p>
                      <p className={styles.explanationText}>
                        <strong>Detailed Explanation:</strong> {activeQuestion.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>

          {/* Fixed bottom navigation action bar */}
          <footer className={styles.footer}>
            <button 
              disabled={currentIdx === 0} 
              onClick={prevQuestion} 
              className={styles.navBtn}
            >
              <i className="fa-solid fa-chevron-left"></i> Previous
            </button>

            <div className={styles.footerCenter}>
              <button 
                onClick={toggleMarkForReview} 
                className={`${styles.reviewBtn} ${markedForReview[currentIdx] ? styles.reviewBtnActive : ""}`}
              >
                <i className="fa-solid fa-bookmark"></i> {markedForReview[currentIdx] ? "Unmark Review" : "Mark for Review"}
              </button>

              {!submittedState[currentIdx] ? (
                <button 
                  disabled={!selectedAnswers[currentIdx]} 
                  onClick={checkAnswer} 
                  className={styles.submitCheckBtn}
                >
                  Submit Answer <i className="fa-solid fa-circle-check"></i>
                </button>
              ) : (
                <button 
                  onClick={nextQuestion} 
                  className={styles.primaryNextBtn}
                >
                  {currentIdx + 1 === questions.length ? "Finish Exam" : "Next Question"} <i className="fa-solid fa-chevron-right"></i>
                </button>
              )}
            </div>

            <button 
              disabled={currentIdx + 1 === questions.length} 
              onClick={nextQuestion} 
              className={styles.navBtn}
            >
              Skip <i className="fa-solid fa-chevron-right"></i>
            </button>
          </footer>

          {/* Mobile Bottom Navigation Sheet */}
          {isDrawerOpen && (
            <div className={styles.drawerOverlay} onClick={() => setIsDrawerOpen(false)}>
              <div className={styles.drawerCard} onClick={e => e.stopPropagation()}>
                <div className={styles.drawerHeader}>
                  <h3>Examination Progress</h3>
                  <button onClick={() => setIsDrawerOpen(false)} className={styles.closeDrawerBtn}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={styles.drawerBody}>
                  <div className={styles.drawerGrid}>
                    {questions.map((_, idx) => {
                      const isCurrent = idx === currentIdx;
                      const isSubmitted = submittedState[idx];
                      const isMarked = markedForReview[idx];
                      const isCorrect = isSubmitted && (selectedAnswers[idx]?.trim() === questions[idx].correctAnswer.trim());
                      
                      let gridClass = styles.gridBtn;
                      if (isCurrent) gridClass += ` ${styles.gridBtnCurrent}`;
                      else if (isMarked) gridClass += ` ${styles.gridBtnMarked}`;
                      else if (isSubmitted) {
                        if (isCorrect) gridClass += ` ${styles.gridBtnCorrect}`;
                        else gridClass += ` ${styles.gridBtnIncorrect}`;
                      }

                      return (
                        <button 
                          key={idx} 
                          onClick={() => {
                            setCurrentIdx(idx);
                            setCodeInputValue(selectedAnswers[idx] || "");
                            setIsDrawerOpen(false);
                          }} 
                          className={gridClass}
                        >
                          {(idx + 1).toString().padStart(2, "0")}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. PERFORMANCE RESULTS VIEW */}
      {phase === "result" && (
        <div className={styles.resultContainer}>
          <div className={styles.resultCard}>
            <span className={styles.reportBadge}>Session Report Card</span>
            <h1 className={styles.resultTitle}>Performance Analytics</h1>
            <p className={styles.resultDesc}>
              Examination set compilation summary calculated from this dynamic session.
            </p>

            <div className={styles.metricsGrid}>
              <div className={styles.metricBox}>
                <span className={styles.boxVal}>{scoreReport.correct} / {scoreReport.total}</span>
                <span className={styles.boxVal}>{scoreReport.accuracy}%</span>
                <span className={styles.boxLabel}>Correct Score</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.boxVal}>{scoreReport.accuracy}%</span>
                <span className={styles.boxLabel}>Accuracy Rate</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.boxVal}>{scoreReport.skipped}</span>
                <span className={styles.boxLabel}>Skipped / Empty</span>
              </div>
            </div>

            {/* Topic & difficulty graphs */}
            <div className={styles.analyticsSection}>
              <div className={styles.breakdownCol}>
                <h4>Difficulty Breakdown</h4>
                <div className={styles.barList}>
                  {Object.values(analytics.difficulties).map((d, idx) => (
                    <div key={idx} className={styles.barRow}>
                      <span className={styles.rowLabel}>{d.name}</span>
                      <div className={styles.rowGraph}>
                        <div className={styles.rowBarBg}>
                          <div className={styles.rowBarFill} style={{ width: `${d.accuracy}%` }} />
                        </div>
                        <span className={styles.rowPercent}>{d.accuracy}% ({d.correct}/{d.total})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.breakdownCol}>
                <h4>Syllabus Topic Performance</h4>
                <div className={styles.barList}>
                  {Object.values(analytics.topics).map((t, idx) => (
                    <div key={idx} className={styles.barRow}>
                      <span className={styles.rowLabel} style={{ textTransform: "capitalize" }}>
                        {t.name.replace("-", " ")}
                      </span>
                      <div className={styles.rowGraph}>
                        <div className={styles.rowBarBg}>
                          <div className={styles.rowBarFill} style={{ width: `${t.accuracy}%` }} />
                        </div>
                        <span className={styles.rowPercent}>{t.accuracy}% ({t.correct}/{t.total})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Retry operations */}
            <div className={styles.resultActions}>
              <button onClick={startNewSession} className={styles.primaryActionBtn}>
                <i className="fa-solid fa-arrows-rotate"></i> Start New Exam Set
              </button>
              <button onClick={startSameSession} className={styles.secondaryActionBtn}>
                <i className="fa-solid fa-rotate-left"></i> Re-attempt Same Set
              </button>
              {mistakes.length > 0 && (
                <button onClick={() => startMistakeReview(mistakes)} className={styles.accentActionBtn}>
                  <i className="fa-solid fa-triangle-exclamation"></i> Review Mistakes ({mistakes.length})
                </button>
              )}
              <Link href={`/subject/${subjectId}`} className={styles.lobbyBackBtn} style={{ marginTop: "10px" }}>
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
