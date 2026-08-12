import { Unit } from "../../types/subject";

export const cs303Units: Unit[] = [
  {
    id: "unit1",
    number: 1,
    title: "Introduction to Data Structures, Arrays & Linked Lists",
    description: "Review of C language, variables, pointers, 2D arrays math formulas, and singly/doubly/circular linked list operations.",
    topics: [
      {
        id: "c-review",
        title: "Review of C Programming Language",
        content: "Core constructs of C language for data structures implementation.",
        subtopics: [
          {
            id: "c-review-defs",
            title: "Definition & Introduction",
            content: `
              <p><strong>Definition:</strong> A structured, high-level programming language that provides low‑level memory access, a rich set of operators, and constructs for modular programming. It is the primary implementation language for data structures in this course.</p>
              <p><strong>Introduction:</strong> Data structures are built using arrays, pointers, structures, and dynamic memory. A solid grasp of these C features is essential before designing efficient algorithms.</p>
            `
          },
          {
            id: "c-constructs",
            title: "Key C Constructs for Data Structures",
            content: `
              <ol>
                <li><strong>Variables & Data Types:</strong> <code>int</code>, <code>char</code>, <code>float</code>, <code>double</code>, <code>void</code>, pointers, and user‑defined types via <code>typedef</code> and <code>struct</code>.</li>
                <li><strong>Operators:</strong> Arithmetic, relational, logical, bitwise, assignment, and pointer operators (<code>*</code>, <code>&amp;</code>, <code>-&gt;</code>).</li>
                <li><strong>Control Statements:</strong> <code>if-else</code>, <code>switch</code>, <code>for</code>, <code>while</code>, <code>do-while</code>.</li>
                <li><strong>Functions:</strong> Modular code with parameters (pass‑by‑value and pass‑by‑reference using pointers).</li>
                <li><strong>Recursion:</strong> Function calling itself; must have a base condition.</li>
                <li><strong>Arrays:</strong> Contiguous collection of homogeneous elements; zero‑indexed; relation with pointers.</li>
                <li><strong>Pointers:</strong> Variables that store memory addresses; powerful for dynamic structures.</li>
                <li><strong>Structures:</strong> User‑defined collections of heterogeneous data; accessed via dot (<code>.</code>) for variables and arrow (<code>-&gt;</code>) for pointers.</li>
                <li><strong>Dynamic Memory Allocation:</strong> Allocate and free memory at runtime using <code>malloc()</code>, <code>calloc()</code>, <code>realloc()</code>, <code>free()</code>.</li>
                <li><strong>typedef:</strong> Creates aliases for data types, enhancing readability.</li>
              </ol>

              <div class="diagram-container">
                <pre>
<strong>C Memory Management Architecture (Heap vs Stack):</strong>

  High Memory Addresses
  +---------------------------------------+
  | Stack (Local variables, call stack)  |  &larr; Grows Downwards
  |   | (e.g. ptr, n, structural local)   |
  |   v                                   |
  +---------------------------------------+
  |                  v                    |
  |                                       |
  |                  ^                    |
  |   ^                                   |
  |   | (allocated via malloc/calloc)     |
  | Heap (Dynamic data segments)          |  &larr; Grows Upwards
  +---------------------------------------+
  | Global / Static Variables             |
  +---------------------------------------+
  | Code Segment (Binary instructions)    |
  +---------------------------------------+
  Low Memory Addresses
                </pre>
              </div>

              <h3>Terminology</h3>
              <ul>
                <li><strong>Pointer:</strong> A variable holding the address of another variable.</li>
                <li><strong>Pointer Arithmetic:</strong> Adding/subtracting integers to pointers moves by the size of the pointed type.</li>
                <li><strong>Array‑Pointer Equivalence:</strong> <code>arr[i]</code> &harr; <code>*(arr + i)</code>.</li>
                <li><strong>Structure Pointer:</strong> A pointer to a <code>struct</code>; members accessed with <code>-&gt;</code>.</li>
                <li><strong>Dynamic Memory:</strong> Heap memory allocated during execution; persists until <code>free()</code> is called.</li>
                <li><strong>Memory Leak:</strong> Allocated memory not freed, causing wastage.</li>
              </ul>

              <div class="diagram-container">
                <pre>
<strong>Memory Representation:</strong>
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

<strong>Array‑Pointer relation:</strong>
int arr[3] = {10,20,30};

arr[0] = *(arr+0) = 10
arr[1] = *(arr+1) = 20
arr[2] = *(arr+2) = 30
                </pre>
              </div>
            `
          },
          {
            id: "c-code-malloc",
            title: "Memory Allocation Code Examples",
            content: `
              <p>Below is a standard C implementation of pointer manipulation and structural operations.</p>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code><span class="type">int</span> *ptr;
<span class="type">int</span> n = 5;
ptr = (<span class="type">int</span>*) <span class="function">malloc</span>(n * <span class="keyword">sizeof</span>(<span class="type">int</span>));
<span class="keyword">if</span>(ptr == <span class="type">NULL</span>) <span class="function">exit</span>(1);
<span class="keyword">for</span>(<span class="type">int</span> i=0; i&lt;n; i++) ptr[i] = i+1;
<span class="type">int</span> *ptr2 = (<span class="type">int</span>*) <span class="function">calloc</span>(n, <span class="keyword">sizeof</span>(<span class="type">int</span>));
ptr = (<span class="type">int</span>*) <span class="function">realloc</span>(ptr, 10 * <span class="keyword">sizeof</span>(<span class="type">int</span>));
<span class="function">free</span>(ptr);
<span class="function">free</span>(ptr2);</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "ds-intro",
        title: "Introduction to Data Structures",
        content: "Foundational definitions, difference matrix and operations.",
        subtopics: [
          {
            id: "ds-intro-defs",
            title: "Definitions & ADT",
            content: `
              <ul>
                <li><strong>Data Structure:</strong> A way to store and organise data so that operations can be performed efficiently.</li>
                <li><strong>Abstract Data Type (ADT):</strong> A logical description of data and operations without specifying implementation details.</li>
              </ul>
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
    description: "LIFO stack arrays and lists, multi-stacks, evaluation algorithms (infix to postfix), FIFO circular queues, and deques.",
    topics: [
      {
        id: "stack-intro",
        title: "Stack Concept & Implementations",
        content: "Understanding LIFO, arrays versus list setups.",
        subtopics: [
          {
            id: "stack-intro-defs",
            title: "Stack Definition & ADT",
            content: `
              <p>A stack is a linear data structure that follows the <strong>Last‑In‑First‑Out (LIFO)</strong> principle.</p>
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
    description: "Binary Search Tree properties, AVL rotation balancings, heaps array-mapping layouts, and Red-Black / B-Tree definitions.",
    topics: [
      {
        id: "tree-basics-section",
        title: "Tree Basics & Binary Trees",
        content: "Hierarchical terminology, mathematical properties, and tree structures.",
        subtopics: [
          {
            id: "tree-terminology",
            title: "Tree Definition & Terminology",
            content: `
              <p>A tree is a non‑linear, hierarchical data structure consisting of nodes connected by edges.</p>
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
    description: "Adjacency matrix and list layouts, BFS/DFS traversal codes, Kruskal/Prim MST processes, and Dijkstra shortest paths.",
    topics: [
      {
        id: "graph-basics-section",
        title: "Graph Basics & Formats",
        content: "Graph terminology, directed/undirected types, and matrix versus list representations.",
        subtopics: [
          {
            id: "graph-terminology",
            title: "Graph Definition & Terminology",
            content: `
              <p>A graph <strong>G = (V, E)</strong> is a non‑linear data structure consisting of a set of vertices (nodes) <strong>V</strong> and a set of edges <strong>E</strong> that connect pairs of vertices.</p>
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
            title: "Sorting Concepts & Recap",
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
                <pre><code><span class="type">void</span> <span class="function">insertionSort</span>(<span class="type">int</span> arr[], <span class="type">int</span> n) {
    <span class="keyword">for</span> (<span class="type">int</span> i = 1; i &lt; n; i++) {
        <span class="type">int</span> key = arr[i];
        <span class="type">int</span> j = i-1;
        <span class="keyword">while</span> (j &gt;= 0 && arr[j] &gt; key) {
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
                <pre><code><span class="type">int</span> <span class="function">partition</span>(<span class="type">int</span> arr[], <span class="type">int</span> low, <span class="type">int</span> high) {
    <span class="type">int</span> pivot = arr[high];
    <span class="type">int</span> i = low - 1;
    <span class="keyword">for</span> (<span class="type">int</span> j = low; j &lt; high; j++) {
        <span class="keyword">if</span> (arr[j] &lt;= pivot) {
            i++;
            <span class="type">int</span> temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    <span class="type">int</span> temp = arr[i+1]; arr[i+1] = arr[high]; arr[high] = temp;
    <span class="keyword">return</span> i+1;
}

<span class="type">void</span> <span class="function">quickSort</span>(<span class="type">int</span> arr[], <span class="type">int</span> low, <span class="type">int</span> high) {
    <span class="keyword">if</span> (low &lt; high) {
        <span class="type">int</span> pi = <span class="function">partition</span>(arr, low, high);
        <span class="function">quickSort</span>(arr, low, pi-1);
        <span class="function">quickSort</span>(arr, pi+1, high);
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
                <pre><code><span class="type">int</span> <span class="function">binarySearch</span>(<span class="type">int</span> arr[], <span class="type">int</span> low, <span class="type">int</span> high, <span class="type">int</span> key) {
    <span class="keyword">if</span> (low &lt;= high) {
        <span class="type">int</span> mid = low + (high - low) / 2;
        <span class="keyword">if</span> (arr[mid] == key) <span class="keyword">return</span> mid;
        <span class="keyword">else</span> <span class="keyword">if</span> (arr[mid] &lt; key) <span class="keyword">return</span> <span class="function">binarySearch</span>(arr, mid+1, high, key);
        <span class="keyword">else</span> <span class="keyword">return</span> <span class="function">binarySearch</span>(arr, low, mid-1, key);
    }
    <span class="keyword">return</span> -1;
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
