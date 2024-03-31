// ARRAY

let arr = [1,2,3]

// arrayName
// arrayName.keys()
// arrayName.values()
// arrayName.entries()

// for(let k of arr){        // one by one array value at k place
//     console.log(k)
// }

// for(let k of arr.keys()){    // one by one array index value at k place
//     console.log(k)
//     console.log(typeof(k))   // number
// }

// for(let k of arr.values()){    // one by one array  value at k place    type 1 and this same
//     console.log(k)
//     console.log(typeof(k))   // number
// }



// for(let k of arr.entries()){    // one by one arrays index value and arrays values gives in array at k place ( k datatype is object (Array))   
//     console.log(k)
//     console.log(typeof(k))   // object
// }



for(let [key,val] of arr.entries()){    // one by one arrays index value and arrays values gives in array at k place ( k datatype is object (Array))   
    console.log(key,val)
    console.log(typeof(key,val))   // object
}




// Object





// Map


// arrayName
// arrayName.keys()
// arrayName.values()
// arrayName.entries()


















// function sum(a,b){

// // for(let key of Object.values(arguments)) {
// //     console.log(key)

// // }


// for(let [key,value] of Object.entries(arguments)) {
//     console.log(key)
//     console.log(value)

// }

// }


// sum(1,2,3,78)






// sum(1, 2)