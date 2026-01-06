JavaScript coercion depends on **context & operator**, not always numbers.

---

## ✅ Correct rule (important)

> **JavaScript converts values based on the operator and context**, not always to number.

---

## 🔹 When coercion converts to **Number**

These operators **force numeric conversion**:

```js
>  <  >=  <=
-  *  /  %
```

Examples:

```js
"5" - 1; // 4
" " > 0; // false (Number(" ") → 0)
true + 1; // 2 (true → 1)
```

---

## 🔹 When coercion converts to **Boolean**

Happens in **logical contexts**:

```js
if (value)
!value
&& ||
```

Examples:

```js
Boolean(" "); // true
Boolean(0); // false
```

---

## 🔹 When coercion converts to **String**

Happens with `+` **if one operand is string**:

```js
"5" + 1; // "51"
1 + "5"; // "15"
true + ""; // "true"
```

---

## 🔹 Special case: `==` (loose equality)

`==` follows **complex rules**, not just number coercion:

```js
"0" == false; // true // "0" == 0 // 0 == 0 // true
"" == 0; // true
" " == 0; // true
null == undefined; // true
```

---

## 🔹 No coercion at all

Strict equality:

```js
===  !==
```

Examples:

```js
"5" === 5; // false
```

---

## 📊 Quick cheat sheet

| Context / Operator | Converts to |
| ------------------ | ----------- |
| `> < >= <= - * /`  | Number      |
| `if`, `!`, `&&`    | Boolean     |
| `+` (string)       | String      |
| `==`               | Mixed rules |
| `===`              | No coercion |

---

## 🧠 Final takeaway (interview-ready)

> **Type coercion is operator-dependent — JavaScript does NOT always convert values to numbers.**

If you want, I can also:

- Draw a coercion flow diagram
- Explain `ToPrimitive → ToNumber → ToBoolean`
- Give tricky interview questions on coercion

=================================================================

Here’s a **clear, interview-ready type coercion flow diagram + cheat sheet**.

---

## 🔁 JavaScript Type Coercion – Execution Flow

### **Step 1: Operator decides the conversion**

JavaScript **does NOT randomly convert types**.
The **operator/context** decides everything.

---

## 🧭 Coercion Flow Diagram (Mental Model)

```
        Expression
            │
            ▼
     Which operator?
            │
 ┌──────────┼───────────┐
 │          │           │
 ▼          ▼           ▼
Relational  Logical     +
(>, <)     (if, !)   String?
 │          │           │
 ▼          ▼           ▼
ToNumber   ToBoolean  ToString
```

---

## 🔢 1️⃣ Relational Operators

`> < >= <= - * / %`

➡️ **Convert BOTH sides to Number**

Example:

```js
" " > 0
↓
Number(" ") → 0
0 > 0 → false
```

---

## 🔁 2️⃣ Boolean Context

`if`, `!`, `&&`, `||`

➡️ **Convert to Boolean**

Falsy values:

```js
false, 0, -0, 0n, "", null, undefined, NaN;
```

Example:

```js
if (" ") {
  // runs → " " is truthy
}
```

---

## 🔤 3️⃣ Plus Operator `+`

Special case ⚠️

If **either operand is string** → **String concatenation**

```js
"5" + 1  → "51"
1 + "5"  → "15"
```

Otherwise → Number

```js
1 + true → 2
```

---

## ⚖️ 4️⃣ Loose Equality `==`

Most confusing one 😵
Uses **mixed rules**

Simplified:

1. Same type → compare
2. Boolean → Number
3. String & Number → Number
4. `null == undefined` → true

Examples:

```js
" " == 0; // true
false == 0; // true  // 0 == 0 // true
null == undefined; // true
```

---

## 🚫 5️⃣ Strict Equality `===`

➡️ **NO coercion at all**

```js
"5" === 5; // false
```

---

## 🧠 Ultra-Short Cheat Sheet (Remember This)

| Operator / Context   | Conversion  |
| -------------------- | ----------- |
| `> < - * /`          | Number      |
| `if`, `!`            | Boolean     |
| `+` (string present) | String      |
| `==`                 | Weird rules |
| `===`                | No coercion |

---

## ⭐ Final One-Line Rule

> **Type coercion in JavaScript is operator-driven, not number-driven.**

==================================================================

Here are **🔥 Top JavaScript Type Coercion Interview Traps** — explained **clearly + predictably**.

---

## 🔥 Top 10 JavaScript Coercion Traps (Must-Know)

---

### **1️⃣ `" " == 0`**

```js
" " == 0; // true
```

**Why?**

```
" " → Number(" ") → 0
0 == 0 → true
```

---

### **2️⃣ `" " === 0`**

```js
" " === 0; // false
```

No coercion with `===`.

---

### **3️⃣ `false == "0"`**

```js
false == "0"; // true
```

```
false → 0
"0" → 0
```

---

### **4️⃣ `[] == false`**

```js
[] == false; // true 😵
```

```
[] → "" → 0
false → 0
```

---

### **5️⃣ `[] + []`**

```js
[] + []; // ""
```

Both arrays → strings.

---

### **6️⃣ `[] + {}`**

```js
[] + {}; // "[object Object]"
```

---

### **7️⃣ `{}` + []` (in console)**

```js
{
}
+[]; // 0
```

⚠️ Parsed as:

```js
{
} // block
+[]; // 0
```

---

### **8️⃣ `null == 0`**

```js
null == 0; // false
```

But:

```js
null >= 0; // true
```

Why?

- `==` → special null rule
- `>=` → numeric conversion

---

### **9️⃣ `NaN == NaN`**

```js
NaN == NaN; // false
```

Correct check:

```js
Number.isNaN(NaN); // true
```

---

### **🔟 `true + false`**

```js
true + false; // 1
```

```
true → 1
false → 0
```

---

## 🧠 Golden Interview Rules (Memorize)

✅ Use `===` always
✅ Avoid `==` unless you **know the rule**
✅ `+` with strings → string
✅ Relational ops → number
✅ Boolean context → boolean

---

## 🏁 Final Takeaway

> **JavaScript coercion is predictable if you follow the operator rules.
> Most bugs come from `==` and `+`.**
