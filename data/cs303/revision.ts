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

export const cs303Formulas: RevisionFormula[] = [
  {
    name: "1D Array Address",
    formula: "Addr(A[i]) = B + i * size",
    description: "Computes address of i-th index element based on base address (B) and type size."
  },
  {
    name: "2D Row-Major Address",
    formula: "Addr(A[i][j]) = B + (i * N + j) * size",
    description: "Row-Major order indexing where 'N' is total number of columns in array."
  },
  {
    name: "2D Column-Major Address",
    formula: "Addr(A[i][j]) = B + (j * M + i) * size",
    description: "Column-Major order indexing where 'M' is total number of rows in array."
  },
  {
    name: "Circular Queue Full",
    formula: "(rear + 1) % MAX == front",
    description: "Circular queue check validating if the rear's next modular index overlaps the front."
  },
  {
    name: "Circular Queue Empty",
    formula: "front == -1",
    description: "Determines if queue is empty when front index tracker has defaulted back to -1."
  },
  {
    name: "Max Nodes Level l",
    formula: "2^l",
    description: "Maximum number of nodes at any level l in a binary tree (root at level 0)."
  },
  {
    name: "Max Nodes Height h",
    formula: "2^(h+1) - 1",
    description: "Maximum total nodes in a binary tree of height h (where height of root is 0)."
  },
  {
    name: "Binary Tree Nodes Relation",
    formula: "n0 = n2 + 1",
    description: "Relation stating leaf count (n0) is always one more than degree-2 nodes count (n2)."
  },
  {
    name: "Heap Array Indices",
    formula: "left=2i+1, right=2i+2, parent=(i-1)/2",
    description: "Array index calculation formulas for complete binary tree heap mapping."
  },
  {
    name: "Undirected Graph Edges",
    formula: "V * (V - 1) / 2",
    description: "Maximum number of edges in a simple undirected graph of V vertices."
  },
  {
    name: "Directed Graph Edges",
    formula: "V * (V - 1)",
    description: "Maximum number of edges in a simple directed graph of V vertices."
  },
  {
    name: "Linear Probing Index",
    formula: "(h(key) + i) % M",
    description: "Collision resolution index probe offset formula using linear increments i."
  },
  {
    name: "Quadratic Probing Index",
    formula: "(h(key) + i^2) % M",
    description: "Collision resolution index probe offset formula using quadratic increments i."
  }
];

export const cs303Complexities: ComplexityEntry[] = [
  {
    structure: "Array",
    operation: "Access / Update",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Singly Linked List",
    operation: "Insert / Delete (Begin)",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Singly Linked List",
    operation: "Insert / Delete (End)",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Stack",
    operation: "Push / Pop",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Circular Queue",
    operation: "Enqueue / Dequeue",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "BST (Balanced)",
    operation: "Search / Insert / Delete",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(h)"
  },
  {
    structure: "AVL Tree",
    operation: "All Core Operations",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(log n)"
  },
  {
    structure: "Heap",
    operation: "Insert / Extract Max",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Heap Sort",
    operation: "Sort Array",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Graph (Adjacency Matrix)",
    operation: "BFS / DFS Traversals",
    timeComplexity: "O(V^2)",
    spaceComplexity: "O(V)"
  },
  {
    structure: "Graph (Adjacency List)",
    operation: "BFS / DFS Traversals",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)"
  },
  {
    structure: "Dijkstra (Heap Map)",
    operation: "Shortest Path Routing",
    timeComplexity: "O((V + E) log V)",
    spaceComplexity: "O(V)"
  },
  {
    structure: "Bubble / Insertion Sort",
    operation: "Sort Array (Worst Case)",
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Quick Sort (Average)",
    operation: "Sort Array",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)"
  },
  {
    structure: "Merge Sort",
    operation: "Sort Array",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)"
  },
  {
    structure: "Radix Sort",
    operation: "Sort Integers / Strings",
    timeComplexity: "O(d * (n + k))",
    spaceComplexity: "O(n + k)"
  },
  {
    structure: "Binary Search",
    operation: "Find Key in Sorted List",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)"
  },
  {
    structure: "Hash Table (Average)",
    operation: "Lookup / Insert / Delete",
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)"
  }
];
