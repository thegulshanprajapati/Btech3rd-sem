import { Unit } from "../../types/subject";

export const cs303Units: Unit[] = [
  {
    id: "unit1",
    number: 1,
    title: "Introduction to Data Structures, Arrays & Linked Lists",
    description: "Review of C programming language, pointers, 2D arrays math formulas (row/column-major), and singly/doubly/circular linked list operations, including polynomial manipulation.",
    topics: [
      {
        id: "c-review",
        title: "Review of C Programming Language",
        content: "Core constructs of C language for data structures implementation, pointer arithmetic, structures, and dynamic memory allocation.",
        subtopics: [
          {
            id: "c-review-defs",
            title: "Definition & Introduction",
            content: `
              <p><strong>Definition:</strong> C is a structured, high-level programming language that provides low‑level memory access, a rich set of operators, and constructs for modular programming. It is the primary implementation language for data structures in this course.</p>
              <p><strong>Introduction:</strong> Data structures are built using arrays, pointers, structures, and dynamic memory. A solid grasp of these C features is essential before designing efficient algorithms.</p>
              
              <h3>Terminology Guide</h3>
              
              <div class="term-card" style="border-left-color: #2563eb;">
                <div class="term-card-title blue">
                  <i class="fa-solid fa-arrow-pointer"></i> Pointer
                </div>
                <div class="term-card-desc">
                  A variable that stores the direct <span class="highlight-cyan">memory address</span> of another variable rather than storing a value directly.
                </div>
              </div>

              <div class="term-card" style="border-left-color: #7c3aed;">
                <div class="term-card-title purple">
                  <i class="fa-solid fa-plus-minus"></i> Pointer Arithmetic
                </div>
                <div class="term-card-desc">
                  Performing addition or subtraction on a pointer, which shifts the address pointer offset automatically based on the size of its base data type (<span class="highlight-amber">sizeof(type)</span>).
                </div>
              </div>

              <div class="term-card" style="border-left-color: #059669;">
                <div class="term-card-title emerald">
                  <i class="fa-solid fa-shuffle"></i> Array‑Pointer Equivalence
                </div>
                <div class="term-card-desc">
                  The semantic identity in C where subscript syntax is identical to pointer offset dereference: <code>arr[i] &harr; *(arr + i)</code>.
                </div>
              </div>

              <div class="term-card" style="border-left-color: #e11d48;">
                <div class="term-card-title rose">
                  <i class="fa-solid fa-triangle-exclamation"></i> Memory Leak
                </div>
                <div class="term-card-desc">
                  A critical error occurring when heap memory allocated dynamically is not released via <code>free()</code>, rendering it permanently claimed and wasted.
                </div>
              </div>

              <div class="diagram-container" style="border: 2px solid #3b82f6;">
                <pre>
<strong style="color: #2563eb;">Memory Representation of a Pointer:</strong>
int a = 10;
int *p = &amp;a;

 Memory
+-------+
|  10   |  &larr; address 0x100 (a)
+-------+
    &uarr;
    |
  +---+---+
  | 0x100 |  &larr; address 0x200 (p)
  +-------+

<strong style="color: #7c3aed;">Array‑Pointer Relation:</strong>
int arr[3] = {10,20,30};

arr[0] = *(arr+0) = 10
arr[1] = *(arr+1) = 20
arr[2] = *(arr+2) = 30
                </pre>
              </div>
            `
          },
          {
            id: "c-constructs",
            title: "Key C Constructs for Data Structures",
            content: `
              <p>The implementation of data structures relies on ten key C constructs:</p>
              <div class="table-responsive">
                <table class="color-table" style="width:100%; border-collapse:collapse; margin: 15px 0;">
                  <thead>
                    <tr><th style="padding: 10px;">Construct</th><th style="padding: 10px;">Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td style="padding: 10px; font-weight:700; color:#2563eb;">1. Variables &amp; Types</td><td style="padding: 10px;">Primitive types (<code>int</code>, <code>char</code>) and user-defined structures.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#059669;">2. Operators</td><td style="padding: 10px;">Arithmetic, assignment, and address dereference/access (<code>*</code>, <code>&amp;</code>, <code>-&gt;</code>).</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#d97706;">3. Control Statements</td><td style="padding: 10px;">Conditional execution logic (<code>if-else</code>, <code>switch</code>) and loop runs.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#7c3aed;">4. Functions</td><td style="padding: 10px;">Passing parameters by value or references using pointer parameters.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#e11d48;">5. Recursion</td><td style="padding: 10px;">A function calling itself; must define a reliable base terminating step.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#0891b2;">6. Arrays</td><td style="padding: 10px;">Contiguous, fixed-size memory slots holding homogeneous elements.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#4f46e5;">7. Pointers</td><td style="padding: 10px;">Holding variable addresses on the system stack or heap.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#db2777;">8. Structures</td><td style="padding: 10px;">Custom data types enclosing heterogeneous properties.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#059669;">9. Dynamic Allocation</td><td style="padding: 10px;">Runtime memory handling via <code>malloc()</code>, <code>calloc()</code>, <code>realloc()</code>, and <code>free()</code>.</td></tr>
                    <tr><td style="padding: 10px; font-weight:700; color:#7c3aed;">10. typedef</td><td style="padding: 10px;">Aliasing existing names into readable clean type structures.</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h3>C Code Example: Dynamic Memory &amp; Structures</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node *next;
};
typedef struct Node node;

int main() {
    int n = 5;
    // malloc: allocates uninitialized memory
    int *ptr = (int*) malloc(n * sizeof(int));
    if(ptr == NULL) exit(1);
    for(int i=0; i&lt;n; i++) ptr[i] = i+1;
    
    // calloc: allocates and initializes to 0
    int *ptr2 = (int*) calloc(n, sizeof(int));
    
    // realloc: resize previously allocated block
    ptr = (int*) realloc(ptr, 10 * sizeof(int));
    
    free(ptr);
    free(ptr2);
    
    // Usage of struct pointer
    node *head = (node*) malloc(sizeof(node));
    head-&gt;data = 10;
    head-&gt;next = NULL;
    free(head);
    return 0;
}</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "ds-intro-section",
        title: "Introduction & Classification of Data Structures",
        content: "Data structure definitions, abstract data types (ADT), and primitive vs. non-primitive classification.",
        subtopics: [
          {
            id: "ds-definitions",
            title: "Data, Information & Data Structures",
            content: `
              <ul>
                <li><strong>Data:</strong> Raw, unprocessed facts.</li>
                <li><strong>Information:</strong> Processed, meaningful, and contextualized data.</li>
                <li><strong>Data Item:</strong> A single unit of values (e.g. Roll Number).</li>
                <li><strong>Data Type:</strong> A classification of data values with predefined operations (e.g. integer, character).</li>
                <li><strong>Data Structure:</strong> A systematic scheme for organizing and storing data in computer memory so that operations can be performed efficiently.</li>
                <li><strong>Abstract Data Type (ADT):</strong> A mathematical or logical model defining a data type and its operations, completely hiding the implementation details.</li>
                <li><strong>Algorithm:</strong> A finite, step-by-step procedure to solve a specific problem.</li>
              </ul>
              <h3>Logical Model vs. Concrete Implementation</h3>
              <p>An ADT defines <em>what</em> operations are supported (e.g. Stack defines push and pop). The concrete data structure defines <em>how</em> the data is physically organized (e.g. implementing the Stack via a static array or a dynamic linked list).</p>
            `
          },
          {
            id: "ds-classification",
            title: "Classification of Data Structures",
            content: `
              <p>Data structures are divided into primitive and non-primitive types, which further subdivide into linear and non-linear categories:</p>
              <div class="diagram-container">
                <pre>
                    Data Structures
                          |
            +-------------+-------------+
            |                           |
      Primitive                    Non-primitive
     (int, char,                (User‑defined)
      float, double,
      pointer)
                                     |
                     +---------------+---------------+
                     |                               |
                  Linear                        Non-linear
           (elements in sequence)           (hierarchical/network)
          Array, Linked List,                 Tree, Graph
          Stack, Queue
                </pre>
              </div>
              <ul>
                <li><strong>Primitive Data Structures:</strong> Basic types directly supported by the machine instruction set (int, float, char, pointers).</li>
                <li><strong>Non-Primitive Data Structures:</strong> Derived, user-defined structures created by combining primitive types.
                  <ul>
                    <li><strong>Linear:</strong> Elements are arranged sequentially. Every element (except first and last) has a single predecessor and successor (e.g. Arrays, Linked Lists, Stacks, Queues).</li>
                    <li><strong>Non-Linear:</strong> Elements form hierarchical or interconnected networks. An element can connect to multiple adjacent elements (e.g. Trees, Graphs).</li>
                  </ul>
                </li>
              </ul>
            `
          },
          {
            id: "ds-memory-representations",
            title: "Memory Representation & Basic Operations",
            content: `
              <p>Data structures utilize two main memory layout methods:</p>
              <ul>
                <li><strong>Contiguous Memory (Static):</strong> Elements are stored in consecutive memory slots. Calculated direct access via formula. Fast access, but insertion requires shifting (e.g. Arrays).</li>
                <li><strong>Non-Contiguous Memory (Dynamic):</strong> Elements are scattered across arbitrary addresses on the heap, linked together via pointer variables. Dynamic growth, but sequential access only (e.g. Linked Lists).</li>
              </ul>
              <div class="diagram-container">
                <pre>
<strong>Contiguous Representation (Array):</strong>
+----+----+----+----+
| 10 | 20 | 30 | 40 |
+----+----+----+----+
Address: 100  104  108  112

<strong>Non-Contiguous Representation (Linked List):</strong>
[10|*] --&gt; [20|*] --&gt; [30|NULL]
Address: 200         500         700
                </pre>
              </div>
              <h3>Seven Core Operations on Data Structures</h3>
              <ol>
                <li><strong>Traversal:</strong> Visiting each element exactly once.</li>
                <li><strong>Insertion:</strong> Adding a new element at a target position.</li>
                <li><strong>Deletion:</strong> Removing an existing element.</li>
                <li><strong>Searching:</strong> Finding the index or location of a key element.</li>
                <li><strong>Sorting:</strong> Arranging elements in a specified order.</li>
                <li><strong>Merging:</strong> Combining two sorted structures into a single sorted structure.</li>
                <li><strong>Updating:</strong> Modifying the value of an element at a given position.</li>
              </ol>
            `
          }
        ]
      },
      {
        id: "array-section",
        title: "Arrays & Address Calculations",
        content: "Contiguous arrays, 1D address formula, and Row-Major vs. Column-Major 2D arrays with numeric examples.",
        subtopics: [
          {
            id: "array-address-calculations",
            title: "1D & 2D Array Mathematical Address Formats",
            content: `
              <p>Since arrays are contiguous, memory locations can be computed using base address calculations:</p>
              <h3>1D Array Formula</h3>
              <p>For a 1D array starting at index <code>0</code>, with base address <code>B</code> and element size <code>w</code> bytes:</p>
              <div class="formula-box">
                <code>Address(A[i]) = B + i &times; w</code>
              </div>
              
              <h3>2D Array Formulas</h3>
              <p>For a 2D array <code>A[M][N]</code> with <code>M</code> rows and <code>N</code> columns, storing elements of size <code>w</code>:</p>
              <ul>
                <li><strong>Row-Major Order (RMO):</strong> Elements are stored row-by-row sequentially.
                  <div class="formula-box">
                    <code>Address(A[i][j]) = B + (i &times; N + j) &times; w</code>
                  </div>
                </li>
                <li><strong>Column-Major Order (CMO):</strong> Elements are stored column-by-column sequentially.
                  <div class="formula-box">
                    <code>Address(A[i][j]) = B + (j &times; M + i) &times; w</code>
                  </div>
                </li>
              </ul>
              
              <div class="alert alert-info">
                <i class="fa-solid fa-calculator"></i>
                <div class="alert-content">
                  <h4>Numerical Example</h4>
                  <p>Given <code>int A[3][4]</code> (M=3 rows, N=4 columns), base address <code>B = 1000</code>, and <code>w = 2</code> bytes (16-bit integer). Find the address of <code>A[2][2]</code> in Row-Major order:</p>
                  <p><code>Address(A[2][2]) = 1000 + (2 &times; 4 + 2) &times; 2 = 1000 + (8 + 2) &times; 2 = 1020</code></p>
                </div>
              </div>
            `
          },
          {
            id: "array-c-operations",
            title: "Array Operations C Code",
            content: `
              <p>C implementations for array traversal, insertion, and deletion:</p>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#include &lt;stdio.h&gt;

// Traversal
void traverse(int arr[], int n) {
    for(int i=0; i&lt;n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// Insertion at position (pos is 0-indexed)
int insert(int arr[], int n, int value, int pos, int capacity) {
    if(n &gt;= capacity) return n;
    for(int i = n-1; i &gt;= pos; i--) {
        arr[i+1] = arr[i];
    }
    arr[pos] = value;
    return n + 1;
}

// Deletion from position
int deletePos(int arr[], int n, int pos) {
    if(pos &lt; 0 || pos &gt;= n) return n;
    for(int i = pos; i &lt; n - 1; i++) {
        arr[i] = arr[i+1];
    }
    return n - 1;
}</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "linked-list-section",
        title: "Linked Lists Operations",
        content: "Singly, Doubly, and Circular Linked List traversal, insertion, deletion, and polynomial manipulation.",
        subtopics: [
          {
            id: "singly-list",
            title: "Singly Linked List Implementation",
            content: `
              <p>A Singly Linked List consists of nodes containing a data field and a <code>next</code> pointer targeting the successor node.</p>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node *next;
};
typedef struct Node node;

node* createNode(int val) {
    node *newNode = (node*) malloc(sizeof(node));
    newNode-&gt;data = val;
    newNode-&gt;next = NULL;
    return newNode;
}

// Insert at beginning (O(1))
void insertBegin(node **headRef, int val) {
    node *newNode = createNode(val);
    newNode-&gt;next = *headRef;
    *headRef = newNode;
}

// Insert at end (O(n))
void insertEnd(node **headRef, int val) {
    node *newNode = createNode(val);
    if(*headRef == NULL) {
        *headRef = newNode;
        return;
    }
    node *temp = *headRef;
    while(temp-&gt;next != NULL) {
        temp = temp-&gt;next;
    }
    temp-&gt;next = newNode;
}

// Delete from beginning (O(1))
void deleteBegin(node **headRef) {
    if(*headRef == NULL) return;
    node *temp = *headRef;
    *headRef = (*headRef)-&gt;next;
    free(temp);
}

// Reverse the linked list iteratively (O(n) time, O(1) space)
void reverse(node **headRef) {
    node *prev = NULL;
    node *curr = *headRef;
    node *next = NULL;
    while(curr != NULL) {
        next = curr-&gt;next;
        curr-&gt;next = prev;
        prev = curr;
        curr = next;
    }
    *headRef = prev;
}</code></pre>
              </div>
            `
          },
          {
            id: "doubly-circular-list",
            title: "Doubly & Circular Linked Lists",
            content: `
              <p>Variations of linked lists providing unique traversal advantages:</p>
              <ul>
                <li><strong>Circular Linked List:</strong> The last node points back to the head node. Traverse the entire list starting from any node. No node points to <code>NULL</code>.</li>
                <li><strong>Doubly Linked List:</strong> Nodes contain <code>prev</code> and <code>next</code> pointers. Bidirectional traversal and O(1) deletions of known nodes.</li>
              </ul>
              <h3>Doubly Linked List node insertion at beginning:</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>struct DNode {
    int data;
    struct DNode *prev;
    struct DNode *next;
};
typedef struct DNode dnode;

void dInsertBegin(dnode **headRef, int val) {
    dnode *newNode = (dnode*) malloc(sizeof(dnode));
    newNode-&gt;data = val;
    newNode-&gt;prev = NULL;
    newNode-&gt;next = *headRef;
    if(*headRef != NULL) {
        (*headRef)-&gt;prev = newNode;
    }
    *headRef = newNode;
}</code></pre>
              </div>
            `
          },
          {
            id: "polynomial-representation",
            title: "Polynomial Manipulation using Linked Lists",
            content: `
              <p>A polynomial like <code>5x&sup3; + 4x&sup2; + 2x + 7</code> is represented as a linked list where each node stores a coefficient and an exponent.</p>
              <div class="diagram-container">
                <pre>
<strong>Polynomial Node Representation:</strong>
[5 | 3 | *] --&gt; [4 | 2 | *] --&gt; [2 | 1 | *] --&gt; [7 | 0 | NULL]
 (5x³)          (4x²)          (2x¹)          (7x⁰)
                </pre>
              </div>
              <h3>Polynomial Addition C Code</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>struct PolyNode {
    int coeff;
    int exp;
    struct PolyNode *next;
};
typedef struct PolyNode pnode;

pnode* polyAdd(pnode *A, pnode *B) {
    pnode *C = NULL, *tail = NULL;
    while(A && B) {
        pnode *newNode = (pnode*) malloc(sizeof(pnode));
        newNode-&gt;next = NULL;
        if(A-&gt;exp == B-&gt;exp) {
            int sum = A-&gt;coeff + B-&gt;coeff;
            if(sum != 0) {
                newNode-&gt;coeff = sum;
                newNode-&gt;exp = A-&gt;exp;
            } else {
                free(newNode);
                A = A-&gt;next; B = B-&gt;next;
                continue;
            }
            A = A-&gt;next; B = B-&gt;next;
        } else if(A-&gt;exp &gt; B-&gt;exp) {
            newNode-&gt;coeff = A-&gt;coeff;
            newNode-&gt;exp = A-&gt;exp;
            A = A-&gt;next;
        } else {
            newNode-&gt;coeff = B-&gt;coeff;
            newNode-&gt;exp = B-&gt;exp;
            B = B-&gt;next;
        }
        if(C == NULL) C = tail = newNode;
        else { tail-&gt;next = newNode; tail = newNode; }
    }
    pnode *rem = A ? A : B;
    while(rem) {
        pnode *newNode = (pnode*) malloc(sizeof(pnode));
        newNode-&gt;coeff = rem-&gt;coeff;
        newNode-&gt;exp = rem-&gt;exp;
        newNode-&gt;next = NULL;
        if(C == NULL) C = tail = newNode;
        else { tail-&gt;next = newNode; tail = newNode; }
        rem = rem-&gt;next;
    }
    return C;
}</code></pre>
              </div>
            `
          }
        ]
      }
    ]
  },
  {
    id: "unit2",
    number: 2,
    title: "Stacks and Queues",
    description: "LIFO stack representations (array and list), multi-stacks, evaluation algorithms (infix to postfix), FIFO circular queues, and deques.",
    topics: [
      {
        id: "stack-section",
        title: "Stack Concept & Implementations",
        content: "Understanding LIFO, array vs. linked-list implementations, and multiple stacks.",
        subtopics: [
          {
            id: "stack-basics",
            title: "Stack Definition & ADT",
            content: `
              <p>A stack is a linear data structure that follows the <strong>Last‑In‑First‑Out (LIFO)</strong> principle. Operations occur at one end called the <strong>top</strong>.</p>
              <h3>Stack Operations</h3>
              <ul>
                <li><code>push(item)</code> — Inserts an element on top.</li>
                <li><code>pop()</code> — Removes and returns the top element.</li>
                <li><code>peek()</code> — Returns the top element without removing it.</li>
                <li><code>isEmpty()</code> — Checks if stack is empty.</li>
                <li><code>isFull()</code> — (In static arrays) Checks if stack has reached maximum capacity.</li>
              </ul>
            `
          },
          {
            id: "stack-array-list-c",
            title: "C Implementations of Stack",
            content: `
              <p>A stack can be implemented using static arrays or dynamic linked lists.</p>
              <h3>1. Array Stack Implementation</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#define MAX 100
int stack[MAX];
int top = -1;

void push(int value) {
    if (top == MAX - 1) { printf("Overflow\\n"); return; }
    stack[++top] = value;
}

int pop() {
    if (top == -1) { printf("Underflow\\n"); return -1; }
    return stack[top--];
}</code></pre>
              </div>
              
              <h3>2. Linked List Stack Implementation</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>struct Node {
    int data;
    struct Node *next;
};
struct Node *topNode = NULL;

void listPush(int val) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode-&gt;data = val;
    newNode-&gt;next = topNode;
    topNode = newNode;
}

int listPop() {
    if(topNode == NULL) return -1;
    struct Node *temp = topNode;
    int val = temp-&gt;data;
    topNode = topNode-&gt;next;
    free(temp);
    return val;
}</code></pre>
              </div>
            `
          },
          {
            id: "two-stacks",
            title: "Multiple Stacks in One Array",
            content: `
              <p>Maintaining more than one stack in a single array. Growing two stacks from opposite ends utilizes space efficiently.</p>
              <div class="diagram-container">
                <pre>
<strong>Two Stacks in One Array:</strong>
+----+----+----+----+ ... +----+----+
| S1 | S1 | .. |    |    | S2 | S2 |
+----+----+----+----+ ... +----+----+
  &uarr;                         &uarr;
 top1                     top2
                </pre>
              </div>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#define MAX 100
int arr[MAX];
int top1 = -1, top2 = MAX;

void push1(int x) {
    if (top1 + 1 == top2) { printf("Overflow\\n"); return; }
    arr[++top1] = x;
}

void push2(int x) {
    if (top2 - 1 == top1) { printf("Overflow\\n"); return; }
    arr[--top2] = x;
}</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "stack-apps",
        title: "Stack Applications: Expression Conversions",
        content: "Infix, prefix, and postfix expressions, and using stacks for expression evaluation.",
        subtopics: [
          {
            id: "infix-postfix",
            title: "Infix to Postfix Conversion",
            content: `
              <p>Computers evaluate expressions in <strong>Postfix</strong> (Reverse Polish) representation because it does not require parentheses or operator precedence checks.</p>
              <h3>Operator Precedence table</h3>
              <table>
                <thead>
                  <tr><th>Operator</th><th>Precedence</th><th>Associativity</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>^</code></td><td>Highest</td><td>Right-to-Left</td></tr>
                  <tr><td><code>*, /, %</code></td><td>Medium</td><td>Left-to-Right</td></tr>
                  <tr><td><code>+, -</code></td><td>Lowest</td><td>Left-to-Right</td></tr>
                </tbody>
              </table>
              <h3>Infix to Postfix C Code Snippet</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#include &lt;stdio.h&gt;
#include &lt;ctype.h&gt;
#define MAX 100

char stack[MAX];
int top = -1;

void push(char c) { stack[++top] = c; }
char pop() { return stack[top--]; }
int precedence(char c) {
    if(c == '^') return 3;
    if(c == '*' || c == '/' || c == '%') return 2;
    if(c == '+' || c == '-') return 1;
    return 0;
}

void infixToPostfix(char* infix, char* postfix) {
    int i = 0, k = 0;
    while(infix[i] != '\\0') {
        if(isalnum(infix[i])) {
            postfix[k++] = infix[i];
        } else if(infix[i] == '(') {
            push(infix[i]);
        } else if(infix[i] == ')') {
            while(top != -1 && stack[top] != '(')
                postfix[k++] = pop();
            pop(); // remove '('
        } else {
            while(top != -1 && precedence(stack[top]) &gt;= precedence(infix[i])) {
                postfix[k++] = pop();
            }
            push(infix[i]);
        }
        i++;
    }
    while(top != -1) postfix[k++] = pop();
    postfix[k] = '\\0';
}</code></pre>
              </div>
            `
          },
          {
            id: "postfix-eval",
            title: "Postfix Evaluation",
            content: `
              <p>Scanning postfix expression from left to right. Operands are pushed onto stack. When an operator is scanned, two operands are popped, computed, and the result is pushed back.</p>
              <h3>Postfix Evaluation C Code</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>int evaluatePostfix(char* expr) {
    int evalStack[MAX];
    int topEval = -1;
    for(int i = 0; expr[i] != '\\0'; i++) {
        if(isdigit(expr[i])) {
            evalStack[++topEval] = expr[i] - '0';
        } else {
            int a = evalStack[topEval--];
            int b = evalStack[topEval--];
            switch(expr[i]) {
                case '+': evalStack[++topEval] = b + a; break;
                case '-': evalStack[++topEval] = b - a; break;
                case '*': evalStack[++topEval] = b * a; break;
                case '/': evalStack[++topEval] = b / a; break;
            }
        }
    }
    return evalStack[0];
}</code></pre>
              </div>
            `
          },
          {
            id: "recursion-stack",
            title: "Recursion & System Call Stack",
            content: `
              <p>Recursion is a technique where a function calls itself. The operating system uses a system stack (call stack) to store activation records (parameters, local variables, return addresses) for each recursive call.</p>
              <h3>Classic Recursive Problems</h3>
              <ul>
                <li><strong>Factorial:</strong> <code>O(n)</code> time/space.</li>
                <li><strong>Fibonacci:</strong> <code>O(2ⁿ)</code> naive recursion.</li>
                <li><strong>Tower of Hanoi:</strong> Moves n disks from source to destination using auxiliary rod. Requires <code>2ⁿ - 1</code> steps.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "queue-section",
        title: "Queues: Linear, Circular, Deques & Priority Queues",
        content: "First-In-First-Out (FIFO) queue, circular queue modulo indices, double-ended queues (deque), and priority queues.",
        subtopics: [
          {
            id: "queue-concepts",
            title: "Queue Definition & ADT",
            content: `
              <p>A queue is a linear structure following the <strong>First‑In‑First‑Out (FIFO)</strong> principle. Elements are inserted at the <strong>rear</strong> and removed from the <strong>front</strong>.</p>
              <ul>
                <li><strong>Linear Queue:</strong> Suffer from false overflow where slots are empty at front but rear reaches <code>MAX-1</code>.</li>
                <li><strong>Circular Queue:</strong> Reuses slots by wrapping around using modulo arithmetic.</li>
              </ul>
            `
          },
          {
            id: "circular-queue-impl",
            title: "Circular Queue C Code Implementation",
            content: `
              <p>An array-based circular queue implementation:</p>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#include &lt;stdio.h&gt;
#define MAX 5

int queue[MAX];
int front = -1, rear = -1;

int isFull() {
    return (rear + 1) % MAX == front;
}

int isEmpty() {
    return front == -1;
}

void enqueue(int val) {
    if (isFull()) { printf("Queue Overflow\\n"); return; }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX;
    queue[rear] = val;
}

int dequeue() {
    if (isEmpty()) { printf("Queue Underflow\\n"); return -1; }
    int val = queue[front];
    if (front == rear) {
        front = rear = -1; // reset
    } else {
        front = (front + 1) % MAX;
    }
    return val;
}</code></pre>
              </div>
            `
          },
          {
            id: "deque-priority-queue",
            title: "Deques & Priority Queues",
            content: `
              <ul>
                <li><strong>DEQUE (Double-Ended Queue):</strong> Insertion and deletion at both front and rear.
                  <ul>
                    <li><em>Input-Restricted:</em> Insert at rear only; delete from both.</li>
                    <li><em>Output-Restricted:</em> Delete from front only; insert at both.</li>
                  </ul>
                </li>
                <li><strong>Priority Queue:</strong> Each element is assigned a priority. Elements are processed based on priority rather than FIFO.
                  <ul>
                    <li><em>Ascending Priority:</em> Smallest value processed first.</li>
                    <li><em>Descending Priority:</em> Largest value processed first.</li>
                  </ul>
                </li>
              </ul>
            `
          }
        ]
      }
    ]
  },
  {
    id: "unit3",
    number: 3,
    title: "Trees",
    description: "Binary Search Tree properties, AVL rotation balancing, heaps array-mapping layouts, and Red-Black / B-Tree definitions.",
    topics: [
      {
        id: "tree-basics",
        title: "Tree Terminology & Binary Trees",
        content: "Hierarchical data structure terms, binary tree properties, and types of binary trees.",
        subtopics: [
          {
            id: "tree-terminology-defs",
            title: "Tree Concepts & Terminology",
            content: `
              <p>A tree is a non‑linear, hierarchical structure consisting of nodes connected by edges.</p>
              <ul>
                <li><strong>Root:</strong> The unique topmost node.</li>
                <li><strong>Leaf Node (External):</strong> A node with zero children.</li>
                <li><strong>Degree of Node:</strong> Number of children of that node.</li>
                <li><strong>Height of Tree:</strong> The maximum number of edges from the root to a leaf node.</li>
                <li><strong>Depth:</strong> Number of edges from root to target node.</li>
              </ul>
              <h3>Binary Tree Properties</h3>
              <ol>
                <li>Maximum nodes at level <code>l</code> = <code>2ˡ</code>.</li>
                <li>Maximum total nodes of height <code>h</code> = <code>2ʰ⁺¹ - 1</code>.</li>
                <li>The relation between leaf nodes (n0) and degree-2 nodes (n2) is: <code>n0 = n2 + 1</code>.</li>
              </ol>
            `
          },
          {
            id: "tree-types",
            title: "Types of Binary Trees",
            content: `
              <ul>
                <li><strong>Full Binary Tree:</strong> Every node has 0 or 2 children.</li>
                <li><strong>Complete Binary Tree:</strong> All levels are filled completely except possibly the last level, which has nodes as far left as possible.</li>
                <li><strong>Perfect Binary Tree:</strong> All internal nodes have 2 children and all leaves are at the same level.</li>
                <li><strong>Skewed Tree:</strong> Tree where every node has only one child (left or right skewed).</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "bst-traversals",
        title: "Binary Search Trees & Traversals",
        content: "BST properties, recursive traversals, search, insert, and delete operations.",
        subtopics: [
          {
            id: "bst-ops",
            title: "BST Insertion, Deletion & Search",
            content: `
              <p><strong>BST Property:</strong> For every node, left subtree elements &lt; root key &lt; right subtree elements.</p>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>struct Node {
    int data;
    struct Node *left, *right;
};
typedef struct Node tnode;

tnode* insert(tnode* root, int val) {
    if(root == NULL) {
        tnode *newNode = (tnode*) malloc(sizeof(tnode));
        newNode-&gt;data = val;
        newNode-&gt;left = newNode-&gt;right = NULL;
        return newNode;
    }
    if (val &lt; root-&gt;data) root-&gt;left = insert(root-&gt;left, val);
    else if (val &gt; root-&gt;data) root-&gt;right = insert(root-&gt;right, val);
    return root;
}</code></pre>
              </div>
              <h3>BST Deletion Cases</h3>
              <ul>
                <li><strong>Case 1: Leaf Node:</strong> Simply delete the node.</li>
                <li><strong>Case 2: One Child:</strong> Copy child pointer to parent, delete target.</li>
                <li><strong>Case 3: Two Children:</strong> Find Inorder Successor (min in right subtree), copy its value to root, and delete the successor node recursively.</li>
              </ul>
            `
          },
          {
            id: "traversals-c",
            title: "Preorder, Inorder & Postorder Traversals",
            content: `
              <p>Visiting tree nodes systematically:</p>
              <ul>
                <li><strong>Preorder:</strong> Root &rarr; Left &rarr; Right</li>
                <li><strong>Inorder:</strong> Left &rarr; Root &rarr; Right (Yields sorted values for a BST)</li>
                <li><strong>Postorder:</strong> Left &rarr; Right &rarr; Root</li>
              </ul>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>void inorder(tnode *root) {
    if (root != NULL) {
        inorder(root-&gt;left);
        printf("%d ", root-&gt;data);
        inorder(root-&gt;right);
    }
}</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "avl-heaps-advanced",
        title: "AVL Trees, Heaps & Advanced Indexes",
        content: "Self-balancing AVL tree balance factors, max/min heaps representation, B-Trees and Red-Black trees.",
        subtopics: [
          {
            id: "avl-tree",
            title: "AVL Balancing & Rotations",
            content: `
              <p>An AVL tree is a self-balancing BST where the balance factor of every node satisfies:</p>
              <div class="formula-box">
                <code>Balance Factor (BF) = Height(Left Subtree) - Height(Right Subtree) &isin; {-1, 0, 1}</code>
              </div>
              <p>If BF violates balance (BF &ge; 2 or BF &le; -2), four rotation cases restore balance:</p>
              <ul>
                <li><strong>LL Rotation (Single Right):</strong> Insert in left-left subtree.</li>
                <li><strong>RR Rotation (Single Left):</strong> Insert in right-right subtree.</li>
                <li><strong>LR Rotation (Left-Right):</strong> Left rotate left child, then right rotate unbalanced root.</li>
                <li><strong>RL Rotation (Right-Left):</strong> Right rotate right child, then left rotate unbalanced root.</li>
              </ul>
            `
          },
          {
            id: "heaps-sort",
            title: "Heaps & Heap Sort",
            content: `
              <p>A Heap is a complete binary tree mapping elements to arrays:</p>
              <ul>
                <li><strong>Max-Heap:</strong> Parent &ge; Children. Root is maximum element.</li>
                <li><strong>Min-Heap:</strong> Parent &le; Children. Root is minimum element.</li>
              </ul>
              <h3>Heap Array Mapping</h3>
              <p>For index <code>i</code>:</p>
              <ul>
                <li>Left child: <code>2i + 1</code></li>
                <li>Right child: <code>2i + 2</code></li>
                <li>Parent: <code>(i - 1) / 2</code></li>
              </ul>
              <h3>Max-Heapify Algorithm</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>void maxHeapify(int heap[], int size, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;
    if(left &lt; size && heap[left] &gt; heap[largest]) largest = left;
    if(right &lt; size && heap[right] &gt; heap[largest]) largest = right;
    if(largest != i) {
        int temp = heap[i]; heap[i] = heap[largest]; heap[largest] = temp;
        maxHeapify(heap, size, largest);
    }
}</code></pre>
              </div>
            `
          },
          {
            id: "other-tree-types",
            title: "Red-Black Trees, B-Trees & B+ Trees",
            content: `
              <ul>
                <li><strong>Red-Black Tree:</strong> A balanced BST with red/black color rules preventing skewed heights. Root is black; no adjacent red nodes.</li>
                <li><strong>B-Tree:</strong> Balanced multi-way search tree of order m designed for secondary storage devices.</li>
                <li><strong>B+ Tree:</strong> All actual data pointers reside exclusively in leaf nodes linked sequentially. Best for range queries in database indexing.</li>
              </ul>
            `
          }
        ]
      }
    ]
  },
  {
    id: "unit4",
    number: 4,
    title: "Graphs",
    description: "Adjacency matrix and list layouts, BFS/DFS traversal implementations, Kruskal/Prim MST algorithms, and Dijkstra shortest paths.",
    topics: [
      {
        id: "graph-representation-section",
        title: "Graph Concepts & Representations",
        content: "Vertices, edges, degrees, adjacency matrix vs. list storage formats.",
        subtopics: [
          {
            id: "graph-basics",
            title: "Graph Terminology",
            content: `
              <p>A Graph G is defined as <code>G = (V, E)</code> where V represents vertices and E represents edges.</p>
              <ul>
                <li><strong>Directed Graph (Digraph):</strong> Edges have arrows/direction.</li>
                <li><strong>Weighted Graph:</strong> Edges carry numeric cost/weight values.</li>
                <li><strong>Connected Graph:</strong> A path exists between every pair of vertices.</li>
                <li><strong>Degree:</strong> Number of incident edges. Directed graphs have <em>in-degree</em> and <em>out-degree</em>.</li>
              </ul>
            `
          },
          {
            id: "adj-matrix-list",
            title: "Adjacency Matrix vs. Adjacency List",
            content: `
              <p>Graphs are stored in memory using two primary layouts:</p>
              <ul>
                <li><strong>Adjacency Matrix:</strong> 2D array of size <code>V &times; V</code>. <code>M[i][j] = 1</code> if edge exists. Space complexity: <code>O(V&sup2;)</code>.</li>
                <li><strong>Adjacency List:</strong> Array of linked lists of size <code>V</code>. Each index contains a list of adjacent neighbors. Space complexity: <code>O(V + E)</code>. Excellent for sparse graphs.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "graph-traversals",
        title: "BFS & DFS Traversal Algorithms",
        content: "Exploring graph nodes level-by-level (BFS) or depth-first (DFS).",
        subtopics: [
          {
            id: "bfs-dfs-ops",
            title: "BFS (Queue) vs. DFS (Stack/Recursion)",
            content: `
              <h3>1. BFS: Breadth First Search</h3>
              <p>BFS uses a Queue to explore adjacent neighbors level by level. Good for shortest paths in unweighted graphs.</p>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>void BFS(int graph[V][V], int start) {
    int visited[V] = {0};
    int queue[V], front = 0, rear = 0;
    visited[start] = 1;
    queue[rear++] = start;
    while(front &lt; rear) {
        int u = queue[front++];
        printf("%d ", u);
        for(int v=0; v&lt;V; v++) {
            if(graph[u][v] == 1 && !visited[v]) {
                visited[v] = 1;
                queue[rear++] = v;
            }
        }
    }
}</code></pre>
              </div>
              
              <h3>2. DFS: Depth First Search</h3>
              <p>DFS uses recursion/Stack to go deep down a branch before backtracking. Good for cycle detection.</p>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>void DFS(int graph[V][V], int visited[V], int u) {
    visited[u] = 1;
    printf("%d ", u);
    for(int v=0; v&lt;V; v++) {
        if(graph[u][v] == 1 && !visited[v])
            DFS(graph, visited, v);
    }
}</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "mst-shortest-path",
        title: "Minimum Spanning Trees & Dijkstra's Algorithm",
        content: "Greedy optimizations: Kruskal's, Prim's and Dijkstra's single-source shortest path.",
        subtopics: [
          {
            id: "kruskal-prim",
            title: "Kruskal's vs. Prim's MST",
            content: `
              <p>A spanning tree covers all V vertices with exactly <code>V-1</code> edges without forming cycles. A Minimum Spanning Tree (MST) minimizes total edge weight.</p>
              <ul>
                <li><strong>Kruskal's Algorithm:</strong> Sorts all edges by weight, greedily adds edge if it doesn't create cycles (uses Disjoint Set Union). Runs in <code>O(E log E)</code>.</li>
                <li><strong>Prim's Algorithm:</strong> Grows MST from a starting node. Repeatedly adds the minimum weight edge connecting tree nodes to non-tree nodes. Runs in <code>O(E log V)</code>.</li>
              </ul>
            `
          },
          {
            id: "dijkstra",
            title: "Dijkstra's Shortest Path",
            content: `
              <p>Finds the shortest paths from a single source to all vertices in a weighted graph with <strong>non-negative edge weights</strong>.</p>
              <h3>Dijkstra C Code Implementation</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>#include &lt;stdio.h&gt;
#include &lt;limits.h&gt;
#define V 4

int minDistance(int dist[], int visited[]) {
    int min = INT_MAX, min_idx;
    for(int v=0; v&lt;V; v++) {
        if(!visited[v] && dist[v] &lt;= min) {
            min = dist[v];
            min_idx = v;
        }
    }
    return min_idx;
}

void dijkstra(int graph[V][V], int src) {
    int dist[V], visited[V] = {0};
    for(int i=0; i&lt;V; i++) dist[i] = INT_MAX;
    dist[src] = 0;
    for(int count=0; count &lt; V-1; count++) {
        int u = minDistance(dist, visited);
        visited[u] = 1;
        for(int v=0; v&lt;V; v++) {
            if(!visited[v] && graph[u][v] && dist[u] != INT_MAX
               && dist[u] + graph[u][v] &lt; dist[v])
                dist[v] = dist[u] + graph[u][v];
        }
    }
}</code></pre>
              </div>
            `
          }
        ]
      }
    ]
  },
  {
    id: "unit5",
    number: 5,
    title: "Sorting, Searching, Hashing and Indexing",
    description: "Stable and in-place comparisons sorting, linear and binary search algorithms, separate chaining/open addressing hash tables, and database indexes.",
    topics: [
      {
        id: "sorting-section",
        title: "Sorting Algorithms",
        content: "Comparison and non-comparison sorting techniques: Bubble, Selection, Insertion, Quick, Merge, Shell, and Radix Sort.",
        subtopics: [
          {
            id: "sorting-concepts",
            title: "Sorting Concepts & Stability",
            content: `
              <p><strong>Sorting</strong> is the process of arranging data elements in a specified order, typically ascending or descending, based on a key value.</p>
              <ul>
                <li><strong>Stable Sorting:</strong> Does not change the relative order of equal elements (e.g. Bubble, Insertion, Merge Sort).</li>
                <li><strong>In-place Sorting:</strong> Requires constant <code>O(1)</code> auxiliary memory (e.g. Bubble, Selection, Insertion, Heap Sort).</li>
                <li><strong>Internal vs External:</strong> Internal sorting fits all elements in main RAM; external operates on file blocks stored on secondary disks.</li>
              </ul>
            `
          },
          {
            id: "quadratic-sorts",
            title: "Quadratic Sorts: Bubble, Selection & Insertion",
            content: `
              <p>Quadratic sorts run in <code>O(n²)</code> average/worst time. Insertion sort provides <code>O(n)</code> time for already sorted data.</p>
              <h3>Insertion Sort C Implementation</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i-1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}</code></pre>
              </div>
            `
          },
          {
            id: "logarithmic-sorts",
            title: "Logarithmic Sorts: Quick & Merge Sort",
            content: `
              <p>Logarithmic sorts use divide-and-conquer to achieve <code>O(n log n)</code> time complexities.</p>
              <ul>
                <li><strong>Quick Sort:</strong> Selects a pivot and partitions array around it. Worst-case is <code>O(n²)</code> if pivot selection is poor.</li>
                <li><strong>Merge Sort:</strong> Divides array recursively, sorts sub-segments, and merges them. Requires <code>O(n)</code> extra space.</li>
              </ul>
              <h3>Quick Sort C Implementation</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i+1]; arr[i+1] = arr[high]; arr[high] = temp;
    return i+1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}</code></pre>
              </div>
            `
          },
          {
            id: "shell-radix-sorts",
            title: "Advanced Sorts: Shell & Radix Sort",
            content: `
              <ul>
                <li><strong>Shell Sort:</strong> Compares elements separated by a gap sequence (e.g. n/2, n/4...), reducing elements shift overhead.</li>
                <li><strong>Radix Sort:</strong> Non-comparative integer sorting algorithm. Sorts digit-by-digit (LSD to MSD) using stable counting sort. Time: <code>O(d * (n + k))</code>.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "searching-section",
        title: "Searching Algorithms",
        content: "Linear sequential searches and logarithmic sorted binary searches.",
        subtopics: [
          {
            id: "search-algorithms",
            title: "Linear Search vs Binary Search",
            content: `
              <p>Binary search requires sorted lists and cuts the lookup space in half at each iteration.</p>
              <h3>Recursive Binary Search C Implementation</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code>int binarySearch(int arr[], int low, int high, int key) {
    if (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) return binarySearch(arr, mid+1, high, key);
        else return binarySearch(arr, low, mid-1, key);
    }
    return -1;
}</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "hashing-section",
        title: "Hashing & Indexing",
        content: "Hash tables, collision resolution chains, linear/quadratic probing, and database index structures.",
        subtopics: [
          {
            id: "hash-collisions",
            title: "Hash Tables & Collision Resolutions",
            content: `
              <p>A hash function maps keys to indices in range <code>[0, M-1]</code>. When keys overlap (collisions), we use resolution strategies:</p>
              <ul>
                <li><strong>Separate Chaining:</strong> Slots link to dynamic nodes (linked list buckets).</li>
                <li><strong>Open Addressing (Linear Probing):</strong> Probes sequentially: <code>(h(key) + i) % M</code>. Causes primary clustering.</li>
                <li><strong>Double Hashing:</strong> Probes using a second hash function step: <code>(h1(key) + i * h2(key)) % M</code>.</li>
              </ul>
            `
          },
          {
            id: "indexing-basics",
            title: "Indexing Concepts & Systems",
            content: `
              <p>Indexing maps lookup keys to physical disk block pointer addresses to avoid scanning entire data tables.</p>
              <ul>
                <li><strong>Dense Index:</strong> Contains one entry for every record in the table.</li>
                <li><strong>Sparse Index:</strong> Contains one entry per data block.</li>
                <li><strong>B/B+ Tree Index:</strong> Balanced multi-way trees used in relational databases for sequential and range indexing.</li>
              </ul>
            `
          }
        ]
      }
    ]
  }
];

export const cs303Revision = {};
export const cs303Complexities = {};
