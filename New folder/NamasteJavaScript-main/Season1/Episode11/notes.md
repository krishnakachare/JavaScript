# Episode 11: setTimeout + Closures (Interview Question)

> **"Time, tide, and JavaScript wait for none."**

---

## 🔹 Example 1: Basic setTimeout with Closure
```js
function x() {
  var i = 1;

  setTimeout(function () {
    console.log(i);
  }, 3000);

  console.log("Namaste JavaScript");
}
x();
````

### Output:

```
Namaste JavaScript   // immediately
1                    // after 3 seconds
```

✅ Explanation:

* JS does **not wait** for the timer.
* It prints `"Namaste JavaScript"` right away.
* The callback inside `setTimeout` forms a **closure** with `i` and is executed later.
* After 3s, the callback is pushed to the call stack and logs `i`.

---

## 🔹 Example 2: Printing 1, 2, 3, 4, 5 with Delay

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JavaScript");
}
x();
```

### Expected Output:

```
Namaste JavaScript
1   (after 1s)
2   (after 2s)
3   (after 3s)
4   (after 4s)
5   (after 5s)
```

### Actual Output:

```
Namaste JavaScript
6
6
6
6
6
```

❌ Why?

* `var` is **function-scoped**, not block-scoped.
* All 5 callbacks **share the same reference** to `i`.
* By the time they run, the loop has already finished, and `i = 6`.
* So each callback prints `6`.

---

## 🔹 Fix 1: Using `let`

`let` creates a **new block-scoped variable** `i` for each iteration.

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JavaScript");
}
x();
```

✅ Output:

```
Namaste JavaScript
1  // after 1s
2  // after 2s
3  // after 3s
4  // after 4s
5  // after 5s
```

---

## 🔹 Fix 2: Using `var` (Closure Trick)

If interviewer insists on using `var`, we can wrap `setTimeout` in another function that **captures the current value of `i`**.

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    (function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i); // pass current i as argument
  }
  console.log("Namaste JavaScript");
}
x();
```

✅ Output:

```
Namaste JavaScript
1  // after 1s
2  // after 2s
3  // after 3s
4  // after 4s
5  // after 5s
```

👉 Every call to `close(i)` creates a **new copy of `i`**, so each timer has its own version.

---

## ✨ Key Takeaways

* `setTimeout` is asynchronous: it doesn’t block code execution.
* Closures remember variables **by reference**, not value.
* With `var`, all callbacks share one `i`.
* With `let`, each iteration gets its own `i`.
* With `var`, we can still fix it using an **IIFE (Immediately Invoked Function Expression)** or helper function.
