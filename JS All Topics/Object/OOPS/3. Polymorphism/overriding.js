/* 
# Polymorphism :
  1. Overloading :
   same class , same method name (same declaration), different signature(different defination).

  2. Overriding :
    different class , same method name (different declaration), same signature(same defination).
    Existing functionality override
    
  # Signature : type of arguments, no of arguments, order of arguments.

*/



class WorldBank {
    loan() {
        console.log("I am from worldbank loan")
    }
    save() {
        console.log("I am from worldbank save")
    }
}
class SBI extends WorldBank {
    loan() {
        console.log("I am from sbi loan")
        super.loan()
    }
    save() {
        console.log("I am from sbi save")
        super.loan()
    }
}

let sbi = new SBI()
sbi.loan()
sbi.save()

//---------------------------------------------------


// class World {
//     saving() {
//         console.log('saving method worldbank')
//     }
//     loan() {
//         console.log('loan method world bank')
//     }
//     bank() {
//         console.log('Not a cryto currency')
//     }
// }

// class SBI extends World {
//     saving() {
//         console.log('saving method sbi')
//     }
//     loan() {
//         console.log('loan method sbi')
//     }
//     sbi() {
//         console.log('old bank in india')
//     }
// }

// sbi = new SBI()
// sbi.saving()
// sbi.loan()
// sbi.bank()
// sbi.sbi()