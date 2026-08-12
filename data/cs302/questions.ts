import { Question } from "../../types/quiz";

export const cs302Questions: Question[] = [
  {
    id: "q-u1-1",
    type: "mcq",
    questionText: "Which of the following sets is countably infinite?",
    options: [
      "The set of all real numbers ℝ.",
      "The set of all rational numbers ℚ.",
      "The closed interval [0, 1] on the real line.",
      "The power set of the natural numbers P(ℕ)."
    ],
    correctAnswer: "The set of all rational numbers ℚ.",
    explanation: "Rational numbers can be indexed/mapped injectively to natural numbers, making them countably infinite. Real numbers, power sets of infinite sets, and intervals are uncountable.",
    topicId: "countable-uncountable",
    difficulty: "medium"
  },
  {
    id: "q-u1-2",
    type: "mcq",
    questionText: "What properties must a relation R satisfy to be classified as an Equivalence Relation?",
    options: [
      "Reflexive, Symmetric, and Transitive",
      "Reflexive, Antisymmetric, and Transitive",
      "Irreflexive, Symmetric, and Transitive",
      "Reflexive, Symmetric, and Asymmetric"
    ],
    correctAnswer: "Reflexive, Symmetric, and Transitive",
    explanation: "A relation is an equivalence relation if it is reflexive, symmetric, and transitive simultaneously.",
    topicId: "equivalence-poset",
    difficulty: "easy"
  },
  {
    id: "q-u1-3",
    type: "mcq",
    questionText: "According to the Generalized Pigeonhole Principle, if 13 people are in a room, what is the minimum number of people who must share the same birth month?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: "2",
    explanation: "By generalized PHP: ceil(13 / 12) = 2. So at least 2 people must share the same month.",
    topicId: "pigeonhole",
    difficulty: "easy"
  },
  {
    id: "q-u1-4",
    type: "mcq",
    questionText: "In a partial order relation (poset), which properties are required?",
    options: [
      "Reflexive, Symmetric, Transitive",
      "Reflexive, Antisymmetric, Transitive",
      "Irreflexive, Antisymmetric, Transitive",
      "Reflexive, Antisymmetric, Asymmetric"
    ],
    correctAnswer: "Reflexive, Antisymmetric, Transitive",
    explanation: "A partial order relation (poset) must be reflexive, antisymmetric, and transitive.",
    topicId: "equivalence-poset",
    difficulty: "easy"
  },
  {
    id: "q-u1-c1",
    type: "code",
    questionText: "Complete the mathematical induction step validation equation mapping the sum of the first n integers.",
    correctAnswer: "(k + 1)",
    explanation: "In mathematical induction, we add the next term (k + 1) to the induction hypothesis value (k * (k + 1)) / 2.",
    topicId: "induction",
    difficulty: "hard",
    codeContext: {
      language: "c",
      starterCode: `// Induction step sum logic
int next_sum = (k * (k + 1)) / 2 + ______;`,
      expectedAnswer: "(k + 1)"
    }
  }
];
