

class Addition {
    // add(x,y){
    //     console.log(x+y)
    // }
    // add(x,y,z){
    //     console.log(x+y+z)
    // }

    // add(x,y,z,q){
    //     console.log(x+y+z+q)
    // }


    addition(x,y,z,a){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if(x != undefined && y != undefined){
            console.log(x+y)
        }
    }

}

let a = new Addition()
a.addition(12,34,5,6)
a.addition(12,34,44)
a.addition(12,34)

class WorldBank{
    loan(){
        console.log("I am from worldbank loan")
    }
    save(){
        console.log("I am from worldbank save")
    }
}
class SBI extends WorldBank {
    loan(){
        console.log("I am from sbi loan")
        super.loan()
    }
    save(){
        console.log("I am from sbi save")
        super.loan()
    }
}

let sbi = new SBI()
sbi.loan()
sbi.save()