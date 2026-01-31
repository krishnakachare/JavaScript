# ⚡ Episode 23: `async` & `await` — The Modern Way to Handle Promises 🚀

## 🎯 Topics Covered

* What is `async`?
* What is `await`?
* How async/await works behind the scenes
* Example of using async/await
* Error handling
* Interview perspective
* Async/await vs `.then() / .catch()`

---

## 🧩 What is `async`?

> The `async` keyword is used before a function to make it an **asynchronous function**.

### ✨ Key Rule:

An **async function always returns a Promise**, no matter what you return inside it.

```js
async function getData() {
  return "Namaste JavaScript";
}

const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: "Namaste JavaScript"}

dataPromise.then((res) => console.log(res)); // Namaste JavaScript
```

Even though we returned a simple string, `async` automatically **wraps it in a Promise**.

---

### 🔁 Another Example:

```js
const p = new Promise((resolve) => {
  resolve("Promise resolved value!!");
});

async function getData() {
  return p; // returns the same promise
}

getData().then((res) => console.log(res));
// Output: Promise resolved value!!
```

💡 If you return an existing Promise, `async` doesn’t wrap it again — it just passes it through.

---

## 🕒 What is `await`?

> The `await` keyword **pauses** an async function until the Promise settles (resolves or rejects).
> It can only be used **inside** an `async` function.

```js
await function() {}; // ❌ SyntaxError
```

---

### 🧠 Handling Promises: Before vs After

#### 📍 Old way — Using `.then()`

```js
const p = new Promise((resolve) => {
  resolve("Promise resolved value!!");
});

function getData() {
  p.then((res) => console.log(res));
}

getData(); // Promise resolved value!!
```

---

#### 🚀 New way — Using `async/await`

```js
const p = new Promise((resolve) => {
  resolve("Promise resolved value!!");
});

async function handlePromise() {
  const val = await p;
  console.log(val);
}

handlePromise(); // Promise resolved value!!
```

💡 `await` “waits” for the Promise result **without blocking** the main thread.

---

## 🧩 Major Difference Between `.then()` and `async/await`

```js
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Promise resolved value!!"), 3000);
});

// Using .then()
function getData() {
  p.then((res) => console.log(res));
  console.log("Hello There!");
}
getData();
// Output:
// Hello There!
// (after 3s) Promise resolved value!!
```

```js
// Using async/await
async function handlePromise() {
  const val = await p;
  console.log("Hello There!");
  console.log(val);
}
handlePromise();
// Output after 3s:
// Hello There!
// Promise resolved value!!
```

👉 In `.then()`, JS moves ahead immediately.
👉 In `async/await`, JS **pauses function execution** at `await` until the promise resolves.

---

## 🧪 Multiple Awaits Example

```js
const p = new Promise((resolve) =>
  setTimeout(() => resolve("Promise resolved value!!"), 3000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise resolved value by p2!!"), 2000)
);

async function handlePromise() {
  console.log("Hi");

  const val1 = await p;
  console.log("After p →", val1);

  const val2 = await p2;
  console.log("After p2 →", val2);
}
handlePromise();
```

🧠 Flow:

1. Logs `"Hi"`
2. Waits 3s for `p`
3. Logs result of `p`
4. Waits 2s for `p2`
5. Logs result of `p2`

💬 Even though `p2` resolves earlier, it still **waits for `p` first** — because execution is sequential.

---

## 🕵️ Behind the Scenes: Is JavaScript Actually “Waiting”?

> ❌ No, JavaScript never blocks the main thread.
> When it hits an `await`, it **suspends the async function** and frees the call stack.

Example:

```js
const p1 = new Promise((res) => setTimeout(() => res("p1 done!"), 5000));
const p2 = new Promise((res) => setTimeout(() => res("p2 done!"), 10000));

async function handlePromise() {
  console.log("Hi");
  const val1 = await p1;
  console.log(val1);
  const val2 = await p2;
  console.log(val2);
}
handlePromise();
```

🧩 Internally:

1. JS starts `handlePromise()`
2. Encounters `await p1` → suspends execution
3. `handlePromise` is **removed from call stack**
4. Once `p1` resolves → JS **resumes** execution
5. The process repeats for `p2`

✅ The call stack is never blocked — that’s why the browser stays responsive!

---

## 🌍 Real-World Example: Fetch API

```js
async function handlePromise() {
  const data = await fetch("https://api.github.com/users/alok722");
  const res = await data.json();
  console.log(res);
}
handlePromise();
```

🧠 `fetch()` returns a Promise → resolves to a Response object
🧠 `response.json()` also returns a Promise → resolves to actual JSON data

---

## ⚠️ Error Handling with Async/Await

Use `try...catch` instead of `.catch()`:

```js
async function handlePromise() {
  try {
    const data = await fetch("https://api.github.com/users/alok722");
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}
handlePromise();
```

Alternatively, still possible:

```js
handlePromise().catch((err) => console.error(err));
```

---

## ⚔️ Async/Await vs `.then() / .catch()`

| Feature           | `.then() / .catch()`   | `async / await`                     |
| ----------------- | ---------------------- | ----------------------------------- |
| Syntax            | Chained callbacks      | Looks synchronous                   |
| Readability       | Harder for long chains | Cleaner & readable                  |
| Error Handling    | `.catch()`             | `try...catch`                       |
| Behind the scenes | Uses Promises          | Uses Promises (syntactic sugar)     |
| Blocking          | Non-blocking           | Non-blocking (function paused only) |

💡 `async/await` doesn’t change how JS works — it just makes async code **easier to write and read**.

---

## 🎬 Summary

* `async` functions **always return a Promise**
* `await` **pauses** execution inside an async function until the Promise resolves
* JS never blocks the call stack; async functions are **suspended & resumed**
* Use `try...catch` for cleaner error handling
* Prefer async/await for better readability and easier debugging
