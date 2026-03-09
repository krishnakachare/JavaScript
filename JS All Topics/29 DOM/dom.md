Since you are learning **JavaScript deeply for full-stack development**, the **DOM (Document Object Model)** chapter should be studied in a structured way. Below is a **complete topic-wise DOM syllabus**, starting from basics to advanced concepts used in real projects and automation.

---

# JavaScript DOM – Complete Topic-wise Syllabus

## 1. Introduction to DOM

- What is DOM?
- Why DOM is needed
- How browser converts **HTML → DOM Tree**
- Difference between **HTML DOM vs JavaScript Object**
- DOM vs BOM (Browser Object Model)
- DOM Tree Structure

Example DOM structure:

```
document
 └── html
      ├── head
      └── body
           ├── h1
           └── p
```

---

# 2. Selecting / Accessing Elements

How JavaScript finds elements in HTML.

### Basic Methods

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `document.getElementsByName()`

### Modern Methods

- `document.querySelector()`
- `document.querySelectorAll()`

### Example

```javascript
let title = document.getElementById("heading");
let items = document.querySelectorAll(".item");
```

---

# 3. DOM Properties

Accessing and modifying element properties.

Common Properties:

- `innerHTML`
- `innerText`
- `textContent`
- `value`
- `style`
- `className`
- `id`

Example

```javascript
document.getElementById("title").innerText = "Hello World";
```

---

# 4. DOM Attributes

Working with HTML attributes.

Methods:

- `getAttribute()`
- `setAttribute()`
- `removeAttribute()`
- `hasAttribute()`

Example

```javascript
let img = document.querySelector("img");

img.setAttribute("src", "photo.jpg");
```

---

# 5. DOM Styling

Manipulating CSS using JavaScript.

Topics:

- Inline styling using `.style`
- Adding multiple styles
- Reading CSS styles
- `classList`

Methods

- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `classList.contains()`

Example

```javascript
element.classList.add("active");
```

---

# 6. Creating DOM Elements

Dynamically creating HTML elements.

Methods:

- `document.createElement()`
- `document.createTextNode()`

Example

```javascript
let div = document.createElement("div");
div.innerText = "New Element";
```

---

# 7. Adding Elements to DOM

Insert created elements into page.

Methods:

- `append()`
- `appendChild()`
- `prepend()`
- `before()`
- `after()`

Example

```javascript
document.body.appendChild(div);
```

---

# 8. Removing Elements

Deleting elements from DOM.

Methods:

- `remove()`
- `removeChild()`

Example

```javascript
element.remove();
```

---

# 9. Replacing Elements

Replace existing elements.

Methods:

- `replaceChild()`
- `replaceWith()`

Example

```javascript
oldElement.replaceWith(newElement);
```

---

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

# 11. Event Handling

Handling user actions.

Common Events:

- `click`
- `mouseover`
- `mouseout`
- `keydown`
- `keyup`
- `submit`
- `change`

Example

```javascript
button.addEventListener("click", function () {
  alert("Button clicked");
});
```

---

# 12. Event Object

Understanding event details.

Properties:

- `event.target`
- `event.type`
- `event.preventDefault()`
- `event.stopPropagation()`

Example

```javascript
button.addEventListener("click", function (event) {
  console.log(event.target);
});
```

---

# 13. Event Bubbling & Capturing

Important interview topic.

Topics:

- Event Bubbling
- Event Capturing
- Event Propagation
- `stopPropagation()`

---

# 14. Event Delegation

Handling events efficiently.

Example

```javascript
document.querySelector("ul").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Item clicked");
  }
});
```

---

# 15. Forms and Input Handling

Working with form data.

Topics:

- Access form elements
- Input validation
- Reading input values

Example

```javascript
let name = document.getElementById("name").value;
```

---

# 16. DOM Collections

Understanding DOM lists.

Topics:

- `HTMLCollection`
- `NodeList`
- Difference between them
- Converting to array

Example

```javascript
Array.from(document.getElementsByClassName("item"));
```

---

# 17. DOM Manipulation Best Practices

- Avoid unnecessary DOM reflow
- Use `documentFragment`
- Cache DOM selectors
- Minimize DOM updates

---

# 18. Modern DOM APIs (Advanced)

- `MutationObserver`
- `IntersectionObserver`
- `ResizeObserver`
- `dataset`
- `closest()`
- `matches()`

---

# 19. Performance Optimization

- DOM reflow & repaint
- Virtual DOM concept
- Batch DOM updates

---

# 20. DOM in Real Projects

Examples:

- Dynamic Todo App
- Form validation
- Modal popup
- Dropdown menu
- Image slider
- Infinite scroll

---

✅ **For interviews**, the most important DOM topics are:

1. `querySelector vs getElementById`
2. `innerHTML vs innerText vs textContent`
3. `append vs appendChild`
4. `event bubbling`
5. `event delegation`
6. `NodeList vs HTMLCollection`
7. `classList`
8. DOM traversal
9. Form handling
