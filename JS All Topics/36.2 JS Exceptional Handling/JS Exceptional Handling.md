This is an important JavaScript interview topic. For experienced developers (4–8 years), interviewers expect you to know **more than just `try...catch`**. They want to understand how you handle errors in **synchronous code, asynchronous code, promises, events, and application-level scenarios**.

---

# Complete JavaScript Exception Handling Techniques

## 1. `try...catch` (Most Common)

Used for **synchronous** code.

```javascript
try {
  const user = JSON.parse('{"name":"Krishna"}');
  console.log(user.name);
} catch (error) {
  console.error(error.message);
}
```

**Use Cases:**

- JSON parsing
- Custom validation
- Synchronous function calls

---

# 2. `try...catch...finally`

`finally` always executes, regardless of whether an exception occurs.

```javascript
try {
  console.log("Database Connected");
  throw new Error("Database Error");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Database Connection Closed");
}
```

**Use Cases:**

- Closing files
- Closing database connections
- Cleaning up resources

---

# 3. Throwing Exceptions (`throw`)

You can create your own exceptions.

```javascript
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient Balance");
  }

  return balance - amount;
}
```

---

# 4. Custom Error Classes

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid Email");
```

**Benefits:**

- Different error categories
- Better debugging
- Easier handling

---

# 5. Handle Specific Error Types (`instanceof`)

```javascript
try {
  throw new ValidationError("Email is Invalid");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Error");
  } else if (error instanceof TypeError) {
    console.log("Type Error");
  } else {
    console.log("Unknown Error");
  }
}
```

---

# 6. Promise `.catch()`

```javascript
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Used for**

- API calls
- Async operations
- Promise chains

---

# 7. `async/await` + `try...catch` (Recommended)

```javascript
async function getUsers() {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}
```

This is the preferred modern approach.

---

# 8. Promise `.finally()`

```javascript
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Completed"));
```

Runs whether the Promise resolves or rejects.

---

# 9. Input Validation (Prevent Errors)

Instead of allowing exceptions to occur:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
```

---

# 10. Optional Chaining (`?.`)

Prevents runtime errors caused by accessing properties on `null` or `undefined`.

❌

```javascript
user.address.city;
```

✅

```javascript
user?.address?.city;
```

---

# 11. Nullish Coalescing (`??`)

Avoids `undefined` values.

```javascript
const city = user?.address?.city ?? "Unknown";
```

---

# 12. Guard Clauses (Early Return)

Instead of deeply nested `if` statements:

```javascript
function login(user) {
  if (!user) return;

  console.log(user.name);
}
```

---

# 13. Callback Error Pattern (Node.js)

```javascript
fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
```

Common in Node.js callback APIs.

---

# 14. Event Error Handling

```javascript
button.addEventListener("click", () => {
  try {
    riskyFunction();
  } catch (error) {
    console.error(error);
  }
});
```

Handle exceptions inside event listeners to avoid breaking the application flow.

---

# 15. Global Error Handling (Browser)

```javascript
window.onerror = function (message, source, line, column, error) {
  console.log(message);
};
```

Catches uncaught JavaScript errors.

---

# 16. Global Promise Rejection

```javascript
window.addEventListener("unhandledrejection", (event) => {
  console.error(event.reason);
});
```

Handles unhandled Promise rejections.

---

# 17. Node.js Global Exception Handling

```javascript
process.on("uncaughtException", (error) => {
  console.error(error);
});
```

---

# 18. Node.js Unhandled Promise Rejection

```javascript
process.on("unhandledRejection", (reason) => {
  console.error(reason);
});
```

---

# 19. Logging Errors

```javascript
try {
  login();
} catch (error) {
  console.error(error);
}
```

In production, use a centralized logging solution instead of only `console.error`.

---

# 20. Re-throwing Errors

```javascript
try {
  login();
} catch (error) {
  console.log("Logging...");
  throw error;
}
```

Allows higher-level code to decide how to handle the error.

---

# 21. Retry Logic

```javascript
async function fetchWithRetry(retries = 3) {
  while (retries > 0) {
    try {
      return await fetchData();
    } catch {
      retries--;
    }
  }

  throw new Error("Maximum retries reached");
}
```

Useful for temporary network failures.

---

# 22. Fallback Values

```javascript
const user = getUser() || {};
```

Or better:

```javascript
const user = getUser() ?? {};
```

---

# 23. Assertions

```javascript
function calculate(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  }
}
```

---

# 24. Defensive Programming

Always validate external data.

```javascript
if (!Array.isArray(users)) {
  throw new Error("Expected an array");
}
```

---

# 25. Error-First Return Pattern (Alternative)

Instead of throwing:

```javascript
function divide(a, b) {
  if (b === 0)
    return {
      success: false,
      error: "Division by zero",
    };

  return {
    success: true,
    result: a / b,
  };
}
```

Useful when exceptions are not appropriate for expected business conditions.

---

# 26. Using `AbortController` for Cancellable Requests

Sometimes "handling an exceptional situation" means canceling an operation cleanly.

```javascript
const controller = new AbortController();

fetch("/api/data", { signal: controller.signal }).catch((error) => {
  if (error.name === "AbortError") {
    console.log("Request cancelled");
  }
});

// Later
controller.abort();
```

---

# Summary Table

| Technique                          | Use Case                       |
| ---------------------------------- | ------------------------------ |
| `try...catch`                      | Synchronous exceptions         |
| `try...catch...finally`            | Cleanup resources              |
| `throw`                            | Raise custom exceptions        |
| Custom `Error` classes             | Business-specific errors       |
| `instanceof`                       | Handle specific error types    |
| Promise `.catch()`                 | Promise chains                 |
| `async/await` + `try...catch`      | Modern async code              |
| Promise `.finally()`               | Cleanup after async work       |
| Input validation                   | Prevent invalid operations     |
| Optional chaining (`?.`)           | Avoid property access errors   |
| Nullish coalescing (`??`)          | Safe default values            |
| Guard clauses                      | Simplify validation            |
| Callback error handling            | Node.js callbacks              |
| Event listener `try...catch`       | UI event handlers              |
| `window.onerror`                   | Browser global errors          |
| `unhandledrejection`               | Unhandled Promise rejections   |
| `process.on('uncaughtException')`  | Node.js uncaught exceptions    |
| `process.on('unhandledRejection')` | Node.js Promise rejections     |
| Logging                            | Diagnostics                    |
| Re-throwing                        | Propagate errors upward        |
| Retry logic                        | Temporary failures             |
| Assertions                         | Validate input types           |
| Defensive programming              | Validate external data         |
| Error-first return pattern         | Expected business failures     |
| `AbortController`                  | Cancel asynchronous operations |

# Which Ones Are Most Important for Interviews?

If you're interviewing for **JavaScript, Node.js, React, Playwright, or QA Automation**, focus on these:

1. `try...catch`
2. `try...catch...finally`
3. `throw new Error()`
4. Custom Error classes
5. `instanceof`
6. Promise `.catch()`
7. `async/await` with `try...catch`
8. Promise `.finally()`
9. Optional chaining (`?.`)
10. Nullish coalescing (`??`)
11. Input validation
12. Re-throwing errors
13. Global error handling (`window.onerror`, `unhandledrejection`, or Node.js `process.on(...)`)
14. Retry logic for network/API calls
15. Logging and centralized error handling

## Interview Answer (1–2 Minutes)

If asked, **"How do you handle exceptions in JavaScript?"**, you could answer:

> "I use `try...catch` for synchronous code and `async/await` with `try...catch` for asynchronous operations. I throw custom `Error` objects for validation failures and create custom error classes when I need different error categories. For Promise chains, I use `.catch()` and `.finally()`. I also validate inputs early, use optional chaining and nullish coalescing to prevent runtime errors, and log errors appropriately. At the application level, I use global handlers like `window.onerror` and `unhandledrejection` in browsers or `process.on('uncaughtException')` and `process.on('unhandledRejection')` in Node.js. For transient failures such as API calls, I may implement retry logic, and for expected business failures I sometimes return structured error results instead of throwing exceptions."
