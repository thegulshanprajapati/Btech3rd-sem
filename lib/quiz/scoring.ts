import { Question } from "../../types/quiz";

export interface ScoreReport {
  total: number;
  correct: number;
  incorrect: number;
  skipped: number;
  score: number;       // Percentage score of total
  accuracy: number;    // Accuracy percentage based on attempted questions
}

export function calculateScoreReport(
  questions: Question[],
  selectedAnswers: { [key: number]: string }
): ScoreReport {
  const total = questions.length;
  let correct = 0;
  let incorrect = 0;
  let skipped = 0;

  for (let i = 0; i < total; i++) {
    const answer = selectedAnswers[i];
    const question = questions[i];
    if (answer === undefined || answer === "") {
      skipped++;
    } else if (answer.trim() === question.correctAnswer.trim()) {
      correct++;
    } else {
      incorrect++;
    }
  }

  const score = total > 0 ? Math.round((correct / total) * 100) : 0;
  const attempted = correct + incorrect;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  return {
    total,
    correct,
    incorrect,
    skipped,
    score,
    accuracy
  };
}
