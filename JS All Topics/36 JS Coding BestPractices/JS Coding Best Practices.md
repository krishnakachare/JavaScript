This is one of the most common interview topics for **JavaScript**, especially for **4–8 years of experience**. Interviewers expect you to know not just the syntax, but also how to write **clean, maintainable, performant, and bug-free code**.

Below is a comprehensive list of JavaScript coding best practices with examples.

---

# JavaScript Coding Best Practices

## 1. Use `const` by Default

Use `const` unless a variable needs to be reassigned.

❌ Bad

```javascript
let PI = 3.14;
```

✅ Good

```javascript
const PI = 3.14;
```

---

# 2. Use `let` Instead of `var`

❌ Bad

```javascript
var count = 10;
```

✅ Good

```javascript
let count = 10;
```

Why?

- Block scoped
- No accidental redeclaration
- Avoids hoisting-related bugs

---

# 3. Avoid Global Variables

❌

```javascript
username = "Krishna";
```

✅

```javascript
const username = "Krishna";
```

---

# 4. Always Use Strict Mode (when not using ES modules)

```javascript
"use strict";

const name = "Krishna";
```

Strict mode catches many common mistakes.

> Note: ES modules (`import`/`export`) are already in strict mode.

---

# 5. Use Meaningful Variable Names

❌

```javascript
let x = 5000;
```

✅

```javascript
const employeeSalary = 5000;
```

---

# 6. Use Meaningful Function Names

❌

```javascript
function calc() {}
```

✅

```javascript
function calculateTotalPrice() {}
```

---

# 7. Keep Functions Small

❌

```javascript
function login() {
  // 300 lines
}
```

✅

```javascript
validateUser();
authenticateUser();
redirectToDashboard();
```

---

# 8. Single Responsibility Principle

Each function should do one thing.

❌

```javascript
function saveUser() {
  validate();
  save();
  sendEmail();
}
```

✅

```javascript
validateUser();
saveUser();
sendEmail();
```

---

# 9. Avoid Duplicate Code (DRY)

❌

```javascript
student.name.toUpperCase();
employee.name.toUpperCase();
```

✅

```javascript
function toUpper(text) {
  return text.toUpperCase();
}
```

---

# 10. Prefer Template Literals

❌

```javascript
const message = "Hello " + name;
```

✅

```javascript
const message = `Hello ${name}`;
```

---

# 11. Use Arrow Functions When Appropriate

```javascript
const add = (a, b) => a + b;
```

Use regular functions when you need a dynamic `this`.

---

# 12. Use Default Parameters

❌

```javascript
function greet(name) {
  name = name || "Guest";
}
```

✅

```javascript
function greet(name = "Guest") {}
```

---

# 13. Use Destructuring

❌

```javascript
const name = user.name;
const age = user.age;
```

✅

```javascript
const { name, age } = user;
```

---

# 14. Use Spread Operator

❌

```javascript
const copy = Object.assign({}, user);
```

✅

```javascript
const copy = { ...user };
```

---

# 15. Avoid Mutating Objects

❌

```javascript
user.name = "Ram";
```

✅

```javascript
const updatedUser = {
  ...user,
  name: "Ram",
};
```

---

# 16. Use Optional Chaining

❌

```javascript
user && user.address && user.address.city;
```

✅

```javascript
user?.address?.city;
```

---

# 17. Use Nullish Coalescing

❌

```javascript
const name = user.name || "Guest";
```

✅

```javascript
const name = user.name ?? "Guest";
```

---

# 18. Prefer `===` Over `==`

❌

```javascript
5 == "5";
```

✅

```javascript
5 === "5";
```

---

# 19. Handle Errors Properly

```javascript
try {
  JSON.parse(data);
} catch (error) {
  console.error(error);
}
```

---

# 20. Use Async/Await

❌

```javascript
fetchData()
.then(...)
.then(...)
```

✅

```javascript
const data = await fetchData();
```

---

# 21. Always Handle Promise Errors

```javascript
try {
  await fetchData();
} catch (error) {
  console.error(error);
}
```

---

# 22. Avoid Deep Nesting

❌

```javascript
if (a) {
  if (b) {
    if (c) {
    }
  }
}
```

✅

```javascript
if (!a) return;
if (!b) return;
if (!c) return;
```

---

# 23. Use Early Returns

❌

```javascript
if (user) {
  // long code
}
```

✅

```javascript
if (!user) return;
```

---

# 24. Prefer Array Methods

Instead of

```javascript
for (let i = 0; i < arr.length; i++) {}
```

Use

```javascript
arr.map();
arr.filter();
arr.find();
arr.some();
arr.every();
arr.reduce();
```

---

# 25. Avoid Magic Numbers

❌

```javascript
if(age > 18)
```

✅

```javascript
const ADULT_AGE = 18;

if(age > ADULT_AGE)
```

---

# 26. Use Enums via Constants

```javascript
const STATUS = Object.freeze({
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
});
```

---

# 27. Organize Code into Modules

Instead of

```text
index.js
```

with 5000 lines,

Use

```text
utils/
services/
pages/
api/
constants/
```

---

# 28. Avoid Console Logs in Production

❌

```javascript
console.log(user);
```

Use a proper logging solution or remove debugging statements before release.

---

# 29. Use Array and Object Methods

Examples:

```javascript
map();
filter();
reduce();
find();
every();
some();
Object.keys();
Object.values();
Object.entries();
```

---

# 30. Avoid Callback Hell

❌

```javascript
login(() => {
  profile(() => {
    orders(() => {});
  });
});
```

✅

```javascript
await login();
await getProfile();
await getOrders();
```

---

# 31. Validate Function Inputs

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
}
```

---

# 32. Use `Set` for Unique Values

❌

```javascript
const unique = [];

if (!unique.includes(value)) {
}
```

✅

```javascript
const unique = new Set();
```

---

# 33. Cache DOM Elements

❌

```javascript
document.getElementById("btn");
document.getElementById("btn");
```

✅

```javascript
const button = document.getElementById("btn");
```

---

# 34. Use Event Delegation

Instead of attaching listeners to many child elements, attach one listener to a common parent when appropriate.

---

# 35. Prefer `for...of` for Iteration

❌

```javascript
for (let i = 0; i < arr.length; i++) {}
```

✅

```javascript
for (const item of arr) {
}
```

---

# 36. Avoid Side Effects in Functions

❌

```javascript
function increase() {
  total++;
}
```

✅

```javascript
function increase(total) {
  return total + 1;
}
```

---

# 37. Use Pure Functions

```javascript
function add(a, b) {
  return a + b;
}
```

Same inputs always produce the same output.

---

# 38. Follow Consistent Formatting

Use tools like:

- ESLint
- Prettier

---

# 39. Use Comments Sparingly

❌

```javascript
// Increment i
i++;
```

Instead, write self-explanatory code:

```javascript
currentIndex++;
```

---

# 40. Write Reusable Utility Functions

Instead of duplicating logic:

```javascript
formatDate();
capitalize();
calculateTax();
```

Create shared helper functions.

---

# 41. Keep Files Focused

Instead of:

```text
utils.js
```

containing 200 functions,

Split into:

```text
dateUtils.js
stringUtils.js
arrayUtils.js
mathUtils.js
```

---

# 42. Follow Consistent Naming Conventions

| Item     | Convention                                      | Example                               |
| -------- | ----------------------------------------------- | ------------------------------------- |
| Variable | camelCase                                       | `userName`                            |
| Function | camelCase                                       | `calculatePrice()`                    |
| Class    | PascalCase                                      | `UserService`                         |
| Constant | UPPER_SNAKE_CASE                                | `MAX_RETRY_COUNT`                     |
| File     | Consistent style (e.g. kebab-case or camelCase) | `user-service.js` or `userService.js` |

---

# 43. Avoid Blocking the Event Loop

Avoid long-running synchronous work on the main thread. Break large tasks into smaller chunks or move CPU-intensive work to appropriate workers when needed.

---

# 44. Keep Dependencies Updated

- Remove unused packages.
- Update libraries regularly.
- Watch for security advisories.

---

# 45. Write Unit Tests

Use frameworks like:

- Jest
- Vitest
- Mocha

Test business logic and utility functions to catch regressions early.

---

# Top 15 JavaScript Best Practices (Most Asked in Interviews)

1. Use `const` by default.
2. Prefer `let` over `var`.
3. Always use `===` and `!==`.
4. Keep functions small and focused.
5. Follow DRY (Don't Repeat Yourself).
6. Use template literals.
7. Use destructuring.
8. Use the spread operator.
9. Use optional chaining (`?.`).
10. Use nullish coalescing (`??`).
11. Prefer `async/await` over Promise chains where it improves readability.
12. Handle errors with `try...catch`.
13. Avoid mutating objects when possible.
14. Organize code into modules.
15. Use ESLint and Prettier.

## Interview Answer (1–2 Minutes)

If an interviewer asks, **"What JavaScript coding best practices do you follow?"**, you could say:

> "I write modern JavaScript using `const` by default and `let` only when reassignment is needed. I avoid `var`, use strict equality (`===`), keep functions small and focused on a single responsibility, and follow DRY to avoid duplicate code. I use template literals, destructuring, the spread operator, optional chaining, and nullish coalescing to write cleaner code. For asynchronous code, I prefer `async/await` with proper error handling. I organize code into modules, avoid unnecessary mutation, validate inputs, and use ESLint and Prettier to maintain consistent code quality."
