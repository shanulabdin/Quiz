const questions = [
  {
    cat: "Loops & Tricky Syntax",
    q: "What is the output of the following code snippet?<br><code>int i;<br>for(i = 0; i < 5; i++);<br>printf(\"%d\", i);</code>",
    opts: [
      "01234",
      "4",
      "5",
      "Infinite loop"
    ],
    ans: 2,
    exp: "The semicolon (;) immediately after the for loop header creates an empty loop body. The loop runs until 'i' becomes 5, then terminates. The printf is executed once AFTER the loop finishes."
  },
  {
    cat: "Increment Operators",
    q: "Predict the output:<br><code>int x = 5;<br>printf(\"%d \", x++);<br>printf(\"%d\", x);</code>",
    opts: [
      "5 5",
      "5 6",
      "6 6",
      "6 5"
    ],
    ans: 1,
    exp: "x++ is a post-increment operator. It returns the current value (5) to the printf first, and then increments x to 6."
  },
  {
    cat: "Increment Operators",
    q: "Predict the output:<br><code>int x = 5;<br>printf(\"%d \", ++x);<br>printf(\"%d\", x);</code>",
    opts: [
      "5 6",
      "6 5",
      "6 6",
      "5 5"
    ],
    ans: 2,
    exp: "++x is a pre-increment operator. It increments x to 6 first, and then returns that new value to the printf."
  },
  {
    cat: "ASCII Logic",
    q: "What will be the output of the following code?<br><code>char alpha = 'A';<br>printf(\"%d\", alpha);</code>",
    opts: [
      "A",
      "65",
      "97",
      "Error"
    ],
    ans: 1,
    exp: "Characters are stored as integers (ASCII codes). Using the %d format specifier tells the compiler to print the decimal ASCII value of 'A', which is 65."
  },
  {
    cat: "ASCII Logic",
    q: "What is the range of ASCII values for <strong>lowercase</strong> English alphabets (a-z)?",
    opts: [
      "65 to 90",
      "48 to 57",
      "97 to 122",
      "0 to 255"
    ],
    ans: 2,
    exp: "Lowercase letters start at 'a' (97) and end at 'z' (122), while uppercase letters (A-Z) are 65 to 90."
  },
  {
    cat: "Data Types",
    q: "Which format specifier is specifically used for a <strong>double</strong> precision floating-point number?",
    opts: [
      "%f",
      "%d",
      "%lf",
      "%c"
    ],
    ans: 2,
    exp: "The specifier %lf (long float) is the standard way to handle 'double' variables in C."
  },
  {
    cat: "Integer Division",
    q: "What is the output of this code?<br><code>float c = 5 / 2;<br>printf(\"%.1f\", c);</code>",
    opts: [
      "2.5",
      "2.0",
      "3.0",
      "0.0"
    ],
    ans: 1,
    exp: "In C, (int / int) results in an integer. 5 / 2 is 2. When stored in a float, it becomes 2.0. To get 2.5, you would need to write 5.0 / 2."
  },
  {
    cat: "Logic & Conditionals",
    q: "What is printed?<br><code>int x = 10, y = 20;<br>if (x = 5)<br>  printf(\"True\");<br>else<br>  printf(\"False\");</code>",
    opts: [
      "True",
      "False",
      "10",
      "Error"
    ],
    ans: 0,
    exp: "This is a common trap! Inside the 'if', we used '=' (assignment) instead of '==' (comparison). 'x = 5' assigns 5 to x, and since 5 is non-zero, the condition is treated as True."
  },
  {
    cat: "Switch & Fall-through",
    q: "What is the output?<br><code>int i = 2;<br>switch(i) {<br>  case 1: printf(\"1\");<br>  case 2: printf(\"2\");<br>  case 3: printf(\"3\");<br>  default: printf(\"D\");<br>}</code>",
    opts: [
      "2",
      "23D",
      "23",
      "D"
    ],
    ans: 1,
    exp: "Because there are no 'break' statements, the program executes case 2 and then 'falls through' to all subsequent cases and the default."
  },
  {
    cat: "Logical Operators",
    q: "What is the result of <code>(5 > 3 && 2 > 10) || (1 == 1)</code>?",
    opts: [
      "0 (False)",
      "1 (True)",
      "Error",
      "10"
    ],
    ans: 1,
    exp: "(True && False) is False. But (False || True) is True. In C, True is represented by 1."
  },
  {
    cat: "Problem Solving",
    q: "According to the lectures, what is the core reason for identifying the problem <strong>before</strong> generating solutions?",
    opts: [
      "To save time on coding",
      "To ensure we solve the real issue rather than just symptoms",
      "Because computers are intelligent enough to fix it later",
      "To write the algorithm in a specific language"
    ],
    ans: 1,
    exp: "Identifying the root cause ensures that the solution actually addresses the problem instead of just treating superficial symptoms."
  },
  {
    cat: "Flowcharts",
    q: "Which symbol would you use to represent <code>printf(\"Hello World\");</code> in a flowchart?",
    opts: [
      "Oval",
      "Rectangle",
      "Parallelogram",
      "Diamond"
    ],
    ans: 2,
    exp: "Parallelograms are used for Input and Output operations."
  },
  {
    cat: "Flowcharts",
    q: "What is the purpose of the <strong>Rectangle</strong> symbol in a flowchart?",
    opts: [
      "Start/End",
      "Decision making",
      "Processing (Calculations/Assignments)",
      "Input data"
    ],
    ans: 2,
    exp: "Rectangles represent processes like calculations (e.g., area = pi * r * r) or assignments."
  },
  {
    cat: "C Fundamentals",
    q: "Which part of the C program is responsible for importing standard library functions like <code>scanf</code>?",
    opts: [
      "Main function",
      "Preprocessor Directives",
      "Variables",
      "Comments"
    ],
    ans: 1,
    exp: "Preprocessor directives like #include <stdio.h> import standard library functions into the program."
  },
  {
    cat: "Variables",
    q: "Which of the following is an <strong>invalid</strong> variable name in C?",
    opts: [
      "_myVar",
      "var_2",
      "2ndVar",
      "myVar2"
    ],
    ans: 2,
    exp: "Variable names cannot start with a digit (0-9)."
  },
  {
    cat: "Bitwise Operators",
    q: "What is the result of the bitwise operation <code>5 & 3</code>?",
    opts: [
      "1",
      "7",
      "8",
      "2"
    ],
    ans: 0,
    exp: "5 is 0101 in binary, 3 is 0011. A bitwise AND (&) results in 0001, which is 1 in decimal."
  },
  {
    cat: "Bitwise Operators",
    q: "Which operator would you use to <strong>flip</strong> all the bits of an integer?",
    opts: [
      "!",
      "~",
      "^",
      "|"
    ],
    ans: 1,
    exp: "The tilde (~) is the bitwise NOT (complement) operator that flips 0s to 1s and vice versa."
  },
  {
    cat: "Modulus Operator",
    q: "What is the output of <code>printf(\"%d\", -10 % 3);</code>?",
    opts: [
      "1",
      "-1",
      "3",
      "0"
    ],
    ans: 1,
    exp: "In C, the sign of the result of the modulus operator matches the sign of the dividend (the first number)."
  },
  {
    cat: "Teacher Tips",
    q: "If you execute <code>printf(\"%c\", 66);</code>, what is the output?",
    opts: [
      "66",
      "A",
      "B",
      "Error"
    ],
    ans: 2,
    exp: "Using %c with 66 prints the character associated with that ASCII code. Since 65 is 'A', 66 is 'B'."
  },
  {
    cat: "Control Structures",
    q: "Which loop is best suited when the number of iterations is <strong>unknown</strong> but the condition must be checked first?",
    opts: [
      "for loop",
      "do-while loop",
      "while loop",
      "switch case"
    ],
    ans: 2,
    exp: "The while loop checks the condition before the first iteration, making it ideal for unknown iteration counts where the loop might not run at all."
  },
  {
    cat: "Nested Loops",
    q: "Predict the output:<br><code>for(int i=1; i<=2; i++)<br>  for(int j=1; j<=2; j++)<br>    printf(\"*\");</code>",
    opts: [
      "**",
      "****",
      "***",
      "*"
    ],
    ans: 1,
    exp: "The outer loop runs twice. For each outer iteration, the inner loop runs twice. Total iterations = 2 * 2 = 4."
  },
  {
    cat: "Do-While Loop",
    q: "What is the output?<br><code>int i = 10;<br>do {<br>  printf(\"%d\", i);<br>  i++;<br>} while(i < 5);</code>",
    opts: [
      "Nothing",
      "10",
      "10 11",
      "Infinite loop"
    ],
    ans: 1,
    exp: "A do-while loop executes the body first and then checks the condition. Since 10 is printed before checking if 11 < 5, it prints 10 once."
  },
  {
    cat: "Logic & Comparisons",
    q: "What does <code>5 != 5</code> evaluate to in C?",
    opts: [
      "1",
      "0",
      "True",
      "Error"
    ],
    ans: 1,
    exp: "5 is equal to 5, so the inequality '5 is not equal to 5' is false. In C, false is represented as 0."
  },
  {
    cat: "Teacher Tips",
    q: "What would the following print?<br><code>char val = 90;<br>printf(\"%c\", val);</code>",
    opts: [
      "A",
      "Y",
      "Z",
      "90"
    ],
    ans: 2,
    exp: "ASCII for 'A' is 65. Adding 25 (for the 26 letters) brings us to 90, which is 'Z'."
  },
  {
    cat: "Operator Precedence",
    q: "What is the output of <code>printf(\"%d\", 2 + 3 * 4);</code>?",
    opts: [
      "20",
      "14",
      "18",
      "9"
    ],
    ans: 1,
    exp: "Multiplication (*) has higher precedence than addition (+), so 3*4=12 is calculated first, then 2+12=14."
  },
  {
    cat: "Ternary Operator",
    q: "Convert this to ternary: <code>if(a>b) x=a; else x=b;</code>",
    opts: [
      "x = (a>b) : a ? b;",
      "x = (a>b) ? a : b;",
      "x = (a>b) ? b : a;",
      "x = if(a>b) ? a : b;"
    ],
    ans: 1,
    exp: "The syntax for ternary is (condition) ? value_if_true : value_if_false."
  },
  {
    cat: "Nested If",
    q: "What is the output?<br><code>int a=5, b=10;<br>if(a<10)<br>  if(b<5) printf(\"One\");<br>  else printf(\"Two\");</code>",
    opts: [
      "One",
      "Two",
      "OneTwo",
      "Nothing"
    ],
    ans: 1,
    exp: "a<10 is true, so it enters the first if. Inside, b<5 is false, so it executes the 'else' associated with the inner if, printing 'Two'."
  },
  {
    cat: "ASCII Logic",
    q: "A character variable is essentially a ______ that stores ASCII values.",
    opts: [
      "Small integer",
      "Floating point",
      "String",
      "Boolean"
    ],
    ans: 0,
    exp: "In C, a char is an 8-bit integer that stores the numeric ASCII code of a symbol."
  },
  {
    cat: "Loop Syntax",
    q: "Which of the following for-loop headers is <strong>infinite</strong>?",
    opts: [
      "for(int i=0; i<10; i++)",
      "for( ; ; )",
      "for(int i=10; i>0; i--)",
      "for(int i=0; i<10; )"
    ],
    ans: 1,
    exp: "A for loop with empty condition/expressions 'for( ; ; )' will run forever unless a break statement is used inside."
  },
  {
    cat: "Input Logic",
    q: "What is missing in this input statement?<br><code>int num;<br>scanf(\"%d\", num);</code>",
    opts: [
      "A semicolon",
      "The address-of operator (&)",
      "Quotes around num",
      "The format specifier"
    ],
    ans: 1,
    exp: "The scanf function requires the address of the variable to store the value, so it should be &num."
  },
  {
    cat: "Escape Sequences",
    q: "Which escape sequence represents a <strong>horizontal tab</strong>?",
    opts: [
      "\\n",
      "\\t",
      "\\b",
      "\\r"
    ],
    ans: 1,
    exp: "\\t inserts a tab space, while \\n is for a new line."
  },
  {
    cat: "Bitwise Operators",
    q: "What is the result of <code>5 ^ 5</code> (XOR)?",
    opts: [
      "5",
      "10",
      "0",
      "1"
    ],
    ans: 2,
    exp: "XORing a number with itself always results in 0 because all identical bits cancel out."
  },
  {
    cat: "Switch Logic",
    q: "Is it legal to use <code>switch(10.5)</code> in C?",
    opts: [
      "Yes",
      "No, switch requires an integer or char",
      "Yes, if it's in a default case",
      "Only in newer versions of C"
    ],
    ans: 1,
    exp: "Switch expressions must evaluate to an integral type (int or char). Floating point values (float/double) are not allowed."
  },
  {
    cat: "Data Types",
    q: "If <code>int x = 32767;</code> (max for 16-bit) and you do <code>x = x + 1;</code>, what typically happens?",
    opts: [
      "It becomes 32768",
      "It overflows and becomes -32768",
      "The computer crashes",
      "It stays 32767"
    ],
    ans: 1,
    exp: "This is integer overflow. When you exceed the maximum positive value, it wraps around to the minimum negative value."
  },
  {
    cat: "Logical Not",
    q: "What is the output of <code>printf(\"%d\", !0);</code>?",
    opts: [
      "0",
      "1",
      "Error",
      "False"
    ],
    "ans": 1,
    "exp": "The logical NOT (!) operator inverts truth. Since 0 is false, !0 is true (1)."
  },
  {
    cat: "Algorithm Design",
    q: "Which of the following is NOT a characteristic of a good algorithm?",
    opts: [
      "Unambiguous steps",
      "Finiteness",
      "Language-specific syntax",
      "Input and Output"
    ],
    ans: 2,
    exp: "Algorithms should be language-independent so they can be implemented in any programming language."
  },
  {
    cat: "Loops & Semicolons",
    q: "What is the output?<br><code>int x = 0;<br>while(x < 3);<br>{<br>  x++;<br>}<br>printf(\"%d\", x);</code>",
    opts: [
      "3",
      "0",
      "Infinite loop",
      "1"
    ],
    ans: 2,
    exp: "The semicolon after while(x < 3); makes it an empty loop that checks if 0 < 3. This condition remains true forever, resulting in an infinite loop."
  },
  {
    cat: "C Components",
    q: "What symbol indicates that a statement is a preprocessor directive?",
    opts: [
      "&",
      "$",
      "#",
      "%"
    ],
    ans: 2,
    exp: "All preprocessor directives in C (like #include and #define) begin with the '#' symbol."
  },
  {
    cat: "Memory",
    q: "What is the result of using a variable that has been declared but <strong>never initialized</strong>?",
    opts: [
      "It will always be 0",
      "It will contain a garbage value",
      "The program will not compile",
      "It will be NULL"
    ],
    ans: 1,
    exp: "Uninitialized local variables contain 'garbage values,' which are whatever bits were left in that memory location previously."
  },
  {
    cat: "Problem Solving",
    q: "In the context of the lectures, 'Algorithm' is to 'Flowchart' as:",
    opts: [
      "Text is to Picture",
      "Code is to Hardware",
      "Input is to Output",
      "Math is to Logic"
    ],
    ans: 0,
    exp: "An algorithm is a step-by-step text description, while a flowchart is a graphical/visual representation of those same steps."
  }
];
console.log(`Questions: ${questions.length}`);
