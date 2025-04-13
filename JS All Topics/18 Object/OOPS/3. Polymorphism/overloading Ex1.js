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

    // "MOTHOD OVERLOADING" :    
    // add() {  
    //     console.log('Hello')
    // }

    // add(message) {  
    //     console.log(message)
    // }

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

let ganesha = new Father("ganesha", "rao", 40, 50000)
// ganesha.display()
// ganesha.add() //here i want to call add() mehod but i get "undefined" becasuse i take latest method and in latest method it want argument
// ganesha.add("mayu")

// For if-else:
// console.log(ganesha.add(1,2,3))
// console.log(ganesha.add(1,2))
// ganesha.add()

// For Switch case (add):
// Father.add(1, 2, 3)
// Father.add(1, 2)
// Father.add()

//For switch case (iPhonesVersion):
ganesha.iphonesVersion('iPhone 12')
ganesha.iphonesVersion('iPhone 12 pro')
ganesha.iphonesVersion('iPhone')


//NOTE: When we are used "static" infront of any method then we have to call method on class only instead of that object.(it not add in prototype so we cant call it on object)
