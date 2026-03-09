let Collection = class {
    constructor(brnd, owner, abt) {
        this.brand = brnd
        this.owner = owner
        this.about = abt
    }
    printBio() {
        let educt = {
            UG: "BTech Mechanical",
            currentAdress: "Hof,Germany",
            permanantAdress: "Amravati,India",
            PG: "Masters in aeronautics",
            skills: ['designing machines', "TeamPlayer", "FormulaBharat_Racing"]
        }
        console.log("\n", educt)
    }

    set goals(life) {
        this.myGoals = life
    }
}
let dost = new Collection("BMW Bike", "Nik", { ownerName: "Nikhil K", age: 24, workPlace: "Mercedez Benz" })
console.log("\n", dost)

dost.printBio()
dost.myGoals = "Be givers in life."
console.log("\n", dost)

console.log(Collection.prototype === dost.__proto__)
console.log(dost instanceof Collection)
console.log(dost.hasOwnProperty('mygoals'))
console.log(Collection.prototype.hasOwnProperty('skills'))
console.log(dost.hasOwnProperty('brand'))