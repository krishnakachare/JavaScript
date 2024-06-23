
//ESC class

class Grandfather {
    constructor(fullName, lastName) {
        this.fullName = fullName
        this.lastName = lastName
    }
    display() {
        console.log(this.fullName)
    }
}

class Father extends Grandfather {
    constructor(fullName, lastName, salary) {
        super(fullName, lastName)
        this.salary = salary
    }

    display() {
        console.log(this.lastName)
        super.display()

    }

    //OVERLOADING

    displayName(firstName, lastName, option) {

        switch (option) {
            case "pune":
                console.log(`My name is ${firstName} ${lastName} I belongs to ${option} `)
                break;

            case "nagpur":
                console.log(`My name is ${firstName} ${lastName} I belongs to ${option} `)
                break;

            case "nashik":
                console.log(`My name is ${firstName} ${lastName} I belongs to ${option} `)
                break;

            default:
                console.log("Please choose city")
                break;
        }

    }
}


let ganesha = new Father('Ganesh', 'bhalerao', 1000)
ganesha.display()

ganesha.displayName("Mayuri", "Katwe")
ganesha.displayName("amol")
ganesha.displayName("avanti", "rao", "nashik")



//NOTE: Same method name,Different class ,same signature ="METHOD OVERRIDING"

//************************************************************************************* */