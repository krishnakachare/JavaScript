# Episode 10: Closures in JavaScript

## 🔹 What is a Closure?
A **closure** is simply:
> A function bundled together with its **lexical scope** (the environment where it was created).

This means:
- A closure “remembers” the variables from the place where it was created.
- Even if the outer function has finished executing, the inner function can still access those variables.

---

## 🔹 Example 1: Basic Closure
```js
function x() {
  var a = 7;

  function y() {
    console.log(a); // can access "a" from outer scope
  }

  return y;
}

var z = x();
console.log(z); // logs the function code of y
z();            // logs 7
````

✅ Here, `y` + its lexical scope (`a` inside `x`) = **closure**.
When we call `z()`, it still remembers `a = 7`.

---

## 🔹 Example 2: Refers the referance and not value
```js
function x() {
  var a = 7;

  function y() {
    console.log(a); 
  }
  a = 100;
  return y;
}

var z = x();
console.log(z); 
z();            // logs 100
````
---
## 🔹 Example 3: Nested Closures

```js
function z() {
  var b = 900;

  function x() {
    var a = 7;

    function y() {
      console.log(a, b);
    }

    y();
  }

  x();
}

z(); // 7 900
```

👉 `y` has access to both `a` (from `x`) and `b` (from `z`).
This is the **scope chain in action**.

---

## 🔹 In Simple Words

A **closure** is:

* A function that remembers variables from its outer scope,
* Even after the outer function has finished running.

![Closure Diagram](./assets/closure.jpg "Closure Explained")

---

## 🔹 Why Are Closures Useful?

### 1. **Module Design Pattern**

Encapsulate code and avoid polluting the global scope.

```js
const authModule = (function () {
  let loggedInUser = null;

  function login(username) {
    loggedInUser = username;
  }

  function logout() {
    loggedInUser = null;
  }

  function getUserInfo() {
    return loggedInUser;
  }

  return { login, logout, getUserInfo };
})();

authModule.login("john_doe");
console.log(authModule.getUserInfo()); // 'john_doe'
```

---

### 2. **Currying**

Breaking functions into smaller reusable ones.

```js
const calculateTotalPrice = (taxRate) => (price) =>
  price + price * (taxRate / 100);

const addTax = calculateTotalPrice(8); // 8% tax
console.log(addTax(100)); // 108
```

---

### 3. **Memoization**

Cache results of expensive calculations.

```js
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(10)); // 55
```

---

### 4. **Data Hiding & Encapsulation**

Keep data private using closures.

```js
class Person {
  #name; // private field

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const person = new Person("Alice");
console.log(person.getName()); // 'Alice'
// console.log(person.#name); // ❌ Error
```

---

### 5. **setTimeout & Async Code**

Closures help callbacks remember their surrounding variables.

```js
function showMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

showMessage("Hello, world!", 2000); // shows after 2s
```

---

## 🔹 Advantages of Closures

* Organize code (modules, currying).
* Data hiding & encapsulation.
* Enable memoization and performance optimizations.
* Essential for async code (callbacks, timers, promises).

---

## 🔹 Disadvantages of Closures

* Can cause **excess memory usage**.
* Risk of **memory leaks** if references are not released.
* May lead to performance issues (e.g., freezing browser) if overused incorrectly.

---

## ✨ Key Takeaway

Closures are powerful because they let functions:

* Remember **where they were created**,
* Access variables from that place,
* Even long after the outer function has finished.

That’s why closures are everywhere in JavaScript — from simple callbacks to complex frameworks. 🚀
