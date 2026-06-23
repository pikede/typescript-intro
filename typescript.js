"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function
const sum = (a, b) => {
    return a + b;
};
const answer = sum(4, 5);
console.log(answer);
// boolean
let isCool = true;
// number
let age = 56;
// string
let eyeColor = 'brown';
let favouriteQuote = `I'm not old, i'm only ${age}`;
// Array
let pets = ['cat', 'dog', 'pig'];
let pets2 = ['lion', 'dragon', 'lizard'];
// Object
let wizard = {
    a: 'John'
};
// null and undefined
let meh = undefined;
let noo = null;
// Tuple
let basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let sizeName = Size[1];
console.log(sizeName);
let sizeOrdinal = Size.Large;
console.log(sizeOrdinal);
// Any - !!!!!!!!!!! BE CAEFUL
let whatever = 'aghhhhhhhh noooooooo!!!';
whatever = basket;
// void 
let sing = () => {
    console.log('lalalalalla');
};
let singStringReturned = () => {
    return 'lalalalalla';
};
// never 
let error = () => {
    throw Error('ooops');
};
let fightRobotArmy = (robots) => {
    console.log('FIGHT');
};
// same as 
let fightRobotArmy2 = (robots) => {
    console.log('FIGHT');
};
let dog = {};
dog.count;
let catArmy = (robots) => {
    console.log('FIGHT');
};
catArmy({ count: 1, type: 'tiger' }); // note magic isn't passed as it's optional
// Type Assertion :end region 
// Function
let fightRobotArmy3 = (robots) => {
    console.log('FIGHT');
    return 5;
};
// Classes
class Animal {
    sing = 'alalalala';
    move = '';
    constructor(sound) {
        this.sing = sound;
    }
    greet() {
        return `Hello ${this.sing}`;
    }
}
let lion = new Animal('RAAAAAR');
lion.greet();
// lion.move can't use as this is private
// Union literal is '|' with multiple types on either side
let confused = true; // it can be of any of the 3 provided types
let x = 4;
// x = 'hello' can't reassign as x is set as number type
//# sourceMappingURL=typescript.js.map