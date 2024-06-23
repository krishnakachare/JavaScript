// 4). test() =>   **Action = check given regex is match with ()     **Return = Boolean

let names = ['krishna-jambud','avi-shreepur','swapnil-baramati']
let regex = /shreepur/
//console.log(regex.test(names))         // true
console.log(regex.test(names[0]))    // false

// e.g. used test()

let x = names.filter((el,ind,arr)=>{
    return regex.test(el)
})
console.log(x)     // [ 'avi-shreepur' ]


// 5). start with (^)

// 6). start and end with (^ $)   

// its also restrict character length and character type which we have start with and which have ends with

// 7). dots(indicates characters quantity)(...    means 3 characters)

// multipal dots indicated by ( .{no. of dots})

// 8). paterrns []

// 9). multiple paterrns  [ ] [ ] [ ]

// here first block each characters refers to the second block characters pattern and its referce to the third block pattern

// first block means its compulsory pattern 
// second block means its optional if in it have multipal characters. in second block one of them character must follow the pattern with forst block


// 10).  \d  (means have range from 0 to 9)  = [0-9] = [\d]

// 11).  [ ^  ]          means when (startwith)  ^ sign inside the square braket  THAT means That PATTERN NOT START WITH


// 12).  \D   (means not have range from 0 to 9)  = [^0-9] = [^\d] = [\D]

// 13).  \w   (means have range  [a-z, A-Z, 0-9, _ ])

// 14).  \W   (means not have range   [^a-z, A-Z, 0-9, _ ]) = [^a-z, A-Z, 0-9, _ ] = [^\w] =[\W]































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
//-----------------------------------
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




// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[^a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)

//same as this [a-zA-Z0-9_]

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[\W][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)

//same as this [a-zA-Z0-9_]

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[\w][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)