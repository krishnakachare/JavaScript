# Episode 14: Callback Functions in JS ft. Event Listeners

> Callbacks are the **gateway to async programming** in JavaScript.

---

## 🔹 Callback Functions

- In JavaScript, **functions are first-class citizens** → we can pass them as arguments.  
- If we pass one function `A` into another function `B`, and let `B` decide **when to call `A`**, then `A` is a **callback function**.

Example:

```js
setTimeout(function () {
  console.log("Timer");
}, 1000);
// 1st argument → callback function
// 2nd argument → delay in ms
````

👉 Even though JS is **synchronous & single-threaded**, callbacks let us handle **asynchronous tasks** like timers, API calls, or events.

---

### Example 1: Sync + Async mix

```js
setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});
```

**Output:**

```
x
y
timer  // printed after 5 sec
```

📌 How it works:

* `x` → runs immediately.
* `y` → callback inside `x`, also runs immediately.
* `setTimeout` → schedules its callback, then JS continues. After 5 sec, it’s pushed into the **call stack**.

---

### Example 2: Callback with sequencing

```js
function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printStr("A", () => {
    printStr("B", () => {
      printStr("C", () => {});
    });
  });
}

printAll(); // A → B → C
```

👉 This pattern often leads to **callback hell** 😵 (nested callbacks).
Later, Promises & async/await solve this problem.

---

## 🔹 Event Listeners

We can attach callbacks to DOM events:

```html
<!-- index.html -->
<button id="clickMe">Click Me!</button>
```

```js
// index.js
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked");
});
```

When the event (`click`) happens → callback (`xyz`) is executed.

---

### Example: Counter Button

❌ Using global variable (not safe):

```js
let count = 0;
document.getElementById("clickMe").addEventListener("click", function () {
  console.log("Button clicked", ++count);
});
```

✅ Using **closure** for data hiding:

```js
function attachEventList() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button clicked", ++count);
  });
}
attachEventList();
```

📌 Here, the callback forms a **closure with `count`**, so it remembers its value across clicks.

![Event Listerner Demo](./assets/event.jpg "Event Listerner")

---

## 🔹 Garbage Collection & `removeEventListener`

* Event listeners are **heavy** because they form closures.
* Even if the call stack is empty, memory stays allocated since JS doesn’t know when the event might fire again.
* Too many listeners (e.g., on `click`, `hover`, `scroll`) can slow down the page.

✅ Best practice: **Remove event listeners when they’re no longer needed.**

```js
const btn = document.getElementById("clickMe");

function handleClick() {
  console.log("Button clicked");
  btn.removeEventListener("click", handleClick); // clean up
}

btn.addEventListener("click", handleClick);
```

---

## ✨ Key Takeaways

* Callbacks give JS access to the async world (timers, events, APIs).
* But nested callbacks = **callback hell** → better handled with Promises/async.
* Event listeners also use callbacks.
* Use **closures** for safe state management (like counters).
* Always remove event listeners to free memory.


