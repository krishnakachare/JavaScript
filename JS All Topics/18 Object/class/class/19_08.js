// class / object have properties and methods
// we can use/change function when we know datatype
// if there is no constructor at child level, by default parent constructor will be called and we need to pass arguments becoz 'extends' (inheritance)
// but when child also have constructor then its (child) constructor first line must be call its father constructor by using --  'super (  )'
// here super means parent class


// EXAMPLE = child not have its own constructor  ( then by default its parent constructor call when we pass arguments at time creating new object)

// class grandfather {

//     constructor(gname,lastname,age) {

//         this.gfname = gname
//         this.gflastname = lastname
//         this.gfage = age
//     }

//     displayfullname(){
//        console.log(`my full name is ${this.gfname} ${this.gflastname} and my age is ${this.gfage}`)
//     }

// }

// class father extends grandfather {

// }

// here child not have constructor then by default its parents constructor will call bcoz 'extends' (inheritance)
// And it can access all parent properties and methods

// Example =

// let gopal = new father ('shankar','kachare',89)
// grandfather constructor parameters used
// from which class used to create new object
// new object create


//console.log(father)                  // [class father extends grandfather]
//console.log(grandfather)             // [class grandfather]
//console.log(gopal)                   // father { gfname: 'shankar', gflastname: 'kachare', gfage: 89 }

// console.log(gopal.gfname)              // shankar
// console.log(gopal.gflastname)          // kachare
// console.log(gopal.gfage)               // 89

//gopal.displayfullname()           // my full name is shankar kachare and my age is 89  



// EXAMPLE = child also have its own constructor (then in child constructor have all its parents parameters and its constructor first line must be call its parent constructor parameters by help of 'super ( )')

class grandfather {

    constructor(gname, glastname, gage) {

        this.gfname = gname
        this.gflastname = glastname
        this.gfage = gage
    }

    displayfullname() {
        console.log(`my full name is ${this.gfname} ${this.gflastname} and my age is ${this.gfage}`)
    }
}
class father extends grandfather {
    constructor(gname, glastname, gage, fname, flastname, fage) {
        super(gname, glastname, gage)

        this.fname = fname
        this.flastname = flastname
        this.fage = fage
    }
    displayfullname() {
        console.log(`my full name is ${this.fname} ${this.flastname} and my age is ${this.fage}`)
        super.displayfullname()
    }

    
}

class son extends father {
    constructor(gname, glastname, gage, fname, flastname, fage, sname, slastname, sage) {
        super(gname, glastname, gage, fname, flastname, fage)

        this.sname = sname
        this.slastname = slastname
        this.sage = sage
    }
    displayfullname() {
        console.log(`my full name is ${this.sname} ${this.slastname} and my age is ${this.sage}`)
        super.displayfullname()
    }
}



let krishna = new son ('shankar','kachare',86,'gopal','kachare',54,'krishna','kachare',25)
//console.log(krishna) 

// son {
//     gfname: 'shankar',
//     gflastname: 'kachare',
//     gfage: 86,
//     fname: 'gopal',
//     flastname: 'kachare',
//     fage: 54,
//     sname: 'krishna',
//     slastname: 'kachare',
//     sage: 25
//   }

krishna.displayfullname()                                       // my full name is krishna kachare and my age is 25
                                                                // my full name is gopal kachare and my age is 54  
                                                                // my full name is shankar kachare and my age is 86    




















