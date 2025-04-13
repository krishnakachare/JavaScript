
# 📘 jQuery Topics with Descriptive Code Examples

---

## 🔹 1. Introduction to jQuery
- What is jQuery?
- How to include jQuery (CDN / local)

```html
<!-- jQuery CDN -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

---

## 🔹 2. Document Ready Function

```javascript
$(document).ready(function () {
  console.log("DOM is fully loaded");
});

// Shorthand
$(function () {
  console.log("DOM ready!");
});
```

---

## 🔹 3. Selectors in jQuery

```javascript
$("p");        // All <p> tags
$("#myId");    // Element with id="myId"
$(".myClass"); // Elements with class="myClass"
$("[type='text']"); // Input with type="text"
```

---

## 🔹 4. Events

```javascript
$("#btn").click(function () {
  alert("Button clicked!");
});

$("input").keypress(function () {
  console.log("Key pressed!");
});
```

---

## 🔹 5. Effects

```javascript
$("#box").hide();
$("#box").fadeIn("slow");
$("#box").slideToggle();
```

---

## 🔹 6. CSS and Class Manipulation

```javascript
$("#box").css("background-color", "yellow");

$("#box").addClass("active");
$("#box").removeClass("inactive");
```

---

## 🔹 7. DOM Manipulation

```javascript
$("#content").html("<p>Hello!</p>");
$("#input").val("New Value");
$("#list").append("<li>New Item</li>");
$("#list").remove();
```

---

## 🔹 8. Traversing the DOM

```javascript
$("#item").parent();
$(".menu").children();
$("p").siblings();
$(".list").find("li");
```

---

## 🔹 9. jQuery each()

```javascript
$("li").each(function (index, element) {
  console.log(index, $(element).text());
});
```

---

## 🔹 10. AJAX with jQuery

```javascript
$.get("data.json", function (data) {
  console.log(data);
});

$.post("/submit", { name: "John" }, function (response) {
  alert("Server says: " + response);
});
```

---

## 🔹 11. Chaining

```javascript
$("#box").css("color", "red").slideUp(1000).slideDown(1000);
```

---

## 🔹 12. Form Handling

```javascript
$("#myForm").submit(function (e) {
  e.preventDefault();
  let formData = $(this).serialize();
  console.log(formData);
});
```

---

## 🔹 13. Animation

```javascript
$("#box").animate({
  left: '250px',
  opacity: 0.5
}, 1000);
```

---

## 🔹 14. Utility Methods

```javascript
let str = $.trim("   hello   ");
console.log(str); // "hello"

console.log($.isArray([1, 2, 3])); // true
```

---

## 🔹 15. Plugins

```javascript
// Using a plugin (e.g. jQuery UI)
$("#datepicker").datepicker();
```

---

## ✅ Summary
This guide gives you all the fundamental and advanced jQuery concepts you need for frontend/fullstack development with examples. Practice these with real DOM elements to master the library.
