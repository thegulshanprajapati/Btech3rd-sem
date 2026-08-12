import { Question } from "../../types/quiz";

export const cs303Questions: Question[] = [
  // ==================== UNIT 1 MCQ QUESTIONS ====================
  {
    id: "q-u1-1",
    type: "mcq",
    questionText: "What is a pointer in C programming?",
    options: [
      "A variable that stores the data value of another variable directly.",
      "A variable that stores the memory address of another variable.",
      "A reserved keyword used to initialize local variables on the heap.",
      "A data structure that manages arrays sequentially."
    ],
    correctAnswer: "A variable that stores the memory address of another variable.",
    explanation: "A pointer is a variable whose value is the address of another variable, i.e., direct address of the memory location.",
    topicId: "c-review-defs",
    difficulty: "easy"
  },
  {
    id: "q-u1-2",
    type: "mcq",
    questionText: "Which function dynamically allocates memory on the heap and initializes all blocks to zero?",
    options: [
      "malloc()",
      "calloc()",
      "realloc()",
      "free()"
    ],
    correctAnswer: "calloc()",
    explanation: "Unlike malloc() which leaves memory uninitialized, calloc() allocates memory and initializes all bits to zero.",
    topicId: "c-constructs",
    difficulty: "easy"
  },
  {
    id: "q-u1-3",
    type: "mcq",
    questionText: "What happens if a program allocates dynamic memory on the heap but forgets to release it using free()?",
    options: [
      "Dangling Pointer Error",
      "Segmentation Fault",
      "Memory Leak",
      "Stack Overflow"
    ],
    correctAnswer: "Memory Leak",
    explanation: "If memory allocated dynamically is not released using free(), it remains claimed by the program, leading to a Memory Leak.",
    topicId: "c-constructs",
    difficulty: "medium"
  },
  {
    id: "q-u1-4",
    type: "mcq",
    questionText: "For a 2D array A[M][N] stored in Row-Major Order, what is the address calculation formula for A[i][j] (where w is element size)?",
    options: [
      "Base + (i * M + j) * w",
      "Base + (i * N + j) * w",
      "Base + (j * M + i) * w",
      "Base + (j * N + i) * w"
    ],
    correctAnswer: "Base + (i * N + j) * w",
    explanation: "In Row-Major order, we skip 'i' entire rows (each of size N columns) and then add the column index 'j'. Hence: Base + (i * N + j) * w.",
    topicId: "array-section",
    difficulty: "hard"
  },
  {
    id: "q-u1-5",
    type: "mcq",
    questionText: "What is the time complexity of inserting a new node at the beginning of a Singly Linked List?",
    options: [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    correctAnswer: "O(1)",
    explanation: "Inserting at the beginning only requires updating the newNode's next pointer and redirecting the head pointer, which takes constant time O(1).",
    topicId: "singly-list-code",
    difficulty: "easy"
  },
  {
    id: "q-u1-6",
    type: "mcq",
    questionText: "What is the key advantage of a Circular Linked List over a standard Singly Linked List?",
    options: [
      "It allows O(1) random access to any element.",
      "It requires less memory because it has no tail pointer.",
      "Any node can be used as a starting point to traverse the entire list.",
      "It supports bidirectional traversal natively."
    ],
    correctAnswer: "Any node can be used as a starting point to traverse the entire list.",
    explanation: "Since the last node points back to the first node, forming a circle, we can traverse the entire list starting from any arbitrary node.",
    topicId: "circular-list-section",
    difficulty: "medium"
  },
  {
    id: "q-u1-7",
    type: "mcq",
    questionText: "Which linked list variation allocates two pointers (prev and next) in each node to allow bidirectional traversal?",
    options: [
      "Singly Linked List",
      "Doubly Linked List",
      "Circular Linked List",
      "Header Linked List"
    ],
    correctAnswer: "Doubly Linked List",
    explanation: "A doubly linked list node contains two pointer fields: prev (points to the predecessor node) and next (points to the successor node).",
    topicId: "doubly-list-section",
    difficulty: "easy"
  },
  {
    id: "q-u1-c1",
    type: "code",
    questionText: "Complete the pointer offset dereference notation equivalent to A[i].",
    correctAnswer: "*(A + i)",
    explanation: "In C, indexing is translated directly to pointer additions and dereferences: A[i] is identical to *(A + i).",
    topicId: "c-constructs",
    difficulty: "medium",
    codeContext: {
      language: "c",
      starterCode: `// Pointer index equivalence assignment
int element = ______;`,
      expectedAnswer: "*(A + i)"
    }
  },

  // ==================== UNIT 2 MCQ QUESTIONS ====================
  {
    id: "q-u2-1",
    type: "mcq",
    questionText: "What memory model principle does a Stack data structure follow?",
    options: [
      "First-In-First-Out (FIFO)",
      "Last-In-First-Out (LIFO)",
      "LILO",
      "Random Allocation"
    ],
    correctAnswer: "Last-In-First-Out (LIFO)",
    explanation: "A stack is a LIFO (Last-In-First-Out) structure: the last element pushed onto it is the first one popped out.",
    topicId: "stack-intro-defs",
    difficulty: "easy"
  },
  {
    id: "q-u2-2",
    type: "mcq",
    questionText: "In a single array of size MAX, how do we represent two stacks to optimize space utilization?",
    options: [
      "Implement one stack in even indices and the other in odd indices.",
      "Grow Stack 1 from index 0 upward, and Stack 2 from index MAX-1 downward.",
      "Allocate Stack 1 in the left half, and Stack 2 in the right half of the array.",
      "Use dynamic pointer blocks shifting back and forth."
    ],
    correctAnswer: "Grow Stack 1 from index 0 upward, and Stack 2 from index MAX-1 downward.",
    explanation: "Growing two stacks from opposite ends of a single array allows them to share the free space dynamically, avoiding false overflow.",
    topicId: "two-stacks-arr",
    difficulty: "hard"
  },
  {
    id: "q-u2-3",
    type: "mcq",
    questionText: "What is the correct postfix representation of the infix expression: A + B * C?",
    options: [
      "+ A * B C",
      "A B C * +",
      "A B + C *",
      "A B C + *"
    ],
    correctAnswer: "A B C * +",
    explanation: "Multiplication has higher precedence than addition, so B * C evaluates first (B C *), then we add A, resulting in A B C * +.",
    topicId: "infix-postfix-section",
    difficulty: "medium"
  },
  {
    id: "q-u2-4",
    type: "mcq",
    questionText: "In a circular queue implemented via an array of size MAX, what is the index wrap-around formula for rear pointer insertion?",
    options: [
      "rear = rear + 1",
      "rear = (rear + 1) / MAX",
      "rear = (rear + 1) % MAX",
      "rear = (rear % MAX) + 1"
    ],
    correctAnswer: "rear = (rear + 1) % MAX",
    explanation: "We use modulo arithmetic (%) to wrap indices around to 0 when they exceed MAX - 1.",
    topicId: "circular-queue-section",
    difficulty: "medium"
  },
  {
    id: "q-u2-5",
    type: "mcq",
    questionText: "What is the time complexity of enqueue and dequeue operations in a properly implemented circular queue?",
    options: [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    correctAnswer: "O(1)",
    explanation: "Both enqueue and dequeue operate directly on rear and front index trackers, requiring constant execution time O(1).",
    topicId: "circular-queue-section",
    difficulty: "easy"
  },
  {
    id: "q-u2-c1",
    type: "code",
    questionText: "Complete the circular queue index validation expression for checking if the queue is full.",
    correctAnswer: "==",
    explanation: "A circular queue is full when the circular successor of the rear pointer is equal to the front pointer: (rear + 1) % MAX == front.",
    topicId: "circular-queue-section",
    difficulty: "hard",
    codeContext: {
      language: "c",
      starterCode: `// Circular Queue Full condition check
if ((rear + 1) % MAX ______ front) {
    printf("Queue is Full!\\n");
    return;
}`,
      expectedAnswer: "=="
    }
  },
  {
    id: "q-u2-c2",
    type: "code",
    questionText: "Complete the stack push array offset assignment in C.",
    correctAnswer: "++top",
    explanation: "In an array-based stack, we must increment the top index tracker pre-operation before writing value to stack.",
    topicId: "stack-array-impl",
    difficulty: "medium",
    codeContext: {
      language: "c",
      starterCode: `void push(int value) {
    if (top == MAX - 1) return;
    stack[______] = value;
}`,
      expectedAnswer: "++top"
    }
  },

  // ==================== UNIT 3 MCQ QUESTIONS ====================
  {
    id: "q-u3-1",
    type: "mcq",
    questionText: "If a non-empty binary tree has n0 leaf nodes and n2 nodes of degree 2, what is the mathematical relation between them?",
    options: [
      "n0 = n2",
      "n0 = n2 + 1",
      "n0 = n2 - 1",
      "n0 = 2 * n2"
    ],
    correctAnswer: "n0 = n2 + 1",
    explanation: "For any non-empty binary tree, the number of leaf nodes (n0) is always one more than the number of nodes with exactly two children (n2).",
    topicId: "binary-tree-section",
    difficulty: "medium"
  },
  {
    id: "q-u3-2",
    type: "mcq",
    questionText: "Which traversal of a Binary Search Tree (BST) yields the keys in sorted ascending order?",
    options: [
      "Preorder Traversal",
      "Postorder Traversal",
      "Inorder Traversal",
      "Level-Order Traversal"
    ],
    correctAnswer: "Inorder Traversal",
    explanation: "An inorder traversal processes Left subtree, then Root, then Right subtree, which natively prints elements in sorted ascending sequence for a BST.",
    topicId: "tree-traversals",
    difficulty: "easy"
  },
  {
    id: "q-u3-3",
    type: "mcq",
    questionText: "What is the maximum balance factor allowed for any node in a valid AVL Tree?",
    options: [
      "0",
      "1",
      "2",
      "Unlimited"
    ],
    correctAnswer: "1",
    explanation: "An AVL tree is strictly balanced where the absolute difference in heights of left and right subtrees (Balance Factor) of any node is at most 1 (i.e. -1, 0, or 1).",
    topicId: "avl-rotations",
    difficulty: "medium"
  },
  {
    id: "q-u3-4",
    type: "mcq",
    questionText: "In a Max-Heap represented as an array, what is the index of the parent node of an element at index i?",
    options: [
      "2*i + 1",
      "2*i + 2",
      "(i - 1) / 2",
      "i / 2"
    ],
    correctAnswer: "(i - 1) / 2",
    explanation: "For a zero-indexed array implementation of a complete binary tree, the parent of node at index i is located at (i - 1) / 2 (using integer division).",
    topicId: "heaps-section",
    difficulty: "medium"
  },
  {
    id: "q-u3-5",
    type: "mcq",
    questionText: "Which self-balancing search tree structure maintains all its data pointers exclusively in the leaf nodes, which are also linked sequentially?",
    options: [
      "AVL Tree",
      "Red-Black Tree",
      "B-Tree",
      "B+ Tree"
    ],
    correctAnswer: "B+ Tree",
    explanation: "In a B+ Tree, internal nodes only store routing keys for indexing. All actual data pointers reside in leaf nodes, which are linked sequentially to optimize range queries.",
    topicId: "advanced-trees",
    difficulty: "hard"
  },

  // ==================== UNIT 3 CODE COMPLETION QUESTIONS ====================
  {
    id: "q-u3-c1",
    type: "code",
    questionText: "Complete the recursion base case in the C function for inorder tree traversal.",
    correctAnswer: "root",
    explanation: "Recursive traversal must terminate when the root pointer is NULL.",
    topicId: "tree-traversals",
    difficulty: "medium",
    codeContext: {
      language: "c",
      starterCode: `void inorder(tnode *root) {
    if (______ == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}`,
      expectedAnswer: "root"
    }
  },
  {
    id: "q-u3-c2",
    type: "code",
    questionText: "Complete the parent comparison inequality in standard max heapify upward percolation.",
    correctAnswer: ">",
    explanation: "In a max-heap, parent node values must remain greater than child values. We bubble up if the child value is greater.",
    topicId: "heaps-section",
    difficulty: "hard",
    codeContext: {
      language: "c",
      starterCode: `// Percolate up max-heap insert loop condition
while (i != 0 && heap[i] ______ heap[(i - 1) / 2]) {
    swap(&heap[i], &heap[(i - 1) / 2]);
    i = (i - 1) / 2;
}`,
      expectedAnswer: ">"
    }
  },

  // ==================== UNIT 4 MCQ QUESTIONS ====================
  {
    id: "q-u4-1",
    type: "mcq",
    questionText: "What is the memory space complexity of representing a graph G(V, E) with an Adjacency Matrix?",
    options: [
      "O(V)",
      "O(V + E)",
      "O(V^2)",
      "O(E^2)"
    ],
    correctAnswer: "O(V^2)",
    explanation: "An adjacency matrix uses a 2D array of size V x V, thus requiring O(V^2) memory storage regardless of the number of edges.",
    topicId: "graph-representation",
    difficulty: "easy"
  },
  {
    id: "q-u4-2",
    type: "mcq",
    questionText: "Which data structure is natively used to track structural levels in Breadth First Search (BFS) graph traversal?",
    options: [
      "Stack",
      "Queue",
      "Priority Queue",
      "Binary Heap"
    ],
    correctAnswer: "Queue",
    explanation: "BFS explores nodes level-by-level (FIFO order) and utilizes a Queue data structure to schedule node traversals.",
    topicId: "graph-bfs",
    difficulty: "easy"
  },
  {
    id: "q-u4-3",
    type: "mcq",
    questionText: "Which MST algorithm grows the minimum spanning tree by sorting all edges first, then selecting them greedily if they do not cause cycles?",
    options: [
      "Prim's Algorithm",
      "Kruskal's Algorithm",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm"
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation: "Kruskal's algorithm sorts all E edges by weight, then uses Union-Find (Disjoint Set Union) to select edges that don't produce cycles.",
    topicId: "graph-mst",
    difficulty: "medium"
  },
  {
    id: "q-u4-4",
    type: "mcq",
    questionText: "What key constraint must be satisfied by a graph for Dijkstra's shortest path algorithm to yield correct results?",
    options: [
      "The graph must be a tree.",
      "The graph must be unweighted.",
      "Edge weights must be non-negative.",
      "The graph must contain no cycles."
    ],
    correctAnswer: "Edge weights must be non-negative.",
    explanation: "Dijkstra's algorithm relies on a greedy relaxation mechanism which can fail to find shortest paths if negative weight edges are present.",
    topicId: "graph-dijkstra",
    difficulty: "medium"
  },

  // ==================== UNIT 4 CODE COMPLETION QUESTIONS ====================
  {
    id: "q-u4-c1",
    type: "code",
    questionText: "Complete the C edge validation check inside the adjacency matrix BFS traversal loop.",
    correctAnswer: "1",
    explanation: "An edge exists between vertex u and v in an unweighted adjacency matrix when graph[u][v] is equal to 1.",
    topicId: "graph-bfs",
    difficulty: "hard",
    codeContext: {
      language: "c",
      starterCode: `// Edge exists check inside BFS neighbor loop
for (int v = 0; v < V; v++) {
    if (graph[u][v] == ______ && !visited[v]) {
        visited[v] = 1;
        queue[rear++] = v;
    }
}`,
      expectedAnswer: "1"
    }
  },

  // ==================== UNIT 5 MCQ QUESTIONS ====================
  {
    id: "q-u5-1",
    type: "mcq",
    questionText: "Which sorting algorithm is guaranteed to be stable and run in O(n log n) time across all cases?",
    options: [
      "Quick Sort",
      "Merge Sort",
      "Heap Sort",
      "Selection Sort"
    ],
    correctAnswer: "Merge Sort",
    explanation: "Merge sort runs in O(n log n) time for best, average, and worst cases while maintaining stable relative ordering of equal elements.",
    topicId: "logarithmic-sorts",
    difficulty: "easy"
  },
  {
    id: "q-u5-2",
    type: "mcq",
    questionText: "What is the worst-case time complexity of Quick Sort, and when does it typically occur?",
    options: [
      "O(n log n) when the array is randomly shuffled",
      "O(n²) when the pivot selection consistently matches extreme elements on sorted arrays",
      "O(n³) when elements contain duplicate values",
      "O(n log² n) under memory thrashing"
    ],
    correctAnswer: "O(n²) when the pivot selection consistently matches extreme elements on sorted arrays",
    explanation: "Quick sort drops to O(n²) if the partitioning is highly unbalanced, which happens on already sorted data when picking boundary pivots.",
    topicId: "logarithmic-sorts",
    difficulty: "medium"
  },
  {
    id: "q-u5-3",
    type: "mcq",
    questionText: "Which collision resolution strategy in hashing checks slots using quadratic offsets to reduce primary clustering?",
    options: [
      "Linear Probing",
      "Quadratic Probing",
      "Double Hashing",
      "Separate Chaining"
    ],
    correctAnswer: "Quadratic Probing",
    explanation: "Quadratic Probing probes indexes dynamically: (h(key) + i²) % M. This prevents the primary clustering issues of linear probing.",
    topicId: "hash-collisions",
    difficulty: "easy"
  },
  {
    id: "q-u5-4",
    type: "mcq",
    questionText: "What is the key difference between a Dense Index and a Sparse Index?",
    options: [
      "Dense indexes only index primary keys; sparse indexes track duplicates.",
      "Dense indexing creates one record entry per table record; sparse index creates one entry per table data block.",
      "Dense indexing is stored in RAM; sparse indexing is written to secondary disk blocks.",
      "Dense indexing utilizes AVL trees; sparse indexing utilizes heaps."
    ],
    correctAnswer: "Dense indexing creates one record entry per table record; sparse index creates one entry per table data block.",
    explanation: "Dense indexing maps every single table row to an index entry, whereas sparse indexing maps index points to blocks of keys, requiring less memory.",
    topicId: "indexing-basics",
    difficulty: "medium"
  },

  // ==================== UNIT 5 CODE COMPLETION QUESTIONS ====================
  {
    id: "q-u5-c1",
    type: "code",
    questionText: "Complete the array element shifting condition inside the insertion sort inner loop.",
    correctAnswer: "arr[j] > key",
    explanation: "In insertion sort, elements greater than the key are shifted right to make space for correct insertion.",
    topicId: "quadratic-sorts",
    difficulty: "hard",
    codeContext: {
      language: "c",
      starterCode: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && ______) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`,
      expectedAnswer: "arr[j] > key"
    }
  }
];
