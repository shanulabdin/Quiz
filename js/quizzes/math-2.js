const questions = [
  // LIMITS — CONCEPT & DEFINITION (Q1–8)
  {
    cat: "Limits – Concept & Definition",
    q: "What does lim<sub>x→a</sub> f(x) = L mean?",
    opts: ["f(a) = L always", "As x gets close to a, f(x) gets close to L", "f(x) equals L at x = a", "The graph touches L at x = a"],
    ans: 1,
    exp: "A <strong>limit</strong> describes the behaviour of f(x) as x <em>approaches</em> a, not at x = a. f(a) may be undefined yet the limit can still exist."
  },
  {
    cat: "Limits – Concept & Definition",
    q: "lim<sub>x→9</sub> (x² − 81)/(x − 9) has what type of initial form when x = 9 is substituted?",
    opts: ["Infinite limit (∞/∞)", "Indeterminate form (0/0)", "Oscillatory", "Does not exist"],
    ans: 1,
    exp: "Substituting x = 9 gives (81 − 81)/(9 − 9) = 0/0, which is an <strong>indeterminate form</strong>. Factoring is required to resolve it."
  },
  {
    cat: "Limits – Concept & Definition",
    q: "Why does lim<sub>x→9</sub> (x² − 81)/(x − 9) require factoring?",
    opts: ["Substitution gives a finite value", "The graph fails to exist", "Substitution gives the 0/0 indeterminate form", "The function is discontinuous everywhere"],
    ans: 2,
    exp: "Direct substitution produces <strong>0/0</strong>, which is meaningless. Factoring the numerator as (x − 9)(x + 9) allows cancellation of the (x − 9) factor, revealing the true limit of 18."
  },
  {
    cat: "Limits – Concept & Definition",
    q: "After factoring and simplifying lim<sub>x→9</sub> (x² − 81)/(x − 9), what is the value of the limit?",
    opts: ["9", "0", "18", "81"],
    ans: 2,
    exp: "(x² − 81) = (x − 9)(x + 9). Cancelling (x − 9) leaves lim<sub>x→9</sub> (x + 9) = 9 + 9 = <strong>18</strong>."
  },
  {
    cat: "Limits – Concept & Definition",
    q: "A table of values shows f(x) approaching 3 from both sides as x → 1. What is the limit?",
    opts: ["1", "Limit does not exist", "3", "Infinite"],
    ans: 2,
    exp: "When f(x) approaches the <strong>same value from both sides</strong>, the two-sided limit equals that value. Here lim<sub>x→1</sub> f(x) = <strong>3</strong>."
  },
  {
    cat: "Limits – Concept & Definition",
    q: "A graph shows the left-hand limit = 2 and the right-hand limit = 5 at x = c. What is lim<sub>x→c</sub> f(x)?",
    opts: ["3", "6", "2.5", "Does not exist"],
    ans: 3,
    exp: "A two-sided limit exists <strong>only</strong> when the left-hand limit equals the right-hand limit. Since 2 ≠ 5, <strong>the limit does not exist</strong>."
  },
  {
    cat: "Limits – Concept & Definition",
    q: "Which condition is NOT required for lim<sub>x→a</sub> f(x) to exist?",
    opts: ["Left-hand limit must exist", "Right-hand limit must exist", "Left-hand limit must equal right-hand limit", "f(a) must be defined"],
    ans: 3,
    exp: "A limit can exist even when f(a) is <strong>undefined</strong> (e.g., a hole in the graph). Only the two one-sided limits need to exist and be equal."
  },
  {
    cat: "Limits – Concept & Definition",
    q: "Which best summarises the Limit Laws?",
    opts: ["Limits can never be added", "The limit of a sum equals the sum of the limits", "Limits are always infinite", "None of the above"],
    ans: 1,
    exp: "The <strong>Sum Law</strong> states lim[f(x) + g(x)] = lim f(x) + lim g(x), provided both individual limits exist. Similar laws hold for products, quotients, and scalar multiples."
  },

  // LIMITS — TECHNIQUES (Q9–16)
  {
    cat: "Limits – Techniques",
    q: "Factoring helps evaluate a limit when:",
    opts: ["The function is infinite", "A graph is needed", "The expression simplifies by cancelling common factors", "None of the above"],
    ans: 2,
    exp: "Factoring is used to <strong>cancel a common factor</strong> that causes the 0/0 form, after which direct substitution can be applied."
  },
  {
    cat: "Limits – Techniques",
    q: "What is lim<sub>x→3</sub> (x² − 9)/(x − 3)?",
    opts: ["0", "3", "6", "9"],
    ans: 2,
    exp: "Factor the numerator: (x − 3)(x + 3). Cancel (x − 3). Then lim<sub>x→3</sub> (x + 3) = 3 + 3 = <strong>6</strong>."
  },
  {
    cat: "Limits – Techniques",
    q: "What is lim<sub>x→0</sub> (sin x)/x?",
    opts: ["0", "∞", "1", "Undefined"],
    ans: 2,
    exp: "This is a standard <strong>trigonometric limit</strong>: lim<sub>x→0</sub> (sin x)/x = <strong>1</strong>. It cannot be found by direct substitution (gives 0/0) but is proven using the squeeze theorem."
  },
  {
    cat: "Limits – Techniques",
    q: "What is lim<sub>x→∞</sub> 1/x?",
    opts: ["1", "∞", "0", "−1"],
    ans: 2,
    exp: "As x grows without bound, 1/x shrinks toward <strong>0</strong>. This is a fundamental limit at infinity."
  },
  {
    cat: "Limits – Techniques",
    q: "What is lim<sub>x→2</sub> (x² − 4)/(x − 2)?",
    opts: ["0", "2", "4", "8"],
    ans: 2,
    exp: "Factor: (x − 2)(x + 2). Cancel (x − 2). lim<sub>x→2</sub> (x + 2) = 2 + 2 = <strong>4</strong>."
  },
  {
    cat: "Limits – Techniques",
    q: "What is lim<sub>x→1</sub> (x³ − 1)/(x − 1)?",
    opts: ["1", "2", "3", "0"],
    ans: 2,
    exp: "Factor x³ − 1 = (x − 1)(x² + x + 1). Cancel (x − 1). At x = 1: 1 + 1 + 1 = <strong>3</strong>."
  },
  {
    cat: "Limits – Techniques",
    q: "lim<sub>x→0</sub> (1 − cos x)/x equals:",
    opts: ["1", "0", "∞", "−1"],
    ans: 1,
    exp: "This is a standard trigonometric limit: lim<sub>x→0</sub> (1 − cos x)/x = <strong>0</strong>. It complements the sin x / x limit."
  },
  {
    cat: "Limits – Techniques",
    q: "What technique is best for lim<sub>x→∞</sub> (3x² + 2)/(5x² − 1)?",
    opts: ["Factoring", "L'Hôpital's Rule", "Divide numerator and denominator by the highest power of x", "Substitution"],
    ans: 2,
    exp: "Dividing top and bottom by x² gives (3 + 2/x²)/(5 − 1/x²). As x → ∞, 1/x² → 0, so the limit is <strong>3/5</strong>."
  },

  // CONTINUITY (Q17–22)
  {
    cat: "Continuity",
    q: "Which best summarises continuity at a point x = a?",
    opts: ["The limit exists only", "The function is defined at a only", "The limit exists and equals f(a)", "The graph is smooth only"],
    ans: 2,
    exp: "Continuity at x = a requires <strong>three conditions</strong>: (1) f(a) is defined, (2) lim<sub>x→a</sub> f(x) exists, and (3) lim<sub>x→a</sub> f(x) = f(a)."
  },
  {
    cat: "Continuity",
    q: "Which best describes continuity on a closed interval [a, b]?",
    opts: ["Continuous only inside (a, b)", "Continuous at endpoints and at every interior point", "Only the limit exists at endpoints", "Only the graph is smooth"],
    ans: 1,
    exp: "A function continuous on <strong>[a, b]</strong> must be continuous at every interior point and have one-sided continuity at the endpoints a and b."
  },
  {
    cat: "Continuity",
    q: "Polynomial functions are:",
    opts: ["Discontinuous everywhere", "Continuous everywhere", "Continuous only at x = 0", "Oscillatory"],
    ans: 1,
    exp: "Polynomials are <strong>continuous everywhere</strong> on ℝ because they are defined for all real numbers and limits equal function values at every point."
  },
  {
    cat: "Continuity",
    q: "A function f(x) = 1/x is discontinuous at x = 0 because:",
    opts: ["The function value is 0", "f(0) is undefined", "The limit equals 1", "The graph is smooth"],
    ans: 1,
    exp: "f(0) = 1/0 is <strong>undefined</strong>, so the first condition of continuity (function defined at the point) fails."
  },
  {
    cat: "Continuity",
    q: "Which type of discontinuity occurs when lim<sub>x→a</sub> f(x) exists but ≠ f(a)?",
    opts: ["Jump discontinuity", "Infinite discontinuity", "Removable discontinuity", "Oscillatory discontinuity"],
    ans: 2,
    exp: "A <strong>removable discontinuity</strong> (hole) occurs when the limit exists but either f(a) is undefined or f(a) ≠ the limit. It can be 'fixed' by redefining f(a)."
  },
  {
    cat: "Continuity",
    q: "At a jump discontinuity, which condition fails?",
    opts: ["f(a) is defined", "The left-hand limit exists", "The left-hand and right-hand limits are unequal", "The function is a polynomial"],
    ans: 2,
    exp: "At a <strong>jump discontinuity</strong>, both one-sided limits exist but they are <strong>not equal</strong>, so the two-sided limit does not exist."
  },

  // DERIVATIVES — RULES (Q23–32)
  {
    cat: "Derivatives – Rules",
    q: "Which rule applies to f(x) = 4x³ / (2x − 1)?",
    opts: ["Chain Rule", "Quotient Rule", "Product Rule", "Power Rule"],
    ans: 1,
    exp: "Whenever a function is expressed as a <strong>ratio</strong> of two differentiable functions, the <strong>Quotient Rule</strong> [d/dx(u/v) = (v·u′ − u·v′)/v²] applies."
  },
  {
    cat: "Derivatives – Rules",
    q: "Using the Chain Rule, what is the derivative of f(x) = (2x + 1)³?",
    opts: ["3(2x+1)²", "6(2x+1)²", "3x² + 1", "2x + 1"],
    ans: 1,
    exp: "Chain Rule: d/dx[u³] = 3u² · u′. Here u = 2x + 1, u′ = 2. So f′(x) = 3(2x+1)² · 2 = <strong>6(2x+1)²</strong>."
  },
  {
    cat: "Derivatives – Rules",
    q: "The derivative of f(x) = sin x − cos x is:",
    opts: ["cos x + sin x", "sin x − cos x", "−cos x + sin x", "0"],
    ans: 0,
    exp: "d/dx(sin x) = cos x and d/dx(−cos x) = sin x. Therefore f′(x) = <strong>cos x + sin x</strong>."
  },
  {
    cat: "Derivatives – Rules",
    q: "The derivative of f(x) = x² · sin x is:",
    opts: ["2x sin x + x² cos x", "x² cos x", "2x cos x", "sin x + cos x"],
    ans: 0,
    exp: "<strong>Product Rule</strong>: d/dx(u·v) = u′v + uv′. Here u = x², v = sin x. So f′(x) = 2x · sin x + x² · cos x."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is d/dx(x⁵)?",
    opts: ["5x⁴", "5x⁵", "x⁴", "4x⁵"],
    ans: 0,
    exp: "<strong>Power Rule</strong>: d/dx(xⁿ) = n·xⁿ⁻¹. So d/dx(x⁵) = 5x⁴."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is d/dx(cos x)?",
    opts: ["sin x", "−sin x", "cos x", "−cos x"],
    ans: 1,
    exp: "The derivative of cos x is <strong>−sin x</strong>. This is a standard trigonometric derivative to memorise."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is d/dx(tan x)?",
    opts: ["sin x", "cos x", "sec² x", "cot x"],
    ans: 2,
    exp: "d/dx(tan x) = <strong>sec² x</strong>. This follows from writing tan x = sin x / cos x and applying the Quotient Rule."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is the derivative of f(x) = e^x?",
    opts: ["xe^(x−1)", "e^x", "e^(x−1)", "0"],
    ans: 1,
    exp: "The exponential function e^x is its own derivative: d/dx(e^x) = <strong>e^x</strong>. This is a unique property of the natural base e."
  },
  {
    cat: "Derivatives – Rules",
    q: "Using the Product Rule, what is d/dx(x³ · cos x)?",
    opts: ["3x² cos x − x³ sin x", "3x² cos x + x³ sin x", "−x³ sin x", "3x² sin x"],
    ans: 0,
    exp: "Product Rule: u = x³, u′ = 3x²; v = cos x, v′ = −sin x. So f′(x) = 3x² cos x + x³(−sin x) = <strong>3x² cos x − x³ sin x</strong>."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is the derivative of f(x) = √x = x^(1/2)?",
    opts: ["2√x", "1/(2√x)", "√x/2", "x^(−1/2)"],
    ans: 1,
    exp: "Power Rule: d/dx(x^(1/2)) = (1/2)x^(−1/2) = <strong>1/(2√x)</strong>."
  },

  // LIMITS — ONE-SIDED & INFINITE (Q33–37)
  {
    cat: "Limits – One-sided & Infinite",
    q: "lim<sub>x→0⁺</sub> 1/x equals:",
    opts: ["0", "−∞", "+∞", "1"],
    ans: 2,
    exp: "As x approaches 0 from the <strong>right</strong> (positive side), 1/x grows without bound, so the right-hand limit is <strong>+∞</strong>."
  },
  {
    cat: "Limits – One-sided & Infinite",
    q: "lim<sub>x→0⁻</sub> 1/x equals:",
    opts: ["0", "−∞", "+∞", "1"],
    ans: 1,
    exp: "As x approaches 0 from the <strong>left</strong> (negative side), 1/x is large and negative, so the left-hand limit is <strong>−∞</strong>."
  },
  {
    cat: "Limits – One-sided & Infinite",
    q: "Because lim<sub>x→0⁺</sub> 1/x ≠ lim<sub>x→0⁻</sub> 1/x, what can we say about lim<sub>x→0</sub> 1/x?",
    opts: ["It equals 0", "It equals ∞", "It does not exist", "It equals 1"],
    ans: 2,
    exp: "The two-sided limit <strong>does not exist</strong> because the left-hand and right-hand limits are different (−∞ ≠ +∞)."
  },
  {
    cat: "Limits – One-sided & Infinite",
    q: "What is lim<sub>x→∞</sub> (5x³ + 2x)/(x³ − 7)?",
    opts: ["0", "2", "5", "∞"],
    ans: 2,
    exp: "Divide every term by x³. Numerator → 5 + 2/x²; denominator → 1 − 7/x³. As x → ∞, both correction terms → 0, leaving <strong>5/1 = 5</strong>."
  },
  {
    cat: "Limits – One-sided & Infinite",
    q: "Which statement about lim<sub>x→a</sub> f(x) = ∞ is correct?",
    opts: ["The limit equals a large number", "The limit does not exist (function grows unboundedly)", "The function is continuous at a", "The limit equals 0"],
    ans: 1,
    exp: "When we write a limit equals ∞, we mean the function <strong>grows without bound</strong>. Technically the limit <strong>does not exist</strong> as a real number — ∞ is not a real number."
  },

  // MIXED REVIEW (Q38–40)
  {
    cat: "Mixed Review",
    q: "Which of the following functions is NOT continuous everywhere on ℝ?",
    opts: ["f(x) = x² + 3x + 1", "f(x) = sin x", "f(x) = 1/(x − 2)", "f(x) = e^x"],
    ans: 2,
    exp: "f(x) = 1/(x − 2) is <strong>undefined at x = 2</strong>, creating an infinite discontinuity there. Polynomials, sin x, and e^x are all continuous everywhere."
  },
  {
    cat: "Mixed Review",
    q: "For f(x) = x² · e^x, which rule is needed to find f′(x)?",
    opts: ["Chain Rule only", "Power Rule only", "Product Rule", "Quotient Rule"],
    ans: 2,
    exp: "f(x) is a <strong>product</strong> of two functions (x² and e^x), so the <strong>Product Rule</strong> applies: f′(x) = 2x · e^x + x² · e^x = e^x(2x + x²)."
  },
  {
    cat: "Mixed Review",
    q: "Which of the following correctly states the relationship between limits and continuity?",
    opts: [
      "If f is continuous at a, the limit may not exist",
      "If lim<sub>x→a</sub> f(x) exists, f is automatically continuous at a",
      "Continuity at a requires lim<sub>x→a</sub> f(x) = f(a)",
      "Limits and continuity are unrelated concepts"
    ],
    ans: 2,
    exp: "Continuity at x = a is defined by the condition lim<sub>x→a</sub> f(x) = f(a) (along with both sides existing and f(a) being defined). This is the <strong>precise link</strong> between limits and continuity."
  }
];