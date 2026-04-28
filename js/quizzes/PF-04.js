const questions = [
  // ── Lecture 1: Problem Solving & Algorithms ──
  {
    cat: "Problem Solving",
    q: "What is the correct order of the four basic steps in problem solving?",
    opts: [
      "Generate solutions → Define problem → Evaluate → Implement",
      "Define problem → Generate solutions → Evaluate → Implement",
      "Evaluate → Define problem → Implement → Generate solutions",
      "Implement → Define problem → Generate solutions → Evaluate"
    ],
    ans: 1,
    exp: "The four steps in order are: (1) Define the problem, (2) Generate alternative solutions, (3) Evaluate and select an alternative, (4) Implement and follow up on the solution."
  },
  {
    cat: "Problem Solving",
    q: "Which of the following is TRUE about a computer?",
    opts: [
      "A computer can intelligently examine an issue and provide a solution on its own",
      "A computer is not intelligent and needs a programmer to provide instructions",
      "A computer can solve problems without any human input",
      "A computer automatically generates algorithms"
    ],
    ans: 1,
    exp: "A computer is NOT intelligent. It cannot examine an issue and provide a solution by itself. A programmer must assess the problem and provide the instructions."
  },
  {
    cat: "Algorithms & Flowcharts",
    q: "Which of the following is a quality of a good algorithm?",
    opts: [
      "It should be written in a specific programming language like C",
      "Each step should be clear and unambiguous",
      "It should only work for one type of problem",
      "It should include computer code for efficiency"
    ],
    ans: 1,
    exp: "A good algorithm must have clear and unambiguous steps. It should NOT include computer code and should be written so it can be used across different programming languages."
  },
  {
    cat: "Algorithms & Flowcharts",
    q: "What flowchart symbol is used for a Decision?",
    opts: [
      "Rectangle",
      "Oval/Rounded rectangle",
      "Parallelogram",
      "Diamond"
    ],
    ans: 3,
    exp: "The Diamond shape is the decision symbol in flowcharts. The oval is for Begin/End, the rectangle is for Process, and the parallelogram is for Input/Output."
  },
  // ── Lecture 2: Intro to C ──
  {
    cat: "C Basics",
    q: "What does the <code>#include &lt;stdio.h&gt;</code> directive do?",
    opts: [
      "It defines the main function",
      "It includes standard input/output functions like printf and scanf",
      "It compiles the program",
      "It declares all variables"
    ],
    ans: 1,
    exp: "<stdio.h> stands for Standard Input/Output. It includes functions like printf() and scanf() that are used for displaying output and taking input."
  },
  {
    cat: "C Basics",
    q: "Which format specifier is used to print an <strong>integer</strong> in C?",
    opts: [
      "%f",
      "%c",
      "%d",
      "%s"
    ],
    ans: 2,
    exp: "%d is the format specifier for integers. %f is for float, %c is for char, and %s is for strings."
  },
  {
    cat: "C Basics",
    q: "What is the correct syntax to declare an integer variable <code>x</code> with value 5?",
    opts: [
      "int = x 5;",
      "x int = 5;",
      "int x = 5;",
      "integer x = 5;"
    ],
    ans: 2,
    exp: "The correct syntax is: type variableName = value; So 'int x = 5;' is correct."
  },
  {
    cat: "C Basics",
    q: "What is the purpose of the <code>&</code> (ampersand) operator in <code>scanf(\"%d\", &x)</code>?",
    opts: [
      "It performs a bitwise AND operation",
      "It stores the memory address of the variable so scanf can write to it",
      "It multiplies the variable by 2",
      "It is optional and has no function"
    ],
    ans: 1,
    exp: "The & (reference operator) gives the memory address of the variable. scanf() needs this address so it knows where to store the value the user types."
  },
  {
    cat: "C Basics",
    q: "Which escape sequence moves the cursor to a new line in C?",
    opts: [
      "\\t",
      "\\r",
      "\\n",
      "\\b"
    ],
    ans: 2,
    exp: "\\n is the newline escape sequence. \\t is tab, \\r is carriage return, and \\b is backspace."
  },
  {
    cat: "C Basics",
    q: "If a variable is declared but NOT initialized, what value does it hold?",
    opts: [
      "0 always",
      "NULL",
      "A garbage (unpredictable) value",
      "-1"
    ],
    ans: 2,
    exp: "Teacher's tip: If a variable is not initialized before being used, it might have a garbage value by default. Always initialize your variables!"
  },
  // ── ASCII & Data Types ──
  {
    cat: "ASCII & Data Types",
    q: "What is the ASCII value of the character <strong>'A'</strong>?",
    opts: [
      "97",
      "65",
      "48",
      "90"
    ],
    ans: 1,
    exp: "ASCII codes for uppercase letters A-Z range from 65 to 90. So 'A' = 65, 'B' = 66, etc."
  },
  {
    cat: "ASCII & Data Types",
    q: "What is the ASCII value of lowercase <strong>'a'</strong>?",
    opts: [
      "65",
      "90",
      "97",
      "122"
    ],
    ans: 2,
    exp: "ASCII codes for lowercase letters a-z range from 97 to 122. So 'a' = 97, 'b' = 98, etc."
  },
  {
    cat: "ASCII & Data Types",
    q: "What will this code print?<br><pre>char alpha = 'A';\nprintf(\"%d\", alpha);</pre>",
    opts: [
      "A",
      "97",
      "65",
      "Error"
    ],
    ans: 2,
    exp: "When a char is printed with %d format specifier, it prints the ASCII value of that character. The ASCII value of 'A' is 65."
  },
  {
    cat: "ASCII & Data Types",
    q: "What will this code print?<br><pre>printf(\"%c\", 65);</pre>",
    opts: [
      "65",
      "A",
      "a",
      "Error"
    ],
    ans: 1,
    exp: "When an integer (65) is printed with %c format specifier, it prints the character whose ASCII value is 65, which is 'A'."
  },
  {
    cat: "ASCII & Data Types",
    q: "What is the correct format specifier for a <strong>double</strong> in printf()?",
    opts: [
      "%d",
      "%f",
      "%lf",
      "%db"
    ],
    ans: 2,
    exp: "The format specifier for double is %lf (long float). %f is used for float, %d for int, and %c for char."
  },
  // ── Lecture 3: Operators ──
  {
    cat: "Operators",
    q: "What is the result of <code>10 % 3</code> in C?",
    opts: [
      "3",
      "1",
      "0",
      "3.33"
    ],
    ans: 1,
    exp: "The modulus operator (%) returns the remainder of division. 10 divided by 3 is 3 with remainder 1, so 10 % 3 = 1."
  },
  {
    cat: "Operators",
    q: "What is the output of this code?<br><pre>int x = 5;\nprintf(\"%d\", x++);</pre>",
    opts: [
      "6",
      "5",
      "4",
      "Error"
    ],
    ans: 1,
    exp: "x++ is post-increment. It uses the current value of x (5) FIRST in the expression, then increments it. So printf prints 5, and x becomes 6 afterward."
  },
  {
    cat: "Operators",
    q: "What is the output of this code?<br><pre>int x = 5;\nprintf(\"%d\", ++x);</pre>",
    opts: [
      "5",
      "4",
      "6",
      "Error"
    ],
    ans: 2,
    exp: "++x is pre-increment. It increments x FIRST (to 6), then uses it in the expression. So printf prints 6."
  },
  {
    cat: "Operators",
    q: "What does the logical AND operator (&&) return when both conditions are FALSE?",
    opts: [
      "1 (true)",
      "0 (false)",
      "-1",
      "NULL"
    ],
    ans: 1,
    exp: "Logical AND (&&) returns true (1) ONLY when BOTH operands are true. If either or both are false, the result is 0 (false)."
  },
  {
    cat: "Operators",
    q: "What is the result of <code>(5 > 3) || (10 < 2)</code>?",
    opts: [
      "0 (false)",
      "1 (true)",
      "Error",
      "Undefined"
    ],
    ans: 1,
    exp: "The OR (||) operator returns true if AT LEAST ONE operand is true. (5 > 3) is true, so the whole expression is true (1), regardless of the second condition."
  },
  {
    cat: "Operators",
    q: "What is the result of <code>!(5 > 3)</code>?",
    opts: [
      "1 (true)",
      "0 (false)",
      "5",
      "3"
    ],
    ans: 1,
    exp: "The NOT operator (!) negates the result. (5 > 3) is true (1), so !(5 > 3) = !1 = 0 (false)."
  },
  {
    cat: "Operators",
    q: "What is the output of this tricky expression?<br><pre>int a = 5, b = 2;\nfloat c = a / b;\nprintf(\"%.2f\", c);</pre>",
    opts: [
      "2.50",
      "2.00",
      "2.5",
      "0.00"
    ],
    ans: 1,
    exp: "Teacher's tip: a and b are both integers, so a/b performs INTEGER division = 2 (not 2.5). Storing 2 in a float gives 2.00. To get 2.50, you'd need (float)a/b."
  },
  // ── Lecture 4: Decision Control ──
  {
    cat: "Decision Control",
    q: "In C, which keyword is used to start a conditional statement?",
    opts: [
      "when",
      "if",
      "check",
      "condition"
    ],
    ans: 1,
    exp: "The 'if' keyword is used to start a conditional statement in C. The condition is placed inside parentheses ()."
  },
  {
    cat: "Decision Control",
    q: "What is a <strong>nested if-else</strong>?",
    opts: [
      "Two if statements on the same line",
      "An if statement inside another if or else block",
      "An if statement without an else",
      "Using multiple conditions with &&"
    ],
    ans: 1,
    exp: "Nested if-else means an if-else statement is present inside the body of another 'if' or 'else'. This allows multi-level decision making."
  },
  {
    cat: "Decision Control",
    q: "What is the output of this code?<br><pre>int a = 5, b = 10;\nif (a > b)\n  printf(\"A\");\nelse\n  printf(\"B\");</pre>",
    opts: [
      "A",
      "B",
      "AB",
      "Nothing"
    ],
    ans: 1,
    exp: "Since a (5) is NOT greater than b (10), the if-condition is false, so the else block runs and prints 'B'."
  },
  {
    cat: "Decision Control",
    q: "Which operator returns true only when BOTH conditions are true?",
    opts: [
      "|| (OR)",
      "! (NOT)",
      "&& (AND)",
      "== (equality)"
    ],
    ans: 2,
    exp: "The logical AND operator (&&) returns true (1) ONLY when both conditions are true. If any condition is false, the result is false (0)."
  },
  // ── Lecture 5: Switch & Ternary ──
  {
    cat: "Switch Statement",
    q: "What happens if a <code>break</code> statement is missing in a switch case?",
    opts: [
      "The program throws a compile error",
      "Only the matched case runs",
      "All cases after the matched one also execute (fall-through)",
      "The switch exits immediately"
    ],
    ans: 2,
    exp: "Without a break, switch 'falls through' — it keeps executing all subsequent cases after the matched one until it finds a break or reaches the end. This is called fall-through."
  },
  {
    cat: "Switch Statement",
    q: "The switch expression in C must be of which type?",
    opts: [
      "Float or double only",
      "Integer or character type",
      "String type",
      "Any type"
    ],
    ans: 1,
    exp: "Rule 1 of switch: The switch expression must be of an integer or character type. Floats, doubles, and strings are NOT allowed as switch expressions."
  },
  {
    cat: "Switch Statement",
    q: "What does the <code>default</code> case in a switch statement do?",
    opts: [
      "It is always executed first",
      "It runs when none of the case values match the expression",
      "It replaces the break statement",
      "It is mandatory in every switch"
    ],
    ans: 1,
    exp: "The 'default' case executes when none of the specified case values match the switch expression. It's like the 'else' in an if-else chain. It is optional, not mandatory."
  },
  {
    cat: "Switch Statement",
    q: "What is the output of this ternary expression?<br><pre>int age = 20;\nprintf(\"%s\", (age >= 18) ? \"Can Vote\" : \"Cannot Vote\");</pre>",
    opts: [
      "Cannot Vote",
      "Can Vote",
      "20",
      "Error"
    ],
    ans: 1,
    exp: "The ternary operator works like: condition ? value_if_true : value_if_false. Since age (20) >= 18 is true, it prints 'Can Vote'."
  },
  // ── Lecture 6: Loops ──
  {
    cat: "Loops",
    q: "What is a key difference between a <strong>while</strong> loop and a <strong>do-while</strong> loop?",
    opts: [
      "While loop runs faster than do-while",
      "do-while checks the condition at the end, so it always executes at least once",
      "while loop executes at least twice",
      "There is no difference between them"
    ],
    ans: 1,
    exp: "In a while loop, the condition is checked BEFORE execution — if false initially, the body never runs. In do-while, the condition is checked AFTER execution, so the body always runs at least once."
  },
  {
    cat: "Loops",
    q: "Loops are also known as:",
    opts: [
      "Decision structures",
      "Control structures",
      "Input structures",
      "Output structures"
    ],
    ans: 1,
    exp: "Teacher's tip of the day: Loops are also called control structures (specifically repetition/iteration control structures)."
  },
  {
    cat: "Loops",
    q: "What is the output of this tricky code?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i;\n    for(i = 0; i &lt; 5; i++);\n    printf(\"%d\", i);\n    return 0;\n}</pre>",
    opts: [
      "0",
      "4",
      "5",
      "Infinite loop"
    ],
    ans: 2,
    exp: "Tricky! Notice the semicolon after for(i=0; i<5; i++); — this means the for loop body is EMPTY. The loop still runs and increments i until i=5 (when condition fails). Then printf prints 5."
  },
  {
    cat: "Loops",
    q: "What is the syntax error in a do-while loop that beginners commonly make?",
    opts: [
      "Forgetting the opening brace {",
      "Forgetting the semicolon after while(condition)",
      "Writing 'do' in lowercase",
      "Using == instead of ="
    ],
    ans: 1,
    exp: "A common error is forgetting the trailing semicolon at the end of do-while: do { ... } while(condition); — the semicolon after the closing parenthesis is REQUIRED."
  },
  {
    cat: "Loops",
    q: "What will be printed by this code?<br><pre>int i = 10;\nwhile (i &lt; 5) {\n    printf(\"%d\", i);\n    i++;\n}</pre>",
    opts: [
      "10 11 12 13 14",
      "5 6 7 8 9",
      "Nothing (no output)",
      "Infinite loop"
    ],
    ans: 2,
    exp: "The while loop checks the condition BEFORE executing. Since i=10 is NOT less than 5, the condition is false from the start, so the loop body never executes — no output."
  },
  {
    cat: "Loops",
    q: "In a <code>for</code> loop <code>for(i=0; i&lt;5; i++)</code>, which part is the <strong>update expression</strong>?",
    opts: [
      "i=0",
      "i<5",
      "i++",
      "for"
    ],
    ans: 2,
    exp: "A for loop has three parts: initialization (i=0), condition (i<5), and update/increment (i++). The update expression runs after each iteration."
  },
  // ── Lecture 7: Nested Loops ──
  {
    cat: "Nested Loops",
    q: "If an outer loop runs <strong>4 times</strong> and an inner loop runs <strong>3 times</strong>, how many total times does the inner loop body execute?",
    opts: [
      "4",
      "3",
      "7",
      "12"
    ],
    ans: 3,
    exp: "Total executions of inner loop = outer iterations × inner iterations = 4 × 3 = 12. The inner loop completes all its iterations for EACH iteration of the outer loop."
  },
  {
    cat: "Nested Loops",
    q: "What is a nested loop?",
    opts: [
      "Two loops running at the same time in parallel",
      "A loop that has another loop inside it",
      "A loop that never terminates",
      "A loop with no condition"
    ],
    ans: 1,
    exp: "A nested loop is a loop inside another loop. The outer loop controls how many times the inner loop block repeats entirely."
  },
  // ── Mixed / Tricky Output Prediction ──
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 5, y = 2;\n    printf(\"%d\", x / y);\n    return 0;\n}</pre>",
    opts: [
      "2.5",
      "2",
      "3",
      "2.0"
    ],
    ans: 1,
    exp: "Both x and y are integers, so / performs INTEGER division. 5/2 = 2 (remainder is discarded). The result is 2, not 2.5."
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int i = 1;\n    do {\n        printf(\"%d \", i);\n        i++;\n    } while (i &lt; 1);\n    return 0;\n}</pre>",
    opts: [
      "Nothing",
      "1",
      "1 2 3...(infinite)",
      "0"
    ],
    ans: 1,
    exp: "do-while always executes the body at least once. So it prints '1', then checks if i < 1 (i is now 2), which is false, so it stops. Output: 1"
  },
  {
    cat: "C Output Prediction",
    q: "What is the output?<br><pre>#include &lt;stdio.h&gt;\nint main() {\n    int x = 3;\n    switch(x) {\n        case 1: printf(\"One\");\n        case 2: printf(\"Two\");\n        case 3: printf(\"Three\");\n        case 4: printf(\"Four\");\n        default: printf(\"Done\");\n    }\n    return 0;\n}</pre>",
    opts: [
      "Three",
      "Three Four Done",
      "ThreeFourDone",
      "Done"
    ],
    ans: 2,
    exp: "There are no break statements! So after matching case 3, the code falls through and executes case 4 and default as well. Output: ThreeFourDone (with no spaces since printf doesn't add them)."
  },
  {
    cat: "General C",
    q: "HTML is classified as which type of language?",
    opts: [
      "Programming language",
      "Markup language",
      "Assembly language",
      "Scripting language"
    ],
    ans: 1,
    exp: "Teacher's tip: HTML (HyperText Markup Language) is a MARKUP language, NOT a programming language, because it describes structure rather than defining logic."
  }
];
console.log(`Questions: ${questions.length}`);
