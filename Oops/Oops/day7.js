// Amol 
// Manoj 
// Vijay
// Saurabh
// Aniket
// Inheritance

// Es6 class

// class Father {
//     firstName = "shirish";
//     lastName = "deshpande";
//     displayName(){
//         console.log(this.firstName  + this.lastName)
//     }
// }

// class Son extends Father{
//     sname = "chinmay"
//     displaySname(){
//         console.log(this.sname + this.lastName)
//     }
// }

// let chinmay = new Son()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.sname)

// chinmay.displayName()
// chinmay.displaySname()

// let shirish = new Father()
// shirish.displayName()


// program 


// class FatherB {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayFName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class SonB extends FatherB {
//     sname = "chinmay"
//     displaySName(){
//         console.log(this.sname + this.lastName)
//     }
// }

// let chinmayB = new SonB("shirish","deshpande")

// console.log(chinmayB.firstName)
// console.log(chinmayB.lastName)
// console.log(chinmayB.sname)
// chinmayB.displayFName()
// chinmayB.sname()


// let shirish = new FatherB("shirish","deshpande")
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// shirish.displayFName()

// program 3


class FatherC {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayFName(){
        console.log(this.firstName + this.lastName)
    }

}

class SonC extends FatherC {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}
let chinmayC = new SonC("shirish","deshpande","chinmay")
console.log(chinmayC.firstName)
console.log(chinmayC.lastName)
console.log(chinmayC.sname)
chinmayC.displayFName()
chinmayC.displaySName()

// multi-level 


class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

class FatherD extends  GrandFather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.ffirstName = ffn
        
    }

    displayFName(){
        console.log(this.ffirstName + this.lastName)
    }

}

class SonD extends FatherD {
    constructor(fn,ln,ffn,sname){
        super(fn,ln,ffn)
        this.sname = sname
    }

    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmayD = new SonD("manohar","deshpande","shirish","chinmay")

console.log(chinmayD.ffirstName)
console.log(chinmayD.lastName)
console.log(chinmayD.firstName)
console.log(chinmayD.sname)

chinmay.displayFName()
chinmay.displaySName()
chinmay.displayGName()
























































































