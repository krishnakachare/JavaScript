# ✅ 1. Event Bubbling

Event goes **from child → parent → top**

👉 Inner element event triggers first, then parent

```html id="bub1"
<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", function () {
    console.log("Child clicked");
  });
</script>
```

### 🔹 Output when clicking button:

```
Child clicked
Parent clicked
```

👉 This is **default behavior**

---

# ✅ 2. Event Capturing

Event goes **from parent → child**

👉 Outer element triggers first

```html id="cap1"
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener(
    "click",
    function () {
      console.log("Parent clicked");
    },
    true,
  ); // 👈 capturing

  document.getElementById("child").addEventListener("click", function () {
    console.log("Child clicked");
  });
</script>
```

### 🔹 Output:

```
Parent clicked
Child clicked
```

👉 `true` enables **capturing phase**

---

# ✅ 3. Event Propagation

👉 Full flow of event:

```
Capturing Phase → Target → Bubbling Phase
```

### Example flow:

1. Parent (capturing)
2. Child (target)
3. Parent (bubbling)

👉 It means event travels **both directions**

---

# ✅ 4. `stopPropagation()`

Stops event from moving further

```html id="stop1"
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", function (event) {
    event.stopPropagation(); // 👈 stops bubbling
    console.log("Child clicked");
  });
</script>
```

### 🔹 Output:

```
Child clicked
```

👉 Parent will NOT run

---

# 🔥 Quick Summary

| Concept           | Direction      | Default?            |
| ----------------- | -------------- | ------------------- |
| Bubbling          | Child → Parent | ✅ Yes              |
| Capturing         | Parent → Child | ❌ No (need `true`) |
| Propagation       | Both           | ✅ Yes              |
| stopPropagation() | Stops flow     | —                   |
