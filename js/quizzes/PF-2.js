const questions = [
  // ── LECTURE 1: Problem Solving & Algorithms ──────────────────────────────
  {
    cat: "Problem Solving",
    q: "What is the FIRST and most important step in the problem-solving process?",
    opts: [
      "Generate alternative solutions",
      "Define / Identify the problem",
      "Implement the solution",
      "Evaluate alternatives"
    ],
    ans: 1,
    exp: "Defining/identifying the problem is described as the most important and difficult step. A well-described problem helps everyone understand what needs to be solved."
  },
  {
    cat: "Problem Solving",
    q: "How many basic steps are involved in the problem-solving process?",
    opts: ["3", "5", "4", "6"],
    ans: 2,
    exp: "There are four basic steps: (1) Define the problem, (2) Generate alternative solutions, (3) Evaluate and select an alternative, (4) Implement and follow up on the solution."
  },
  {
    cat: "Problem Solving",
    q: "Which of the following is a quality of a good algorithm?",
    opts: [
      "It must be written in a specific programming language",
      "Each step should be clear and unambiguous",
      "It should contain as many steps as possible",
      "It must include computer code"
    ],
    ans: 1,
    exp: "A good algorithm must have clear, unambiguous steps. It should NOT be tied to a specific programming language or include computer code."
  },
  {
    cat: "Flowcharts",
    q: "What shape is used as the Decision symbol in a flowchart?",
    opts: ["Rectangle", "Oval/Rounded rectangle", "Diamond", "Parallelogram"],
    ans: 2,
    exp: "The diamond shape represents a decision (yes/no or true/false branch) in a flowchart."
  },
  {
    cat: "Flowcharts",
    q: "A flowchart originated from which field as a tool for representing algorithms?",
    opts: ["Mathematics", "Computer Science", "Electrical Engineering", "Business Management"],
    ans: 1,
    exp: "Flowcharts originated from computer science as a tool for representing algorithms and programming logic."
  },

  // ── LECTURE 2: Intro to C ─────────────────────────────────────────────────
  {
    cat: "C Basics",
    q: "Which header file must you include to use <code>printf()</code> and <code>scanf()</code> in C?",
    opts: ["&lt;stdlib.h&gt;", "&lt;math.h&gt;", "&lt;stdio.h&gt;", "&lt;string.h&gt;"],
    ans: 2,
    exp: "<stdio.h> (standard input/output) declares functions like printf() and scanf()."
  },
  {
    cat: "C Basics",
    q: "What does the <strong>#include</strong> directive do in a C program?",
    opts: [
      "Declares a variable",
      "Defines the main function",
      "Requests the compiler to include a header file",
      "Starts a loop"
    ],
    ans: 2,
    exp: "#include is a preprocessor directive that tells the compiler to include the contents of the specified header file before compilation."
  },
  {
    cat: "C Basics",
    q: "Every C program must have which function as its entry point?",
    opts: ["start()", "begin()", "run()", "main()"],
    ans: 3,
    exp: "Every C program must contain a main() function. Program execution always begins from main()."
  },
  {
    cat: "C Basics",
    q: "Which format specifier is used to print an <strong>integer</strong> with printf()?",
    opts: ["%f", "%c", "%d", "%s"],
    ans: 2,
    exp: "%d is the format specifier for integers. %f is for float, %c for char, and %s for strings."
  },
  {
    cat: "C Basics",
    q: "What is the correct syntax to declare an integer variable called <code>num</code> and assign 11 to it?",
    opts: [
      "int = num 11;",
      "num int = 11;",
      "int num = 11;",
      "integer num = 11;"
    ],
    ans: 2,
    exp: "The correct syntax is: type variableName = value; → int num = 11;"
  },
  {
    cat: "C Basics",
    q: "What symbol does the <code>scanf()</code> function use before a variable name to get its memory address?",
    opts: ["*", "#", "&", "@"],
    ans: 2,
    exp: "The ampersand & (reference/address-of operator) is used before variable names in scanf() to pass the memory address where the input should be stored."
  },
  {
    cat: "C Basics",
    q: "Which escape sequence is used to print a <strong>newline</strong> in C?",
    opts: ["\\t", "\\r", "\\n", "\\b"],
    ans: 2,
    exp: "\\n is the newline escape sequence. \\t is tab, \\r is carriage return, \\b is backspace."
  },
  {
    cat: "C Basics",
    q: "According to teacher's tip: if a variable is declared but NOT initialized before use, what value might it hold?",
    opts: ["0", "NULL", "Garbage value", "-1"],
    ans: 2,
    exp: "Teacher's tip: An uninitialized variable may hold a garbage value — whatever random data happens to be at that memory address."
  },
  {
    cat: "C Basics",
    q: "Teacher's tip: what will the output of this code be?<br><code>int a = 5, b = 2;<br>float c = a / b;<br>printf(\"%.2f\", c);</code>",
    opts: ["2.50", "2.00", "2.5", "Error"],
    ans: 1,
    exp: "Since both a and b are integers, a/b performs integer division = 2, then 2 is stored in float c as 2.00. The result is 2.00, not 2.50. This is a classic integer division trap!"
  },
  {
    cat: "C Basics",
    q: "HTML is classified as a markup language and NOT a programming language because it:",
    opts: [
      "Cannot run in browsers",
      "Describes structure rather than defining logic",
      "Does not use tags",
      "Was invented before C"
    ],
    ans: 1,
    exp: "Teacher's tip of the day: HTML (HyperText Markup Language) describes structure rather than defining logic, which is why it is a markup language, not a programming language."
  },

  // ── LECTURE 3: Operators ──────────────────────────────────────────────────
  {
    cat: "Operators in C",
    q: "What is an <strong>operand</strong> in a C expression?",
    opts: [
      "A symbol that decides which operation to perform",
      "An entity on which an operation is performed",
      "A loop control variable",
      "A function return value"
    ],
    ans: 1,
    exp: "An operand is the entity (number, constant, variable) on which an operation is performed. An operator (like +) decides which operation to apply."
  },
  {
    cat: "Operators in C",
    q: "What is the result of <code>10 % 3</code> in C?",
    opts: ["3", "1", "0", "3.33"],
    ans: 1,
    exp: "The modulus operator (%) returns the remainder of division. 10 divided by 3 = 3 remainder 1, so 10 % 3 = 1."
  },
  {
    cat: "Operators in C",
    q: "Which operator checks if two values are <strong>equal</strong> in C?",
    opts: ["=", "===", "==", "!="],
    ans: 2,
    exp: "== (two keystrokes) is the equality operator. A single = is assignment. != checks inequality. === does not exist in C."
  },
  {
    cat: "Operators in C",
    q: "What does the Logical AND operator (<strong>&&</strong>) return?",
    opts: [
      "true if at least one operand is true",
      "true only if both operands are true",
      "true only if both operands are false",
      "the bitwise AND of both operands"
    ],
    ans: 1,
    exp: "&& returns true (1) only when BOTH operands are true. If either is false, the result is false."
  },
  {
    cat: "Operators in C",
    q: "What is the result of the expression: <code>(5 &gt; 3) && (3 &lt; 5)</code>?",
    opts: ["0 (false)", "1 (true)", "2", "Undefined"],
    ans: 1,
    exp: "Both conditions are true: 5>3 is true AND 3<5 is true. Since both are true, && returns 1 (true)."
  },
  {
    cat: "Operators in C",
    q: "What is the result of <code>5 & 3</code> (Bitwise AND) in binary?",
    opts: ["7", "6", "1", "0"],
    ans: 2,
    exp: "5 in binary = 0101, 3 in binary = 0011. Bitwise AND: 0101 & 0011 = 0001 = 1."
  },
  {
    cat: "Operators in C",
    q: "Which header file is needed to use mathematical functions like sqrt() and pow() in C?",
    opts: ["&lt;stdlib.h&gt;", "&lt;stdio.h&gt;", "&lt;math.h&gt;", "&lt;cmath.h&gt;"],
    ans: 2,
    exp: "<math.h> provides access to various mathematical functions such as sqrt(), pow(), sin(), cos(), etc."
  },
  {
    cat: "Operators in C",
    q: "What is the C expression for: <strong>2 × (salary + bonus)</strong>?",
    opts: [
      "2 * salary + bonus",
      "2 * (salary + bonus)",
      "(2 * salary) + bonus",
      "2 + salary * bonus"
    ],
    ans: 1,
    exp: "To multiply the entire sum of salary and bonus by 2, parentheses must be used: 2 * (salary + bonus)."
  },

  // ── LECTURE 4: Decision Control Statements ────────────────────────────────
  {
    cat: "Decision Control",
    q: "In an if-else statement, where must the Boolean condition be placed?",
    opts: [
      "Inside curly braces { }",
      "Inside parentheses ( )",
      "After a colon :",
      "Inside square brackets [ ]"
    ],
    ans: 1,
    exp: "The condition in an if-else statement must always be inside parentheses ( )."
  },
  {
    cat: "Decision Control",
    q: "What is a <strong>nested if-else</strong>?",
    opts: [
      "An if statement with no else block",
      "An if/else statement inside the body of another if or else",
      "An if statement with multiple conditions",
      "A switch statement inside an if block"
    ],
    ans: 1,
    exp: "A nested if-else is when an if-else statement is present inside the body of another 'if' or 'else'."
  },
  {
    cat: "Decision Control",
    q: "The && (AND) operator returns TRUE only when:",
    opts: [
      "At least one condition is true",
      "Both conditions are false",
      "Both conditions are true",
      "One condition is true and one is false"
    ],
    ans: 2,
    exp: "The logical AND (&&) operator returns true ONLY if both operands/conditions are true. If either is false, the result is false."
  },
  {
    cat: "Decision Control",
    q: "The || (OR) operator returns FALSE only when:",
    opts: [
      "Both conditions are true",
      "Both conditions are false",
      "At least one condition is true",
      "One condition is true"
    ],
    ans: 1,
    exp: "The logical OR (||) operator returns false only when BOTH conditions are false. It returns true if at least one is true."
  },

  // ── LECTURE 5: Switch Statement ───────────────────────────────────────────
  {
    cat: "Switch Statement",
    q: "Which data types can be used as the switch expression in C?",
    opts: [
      "Float and double only",
      "String and boolean only",
      "Integer or character type",
      "Any data type"
    ],
    ans: 2,
    exp: "Rule #1 of switch: The switch expression must be of an integer or character type. Float, double, and strings are NOT allowed."
  },
  {
    cat: "Switch Statement",
    q: "What happens if there is NO <strong>break</strong> statement at the end of a case in switch?",
    opts: [
      "A compile error occurs",
      "The program exits",
      "Execution falls through to the next case(s)",
      "Only the default block runs"
    ],
    ans: 2,
    exp: "Without a break statement, execution 'falls through' — all subsequent cases after the matched one are also executed. This is known as fall-through behavior."
  },
  {
    cat: "Switch Statement",
    q: "What is the purpose of the <strong>default</strong> case in a switch statement?",
    opts: [
      "It is always executed first",
      "It runs when no case matches the expression",
      "It replaces the break statement",
      "It stores the switch expression"
    ],
    ans: 1,
    exp: "The default case executes when none of the case values match the switch expression. It acts like the final 'else' in an if-else chain."
  },
  {
    cat: "Switch Statement",
    q: "What does the <strong>ternary operator</strong> do in C?",
    opts: [
      "Performs three arithmetic operations",
      "Runs one code when condition is true and another when false",
      "Replaces the switch statement",
      "Creates a three-way loop"
    ],
    ans: 1,
    exp: "The ternary operator (condition ? expr1 : expr2) runs expr1 if the condition is true, and expr2 if it is false. It's a compact alternative to if-else."
  },
  {
    cat: "Switch Statement",
    q: "Which of the following is a valid switch expression in C?",
    opts: [
      "switch(3.14)",
      "switch(\"hello\")",
      "switch(i + j * k)",
      "switch(true)"
    ],
    ans: 2,
    exp: "An integer expression like i + j * k is valid in switch. Float (3.14) and strings (\"hello\") are NOT allowed as switch expressions."
  },

  // ── LECTURE 6: Loops ──────────────────────────────────────────────────────
  {
    cat: "Loops",
    q: "According to the teacher's tip, loops are also called:",
    opts: [
      "Repetition blocks",
      "Control structures",
      "Iteration expressions",
      "Execution blocks"
    ],
    ans: 1,
    exp: "Teacher's tip of the day: Loops are also called control structures."
  },
  {
    cat: "Loops",
    q: "In a <strong>while</strong> loop, when is the condition checked?",
    opts: [
      "At the end of each iteration",
      "Only once before the loop starts",
      "At the beginning (before each iteration)",
      "After every two iterations"
    ],
    ans: 2,
    exp: "The while loop checks its condition at the BEGINNING. If the condition is false initially, the loop body never executes."
  },
  {
    cat: "Loops",
    q: "What is the key difference between a <strong>do-while</strong> loop and a <strong>while</strong> loop?",
    opts: [
      "do-while uses a different condition syntax",
      "do-while always executes the body at least once",
      "while loop can't use increment operators",
      "do-while runs faster"
    ],
    ans: 1,
    exp: "The do-while loop checks its condition at the END, so the loop body executes at least once even if the condition is initially false."
  },
  {
    cat: "Loops",
    q: "Which punctuation mark MUST come after the closing parenthesis of a do-while loop?",
    opts: [
      "Nothing (no punctuation needed)",
      "Colon :",
      "Semicolon ;",
      "Period ."
    ],
    ans: 2,
    exp: "A do-while loop must be terminated with a semicolon after the while condition: do { ... } while(condition); — forgetting this is a common error."
  },
  {
    cat: "Loops",
    q: "A <strong>for</strong> loop is best used when:",
    opts: [
      "The number of iterations is unknown",
      "You need to execute code at least once",
      "You need to repeat for a fixed number of times",
      "You want to check a condition at the end"
    ],
    ans: 2,
    exp: "A for loop is ideal when you know exactly how many times you want to repeat a block of statements."
  },
  {
    cat: "Loops",
    q: "What is the ASCII value of the smiley face character used in the lecture task?",
    opts: ["2", "1", "0", "32"],
    ans: 1,
    exp: "The lecture task mentions filling the screen with a smiley face that has ASCII value 1."
  },

  // ── LECTURE 7: Nested Loops ───────────────────────────────────────────────
  {
    cat: "Nested Loops",
    q: "What is a <strong>nested loop</strong>?",
    opts: [
      "A loop that only runs once",
      "A loop inside another loop",
      "A loop with multiple conditions",
      "A loop that calls a function"
    ],
    ans: 1,
    exp: "A nested loop is a loop inside another loop. The inner loop completes all its iterations for each single iteration of the outer loop."
  },
  // ── MIXED / TEACHER TIPS ─────────────────────────────────────────────────
  {
    cat: "C Basics",
    q: "Which format specifier should be used for a <strong>double</strong> in printf()?",
    opts: ["%d", "%f", "%lf", "%c"],
    ans: 2,
    exp: "Teacher's tip: Explore the format specifier for double. The correct format specifier for double in printf() is %lf (long float). For scanf() it is also %lf."
  }
];
console.log(`Loaded ${questions.length} questions for PF-1 Quiz`);
