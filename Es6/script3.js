// // // var obj = {

// // //         name:"chinmay",
// // //         age:20,
// // //         rollNumber:30
// // // }

// // // // 2 ways to fetch the value 
// // // // Dot notation 
// // // console.log(obj.name)
// // // // sqaure notation
// // // console.log(obj['name'])


// // var namey = ["chinmay","deshpande","poorva","vyas","amol","rao"]
// // console.log(namey[0])

// // // looping through array 

// // for(var i = 0 ; i < 6;i++){
// //     //console.log(i)
// //     console.log(namey[i])

// // }


// // // obj stores the value by key-value pair
// // var obj = {

// //     name:"chinmay",
// //     age:20,

// // }



// // var person = ["chinmay",34,24]
// // for(var i = 0 ; i < person.length;i++){
// //     console.log(person[i])
// // }

// // // object 

// // var person = {

// //     name:"chinmay",
// //     rollNumber:34,
// //     age:23

// // }
// // // person.name   # not allowed in for loop
// // //person['name']

// // // for (var key in person){
// // //     //console.log(key)
// // //     console.log(key , person[key])
// // // }

// // var person = {

// //     name:"chinmay",
// //     age:20,
// //     skills:["java","javascript","css","css3","html"],
// //     family:{

// //         father:"shirsh deshpande",
// //         mother:"kanchan deshpande",
// //         sister:"dhanashree deshpande",
// //         location:["chandrapur","nagpur","hydreabd"]


// //     }


// // }

// // for(var key in person){
// //     if(key == 'family'){
// //         var a = person[key]
// //         for (var keya in a ){
// //             console.log(keya ,a[keya])
// //         }
// //     }
// // }

// // for (var a in  person){
// //     if(a == 'family'){
// //         var v = person[a]
// //         for(var c in v){
// //             if(c == 'location'){
// //                 var arr = v[location]
// //                 for(var i = 0 ; i < arr.length;i++){
// //                     console.log(location[i])
// //                 }

// //             }

// //         }


// //     }


// // }







// // //
// // var obj = {
// //     name:"chinmay",
// //     age:30
// // }


// // // for(var  i in  obj){

// // //     console.log(i)
// // //     console.log(obj[i])


// // // }










// // console.log(person.family.father)





// // //console.log(person.skills[3])
// // // console.log(person.skills.length)

// // // var n = person.skills
// // // console.log(n[3])




// var obj = {
//     user:"user created succefully"


// }
// document.write(`<h1> ${obj.user}</h1>`)


// object -- atrributes , methods 


var age = 10;
var namey = 20;
var languages = 'marathi'



// this refers the current calling obj 

// var obj = {

//     age:29,
//     namey:'chinmay',
//     languages:'Hindi',

//     printMessage:function(){
//         console.log(this.age,this.namey,this.languages) //

//     }
// }
// obj.printMessage()









var students = [

    {
        firstName: 'Chinmay',
        lastName: 'deshpande',
        age: 40,
        languages: 'Marathi',
        skills: ['python', 'django', 'c', 'cypress', 'c++', 'selenium', 'java']

    },

    {
        firstName: 'Shirish',
        lastName: 'deshpande',
        age: 36,
        languages: 'English',
        skills: ['python', 'django2', 'c', 'cypress3', 'c++', 'selenium2', 'python2', 'python3']

    },

    {
        firstName: 'Manohar',
        lastName: 'deshpande',
        age: 32,
        languages: 'Hindi',
        skills: ['python', 'django', 'c', 'cypress', 'c++', 'selenium3', 'java3']

    },

    {
        firstName: 'Sayli',
        lastName: 'deshpande',
        age: 33,
        languages: 'Urdu',
        skills: ['django', 'c', 'cypress', 'c++', 'selenium3', 'java3']

    },

    {
        firstName: 'Sarika',
        lastName: 'Pansare',
        age: 35,
        languages: 'Urdu',
        skills: ['django', 'c', 'cypress', 'c++', 'selenium3', 'java3']

    }

]

//var userPython = []
for (let i = 0; i < students.length; i++) {
    var a = students[i]
    if (('python' in a.skills) && ('cypress' in a.skills)) {
        console.log(a.firstName)
    }

}









// django and cypress



// console.log("chinmay" in ['chinmay'])


// To find the user with python
// var userPython = []

// for(let i = 0 ;i < students.length;i++){

//     var a = students[i]

//     console.log(a)

//     for(var key in a){

//         if(key === "skills"){

//             var lan = a[key]

//             for(let i = 0 ; i < lan.length;i++){

//                 if(lan[i] === 'python'){

//                     userPython.push(a.firstName)


//                 }


//             }


//         }

//     }


// }





// peopleWithurd = []

// console.log(userPython)

// // number of skills per user 

// for(let i = 0 ;i < students.length;i++){
//     var a = students[i]

//     if(a.languages === "Urdu"){

//         peopleWithurd.push(a.firstName)


//     }


// }

// console.log(peopleWithurd)


// var userPython = []

// for(let i = 0 ;i < students.length;i++){
//     var a = students[i]
//     console.log(`${a.firstName} : ${a.skills.length}`)


// }

// var sum = 0 
// for(let i = 0 ;i < students.length;i++){
//     var a = students[i]
//     sum = sum + a.age

// }
// console.log(sum/students.length)





// {
//     firstName:'Sayli',
//     lastName:'deshpande',
//     age:33,
//     languages:'Urdu',
//     skills:['django','c','cypress','c++','selenium3','java3']

// }