# 20 Most Useful RegEx Patterns (JavaScript)

## 1. Check if String Contains Only Numbers

```javascript
/^\d+$/;
```

Example

```javascript
/^\d+$/.test("12345"); // true
```

Use case

- Validate numeric fields
- OTP validation

---

# 2. Extract Numbers from String

```javascript
/\d+/;
```

Example

```javascript
"Order123".match(/\d+/);
```

Result

```
123
```

Use case

- Extract IDs
- Extract invoice numbers

---

# 3. Validate Email Address

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Example

```javascript
emailRegex.test("test@gmail.com");
```

Use case

- Signup forms
- Login validation

---

# 4. Validate 10 Digit Mobile Number

```javascript
/^\d{10}$/;
```

Example

```javascript
/^\d{10}$/.test("9876543210");
```

---

# 5. Check if String Contains Only Alphabets

```javascript
/^[A-Za-z]+$/;
```

Example

```javascript
/^[A-Za-z]+$/.test("Krishna");
```

---

# 6. Alphanumeric Validation

```javascript
/^[A-Za-z0-9]+$/;
```

Use case

- Username validation

---

# 7. Remove Extra Spaces

```javascript
/\s+/g;
```

Example

```javascript
str.replace(/\s+/g, " ");
```

---

# 8. Extract All Numbers from String

```javascript
/\d+/g;
```

Example

```javascript
"Price is 500 and tax 20".match(/\d+/g);
```

Result

```
[500,20]
```

---

# 9. Validate Date (YYYY-MM-DD)

```javascript
/^\d{4}-\d{2}-\d{2}$/;
```

Example

```
2026-03-10
```

---

# 10. Validate Password (Strong Password)

Minimum:

- 1 uppercase
- 1 lowercase
- 1 number
- 1 special character
- 8 characters

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
```

---

# 11. Check String Starts with Specific Word

```javascript
/^hello/;
```

Example

```
hello world → true
```

---

# 12. Check String Ends with Specific Word

```javascript
/world$/;
```

Example

```
hello world → true
```

---

# 13. Extract Words from Sentence

```javascript
/\b\w+\b/g;
```

Example

```
"Hello JS World"
```

Result

```
["Hello","JS","World"]
```

---

# 14. Validate URL

```javascript
/^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,})([\w\-./?%&=]*)?$/;
```

Example

```
https://google.com
```

---

# 15. Match Only Lowercase Letters

```javascript
/^[a-z]+$/;
```

---

# 16. Match Only Uppercase Letters

```javascript
/^[A-Z]+$/;
```

---

# 17. Extract Hashtags

```javascript
/#\w+/g;
```

Example

```
"I love #javascript and #coding"
```

Result

```
#javascript
#coding
```

---

# 18. Extract Words Starting with Capital Letter

```javascript
/\b[A-Z][a-z]*\b/g;
```

Example

```
"Krishna works at Google"
```

Result

```
Krishna
Google
```

---

# 19. Remove Special Characters

```javascript
/[^a-zA-Z0-9 ]/g;
```

Example

```javascript
str.replace(/[^a-zA-Z0-9 ]/g, "");
```

---

# 20. Validate PIN Code (India)

```javascript
/^\d{6}$/;
```

Example

```
413001
```

---

# Bonus (Very Important for QA Automation)

### Extract Numbers from UI Text

Example UI Text:

```
Total price: ₹4500
```

Regex

```javascript
/\d+/;
```

Playwright Example

```javascript
let text = await page.locator("#price").textContent();
let price = text.match(/\d+/)[0];
console.log(price);
```

---

# 5 Common RegEx Interview Questions

### 1

Write regex to validate email.

### 2

Extract numbers from string.

### 3

Validate strong password.

### 4

Remove special characters from string.

### 5

Find words starting with capital letter.
