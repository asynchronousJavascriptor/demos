# 🔥 JavaScript, Everything about Everything Syllabus – Phase 1: Fundamentals

---

## 📦 1. Variables & Declarations
- ✅ **Teach:**
  - `var`, `let`, `const` – line-by-line comparison
  - Scope (global, block, functional)
  - Reassignment, redeclaration
  - Temporal Dead Zone (TDZ)
  - Hoisting impact per type

- ⚠️ **Common Confusion:**
  - Why `var` leaks outside block but `let` doesn’t
  - Why `const` allows changing object properties

- 🧠 **Mindset:**
  - Think of variables as containers scoped by purpose

- 🧪 **Practice:**
  - Guess the output tasks (based on hoisting)
  - Block-level counter using `let`/`const`

- 🎯 **Usage:**
  - Base of all JS, mandatory in functions, loops, API logic

---

## 🧠 2. Data Types + Type System
- ✅ **Teach:**
  - Primitive types (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`)
  - Reference types (`arrays`, `objects`, `functions`)
  - Dynamic typing
  - `typeof` quirks (e.g., `typeof null === 'object'`)
  - Type coercion (`==` vs `===`)
  - Truthy vs falsy values

- ⚠️ **Common Confusion:**
  - Why `NaN` is a number
  - `undefined` vs `null`
  - `'5' + 1` vs `'5' - 1`

- 🧠 **Mindset:**
  - Think about types like expected input/output

- 🧪 **Practice:**
  - Predict the result: `true + false`, `null + 1`, `5 + '5'`, `!!undefined`

- 🎯 **Usage:**
  - API validation, form handling, state checks

---

## 🔄 3. Operators
- ✅ **Teach:**
  - Arithmetic, comparison, logical, assignment, unary, ternary
  - `typeof`, `instanceof`

- ⚠️ **Common Confusion:**
  - `!!value` for truthiness
  - Pre/post increment

- 🧪 **Practice:**
  - Logic condition quizzes
  - Scoring logic with ternary operator

---

## 🧭 4. Control Flow
- ✅ **Teach:**
  - `if`, `else if`, `else`, `switch-case`, early return pattern

- ⚠️ **Common Confusion:**
  - Fallthrough in `switch-case`

- 🧪 **Practice:**
  - Student grade categorizer
  - Rock-paper-scissors logic

---

## 🔁 5. Loops
- ✅ **Teach:**
  - `for`, `while`, `do-while`
  - `break`, `continue`
  - `for-of`, `forEach` for arrays
  - `for-in`, `Object.entries` for objects

- ⚠️ **Common Confusion:**
  - `for-in` vs `for-of`

- 🧠 **Mindset:**
  - Loop is for processing data

- 🧪 **Practice:**
  - Print pattern questions
  - Reverse a string using loop
  - Sum of even/odd numbers from array

---

## 🧮 6. Functions
- ✅ **Teach:**
  - Function declarations, expressions, and arrow functions
  - Parameters vs arguments
  - Default, rest, and spread parameters
  - Return values and early returns
  - First-class functions (assign to variables, pass as arguments, return from other functions)
  - Higher-order functions
  - Pure vs impure functions
  - Closures and lexical scoping
  - IIFE (Immediately Invoked Function Expressions)
  - Hoisting differences between declaration and expression

- ⚠️ **Common Confusion:**
  - Arrow vs regular function: `this` context
  - Function hoisting and TDZ
  - Scope chains and closure traps

- 🧠 **Mindset:**
  - Functions = logic blocks + memory holders (closures)

- 🧪 **Practice:**
  - Write a BMI calculator
  - Create a reusable discount calculator (HOF)
  - Build a counter using closure
  - Create a pure function to transform a value
  - Use IIFE to isolate variables

- 🎯 **Usage:**
  - Reusability, event handlers, API logic, array operations

---

## 🧰 7. Arrays
- ✅ **Teach:**
  - Create, access, modify arrays
  - Array methods: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `reverse`, `sort`
  - `map`, `filter`, `reduce`, `find`, `some`, `every` (intro level)
  - Destructuring, spread operator

- ⚠️ **Common Confusion:**
  - `splice` vs `slice`
  - `map` vs `forEach`
  - `sort` behavior without `compareFn`

- 🧠 **Mindset:**
  - Arrays = organized, transformable data

- 🧪 **Practice:**
  - User filtering logic
  - Salary reducer
  - Top 3 products based on rating

---

## 🧱 8. Objects
- ✅ **Teach:**
  - Key-value structure
  - Dot vs bracket notation
  - Nesting and deep access
  - Object destructuring
  - Looping: `for-in`, `Object.keys`, `Object.entries`
  - Copying objects: spread, `Object.assign`, deep clone
  - Optional chaining, computed properties

- ⚠️ **Common Confusion:**
  - Reference copy vs deep clone

- 🧠 **Mindset:**
  - Objects = structured, readable state

- 🧪 **Practice:**
  - Student manager app
  - Address book with optional chaining
  - Object flattener (stretch goal)
