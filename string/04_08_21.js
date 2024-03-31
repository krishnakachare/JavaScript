// string methods


// 7. substr            Action = required portion(text) from string gives    Return = string

// let myname = 'krishna kachare'

// console.log(myname.substr(0,3))    // kri
// console.log(myname.substr(2,3))    // ish      ( starting point = start collecting string elements      end point = how much elements are collected from start point )
// console.log(myname.substr(2,))     // ishna kachare    ( not gives second point then its consider as upto end)

// console.log(myname.substr(-7))        // kachare    (when only one -ve point gives then its gives no. of string elements from last)


// examples - Give me only mobile no.s from array

// let m = ['krishna:8308346610','kk:8830729406','chinmaysir:7709192441']

// for loop

// let mob = []
// for(let i = 0; i<m.length; i++){
//  let x = m[i].substr(-10)
// mob.push(x)

// }
// console.log(mob)                 //  [ '8308346610', '8830729406', '7709192441' ]

// map method

// let z = m.map(function(el,index,arr){
//     return el.substr(-10)
// })
// console.log(z)                    //  [ '8308346610', '8830729406', '7709192441' ]




// 8. trim                 Action = it remove starting and ending space from string    Return = string

// let myname = ' krishna kachare '
// console.log(myname.length)             // 17
// console.log(myname.trim())            //krishna kachare
// console.log(myname.trim().length)     // 15



// 9. replace                  Action = Replaces text in a string         Return = string      ( string in colan)

// let city = 'i live in pune city'
// let z = city.replace('pune','jambud')           // (start point is existing text in string  and second point is we want to replaced by)
// console.log(z)                              // i live in jambud city


// example
// let citys = ['i live in jambud', 'i live in solapur']
// let mycity = []

// for loop

// for (let i = 0; i < citys.length; i++) {
//     if (citys[i].includes('jambud')) {

//         mycity.push(citys[i].replace('jambud', 'sole'))
//     }
//     else if (citys[i].includes('solapur')) {
//         mycity.push(citys[i].replace('solapur', 'korea'))
//     }
// }
// console.log(mycity)                                         //  [ 'i live in sole', 'i live in korea' ]


// map method

// let m = citys.map((el)=>{
//     //return el.replace('jambud','sole')
//     if(el.includes('jambud')){
//         return el.replace('jambud','sole')
//     }
//     else if(el.includes('solapur')){
//         return el.replace('solapur','korea')
//     }
    
// })
// console.log(m)                                     //  [ 'i live in sole', 'i live in korea' ]





// 10. CharAt            Action = find element wrt index from string    return = string

// let myname = 'krishna'
// //console.log(myname.charAt(2))     //  i
// let x = myname.charAt(2)
// console.log(typeof (x))             // string            


// 11. CharCodeAt        Action =                                       Return = number
// console.log(myname.charCodeAt(2))     // 105


// 12. split             Action = seperate from where we required and make array       Return = array

// let f = 'mango banana chiku apple papaya'
// console.log(f.split(' '))                  // [ 'mango', 'banana', 'chiku', 'apple', 'papaya' ]

// let myno = 'krishna:8308346610'
// console.log(myno.split(':'))              // [ 'krishna', '8308346610' ]

// example

// let myname = 'krishna kachare'                 // o/p  =  Welcomne krishna !     then,

// console.log(`Welcome ${myname.split(' ')[0]} !`)        //  Welcome krishna !




// 13. padStart   padEnd           Action = increas length of string from start as well as end    Return = string      (use = make numbers in particular length      adding 0 from start or end )

//  console.log('8308346610'.padStart(15,'+91'))   // +91+98308346610
//  console.log('8308346610'.padStart(13,'+91'))   // +918308346610

//  console.log('8308346610'.padEnd(13,'+91'))      // 8308346610+91




////////////////////  THIS CHANGE FOR CHECK /////////////////////////////////////////////////////////////////987\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\