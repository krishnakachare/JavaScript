let aaaa = "aaabbaaccee"

// let rr = {
//     a: 5,
//     b: 2,
//     c: 2,
//     e: 2
// }


let hnn = {}
for (let i = 0; i < aaaa.length; i++) {

    if (hnn.hasOwnProperty(aaaa[i])) {
        hnn[aaaa[i]] = hnn[aaaa[i]] + 1
    }
    else {
        hnn[aaaa[i]] = 1
    }

}
console.log(hnn)


//----------------------------------------

// transversing throug object
let students = [
    {
        Name:'krishna kachare',
        age: 26,
        fsub:['som','tom','vib']
    },
    {
        Name:'ravi dongare',
        age: 24,
        fsub:['mech','dom','rac']
    },
    {
        Name:'akshay dikare',
        age: 25,
        fsub:['fm','tom','thrmo']
    }
]

// // find avg. age of students

// // 1. using reduce method

// let z = students.reduce(function(acc,el,ind,arr){
//     return acc + el.age
// },0)
// console.log(z/students.length)     // 25

// 2. using for loop
let sum = 0
for (let i=0;i<students.length;i++){
    //return console.log(students(i))
    sum = sum + students[i].age
}
console.log(sum)

// // // find who have fsub tom
//  let a  = students.filter(function(el,ind,arr){
//      return el.fsub.indexof['tom']
//  })
//  console.log(a)