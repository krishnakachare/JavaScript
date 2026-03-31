# 10. DOM Traversing

Moving through DOM tree.

### Parent

- `parentNode`
- `parentElement`

### Children

- `children`
- `firstChild`
- `lastChild`
- `firstElementChild`
- `lastElementChild`

### Siblings

- `nextSibling`
- `previousSibling`
- `nextElementSibling`
- `previousElementSibling`

Example

```javascript
let parent = element.parentElement;
```

---

Here are **very simple & clear examples** for DOM Traversing 👇

---

# 🧱 HTML Structure (used in all examples)

```html
<div id="parent">
  Text Node
  <p id="child1">Child 1</p>
  <p id="child2">Child 2</p>
</div>
```

---

# 🔹 1. Parent

## ✅ `parentNode`

Gets **parent (including any node type)**

```javascript
let child = document.getElementById("child1");

console.log(child.parentNode);
```

👉 Output: `<div id="parent">...</div>`

---

## ✅ `parentElement`

Gets **parent element only**

```javascript
console.log(child.parentElement);
```

👉 Output: `<div id="parent">...</div>`

---

# 🔹 2. Children

## ✅ `children`

Gets **only element children (HTML tags)**

```javascript
let parent = document.getElementById("parent");

console.log(parent.children);
```

👉 Output: `[<p>, <p>]`

---

## ✅ `firstChild`

Gets **first node (can be text, comment, etc.)**

```javascript
console.log(parent.firstChild);
```

👉 Output: `"Text Node"` (text)

---

## ✅ `lastChild`

Gets **last node**

```javascript
console.log(parent.lastChild);
```

👉 Output: `<p id="child2">`

---

## ✅ `firstElementChild`

Gets **first element only**

```javascript
console.log(parent.firstElementChild);
```

👉 Output: `<p id="child1">`

---

## ✅ `lastElementChild`

Gets **last element only**

```javascript
console.log(parent.lastElementChild);
```

👉 Output: `<p id="child2">`

---

# 🔹 3. Siblings

## ✅ `nextSibling`

Gets **next node (can be text)**

```javascript
let child1 = document.getElementById("child1");

console.log(child1.nextSibling);
```

👉 Output: text node (space/newline)

---

## ✅ `previousSibling`

Gets **previous node**

```javascript
console.log(child1.previousSibling);
```

👉 Output: text node

---

## ✅ `nextElementSibling`

Gets **next element only**

```javascript
console.log(child1.nextElementSibling);
```

👉 Output: `<p id="child2">`

---

## ✅ `previousElementSibling`

Gets **previous element only**

```javascript
let child2 = document.getElementById("child2");

console.log(child2.previousElementSibling);
```

👉 Output: `<p id="child1">`

---

# 🔥 Important Interview Tip

👉 **Sibling & child difference:**

- `*Sibling` → includes text nodes

- `*ElementSibling` → only HTML elements

- `firstChild` ❗ may give text

- `firstElementChild` ✅ always gives element

---

# 🎯 Easy Memory Trick

- 👉 `Node` = everything (text + element)
- 👉 `Element` = only HTML tags
