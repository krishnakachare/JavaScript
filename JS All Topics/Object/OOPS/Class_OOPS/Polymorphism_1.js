//Inheritance

//Two way to declared =>with using constructor & without using constructor
//1. without constuctor

// class Grandfather {
//     constructor(firstName, lastName, bal) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.bal = bal
//     }
//     display() {
//         console.log(this.firstName, this.lastName) //here method name is same
//     }
// }

// class Father extends Grandfather {
//     display() {
//         console.log("Hello") //here also method name is same
//     }
// display(){
//     console.log(this.firstName, this.lastName)
// }

// }

// // let ganesha=new Father() //in other pgming langauge if we not passed constructor that time pgm gives error but in javascript as we not passed the value it take undefined
// // console.log(ganesha)

// let ganesha = new Father("Ganesh", "Bhalerao", 10000) //{ firstName: 'Ganesh', lastName: 'Bhalerao', bal: 10000 }
// console.log(ganesha)

// ganesha.display() //Hello //***As we are using inheritance =>If there is Different class,Same signature i.e.argument and Same method name then "METHOD OVERRIDDING" will happence ***/
// // //so as above display is present in grandfather as well as in father but it takes latest and give output as "Hello"

//*****************************************************************************************************************/

//2. With constructor
class Grandfather {
    constructor(name, lastname, age) {
        this.name = name
        this.lastname = lastname
        this.age = age
    }
    display() {
        console.log(this.name, this.lastname)
    }
}

class Father extends Grandfather {
    constructor(name, lastname, age, salary) {
        super(name, lastname, age)
        this.salary = salary
    }
    display() {
        console.log(this.age, this.lastname)
        super.display() //SOLUTION
    }

    // add() {    //****same class ,same method method name and different signature called as "MOTHOD OVERLOADING"*****//
    //     console.log('Hello')
    // }

    // add(message) {  //****same class ,same method method name and different signature called as "MOTHOD OVERLOADING"*****//
    //     console.log(message)
    // }

    //Solution of "method overloading"
    //1 st method overloading examples
    // add(a, b, c) {

    //     if (a != undefined && b != undefined && c != undefined) {
    //         return a + b + c
    //     }

    //     else if (a != undefined && b != undefined) {
    //         return a + b
    //     }
    //     else {
    //         console.log('Incorrect input')
    //     }
    // }

    //By using switch Case
    static add(a, b, c) {
        switch (arguments.length) {
            case 3:
                console.log(a + b + c)
                break;

            case 2:
                console.log(a + b)
                break;

            default:
                console.log("Invalid Input")
                break;
        }
    }

    //2nd method overloading examples
    iphonesVersion(name) {
        switch (name) {
            case "iPhone 12":
                console.log('Iphone12 result')
                break;

            case "iPhone 12 pro":
                console.log('Iphone 12 pro result')
                break;

            case "iPhone":
                console.log('Iphone result')
                break;

            default:
                break;
        }

    }
}

//===================================================================================================

let ganesha = new Father("ganesha", "rao", 40, 50000)
// ganesha.display()
// ganesha.add() //here i want to call add() mehod but i get "undefined" becasuse i take latest method and in latest method it want argument
// ganesha.add("mayu")

//For if-else
// console.log(ganesha.add(1,2,3))
// console.log(ganesha.add(1,2))
// ganesha.add()

//For Switch case (add)
// Father.add(1, 2, 3)
// Father.add(1, 2)
// Father.add()

//For switch case (iPhonesVersion)
ganesha.iphonesVersion('iPhone 12')
ganesha.iphonesVersion('iPhone 12 pro')
ganesha.iphonesVersion('iPhone')


//NOTE: When we are used "static" infront of any method then we have to call method on class only instead of that object.(it not add in prototype so we cant call it on object)





































