const questions = [

  // ─────────────────────────────────────────────
  // SOURCE: MCQs-26.docx  (Q1–13)
  // ─────────────────────────────────────────────

  {
    cat: "Limits – Indeterminate Forms",
    q: "The function lim<sub>x→9</sub> (x²−81)/(x−9) has what type of limit?",
    opts: ["Infinite limit", "Indeterminate form (0/0)", "Oscillatory", "Does not exist"],
    ans: 1,
    exp: "Substituting x = 9 gives (81−81)/(9−9) = 0/0, which is an <strong>indeterminate form</strong>. It is not infinite or oscillatory — it simply requires further work (factoring) to resolve."
  },
  {
    cat: "Limits – Indeterminate Forms",
    q: "Why does lim<sub>x→9</sub> (x²−81)/(x−9) require factoring?",
    opts: ["Substitution gives a finite value", "The graph fails", "Substitution gives the 0/0 form", "None of the above"],
    ans: 2,
    exp: "Direct substitution yields <strong>0/0</strong>, which is undefined. Factoring the numerator as (x−9)(x+9) and cancelling (x−9) reveals the true limit of 18."
  },
  {
    cat: "Limits – Table & Graph",
    q: "From table values approaching x = 1, f(x) approaches 3 from both sides. Then the limit is:",
    opts: ["Limit = 1", "Limit does not exist", "Limit = 3", "Infinite limit"],
    ans: 2,
    exp: "When f(x) approaches the <strong>same value from both sides</strong>, the two-sided limit equals that common value. Here lim<sub>x→1</sub> f(x) = <strong>3</strong>."
  },
  {
    cat: "Limits – Laws",
    q: "Which statement best summarises the Limit Laws?",
    opts: ["Limits can't be added", "Limit of sum = sum of limits", "Limits are always infinite", "None of the above"],
    ans: 1,
    exp: "The <strong>Sum Law</strong> states: lim[f(x) + g(x)] = lim f(x) + lim g(x), provided both individual limits exist. Similar laws hold for differences, products, and quotients."
  },
  {
    cat: "Limits – Techniques",
    q: "Factoring helps in evaluating limits when:",
    opts: ["The function is infinite", "A graph is needed", "The expression simplifies by cancelling common factors", "None of the above"],
    ans: 2,
    exp: "Factoring is the go-to technique when direct substitution produces 0/0. A <strong>common factor in the numerator and denominator can be cancelled</strong>, after which substitution works."
  },
  {
    cat: "Limits – One-sided",
    q: "A graph shows: left-hand limit = 2, right-hand limit = 5. Then the two-sided limit:",
    opts: ["Limit = 3", "Limit = 6", "Limit = 9", "Limit does not exist"],
    ans: 3,
    exp: "A two-sided limit exists <strong>only</strong> when the left-hand and right-hand limits are equal. Since 2 ≠ 5, <strong>the limit does not exist</strong>."
  },
  {
    cat: "Continuity – Definition",
    q: "Which best summarises continuity at a point x = a?",
    opts: ["Limit exists only", "Function defined only", "Limit exists and equals f(a)", "Graph smooth only"],
    ans: 2,
    exp: "Continuity at x = a requires <strong>three conditions</strong>: (1) f(a) is defined, (2) lim<sub>x→a</sub> f(x) exists, and (3) lim<sub>x→a</sub> f(x) = f(a). All three must hold."
  },
  {
    cat: "Continuity – Intervals",
    q: "Which best describes continuity on a closed interval [a, b]?",
    opts: ["Continuous only inside (a,b)", "Continuous at endpoints and all interior points", "Only the limit exists", "Only the graph is smooth"],
    ans: 1,
    exp: "Continuity on <strong>[a, b]</strong> means the function is continuous at every interior point, and satisfies one-sided continuity at both endpoints a and b."
  },
  {
    cat: "Continuity – Polynomials",
    q: "Polynomial functions are:",
    opts: ["Discontinuous everywhere", "Continuous everywhere", "Only continuous at x = 0", "Oscillatory"],
    ans: 1,
    exp: "Polynomials are defined for every real number and their limits always equal their function values, so they are <strong>continuous everywhere</strong> on ℝ."
  },
  {
    cat: "Derivatives – Identifying Rules",
    q: "The derivative rule required for f(x) = 4x³ / (2x−1) is:",
    opts: ["Chain Rule", "Quotient Rule", "Product Rule", "Power Rule"],
    ans: 1,
    exp: "A function expressed as a <strong>ratio of two differentiable functions</strong> requires the <strong>Quotient Rule</strong>: d/dx(u/v) = (u′v − uv′) / v²."
  },
  {
    cat: "Derivatives – Chain Rule",
    q: "Using the Chain Rule, find the derivative of f(x) = (2x+1)³.",
    opts: ["3(2x+1)²", "6(2x+1)²", "3x²+1", "2x+1"],
    ans: 1,
    exp: "<strong>Chain Rule</strong>: d/dx[u³] = 3u²·u′. Here u = 2x+1, u′ = 2. So f′(x) = 3(2x+1)² × 2 = <strong>6(2x+1)²</strong>."
  },
  {
    cat: "Derivatives – Trigonometric",
    q: "The derivative of f(x) = sin x − cos x is:",
    opts: ["cos x + sin x", "sin x − cos x", "−cos x + sin x", "0"],
    ans: 0,
    exp: "d/dx(sin x) = cos x and d/dx(−cos x) = +sin x. Therefore f′(x) = <strong>cos x + sin x</strong>."
  },
  {
    cat: "Derivatives – Product Rule",
    q: "The derivative of f(x) = x² · sin x is:",
    opts: ["2x sin x + x² cos x", "x² cos x", "2x cos x", "sin x + cos x"],
    ans: 0,
    exp: "<strong>Product Rule</strong>: d/dx(u·v) = u′v + uv′. u = x², u′ = 2x; v = sin x, v′ = cos x. So f′(x) = <strong>2x sin x + x² cos x</strong>."
  },

  // ─────────────────────────────────────────────
  // SOURCE: Y-1145.docx  (Q14–53)
  // ─────────────────────────────────────────────

  {
    cat: "Domain – Natural Domain",
    q: "What is the natural domain of f(x) = √(x−3)?",
    opts: ["x ≥ 3", "x ≤ 3", "All real numbers", "x ≠ 3"],
    ans: 0,
    exp: "A square root requires a <strong>non-negative radicand</strong>. Setting x−3 ≥ 0 gives <strong>x ≥ 3</strong>. Values below 3 produce a negative under the radical, which is undefined in ℝ."
  },
  {
    cat: "Domain – Natural Domain",
    q: "What is the domain of f(x) = 1/(x−5)?",
    opts: ["x ≠ 5", "x = 5", "All real numbers", "x ≥ 5"],
    ans: 0,
    exp: "Division by zero is undefined. The denominator equals zero when x = 5, so we must <strong>exclude x = 5</strong>. The domain is all reals with <strong>x ≠ 5</strong>."
  },
  {
    cat: "Limits – At Infinity",
    q: "lim<sub>x→∞</sub> 1/x = ?",
    opts: ["1", "0", "∞", "−1"],
    ans: 1,
    exp: "As x grows without bound, the fraction 1/x shrinks toward <strong>0</strong>. This is a fundamental limit at infinity."
  },
  {
    cat: "Limits – Laws",
    q: "If lim<sub>x→a</sub> f(x) = L and lim<sub>x→a</sub> g(x) = M, then lim<sub>x→a</sub> [f(x) + g(x)] = ?",
    opts: ["L + M", "L × M", "L / M", "None of the above"],
    ans: 0,
    exp: "The <strong>Sum Law of Limits</strong>: the limit of a sum equals the sum of the individual limits — lim[f + g] = L + M — provided both limits exist."
  },
  {
    cat: "Limits – Standard",
    q: "The value of sin(x)/x approaches 1 as x approaches:",
    opts: ["1", "0", "∞", "−∞"],
    ans: 1,
    exp: "lim<sub>x→0</sub> sin(x)/x = <strong>1</strong> is a classic trigonometric limit proven via the Squeeze Theorem. The key is that x must approach <strong>0</strong>."
  },
  {
    cat: "Limits – Asymptotes",
    q: "If f(x) → +∞ or f(x) → −∞ as x → a from either side, the graph has:",
    opts: ["A horizontal asymptote", "A vertical asymptote", "A parabola", "A hyperbola"],
    ans: 1,
    exp: "When a function grows to ±∞ as x approaches a finite value a, the vertical line x = a is a <strong>vertical asymptote</strong>."
  },
  {
    cat: "Limits – Asymptotes",
    q: "If lim<sub>x→+∞</sub> f(x) = L, then the line y = L is called:",
    opts: ["A horizontal asymptote", "A vertical asymptote", "A parabola", "A hyperbola"],
    ans: 0,
    exp: "When a function approaches a finite value L as x → ±∞, the line <strong>y = L</strong> is a <strong>horizontal asymptote</strong>."
  },
  {
    cat: "Domain – Polynomials",
    q: "The domain of a polynomial function is:",
    opts: ["Finite", "All real numbers", "Positive only", "Negative only"],
    ans: 1,
    exp: "Polynomial functions have no denominators or radicals, so they are defined for <strong>every real number</strong>. Their domain is all of ℝ."
  },
  {
    cat: "Derivatives – Constant",
    q: "The derivative of a constant function is:",
    opts: ["1", "0", "x", "∞"],
    ans: 1,
    exp: "A constant never changes, so its <strong>rate of change is zero</strong>. d/dx(c) = <strong>0</strong> for any constant c."
  },
  {
    cat: "Derivatives – Power Rule",
    q: "d/dx (x²) = ?",
    opts: ["x", "2x", "x²", "2"],
    ans: 1,
    exp: "<strong>Power Rule</strong>: d/dx(xⁿ) = n·xⁿ⁻¹. So d/dx(x²) = 2·x¹ = <strong>2x</strong>."
  },
  {
    cat: "Derivatives – Chain Rule",
    q: "The Chain Rule applies to:",
    opts: ["Sums of functions", "Composite functions", "Products of functions", "Constant functions"],
    ans: 1,
    exp: "The <strong>Chain Rule</strong> is used when differentiating <strong>composite functions</strong> f(g(x)): d/dx[f(g(x))] = f′(g(x)) · g′(x)."
  },
  {
    cat: "Limits – Evaluation",
    q: "lim<sub>x→3</sub> (x²−9)/(x−3) = ?",
    opts: ["0", "1", "6", "None of the above"],
    ans: 2,
    exp: "Factor: x²−9 = (x−3)(x+3). Cancel (x−3). Then lim<sub>x→3</sub> (x+3) = 3+3 = <strong>6</strong>."
  },
  {
    cat: "Domain – Combined Restrictions",
    q: "What is the domain of f(x) = √(x+1) / (x−2)?",
    opts: ["x ≥ −1, x ≠ 2", "All real numbers", "x > 2", "x ≥ 2"],
    ans: 0,
    exp: "Two restrictions: √(x+1) requires x ≥ −1; the denominator requires x ≠ 2. Combined domain: <strong>x ≥ −1 and x ≠ 2</strong>."
  },
  {
    cat: "Continuity – Definition",
    q: "A function is continuous at x = a means:",
    opts: ["Limit exists only", "f(a) exists only", "Limit = f(a) (and both exist)", "All three conditions hold"],
    ans: 3,
    exp: "Continuity at x = a requires <strong>all three</strong>: f(a) defined, lim<sub>x→a</sub> f(x) exists, and they are equal. Option D (All) captures this correctly."
  },
  {
    cat: "Continuity – Types",
    q: "Jump discontinuity means:",
    opts: ["Both one-sided limits are equal", "Left-hand and right-hand limits exist but are unequal", "The function grows to infinity", "A removable discontinuity"],
    ans: 1,
    exp: "At a <strong>jump discontinuity</strong>, both one-sided limits exist but are <strong>not equal</strong>, so the two-sided limit does not exist. The graph 'jumps' from one finite value to another."
  },
  {
    cat: "Domain – Natural Domain",
    q: "The domain of f(x) = x/x is:",
    opts: ["x = 0", "x = 1", "All real values of x", "All real values except x = 0"],
    ans: 3,
    exp: "f(x) = x/x is undefined when x = 0 (division by zero). For all other x the expression equals 1, so the domain is <strong>all reals except x = 0</strong>."
  },
  {
    cat: "Domain – Ordered Pairs",
    q: "What is the domain of the set of ordered pairs {(2,0), (8,−3), (5,1), (−4,9)}?",
    opts: ["{0, −3, 1, 9}", "{2, 8, 5, −4}", "ℝ", "{0, −3, 5, −4}"],
    ans: 1,
    exp: "The <strong>domain</strong> of a relation is the set of all <strong>first elements (x-values)</strong>: <strong>{2, 8, 5, −4}</strong>. The y-values form the range."
  },
  {
    cat: "Domain – Natural Domain",
    q: "The natural domain of f(x) = √x / (x−1) is:",
    opts: ["[0, ∞)", "[0, ∞) − {1}", "[0,1) ∪ (1,∞)", "x = 1"],
    ans: 2,
    exp: "√x requires x ≥ 0; the denominator requires x ≠ 1. Combined: <strong>[0,1) ∪ (1,∞)</strong>."
  },
  {
    cat: "Continuity – Theorems",
    q: "The Intermediate Value Theorem requires the function to be:",
    opts: ["Differentiable", "Continuous", "Linear", "Increasing"],
    ans: 1,
    exp: "The <strong>IVT</strong> guarantees every intermediate value is achieved, but only when f is <strong>continuous</strong> on the closed interval [a, b]."
  },
  {
    cat: "Domain – Gaps in Graph",
    q: "For what values of x is there a gap in the graph of f(x) = (x²−9)/(x²−5x+6)?",
    opts: ["5 and 6", "2 and 3", "−2 and −3", "3 and −3"],
    ans: 1,
    exp: "Factor the denominator: x²−5x+6 = (x−2)(x−3). The function is undefined at <strong>x = 2 and x = 3</strong>, creating gaps in the graph."
  },
  {
    cat: "Continuity – Everywhere",
    q: "The function which is continuous everywhere is:",
    opts: ["Exponential function", "Logarithmic function", "Polynomial function", "Step function"],
    ans: 2,
    exp: "<strong>Polynomial functions</strong> are defined and continuous for every real number. Logarithms require x > 0; step functions have jump discontinuities."
  },
  {
    cat: "Continuity – Types",
    q: "Which type of discontinuity occurs at x = 0 for f(x) = 1/x?",
    opts: ["Removable", "Jump", "Infinite", "Point"],
    ans: 2,
    exp: "As x → 0, f(x) = 1/x → ±∞. Because the function <strong>grows without bound</strong>, this is an <strong>infinite discontinuity</strong>."
  },
  {
    cat: "Continuity – Graph Interpretation",
    q: "A function is continuous at every point if you can draw its graph without:",
    opts: ["Using a ruler", "Lifting your pencil", "Crossing the x-axis", "Crossing the y-axis"],
    ans: 1,
    exp: "The informal definition of continuity: the graph has no breaks, holes, or jumps — you can draw it without ever <strong>lifting your pencil</strong>."
  },
  {
    cat: "Derivatives – Logarithmic",
    q: "The derivative of f(x) = ln x is:",
    opts: ["x", "1/x", "1/ln x", "x/ln x"],
    ans: 1,
    exp: "Standard result: d/dx(ln x) = <strong>1/x</strong>, valid for x > 0."
  },
  {
    cat: "Derivatives – Exponential",
    q: "d/dx (e²ˣ) = ?",
    opts: ["x", "2e²ˣ", "2xe^(x−1)", "1/x"],
    ans: 1,
    exp: "<strong>Chain Rule</strong>: d/dx(e^u) = e^u · u′. Here u = 2x, u′ = 2. So d/dx(e²ˣ) = <strong>2e²ˣ</strong>."
  },
  {
    cat: "Derivatives – Geometric",
    q: "The slope of the tangent line to a curve at a point equals:",
    opts: ["The integral", "The limit", "The derivative", "The function value"],
    ans: 2,
    exp: "Geometrically, the <strong>derivative f′(a)</strong> gives the instantaneous rate of change, which is exactly the <strong>slope of the tangent line</strong> at x = a."
  },
  {
    cat: "Domain – Natural Domain",
    q: "The natural domain excludes:",
    opts: ["Undefined values", "All real numbers", "Only zero", "Only positive values"],
    ans: 0,
    exp: "The natural domain is the largest set for which the function is defined. It automatically <strong>excludes all values that make the function undefined</strong> (e.g., division by zero, negative radicands)."
  },
  {
    cat: "Limits – Standard",
    q: "lim<sub>x→0</sub> cos x = ?",
    opts: ["1", "0", "−1", "∞"],
    ans: 0,
    exp: "cos(0) = 1. Since cosine is continuous everywhere, lim<sub>x→0</sub> cos x = <strong>1</strong>."
  },
  {
    cat: "Continuity – Polynomials",
    q: "Polynomial functions are:",
    opts: ["Discontinuous", "Continuous", "Periodic", "Undefined"],
    ans: 1,
    exp: "Polynomials are <strong>continuous everywhere</strong> on ℝ — they have no breaks, holes, or asymptotes."
  },
  {
    cat: "Derivatives – Linear",
    q: "d/dx (3x + 5) = ?",
    opts: ["3", "5", "x", "0"],
    ans: 0,
    exp: "The derivative of a linear function y = mx + c is its slope <strong>m</strong>. Here m = 3, so d/dx(3x+5) = <strong>3</strong>."
  },
  {
    cat: "Domain – Natural Domain",
    q: "The domain of 1/√x is:",
    opts: ["x > 0", "x ≥ 0", "All real numbers", "x ≠ 0"],
    ans: 0,
    exp: "√x requires x ≥ 0, and 1/√x additionally requires x ≠ 0. Combined: <strong>x > 0</strong> (strictly positive)."
  },
  {
    cat: "Derivatives – Square Root",
    q: "The derivative of f(x) = √x is:",
    opts: ["1/x", "1/(2√x)", "x/2", "2/x"],
    ans: 1,
    exp: "Power Rule: d/dx(x^(1/2)) = (1/2)x^(−1/2) = <strong>1/(2√x)</strong>."
  },
  {
    cat: "Derivatives – Chain Rule on Root",
    q: "The derivative of f(x) = √(sin x) is:",
    opts: ["cos x / (2√(sin x))", "1/(2√(sin x))", "cos x · √(sin x)", "sin x / (2√(cos x))"],
    ans: 0,
    exp: "Chain Rule: d/dx(√u) = u′/(2√u). Here u = sin x, u′ = cos x. So f′(x) = <strong>cos x / (2√(sin x))</strong>."
  },
  {
    cat: "Derivatives – Geometric",
    q: "The slope of a tangent line to a graph at a point is called:",
    opts: ["Power rule", "Quotient rule", "Derivative", "Product rule"],
    ans: 2,
    exp: "The <strong>derivative</strong> of a function at a point gives the slope of the tangent line to the curve at that point — this is its core geometric meaning."
  },
  {
    cat: "Derivatives – Identifying Rules",
    q: "When differentiating a composite function (a function inside another function), you use:",
    opts: ["Product rule", "Quotient rule", "Chain rule", "L'Hôpital's rule"],
    ans: 2,
    exp: "The <strong>Chain Rule</strong> is specifically designed for <strong>composite functions</strong> f(g(x)): d/dx[f(g(x))] = f′(g(x)) · g′(x)."
  },
  {
    cat: "Derivatives – Linear",
    q: "The derivative of a linear equation y = mx + c is:",
    opts: ["c", "x", "y′", "m"],
    ans: 3,
    exp: "The derivative of y = mx + c is the slope <strong>m</strong>. The constant c disappears since d/dx(c) = 0."
  },
  {
    cat: "Derivatives – Trigonometric",
    q: "The derivative of sec²x is:",
    opts: ["2 sec x · tan x", "2 sec x", "2 sec²x · tan x", "None of the above"],
    ans: 2,
    exp: "Chain Rule: d/dx(sec²x) = 2 sec x · d/dx(sec x) = 2 sec x · (sec x tan x) = <strong>2 sec²x · tan x</strong>."
  },
  {
    cat: "Limits – One-sided Notation",
    q: "How is a left-hand limit correctly denoted?",
    opts: ["lim<sub>x→c</sub> f(x)", "lim<sub>x→c⁻</sub> f(x)", "lim<sub>x→c⁻</sub> f(c)", "lim<sub>x→c</sub> f(c)"],
    ans: 1,
    exp: "The superscript minus (⁻) indicates approach from the <strong>left</strong>. The correct notation is <strong>lim<sub>x→c⁻</sub> f(x)</strong>."
  },
  {
    cat: "Limits – At Infinity",
    q: "lim<sub>x→∞</sub> x⁵ = ?",
    opts: ["0", "∞", "1", "−∞"],
    ans: 1,
    exp: "As x → +∞, x⁵ also grows without bound. The limit is <strong>+∞</strong>."
  },

  // ─────────────────────────────────────────────
  // SOURCE: X-830.docx  (Q54–93)
  // ─────────────────────────────────────────────

  {
    cat: "Limits – Evaluation",
    q: "Evaluate lim<sub>x→2</sub> 3x.",
    opts: ["3", "2", "6", "5"],
    ans: 2,
    exp: "Direct substitution for a linear function: 3 × 2 = <strong>6</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "What is lim<sub>x→0</sub> (x² + 4)?",
    opts: ["0", "4", "2", "Infinity"],
    ans: 1,
    exp: "Direct substitution: (0)² + 4 = <strong>4</strong>. Polynomials are continuous, so the limit equals the function value."
  },
  {
    cat: "Limits – One-sided",
    q: "If a limit from the left is 4 and the limit from the right is 4, the two-sided limit is:",
    opts: ["0", "10", "4", "Does not exist"],
    ans: 2,
    exp: "When both one-sided limits are equal, the two-sided limit exists and equals that common value: <strong>4</strong>."
  },
  {
    cat: "Domain – Natural Domain",
    q: "The value excluded from the domain of f(x) = 1/(x−6) is:",
    opts: ["∞", "0", "6", "−6"],
    ans: 2,
    exp: "Setting the denominator to zero: x − 6 = 0 → <strong>x = 6</strong>. This value makes the function undefined."
  },
  {
    cat: "Domain – Natural Domain",
    q: "Which function has a domain of all real numbers?",
    opts: ["1/x", "√x", "x²", "1/x²"],
    ans: 2,
    exp: "f(x) = <strong>x²</strong> is a polynomial, defined for every real number. The others each exclude at least one value."
  },
  {
    cat: "Domain – Definition",
    q: "'The largest set of real numbers for which the function is defined' is the definition of:",
    opts: ["Function", "Continuity", "Natural domain", "Limit"],
    ans: 2,
    exp: "This is the precise definition of <strong>natural domain</strong> — the maximal set of inputs for which the function produces a valid real output."
  },
  {
    cat: "Derivatives – Power Rule",
    q: "The derivative of f(x) = 1/x is:",
    opts: ["ln x", "−1/x²", "−x⁻¹", "1/ln x"],
    ans: 1,
    exp: "Power Rule: d/dx(x⁻¹) = −1 · x⁻² = <strong>−1/x²</strong>."
  },
  {
    cat: "Derivatives – Differentiability",
    q: "If a function is differentiable at x = a, then it is:",
    opts: ["Continuous at x = a", "Increasing at x = a", "Decreasing at x = a", "A polynomial"],
    ans: 0,
    exp: "<strong>Differentiability implies continuity</strong>. If f′(a) exists, f must be continuous at a. The converse is not always true."
  },
  {
    cat: "Derivatives – Meaning",
    q: "The meaning of the derivative is:",
    opts: ["To find the value of x", "To change the value of x", "Rate of change", "Change of position of a variable"],
    ans: 2,
    exp: "The derivative measures the <strong>instantaneous rate of change</strong> of f(x) with respect to x at a specific point."
  },
  {
    cat: "Continuity – Types",
    q: "Which type of discontinuity occurs at x = 0 for f(x) = 1/x?",
    opts: ["Removable", "Jump", "Infinite", "Point"],
    ans: 2,
    exp: "As x → 0, 1/x → ±∞. The function <strong>grows without bound</strong>, making this an <strong>infinite discontinuity</strong>."
  },
  {
    cat: "Continuity – Graph Interpretation",
    q: "A function is continuous at every point if you can draw it without:",
    opts: ["Using a ruler", "Lifting your pencil", "Crossing the x-axis", "Crossing the y-axis"],
    ans: 1,
    exp: "Continuity means no breaks, holes, or jumps — you can trace the entire graph without ever <strong>lifting your pencil</strong>."
  },
  {
    cat: "Continuity – Types",
    q: "A 'hole' in the graph represents:",
    opts: ["Continuity", "Discontinuity", "Derivative", "Domain"],
    ans: 1,
    exp: "A hole indicates a <strong>removable discontinuity</strong> — the limit exists at that point but the function is undefined or incorrectly defined there."
  },
  {
    cat: "Continuity – Constant Functions",
    q: "A constant function f(x) = 10 is continuous:",
    opts: ["Never", "Always", "At x = 10 only", "At x = 0 only"],
    ans: 1,
    exp: "Constant functions are polynomials of degree 0. Polynomials are <strong>continuous everywhere</strong> on ℝ."
  },
  {
    cat: "Derivatives – Identifying Rules",
    q: "When two functions of the same variable are multiplied, the rule of differentiation is called:",
    opts: ["Power rule", "Quotient rule", "Product rule", "None of the above"],
    ans: 2,
    exp: "Multiplying two differentiable functions requires the <strong>Product Rule</strong>: d/dx(u·v) = u′v + uv′."
  },
  {
    cat: "Limits – Laws",
    q: "The rule lim[f(x) · g(x)] = lim f(x) · lim g(x) is called:",
    opts: ["Product of two limits", "Limit Product Law", "Multiplication of two limits", "Product rule"],
    ans: 1,
    exp: "This is the <strong>Limit Product Law</strong>: the limit of a product equals the product of the individual limits, provided both exist."
  },
  {
    cat: "Continuity – Definition",
    q: "According to the definition of continuity, the limit of the function must equal:",
    opts: ["1", "∞", "The value of the function at that point", "The domain of the function"],
    ans: 2,
    exp: "Continuity at x = a is defined by lim<sub>x→a</sub> f(x) = <strong>f(a)</strong> — the limit must equal the <strong>function's value</strong> at that point."
  },
  {
    cat: "Continuity – Polynomials",
    q: "f(x) = x² is continuous:",
    opts: ["Nowhere", "At x = 0 only", "Everywhere", "At x = 1 only"],
    ans: 2,
    exp: "x² is a polynomial and polynomials are <strong>continuous everywhere</strong> on ℝ."
  },
  {
    cat: "Continuity – Types",
    q: "The type of discontinuity in f(x) = 1/x at x = 0 is:",
    opts: ["Removable", "Jump", "Infinite", "None"],
    ans: 2,
    exp: "f(x) = 1/x has an <strong>infinite discontinuity</strong> at x = 0 because the function approaches ±∞ as x → 0."
  },
  {
    cat: "Limits – Evaluation",
    q: "Evaluate lim<sub>x→5</sub> (x²−25)/(x−5).",
    opts: ["5", "10", "0", "Does not exist"],
    ans: 1,
    exp: "Factor: x²−25 = (x−5)(x+5). Cancel (x−5). Then lim<sub>x→5</sub> (x+5) = 5+5 = <strong>10</strong>."
  },
  {
    cat: "Limits – Standard",
    q: "lim<sub>x→0</sub> sin(x)/x = ?",
    opts: ["0", "1", "∞", "−1"],
    ans: 1,
    exp: "This is the <strong>fundamental trigonometric limit</strong>: lim<sub>x→0</sub> sin x / x = <strong>1</strong>, proven via the Squeeze Theorem."
  },
  {
    cat: "Domain – Logarithm",
    q: "The domain of ln(x) is:",
    opts: ["x > 0", "x < 0", "All real numbers", "x ≠ 0"],
    ans: 0,
    exp: "The natural logarithm is defined only for <strong>strictly positive</strong> inputs. ln(0) and ln(negative) are undefined in ℝ."
  },
  {
    cat: "Domain – Polynomials",
    q: "The domain of a polynomial is:",
    opts: ["Finite", "All real numbers", "Positive only", "Negative only"],
    ans: 1,
    exp: "Polynomials have no restrictions — no denominators, no radicals — so their domain is <strong>all real numbers</strong>."
  },
  {
    cat: "Continuity – Examples",
    q: "Which is an example of a continuous function?",
    opts: ["1/x", "ln x", "x³", "Step function"],
    ans: 2,
    exp: "<strong>x³</strong> is a polynomial, continuous everywhere on ℝ. The others each have points of discontinuity or domain restrictions."
  },
  {
    cat: "Derivatives – Power Rule",
    q: "d/dx (x²) = ?",
    opts: ["3x⁻¹", "2x", "3x", "x³"],
    ans: 1,
    exp: "<strong>Power Rule</strong>: d/dx(xⁿ) = n·xⁿ⁻¹. So d/dx(x²) = <strong>2x</strong>."
  },
  {
    cat: "Continuity – Graph Interpretation",
    q: "A continuous function can be drawn without:",
    opts: ["A pencil", "A break", "A scale", "An axis"],
    ans: 1,
    exp: "Continuity means the graph has no gaps, holes, or jumps — it can be drawn as one unbroken stroke, i.e., without a <strong>break</strong>."
  },
  {
    cat: "Continuity – Theorems",
    q: "The Intermediate Value Theorem requires the function to be:",
    opts: ["Differentiable", "Continuous", "Linear", "Constant"],
    ans: 1,
    exp: "The <strong>IVT</strong> applies only to <strong>continuous</strong> functions on a closed interval [a, b]."
  },
  {
    cat: "Continuity – Types",
    q: "A hole in a graph indicates:",
    opts: ["Continuity", "Discontinuity", "Domain", "Derivative"],
    ans: 1,
    exp: "A hole means the function has a <strong>removable discontinuity</strong> — the limit exists at that point but the function value is missing or wrong."
  },
  {
    cat: "Limits – One-sided",
    q: "If the left and right limits are unequal, then the two-sided limit:",
    opts: ["Exists", "Equals 0", "Does not exist", "Equals ∞"],
    ans: 2,
    exp: "A two-sided limit exists <strong>only</strong> when both one-sided limits exist and are <strong>equal</strong>. Unequal one-sided limits mean the limit <strong>does not exist</strong>."
  },
  {
    cat: "Limits – Asymptotes",
    q: "A vertical asymptote occurs when:",
    opts: ["Denominator = 0", "Numerator = 0", "x = 0", "y = 0"],
    ans: 0,
    exp: "A vertical asymptote at x = a arises when the <strong>denominator equals zero</strong> at x = a (and the numerator does not), causing the function to approach ±∞."
  },
  {
    cat: "Limits – Asymptotes",
    q: "The horizontal asymptote of f(x) = 1/x is:",
    opts: ["x = 0", "y = 0", "x = 1", "y = 1"],
    ans: 1,
    exp: "As x → ±∞, 1/x → 0. So the function approaches the line <strong>y = 0</strong> (the x-axis), which is the horizontal asymptote."
  },
  {
    cat: "Limits – At Infinity",
    q: "lim<sub>x→∞</sub> x² = ?",
    opts: ["0", "∞", "1", "−∞"],
    ans: 1,
    exp: "As x grows without bound, x² also grows without bound. The limit is <strong>+∞</strong>."
  },
  {
    cat: "Derivatives – Differentiability",
    q: "If the derivative of a function exists at a point, then the function is:",
    opts: ["Continuous", "Discontinuous", "Infinite", "Constant"],
    ans: 0,
    exp: "<strong>Differentiability implies continuity</strong>. If f′(a) exists, then f is necessarily continuous at a."
  },
  {
    cat: "Derivatives – Trigonometric",
    q: "d/dx (sin x) = ?",
    opts: ["cos x", "−cos x", "−sin x", "tan x"],
    ans: 0,
    exp: "Standard trigonometric derivative: d/dx(sin x) = <strong>cos x</strong>."
  },
  {
    cat: "Derivatives – Logarithmic",
    q: "d/dx (ln x) = ?",
    opts: ["x", "1/x", "ln x", "0"],
    ans: 1,
    exp: "Standard result: d/dx(ln x) = <strong>1/x</strong>, valid for x > 0."
  },
  {
    cat: "Derivatives – Product Rule",
    q: "The Product Rule formula is:",
    opts: ["uv", "u′v + uv′", "u/v", "uv′ + v′u"],
    ans: 1,
    exp: "<strong>Product Rule</strong>: d/dx(u·v) = <strong>u′v + uv′</strong>. Differentiate the first × keep the second, plus keep the first × differentiate the second."
  }

];
