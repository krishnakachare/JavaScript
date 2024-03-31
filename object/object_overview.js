
let person={

    firstname:"Chinmay",
    lastname:"Deshpande",
    age:25,
    weight:35
}
//fetching object there are two methos
//1. dot notation> object.propertyname
//2. bracket notation> object['proprtyname']

console.log(person.firstname)
console.log(person['firstname'])

//to add new property
person.height=4
person.colour="white"
console.log(person)

//delet property
delete person.height
console.log(person)


//let x={ a:1,b:2}

//update property

person.firstname="mayuri"
console.log(person)