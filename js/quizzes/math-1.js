    const questions = [

      // LIMITS (Q1–20)

      {
        cat: "Limits",
        q: "What is lim (x → ∞) 1/x ?",
        opts: ["1", "0", "∞", "-1"],
        ans: 1,
        exp: "As x becomes very large, 1/x becomes very small → approaches 0."
      },
      {
        cat: "Limits",
        q: "lim (x → 3) (x² − 9)/(x − 3) equals:",
        opts: ["0", "3", "6", "Does not exist"],
        ans: 2,
        exp: "Factor: (x-3)(x+3)/(x-3) → x+3 → 6."
      },
      {
        cat: "Limits",
        q: "lim (x → 0) sin(x)/x equals:",
        opts: ["0", "∞", "1", "Undefined"],
        ans: 2,
        exp: "Standard limit: sin(x)/x → 1 as x → 0."
      },
      {
        cat: "Limits",
        q: "lim (x → a) c (constant) equals:",
        opts: ["0", "a", "c", "∞"],
        ans: 2,
        exp: "Limit of a constant is the constant itself."
      },
      {
        cat: "Limits",
        q: "lim (x → a) [f(x) + g(x)] equals:",
        opts: ["L+M", "L*M", "L/M", "None"],
        ans: 0,
        exp: "Sum rule: limit of sum = sum of limits."
      },
      {
        cat: "Limits",
        q: "lim (x → ∞) x/(x+1) equals:",
        opts: ["0", "1", "∞", "-1"],
        ans: 1,
        exp: "Divide by x: 1/(1+1/x) → 1."
      },
      {
        cat: "Limits",
        q: "lim (x → 0) x² equals:",
        opts: ["0", "1", "∞", "Undefined"],
        ans: 0,
        exp: "Direct substitution: 0² = 0."
      },
      {
        cat: "Limits",
        q: "lim (x → ∞) 5/x equals:",
        opts: ["5", "0", "∞", "-5"],
        ans: 1,
        exp: "As denominator grows, fraction → 0."
      },
      {
        cat: "Limits",
        q: "lim (x → a) f(x) exists if:",
        opts: ["LHL = RHL", "LHL ≠ RHL", "Only LHL exists", "Only RHL exists"],
        ans: 0,
        exp: "Limit exists only if left-hand limit = right-hand limit."
      },
      {
        cat: "Limits",
        q: "lim (x → ∞) (2x+1)/(x) equals:",
        opts: ["2", "1", "0", "∞"],
        ans: 0,
        exp: "(2x+1)/x = 2 + 1/x → 2."
      },
      {
        cat: "Limits",
        q: "A vertical asymptote occurs when:",
        opts: ["x → a, f(x) → ∞", "x → ∞, f(x) → a", "f(x)=0", "x=0"],
        ans: 0,
        exp: "If function grows infinitely near x=a, vertical asymptote."
      },
      {
        cat: "Limits",
        q: "A horizontal asymptote occurs when:",
        opts: ["x → ∞, f(x) → L", "x → 0", "f(x)=0", "x=a"],
        ans: 0,
        exp: "Function approaches a constant as x → ∞."
      },
      {
        cat: "Limits",
        q: "lim (x → ∞) 1/(x²) equals:",
        opts: ["1", "0", "∞", "-1"],
        ans: 1,
        exp: "Denominator grows faster → limit = 0."
      },
      {
        cat: "Limits",
        q: "lim (x → 0) 1/x equals:",
        opts: ["0", "1", "∞ or -∞", "Undefined"],
        ans: 2,
        exp: "Approaches +∞ from right, -∞ from left."
      },
      {
        cat: "Limits",
        q: "lim (x → 2) (x+3) equals:",
        opts: ["2", "3", "5", "∞"],
        ans: 2,
        exp: "Direct substitution: 2+3=5."
      },
      {
        cat: "Limits",
        q: "lim (x → ∞) (3x²)/(x²+1) equals:",
        opts: ["3", "1", "0", "∞"],
        ans: 0,
        exp: "Divide by x² → 3/(1+1/x²) → 3."
      },
      {
        cat: "Limits",
        q: "Left-hand limit is denoted as:",
        opts: ["lim x→a⁺", "lim x→a⁻", "lim x=a", "lim f(x)"],
        ans: 1,
        exp: "Minus sign (⁻) means approaching from left."
      },
      {
        cat: "Limits",
        q: "lim (x → ∞) e^x equals:",
        opts: ["0", "1", "∞", "-∞"],
        ans: 2,
        exp: "Exponential grows rapidly → ∞."
      },
      {
        cat: "Limits",
        q: "lim (x → 0) e^x equals:",
        opts: ["0", "1", "∞", "-1"],
        ans: 1,
        exp: "e⁰ = 1."
      },
      {
        cat: "Limits",
        q: "lim (x → ∞) ln(x) equals:",
        opts: ["0", "1", "∞", "-∞"],
        ans: 2,
        exp: "Log increases slowly but → ∞."
      },

      // DOMAIN + CONTINUITY + DERIVATIVES (Q21–40)

      {
        cat: "Domain",
        q: "Natural domain of √(x-3):",
        opts: ["x ≥ 3", "x ≤ 3", "All real", "x ≠ 3"],
        ans: 0,
        exp: "Inside root must be ≥ 0 → x ≥ 3."
      },
      {
        cat: "Domain",
        q: "Domain of 1/(x-5):",
        opts: ["x ≠ 5", "x=5", "All real", "x≥5"],
        ans: 0,
        exp: "Denominator cannot be zero."
      },
      {
        cat: "Domain",
        q: "Domain of polynomial functions:",
        opts: ["Finite", "All real", "Positive only", "Negative only"],
        ans: 1,
        exp: "Polynomials are defined everywhere."
      },
      {
        cat: "Domain",
        q: "Domain of 1/√x:",
        opts: ["x>0", "x≥0", "All real", "x≠0"],
        ans: 0,
        exp: "√x must be >0 and denominator ≠0."
      },
      {
        cat: "Continuity",
        q: "A function is continuous at x=a if:",
        opts: ["Limit exists", "f(a) exists", "Limit=f(a)", "All"],
        ans: 3,
        exp: "All three conditions must be satisfied."
      },
      {
        cat: "Continuity",
        q: "Jump discontinuity means:",
        opts: ["Equal limits", "Unequal limits", "Infinite", "Removable"],
        ans: 1,
        exp: "LHL ≠ RHL."
      },
      {
        cat: "Continuity",
        q: "Function continuous everywhere:",
        opts: ["Exponential", "Logarithmic", "Polynomial", "Step"],
        ans: 2,
        exp: "Polynomials have no breaks."
      },
      {
        cat: "Continuity",
        q: "Discontinuity of 1/x at x=0:",
        opts: ["Removable", "Jump", "Infinite", "Point"],
        ans: 2,
        exp: "Function goes to infinity."
      },
      {
        cat: "Derivatives",
        q: "Derivative of constant:",
        opts: ["1", "0", "x", "∞"],
        ans: 1,
        exp: "Constant slope is zero."
      },
      {
        cat: "Derivatives",
        q: "d/dx (x²):",
        opts: ["x", "2x", "x²", "2"],
        ans: 1,
        exp: "Power rule → 2x."
      },
      {
        cat: "Derivatives",
        q: "Derivative of ln(x):",
        opts: ["x", "1/x", "1/lnx", "x/lnx"],
        ans: 1,
        exp: "Standard derivative."
      },
      {
        cat: "Derivatives",
        q: "d/dx (3x+5):",
        opts: ["3", "5", "x", "0"],
        ans: 0,
        exp: "Derivative of ax+b = a."
      },
      {
        cat: "Derivatives",
        q: "Slope of tangent equals:",
        opts: ["Integral", "Limit", "Derivative", "Function"],
        ans: 2,
        exp: "Derivative gives slope."
      },
      {
        cat: "Derivatives",
        q: "Chain rule applies to:",
        opts: ["Sum", "Composite functions", "Product", "Constant"],
        ans: 1,
        exp: "Used when function inside another."
      },
      {
        cat: "Derivatives",
        q: "Derivative of linear function y=mx+c:",
        opts: ["c", "x", "y'", "m"],
        ans: 3,
        exp: "Slope = m."
      },
      {
        cat: "Derivatives",
        q: "Derivative represents:",
        opts: ["Area", "Slope", "Volume", "Limit"],
        ans: 1,
        exp: "It is instantaneous rate of change."
      },
      {
        cat: "Concept",
        q: "Natural domain excludes:",
        opts: ["Undefined values", "All real", "Only zero", "Only positive"],
        ans: 0,
        exp: "We remove undefined points."
      },
      {
        cat: "Concept",
        q: "Graph is continuous if you can draw without:",
        opts: ["Ruler", "Lifting pencil", "Crossing axis", "Scaling"],
        ans: 1,
        exp: "No breaks → continuous."
      },
      {
        cat: "Theorem",
        q: "Intermediate Value Theorem requires:",
        opts: ["Differentiable", "Continuous", "Linear", "Increasing"],
        ans: 1,
        exp: "Continuity is required."
      },
      {
        cat: "Concept",
        q: "Polynomial functions are:",
        opts: ["Discontinuous", "Continuous", "Periodic", "Undefined"],
        ans: 1,
        exp: "Always smooth and continuous."
      }

    ];