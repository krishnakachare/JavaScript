
let arr = [
    {
        fullName: "Mayuri Mahendra Katwe",
        lastName: "Katwe",
        skills: ["Java", "Js", "Python"],
        age: 55,
        parents: {
            father: "Mahendra",
            mother: "jayu"
        },
        city: "Pune"
    },
    {
        fullName: "Ganesh",
        lastName: "Gore",
        skills: ["SQL", "CSS", "HTML"],
        age: 32,
        parents: {
            father: "Mahe",
            mother: "jayuri"
        },
        city: "Mumbai"
    },
    {
        fullName: "Sandip",
        lastName: "Katyare",
        skills: ["automation", "bom", "array"],
        age: 18,
        parents: {
            father: "Tappu",
            mother: "gayu"
        },
        city: "Nagpur"
    },
    {
        fullName: "Sarthak",
        lastName: "Gadakh",
        skills: ["JS1", "MangoDB", "C#"],
        age: 23,
        parents: {
            father: "sandip",
            mother: "jajula"
        },
        city: "bhiwadi"
    }
]

//find the name of person which live in pune city
// arr.filter((el) => {
//     return el.city === "Pune"
// }).forEach((el) => {
//     console.log(el.fullName)
// })
//======================================================

//Need to obtain the array
// let aa = arr.filter((el) => {
//     return el.lastName === "Gore"
// }).map((el) => {
//     return el.skills
// }).flat()
// console.log(aa)
//======================================================

//check element age greter than 18
// let aa1 = arr.every((el) => {
//     return el.age > 18
// })
// console.log(aa1)
//======================================================

//obtain avg of all age of all object
// let aa2=arr.reduce((acc,el)=>{
//     return acc+el.age
// },0)/arr.length
// console.log(aa2)
//========================================================

//search the user which having python skill
// arr.filter((el)=>{
//     return el.skills.includes('Python')
// }).forEach((el)=>{
//     console.log(el.fullName)
// })
//========================================================

//Total number of skill of every user
// let mu=arr.map((el)=>{
//     return el.skills.length
// })
// console.log(mu)
//========================================================

//Name starting with G
// let mm=arr.filter((el)=>{
//    //return el.fullName.startsWith('M')
//    //return el.fullName[0]==="M"
//    return el.fullName.slice(-1)==="i"  //same as endswith
// })
// console.log(mm)

//=========================================================

//Add the skill as datasecurity
// arr.forEach((el) => {
//     el.skills.push("dataSecurity")
// })

// let pp = arr.map((el) => {
//     return el.skills
// })
// console.log(pp)

//===========================================================

//add the element as first in skill
// arr.forEach((el)=>{
// el.skills.unshift("Oracal")
// })

// let pp = arr.map((el) => {
//     return el.skills
// })
// console.log(pp)

//=================================================

//Fill method 
//Make 1 st element as default value
// arr.forEach((el)=>{
//     el.skills.fill("default",1,el.skills.length-1)
// })

// let pp = arr.map((el) => {
//     return el.skills
// })
// console.log(pp)

//===================================================

//replace first 2 element as below 
// arr.forEach((el)=>{
//     el.skills.splice(0,2,"styleCSS","html")
// })

// let pp = arr.map((el) => {
//     return el.skills
// })
// console.log(pp)

//=======================================================

//sort the element given in array
// let aa=arr.map((el)=>{
//     return el.skills.sort()
// })
// console.log(aa)

//=========================================================

//remove the element from last
// arr.forEach((el)=>{
//     el.skills.pop()
// })

// let pp = arr.map((el) => {
//     return el.skills
// })
// console.log(pp)

//=====================================================================

//remove the element from first
// arr.forEach((el)=>{
//     el.skills.shift()
// })

// let pp = arr.map((el) => {
//     return el.skills
// })
// console.log(pp)

//====================================================================

//revrese the skills
// let uu=arr.map((el)=>{
//    return  el.skills.reverse()
// })
// console.log(uu)

//======================================================================

//Mayuri-Mahendra-Katwe
// let po=arr.map((el)=>{
//     return el.username=el.fullName.split(" ").join("-")
// })
// console.log(po)

//==================================================================

//uN=MMK
// arr.forEach((el)=>{
//     el.uN=el.fullName.split(" ").map((el)=>el[0]).join("")
// })
// console.log(arr)


//=====================================================================

//find fullname stat with m
// let mmm=arr.find((el)=>{
//     return el.fullName.startsWith("M")
// })
// console.log(mmm)


let mmm=arr.findIndex((el)=>{
    return el.fullName.startsWith("M")
})
console.log(mmm)







