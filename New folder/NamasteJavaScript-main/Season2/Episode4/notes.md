# 🚀 Episode 4: Promise APIs — `all`, `allSettled`, `race`, `any` + Interview Insights 🔥

## 🧠 Why This Matters

Before you dive into `async/await`, you must understand **Promises** — especially these 4 powerful methods that help manage multiple async operations together.

---

## 🌈 The 4 Most Used Promise APIs

1. **`Promise.all()`**
2. **`Promise.allSettled()`**
3. **`Promise.race()`**
4. **`Promise.any()`**

---

## 🧩 1. Promise.all()

> Runs multiple promises **in parallel**, and gives you **results only when all succeed**.
> If even one fails → the entire thing fails immediately.

### 💬 Example Situation:

You need to make 3 API calls at once — fetch user info, cart items, and shipping details.

```js
Promise.all([p1, p2, p3]);
```

If:

* `p1` → takes **3s**
* `p2` → takes **1s**
* `p3` → takes **2s**

✅ **All Success:** Takes **3 seconds** and returns:

```js
["val1", "val2", "val3"];
```

❌ **If any fails:** For example, `p2` fails at 1s — it **immediately rejects**, returning that error.
(Other promises still run in the background, but Promise.all doesn’t wait for them.)

🧠 **Summary:**

* Waits for all → returns results array.
* If one fails → rejects instantly (fail-fast behavior).

---

## 🧩 2. Promise.allSettled()

> Waits for **all promises to finish**, whether they succeed or fail.
> Returns the **status and value/reason** of each.

```js
Promise.allSettled([p1, p2, p3]);
```

If:

* `p1` → ✅ success
* `p2` → ❌ fail
* `p3` → ✅ success

After **3s**, you’ll get:

```js
[
  { status: "fulfilled", value: "P1 Success" },
  { status: "rejected", reason: "P2 Fail" },
  { status: "fulfilled", value: "P3 Success" }
];
```

🧠 **Summary:**

* ✅ Always returns an array for **all results**
* 🚫 Never rejects overall
* 🕒 Waits till all promises settle

💡 **Tip:**
`Promise.allSettled()` = “I want *all results*, good or bad.”

---

## 🧩 3. Promise.race()

> Returns **as soon as** the *first* promise settles (either resolves or rejects).
> Think of it as — first one to finish the race wins 🏁

```js
Promise.race([p1, p2, p3]);
```

If:

* `p1` = 3s
* `p2` = 1s ✅ success
* `p3` = 2s ❌ fail

➡️ Output after **1s**: `"P2 Success"`

If `p2` failed instead, it would reject after **1s** instead.

🧠 **Summary:**

* Returns **first settled** promise (win or loss)
* Great for **timeouts or fallback logic**

---

## 🧩 4. Promise.any()

> Returns **the first successful** promise.
> Ignores failures unless **all fail**.

```js
Promise.any([p1, p2, p3]);
```

If:

* `p1` = 3s ✅ success
* `p2` = 1s ❌ fail
* `p3` = 2s ✅ success

➡️ Output after **2s**: `"P3 Success"`

If *all* fail, you’ll get:

```js
AggregateError: All promises were rejected
```

You can inspect all errors via:

```js
err.errors; // ['P1 Fail', 'P2 Fail', 'P3 Fail']
```

🧠 **Summary:**

* ✅ Returns first success
* ❌ If all fail → throws AggregateError

💡 **Think of it as:**
“Give me *any* success — I don’t care who wins!”

---

## 🧑‍💻 Code Demos

### ▶️ Promise.all()

```js
const p1 = new Promise(res => setTimeout(() => res("P1 ✅"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 1000));
const p3 = new Promise(res => setTimeout(() => res("P3 ✅"), 2000));

Promise.all([p1, p2, p3]).then(console.log);
// Output after 3s → ["P1 ✅", "P2 ✅", "P3 ✅"]
```

### ▶️ Promise.allSettled()

```js
const p1 = new Promise(res => setTimeout(() => res("P1 ✅"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 1000));
const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 ❌"), 2000));

Promise.allSettled([p1, p2, p3]).then(console.log);
```

### ▶️ Promise.race()

```js
const p1 = new Promise(res => setTimeout(() => res("P1 ✅"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 1000));
const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 ❌"), 2000));

Promise.race([p1, p2, p3])
  .then(console.log)
  .catch(console.error);
// Output after 1s → "P2 ✅"
```

### ▶️ Promise.any()

```js
const p1 = new Promise((_, rej) => setTimeout(() => rej("P1 ❌"), 3000));
const p2 = new Promise((_, rej) => setTimeout(() => rej("P2 ❌"), 2000));
const p3 = new Promise(res => setTimeout(() => res("P3 ✅"), 5000));

Promise.any([p1, p2, p3])
  .then(console.log)
  .catch(err => console.error(err.errors));
// Output after 5s → "P3 ✅"
```

---

## 🧾 Summary Table

| Method               | Waits For     | Returns                         | Fails If      |
| -------------------- | ------------- | ------------------------------- | ------------- |
| `Promise.all`        | All success   | Array of values                 | Any one fails |
| `Promise.allSettled` | All settled   | Array of {status, value/reason} | Never         |
| `Promise.race`       | First settled | First value/error               | First settles |
| `Promise.any`        | First success | First fulfilled value           | All fail      |

---

## 📚 Bonus: Other Promise Methods

* `Promise.resolve(value)` → instantly creates a **fulfilled** promise
* `Promise.reject(error)` → instantly creates a **rejected** promise
