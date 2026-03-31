# ✅ 1. `MutationObserver`

👉 Detects changes in the DOM (add/remove/modify elements)

```html id="mo1"
<div id="box"></div>
<button id="btn">Add Text</button>

<script>
  let box = document.getElementById("box");

  let observer = new MutationObserver(function (mutations) {
    console.log("DOM changed");
  });

  observer.observe(box, { childList: true });

  document.getElementById("btn").addEventListener("click", function () {
    let p = document.createElement("p");
    p.textContent = "New Element";
    box.appendChild(p);
  });
</script>
```

---

# ✅ 2. `IntersectionObserver`

👉 Detects when element is visible on screen (viewport)

```html id="io1"
<div id="box" style="margin-top:1000px;">Hello</div>

<script>
  let box = document.getElementById("box");

  let observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      console.log("Element is visible");
    }
  });

  observer.observe(box);
</script>
```

👉 Used for lazy loading, infinite scroll

---

# ✅ 3. `ResizeObserver`

👉 Detects size changes of an element

```html id="ro1"
<div id="box" style="width:100px; height:100px; background:red;"></div>

<script>
  let box = document.getElementById("box");

  let observer = new ResizeObserver(function (entries) {
    console.log("Size changed:", entries[0].contentRect.width);
  });

  observer.observe(box);
</script>
```

---

# ✅ 4. `dataset`

👉 Access custom `data-*` attributes

```html id="ds1"
<button id="btn" data-user="Krishna">Click</button>

<script>
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    console.log(btn.dataset.user); // Krishna
  });
</script>
```

---

# ✅ 5. `closest()`

👉 Finds nearest parent that matches selector

```html id="cl1"
<div class="parent">
  <button id="btn">Click</button>
</div>

<script>
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    let parent = btn.closest(".parent");
    console.log(parent);
  });
</script>
```

---

# ✅ 6. `matches()`

👉 Checks if element matches a selector

```html id="mt1"
<button id="btn" class="active">Click</button>

<script>
  let btn = document.getElementById("btn");

  if (btn.matches(".active")) {
    console.log("Button is active");
  }
</script>
```

---

# 🔥 Quick Summary

| API                    | Use                           |
| ---------------------- | ----------------------------- |
| `MutationObserver`     | Detect DOM changes            |
| `IntersectionObserver` | Detect visibility in viewport |
| `ResizeObserver`       | Detect size change            |
| `dataset`              | Access `data-*` attributes    |
| `closest()`            | Find nearest parent           |
| `matches()`            | Check selector match          |

---

# 🚀 Real-world Use Cases

- Lazy loading images → `IntersectionObserver`
- Dynamic UI updates → `MutationObserver`
- Responsive components → `ResizeObserver`
- Event delegation → `closest()` + `matches()`
- Storing data → `dataset`
