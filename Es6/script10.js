

// List , Dictionaries

// Array and objects 

var arr = ["a","b","c"]

for(var i = 0 ; i < arr.length ; i++){
    console.log(arr[i])
}
console.log('----------------')



for(let ele of arr){
    console.log(ele)
}


// forEach  // does not return anythin

var names = ["chinmay","poorva","mayuri"]
var n = names.forEach(function(el,index,arr){    
    console.log(` ${index} welcome ${el}  ${arr}`)

})


// map ??  -- Array ?? array

var numbers = [12,134,123]

// var two = function(el){
//     return el * 2
// }

// numbers.map(two) returns the new arrat

var j = numbers.map(function (el,index,arr){
    return el * 2
})
console.log(j)
// reduce , map and filter


//filter

var evenOdd = [1,10,14,45,66,77,88,99,33,55]
var even = evenOdd.filter(function(el,index,arr){
    return el % 2 == 0
})

console.log(even)

// reduce

var age = [23,34,45,56,7,88,99]
//[2021-23,2021-34] # map
//[23,34] # filter


// conditional statements break and continue 

var newArr = age.map(function(el){
    return 2021 - el
    
})
console.log(newArr)

var newArr2= age.filter(function(el,index,arr){
        return el > 18
})

console.log(newArr2)

// reduce -- 

// reduces the complete array to one value 

// it will return any arr 

// it will return only the value 


var number = [1,3,4,6,7]
var sum = 0

for(let i  = 0 ; i < number.length ; i++){
    sum += number[i]
}
console.log(sum)

//--------------------------------

// reduce ??  array 
var d = number.reduce(function(acc,el,index,arr){
    return acc + el
})
console.log(d)


// 


var number = [1,3,4,6,7,8,9,6,7,8]
// console.log(number.slice(1,4))
// console.log(number.slice(1,-1))
// console.log(number)


//  mutates the original array
number.splice(3,5)
console.log(number)  // index for slicing , 2nd number of elements to sliced


var num = [1,2,3,4,5,4,5,6,7,8,4]

// num.push(3)
// num.pop()
// num.shift()
// num.unshift()
// num.sort()
// num.toString()
// num.lastIndexOf(4)
















// console.log("Hello, World!");

//  var people = [
//    {"Name" : "Andy", "Surname" : "Smith", "Age" : "17"},
//    {"Name" : "Bill", "Surname" : "Doe", "Age" : "20"},
//    {"Name" : "John", "Surname" : "Parker", "Age" : "20"},
//    {"Name" : "Megan", "Surname" : "Mitchel", "Age" : "21"},
//    {"Name" : "Susan", "Surname" : "Smith", "Age" : "43"}
// ];
   
// var n = []
// for(var i = 0 ; i < people.length ; i++){

//     if(people.Age > 10){
        
//         n.push(people.Name)

//     }


// }
















