const questions = [
  // LIMITS — CONCEPTUAL (Q1–8)
  {
    cat: "Limits – Conceptual",
    q: "Which of the following correctly describes an indeterminate form?",
    opts: ["A limit that equals zero", "A form like 0/0 or ∞/∞ that requires further analysis", "A limit that does not exist", "A limit equal to infinity"],
    ans: 1,
    exp: "An <strong>indeterminate form</strong> (like 0/0 or ∞/∞) is one where the value of the limit cannot be determined by direct substitution alone. Further techniques like factoring or L'Hôpital's Rule are needed."
  },
  {
    cat: "Limits – Conceptual",
    q: "Which of the following is TRUE about limits?",
    opts: ["The limit equals the function value always", "The limit can exist even if f(a) is undefined", "The limit must be infinite if f(a) is undefined", "Limits only exist for polynomial functions"],
    ans: 1,
    exp: "A <strong>limit describes behaviour near a point</strong>, not at it. For example, lim<sub>x→0</sub> (sin x)/x = 1, yet f(0) = 0/0 is undefined. The limit still exists."
  },
  {
    cat: "Limits – Conceptual",
    q: "The value of sin(x)/x as x approaches 0 from the right is:",
    opts: ["0", "∞", "1", "Undefined"],
    ans: 2,
    exp: "lim<sub>x→0</sub> sin x / x = <strong>1</strong> — a fundamental trigonometric limit proven using the Squeeze Theorem. Both left-hand and right-hand limits equal 1."
  },
  {
    cat: "Limits – Conceptual",
    q: "The Squeeze (Sandwich) Theorem states that if g(x) ≤ f(x) ≤ h(x) and lim g(x) = lim h(x) = L, then:",
    opts: ["lim f(x) = 0", "lim f(x) = L", "lim f(x) does not exist", "lim f(x) = g(x)"],
    ans: 1,
    exp: "The <strong>Squeeze Theorem</strong> forces f(x) to have the same limit L as g and h, since f is always 'squeezed' between them. This is how lim sin x / x = 1 is proven rigorously."
  },
  {
    cat: "Limits – Conceptual",
    q: "What does it mean when we say lim<sub>x→a⁺</sub> f(x) = L?",
    opts: ["f(a) = L", "f(x) approaches L as x approaches a from the left", "f(x) approaches L as x approaches a from the right", "The limit does not exist"],
    ans: 2,
    exp: "The superscript <strong>+</strong> indicates approach from the <strong>right</strong> (values greater than a). So lim<sub>x→a⁺</sub> f(x) = L means f(x) → L as x decreases toward a."
  },
  {
    cat: "Limits – Conceptual",
    q: "If lim<sub>x→a⁻</sub> f(x) = 3 and lim<sub>x→a⁺</sub> f(x) = 3, but f(a) = 7, then:",
    opts: ["The function is continuous at a", "lim<sub>x→a</sub> f(x) = 7", "lim<sub>x→a</sub> f(x) = 3", "The limit does not exist"],
    ans: 2,
    exp: "The two-sided limit equals the common one-sided value: <strong>lim = 3</strong>. However, since lim ≠ f(a) = 7, the function has a <strong>removable discontinuity</strong> at a — the limit exists but continuity fails."
  },
  {
    cat: "Limits – Conceptual",
    q: "lim<sub>x→∞</sub> x² = ?",
    opts: ["0", "∞", "1", "−∞"],
    ans: 1,
    exp: "As x grows without bound, x² also grows without bound. The limit is <strong>+∞</strong>, meaning the function increases indefinitely as x → +∞."
  },
  {
    cat: "Limits – Conceptual",
    q: "The limit product law states: lim[f(x) · g(x)] = ?",
    opts: ["lim f(x) + lim g(x)", "lim f(x) · lim g(x)", "lim f(x) / lim g(x)", "lim f(x) − lim g(x)"],
    ans: 1,
    exp: "The <strong>Product Law of Limits</strong> states that the limit of a product is the <strong>product of the limits</strong>: lim[f·g] = lim f · lim g, provided both individual limits exist."
  },

  // LIMITS — EVALUATION (Q9–15)
  {
    cat: "Limits – Evaluation",
    q: "Evaluate lim<sub>x→4</sub> (x² − 16)/(x − 4).",
    opts: ["0", "4", "8", "16"],
    ans: 2,
    exp: "Factor: x² − 16 = (x − 4)(x + 4). Cancel (x − 4). Then lim<sub>x→4</sub> (x + 4) = 4 + 4 = <strong>8</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "Evaluate lim<sub>x→−2</sub> (x² + 5x + 6)/(x + 2).",
    opts: ["0", "1", "−2", "−1"],
    ans: 1,
    exp: "Factor: x² + 5x + 6 = (x + 2)(x + 3). Cancel (x + 2). Then lim<sub>x→−2</sub> (x + 3) = −2 + 3 = <strong>1</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "What is lim<sub>x→∞</sub> (2x + 3)/(4x − 1)?",
    opts: ["2", "1/2", "0", "∞"],
    ans: 1,
    exp: "Divide numerator and denominator by x: (2 + 3/x)/(4 − 1/x). As x → ∞, 3/x → 0 and 1/x → 0. Result: 2/4 = <strong>1/2</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "What is lim<sub>x→0</sub> (tan x)/x?",
    opts: ["0", "1", "∞", "−1"],
    ans: 1,
    exp: "Write tan x = sin x / cos x. Then (tan x)/x = (sin x / x) · (1/cos x). As x → 0: (sin x/x) → 1 and (1/cos 0) = 1. So the limit is <strong>1</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "What is lim<sub>x→2</sub> (x³ − 8)/(x − 2)?",
    opts: ["4", "8", "12", "0"],
    ans: 2,
    exp: "Factor: x³ − 8 = (x − 2)(x² + 2x + 4). Cancel (x − 2). At x = 2: 4 + 4 + 4 = <strong>12</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "What is lim<sub>x→∞</sub> (7x³ − 2x)/(3x³ + x²)?",
    opts: ["0", "7/3", "2/3", "∞"],
    ans: 1,
    exp: "Divide every term by x³: (7 − 2/x²)/(3 + 1/x). As x → ∞ all correction terms vanish. Result: <strong>7/3</strong>."
  },
  {
    cat: "Limits – Evaluation",
    q: "What is lim<sub>x→0⁺</sub> ln(x)?",
    opts: ["0", "1", "−∞", "∞"],
    ans: 2,
    exp: "As x approaches 0 from the right, ln(x) decreases without bound. lim<sub>x→0⁺</sub> ln x = <strong>−∞</strong>."
  },

  // CONTINUITY — TYPES & THEOREMS (Q16–23)
  {
    cat: "Continuity – Types & Theorems",
    q: "Which of the following is an example of a function continuous everywhere on ℝ?",
    opts: ["f(x) = 1/x", "f(x) = ln x", "f(x) = x³", "f(x) = √x"],
    ans: 2,
    exp: "f(x) = <strong>x³</strong> is a polynomial. Polynomials are defined and continuous for every real number. The other options each have domain restrictions."
  },
  {
    cat: "Continuity – Types & Theorems",
    q: "A jump discontinuity occurs when:",
    opts: ["Both one-sided limits are equal", "The left-hand and right-hand limits exist but are unequal", "The function grows to infinity", "f(a) is undefined but the limit exists"],
    ans: 1,
    exp: "At a <strong>jump discontinuity</strong>, both one-sided limits exist but differ, so the two-sided limit does not exist. The graph 'jumps' from one value to another."
  },
  {
    cat: "Continuity – Types & Theorems",
    q: "A removable discontinuity at x = a can be fixed by:",
    opts: ["Removing x = a from the domain", "Redefining f(a) to equal the limit", "Replacing the function with a polynomial", "Taking the derivative"],
    ans: 1,
    exp: "A <strong>removable discontinuity</strong> (hole) is 'fixed' by <strong>redefining f(a)</strong> to equal lim<sub>x→a</sub> f(x). This makes the function continuous at a."
  },
  {
    cat: "Continuity – Types & Theorems",
    q: "For what values of x is there a gap in the graph of f(x) = (x² − 9)/(x² − 5x + 6)?",
    opts: ["5 and 6", "2 and 3", "−2 and −3", "3 and −3"],
    ans: 1,
    exp: "Factor the denominator: x² − 5x + 6 = (x − 2)(x − 3). The function is undefined at <strong>x = 2 and x = 3</strong>, creating gaps (holes or asymptotes) in the graph."
  },
  {
    cat: "Continuity – Types & Theorems",
    q: "Which function is continuous everywhere?",
    opts: ["Exponential function", "Logarithmic function", "Polynomial function", "Step function"],
    ans: 2,
    exp: "<strong>Polynomial functions</strong> are continuous everywhere on ℝ. Logarithms require x > 0, exponentials are continuous but step functions have jump discontinuities."
  },
  {
    cat: "Continuity – Types & Theorems",
    q: "The Intermediate Value Theorem guarantees that a continuous function on [a, b] takes:",
    opts: ["Only integer values", "Every value between f(a) and f(b)", "The value 0 at some point", "Its maximum at the midpoint"],
    ans: 1,
    exp: "The <strong>IVT</strong> says: if f is continuous on [a, b] and N is any value between f(a) and f(b), then there exists c ∈ (a, b) with f(c) = N. It guarantees <strong>every intermediate value</strong> is achieved."
  },
  {
    cat: "Continuity – Types & Theorems",
    q: "f(x) = x² is continuous:",
    opts: ["Nowhere", "At x = 0 only", "Everywhere", "At x = 1 only"],
    ans: 2,
    exp: "x² is a polynomial, and polynomials are <strong>continuous everywhere</strong> on ℝ. For any value a, lim<sub>x→a</sub> x² = a² = f(a)."
  },
  {
    cat: "Continuity – Types & Theorems",
    q: "Which statement about differentiability and continuity is correct?",
    opts: ["Continuity implies differentiability", "Differentiability implies continuity", "They are unrelated", "Both imply each other"],
    ans: 1,
    exp: "<strong>Differentiability implies continuity</strong> — if f′(a) exists, then f is continuous at a. However, continuity does NOT imply differentiability (e.g., f(x) = |x| is continuous but not differentiable at 0)."
  },

  // DERIVATIVES — RULES (Q24–33)
  {
    cat: "Derivatives – Rules",
    q: "The slope of the tangent line to a curve at a point equals:",
    opts: ["The integral at that point", "The limit of the function", "The derivative at that point", "The function value"],
    ans: 2,
    exp: "The <strong>derivative f′(a)</strong> gives the instantaneous rate of change, which geometrically equals the <strong>slope of the tangent line</strong> to the curve at x = a."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is the primary meaning of a derivative?",
    opts: ["To find the value of x", "To change the value of x", "Rate of change", "Change of position of a variable"],
    ans: 2,
    exp: "The derivative measures the <strong>instantaneous rate of change</strong> of a function with respect to its variable — how fast f(x) is changing at a specific point."
  },
  {
    cat: "Derivatives – Rules",
    q: "d/dx (√x) using the Power Rule is:",
    opts: ["2√x", "1/(2√x)", "√x / 2", "2x"],
    ans: 1,
    exp: "Write √x = x^(1/2). Power Rule: d/dx(x^(1/2)) = (1/2)x^(−1/2) = <strong>1/(2√x)</strong>."
  },
  {
    cat: "Derivatives – Rules",
    q: "d/dx (√(sin x)) using the Chain Rule is:",
    opts: ["cos x / (2√(sin x))", "1/(2√(sin x))", "cos x · √(sin x)", "sin x / (2√(cos x))"],
    ans: 0,
    exp: "Let u = sin x, so f = √u = u^(1/2). Chain Rule: f′ = (1/2)u^(−1/2) · u′ = (1/2)(sin x)^(−1/2) · cos x = <strong>cos x / (2√(sin x))</strong>."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is d/dx (x³ · eˣ)?",
    opts: ["3x² · eˣ", "x³ · eˣ", "3x² · eˣ + x³ · eˣ", "3x² + eˣ"],
    ans: 2,
    exp: "<strong>Product Rule</strong>: d/dx(u·v) = u′v + uv′. Here u = x³, u′ = 3x²; v = eˣ, v′ = eˣ. So f′(x) = <strong>3x²eˣ + x³eˣ</strong> = eˣ(3x² + x³)."
  },
  {
    cat: "Derivatives – Rules",
    q: "d/dx (cos²x) = ?",
    opts: ["−2 cos x", "2 cos x · sin x", "−2 cos x · sin x", "−sin²x"],
    ans: 2,
    exp: "Chain Rule: d/dx(cos²x) = 2 cos x · d/dx(cos x) = 2 cos x · (−sin x) = <strong>−2 cos x · sin x</strong> = −sin 2x."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is d/dx (ln(3x))?",
    opts: ["3/x", "1/(3x)", "1/x", "3 ln x"],
    ans: 2,
    exp: "Chain Rule: d/dx(ln u) = u′/u. Here u = 3x, u′ = 3. So d/dx(ln 3x) = 3/(3x) = <strong>1/x</strong>. Alternatively, ln(3x) = ln 3 + ln x, and d/dx(ln x) = 1/x."
  },
  {
    cat: "Derivatives – Rules",
    q: "The Quotient Rule d/dx(u/v) = ?",
    opts: ["(u′v − uv′) / v²", "(uv′ − u′v) / v²", "u′/v′", "u′v + uv′"],
    ans: 0,
    exp: "<strong>Quotient Rule</strong>: d/dx(u/v) = <strong>(u′v − uv′) / v²</strong>. A helpful mnemonic: 'lo d-hi minus hi d-lo, over lo-squared.'"
  },
  {
    cat: "Derivatives – Rules",
    q: "What is d/dx (tan x) using the Quotient Rule on sin x / cos x?",
    opts: ["sin²x", "cos²x", "sec²x", "cot x"],
    ans: 2,
    exp: "Applying Quotient Rule: (cos x · cos x − sin x · (−sin x)) / cos²x = (cos²x + sin²x) / cos²x = 1/cos²x = <strong>sec²x</strong>."
  },
  {
    cat: "Derivatives – Rules",
    q: "d/dx (e^(x²)) = ?",
    opts: ["e^(x²)", "2x", "2x · e^(x²)", "x² · e^(x²−1)"],
    ans: 2,
    exp: "<strong>Chain Rule</strong>: d/dx(e^u) = e^u · u′. Here u = x², u′ = 2x. So d/dx(e^(x²)) = <strong>2x · e^(x²)</strong>."
  },
  {
    cat: "Derivatives – Rules",
    q: "What is d/dx (x⁴ − 3x² + 7)?",
    opts: ["4x³ − 6x", "4x³ − 3x", "x³ − 6x", "4x − 6"],
    ans: 0,
    exp: "Differentiate term by term using the <strong>Power Rule</strong>: d/dx(x⁴) = 4x³, d/dx(−3x²) = −6x, d/dx(7) = 0. Result: <strong>4x³ − 6x</strong>."
  },

  // DOMAIN — ADVANCED (Q34–37)
  {
    cat: "Domain – Advanced",
    q: "What is the domain of f(x) = √(x + 1) / (x − 2)?",
    opts: ["x ≥ −1, x ≠ 2", "All real numbers", "x > 2", "x ≥ 2"],
    ans: 0,
    exp: "Two restrictions: √(x + 1) requires x + 1 ≥ 0 → x ≥ −1; and the denominator requires x ≠ 2. Combined domain: <strong>x ≥ −1 and x ≠ 2</strong>, i.e. [−1, 2) ∪ (2, ∞)."
  },
  {
    cat: "Domain – Advanced",
    q: "The domain of 1/√x is:",
    opts: ["x > 0", "x ≥ 0", "All real numbers", "x ≠ 0"],
    ans: 0,
    exp: "Both the square root and the denominator impose restrictions: √x requires x ≥ 0, and 1/√x requires x ≠ 0. Combined: <strong>x > 0</strong> (strictly positive)."
  },
  {
    cat: "Domain – Advanced",
    q: "The natural domain is defined as:",
    opts: ["The set of values f can output", "The largest set of real numbers for which the function is defined", "All positive real numbers", "The range of a function"],
    ans: 1,
    exp: "The <strong>natural domain</strong> is the <strong>largest set of real numbers</strong> for which a function produces a valid (real, defined) output — no extra restrictions imposed by context."
  },
  {
    cat: "Domain – Advanced",
    q: "What is the domain of the set of ordered pairs {(2,0), (8,−3), (5,1), (−4,9)}?",
    opts: ["{0, −3, 1, 9}", "{2, 8, 5, −4}", "ℝ", "{0, −3, 5, −4}"],
    ans: 1,
    exp: "In a set of ordered pairs (x, y), the <strong>domain</strong> is the set of all <strong>first elements (x-values)</strong>: <strong>{2, 8, 5, −4}</strong>. The y-values form the range."
  },

  // MIXED REVIEW (Q38–40)
  {
    cat: "Mixed Review",
    q: "For lim<sub>x→0</sub> f(x) to exist, which must be true?",
    opts: ["f(0) must be defined", "lim<sub>x→0⁻</sub> f(x) = lim<sub>x→0⁺</sub> f(x)", "The derivative must exist at 0", "The function must be a polynomial"],
    ans: 1,
    exp: "For a two-sided limit to exist, the <strong>left-hand and right-hand limits must be equal</strong>. Whether f(0) is defined is irrelevant to the limit's existence."
  },
  {
    cat: "Mixed Review",
    q: "Which of the following statements is FALSE?",
    opts: ["Every differentiable function is continuous", "Every continuous function is differentiable", "Polynomials are continuous everywhere", "lim<sub>x→0</sub> sin x / x = 1"],
    ans: 1,
    exp: "The statement '<strong>every continuous function is differentiable</strong>' is <strong>FALSE</strong>. For example, f(x) = |x| is continuous everywhere but not differentiable at x = 0 (sharp corner)."
  },
  {
    cat: "Mixed Review",
    q: "Which of the following has BOTH a vertical asymptote and a horizontal asymptote?",
    opts: ["f(x) = x²", "f(x) = sin x", "f(x) = 1/x", "f(x) = eˣ"],
    ans: 2,
    exp: "f(x) = <strong>1/x</strong> has a vertical asymptote at x = 0 (denominator = 0) and a horizontal asymptote at y = 0 (lim<sub>x→∞</sub> 1/x = 0). Both asymptotes are present."
  }
];