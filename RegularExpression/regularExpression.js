

///^javascript.d$/gim
//^ multi-line string only
// $ multi-line ends with only
// [abc][a-z][A-Z][0-9]

// prog1

//const regEx = new RegExp('abc')
// const h = /pune/ // pattern
// let names = ["chinmay-pune",'poorva-ujjain','abhisha-chandrapur','mayuri-nagpur','amol-pune']
// console.log(h.test(names[1]))

// let puneS = names.filter(function(el){
//     return h.test(el)
// })
// console.log(puneS)

// prog2


// const h = /^a/   // pattern
// let names = ["chinmay-pune",'poorva-ujjain','abhisha-chandrapur','mayuri-nagpur','amol-pune']
// console.log(h.test(names[1]))

// let puneS = names.filter(function(el){
//     return h.test(el)
// })
// console.log(puneS)

// prog3

// let namesStudents = ["amol","archit","amit","amey","abhisha",'arman']
// let ba =  /^....$/
// //-----------------------------------
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


// prog3

// let namesStudents = ["amol","archit","amit","amey","abhisha",'arman']
// let ba =  /^[a][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)



// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// let b = /^[7][7].{8}$/
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)



//program 4

//\d - [0-9]


// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// let b = /^[\d][\d].{8}$/
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)


// \D - [^0-9]
// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// //let b = /^[\D][\D].{8}$/
// let b = /^[^0-9][^0-9].{8}$/
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)




let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
let ba =  /^[^a-zA-Z0-9_][mr]/
let fchar = namesStudents.filter(function(el){
    return ba.test(el)
})
console.log(fchar)

//same as this [a-zA-Z0-9_]

let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
let ba =  /^[\W][mr]/
let fchar = namesStudents.filter(function(el){
    return ba.test(el)
})
console.log(fchar)


let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
let ba =  /^[a-zA-Z0-9_][mr]/
let fchar = namesStudents.filter(function(el){
    return ba.test(el)
})
console.log(fchar)

//same as this [a-zA-Z0-9_]

let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
let ba =  /^[\w][mr]/
let fchar = namesStudents.filter(function(el){
    return ba.test(el)
})
console.log(fchar)








