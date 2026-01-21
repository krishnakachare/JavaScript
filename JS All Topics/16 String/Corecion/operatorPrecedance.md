In JavaScript, operators are evaluated based on **operator precedence** (higher → lower).
Below is a **complete and commonly used precedence list**, ordered **High → Low**, with examples.

---

## 🏆 JavaScript Operator Precedence (High → Low)

### 🔹 **1. Grouping**

```js
( )
```

---

### 🔹 **2. Member & Call**

```js
obj.prop;
obj[prop];
func();
new Class();
```

---

### 🔹 **3. Postfix Increment / Decrement**

```js
x++;
x--;
```

---

### 🔹 **4. Unary Operators**

```js
++x   --x
+     -     !     ~
typeof   void   delete
await
```

---

### 🔹 **5. Exponentiation**

```js
**
```

---

### 🔹 **6. Multiplicative**

```js
*   /   %
```

---

### 🔹 **7. Additive**

```js
+   -
```

---

### 🔹 **8. Bitwise Shift**

```js
<<   >>   >>>
```

---

### 🔹 **9. Relational**

```js
<   <=   >   >=
in
instanceof
```

---

### 🔹 **10. Equality**

```js
==   !=
===  !==
```

---

### 🔹 **11. Bitwise AND**

```js
&
```

---

### 🔹 **12. Bitwise XOR**

```js
^
```

---

### 🔹 **13. Bitwise OR**

```js
|
```

---

### 🔹 **14. Logical AND**

```js
&&
```

---

### 🔹 **15. Logical OR**

```js
||
```

---

### 🔹 **16. Nullish Coalescing**

```js
??
```

---

### 🔹 **17. Conditional (Ternary)**

```js
condition ? expr1 : expr2;
```

---

### 🔹 **18. Assignment**

```js
=   +=   -=   *=   /=   %=
<<=  >>=  >>>=
&=   ^=   |=
&&=  ||=  ??=
```

---

### 🔹 **19. Comma**

```js
,
```

---

## 🧠 Quick Memory Trick (Interview Tip)

**PEMDAS-like flow in JS:**

```
() → unary → ** → * / % → + -
→ comparisons → equality
→ && → || → ?? → ?: → = → ,
```

---

## 📌 Important Gotchas (Very Common in Interviews)

### 🔥 `&&` has higher precedence than `||`

```js
true || (false && false); // true
```

### 🔥 Arithmetic before comparison

```js
1 + 2 === 3; // true
```

### 🔥 `??` cannot mix with `||` or `&&` without parentheses

```js
null ?? false || true  // ❌ SyntaxError
```

Correct:

```js
(null ?? false) || true;
```

---

## ✅ Want a Printable Table / PDF?

I can give you:

- 📄 **Printable precedence chart**
- 🎯 **Tricky interview questions**
- 🧪 **Cypress / JS real-world examples**

Just tell me 👍

=============================================

Great 👍
I’ve prepared a **printable JavaScript Operator Precedence cheat sheet (High → Low)** for you.

📄 **[Download the PDF – JavaScript Operator Precedence Cheat Sheet](sandbox:/mnt/data/JavaScript_Operator_Precedence_Cheat_Sheet.pdf)**

---

## 🔁 Quick Recap (for daily use & interviews)

**High → Low**

```
()
member access / function call / new
postfix ++ --
unary (++ -- + - ! typeof delete await)
**
* / %
+ -
<< >> >>>
< <= > >= in instanceof
== != === !==
&
^
|
&&
||
??
?:
=  +=  -=  *=  /= ...
,
```

---

## 🧠 Interview Tip (Very Important)

- `* / %` run before `+ -`
- `===` runs before `&&`
- `&&` runs before `||`
- `??` cannot be mixed with `&&` or `||` without parentheses

Example:

```js
true || (false && false); // true
```

---

If you want next:

- 🔥 **10 tricky JS operator interview questions**
- 🧪 **Cypress / real-world JS operator examples**
- 📝 **MCQ-style practice questions**

Just tell me what you want next 😊
