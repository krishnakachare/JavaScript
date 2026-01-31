# Episode 6: `undefined` vs `not defined` in JavaScript

## 🔹 What is `undefined`?

- During the **Memory Creation Phase**, JS reserves space for all variables.
- Variables that are declared but not yet assigned a value get the placeholder **`undefined`**.

👉 Example:

```js
console.log(x); // undefined
var x = 25;
console.log(x); // 25
```

Here:

- First log → `x` exists in memory but has no value yet → `undefined`.
- Second log → after assignment, `x = 25`.

---

## 🔹 What is `not defined`?

- If a variable is **never declared** (not in memory) and we try to access it → **ReferenceError: not defined**.

👉 Example:

```js
console.log(a); // ❌ ReferenceError: a is not defined
```

Here:

- `a` does not exist in memory at all, so JS throws an error.

---

## 🔹 Key Difference

- **`undefined`** → variable exists but has no value.
- **`not defined`** → variable does not exist in memory.

📌 `undefined !== not defined`

---

## 🔹 Loosely Typed Language

- JavaScript is **loosely typed (weakly typed)**.
- A variable is **not bound to a type**:

  ```js
  var a = 5; // number
  a = true; // boolean
  a = "hello"; // string
  ```

---

## ⚠️ Important Tip

🚫 Never manually assign `undefined` to a variable.
✅ Let JavaScript handle it automatically when memory is created.

---

✨ **Summary**

- Declared but not assigned → `undefined`.
- Never declared → `not defined`.
- JS allows changing variable types anytime (loosely typed).
