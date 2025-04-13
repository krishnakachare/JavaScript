// constructor function = used as blueprints for creating objects with similler properties and methods. They are invoked using the new keyword to create instances of objects

function person (name, place){
    this.name = name;
    this.place = place;
};

let kk = new person("Krishna","pune");
console.log(kk.name)  // krishna
console.log(kk.place)  // pune