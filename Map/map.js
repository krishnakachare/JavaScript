// Map stores the value inform of key value 


var person = {
    name: 'chinmay',
    age: 20
}

//Map  can hold objects and primitive data types as 
//their keys and values 

// Normal object 

// Array object 

// object literal

// Iterator -  an ordered is maintain



let map1 = new Map([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
])
console.log(map1)
var map2 = new Map([
    ["firstName", 'chinmay'],
    ["lastName", "deshpande"],
    ['rollNumber', 34]
])
console.log(map2)
var map2 = new Map([
    ["wholenumber", [1, 2, 3, 4, 5]],
    ["decimal", [13.5, 2.4, 5, 6]],
    ['negative', [-1, -2, -3, -4]]
])
console.log(map2)

let quiz = new Map([
    ['question', 'answer'],
    ['capital of MH', 'mumbai'],
    ['capital of MP', 'bhopal'],
    ['capital of UP', 'Lucknow']

])


// Set method is used to set the value in the map
// console.log(quiz)
// quiz.set('capital of Rajasthan','jaipur')
// console.log(quiz)
// console.log(quiz.get('question'))   
// console.log(quiz.size)



// deleting the value from the map 
//quiz.delete('question')
// console.log(quiz)
// quiz.clear()
// console.log(quiz)
//console.log(quiz.has('capital of M'))






let a = quiz.entries()
console.log(a)

for (let [key, value] of quiz.entries()) {
    console.log(key, value)
}



for (let [key, value] of quiz.entries()) {
    console.log(key, value)
}

for (let key of quiz.keys()) {
    console.log(key)
}


for (let key of quiz.values()) {
    console.log(key)
}