export type QuestionType = "mcq" | "code";

export interface CodeQuestionContext {
  language: string;       // e.g. "c", "cpp", "java", "python"
  starterCode: string;    // Code block with placeholders
  expectedAnswer: string; // The text that fits the placeholder
}

export interface Question {
  id: string;
  type: QuestionType;
  questionText: string;
  options?: string[];     // Used for MCQ only
  correctAnswer: string;  // Correct option text (MCQ) or expected code snippet (Code)
  explanation: string;
  topicId: string;
  difficulty: "easy" | "medium" | "hard";
  codeContext?: CodeQuestionContext;
}

export interface QuizSessionState {
  currentQuestionIndex: number;
  questions: Question[];
  selectedAnswers: { [key: number]: string }; // Map of question index to selected/submitted answer
  submittedState: { [key: number]: boolean };  // Map of question index to whether answer was checked
  isCompleted: boolean;
  score: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
}

export interface PracticeHistoryItem {
  unitId: string;
  score: number;
  accuracy: number;
  correct: number;
  incorrect: number;
  completedAt: string;
}
