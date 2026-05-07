**JavaScript coding standards** are a set of **rules and best practices** that developers follow to write **clean, readable, consistent, and maintainable code**.

Think of it like:
👉 *“How your code should look and behave so that any developer can understand and maintain it easily.”*

---

## 🔹 Why Coding Standards Matter

* Improves readability
* Makes collaboration easier (team projects)
* Reduces bugs
* Helps in code reviews
* Ensures consistency across the project

---

## 🔹 Common JavaScript Coding Standards

### 1. Naming Conventions

* Use **camelCase** for variables & functions

```javascript
let userName = "Krishna";
function calculateTotal() {}
```

* Use **PascalCase** for classes

```javascript
class UserProfile {}
```

* Use **UPPER_CASE** for constants

```javascript
const MAX_LIMIT = 100;
```

---

### 2. Use `const` and `let` (Avoid `var`)

```javascript
const PI = 3.14;
let count = 0;
```

---

### 3. Proper Indentation & Formatting

* Use 2 or 4 spaces consistently
* Keep code aligned and readable

```javascript
function greet(name) {
    return `Hello ${name}`;
}
```

---

### 4. Use Meaningful Variable Names

❌ Bad:

```javascript
let x = 10;
```

✅ Good:

```javascript
let totalMarks = 10;
```

---

### 5. Use Semicolons

```javascript
let a = 10;
let b = 20;
```

---

### 6. Prefer Arrow Functions (when appropriate)

```javascript
const add = (a, b) => a + b;
```

---

### 7. Avoid Deep Nesting

❌ Bad:

```javascript
if (a) {
  if (b) {
    if (c) {
      // complex
    }
  }
}
```

✅ Good:

```javascript
if (!a || !b || !c) return;
```

---

### 8. Use Strict Equality (`===`)

```javascript
if (a === 10) {}
```

---

### 9. Write Small Functions

* Each function should do **one task only**

---

### 10. Add Comments (when needed)

```javascript
// Calculate total price including tax
function calculatePrice(price) {
    return price * 1.18;
}
```

---

### 11. Error Handling

```javascript
try {
    // risky code
} catch (error) {
    console.error(error);
}
```

---

### 12. Use Linting Tools

Popular tools:

* ESLint
* Prettier

---

## 🔹 Popular Style Guides

* Airbnb Style Guide
* Google Style Guide

---

## 🔹 In One Line

👉 **JavaScript coding standards = rules to write clean, consistent, and professional code**

