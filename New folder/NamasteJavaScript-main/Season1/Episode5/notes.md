# Episode 5: Shortest JS Program, `window` & `this` Keyword

## 🔹 The Shortest JS Program

- Even an **empty file** is a valid JavaScript program.
- Why? Because the **JS engine still creates a Global Execution Context (GEC)**:
  - Memory space
  - Execution space

---

## 🔹 The `window` Object

- In browsers, the engine automatically creates a global object called **`window`**.
- It contains lots of built-in functions and variables (like `alert`, `setTimeout`, etc).
- These can be accessed **from anywhere** in your program.

---

## 🔹 The `this` Keyword (Global Level)

- At the global level, JS also creates a special variable: **`this`**.
- In browsers → `this` points to the **`window` object**.
- So at the global scope:

```js
this === window; // true
```

---

## 🔹 Variables in Global Scope

- Any variable declared with `var` in the global scope becomes a **property of the global object (`window`)**.

👉 Example:

```js
var x = 10;

console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
```

---

## 🔹 Global Object in Different Environments

- In **Browsers** → the global object is `window`.
- In **Node.js** → the global object is `global`.
- In modern JS (ES2020+) → we can use `globalThis` (works everywhere).

✨ **Summary**

- Empty file = still a valid JS program (GEC is created).
- JS engine creates:

  1. **Global Object** (`window` in browsers)
  2. **`this`** keyword (points to global object at global level).

- Global variables (`var`) attach themselves to the global object.
