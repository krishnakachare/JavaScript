//Strings methods 
//1 toUppercase
//2 tolowercase
//3 StartsWith
//4 endsWith
//5 slice
//6 trim
//7 trimStart
//8 trimEnd
//9 indexOf
//10 includes

//11 replace
//Action  = replace Existing char with new char 
//return = string 

// let a = "Minsksole"
// console.log(a.replace('s', 'h'))  // Minhksole
// console.log(a.replaceAll('s', 'h'))  // Minhkhole // Minhkhole

// let b = "I am learning the JavaScript"
// console.log(b.replace('JavaScript','Python'))

// //12 ReplaceAll
// let c = "I am learing the JavaScript and I like JavaScript"
// //onsole.log(c.replaceAll('JavaScript','CSS'))
// let d = c.replaceAll('JavaScript', 'CSS')   //  I am learing the CSS and I like CSS
// console.log(d)


// 12 charat()
// Action = Gives the char at given index
// Return =  S t r i n g
//           0 1 2 3 4 5 6
// let e = "I am learning the JavaScript"
//       0123456....
// console.log(e.charAt(3))//m
// console.log(e[3])       //m
// console.log(e[1])       //
// console.log(e.charAt(1))//
// console.log(e.charAt(6))//e
// console.log(e.charAt())//by default takes 0 as a index  // I

//13 charCodeAt()
//Action = gives the char at index
// return = Asccii Value  

// let fruit = "Apple"
// let aa = fruit.charCodeAt(3)   // l
// fruit = "AppLe"
// aa = fruit.charCodeAt(3)   // L
// // let aaa = fruit.charCodeAt(2)  // p
// console.log(aa)  // 108  // 076
// // console.log(aaa)  // 112

// let firstName = ' mahesh '   // "MAHESH"  AT last find length of string

// let a = firstName.trim()
// console.log(a)  //mahesh
// a = a.toUpperCase()
// console.log(a)  //MAHESH
// a = a.length
// console.log(a)  //6


// let result = firstName.toUpperCase().trim().length
// console.log(result) //6



// 14. split()
//Action = string split in passed parameter
//return = Array

let e = "I am learning the JavaScript"
// console.log(e.split(" "))  // [ 'I', 'am', 'learning', 'the', 'JavaScript' ]
// console.log(typeof(e.split(" ")))  // Array (object)
// console.log(e.split("a"))    // [ 'I ', 'm le', 'rning the J', 'v', 'Script' ]
// console.log(e.split("ar"))   // [ 'I am le', 'ning the JavaScript' ]
// console.log(e.split())   // [ 'I am learning the JavaScript' ]

// console.log(e.split(""))   // [
//     'I', ' ', 'a', 'm', ' ', 'l',
//     'e', 'a', 'r', 'n', 'i', 'n',
//     'g', ' ', 't', 'h', 'e', ' ',
//     'J', 'a', 'v', 'a', 'S', 'c',
//     'r', 'i', 'p', 't'
//   ]

console.log(e.split("at"))   // [ 'I am learning the JavaScript' ]