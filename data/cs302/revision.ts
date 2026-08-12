export interface RevisionFormula {
  name: string;
  formula: string;
  description: string;
}

export interface ComplexityEntry {
  structure: string;
  operation: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export const cs302Formulas: RevisionFormula[] = [
  {
    name: "Subsets Count",
    formula: "2^n",
    description: "Total number of subsets in a power set of a set A containing n elements."
  },
  {
    name: "Total Functions",
    formula: "n^m",
    description: "Total number of functions from set A (size m) to set B (size n)."
  },
  {
    name: "One-to-One Functions",
    formula: "P(n, m) = n! / (n - m)!",
    description: "Total injective functions from domain (m) to codomain (n) where n >= m."
  },
  {
    name: "Pigeonhole PHP Limit",
    formula: "ceil(N / k)",
    description: "Generalized PHP states at least one box contains ceil(N / k) elements."
  }
];

export const cs302Complexities: ComplexityEntry[] = [
  {
    structure: "Mathematical Induction",
    operation: "Recursive Step Proving",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) stack"
  },
  {
    structure: "Topological Sort",
    operation: "Scheduling Posets",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)"
  }
];
