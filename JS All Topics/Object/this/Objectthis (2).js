
// let objectA={
//     age:10,
//     rollnum:30
// }
// console.log(objectA.age)
// console.log(objectA['age'])


// //function declaration
// function add(){
// console.log(8+9)
// }
// add()

// //function expression
// let add1=function(a){
//     console.log(8+9)
// }
// add1()

// //arrow function
// let add2=()=>{
//     console.log(9+8)
// }
// add2()

// let chinmay={
//     'fullname':"chinmay",
//     'age':30,
//     'talk':function(){
//         console.log('hello'+this.fullname)
//     }
// }
// chinmay.talk()
// console.log(chinmay.age)

// let amol={
//     'fullname':"amol",
//     'age':39,
//     'talk':function(){
//         console.log('hello'+this.fullname)
//     }
// }
// amol.talk()


//========================================================
//Program1
// let x=10
// function add0(){
//     x=30
//     console.log(x) //30
//     x=40
//     console.log(x) //40
// }
// console.log(x) //10
// add0()

//diff between let const var

//Program2
// var x1=10
// console.log(x1)
// {
//     console.log(x1)
// }

//Progarm 3
//variable defined with let keyword having block scope
// {
//     let x=10
//     console.log(x)
// }
// console.log(x) //x is not define

//Program 4
// {
//     const x2=10
//     console.log(x2)
// }
//console.log(x2)

//program 5

//Let and const havimg the block scope but var having function scope

// let d=10
// {
//     d=30
//     console.log(d)
// }
// console.log(d)

//Program 6
// let d=10
// {
// let d=30
// console.log(d)
// }
// console.log(d)

//Program 7
// var f=10
// function add(){
//     var f=30
//     console.log(f)
// }
// console.log(f)
// add()

//Program8

// let d=400
// var f=10
// function add(){
//     let d=30
//     f=30
//     console.log(f)//30
//     {
//         let d=45
//         console.log(d)//45
//     }
//     d=70
//     {
//         console.log(d)//70
//     }
// }
// console.log(f)//10
// add() 
// console.log(d)//400

console.log("============================Next day=========================")

// let counter={
// count:0,
// next:function(){
//     //console.log(this)
//     return this.count=this.count+1
//     //return this.count +=1
//     //return ++ this.count
// }
// }
// let r1=counter.next()
// console.log(r1)

// var globle="mayuri"
// console.log(window.globle)

// //alert("hello")
// //window.alert("hello")

// function movie(){
// console.log(this==window)
// }
// movie()

// let bike = {
//     brand: "KTM",
//     getBrand: function () {
//         return this.brand
//     }
// }
// let m1 = bike.getBrand()
// console.log(m1)

// let a=function(){
//     console.log(a+b)
// }
// console.log(a) // apply print function
// a() // call function

//bind() method=>s   yntax    bind(objectname)

//if we call method without() braket then it store the value f function and if we stire this value in any variable then refrerence of this get switch and we get undefined so we bind the object to that method so need bind method
// let r = bike.getBrand.bind(bike)
// console.log(r())

// let bike2 = {
//     brand: "KTM2"
// }
// let m2 = bike.getBrand.bind(bike2)
// console.log(m2())

//why the bind method used =>we have one object in whhich we declared methos and need to used that method in multiple object the we used bind method it reduce everytime method declaration in every object

//call() and apply()method

//let brand="defalutbrand"

// function getComapany(prefix) {
//     brand = "defalutbrand"
//     console.log(prefix + this.brand)
// }
// getComapany("Hi this is me")

// let audi = {
//     brand: "Audi"
// }

// let BMW = {
//     brand: "BMW"
// }
// getComapany.call(audi, "New To")
// getComapany.call(BMW,"New to my car")


//Apply method
// getComapany.apply(audi,["New to"])
// getComapany.apply(BMW,["New to"])


console.log("============================UpNext Day=============================")
//prob1
// let person = {
//     age: 12,
//     fullname: "chinmay",
//     display: function () {
//         return [12, 13]
//     }
// }
// let [a, b] = person.display()
// console.log(a)
// console.log(b)

//prob2
// let add=function(){
//     return 10+12
// }
// let a=function(){
//     return 10+12
// }
// function addition(a){
//     return a
// }

// let f=addition(add)
// let adda=f()
// console.log(adda)

//prob3

// let person = {
//     age: 12,
//     fullname: "chinmay",
//     display: function () {
//         return [12, 13]
//     }
// }
// let [a, b] = person.display()
// console.log(a)
// console.log(b)

// let v=person.display
// console.log(v)

//prob4
// var age = 10
// let person = {
//     age: 12,
//     fullname: "chinmay",
//     display: function () {
//         return this.age
//     }
// }
// let p1 = person.display()
// console.log(p1) //12

// let p2 = person.display  //.bind(person)
// console.log(p2()) //10

// let p3 = person.display.bind(person)
// console.log(p3()) //12

// let person2 = {
//     age: 23,
//     fullname: "chinmay rao deshpande",
// }

// let p4 = person.display.bind(person2)
// console.log(p4())


//Call and Apply
//prob5
// let v=function(){
//     return this.age
// }

// let person1 = {
//     age: 23,
//     fullname: "akash rao deshpande",
// }

// let person2 = {
//     age: 23,
//     fullname: "chinmay rao deshpande",
// }
// console.log(v.call(person1))
// console.log(v.call(person2))

//prob6
// let r=function(greet){
//     return greet + this.fullname
// }
// let person1 = {
//     age: 23,
//     fullname: "akash rao deshpande",
// }

// let person2 = {
//     age: 23,
//     fullname: "chinmay rao deshpande",
// }
// console.log(r.call(person1,"good maorning"))
// console.log(r.call(person2,"good evening"))

//prob7

// let r=function(arr){
//     return (arr[0] + this.fullname+arr[1]+this.fullname)
// }
// arr=["good morning","good eve"]
// let person1 = {
//     age: 23,
//     fullname: "akash rao deshpande",
// }

// let person2 = {
//     age: 23,
//     fullname: "chinmay rao deshpande",
// }
// let mm=r.apply(person1,[...[arr]])
// let rr=r.apply(person2,[...[arr]])
// console.log(mm)
// console.log(rr)

//Prob8
//var nam="mayu"
// let g={
//     nam:"chinmay",
//     age:23,
//     display:function(){
//         console.log("welcome"+this.nam)
//         function greet(){
//             console.log("welcome"+this.nam)
//         }
//         greet()
//     }


// }
// g.display()

//prob 9
//var name="mayu"
// let g={
//     nam:"chinmay",
//     age:23,
//     display:function(){
//         console.log("welcome"+this.nam)
//         let greet=()=>{
//             console.log("welcome"+this.nam)
//         }
//         greet()
//     }

// }
// g.display()

//prob 10
//below pgm is not work
// var rr="mayuri"
// let g={
//     nam:"chinmay",
//     age:23,
//     display:()=>{
//         console.log("welcome"+this.nam)
//         let greet=()=>{
//             console.log("welcome"+this.nam)
//         }
//         greet()
//     }


// }
// g.display()






