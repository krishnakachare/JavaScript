// Grandfather , Father , Son :
class Grandfather{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    display(){
        console.log(this.firstName , this.lastName )
    }
}

class Father extends Grandfather {
    constructor(GfirstName,lastName,FfirstName){
        super(GfirstName,lastName)
        this.FfirstName = FfirstName
    }
    display(){
        console.log(this.FfirstName , this.lastName )
        super.display()
    }
}

class Son extends Father {
    constructor(GfirstName,lastName,FfirstName,SfirstName){
        super(GfirstName,lastName,FfirstName)
        this.SfirstName = SfirstName
        
    }
    display(){
        console.log(this.SfirstName , this.lastName )
        super.display()
    }
}

let krishna = new Son("Shankar","Kachare","Gopal","Krishna");
krishna.display();