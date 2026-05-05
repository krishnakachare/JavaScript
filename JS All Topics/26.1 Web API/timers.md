Web API's are the functions provides by Browser.
document
console
Timers: There are two timers basically browser uses.
setTimeout(fn,time)==> it works only once after the time is over. usually the time will be in milliseconds. 1s=1000ms,
setInterval(fn,time)==> it works every time after the specific time is over like interavlas.

Timers in JavaScript look simple, but they’re deeply tied to how the browser (or Node.js) handles **asynchronous execution**. Let’s break them down properly with **clear concepts + real examples + interview depth**.

---

# ⏱️ JavaScript Timers (Detailed Explanation)

Timers are **Web APIs** that allow you to execute code **after a delay or repeatedly**.

## 🔹 Types of Timers

1. `setTimeout()` → runs **once after delay**
2. `setInterval()` → runs **repeatedly**
3. `clearTimeout()` → cancels timeout
4. `clearInterval()` → cancels interval

---

# 1️⃣ setTimeout()

## ✅ Syntax

```js
setTimeout(callback, delay, ...args);
```

## 🔹 Basic Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");
```

## 🧠 Output:

```
Start
End
Executed after 2 seconds
```

### 🔥 Why this happens?

- `setTimeout` goes to **Web API**
- Timer runs in background
- Callback goes to **callback queue**
- Event loop pushes it to call stack

---

## ⚠️ Important: Delay is NOT exact

```js
setTimeout(() => console.log("Hi"), 0);
console.log("Hello");
```

### Output:

```
Hello
Hi
```

👉 Even `0ms` delay is **not immediate**

---

## 🔹 Passing Arguments

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 1000, "Krishna");
```

---

## 🔹 Cancel Timeout

```js
const id = setTimeout(() => {
  console.log("Will not run");
}, 2000);

clearTimeout(id);
```

---

# 2️⃣ setInterval()

## ✅ Syntax

```js
setInterval(callback, delay);
```

## 🔹 Example

```js
setInterval(() => {
  console.log("Running every 1 second");
}, 1000);
```

👉 This runs **forever** until stopped

---

## 🔹 Stop Interval

```js
let count = 0;

const id = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(id);
  }
}, 1000);
```

---

# ⚠️ Problem with setInterval

If the task takes longer than interval:

```js
setInterval(() => {
  console.log("Start");
  for (let i = 0; i < 1e9; i++) {} // heavy task
  console.log("End");
}, 1000);
```

👉 It may **overlap or delay execution**

---

# ✅ Better Alternative: Recursive setTimeout

```js
function repeat() {
  console.log("Running safely");

  setTimeout(repeat, 1000);
}

repeat();
```

👉 Ensures next execution only after current completes

---

# 🧠 Event Loop + Timers (VERY IMPORTANT)

### Flow:

1. Code goes to **Call Stack**
2. `setTimeout` → goes to **Web API**
3. Timer completes → moves to **Callback Queue**
4. Event Loop checks → pushes to stack

---

## 🔥 Example for Interview

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Output:

```
A
D
C
B
```

### Explanation:

- Promise → **Microtask (higher priority)**
- setTimeout → **Macrotask**

---

# 📊 setTimeout vs setInterval

| Feature   | setTimeout | setInterval |
| --------- | ---------- | ----------- |
| Execution | Once       | Repeated    |
| Control   | Manual     | Continuous  |
| Use case  | Delay      | Polling     |

---

# 💼 Real-World Use Cases

## 1. API Polling

```js
setInterval(() => {
  fetch("/status")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, 5000);
```

---

## 2. Debouncing (Important)

```js
let timer;

function search() {
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log("API call");
  }, 500);
}
```

👉 Used in search bars

---

## 3. Countdown Timer

```js
let time = 10;

const id = setInterval(() => {
  console.log(time);
  time--;

  if (time < 0) clearInterval(id);
}, 1000);
```

---

## 4. Delay Execution

```js
await new Promise((resolve) => setTimeout(resolve, 2000));
```

---

# ⚠️ Common Mistakes

❌ Wrong:

```js
setTimeout(console.log("Hi"), 1000);
```

✔️ Correct:

```js
setTimeout(() => console.log("Hi"), 1000);
```

---

# 🎯 Interview Questions You Should Prepare

1. Difference between setTimeout and setInterval?
2. Why `setTimeout(..., 0)` is not immediate?
3. Explain event loop with timers?
4. Microtask vs Macrotask?
5. How to implement delay using Promise?
6. Why recursive setTimeout is better than setInterval?
