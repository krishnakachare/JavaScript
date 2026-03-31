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
