# JavaScript RegEx – Complete Topic-wise Syllabus

## 1. Introduction to Regular Expressions

- What is RegEx?
- Why RegEx is used
- Real-world use cases
  - Form validation
  - Data extraction
  - Log parsing
  - Automation testing

- How RegEx works

---

# 2. Creating Regular Expressions in JavaScript

Two ways to create RegEx.

### 1. Literal Syntax

```javascript
let pattern = /hello/;
```

### 2. Constructor Syntax

```javascript
let pattern = new RegExp("hello");
```

Topics to learn:

- Difference between both
- When to use each

---

# 3. RegEx Flags (Modifiers)

Flags modify how regex behaves.

| Flag | Meaning          |
| ---- | ---------------- |
| g    | Global search    |
| i    | Case insensitive |
| m    | Multiline        |
| s    | DotAll           |
| u    | Unicode          |
| y    | Sticky           |

Example

```javascript
let pattern = /hello/i;
```

Topics

- Single flag
- Multiple flags
- Flag behavior

---

# 4. Basic Pattern Matching

- Literal characters
- Exact match
- Case sensitivity

Example

```javascript
/hello/;
```

---

# 5. Character Classes

Used to match a **set of characters**.

Topics

- Basic character class
- Ranges

Example

```javascript
/[abc]/;
```

Matches `a`, `b`, or `c`

```javascript
/[a-z]/;
```

Matches lowercase letters

More topics:

- `[A-Z]`
- `[0-9]`
- `[a-zA-Z]`
- `[a-zA-Z0-9]`

---

# 6. Negated Character Classes

Match characters **NOT inside brackets**.

Example

```javascript
/[^abc]/;
```

Matches anything except `a`, `b`, `c`.

---

# 7. Predefined Character Classes

Common shortcuts.

| Pattern | Meaning            |
| ------- | ------------------ |
| \d      | digit              |
| \D      | non-digit          |
| \w      | word character     |
| \W      | non-word character |
| \s      | whitespace         |
| \S      | non-whitespace     |

Example

```javascript
/\d/;
```

Matches digits.

---

# 8. Quantifiers

Define **how many times a character appears**.

| Quantifier | Meaning         |
| ---------- | --------------- |
| \*         | 0 or more       |
| +          | 1 or more       |
| ?          | 0 or 1          |
| {n}        | exactly n       |
| {n,}       | n or more       |
| {n,m}      | between n and m |

Example

```javascript
/a+/;
```

Matches `a`, `aa`, `aaa`

---

# 9. Anchors

Match **positions in text**.

| Anchor | Meaning         |
| ------ | --------------- |
| ^      | start of string |
| $      | end of string   |

Example

```javascript
/^hello/;
```

Starts with hello

---

# 10. Word Boundaries

Match word boundaries.

| Pattern | Meaning           |
| ------- | ----------------- |
| \b      | word boundary     |
| \B      | non-word boundary |

Example

```javascript
/\bcat\b/;
```

Matches word **cat** only.

---

# 11. Dot Character

`.` matches **any character except newline**

Example

```javascript
/a.b/;
```

Matches

```
acb
a1b
a#b
```

---

# 12. Escaping Special Characters

Special characters must be escaped using `\`.

Characters include:

```
. * + ? ^ $ { } ( ) | [ ] \
```

Example

```javascript
/\./;
```

Matches a dot.

---

# 13. Grouping

Use parentheses `()` to group patterns.

Example

```javascript
/(abc)/;
```

Topics

- Capture groups
- Nested groups

---

# 14. Alternation (OR Operator)

Use `|`

Example

```javascript
/cat|dog/;
```

Matches `cat` OR `dog`.

---

# 15. Capturing Groups

Extract matched parts.

Example

```javascript
let regex = /(\d{4})-(\d{2})-(\d{2})/;
```

Matches date:

```
2026-03-10
```

Groups

```
Year
Month
Day
```

---

# 16. Non-Capturing Groups

Avoid storing groups.

Example

```javascript
(?:abc)
```

---

# 17. Lookahead Assertions

Match pattern **only if followed by something**.

### Positive Lookahead

```javascript
foo(?=bar)
```

Match `foo` only if followed by `bar`.

---

### Negative Lookahead

```javascript
foo(?!bar)
```

Match `foo` only if NOT followed by `bar`.

---

# 18. Lookbehind Assertions

### Positive Lookbehind

```javascript
(?<=\$)\d+
```

Match number after `$`.

---

### Negative Lookbehind

```javascript
(?<!\$)\d+
```

Match number NOT after `$`.

---

# 19. Greedy vs Lazy Matching

### Greedy

Matches maximum characters

```
/a.+b/
```

### Lazy

Matches minimum

```
/a.+?b/
```

---

# 20. JavaScript RegEx Methods

### String Methods

| Method       | Purpose         |
| ------------ | --------------- |
| match()      | Find matches    |
| matchAll()   | Get all matches |
| search()     | Find position   |
| replace()    | Replace text    |
| replaceAll() | Replace all     |
| split()      | Split string    |

Example

```javascript
"hello123".match(/\d+/);
```

---

### RegExp Methods

| Method | Purpose          |
| ------ | ---------------- |
| test() | true/false match |
| exec() | detailed match   |

Example

```javascript
/\d+/.test("123");
```

---

# 21. RegEx in Form Validation

Common patterns

### Email validation

```
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Phone number

```
/^\d{10}$/
```

### Password validation

---

# 22. Real-world Use Cases

- Extract numbers
- Extract URLs
- Validate form fields
- Log parsing
- Automation testing
- Data cleaning

---

# 23. Performance & Best Practices

- Avoid catastrophic backtracking
- Use anchors when possible
- Prefer non-capturing groups when not needed
- Test regex patterns properly

---

# 24. Debugging RegEx

Tools for testing regex:

- regex101
- RegExr
- JavaScript console

---

# 25. Advanced RegEx Topics

- Named capturing groups
- Unicode regex
- Backreferences
- Conditional patterns
- Nested patterns

Example

```javascript
/(?<year>\d{4})/;
```

---

# Best Practice Learning Order

1. Basics
2. Character classes
3. Quantifiers
4. Anchors
5. Groups
6. Alternation
7. Lookaheads / Lookbehinds
8. JS regex methods
9. Real-world validations
10. Advanced regex
