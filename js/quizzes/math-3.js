const questions = [
  // DOMAIN & NATURAL DOMAIN (Q1–7)
  {
    cat: "Domain & Natural Domain",
    q: "What is the natural domain of f(x) = √(x − 3)?",
    opts: ["x ≥ 3", "x ≤ 3", "All real numbers", "x ≠ 3"],
    ans: 0,
    exp: "A square root requires a <strong>non-negative radicand</strong>. Setting x − 3 ≥ 0 gives <strong>x ≥ 3</strong>. Values below 3 produce a negative under the root, which is undefined in ℝ."
  },
  {
    cat: "Domain & Natural Domain",
    q: "What is the domain of f(x) = 1/(x − 5)?",
    opts: ["x ≠ 5", "x = 5", "All real numbers", "x ≥ 5"],
    ans: 0,
    exp: "Division by zero is undefined. The denominator x − 5 = 0 when x = 5, so we must <strong>exclude x = 5</strong>. The domain is all real numbers where <strong>x ≠ 5</strong>."
  },
  {
    cat: "Domain & Natural Domain",
    q: "What value is excluded from the domain of f(x) = 1/(x − 6)?",
    opts: ["∞", "0", "6", "−6"],
    ans: 2,
    exp: "Setting the denominator equal to zero: x − 6 = 0 → <strong>x = 6</strong>. This value makes the function undefined and must be excluded from the domain."
  },
  {
    cat: "Domain & Natural Domain",
    q: "Which function has a domain of ALL real numbers?",
    opts: ["1/x", "√x", "x²", "1/x²"],
    ans: 2,
    exp: "f(x) = <strong>x²</strong> is a polynomial. Polynomials are defined for every real number — no denominators, no radicals — so their domain is all of ℝ."
  },
  {
    cat: "Domain & Natural Domain",
    q: "What is the natural domain of f(x) = √x / (x − 1)?",
    opts: ["x ≥ −1, x ≠ 2", "[0, ∞) − {1}", "[0, 1) ∪ (1, ∞)", "x = 1"],
    ans: 2,
    exp: "Two restrictions apply: the numerator requires x ≥ 0, and the denominator requires x ≠ 1. Combined: <strong>[0, 1) ∪ (1, ∞)</strong>."
  },
  {
    cat: "Domain & Natural Domain",
    q: "What is the domain of ln(x)?",
    opts: ["x > 0", "x < 0", "All real numbers", "x ≠ 0"],
    ans: 0,
    exp: "The natural logarithm is only defined for <strong>strictly positive</strong> inputs. ln(0) and ln(negative) are undefined in ℝ, so the domain is <strong>x > 0</strong>."
  },
  {
    cat: "Domain & Natural Domain",
    q: "What is the natural domain of f(x) = x/|x|?",
    opts: ["x = 0", "x = 1", "All real values of x", "All real values except x = 0"],
    ans: 3,
    exp: "The expression requires division by |x|. When x = 0, |x| = 0 and division is undefined. So the domain is <strong>all real numbers except x = 0</strong>."
  },

  // LIMITS — EVALUATION (Q8–16)
  {
    cat: "Limits – Evaluation",
    q: "Evaluate lim<sub>x→2</sub> 3x.",
    opts: ["3", "2", "6", "5"],
    ans: 2,
    exp: "For a linear function, direct substitution works: lim<sub>x→2</sub> 3x = 3 × 2 = <strong>6</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "What is lim<sub>x→0</sub> (x² + 4)?",
    opts: ["0", "4", "2", "Infinity"],
    ans: 1,
    exp: "Direct substitution: (0)² + 4 = <strong>4</strong>. Polynomials are continuous everywhere, so the limit equals the function value."
  },
  {
    cat: "Limits – Evaluation",
    q: "Evaluate lim<sub>x→3</sub> (x² − 9)/(x − 3).",
    opts: ["0", "3", "6", "Does not exist"],
    ans: 2,
    exp: "Factor: x² − 9 = (x − 3)(x + 3). Cancel (x − 3). Then lim<sub>x→3</sub> (x + 3) = 3 + 3 = <strong>6</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "Evaluate lim<sub>x→5</sub> (x² − 25)/(x − 5).",
    opts: ["5", "10", "0", "Does not exist"],
    ans: 1,
    exp: "Factor: x² − 25 = (x − 5)(x + 5). Cancel (x − 5). Then lim<sub>x→5</sub> (x + 5) = 5 + 5 = <strong>10</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "lim<sub>x→∞</sub> 1/x = ?",
    opts: ["1", "0", "∞", "−1"],
    ans: 1,
    exp: "As x grows without bound, the fraction 1/x shrinks toward <strong>0</strong>. This is a fundamental limit at infinity."
  },
  {
    cat: "Limits – Evaluation",
    q: "lim<sub>x→∞</sub> x⁵ = ?",
    opts: ["0", "∞", "1", "−∞"],
    ans: 1,
    exp: "As x → +∞, x⁵ also grows without bound. The limit is <strong>+∞</strong>, meaning the function increases indefinitely."
  },
  {
    cat: "Limits – Evaluation",
    q: "lim<sub>x→0</sub> sin(x)/x = ?",
    opts: ["0", "1", "∞", "−1"],
    ans: 1,
    exp: "This is a <strong>standard trigonometric limit</strong>: lim<sub>x→0</sub> sin x / x = <strong>1</strong>. It cannot be found by substitution (0/0 form) but is proven via the squeeze theorem."
  },
  {
    cat: "Limits – Evaluation",
    q: "lim<sub>x→0</sub> cos x = ?",
    opts: ["1", "0", "−1", "∞"],
    ans: 0,
    exp: "cos(0) = <strong>1</strong>. Since cosine is continuous everywhere, the limit equals the function value: lim<sub>x→0</sub> cos x = 1."
  },
  {
    cat: "Limits – Evaluation",
    q: "If lim<sub>x→a</sub> f(x) = L and lim<sub>x→a</sub> g(x) = M, then lim<sub>x→a</sub> [f(x) + g(x)] = ?",
    opts: ["L + M", "L × M", "L / M", "None of the above"],
    ans: 0,
    exp: "The <strong>Sum Law of Limits</strong> states that the limit of a sum equals the sum of the individual limits, provided both exist: lim[f + g] = L + M."
  },

  // LIMITS — ONE-SIDED & ASYMPTOTES (Q17–22)
  {
    cat: "Limits – One-sided & Asymptotes",
    q: "How is a left-hand limit correctly denoted?",
    opts: ["lim<sub>x→c</sub> f(x)", "lim<sub>x→c⁻</sub> f(x)", "lim<sub>x→c⁻</sub> f(c)", "lim<sub>x→c</sub> f(c)"],
    ans: 1,
    exp: "The superscript minus (⁻) indicates approach from the <strong>left</strong>. The correct notation is <strong>lim<sub>x→c⁻</sub> f(x)</strong>."
  },
  {
    cat: "Limits – One-sided & Asymptotes",
    q: "If a limit from the left is 4 and the limit from the right is 4, the two-sided limit is:",
    opts: ["0", "10", "4", "Does not exist"],
    ans: 2,
    exp: "A two-sided limit exists and equals the common value when <strong>both one-sided limits are equal</strong>. Since both equal 4, lim = <strong>4</strong>."
  },
  {
    cat: "Limits – One-sided & Asymptotes",
    q: "If lim<sub>x→a</sub> f(x) → ±∞ as x approaches a from either side, the graph has:",
    opts: ["A horizontal asymptote", "A vertical asymptote", "A parabola", "A hyperbola"],
    ans: 1,
    exp: "When a function grows to ±∞ as x → a, the vertical line x = a is a <strong>vertical asymptote</strong>. This typically occurs when the denominator equals zero."
  },
  {
    cat: "Limits – One-sided & Asymptotes",
    q: "If lim<sub>x→+∞</sub> f(x) = L, then the line y = L is called:",
    opts: ["A vertical asymptote", "A horizontal asymptote", "A parabola", "A hyperbola"],
    ans: 1,
    exp: "When a function approaches a finite value L as x → ±∞, the line y = L is a <strong>horizontal asymptote</strong>. It describes the long-run behaviour of the function."
  },
  {
    cat: "Limits – One-sided & Asymptotes",
    q: "A vertical asymptote occurs when:",
    opts: ["Denominator = 0", "Numerator = 0", "x = 0", "y = 0"],
    ans: 0,
    exp: "A <strong>vertical asymptote</strong> at x = a arises when the <strong>denominator equals zero</strong> at x = a (and the numerator does not), causing the function to grow without bound."
  },
  {
    cat: "Limits – One-sided & Asymptotes",
    q: "The horizontal asymptote of f(x) = 1/x is:",
    opts: ["x = 0", "y = 0", "x = 1", "y = 1"],
    ans: 1,
    exp: "As x → ±∞, 1/x → 0. So the function approaches the line <strong>y = 0</strong> (the x-axis), which is the horizontal asymptote."
  },

  // CONTINUITY (Q23–29)
  {
    cat: "Continuity",
    q: "A function is continuous at x = a means:",
    opts: ["Limit exists only", "f(a) exists only", "Limit = f(a) (and both exist)", "All of the above"],
    ans: 3,
    exp: "Continuity at x = a requires <strong>all three</strong>: (1) f(a) is defined, (2) lim<sub>x→a</sub> f(x) exists, and (3) they are equal. Answer D captures all three."
  },
  {
    cat: "Continuity",
    q: "A 'hole' in the graph of a function represents:",
    opts: ["Continuity", "Discontinuity", "Derivative", "Domain"],
    ans: 1,
    exp: "A hole indicates a <strong>removable discontinuity</strong> — the function is undefined or incorrectly defined at that single point, even though the limit exists."
  },
  {
    cat: "Continuity",
    q: "Which type of discontinuity occurs at x = 0 for f(x) = 1/x?",
    opts: ["Removable", "Jump", "Infinite", "Point"],
    ans: 2,
    exp: "As x → 0, f(x) = 1/x → ±∞. Because the function <strong>grows without bound</strong>, this is an <strong>infinite discontinuity</strong>."
  },
  {
    cat: "Continuity",
    q: "A function is continuous at every point if you can draw its graph without:",
    opts: ["Using a ruler", "Lifting your pencil", "Crossing the x-axis", "Crossing the y-axis"],
    ans: 1,
    exp: "The informal definition of continuity is that the graph has <strong>no breaks, holes, or jumps</strong> — you can draw it without ever <strong>lifting your pencil</strong>."
  },
  {
    cat: "Continuity",
    q: "A constant function f(x) = 10 is continuous:",
    opts: ["Never", "Always", "At x = 10 only", "At x = 0 only"],
    ans: 1,
    exp: "A constant function is a polynomial of degree 0. Polynomials are <strong>continuous everywhere</strong>, so f(x) = 10 is continuous for all real x."
  },
  {
    cat: "Continuity",
    q: "The Intermediate Value Theorem requires the function to be:",
    opts: ["Differentiable", "Continuous", "Linear", "Increasing"],
    ans: 1,
    exp: "The <strong>Intermediate Value Theorem</strong> guarantees that a function takes every value between f(a) and f(b), but only when the function is <strong>continuous</strong> on [a, b]."
  },
  {
    cat: "Continuity",
    q: "According to the definition of continuity, the limit of the function must equal:",
    opts: ["1", "∞", "The value of the function at that point", "The domain of the function"],
    ans: 2,
    exp: "Continuity is defined by lim<sub>x→a</sub> f(x) = <strong>f(a)</strong> — the limit must equal <strong>the function's value</strong> at that point."
  },

  // DERIVATIVES — RULES & FORMULAS (Q30–40)
  {
    cat: "Derivatives – Rules & Formulas",
    q: "What is the derivative of a constant, e.g., f(x) = 7?",
    opts: ["1", "0", "7", "∞"],
    ans: 1,
    exp: "A constant does not change, so its <strong>rate of change is zero</strong>. The derivative of any constant c is <strong>0</strong>."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "d/dx (x²) = ?",
    opts: ["x", "2x", "x²", "2"],
    ans: 1,
    exp: "<strong>Power Rule</strong>: d/dx(xⁿ) = n·xⁿ⁻¹. So d/dx(x²) = 2·x¹ = <strong>2x</strong>."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "d/dx (3x + 5) = ?",
    opts: ["3", "5", "x", "0"],
    ans: 0,
    exp: "The derivative of a linear function y = mx + c is its slope <strong>m</strong>. Here m = 3, so d/dx(3x + 5) = <strong>3</strong>."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "d/dx (e²ˣ) = ?",
    opts: ["x", "2e²ˣ", "2xe^(x−1)", "1/x"],
    ans: 1,
    exp: "<strong>Chain Rule</strong> with exponential: d/dx(e^(u)) = e^(u) · u′. Here u = 2x, u′ = 2. So d/dx(e²ˣ) = <strong>2e²ˣ</strong>."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "The derivative of f(x) = ln x is:",
    opts: ["x", "1/x", "1/ln x", "x/ln x"],
    ans: 1,
    exp: "The standard result: d/dx(ln x) = <strong>1/x</strong>, valid for x > 0. This is one of the most important derivative formulas to memorise."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "What is the derivative of f(x) = 1/x = x⁻¹?",
    opts: ["ln x", "−1/x²", "−x⁻¹", "1/ln x"],
    ans: 1,
    exp: "Power Rule: d/dx(x⁻¹) = −1·x⁻² = <strong>−1/x²</strong>."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "d/dx (sin x) = ?",
    opts: ["cos x", "−cos x", "−sin x", "tan x"],
    ans: 0,
    exp: "The standard trigonometric derivative: d/dx(sin x) = <strong>cos x</strong>. Memorise this as a fundamental result."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "The <strong>Product Rule</strong> formula is:",
    opts: ["uv", "u′v + uv′", "u/v", "uv′ + v′u (same as B)"],
    ans: 1,
    exp: "When two functions are multiplied, the <strong>Product Rule</strong> gives: d/dx(uv) = <strong>u′v + uv′</strong>. Differentiate the first, keep the second, plus keep the first, differentiate the second."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "The derivative of y = mx + c (a linear function) is:",
    opts: ["c", "x", "y′", "m"],
    ans: 3,
    exp: "The derivative of a linear function equals its <strong>slope m</strong>. The constant c disappears since d/dx(c) = 0."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "The derivative of sec²x is:",
    opts: ["2 sec x · tan x", "2 sec x", "2 sec²x · tan x", "None of the above"],
    ans: 2,
    exp: "Using the Chain Rule: d/dx(sec²x) = 2 sec x · d/dx(sec x) = 2 sec x · (sec x tan x) = <strong>2 sec²x · tan x</strong>."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "Chain Rule applies when differentiating:",
    opts: ["A sum of functions", "Composite functions (a function inside another)", "A product of functions", "Constant functions"],
    ans: 1,
    exp: "The <strong>Chain Rule</strong> is used for <strong>composite functions</strong> f(g(x)): d/dx[f(g(x))] = f′(g(x)) · g′(x). It handles the 'outer' and 'inner' function separately."
  },
  {
    cat: "Derivatives – Rules & Formulas",
    q: "If a function is differentiable at x = a, then it must be:",
    opts: ["Continuous at x = a", "Increasing at x = a", "Decreasing at x = a", "A polynomial"],
    ans: 0,
    exp: "Differentiability implies <strong>continuity</strong>: if f′(a) exists, then f is continuous at a. The converse is NOT always true — a function can be continuous but not differentiable."
  }
];