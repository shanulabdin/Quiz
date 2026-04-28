const questions = [
  // ── C Output Prediction (Tricky) ──
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 5;\n    printf(\"%d %d %d\", x, x++, ++x);\n    return 0;\n}</pre>",
    opts: [
      "5 5 7",
      "7 6 7",
      "5 6 7",
      "Undefined behavior"
    ],
    ans: 3,
    exp: "Modifying and reading the same variable multiple times in one printf() call without a sequence point is UNDEFINED BEHAVIOR in C. The compiler can evaluate arguments in any order. Never rely on this."
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i = 0;\n    while (i++ &lt; 3)\n        printf(\"%d \", i);\n    return 0;\n}</pre>",
    opts: [
      "0 1 2",
      "1 2 3",
      "0 1 2 3",
      "1 2 3 4"
    ],
    ans: 1,
    exp: "i++ is post-increment: the condition is checked with the OLD value, then i is incremented. Check: i=0 (0<3 true, i becomes 1, prints 1), i=1 (1<3 true, i becomes 2, prints 2), i=2 (2<3 true, i becomes 3, prints 3), i=3 (3<3 false, stop). Output: 1 2 3"
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int a = 2, b = 3;\n    printf(\"%d\", a++ + ++b);\n    return 0;\n}</pre>",
    opts: [
      "5",
      "6",
      "7",
      "Error"
    ],
    ans: 1,
    exp: "a++ uses a's current value (2) then increments. ++b increments b first (3→4) then uses it. So the expression is 2 + 4 = 6."
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    for (int i = 0; i &lt; 3; i++) {\n        for (int j = 0; j &lt; 3; j++) {\n            if (j == 1) break;\n            printf(\"%d%d \", i, j);\n        }\n    }\n    return 0;\n}</pre>",
    opts: [
      "00 01 02 10 11 12 20 21 22",
      "00 10 20",
      "01 11 21",
      "00 01 10 11 20 21"
    ],
    ans: 1,
    exp: "break only exits the INNER loop. Each inner loop iteration: j=0 prints, j=1 breaks. So for each i, only j=0 is printed: 00, 10, 20."
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 10;\n    if (x = 5)\n        printf(\"True\");\n    else\n        printf(\"False\");\n    return 0;\n}</pre>",
    opts: [
      "False",
      "True",
      "Error",
      "Nothing"
    ],
    ans: 1,
    exp: "TRICKY! The condition uses = (assignment), NOT == (comparison). x = 5 assigns 5 to x and the result is 5, which is non-zero (truthy). So 'True' is printed. This is a very common bug!"
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i = 5;\n    while (i--) {\n        if (i == 3) continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}</pre>",
    opts: [
      "4 3 2 1 0",
      "5 4 3 2 1",
      "4 2 1 0",
      "4 3 2 1"
    ],
    ans: 2,
    exp: "i-- post-decrements: condition checks old value, then decrements. Loop: i=5(true,i→4), prints 4. i=4(true,i→3), skips(continue). i=3(true,i→2), prints 2. i=2(true,i→1), prints 1. i=1(true,i→0), prints 0. i=0(false,stop). Output: 4 2 1 0"
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 7;\n    printf(\"%d\", x &gt;&gt; 1);\n    return 0;\n}</pre>",
    opts: [
      "7",
      "14",
      "3",
      "1"
    ],
    ans: 2,
    exp: ">> is the right-shift bitwise operator. 7 in binary is 0111. Shifting right by 1 gives 0011 = 3. Right-shifting by 1 is equivalent to integer division by 2."
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int a = 5, b = 10, c = 15;\n    printf(\"%d\", a &lt; b &lt; c);\n    return 0;\n}</pre>",
    opts: [
      "1",
      "0",
      "15",
      "Error"
    ],
    ans: 0,
    exp: "Relational operators evaluate left to right. (a < b) = (5 < 10) = 1 (true). Then (1 < c) = (1 < 15) = 1 (true). So the final result is 1. Chaining comparisons like math doesn't work in C!"
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i;\n    for (i = 1; i &lt;= 100; i++);\n    printf(\"%d\", i);\n    return 0;\n}</pre>",
    opts: [
      "100",
      "99",
      "101",
      "0"
    ],
    ans: 2,
    exp: "The semicolon after the for loop makes it empty. The loop runs until i becomes 101 (when 101 <= 100 fails). After the loop, i = 101 is printed. Same trick as before — always watch for that sneaky semicolon!"
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int n = 0;\n    do {\n        n += 2;\n    } while (n &lt; 0);\n    printf(\"%d\", n);\n    return 0;\n}</pre>",
    opts: [
      "0",
      "-2",
      "2",
      "Infinite loop"
    ],
    ans: 2,
    exp: "do-while always runs the body at least once. n starts at 0, body runs: n = 0+2 = 2. Then checks: 2 < 0? False. Loop ends. Prints 2."
  },
  // ── Operators (Harder) ──
  {
    cat: "Operators",
    q: "What is the result of <code>5 & 3</code> (bitwise AND)?",
    opts: [
      "8",
      "7",
      "1",
      "2"
    ],
    ans: 2,
    exp: "5 in binary = 0101, 3 in binary = 0011. Bitwise AND: 0101 & 0011 = 0001 = 1. Both bits must be 1 for the result bit to be 1."
  },
  {
    cat: "Operators",
    q: "What is the result of <code>5 | 3</code> (bitwise OR)?",
    opts: [
      "1",
      "7",
      "8",
      "15"
    ],
    ans: 1,
    exp: "5 = 0101, 3 = 0011. Bitwise OR: 0101 | 0011 = 0111 = 7. A result bit is 1 if EITHER operand bit is 1."
  },
  {
    cat: "Operators",
    q: "What is the result of <code>5 ^ 3</code> (bitwise XOR)?",
    opts: [
      "1",
      "7",
      "6",
      "2"
    ],
    ans: 2,
    exp: "5 = 0101, 3 = 0011. XOR: 0101 ^ 0011 = 0110 = 6. XOR sets a bit to 1 only when the two bits are DIFFERENT."
  },
  {
    cat: "Operators",
    q: "What does the compound assignment <code>x *= 3</code> mean?",
    opts: [
      "x = 3 * 3",
      "x = x + 3",
      "x = x * 3",
      "x = x / 3"
    ],
    ans: 2,
    exp: "Compound assignment x *= 3 is shorthand for x = x * 3. It multiplies x by 3 and stores the result back into x."
  },
  {
    cat: "Operators",
    q: "In C, what is the result of <code>1 == 1 == 1</code>?",
    opts: [
      "1 (true)",
      "0 (false)",
      "Error",
      "Undefined"
    ],
    ans: 0,
    exp: "Left to right: (1==1) = 1, then (1==1) = 1. Final result is 1 (true). But be careful — (2==2==2) would give (1==2)=0 (false)! This is NOT the same as math."
  },
  // ── Data Types & Format Specifiers ──
  {
    cat: "Data Types",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    float x = 1.0 / 3.0;\n    printf(\"%.5f\", x);\n    return 0;\n}</pre>",
    opts: [
      "0.33000",
      "0.33333",
      "0.33300",
      "0.30000"
    ],
    ans: 1,
    exp: "1.0/3.0 is floating-point division (not integer division since literals have decimal points). The result ~0.333333... is printed to 5 decimal places: 0.33333."
  },
  {
    cat: "Data Types",
    q: "What is the range of ASCII codes for UPPERCASE letters A–Z?",
    opts: [
      "97 to 122",
      "48 to 57",
      "65 to 90",
      "65 to 122"
    ],
    ans: 2,
    exp: "Uppercase A-Z: ASCII 65 to 90. Lowercase a-z: ASCII 97 to 122. Digits 0-9: ASCII 48 to 57."
  },
  {
    cat: "Data Types",
    q: "What will <code>printf(\"%c\", 'A' + 1);</code> print?",
    opts: [
      "A",
      "B",
      "66",
      "Error"
    ],
    ans: 1,
    exp: "'A' has ASCII value 65. 65 + 1 = 66. Printing 66 with %c gives the character at ASCII 66, which is 'B'."
  },
  {
    cat: "Data Types",
    q: "Which variable name is INVALID in C?",
    opts: [
      "_myVar",
      "myVar2",
      "2myVar",
      "my_var"
    ],
    ans: 2,
    exp: "Variable names in C cannot START with a digit. '2myVar' is invalid. Valid names start with a letter or underscore, followed by letters, digits, or underscores."
  },
  {
    cat: "Data Types",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    char c = 'z';\n    printf(\"%d\", c - 'a');\n    return 0;\n}</pre>",
    opts: [
      "25",
      "26",
      "0",
      "122"
    ],
    ans: 0,
    exp: "'z' = ASCII 122, 'a' = ASCII 97. 122 - 97 = 25. This is a common trick to find the position of a letter in the alphabet (0-indexed: a=0, b=1, ... z=25)."
  },
  // ── Decision Control (Harder) ──
  {
    cat: "Decision Control",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 15;\n    if (x &gt; 10)\n        if (x &gt; 20)\n            printf(\"A\");\n        else\n            printf(\"B\");\n    else\n        printf(\"C\");\n    return 0;\n}</pre>",
    opts: [
      "A",
      "B",
      "C",
      "BC"
    ],
    ans: 1,
    exp: "The 'else' matches the NEAREST 'if'. x=15 > 10 (true, enter first if). x=15 > 20 (false, go to else of second if). Prints 'B'."
  },
  {
    cat: "Decision Control",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int a = 5;\n    int result = (a &gt; 3) ? (a &gt; 4) ? 1 : 2 : 3;\n    printf(\"%d\", result);\n    return 0;\n}</pre>",
    opts: [
      "1",
      "2",
      "3",
      "Error"
    ],
    ans: 0,
    exp: "Nested ternary. (a>3) is true → evaluate (a>4). (a>4) is also true (5>4) → result = 1. Ternary operators can be nested but are hard to read — avoid in practice!"
  },
  {
    cat: "Decision Control",
    q: "In C, which of the following is TRUE about the equality operator <code>==</code> vs assignment operator <code>=</code>?",
    opts: [
      "They are interchangeable",
      "== compares values; = assigns a value (using = in an if condition is a common bug)",
      "= compares values; == assigns",
      "Both assign and compare simultaneously"
    ],
    ans: 1,
    exp: "== is the comparison operator and returns 0 or 1. = is the assignment operator. Writing if(x = 5) instead of if(x == 5) assigns 5 to x and evaluates as true (non-zero) — a very common and dangerous bug!"
  },
  // ── Switch (Harder) ──
  {
    cat: "Switch Statement",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 2;\n    switch (x) {\n        case 1:\n        case 2:\n        case 3: printf(\"Low\"); break;\n        case 4:\n        case 5: printf(\"High\"); break;\n        default: printf(\"None\");\n    }\n    return 0;\n}</pre>",
    opts: [
      "None",
      "High",
      "Low",
      "LowHigh"
    ],
    ans: 2,
    exp: "This is intentional fall-through grouping. x=2 matches case 2, which has no break, so it falls to case 3 which prints 'Low' then breaks. Cases 1, 2, and 3 all lead to 'Low'."
  },
  {
    cat: "Switch Statement",
    q: "Can a <code>switch</code> statement use a <strong>float</strong> as its expression in C?",
    opts: [
      "Yes, all data types are supported",
      "Yes, but only with decimal values like 1.0",
      "No, switch only supports int and char types",
      "Yes, but only if cast to int first"
    ],
    ans: 2,
    exp: "Rule: The switch expression must be of integer or character type. Floats and doubles are NOT allowed. Trying to use float will cause a compile error."
  },
  // ── Loops (Harder) ──
  {
    cat: "Loops",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i = 0, sum = 0;\n    for (; i &lt; 5; ) {\n        sum += i;\n        i += 2;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}</pre>",
    opts: [
      "10",
      "6",
      "4",
      "12"
    ],
    ans: 1,
    exp: "The for loop's init and update parts are empty — that's valid in C! i goes: 0, 2, 4, then 6 (6<5 false). sum = 0+2+4 = 6."
  },
  {
    cat: "Loops",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i = 1;\n    for (; i--;) {\n        printf(\"Hi\");\n    }\n    return 0;\n}</pre>",
    opts: [
      "Hi",
      "HiHi",
      "Nothing",
      "Infinite loop"
    ],
    ans: 0,
    exp: "i=1. Condition: i-- evaluates to 1 (true), then i becomes 0. Body runs: prints 'Hi'. Condition: i-- evaluates to 0 (false), then i becomes -1. Loop exits. Only prints 'Hi' once."
  },
  {
    cat: "Loops",
    q: "How many times does the inner loop body execute in total?<br><pre>for (i=0; i&lt;4; i++)\n    for (j=i; j&lt;4; j++)\n        printf(\"*\");</pre>",
    opts: [
      "16",
      "12",
      "10",
      "8"
    ],
    ans: 2,
    exp: "When i=0: j runs 0,1,2,3 → 4 times. i=1: j runs 1,2,3 → 3 times. i=2: j runs 2,3 → 2 times. i=3: j runs 3 → 1 time. Total = 4+3+2+1 = 10."
  },
  {
    cat: "Loops",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 5;\n    while (x &gt; 0) {\n        x--;\n        if (x == 3) continue;\n        printf(\"%d \", x);\n    }\n    return 0;\n}</pre>",
    opts: [
      "4 3 2 1 0",
      "5 4 2 1 0",
      "4 2 1 0",
      "5 4 3 2 1"
    ],
    ans: 2,
    exp: "x decrements first, then checks. Values of x as printed: 4 (ok), 3 (skipped by continue), 2 (ok), 1 (ok), 0 (ok). Output: 4 2 1 0"
  },
  {
    cat: "Loops",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i = 0;\n    for (i = 0; i &lt; 5; i++) {\n        if (i == 3) break;\n    }\n    printf(\"%d\", i);\n    return 0;\n}</pre>",
    opts: [
      "5",
      "2",
      "4",
      "3"
    ],
    ans: 3,
    exp: "The loop runs for i=0,1,2. When i=3, break exits the loop. After break, i still holds the value 3. printf prints 3. Unlike the semicolon trick (which prints 5), break exits early."
  },
  // ── Nested Loops (Harder) ──
  {
    cat: "Nested Loops",
    q: "What pattern does this code print?<br><pre>for(i=1; i&lt;=3; i++) {\n    for(j=1; j&lt;=i; j++)\n        printf(\"* \");\n    printf(\"\\n\");\n}</pre>",
    opts: [
      "3 rows of 3 stars each",
      "A right triangle: row 1 has 1 star, row 2 has 2, row 3 has 3",
      "A single row of 6 stars",
      "An inverted triangle"
    ],
    ans: 1,
    exp: "The inner loop runs j from 1 to i. When i=1: 1 star. When i=2: 2 stars. When i=3: 3 stars. Each row ends with \\n. This creates a right-angled triangle pattern."
  },
  {
    cat: "Nested Loops",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int count = 0;\n    for (int i = 0; i &lt; 3; i++)\n        for (int j = 0; j &lt; 3; j++)\n            if (i == j) count++;\n    printf(\"%d\", count);\n    return 0;\n}</pre>",
    opts: [
      "9",
      "6",
      "3",
      "0"
    ],
    ans: 2,
    exp: "This counts how many times i == j in a 3×3 grid. That happens when (i=0,j=0), (i=1,j=1), (i=2,j=2) — exactly 3 times. This is counting the diagonal of a matrix!"
  },
  // ── Problem Solving / Algorithms ──
  {
    cat: "Algorithms & Flowcharts",
    q: "In a flowchart, which symbol represents INPUT or OUTPUT?",
    opts: [
      "Diamond",
      "Rectangle",
      "Parallelogram",
      "Oval"
    ],
    ans: 2,
    exp: "Parallelogram = Input/Output. Diamond = Decision. Rectangle = Process. Oval = Start/End. Remembering: the slanted shape 'leans' toward the user like I/O data flow."
  },
  {
    cat: "Problem Solving",
    q: "A programmer writes algorithm steps in plain English before coding. This is called:",
    opts: [
      "Compiling",
      "Debugging",
      "Pseudocode",
      "Syntax"
    ],
    ans: 2,
    exp: "Pseudocode is an informal, plain-language description of the steps in an algorithm. It uses the structure of a programming language but is written to be understood by humans, not compiled."
  },
  // ── C Basics (Harder) ──
  {
    cat: "C Basics",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 5;\n    printf(\"%d\", sizeof(x));\n    return 0;\n}</pre>",
    opts: [
      "5",
      "1",
      "4",
      "8"
    ],
    ans: 2,
    exp: "sizeof() returns the size of a data type in bytes. On most modern systems, an int is 4 bytes. This is system-dependent but 4 is by far the most common answer."
  },
  {
    cat: "C Basics",
    q: "Which of the following is a valid multi-line comment in C?",
    opts: [
      "// This is a comment //",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "** This is a comment **"
    ],
    ans: 2,
    exp: "In C, multi-line comments start with /* and end with */. Single-line comments use //. The <!-- --> syntax is HTML and ** ** is not valid C comment syntax."
  },
  {
    cat: "C Basics",
    q: "What will happen if you write <code>printf(\"%d\", 3.7);</code> in C?",
    opts: [
      "Prints 3.7",
      "Prints 3",
      "Prints garbage/unexpected value",
      "Compile error"
    ],
    ans: 2,
    exp: "Using wrong format specifier is undefined behavior. %d expects an int but receives a double — this causes a mismatch in how bytes are read from the stack, printing a garbage or unexpected value."
  },
  {
    cat: "C Basics",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int a = 10;\n    int b = a;\n    b = 20;\n    printf(\"%d\", a);\n    return 0;\n}</pre>",
    opts: [
      "20",
      "10",
      "0",
      "Error"
    ],
    ans: 1,
    exp: "When you write int b = a, it copies the VALUE of a into b. They are separate variables. Changing b to 20 does NOT affect a. a remains 10. (This would be different with pointers!)"
  },
  {
    cat: "C Basics",
    q: "Which preprocessor directive is used to define a constant in C?",
    opts: [
      "#include",
      "#define",
      "#constant",
      "#set"
    ],
    ans: 1,
    exp: "#define is used to define constants or macros. For example: #define PI 3.14159 — after this, every occurrence of PI in the code is replaced by 3.14159 before compilation."
  }
];

console.log(`Questions: ${questions.length}`);