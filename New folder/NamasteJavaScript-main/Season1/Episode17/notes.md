# Episode 17 : ⏱️ Trust Issues with `setTimeout()`

> `setTimeout()` doesn’t guarantee *exact timing* — it only guarantees a **minimum delay** before execution.

---

## 🔹 The Myth: “It runs exactly after 5 seconds”

Let’s test the code below 👇

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
// Millions of lines of code to execute...
````

🧩 **Output:**

```
Start
End
Callback
```

But… sometimes the callback executes **after more than 5 seconds** (maybe 6, 7, or even 10).
Why does this happen?

---

## 🔍 Explanation

1. **GEC (Global Execution Context)** is created and pushed into the **Call Stack**.
2. `console.log("Start")` → sent to **Console Web API** → prints `"Start"`.
3. `setTimeout(cb, 5000)` → sends the **callback function `cb`** to the **Web API environment** with a timer attached (5s).
4. `console.log("End")` → prints `"End"`.
5. Meanwhile, there are **1 million lines of blocking code** (taking 10 seconds) still running inside the **Call Stack**.

So:

* The **timer finishes after 5 seconds**, and `cb` moves to the **Callback Queue**.
* However, the **Call Stack is still busy** (GEC not popped out yet).
* The **Event Loop** keeps checking — it can’t push `cb` into the Call Stack until it’s empty.
* Only after those 10 seconds does `cb` finally get executed.

👉 Therefore, `setTimeout()` waits *at least* 5 seconds, but execution depends on **when the Call Stack becomes free**.

---

## ⚙️ Visualizing the Flow

![setTimeout Demo](./assets/settimeout1.jpg)

🧠 **Key Idea:**

> Even though the timer is for 5 seconds, the callback executes only **after** the stack is clear — not exactly after 5 seconds.

---

## 🧩 JS Concurrency Model

This behavior follows the **[Concurrency Model of JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)** —
JS is **single-threaded**, using:

* A single **Call Stack**
* **Event Loop**
* **Callback Queue**
* **Web APIs**

**Rule #1 of JavaScript:**
🚫 **Do not block the main thread!**
JS runs everything on one thread — if it’s blocked by heavy code, async tasks like `setTimeout`, `fetch`, etc., will all be delayed.

---

## ⏲️ What if `timeout = 0` ?

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
```

🧩 **Output:**

```
Start
End
Callback
```

### Explanation:

* Even with `0 ms`, the callback still:

  1. Registers in the **Web API environment**.
  2. Moves to the **Callback Queue**.
  3. Waits for the **Call Stack** to become empty.
* So, `"Callback"` runs **after** `"End"` — because event loop scheduling still applies.

💡 **Use case:**
Setting `setTimeout(fn, 0)` can be a useful trick to **defer non-essential work**, allowing the current, more important operations to finish first.

---

## 🧠 Summary

| Concept                  | Explanation                                   |
| ------------------------ | --------------------------------------------- |
| `setTimeout()` Guarantee | Executes *after at least* the specified delay |
| Delay > Timer Value      | Happens if Call Stack is still busy           |
| JS Nature                | Single-threaded — one Call Stack only         |
| Rule                     | Never block the main thread                   |
| `setTimeout(fn, 0)`      | Defers execution until stack is clear         |

---

✨ **In short:**

> `setTimeout(…, 5000)` means “execute *after 5s + whenever the thread is free*” — not *exactly at 5s* 😄
