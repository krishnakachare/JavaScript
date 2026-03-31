### ✅ 1. `event.target`

Gives the exact element that triggered the event

```html
<button id="btn">Click Me</button>

<script>
  document.getElementById("btn").addEventListener("click", function (event) {
    console.log(event.target); // <button>Click Me</button>
  });
</script>
```

👉 Useful when multiple elements use same event

---

### ✅ 2. `event.type`

Tells which event occurred

```html
<button id="btn">Click Me</button>

<script>
  document.getElementById("btn").addEventListener("click", function (event) {
    console.log(event.type); // "click"
  });
</script>
```

---

### ✅ 3. `event.preventDefault()`

Stops default browser behavior

```html
<a href="https://google.com" id="link">Go to Google</a>

<script>
  document.getElementById("link").addEventListener("click", function (event) {
    event.preventDefault(); // stops navigation
    console.log("Link click prevented");
  });
</script>
```

👉 Normally link opens Google, but here it won't

---

### ✅ 4. `event.stopPropagation()`

Stops event from bubbling to parent

```html
<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", function (event) {
    event.stopPropagation(); // stops going to parent
    console.log("Child clicked");
  });
</script>
```

👉 Clicking button will ONLY log `"Child clicked"` (not parent)

---

### 🔥 Quick Summary

| Property / Method         | Meaning                              |
| ------------------------- | ------------------------------------ |
| `event.target`            | Which element triggered event        |
| `event.type`              | Type of event (click, keydown, etc.) |
| `event.preventDefault()`  | Stop default behavior                |
| `event.stopPropagation()` | Stop bubbling to parent              |
