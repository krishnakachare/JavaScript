# Episode 2 : 🤝 Promises

> **Promises** are used to handle **asynchronous operations** in JavaScript.  
They help fix problems like **callback hell** and **inversion of control**.

---

## 🛍️ Example: E-Commerce Flow

Before Promises, we handled async operations using **callbacks**.

```js
const cart = ["shoes", "pants", "kurta"];

// Two asynchronous, dependent functions:
const orderId = createOrder(cart);
proceedToPayment(orderId);

// Using callbacks (Before Promises)
createOrder(cart, function () {
  proceedToPayment(orderId);
});

// ⚠️ Problem: We rely on createOrder to correctly call proceedToPayment.
// This causes “Inversion of Control”.
````

---

## 💡 Solution: Using Promises

We’ll make `createOrder()` return a **Promise** and store it in a variable.

A **Promise** is like a **placeholder object** for a value that will be available later (once the async operation finishes).

---

### 🧠 How it works

When you call an async function like `createOrder(cart)`:

1. It immediately returns a **Promise object**.
2. That promise initially has:

   * `promiseState: "pending"`
   * `promiseResult: undefined`
3. Once the operation completes (say after 5 seconds),
   the promise fills with the final data (like `orderId`).

---

### 📦 Attaching a Callback with `.then()`

We use `.then()` to attach a callback that runs when the Promise is **fulfilled**.

```js
const cart = ["shoes", "pants", "kurta"];
const promiseRef = createOrder(cart);

// Initially promiseRef = { data: undefined, state: "pending" }
// Once resolved → promiseRef = { data: "orderId123", state: "fulfilled" }

promiseRef.then(function () {
  proceedToPayment(orderId);
});
```

---

## 🔍 Why Promises are Better than Callbacks

In callbacks, we **pass** a function and hope it’s called properly.
With Promises, we **attach** a callback to the returned promise object.

* A Promise **guarantees** that the attached function will run once (and only once) when data is ready.
* Promises are **immutable** — once resolved or rejected, they can’t change.

---

## 🌐 Real Example: Fetch API

The `fetch()` function is a Web API that returns a Promise.

```js
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);

console.log(user); // Promise { <pending> }
```

### 🧩 Internal structure of a Promise:

* `[[PromiseState]]`: "pending" → "fulfilled" or "rejected"
* `[[PromiseResult]]`: the actual data or error
* Once fulfilled, the result is stored inside `[[PromiseResult]]`.

```js
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);

user.then(function (data) {
  console.log(data);
});
```

> Promises can only resolve once — either with success (fulfilled) or failure (rejected).

---

## 🔐 Promise States

A Promise is always in one of these states:

| State       | Meaning                               |
| ----------- | ------------------------------------- |
| `pending`   | Initial state, operation not complete |
| `fulfilled` | Operation completed successfully      |
| `rejected`  | Operation failed                      |

---

## 🧠 Interview Quick Notes

> **What is a Promise?**

* A placeholder for a value that will be available in the future.
* A container for an eventual value from an async operation.
* **An object representing the eventual completion or failure of an asynchronous task.**

---

## 🚫 Callback Hell Example

```js
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (balance) {
      updateWalletBalance(balance);
    });
  });
});

// ⚠️ Nested callbacks like this form a “Pyramid of Doom”.
```

---

## ✅ Promise Chaining — Clean, Elegant Solution

```js
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });
```

> Each `.then()` receives the result of the previous `.then()` — this is called **Promise Chaining**.

💡 Tip: Use **arrow functions** for cleaner syntax:

```js
createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInfo => showOrderSummary(paymentInfo))
  .then(balance => updateWalletBalance(balance));
```

---

## 🧠 Key Takeaways

* Promises fix **Inversion of Control** and **Callback Hell**.
* Promises are **immutable** and resolve **exactly once**.
* Use **`.then()`** for success and **`.catch()`** for error handling.
* Prefer **Promise Chaining** over deeply nested callbacks.
