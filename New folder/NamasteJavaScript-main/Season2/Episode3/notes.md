# Episode 3 : 🧩 Creating a Promise, Chaining & Error Handling

> In this episode, we’ll learn **how to create Promises**, understand the **Producer–Consumer** relationship, and handle **errors** using `.catch()` and **Promise chaining**.

---

## 🛒 Example Setup

```js
const cart = ["shoes", "pants", "kurta"];

// Consumer part — consuming a Promise
const promise = createOrder(cart); // Expecting orderId

promise.then(function (orderId) {
  proceedToPayment(orderId);
});
````

Above, `createOrder()` is **expected to return a Promise**.
Now let’s see how to **create that Promise** 👇

---

## 🏭 Producer Part — Creating a Promise

```js
function createOrder(cart) {
  // Promise constructor accepts a callback with two parameters: resolve & reject
  const promise = new Promise(function (resolve, reject) {
    // Mock business logic:
    // 1. Validate cart
    // 2. Insert into DB & get orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err); // ❌ Rejected Promise
    }

    const orderId = "12345"; // Assume we got this from DB
    if (orderId) {
      resolve(orderId); // ✅ Resolved Promise
    }
  });

  return promise;
}
```

---

### 🧠 Key Idea

If `validateCart()` returns `true`, the promise is **resolved** and the `.then()` callback executes.
If it fails, the promise is **rejected** and `.catch()` will handle the error.

---

## 📦 Understanding Promise States

```js
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);

console.log(promise); // 👉 Promise {<pending>}
```

> The promise is initially in **pending** state because async logic isn’t done yet.
> Once resolved, the `.then()` callback executes.

---

## ⚠️ Handling Errors with `.catch()`

```js
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    // ✅ Success (resolved)
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    // ⚠️ Failure (rejected)
    console.log(err);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
}
```

---

## 🔗 Promise Chaining

> Whatever is **returned** from one `.then()` becomes the **input** for the next `.then()`.
> If any promise in the chain is **rejected**, control jumps to the nearest `.catch()`.

```js
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // Return for next .then()
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // Should return a promise
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo); // Success log
  })
  .catch(function (err) {
    console.log(err); // Handle any failure in chain
  });

// Producer functions
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart is not Valid"));
    }
    const orderId = "12345";
    resolve(orderId);
  });
}

function proceedToPayment(cart) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
```

---

## 🧯 Continue After Errors

Sometimes, you might want the chain to continue even if one promise fails.
You can place `.catch()` **mid-chain** — after which remaining promises still execute.

```js
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    // Handles only errors above this point
    console.log(err);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });
```

> Each `.catch()` handles errors **above it** in the chain.

---

## ⚙️ Summary

* Promises are created using the **Promise constructor**.
* `resolve(value)` → fulfilled promise.
* `reject(error)` → rejected promise.
* Use `.then()` for success, `.catch()` for error.
* Chain promises by **returning values or other promises**.
* `.catch()` can appear multiple times to isolate failures.
