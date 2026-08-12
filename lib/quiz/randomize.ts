import { Question } from "../../types/quiz";

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generatePracticeSet(questionsBank: Question[], limit = 20): Question[] {
  const shuffled = shuffleArray(questionsBank);
  const selected = shuffled.slice(0, limit);
  
  return selected.map(q => {
    if (q.type === "mcq" && q.options) {
      return {
        ...q,
        options: shuffleArray(q.options)
      };
    }
    return q;
  });
}
