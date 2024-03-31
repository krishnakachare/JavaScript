// DataTypes = Number,Boolean,String,Array,Object
// string stores the value by index
// we can write string in double coolan or single coolan also

//  let myname = "krishna"

// console.log(myname.length)     // 7
// console.log(myname[myname.length-1])   // last index value is    a

// console.log(myname[0])     //  k


// for loop

// for(let i=0; i<myname.length-1; i++){

//     //console.log(i)        //  0 1 2 3 4 5
//     console.log(myname[i])  //  k r i s h n
// }

// for(let i=0; i<=myname.length-1; i++){

//     //console.log(i)        //  0 1 2 3 4 5 6
//     console.log(myname[i])  //  k r i s h n a
// }

// for(let i=0; i<myname.length; i++){

//     //console.log(i)        //  0 1 2 3 4 5 6
//     console.log(myname[i])  //  k r i s h n a
// }


// for(let i=0; i<=myname.length; i++){

//     //console.log(i)        //  0 1 2 3 4 5 6 7
//     console.log(myname[i])  //  k r i s h n a undefined
// }


// reverse for loop


// for(let i = myname.length; i>=0; i--){

//     //console.log(i)        //         7 6 5 4 3 2 1 0
//     console.log(myname[i])  // undefined a n h s i r k
// }


// // we can write string
//  console.log('krishna')      // krishna
//  console.log("krishna")       // krishna
//  console.log('krishna have "pen"')        // krishna have "pen"
//  console.log("krishna have 'pen'")        // krishna have 'pen'


 // CONCATINATION

 //console.log('My first name is'+" "+myname)    // My first name is krishna

 // STRING INTERPOLATION         RETURN = STRING

 //console.log(`My first name is ${myname}`)    // My first name is krishna    ( using backstick )

 //console.log(`My first name is ${1+1}`)       // My first name is 2       (RETURN STRING)


 //CONVERSION

//  let firstname = 'krishna'
//  let age = 25
//  let id = 20

 //console.log(firstname + age + id)     // krishna2520
//  console.log( age + id + firstname )     //  45krishna             ( operation start from left to right coz first addition happen and then combination of number and string and return type is string)
//  console.log( age + firstname + id )    // 25krishna20

//      OPERATION        RETURN
//  string + string   =  string    
//  number + string   =  string    //  45krishna             ( operation start from left to right coz first addition happen and then combination of number and string and return type is string)
//  string + number   =  string      // krishna2520
//  number + number   =  number



// METHODS   ( action , return)

// 1.
//  let lang = 'Marathi'
// let up = lang.toUpperCase()
// console.log(up)    //   MARATHI            action = value in uppercase   return = string

// 2.
// let lo = lang.toLowerCase()
// console.log(lo)   // marathi              action = value in lowercase    return = string


// let z = lang.toUpperCase().toLowerCase().length
// console.log(z)     //  7     we can apply methods or property with dot when we know return type or datatype where we apply it
// ' ' or " "  (space) consider as a string




//==================================================================================================================




// // let lastName = "chinmayhhsdfdsfsdfs"
// // //  0  1  2  3  4  5  6 7 8
// // //  c  h  i  n  m  a  y h h

// // let kl = lastName.indexOf('h') 
// // console.log(kl)

// //--------------------------------

// // let onew = "ammoml"

// // // second occurence

// // let r = onew.indexOf('m',onew.indexOf('m')+1)          // SECOND OCCURANCE

// // //------------------------------------

// // let r = onew.indexOf('m',onew.indexOf('m',onew.indexOf('m')+1+1))     // THIRED OCCURANCE


// //"abc".indexOf('char',postion)
// //"cbnn".lastindexOf('a')
