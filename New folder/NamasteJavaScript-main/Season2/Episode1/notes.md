# Episode 1 : 🔁 Callback

In JavaScript, **callbacks** are one of the core concepts of asynchronous programming — but they also bring their own challenges.

---

## 📚 What are Callbacks?

A **callback** is simply a function passed as an argument to another function, which can be **executed later** once an operation is completed.

There are **two sides** to callbacks:

1. ✅ **Good Part:**  
   - They’re essential for writing **asynchronous code** in JS (e.g., network calls, timers, file reading, etc.).

2. ❌ **Bad Part:**  
   - They can lead to:  
     - **Callback Hell**  
     - **Inversion of Control**

Understanding the *bad part* is crucial to appreciate why **Promises** exist (next episode).

---

## ⚙️ JavaScript is Synchronous & Single-Threaded

> 💡 JS can only do one thing at a time — it has **one call stack** and runs code **line by line**.

```js
console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");

// Output:
// Namaste
// JavaScript
// Season 2

// 💡 JS runs code quickly — "Time, tide & JavaScript wait for none."
````

---

## ⏱️ Delaying Execution using Callbacks

What if we want to delay a line of code?

We can use **setTimeout()**, which accepts a **callback**:

```js
console.log("Namaste");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);

console.log("Season 2");

// Output:
// Namaste
// Season 2
// JavaScript

// 💡 Here we delay execution using the callback inside setTimeout.
```

---

## 🛒 Real-Life Example: e-Commerce Flow

Imagine a simple checkout process on an e-commerce site.

```js
const cart = ["shoes", "pants", "kurta"];
// Steps:
// 1. Create an Order
// 2. Proceed to Payment

api.createOrder();
api.proceedToPayment();
```

🧩 **Problem:**
We can’t proceed to payment until the order is successfully created.

---

## ✅ Using Callbacks to Manage Dependencies

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});

// 💡 Here `createOrder` is responsible for calling `proceedToPayment()` 
// once the order is created — a typical callback setup.
```

---

## ⚠️ Callback Hell (The “Pyramid of Doom”)

Now imagine adding more dependent steps:

* Show order summary
* Update user wallet

Each depends on the previous step.

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
```

📉 This is called **Callback Hell** — or the **Pyramid of Doom**.
It’s hard to read, hard to maintain, and error-prone in large applications.

---

## 🔄 Inversion of Control

> 💡 “Inversion of Control” means **losing control** of your code’s execution flow.

Let’s see how that happens:

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});
```

Here, we’re **trusting** `createOrder` to call our callback (`proceedToPayment`) correctly.

But what if:

* The API never calls the callback?
* The callback gets called twice?
* There’s a bug in someone else’s API implementation?

We’ve now **lost control** over when (or if) our function runs — this is **Inversion of Control**.

---

## 🧠 Why Does This Matter?

Callbacks are the **foundation** of asynchronous programming in JS —
but they can easily become unmanageable.

👉 This is why **Promises** and **async/await** were introduced — to bring back control, readability, and structure.

---

## 🔗 Learn More

📘 Official resource on callback hell:
[http://callbackhell.com/](http://callbackhell.com/)
