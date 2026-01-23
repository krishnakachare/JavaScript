Here’s a **clear and simple comparison** between `for` and `while` loops in JavaScript:

---

### ✅ 1. Syntax

**For loop**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**While loop**

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

### ✅ 2. Main Difference

| Feature             | `for` loop                    | `while` loop                    |
| ------------------- | ----------------------------- | ------------------------------- |
| Best used when      | Number of iterations is known | Number of iterations is unknown |
| Initialization      | Inside loop                   | Outside loop                    |
| Condition check     | In loop header                | In loop header                  |
| Increment/Decrement | In loop header                | Inside loop body                |
| Readability         | More compact                  | More flexible                   |

---

### ✅ 3. Use Cases

**Use `for` when:**

- You know how many times to run the loop
- Iterating over arrays

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

**Use `while` when:**

- Loop depends on a condition
- Number of iterations is uncertain

```js
while (!dataLoaded) {
  fetchData();
}
```

---

### ✅ 4. Risk Factor

| Loop    | Risk                                     |
| ------- | ---------------------------------------- |
| `for`   | Less chance of infinite loop             |
| `while` | Higher chance if condition never changes |

---

### 🔑 Interview Line:

> Use `for` when iteration count is known, and `while` when the loop depends on a condition.
