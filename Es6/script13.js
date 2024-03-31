

// /////-----------------

// // using function costructutor 

// // Define a car 

// // The car should have two properties make and speed

// // Implement method which will increase the speed by 10  acclerate

// // Implement the brake method which will decrease the speed by five

// // create two objects and call acclerate and brake method and print the updated speed


// const Car = function (speed, make) {
//     this.speed = speed;
//     this.make = make;

// }
// Car.prototype.acclerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at the speed ${this.speed}`)
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at the speed ${this.speed}`)
// }

// const bmw = new Car(0, 'BMW')
// bmw.acclerate() // 10
// bmw.brake()// 5

// const audi = new Car(0, 'Audi')
// audi.acclerate() // 10
// audi.brake() // 5


// // ES6 classes
// // deal -- deal -- deal num --- excecute

// // const Person = class {

// // }


// // Instance variable set 
 
// // 1)  Outside the class 
// // 2)  Using setter and getter methods 
// // 3)  Using constructor

// instance method proto_type 

// static - proto_type constructor 


class Person2 {


    // class level variables  static variables 
    //  can be called on the class name 

    static namey = "unknow";
    static fullName = "jinendra"; 
    roll = "19"

    constructor(fullName, birthYear) {
        // Instance variables
        // Object create , intialization , method  ....
        this.fullName = fullName;
        this.birthdayYear = birthYear;
    }
    // Instance methods
    // Instance Methods will be added to .prototype property
    calAge() {

        console.log(2021 - this.birthdayYear);
    }

    greeting(){
        console.log(`Welcome ${this.fullName}`);
    }


    set setfullName(name){
        this.fullName = name;
        console.log(` ${this.fullName} is my fullName`);

    }

    get getFullName(){
        return `${this.fullName}`
    }
    
    // static method
    static info(){
        console.log(this.namey)
        console.log(this.fullName)
    }

}

let chinmay = new Person2('Chinmay Deshpande',1990) // calling function construtor
console.log(chinmay)
Person2.info()
console.log(chinmay.__proto__ === Person2.prototype) // checks absolute value and type 

// classes are not hoisted  


// var x ;
// console.log(x) // umdefined
// x = 10
// console.log(x)

// console.log(x) // 
// let x = 10


// add()
// function add(){
//     console.log(7+7)
// }


// add()
// var add =function add(){
//     console.log(7+7)
// }

//

const Account = class{

    holder = "chinmay";
    transaction = [100,23,45,567,88,999,34,45,7,8,8999,44]

    // reduce
    // transaction > 500 filter 
    // tax for 15  map
    get latest(){
        return this.transaction[this.transaction.length-1]
    }

    set latTransaction(tran){
        this.transaction.push(tran)
    }

    get latestFive(){


        count = 0
        for(let i =this.transaction.length - 1 ; i > 0 ; i--){
            if (count === 5){
                break
            }
            console.log(this.transaction[i])
            count += 1
            

        }


    }




}




































































