import { Unit } from "../../types/subject";

export const cs302Units: Unit[] = [
  {
    id: "unit1",
    number: 1,
    title: "Set Theory, Relations, Functions & Theorem Proving Techniques",
    description: "Definition of countable and uncountable sets, properties of relations, types of functions, recursively defined structures, pigeonhole principle, and induction / contradiction proving techniques.",
    topics: [
      {
        id: "set-theory-section",
        title: "Set Theory Foundations",
        content: "Set definitions, countable and uncountable sets, Venn diagrams, and general identities proofs.",
        subtopics: [
          {
            id: "set-basics",
            title: "Basic Definitions & Set Operations",
            content: `
              <p>A <strong>Set</strong> is a well-defined collection of distinct objects. Objects in a set are called elements.</p>
              <ul>
                <li><strong>Empty Set (ϕ):</strong> A set containing no elements.</li>
                <li><strong>Power Set (P(A)):</strong> The set of all subsets of A. If A has size n, its power set has size <code>2ⁿ</code>.</li>
                <li><strong>Symmetric Difference (A ⊕ B):</strong> Defined as <code>(A - B) ∪ (B - A)</code>.</li>
              </ul>
            `
          },
          {
            id: "countable-uncountable",
            title: "Countable and Uncountable Sets",
            content: `
              <p><strong>Countable Set:</strong> A set that is either finite or has the same cardinality as the set of natural numbers ℕ (i.e. exists a bijection to ℕ).
              <br><em>Examples:</em> Set of integers ℤ, set of rational numbers ℚ are countable.</p>
              
              <p><strong>Uncountable Set:</strong> An infinite set that is not countable.
              <br><em>Examples:</em> Set of real numbers ℝ, any real interval <code>[a, b]</code> with <code>a &lt; b</code>.</p>
              
              <div class="alert alert-info">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="alert-content">
                  <h4>Cantor's Diagonal Argument</h4>
                  <p>Cantor proved that the set of real numbers ℝ is uncountable by demonstrating that any listing of real numbers in (0, 1) misses at least one real number constructed diagonally from the list.</p>
                </div>
              </div>
            `
          },
          {
            id: "set-identities",
            title: "Proofs of General Identities",
            content: `
              <p>Common set algebra rules proved using membership tables or logical expressions:</p>
              <ul>
                <li><strong>De Morgan's Laws:</strong> <code>(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ</code> and <code>(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ</code>.</li>
                <li><strong>Distributive Laws:</strong> <code>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</code>.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "relations-section",
        title: "Relations",
        content: "Relations properties, compositions, equivalence, posets, and job scheduling applications.",
        subtopics: [
          {
            id: "relation-types",
            title: "Properties & Types of Relations",
            content: `
              <p>A relation R from set A to B is a subset of <code>A &times; B</code>.</p>
              <div class="table-responsive">
                <table>
                  <thead>
                    <tr><th>Property</th><th>Condition</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Reflexive</td><td>&forall;a&isin;A, (a,a)&isin;R</td><td>Equality (=)</td></tr>
                    <tr><td>Symmetric</td><td>If (a,b)&isin;R &rArr; (b,a)&isin;R</td><td>Sibling of</td></tr>
                    <tr><td>Antisymmetric</td><td>If (a,b)&isin;R and (b,a)&isin;R &rArr; a=b</td><td>Less than or equal (&le;)</td></tr>
                    <tr><td>Transitive</td><td>If (a,b)&isin;R and (b,c)&isin;R &rArr; (a,c)&isin;R</td><td>Divisibility</td></tr>
                  </tbody>
                </table>
              </div>
            `
          },
          {
            id: "equivalence-poset",
            title: "Equivalence Relations & Posets",
            content: `
              <p><strong>Equivalence Relation:</strong> A relation that is simultaneously Reflexive, Symmetric, and Transitive. The equivalence classes partition the set into disjoint subsets.</p>
              <p><strong>Partial Order (Poset):</strong> A relation that is Reflexive, Antisymmetric, and Transitive. (e.g. Divisibility on ℕ).</p>
            `
          },
          {
            id: "job-scheduling",
            title: "Job-Scheduling Precedence Relations",
            content: `
              <p>The job-scheduling problem models sequential tasks where some jobs must finish before others can begin. This forms a partial order (poset) structure, which is resolved into a sequential execution schedule using a <strong>Topological Sort</strong>.</p>
            `
          }
        ]
      },
      {
        id: "functions-section",
        title: "Functions",
        content: "Injection, surjection, bijection, compositions, recursive functions, and the Pigeonhole Principle.",
        subtopics: [
          {
            id: "function-types",
            title: "Injection, Surjection & Bijection",
            content: `
              <ul>
                <li><strong>One-to-One (Injective):</strong> <code>f(a₁) = f(a₂) &rArr; a₁ = a₂</code>.</li>
                <li><strong>Onto (Surjective):</strong> Range equals codomain (every codomain element has a pre-image).</li>
                <li><strong>Bijection:</strong> Both one-to-one and onto. Only bijections have inverse functions.</li>
              </ul>
            `
          },
          {
            id: "pigeonhole",
            title: "Pigeonhole Principle & Recursion",
            content: `
              <p><strong>Pigeonhole Principle:</strong> If <code>n</code> items are placed in <code>m</code> containers where <code>n &gt; m</code>, then at least one container holds more than one item.</p>
              <p><strong>Generalized version:</strong> If N objects are placed into k boxes, then at least one box contains at least <code>&lceil;N/k&rceil;</code> objects.</p>
            `
          }
        ]
      },
      {
        id: "proving-techniques",
        title: "Theorem Proving Techniques",
        content: "Proving mathematical theorems via induction and contradiction.",
        subtopics: [
          {
            id: "induction",
            title: "Mathematical Induction",
            content: `
              <p>Steps to prove a proposition P(n) for all integers n &ge; n₀:</p>
              <ol>
                <li><strong>Base Case:</strong> Prove P(n₀) is true.</li>
                <li><strong>Inductive Step:</strong> Assume P(k) is true (induction hypothesis). Prove P(k+1) is true.</li>
              </ol>
            `
          },
          {
            id: "contradiction",
            title: "Proof by Contradiction",
            content: `
              <p>Assume the negation of the proposition is true, and show that this assumption logically leads to a mathematical contradiction.
              <br><em>Examples:</em> Proving <code>&radic;2</code> is irrational, proving the infinitude of prime numbers.</p>
            `
          }
        ]
      }
    ]
  }
];
