### ✅ 1. `click`

When user clicks on an element

```html
<button id="btn">Click Me</button>

<script>
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    alert("Button clicked");
  });
</script>
```

---

### ✅ 2. `mouseover`

When mouse comes over the element

```html
<p id="text">Hover on me</p>

<script>
  let text = document.getElementById("text");

  text.addEventListener("mouseover", function () {
    text.style.color = "red";
  });
</script>
```

---

### ✅ 3. `mouseout`

When mouse leaves the element

```html
<p id="text">Hover and leave me</p>

<script>
  let text = document.getElementById("text");

  text.addEventListener("mouseout", function () {
    text.style.color = "black";
  });
</script>
```

---

### ✅ 4. `keydown`

When a key is pressed (down)

```html
<input type="text" id="inputBox" placeholder="Type something" />

<script>
  let input = document.getElementById("inputBox");

  input.addEventListener("keydown", function () {
    console.log("Key pressed");
  });
</script>
```

---

### ✅ 5. `keyup`

When key is released

```html
<input type="text" id="inputBox" />

<script>
  let input = document.getElementById("inputBox");

  input.addEventListener("keyup", function () {
    console.log("Key released");
  });
</script>
```

---

### ✅ 6. `submit`

When form is submitted

```html
<form id="myForm">
  <button type="submit">Submit</button>
</form>

<script>
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload
    alert("Form submitted");
  });
</script>
```

---

### ✅ 7. `change`

When input value is changed

```html
<select id="dropdown">
  <option>JavaScript</option>
  <option>Python</option>
</select>

<script>
  let dropdown = document.getElementById("dropdown");

  dropdown.addEventListener("change", function () {
    console.log("Value changed");
  });
</script>
```
