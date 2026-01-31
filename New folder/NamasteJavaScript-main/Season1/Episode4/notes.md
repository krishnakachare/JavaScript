# Episode 4: Functions and Variable Environments

## 🔹 Example Code

```js
var x = 1;
a();
b(); // works fine because of Hoisting
console.log(x); // 1

function a() {
  var x = 10; // local scope
  console.log(x);
}

function b() {
  var x = 100; // local scope
  console.log(x);
}
````

---

## 🔹 Output

```
10
100
1
```

---

## 🔹 Step-by-Step Execution

### 1. Global Execution Context (GEC)

* Created first, then pushed into the **Call Stack**.
* **Memory Phase**:

  * `x → undefined`
  * `a → function code`
  * `b → function code`
* **Execution Phase**:

  * `x = 1` assigned

📌 Call Stack:

```
[GEC]
```

---

### 2. Calling `a()`

* A **new Execution Context** is created for `a()`.
* **Local Memory Phase**:

  * Local `x → undefined`
* **Local Execution Phase**:

  * Local `x = 10`
  * Prints `10`

📌 Call Stack:

```
[GEC, a()]
```

After execution, `a()` is popped:

```
[GEC]
```

---

### 3. Calling `b()`

* A **new Execution Context** is created for `b()`.
* **Local Memory Phase**:

  * Local `x → undefined`
* **Local Execution Phase**:

  * Local `x = 100`
  * Prints `100`

📌 Call Stack:

```
[GEC, b()]
```

After execution, `b()` is popped:

```
[GEC]
```

---

### 4. Final Step

* `console.log(x)` → prints **global `x = 1`**
* Finally, GEC is popped and program ends.

---

## 🗂️ Key Takeaways

* Each function call creates its **own Execution Context**.
* Variables inside functions are **local** (separate from global variables).
* The **Call Stack** manages the order:

  * Push new contexts when functions are called.
  * Pop them when functions finish.

![Execution Context](./assets/function.jpg "Execution Context")