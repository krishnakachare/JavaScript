// let x = 10
// console.log(x)   // 10
// x = 5
// console.log(x)  // 5   can re-assign

// const y = 20
// console.log(y)  // 20
// y = 30
// consolele.log(y)  // error        cant re-assign

// variables types
// let a = 10.33
// console.log(typeof a)  // number
// let b = '10.33'
// console.log(typeof b)  // string
// let redrose = true
// console.log(typeof redrose)  // boolean
//array = ['krishna','15','marathi']        //mixed type array


// let a =  10 , b = 20
// console.log(a+b)   // 30

// let a = '10' , b ='20'
// console.log(a+b)  // 1020


//let a = 'krishna' , b = 'kachare'
// console.log(a+b)                    // krishnakachare
// console.log(a+' '+b)                // krishna kachare

// backtick

//e.g. 1
//console.log(`${a}${b}`)  // krishna kachare

//e.g. 2

// function grating (name){
//     console.log(`welcome ${name} !!`)
// }
// grating('krishna')           // welcome krishna !!



//function as a parameter to another function

// function a (x,y)  
// {
//     return x+y 
// }

// function kk (a)
// {
//     let b = a (1,1)
//     return b
// }

// let z =kk (a)
// console.log (z)


//let k = 'krishna'
//console.log(typeof k)  // string
//console.log(k.length)    // 7
//let n = k.toUpperCase()
//console.log(typeof n)   // string

//console.log(n)   // KRISHNA
// let m = k.toLowerCase()
// console.log(m)   // krishna

// String stores the value by in index
// Array stores the value by in index

// javascript is a case sensitive language ------- A  ans   a   are different meaning



// array         methods (action and return)

//let number = [1,2,3,4]

// FOR LOOP
// for (let i=0; i<=number.length; i++){
//     console.log(i)          //0,1,2,3,4             array index
//     console.log(number[i])  //1,2,3,4,undefined      array elements
//}

// REVERSE LOOP
// for (let i=number.length - 1; i>=0; i--){
//     console.log(i)          //3,2,1,0        array index
//     console.log(number[i])    // 4,3,2,1      array elements
//}


/////////////////      METHODS          ///////////////////////////////////////////////////////////

// 1 push             add element at the end of array and returns the new length of array

//  let pu = number.push(5)
//  console.log(pu)    // 5      
//  console.log(number)   // 1,2,3,4,5     


// // 2  pop          remove element at the end of array and returns it

// let po = number.pop()
// console.log(po)        // 4
// console.log(number)     // 1,2,3


// 3 unshift        add element at the front of array and returns the new length of array

// let us = number.unshift(0)     // add 0 in first of array
// console.log(us)           // 5   total new length of array
// console.log (number)  // [0,1,2,3,4]   first element 0 add in array

// 4 shift          remove element at the front of array and returns it

// let s = number.shift()
// console.log(s)                  //  0  action remove 0
// console.log(number)   // [1,2,3,4] new array


// 5  slice             return array

//arrayName.slice(startPoint,endPoint)

//e.g.  1 -  2Dimenstional array
//                0         1        2                3                      4
//let person = ['krishna','kachare',10,['python','javascript','css'],['marathi','hindi']]
 //                                         3,0      3,1       3,2        4,0      4,1

//let a = person[4]
//console.log(a)         //['marathi','hindi']
//console.log(person[4])   //['marathi','hindi']

// console.log(person[4][1])   // hindi
// console.log(person[4][0])    // marathi

// console.log(person.length)             // 5
// console.log(person[3].length)          // 3

// e.g  slicing     return - array         (start index point, end index point ) end index point NOT included

//console.log(person.slice(0,2))     // ['krishna','kachare']
//                                          0           1
//console.log(person.slice(4,))       // ['marathi','hindi']           last pont not menstion then its upto end consider



// 6.  MAP   return new array


// let dob = [2000,2004,1995,1996]             //then find ages ?

// Old method  (push)
// let age = []
// for (let i=0; i<=dob.length; i++){
//     //console.log(2021-dob[i])      // 21,17,26,25,nan      one by one gives result
//     age.push(2021-dob[i])           
// }
// console.log(age)                     // [ 21,17,26,25,nan ]   result in array

// New method (MAP)

// let ages = dob.map(function(el,index,arr){
//     return 2021-el
// })
// console.log(ages)                       //  [ 21,17,26,25 ]    in array

// el = current element , index = index value , arr = all array


//  7. FILTER              ACTION = elements , return= array

//e.g 1

//  let ages = [20,22,53,43,54,23,67,78,89,98,54] 

 // Old method (push)

//  let age =[]
//  for (let i=0 ; i<=ages.length; i++){
//      if(ages[i]>50) {
//          age.push(ages[i])
//      }
//  }
// console.log(age)     // [ 53, 54, 67, 78, 89, 98, 54 ]


// new method (filter)

// let age = ages.filter(function(el,index,arr){
//     return el > 50
// })
// console.log(age)        // [ 53, 54, 67, 78, 89, 98, 54 ]


// let age = ages.filter((el,index,arr) => el > 50
// )
// console.log(age)            // [ 53, 54, 67, 78, 89, 98, 54 ]


//e.g 2

//let names = ['chinmay','amol','poorva','ramesh','amit']

//OLD
// let fourecharaletter=[]
// for (let i=0; i<=names.length-1; i++){
//     if (names[i].length == 4){
//         fourecharaletter.push(names[i])
//     }
// }
// console.log(fourecharaletter)                //   [ 'amol', 'amit' ]


//NEW
// let fourcha = names.filter(function(el,ind,arr){
//     return (el.length == 4 )
// })
// console.log(fourcha)                          // [ 'amol', 'amit' ]


// 8. reduce           action = addition    return = number  (single value)

//let add = [20,22,53,43,54,23,67,78,89,98,54] 

//old method (for loop)
// let sum = 0
// for ( let i=0; i< add.length; i++) {
//      sum = sum + add[i]
// }
// console.log(sum)                   //601


// New method (reduce)

// let ad = add.reduce(function(acc,el,index,arr){
//     return acc + el
// },0)
// console.log(ad)                 //601


// 9. ForEach      (using backstick)               RETURN = Nothing    output = Undefined

// let cypressBatch = ['krishna','pasha','aksha','avi','swapnil']

// let kk = cypressBatch.forEach(function(el,index,arr){
//     console.log(`Welcome ${el}`)
// })
// console.log(kk)                  //   Welcome krishna
//                                  //   Welcome pasha
                                    //   Welcome aksha
                                    //   Welcome avi
                                    //   Welcome swapnil


// //Absulut value
// let a = -10
// console.log(Math.abs(a))         // 10                          
// console.log(Math.abs(-10))       // 10


// // e.g  1
// let marks = [[77,23,45],[54,67,44],[87,67,77]]
//  let y = marks.map(function(el,ind,arr){
//      return el.reduce(function(acc,el,ind,arr){
//          return acc + el
//      },0)
//  }).filter(function(el,ind,arr){
//      return el> 100
//  })
// console.log(y)                                  //  [ 145, 165, 231 ]


// e.g bank transactions

//let transaction = [200,-100,600,70,-300]

// let withdraw = transaction.filter(function(el,ind,arr){
//     return el<0
// })

// let deposite = transaction.filter(function(el,ind,arr){
//     return el>0
// })

// console.log(withdraw,deposite)            // [ -100, -300 ] [ 200, 600, 70 ]


// let withdraw = transaction.filter(function(el,ind,arr){
//     return el<0
// }).reduce(function(acc,el,ind,arr){
//     return acc + el
// })

// let deposite = transaction.filter(function(el,ind,arr){
//     return el>0
// }).reduce(function(acc,el,ind,arr){
//     return acc + el
// })

// console.log(withdraw,deposite)                   // -400,870

// let totaltransaction = null;
// totalTransaction = transaction.reduce(function(acc,el,ind,arr){
//     return acc + Math.abs(el)
// },0)
// console.log(totalTransaction)                // 1270



// 10. FLAT                  Return = array

// let array = [[1,2,3],[4,5,6]]
// console.log(array)              //  [[1,2,3],[4,5,6]]

// console.log(array.flat())        // [1,2,3,4,5,6] 



// 11. indexof

//let  lang = ['marathi','hindi','english']

//console.log(lang.indexOf('marathi'))        // 0   if element present in array then return its index
//console.log(lang.indexOf('korean'))         // -1  if element not present in array then return  -1




////////  condition statements  ///////////////////////////////////////////////////////////

//single input for multiple outputs that time conditional statements are used

// syntax for if - else

// 1.

// if (condition){
//          // statements
// }
// else {

     // statements
// }


//WHERE are condition fulfill or true that time if statements are execuit or true otherwise else statements are execuite

// 2.  

// if (condition){
//     // statements
// }else if (condition) {

// // statements
// }
// else {
//            // statements
// }


/////// logical operator  /////////////////////////////////

// True = 1,-1,2 ( numbers ),string,special symbol(its consider as a string)
// False = 0, null, undefined

// AND 
// true(1) and true(1)   -  true (1)
// true(1) and false(0)   -  false(0)
// false(0) and true(1)   -  false(0)
// false(0) and false(0)   - false(0)

// OR
// true(1) or true(1)   -  true (1)
// true(1) or false(0)   -  true(1)
// false(0) or true(1)   -  true(1)
// false(0) or false(0)   - false(0)

// NOT
// true (1)  -  false(0)
// false(0)  -  true (1)



// 12. prompt  ( its used for recive input from user side)  -- output (return) only in string

//e.g. 1.

// let fruits = ['apple','banana','grapes','chiku','papaya','dragonfruit']
// let userinput = prompt ('Which fruit you wish to buy ?')          // ---- output(return) in string
// if ( fruits.indexOf(userinput)>=0){
//     console.log('fruit is available')
// }
// else {
//     console.log('fruit is not available')
// }



//e.g.2.

// age > 10  -- drive
// age > 5 <= 10  -- swimming
// age < 5  -- stay at home

// let age = prompt('Enter your age')
// if (age > 10){
//     console.log('you can drive')
// } else if (age > 5 && age <= 10){
//     console.log('you can swimm')
// }
// else {
//     console.log('stay at home')
// }



// 13. CONCATE                      Action = add two array in one array   Return = new one array
//  let a = [1,2,3,4]
//  let b = [5,6,7,8] 
//  z = a.concat(b)
// console.log(z)    //  [1, 2, 3, 4,5, 6, 7, 8 ]
// console.log(b.concat(a))   // [5, 6, 7, 8,1, 2, 3, 4  ]


// 14. SORT   (sort string)  Action = array element arrange in alphabetical order    Return = array

// let names = ['krishna','kachare','dadas','dongare','dikare']
// console.log(names.sort())               //  [ 'dadas', 'dikare', 'dongare', 'kachare', 'krishna' ]


// 15. REVERSE     Action = reverse the current array   Return = array

// let names = ['krishna','kachare','dadas','dongare','dikare']
// console.log(names.reverse())                   //   [ 'dikare', 'dongare', 'dadas', 'kachare', 'krishna' ]


// 16. FILL  Action = fill the required element in array   Return = new array

// Syntax 
// arrayName.fill(value to be filled,start point,end point)       end point not includede

// let names = ['krishna','kachare','dadas','dongare','dikare']
// console.log(names.fill('kachare',2))            //  [ 'krishna', 'kachare', 'kachare', 'kachare', 'kachare' ]


// 17.  SPLICE      Action = cut the required array and in that fill the required element   Return = new array

// Syntax
// arrayName.splice(start point, end point, filling elements)
// end point included in splice

// let names = ['krishna','kachare','dadas','dongare','dikare']
// names.splice(2,4,'pasha','ravi','akshay')
// console.log(names)                                                //  [ 'krishna', 'kachare', 'pasha', 'ravi', 'akshay' ]


////////////////////// OBJECT ////////////////////////////////////////////////////////////////////
// For the descriptive information we use object
// object does not store the value by index

// e.g. 
// let person = {
//      firstName:'krishna',
//      lastName:'kachare',
//      age:25,
//      id:007

// }

// // how to get elements from object ?
// // 1. Dot notation
// console.log(person.firstName)         // krishna

// // 2. bracket notation
// console.log(person['firstName'])      // krishna


// let student = [
//      {
//           firstName:'ravi',
//           lastName:'dongare',
//           age:43,
//           id:17
//      },
//      {
     
//           firstName:'krishna',
//           lastName:'kachare',
//           age:25,
//           id:007                    
//      },
//      {
     
//           firstName:'abhi',
//           lastName:'yelpale',
//           age:25,
//           id:15                    
//      },
// ]


// // 18. Findindex         Action = find index in object                  Return = number

// let g = student.findIndex(function(el,index,arr){
//      return el.firstName == 'krishna'
// })
// console.log(g)                                       //  1


// // 19. includes      Action = check     Return = boolean


// console.log('kachare'.includes('r'))            // true
// console.log('krishna'.includes('o'))           // false


// // 20. some , every        Action = check    Return = boolean

// let ages = [10,32,43,54,12]

// //e.g 1.

// let a = ages.some(function(el,index,arr){
//        return el > 50
// })
// console.log(a)                                    // true

// //e.g 2.
// let b = ages.every(function(el,index,arr){
//      return el > 50
// })
// console.log(b)                                     // false


// // 21. Join        Action = join array element with comma seperated             Return = 

// let fullName = ['krishna','kachare']
// let named = fullName.join()
// console.log(named)                      // krishna,kachare
// console.log(typeof named)               // string


// // 22. Flatmap

// //e.g.  OLD
// let a = [[1,2,3],[6,7,8],[4,3,2,1]]
// let z = a.flat().map(function(el){
//      return el + 1
// })
// console.log(z)                     // [2, 3, 4, 7, 8,9, 5, 4, 3, 2 ]

// // e.g.
// let names = [['krishna','kachare'],['poorva','vyas'],['pasha','dadas']]
// let z = names.flatMap(function(el,index,arr){
//      return el.join("")
// })
// console.log(z)                       // [ 'krishnakachare', 'poorvavyas', 'pashadadas' ]