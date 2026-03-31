## ✅ Event Delegation (Simple & Clear)

**Event Delegation** means:
👉 Instead of adding event listeners to multiple child elements, you add **one event listener to the parent** and handle events using `event.target`.

---

## 🎯 Why use Event Delegation?

* Better performance (less event listeners)
* Works for **dynamic elements** (added later)
* Cleaner code

---

## ✅ Basic Example

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
let list = document.getElementById("list");

list.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
</script>
```

### 👉 Output:

If you click any `<li>` → it prints that item text

---

## ⚠️ Important: Handle correct element

Sometimes parent also gets clicked, so we check:

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
let list = document.getElementById("list");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});
</script>
```

---

## ✅ Dynamic Element Example (VERY IMPORTANT)

```html
<ul id="list"></ul>
<button id="addBtn">Add Item</button>

<script>
let list = document.getElementById("list");
let btn = document.getElementById("addBtn");

// Event Delegation
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});

// Add new items dynamically
btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Item";
  list.appendChild(li);
});
</script>
```

👉 Even new items will work without adding new listeners ✅

---

## 🔥 How it works?

👉 Based on **Event Bubbling**
Child → Parent → Top

Parent catches the event and uses:

```javascript
event.target
```

---

## 🔥 Real-world Example

* Table row click handling
* List item selection
* Menu navigation
* Todo apps (delete/edit buttons)

---

## 🔥 Quick Summary

| Concept          | Meaning                              |
| ---------------- | ------------------------------------ |
| Event Delegation | Parent handles child events          |
| Uses             | `event.target`                       |
| Based on         | Event Bubbling                       |
| Benefit          | Better performance + dynamic support |

