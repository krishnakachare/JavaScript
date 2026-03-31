
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


Here are **simple & basic examples** for each `classList` method 👇

---

# 🔹 1. `classList.add()`

👉 Adds a class

```html
<p id="text">Hello</p>

<script>
let el = document.getElementById("text");

el.classList.add("red"); // adds class "red"
</script>
```

---

# 🔹 2. `classList.remove()`

👉 Removes a class

```html
<p id="text" class="red">Hello</p>

<script>
let el = document.getElementById("text");

el.classList.remove("red"); // removes class "red"
</script>
```

---

# 🔹 3. `classList.toggle()`

👉 Adds class if not present, removes if present

```html
<p id="text">Hello</p>

<script>
let el = document.getElementById("text");

el.classList.toggle("active"); 
// if "active" not present → adds
// if present → removes
</script>
```

---

# 🔹 4. `classList.contains()`

👉 Checks if class exists (returns true/false)

```html
<p id="text" class="active">Hello</p>

<script>
let el = document.getElementById("text");

console.log(el.classList.contains("active")); // true
</script>
```

---

# 🚀 Quick Summary

* `add()` → add class
* `remove()` → remove class
* `toggle()` → add/remove automatically
* `contains()` → check class

