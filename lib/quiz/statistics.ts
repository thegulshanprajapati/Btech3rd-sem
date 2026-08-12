import { Question } from "../../types/quiz";

export interface AnalyticsEntry {
  name: string;
  total: number;
  correct: number;
  accuracy: number;
}

export interface AnalyticsReport {
  topics: { [topicId: string]: AnalyticsEntry };
  difficulties: { [diff: string]: AnalyticsEntry };
}

export function generateAnalytics(
  questions: Question[],
  selectedAnswers: { [key: number]: string }
): AnalyticsReport {
  const topics: { [topicId: string]: AnalyticsEntry } = {};
  const difficulties: { [diff: string]: AnalyticsEntry } = {};

  questions.forEach((q, idx) => {
    const answer = selectedAnswers[idx];
    const isCorrect = answer !== undefined && answer.trim() === q.correctAnswer.trim();

    // Topic stats
    if (!topics[q.topicId]) {
      topics[q.topicId] = { name: q.topicId, total: 0, correct: 0, accuracy: 0 };
    }
    topics[q.topicId].total++;
    if (isCorrect) topics[q.topicId].correct++;

    // Difficulty stats
    const diffLabel = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    if (!difficulties[diffLabel]) {
      difficulties[diffLabel] = { name: diffLabel, total: 0, correct: 0, accuracy: 0 };
    }
    difficulties[diffLabel].total++;
    if (isCorrect) difficulties[diffLabel].correct++;
  });

  // Calculate percentages
  Object.keys(topics).forEach(key => {
    topics[key].accuracy = Math.round((topics[key].correct / topics[key].total) * 100);
  });

  Object.keys(difficulties).forEach(key => {
    difficulties[key].accuracy = Math.round((difficulties[key].correct / difficulties[key].total) * 100);
  });

  return { topics, difficulties };
}
