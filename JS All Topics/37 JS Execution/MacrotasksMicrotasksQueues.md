In JavaScript, the Event Loop manages how asynchronous code is executed. Two important queues used by the Event Loop are:

1. **Microtask Queue**
2. **Macrotask Queue (Task Queue / Callback Queue)**

Understanding these is very important for interviews and writing reliable asynchronous code.

---

# 1. What is the Event Loop?

![Image](https://images.openai.com/static-rsc-4/FMIAFskGlSPpT0YhZixipNgUpGk-hNbalqacTZpBr3U0fz-v5vUJRg0h1_vtv_XV8lmPdSdglfTsXqskf5AGIjIyRZearS29WbJwg8xdmY4tEl7_8DmvxI41pU-i2Wvbl5-Xr85MnlrtirCk8jLrlxJxMgZiEER8FHAI6WCfbAKqA886NxaM7wQTqT3EOI-e?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ftvIfeM3i_uaZ61I3HxJu9u7UzJyflcZWCkiyhWDAeOOvloI-0mh3Agrjw2CKQKsdkeb6UbDeWMUnyuzVavA5SWAkdLlGq_rSxRljNW2o84Rn5vcJq89GCti4j8qSrK8u1LkTHEkNoLI_hizJ1MZqr5AKBXuluNXdyAbB_FuOqRr_dqIpSEKzOGA6tzrMHHh?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/acj39yi708Zay_27EJnqm5max7krg8DCXCrT2lnchn1rxDHmRAEup84AeKXuUXFkjjdR05LaRupkvbL-kXzf-kqxMyppfLvAuEP9IEI_v_UZDR1a0bqSU5_R4pgWzgfyXDpKSRUnwZgntHsqqNtQXrmxUWrfqrLgW9_jkckV8PNgRIiaVi18F8Ox9WFnA-tQ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/AMy2PvefYE4nFlzZG6P7RgkCnBpRm5JNx9GVRMiu4K94ijaaQ2ezlrHvy2PknFRVdPhip2nIV02JXY5ldaGyNcJAuS2_RybXnLTPqJyRLTQ0iOVHT-3v8V2fVAAfHA5D_t42bKfuD0SQpGIn48BTASjmnJOM2U5AjL8A9vkWBFp2Vuf0eEug1kfTghmGLm3i?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/053TZdEop0mjnqcODV9T7ciDoeDRKPwGSTI_Yf99ldr3wDeqXSL2jCpOHok5AryiW9iyJQb6DP70or-ExLqD_iG5b9Mn4EK0j_x4RiVTQl8zzHBKHs0sBozqcvRQ4Fyfiu56weUYogjFiu3uiadBtjAsir3H0WPQFu0-fACjnZgLCzacd8OPIwPXDBkefkFd?purpose=fullsize)

The Event Loop continuously checks:

1. Is the **Call Stack** empty?
2. If yes, execute **all Microtasks**
3. Then execute **one Macrotask**
4. Repeat

---

# 2. Microtask Queue

Microtasks have **higher priority** than macrotasks.

They are executed **immediately after the current synchronous code finishes** and **before any macrotask**.

## Common Microtasks

- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`
- `queueMicrotask()`
- `MutationObserver`

## Example

```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");
```

### Output

```javascript
Start;
End;
Microtask;
```

### Why?

- `Start` → synchronous
- Promise callback goes to Microtask Queue
- `End` → synchronous
- Call Stack becomes empty
- Microtask executes

---

# 3. Macrotask Queue

Macrotasks are regular asynchronous tasks.

They are executed **after all microtasks are completed**.

## Common Macrotasks

- `setTimeout()`
- `setInterval()`
- `setImmediate()` (Node.js)
- I/O operations
- UI events (click, scroll)

## Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

console.log("End");
```

### Output

```javascript
Start;
End;
Macrotask;
```

---

# 4. Microtask vs Macrotask Priority

```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output

```javascript
Start;
End;
Promise;
setTimeout;
```

### Explanation

- `setTimeout` → Macrotask Queue
- `Promise.then` → Microtask Queue
- Microtasks are processed first

---

# 5. Event Loop Execution Order

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

### Output

```javascript
1;
4;
3;
2;
```

### Step-by-Step

1. Print `1`
2. Register `setTimeout` → Macrotask Queue
3. Register Promise callback → Microtask Queue
4. Print `4`
5. Execute all Microtasks → `3`
6. Execute one Macrotask → `2`

---

# 6. Multiple Microtasks

```javascript
console.log("Start");

Promise.resolve().then(() => console.log("A"));
queueMicrotask(() => console.log("B"));
Promise.resolve().then(() => console.log("C"));

setTimeout(() => console.log("D"), 0);

console.log("End");
```

### Output

```javascript
Start;
End;
A;
B;
C;
D;
```

All microtasks execute before the macrotask.

---

# 7. Important Rule

> After each macrotask, the Event Loop executes **all pending microtasks** before moving to the next macrotask.

---

# 8. Real Interview Example

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve()
  .then(() => {
    console.log("3");
    return Promise.resolve();
  })
  .then(() => console.log("4"));

console.log("5");
```

### Output

```javascript
1;
5;
3;
4;
2;
```

---

# 9. async/await and Microtasks

`await` pauses the function, and the remaining code is scheduled as a microtask.

```javascript
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

test();
console.log("C");
```

### Output

```javascript
A;
C;
B;
```

---

# 10. Browser vs Node.js

In Node.js:

- `process.nextTick()` has even higher priority than Promise microtasks.
- `setImmediate()` is a macrotask-like callback executed in the check phase.

---

# 11. Quick Comparison Table

| Feature                   | Microtask                             | Macrotask                      |
| ------------------------- | ------------------------------------- | ------------------------------ |
| Priority                  | Higher                                | Lower                          |
| Executed When             | Right after current code              | After all microtasks           |
| Examples                  | Promise callbacks, `queueMicrotask()` | `setTimeout()`, I/O, UI events |
| Runs Before `setTimeout`? | Yes                                   | No                             |

---

# 12. Memory Trick

- **Microtask = Immediate follow-up work**
- **Macrotask = Regular scheduled work**

---

# 13. Simple Analogy

Imagine a manager finishing a task:

1. Handle all urgent sticky notes (**Microtasks**)
2. Then pick one item from the inbox (**Macrotask**)

---

# 14. Most Common Interview Question

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Output

```javascript
A;
D;
C;
B;
```

---

# 15. Best Short Interview Answer

> Microtasks are high-priority asynchronous callbacks such as Promise handlers and `queueMicrotask()`. They run immediately after the current synchronous code completes. Macrotasks are lower-priority tasks such as `setTimeout`, `setInterval`, and I/O callbacks. The Event Loop always processes all pending microtasks before executing the next macrotask.
