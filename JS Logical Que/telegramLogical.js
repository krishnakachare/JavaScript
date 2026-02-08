const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, curr, idx, arr) => {
        if (idx === arr.length - 1) {
            return (acc + curr) / arr.length;
        }
        return acc + curr;
    }, 0);

console.log(result);

//===================================
const items = ['apple', 'banana', 'cherry', 'date'];

const result = items
    .map(item => item.toUpperCase())
    .filter(item => item.length > 5)
    .reduce((acc, item, index) => {
        return acc + (index === 0 ? '' : '-') + item.slice(0, 3);
    }, '');

console.log(result);

//===================================
let x = 5;

function foo() {
    console.log(x);
    let x = 10;
    console.log(x);
}

foo();

//===================================
const fruits = ['apple', 'banana', 'cherry'];
const newFruits = [...fruits];

newFruits.push('date');

const user = { name: 'Taylor', age: 30 };
const updatedUser = { ...user, age: 31 };

user.city = 'Seattle';

console.log(fruits.length, newFruits.length, user.city, updatedUser.city);

//===================================
function outer() {
    console.log(innerVar);
    console.log(typeof innerFunc);

    var innerVar = 42;

    function innerFunc() {
        return innerVar;
    }

    let anotherVar = 100;
    console.log(typeof anotherVar);
}

outer();

//===================================
function mystery() {
    try {
        console.log('A');
        throw new Error('Oops');
        console.log('B');
    } catch (err) {
        console.log('C');
        return 'D';
    } finally {
        console.log('E');
        return 'F';
    }
    console.log('G');
    return 'H';
}

console.log(mystery());

//===================================
function Vehicle(wheels) {
    this.wheels = wheels;
}

Vehicle.prototype.getWheels = function () {
    return this.wheels;
};

function Car() {
    Vehicle.call(this, 4);
    this.doors = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const myCar = new Car();
console.log(myCar.getWheels(), myCar instanceof Vehicle);

//===================================
function getOrder() {
    console.log('1');

    setTimeout(() => console.log('2'), 0);

    Promise.resolve().then(() => {
        console.log('3');
        Promise.resolve().then(() => console.log('4'));
    });

    Promise.resolve().then(() => console.log('5'));

    console.log('6');
}

getOrder();
//===================================

class LightMachine {
    constructor() {
        this.states = {
            green: { next: 'yellow' },
            yellow: { next: 'red' },
            red: { next: 'green' }
        };
        this.currentState = 'green';
    }

    transition() {
        this.currentState = this.states[this.currentState].next;
        return this.currentState;
    }
}

const lightMachine = new LightMachine();
let result = '';
for (let i = 0; i < 5; i++) {
    result += lightMachine.transition() + ' ';
}
console.log(result.trim());
//===================================

async function processValues() {
    try {
        console.log('Start');
        const a = await Promise.resolve('First');
        console.log(a);
        const b = await Promise.reject('Error');
        console.log(b);
        return 'Done';
    } catch (err) {
        console.log(err);
        return 'Recovered';
    } finally {
        console.log('Finally');
    }
}

processValues().then(result => console.log(result));
//===================================

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .map(n => n * 2)
    .filter(n => n > 5)
    .reduce((acc, n, index) => {
        acc.sum += n;
        acc.indices.push(index);
        return acc;
    }, { sum: 0, indices: [] });

console.log(result.sum);
console.log(result.indices);

//===================================

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .map(x => x * 2)
    .filter(x => x > 5)
    .reduce((acc, x) => {
        acc.push(x.toString());
        return acc;
    }, [])
    .map(x => x + '!')
    .join(' | ');

console.log(result);
console.log(typeof result);

//===================================

const data = {
    name: '',
    age: 0,
    city: null,
    country: undefined,
    isActive: false
};

const getName = () => data.name || 'Unknown';
const getAge = () => data.age ?? 25;
const getCity = () => data.city || 'Default City';
const getCountry = () => data.country ?? 'Default Country';
const getStatus = () => data.isActive || 'inactive';

console.log(${ getName() } - ${ getAge() } - ${ getCity() } - ${ getCountry() } - ${ getStatus() });
//===================================

console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

setTimeout(() => console.log('4'), 0);

Promise.resolve().then(() => {
    console.log('5');
    return Promise.resolve();
}).then(() => console.log('6'));

console.log('7');

//===================================

const obj = { a: 1, b: { c: 2 } };
const frozen = Object.freeze(obj);
frozen.a = 99;
frozen.b.c = 88;
frozen.d = 77;

const sealed = Object.seal({ x: 10, y: 20 });
sealed.x = 30;
sealed.z = 40;
delete sealed.y;

console.log(obj.a, obj.b.c, obj.d);
console.log(sealed.x, sealed.y, sealed.z);
//===================================

const userInput = "<script>alert('xss')</script>";
const sanitized = userInput.replace(/<script[^>]>.?<\/script>/gi, '');

const users = new Map();
users.set('admin', { password: 'secret123', role: 'admin' });
users.set('guest', { password: 'guest', role: 'user' });

function authenticate(username, password) {
    const user = users.get(username);
    return user && user.password === password ? user.role : null;
}

const role1 = authenticate('admin', 'secret123');
const role2 = authenticate('guest', 'wrong');
const role3 = authenticate('hacker', 'secret123');

console.log(sanitized);
console.log(role1, role2, role3);
//===================================

const data = { a: 1, b: 2, c: 3 };
const { a, ...rest } = data;
const newObj = { ...rest, a, d: 4 };

const arr = [1, 2, 3, 4, 5];
const [first, , third, ...remaining] = arr;
const result = [...remaining, third, first];

console.log(newObj);
console.log(result);

//====================================
const multiply = (a) => (b) => (c) => a * b * c;

const step1 = multiply(2);
const step2 = step1(3);
const result1 = step2(4);

const result2 = multiply(2)(3)(4);

const partialMultiply = multiply(5);
const result3 = partialMultiply(2)(3);

const doubler = multiply(2)(1);
const result4 = doubler(7);

console.log(result1, result2, result3, result4);
//===================================

const nums = [1, 2, 3, 4, 5];
const result = nums
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((acc, n) => {
        acc.push(n + 1);
        return acc;
    }, [])
    .slice(1);

console.log(result);
console.log(nums);