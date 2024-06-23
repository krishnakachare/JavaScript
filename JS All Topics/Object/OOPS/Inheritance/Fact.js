// INHERITANCE
// Inherite global object properties and methods on local (small ) object Becoz of inheritance

// when we declear any dynamic variable (datatype change according to its assign value ) 
// variable itsself is object becoze in javascript all things are object
// its made by inbuild class   (prototype)
// its have properties and methodes  which was applied on dynamicaly declear variables
// Thats way when we declear any object and in that we not declear any properties and methods but after declearation we can applied that undecleared properties and methods
// Example =  

// Array 

let array = [1, 2, 3, 4]       // its object made by inbuild class
console.log(array.length)  // 4

// in array object we not decleared any property but we can retrive the value of length property from array object
// its possible becoz in global level object properties are assign to this small object (array)
// behind its inheritance concept are works
// Here length property is inherite from global object on array object

array.pop()
console.log(array)   // [ 1, 2, 3 ]

// Above array object we not decleard any method but here we can apply pop method on array object
// pop method is global object method which is inherite on our local object array



// OBJECT

// hasOwnProperty()


// STRING

// String all properties and methods