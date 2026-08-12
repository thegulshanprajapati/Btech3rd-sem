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
              <h3>Core Terminology</h3>
              <ul>
                <li><strong>Vertex (Node):</strong> A single structural element.</li>
                <li><strong>Edge:</strong> Connection link between two vertices; can be directed (digraph) or undirected.</li>
                <li><strong>Degree:</strong> Number of edges incident to a node (in-degree/out-degree for digraphs).</li>
                <li><strong>Connected Graph:</strong> A path exists between every pair of vertices.</li>
              </ul>
              
              <div class="diagram-container">
                <pre>
Undirected Graph:          Directed Graph:
    A                       A &rarr;&rarr; B
   / \\                      &darr;    &darr;
  B&mdash;&mdash;&mdash;C                      C &larr;&larr; D
                </pre>
              </div>
            `
          },
          {
            id: "graph-representation",
            title: "Matrix vs List Representations",
            content: `
              <p>Graphs are typically represented in memory using either an <strong>Adjacency Matrix</strong> (2D array) or an <strong>Adjacency List</strong> (linked list array).</p>
              <h3>Comparison Table</h3>
              <div class="table-responsive">
                <table>
                  <thead>
                    <tr><th>Feature</th><th>Adjacency Matrix</th><th>Adjacency List</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Space Complexity</td><td><code>O(V²)</code></td><td><code>O(V + E)</code></td></tr>
                    <tr><td>Edge Verification</td><td><code>O(1)</code></td><td><code>O(deg(u))</code></td></tr>
                    <tr><td>Graph density choice</td><td>Best for dense graphs</td><td>Best for sparse graphs</td></tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ]
      },
      {
        id: "graph-traversals",
        title: "Graph Traversals & C Code",
        content: "Exploring graphs using Breadth First Search (BFS) and Depth First Search (DFS).",
        subtopics: [
          {
            id: "graph-bfs",
            title: "BFS: Breadth-First-Search",
            content: `
              <p>BFS explores nodes level by level using a Queue helper. Time Complexity is <code>O(V + E)</code> (using list) or <code>O(V²)</code> (using matrix).</p>
              <h3>BFS Implementation in C (Adjacency Matrix)</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code><span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>
<span class="keyword">#define</span> V 5

<span class="type">void</span> <span class="function">BFS</span>(<span class="type">int</span> graph[V][V], <span class="type">int</span> start) {
    <span class="type">int</span> visited[V] = {0};
    <span class="type">int</span> queue[V], front = 0, rear = 0;
    visited[start] = 1;
    queue[rear++] = start;
    <span class="keyword">while</span> (front &lt; rear) {
        <span class="type">int</span> u = queue[front++];
        <span class="function">printf</span>(<span class="string">"%d "</span>, u);
        <span class="keyword">for</span> (<span class="type">int</span> v = 0; v &lt; V; v++) {
            <span class="keyword">if</span> (graph[u][v] == 1 && !visited[v]) {
                visited[v] = 1;
                queue[rear++] = v;
            }
        }
    }
}</code></pre>
              </div>
            `
          },
          {
            id: "graph-dfs",
            title: "DFS: Depth-First-Search",
            content: `
              <p>DFS explores branches deeply before backtracking, using recursion or an explicit Stack structure.</p>
              <h3>DFS Recursive Implementation (Adjacency Matrix)</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code><span class="type">void</span> <span class="function">DFS</span>(<span class="type">int</span> graph[V][V], <span class="type">int</span> visited[V], <span class="type">int</span> u) {
    visited[u] = 1;
    <span class="function">printf</span>(<span class="string">"%d "</span>, u);
    <span class="keyword">for</span> (<span class="type">int</span> v = 0; v &lt; V; v++) {
        <span class="keyword">if</span> (graph[u][v] == 1 && !visited[v])
            <span class="function">DFS</span>(graph, visited, v);
    }
}</code></pre>
              </div>
            `
          }
        ]
      },
      {
        id: "graph-mst-shortest-paths",
        title: "Minimum Spanning Tree & Shortest Paths",
        content: "Kruskal/Prim minimum spanning algorithms and Dijkstra's single-source shortest path.",
        subtopics: [
          {
            id: "graph-mst",
            title: "MST: Kruskal & Prim Algorithms",
            content: `
              <p>A spanning tree of V vertices has exactly <code>V - 1</code> edges with no cycles. The Minimum Spanning Tree (MST) yields the minimum total weight.</p>
              <ul>
                <li><strong>Kruskal's Algorithm:</strong> Greedy. Sorts all edges, selects edge if it does not form a cycle (via Union-Find). Time: <code>O(E log E)</code>.</li>
                <li><strong>Prim's Algorithm:</strong> Greedy. Expands one vertex at a time, selecting the smallest link connecting unvisited nodes. Time: <code>O(E log V)</code>.</li>
              </ul>
            `
          },
          {
            id: "graph-dijkstra",
            title: "Dijkstra Shortest Path Algorithm",
            content: `
              <p>Finds the shortest distance from a single source to all vertices in a weighted graph with non-negative weights.</p>
              <h3>Dijkstra C Implementation (Adjacency Matrix)</h3>
              <div class="code-container">
                <div class="code-header"><span class="code-lang">c</span><button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button></div>
                <pre><code><span class="type">void</span> <span class="function">dijkstra</span>(<span class="type">int</span> graph[V][V], <span class="type">int</span> src) {
    <span class="type">int</span> dist[V], visited[V] = {0};
    <span class="keyword">for</span> (<span class="type">int</span> i = 0; i &lt; V; i++) dist[i] = INT_MAX;
    dist[src] = 0;
    <span class="keyword">for</span> (<span class="type">int</span> count = 0; count &lt; V-1; count++) {
        <span class="type">int</span> u = <span class="function">minDistance</span>(dist, visited);
        visited[u] = 1;
        <span class="keyword">for</span> (<span class="type">int</span> v = 0; v &lt; V; v++)
            <span class="keyword">if</span> (!visited[v] && graph[u][v] && dist[u] != INT_MAX
                && dist[u] + graph[u][v] &lt; dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
}</code></pre>
              </div>
            `
          }
        ]
      }
    ]
  }
];
