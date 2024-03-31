// string methods

// 3. starts with    and    ends with       (its also work with substring)
//    action = check elements (also substring (text)) in string which start and ends with (required)
//    return = boolean  (true or false)

// let myname = 'krishna'

// console.log(myname.startsWith('K'))   // false coze javascript is a case sensitive language
// console.log(myname.startsWith('k'))    // true
// console.log(myname.endsWith('a'))      // true
// console.log(myname.endsWith('hna'))    // true       its also works with substring


// 4. include       action = check string(text) present or not      return = boolean

// let sister = 'gauri'
// console.log(sister.includes('gu'))    // false  bcoz  strings must in order not disscontinoue
// console.log(sister.includes('au'))     // true

// e. g . search fruit

// let fruits = 'mango chiku banana apple grapes'
// let userinput = 'mango'
//  if(fruits.includes(userinput)){
//      console.log('fruit is available')
//  }
//  else{
//      console.log('fruit is not available')
//  }


// 5. slice                              Action = required portion(text) of string in string gives     Return = string

// let myname = 'shrikrishna'
//                0    1    2    3    4    5    5    6    7    8    9  
//                s    h    r    i    k    r    i    s    h    n    a
//               -11  -10  -9   -8   -7   -6   -5   -4   -3   -2    -1                 


// only in slicing in string -ve index are work   ( or like python )

// console.log(myname[0])   // s
// console.log(myname[-1])  // undefined       ( -ve index not work )

// console.log(myname.slice(0,4))     // shri     ( end point not included )
// console.log(myname.slice(0,))         // shrikrishna     ( consider upto end index when second point not given )
// console.log(myname.slice(5,0))        // blank          ( not work when crossed index point given )

// console.log(myname.slice(-7,-1))      // krishn
// console.log(myname.slice(-7,))        // krishna     ( consider upto end index when second point not given )
// console.log(myname.slice(-7,-11))     // blank       ( not work when crossed ( not starting postion should be before ending position) index point given )



// 6. substring                  Action = required portion(text) of string in string gives     Return = string

// let myname = 'krishna kachare'
// let sstring = myname.substring(1,4)    // ris       (last index not included)
// console.log(sstring)
// console.log(myname.substring(1,-1))       // k     ( when second point is -ve or 0 then we gives no. of string elements is equals to first (starting) point)
// console.log(myname.substring(2,-1))       // kr
// console.log(myname.substring(2,0))        // kr    
// console.log(myname.substring(2,))         // ishna kachare     ( when second point is not given then no. of string elements drop or deleted is equals to first (starting) point)




