// In JavaScript window is the parent object for all.In window there has one method
// alert(), which is having the functionality to open the popup, written by JavaScript.Now i wants
// to override that functionality with my own console message.

// window.alert = function (msg) {
//     // for alert message functionality by default
// }
// alert('naresh')//open popup with naresh

// window.alert = function (msg) {
//     console.log(msg);
// }
// alert('naresh') // now it not open alert message, it shows the console message,

// means it overrides the existed functionality alert with console.
// So in JavaScript overriding is possible.

//---------------------------------------------------

// Array method override:

let arr = [1, 2, 3]
// arr.push(4)
// console.log(arr)
Array.prototype.push = function (para) {
    console.log("IM Arrays custom push method")
}
arr.push(4)
console.log(arr)