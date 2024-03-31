//It is object
// let chinmay = {
//     fullName: "chinmay deshpande",
//     age: 32
// }

// //It is also object
// let amol = {
//     fullName: "amolRao",
//     age: 26
// }

// //It is class
// class Person {
//     fullname = "mayuri"
//     age = 23
// }


// //1st object creation by using class
// let amol1 = new Person()   //Here I am creationg new object amol by using person name class so whatever property present in class by default came under amol object
// console.log(amol1) //amol={fullName:"mayuri" ,age:23}

// //2nd object creation by using class
// let anil1 = new Person()
// console.log(anil1) //anil1={fullName:"mayuri" ,age:23}


//**************1. Setting the object properties outside the class********************/

// //Adding peroperty in one object 
// anil1.language = "Marathi"
// anil1.skill = ["java", "js"]
// console.log(anil1) //anil1={fullname:"mayuri",age:23,language:"Marathi",skills:["java","js"]}

// //Updating the property in object
// anil1.age = 40 //anil1={fullname:"mayuri",age:40,language:"Marathi",skills:["java","js"]}
// console.log(anil1)

// //Deleting the property
// delete anil1.skill //anil1={fullname:"mayuri",age:40,language:"Marathi"}
// console.log(anil1)

// //Retriving the peroperty
// console.log(anil1.fullname) //mayuri

//////////////////////////////===============================///////////////////////////////////
//Class creation by using contructor

//***************************2. Making object by using constructor**************************/

//In above class we define property inside class so when we create object by using class we cant chage its property like fullname and age are similar for all object but in real time it is not expected cause all student dont have same name and age so we used constructor

// class person {
//     constructor(fullname, age, langauge) {
//         this.fullname = fullname
//         this.age = age
//         this.langauge = langauge

//     }
// }
//Class called as a blue print cause its format is created we just need to create object by using this
//Only one difference between constuctor and function is both are method but constructor cant return anything

// let amol=new person("amol",23,"Marathi")
// console.log(amol) //{ fullname: 'amol', age: 23, langauge: 'Marathi' }

// let mayuri=new person("mayuri",24,"Hindi")
// console.log(mayuri) //{ fullname: 'mayuri', age: 24, langauge: 'Hindi' }

//=====================================================================================================
//=====================================================================================================
//Problem =>I have to create object as per user input

// class person {
//     constructor(fullname, age, langauge) {
//         this.fullname = fullname
//         this.age = age
//         this.langauge = langauge

//     }
// }

// let human = []

// let objectNum = prompt("Please enter the number of object u have to create")

// for (let i = 0; i < objectNum; i++) {
//     let age = prompt("Please Enter the age")
//     let firstName = prompt("Please Enter the firstname ")
//     let langauge = prompt("Please Enter the langauge")
//     let obj = new person(age, firstName, langauge)
//     human.push(obj)

// }

// human.forEach(function (el) {

//     console.log(el)
    //this not work as this format is for map
    // for(let [key,value] of el.entries()){
    //     console.log(key,value)

    //firstway of object loop
    // for (let keys in el) {
    //     console.log(keys,el[keys])
    // }

    //Second way of object loop
//     for (let [keys,value] of Object.entries(el)) {
//         console.log(keys,value)
//     }
// })

///////////////////////////////========================================/////////////////////////////

//***************************3. Setting object property by using function*************************/

class person{

    SetAge(age){
        this.age=age
    }
    SetRollnumber(roll){
        this.rollno=roll
    }

    getAge(){
        console.log(this.age)
    }

    getRollno(){
        console.log(this.rollno)
    }
}

let amol=new person()
amol.SetAge(23)
amol.getAge()

amol.SetRollnumber(1008)
amol.getRollno()

