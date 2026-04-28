const questions = [
  // ── LECTURE 1: Problem Solving & Algorithms ──────────────────────────────
  {
    cat: "Problem Solving",
    q: "Which step of the problem-solving process involves diagnosing the situation and focusing on the real problem, not its symptoms?",
    opts: [
      "Implement and follow up on the solution",
      "Generate alternative solutions",
      "Evaluate and select an alternative",
      "Define / Identify the problem"
    ],
    ans: 3,
    exp: "Step 1 — Define/Identify the problem — involves diagnosing the situation to focus on the real problem, not just its symptoms. It is described as the most important and difficult step."
  },
  {
    cat: "Problem Solving",
    q: "A common mistake during the 'Evaluate and select an alternative' step is:",
    opts: [
      "Choosing the best solution after evaluating all alternatives",
      "Selecting the first acceptable solution before all alternatives are considered",
      "Generating too many alternative solutions",
      "Implementing the solution before defining the problem"
    ],
    ans: 1,
    exp: "The lecture warns that a common mistake is selecting the first acceptable solution even if it is not the best, without properly evaluating all alternatives."
  },
  {
    cat: "Algorithms",
    q: "Which of the following is TRUE about a good algorithm?",
    opts: [
      "It must be written in Python or C",
      "It must include computer code so it can run",
      "Steps can be vague as long as the output is correct",
      "It should be written so it can be used in different programming languages"
    ],
    ans: 3,
    exp: "A good algorithm should NOT include computer code and should be written in a language-independent way so it can be implemented in any programming language."
  },
  {
    cat: "Flowcharts",
    q: "Which flowchart symbol represents a <strong>Process</strong> (e.g., a calculation step)?",
    opts: [
      "Diamond",
      "Oval / Rounded rectangle",
      "Rectangle",
      "Parallelogram"
    ],
    ans: 2,
    exp: "A rectangle is the Process symbol in flowcharts. The diamond is for decisions, the oval for start/end, and the parallelogram for input/output."
  },
  {
    cat: "Flowcharts",
    q: "In the algorithm to find the area of a circle (area = pi * r * r), what is the FIRST step after Start?",
    opts: [
      "Print area",
      "area ← pi * r * r",
      "End",
      "Input r and pi"
    ],
    ans: 3,
    exp: "The algorithm is: Start → Input r, pi → area = pi*r*r → Print area → End. So Input r and pi is the first step after Start."
  },

  // ── LECTURE 2: Intro to C ─────────────────────────────────────────────────
  {
    cat: "C Basics",
    q: "What does the <strong>&lt;stdio.h&gt;</strong> header file provide?",
    opts: [
      "Mathematical functions like sqrt() and pow()",
      "Memory allocation functions",
      "String manipulation functions",
      "Standard input and output functions like printf() and scanf()"
    ],
    ans: 3,
    exp: "<stdio.h> stands for standard input/output. It provides functions like printf() for output and scanf() for input."
  },
  {
    cat: "C Basics",
    q: "All preprocessor directives in C begin with which symbol?",
    opts: [
      "@ (at sign)",
      "# (hash)",
      "$ (dollar sign)",
      "& (ampersand)"
    ],
    ans: 1,
    exp: "All preprocessor directives begin with a '#' (hash) symbol. Examples: #include, #define."
  },
  {
    cat: "C Basics",
    q: "Which format specifier is used to print a <strong>float</strong> value with printf()?",
    opts: [
      "%f",
      "%d",
      "%c",
      "%s"
    ],
    ans: 0,
    exp: "%f is the format specifier for float. %d is for int, %c for char, %s for strings."
  },
  {
    cat: "C Basics",
    q: "What is a variable in C?",
    opts: [
      "A fixed value that cannot change during program execution",
      "A function that stores instructions",
      "A named memory location used to store a value",
      "A type of loop in C"
    ],
    ans: 2,
    exp: "A variable is a named memory location on which a value is stored and used during the program. Its value can change during execution."
  },
  {
    cat: "C Basics",
    q: "Teacher's tip: What value might an uninitialized variable hold in C?",
    opts: [
      "Always 0",
      "Always -1",
      "Always NULL",
      "A garbage value (random leftover data from memory)"
    ],
    ans: 3,
    exp: "Teacher's tip: If a variable is not initialized before being used, it might hold a garbage value — whatever random data was previously stored at that memory location."
  },
  {
    cat: "C Basics",
    q: "What does the escape sequence <strong>\\t</strong> do in a printf() string?",
    opts: [
      "Inserts a tab",
      "Terminates the program",
      "Prints a newline",
      "Prints a backslash"
    ],
    ans: 0,
    exp: "\\t inserts a horizontal tab. \\n is newline, \\\\ is a literal backslash."
  },
  {
    cat: "C Basics",
    q: "In the scanf() function, what does the <strong>&</strong> before a variable name represent?",
    opts: [
      "Logical AND operation",
      "Bitwise AND operation",
      "The memory address of the variable",
      "A pointer to a function"
    ],
    ans: 2,
    exp: "The & (address-of operator) gives the memory address of the variable, which scanf() needs to know where to store the input value."
  },
  {
    cat: "C Basics",
    q: "Teacher's tip: What will this code output?<br><code>int a=5, b=2; float c = a/b; printf(\"%.2f\", c);</code>",
    opts: [
      "2.00",
      "2.50",
      "2.5",
      "Compile error"
    ],
    ans: 0,
    exp: "Since a and b are both integers, a/b performs integer division = 2. The integer 2 is then stored in float c as 2.00. This is the classic integer division trap the teacher highlighted!"
  },

  // ── LECTURE 3: Operators ──────────────────────────────────────────────────
  {
    cat: "Operators in C",
    q: "What does the modulus operator <strong>%</strong> return?",
    opts: [
      "The quotient of the division",
      "The average of two numbers",
      "The absolute difference of two numbers",
      "The remainder after dividing two operands"
    ],
    ans: 3,
    exp: "The modulus operator returns the remainder of the division. For example, 10 % 3 = 1 (because 10 = 3×3 + 1)."
  },
  {
    cat: "Operators in C",
    q: "What is the result of <code>5 | 3</code> (Bitwise OR)?",
    opts: [
      "1",
      "6",
      "7",
      "8"
    ],
    ans: 2,
    exp: "5 in binary = 0101, 3 in binary = 0011. Bitwise OR: 0101 | 0011 = 0111 = 7."
  },
  {
    cat: "Operators in C",
    q: "What is the result of <code>5 ^ 3</code> (Bitwise XOR)?",
    opts: [
      "2",
      "7",
      "1",
      "6"
    ],
    ans: 3,
    exp: "5 in binary = 0101, 3 in binary = 0011. XOR gives 1 where bits differ: 0101 ^ 0011 = 0110 = 6."
  },
  {
    cat: "Operators in C",
    q: "Which operator checks if two values are <strong>NOT equal</strong> in C?",
    opts: [
      "<>",
      "!==",
      "=/=",
      "!="
    ],
    ans: 3,
    exp: "!= is the inequality operator in C. It returns true (1) if the two operands are not equal, false (0) if they are equal."
  },
  {
    cat: "Operators in C",
    q: "What is the C expression for: <strong>(a − 7) / (t + 9v)</strong>?",
    opts: [
      "(a - 7) / (t + 9 * v)",
      "a - 7 / t + 9 * v",
      "(a - 7) / t + 9 * v",
      "a - (7 / t) + 9v"
    ],
    ans: 0,
    exp: "Both (a-7) and (t+9*v) must be grouped with parentheses, and multiplication must be explicit: (a - 7) / (t + 9 * v)."
  },
  {
    cat: "Operators in C",
    q: "The Logical NOT operator <strong>!</strong> applied to a true value gives:",
    opts: [
      "1 (true)",
      "The same true value",
      "An error",
      "0 (false)"
    ],
    ans: 3,
    exp: "The logical NOT (!) negates the value. !(true) = false = 0. For example: !(5 > 3) = !(true) = 0."
  },
  {
    cat: "Operators in C",
    q: "Teacher's tip: which of the following is a valid C expression?",
    opts: [
      "a +(b/7)",
      "a ** b",
      "$a + $b",
      "a ^^ b"
    ],
    ans: 0,
    exp: "Teacher's tip: C expressions use standard arithmetic operators. a+(b/7) is valid. ** is not a C operator (Python uses it for power), and $ is not valid in C variable names."
  },

  // ── LECTURE 4: Decision Control ───────────────────────────────────────────
  {
    cat: "Decision Control",
    q: "In C, what is the result of evaluating <code>a == b</code> when a = 5 and b = 5?",
    opts: [
      "5",
      "0 (false)",
      "null",
      "1 (true)"
    ],
    ans: 3,
    exp: "The equality operator == returns 1 (true) when both operands are equal. Since a=5 and b=5 are equal, the result is 1."
  },
  {
    cat: "Decision Control",
    q: "What will an if-else condition evaluate when the Boolean expression is FALSE?",
    opts: [
      "The if block executes",
      "Both blocks execute",
      "The else block executes",
      "The program terminates"
    ],
    ans: 2,
    exp: "When the Boolean expression in an if-else is false, the else block executes. The if block only runs when the condition is true."
  },
  {
    cat: "Decision Control",
    q: "For the AND (&&) truth table: TRUE && FALSE = ?",
    opts: [
      "TRUE",
      "FALSE",
      "Depends on context",
      "Undefined"
    ],
    ans: 1,
    exp: "AND returns true only when BOTH operands are true. TRUE && FALSE = FALSE because one operand is false."
  },
  {
    cat: "Decision Control",
    q: "For the OR (||) truth table: FALSE || TRUE = ?",
    opts: [
      "FALSE",
      "Undefined",
      "TRUE",
      "Depends on context"
    ],
    ans: 2,
    exp: "OR returns true if at least one operand is true. FALSE || TRUE = TRUE because one of the operands is true."
  },

  // ── LECTURE 5: Switch & Ternary ───────────────────────────────────────────
  {
    cat: "Switch Statement",
    q: "What is the correct syntax to start a switch statement in C?",
    opts: [
      "switch expression { }",
      "switch [expression] { }",
      "switch (expression) { }",
      "switch <expression> { }"
    ],
    ans: 2,
    exp: "The switch expression must be enclosed in parentheses: switch (expression) { ... }. This is the required syntax in C."
  },
  {
    cat: "Switch Statement",
    q: "Which of the following switch expressions is <strong>NOT valid</strong> in C?",
    opts: [
      "switch(i + j * k)",
      "switch('A')",
      "switch(3.14)",
      "switch(23 + 45 % 4 * k)"
    ],
    ans: 2,
    exp: "switch(3.14) is invalid because the switch expression must be an integer or character type. Float and double values are not allowed."
  },
  {
    cat: "Switch Statement",
    q: "What is 'fall-through' in a switch statement?",
    opts: [
      "When the default case runs before other cases",
      "When the switch expression is a float",
      "When break is missing and subsequent cases also execute",
      "When two cases have the same value"
    ],
    ans: 2,
    exp: "Fall-through happens when there is no break statement in a case — execution continues into the next case(s) below the matched one."
  },
  {
    cat: "Switch Statement",
    q: "What is the ternary operator syntax for: if age >= 18 print 'Can Vote' else print 'Cannot Vote'?",
    opts: [
      "age >= 18 ? printf(\"Cannot Vote\") : printf(\"Can Vote\")",
      "if(age >= 18) printf(\"Can Vote\") else printf(\"Cannot Vote\")",
      "(age >= 18) ? printf(\"Can Vote\") : printf(\"Cannot Vote\")",
      "age >= 18 then printf(\"Can Vote\") else printf(\"Cannot Vote\")"
    ],
    ans: 2,
    exp: "Ternary syntax: (condition) ? execute_if_true : execute_if_false. So (age >= 18) ? printf(\"Can Vote\") : printf(\"Cannot Vote\")."
  },
  {
    cat: "Switch Statement",
    q: "The <strong>break</strong> statement in a switch case is:",
    opts: [
      "Mandatory or the program won't compile",
      "Only required in the default case",
      "Never needed because cases end automatically",
      "Optional, but without it all following cases execute (fall-through)"
    ],
    ans: 3,
    exp: "Break is optional in switch. If omitted, the program falls through and executes all subsequent cases until a break or the end of the switch is reached."
  },

  // ── LECTURE 6: Loops ──────────────────────────────────────────────────────
  {
    cat: "Loops",
    q: "Teacher's tip: Loops are also called:",
    opts: [
      "Decision blocks",
      "Execution sequences",
      "Control structures",
      "Iteration functions"
    ],
    ans: 2,
    exp: "Teacher's tip of the day: Loops are also called control structures (along with if-else, switch, etc.)."
  },
  {
    cat: "Loops",
    q: "If the while loop condition is <strong>false</strong> from the very beginning, how many times does the loop body execute?",
    opts: [
      "Once",
      "Infinitely",
      "Twice",
      "Zero times"
    ],
    ans: 3,
    exp: "A key point of the while loop: if the condition is false initially, the loop body is SKIPPED entirely — it executes zero times."
  },
  {
    cat: "Loops",
    q: "A <strong>do-while</strong> loop guarantees the body executes at least once because:",
    opts: [
      "It checks the condition before the first iteration",
      "It uses a different type of condition than while",
      "It ignores the condition on the first run",
      "The condition is checked at the END of each iteration"
    ],
    ans: 3,
    exp: "In do-while, the condition is evaluated at the END. So the body always runs once before any check happens, even if the condition is false."
  },
  {
    cat: "Loops",
    q: "Which loop is best when you know the exact number of repetitions in advance?",
    opts: [
      "for loop",
      "while loop",
      "do-while loop",
      "nested loop"
    ],
    ans: 0,
    exp: "The for loop is designed for situations where you know in advance how many times you want to execute the loop body."
  },
  {
    cat: "Loops",
    q: "What common error is unique to the do-while loop syntax?",
    opts: [
      "Missing opening brace {",
      "Forgetting the semicolon after while(condition);",
      "Using a float in the condition",
      "Declaring variables inside the loop"
    ],
    ans: 1,
    exp: "The do-while loop must end with a semicolon: do { ... } while(condition); — the other loops (for, while) should NOT have a semicolon after them. Forgetting this is a common error."
  },
  {
    cat: "Loops",
    q: "What is the ASCII value of the smiley face character used in the lecture task?",
    opts: [
      "32",
      "0",
      "2",
      "1"
    ],
    ans: 3,
    exp: "The lecture task asks to fill the screen with a smiley face that has ASCII value 1."
  },

  // ── LECTURE 7: Nested Loops ───────────────────────────────────────────────
  {
    cat: "Nested Loops",
    q: "If the outer loop runs <strong>4</strong> times and the inner loop runs <strong>3</strong> times, how many total iterations does the inner loop perform?",
    opts: [
      "4",
      "3",
      "7",
      "12"
    ],
    ans: 3,
    exp: "Total inner loop iterations = outer × inner = 4 × 3 = 12. For each of the 4 outer iterations, the inner loop completes all 3 of its iterations."
  },
  {
    cat: "Nested Loops",
    q: "Which of the following describes a nested for loop?",
    opts: [
      "A for loop with two condition checks",
      "A for loop that skips iterations",
      "A for loop inside another for loop",
      "A for loop that runs indefinitely"
    ],
    ans: 2,
    exp: "A nested for loop is simply a for loop placed inside another for loop. The inner loop completes all its iterations for each single iteration of the outer loop."
  },
  {
    cat: "Nested Loops",
    q: "The depth of nested loops depends on:",
    opts: [
      "The size of the input data only",
      "The type of variables used",
      "The compiler being used",
      "The complexity of the problem being solved"
    ],
    ans: 3,
    exp: "According to the lecture, the depth of nested loops depends on the complexity of the problem. You can have any number of nested loops as required."
  },

  // ── C BASICS / TIPS ───────────────────────────────────────────────────────
  {
    cat: "C Basics",
    q: "Which format specifier is used for a <strong>double</strong> in printf()?",
    opts: [
      "%lf",
      "%d",
      "%f",
      "%dc"
    ],
    ans: 0,
    exp: "Teacher's tip: Explore the format specifier for double. %lf (long float) is used for double in printf() and scanf()."
  },
  {
    cat: "C Basics",
    q: "Which of the following is a valid rule for constructing variable names in C?",
    opts: [
      "Variable names can start with a digit",
      "Spaces are allowed in variable names",
      "Variable names are case-sensitive",
      "Keywords like 'int' can be used as variable names"
    ],
    ans: 2,
    exp: "Variable names in C are case-sensitive (e.g., num and Num are different). They cannot start with a digit, cannot have spaces, and cannot be reserved keywords."
  },
  {
    cat: "C Basics",
    q: "Multi-line comments in C are written as:",
    opts: [
      "// comment starts and ends with //",
      "## comment ##",
      "<!-- comment -->",
      "/* comment */"
    ],
    ans: 3,
    exp: "Multi-line comments in C start with /* and end with */. Single-line comments use //."
  }
];