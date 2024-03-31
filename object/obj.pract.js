
let a=["Mayuri","Katwe",23,89]
console.log(a[0])

let pi={
    firstname:"Mayuri",
    lastname:"Katwe",
    age:23,
    rollno:89
}

//Retrive the value of object we have two notation
//1. dot notation
console.log(pi.firstname)
//2. bracket notation
console.log(pi['lastname'])

//Create the new key & value
pi.nation="india"
console.log(pi)

//update the given value
pi.firstname="Manu"
console.log(pi)

//delete the key and value
delete pi.firstname
console.log(pi)

//for loop to object
//note: for loop for object not support to dot notaion
for(let key in pi){
    console.log(key,pi[key])
}

//Object method
//1. hasOwnProperty()
console.log(pi.hasOwnProperty("firstname"))

//Problem statement
//ip="asdfasdfasdf123" op={a=3,b=3,c=3}
let str1="asdfasdfasdf123"
let ob={}
for(let i=0;i<str1.length;i++){
    if(ob.hasOwnProperty(str1[i])){
        ob[str1[i]]=ob[str1[i]]+1
    }
    else{
        ob[str1[i]]=1
    }
}
console.log(ob)



