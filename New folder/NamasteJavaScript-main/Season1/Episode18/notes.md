# Episode 18 : 🧩 Higher-Order Functions ft. Functional Programming

### 💡 Q: What is a Higher-Order Function?

**A:** A **Higher-Order Function (HOF)** is a function that can **take another function as an argument** and/or **return a function** as its result.

Example 👇

```js
function x() {
  console.log("Hi");
}

function y(x) {
  x();
}

y(x); // Hi
````

📌 Here:

* `y` is a **Higher-Order Function**
* `x` is a **Callback Function**

---

## 🧠 Practical Example — Calculate Area of Circles

Let’s say we have an array of radii and we want to calculate the area for each.

### 🪜 First (Basic) Approach

```js
const radius = [1, 2, 3, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius)); // [3.14, 12.56, 28.27, 50.26]
```

✅ Works fine, but...

---

## ⚠️ Problem — Code Duplication (Not DRY)

Now suppose we want to calculate **circumference** too.
We’d end up doing this 👇

```js
const radius = [1, 2, 3, 4];

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));
```

❌ Here, we are **repeating logic** — violating the **DRY Principle** (“Don’t Repeat Yourself”).

---

## ✅ Better Approach — Using Higher-Order Function

Let’s **extract** the reusable logic into one generic function.

```js
const radiusArr = [1, 2, 3, 4];

// Logic for area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// Logic for circumference
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

// Higher-Order Function
const calculate = function (radiusArr, operation) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(operation(radiusArr[i]));
  }
  return output;
};

console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
```

📌 Here:

* `calculate()` is the **Higher-Order Function**.
* `area()` and `circumference()` are **callback functions**.
* This is the **essence of Functional Programming** — separating *logic* from *data manipulation*.

---

## 🧩 Polyfill of `.map()` — Reimplementing from Scratch

The above `calculate()` function actually behaves like the built-in **`.map()`** method!

✅ Compare:

```js
console.log(radiusArr.map(area));       // Using map
console.log(calculate(radiusArr, area)); // Our own version
```

Both give the same result.

---

## ⚙️ Let’s Create Our Own `.map()` Polyfill

We can attach our own version to the **Array prototype** 👇

```js
Array.prototype.calculate = function (operation) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(operation(this[i]));
  }
  return output;
};

console.log(radiusArr.calculate(area));
```

🧠 Behind the scenes:

* `this` → refers to the array on which the method is called.
* Each element is passed to the provided callback (`operation`).

---

## 🧩 Summary

| Concept                    | Explanation                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| **Higher-Order Function**  | A function that takes or returns another function                   |
| **Callback Function**      | Function passed as an argument to another function                  |
| **DRY Principle**          | “Don’t Repeat Yourself” — avoid duplicate logic                     |
| **Functional Programming** | Writing modular, reusable code using HOFs                           |
| **Polyfill**               | A custom reimplementation of an existing JS feature (like `.map()`) |

---

✨ **In short:**

> “Functions that operate on other functions — that’s what makes JavaScript truly functional.” 💪
