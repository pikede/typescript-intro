// function
const sum = (a : number, b : number) => {
    return a + b;
}

const answer = sum(4, 5);

console.log(answer)

// boolean
let isCool: boolean = true

// number
let age: number = 56;

// string
let eyeColor : string = 'brown';
let favouriteQuote: string = `I'm not old, i'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard : object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined
let noo: null = null

// Tuple
let basket : [string, number];
basket = ['basketball', 5]

// Enum
enum Size {Small = 1, Medium = 2, Large = 3};
let sizeName : string | undefined = Size[1];
console.log(sizeName)

let sizeOrdinal : number = Size.Large;
console.log(sizeOrdinal)


// Any - !!!!!!!!!!! BE CAEFUL
let whatever: any = 'aghhhhhhhh noooooooo!!!';
whatever = basket

// void 
let sing = (): void => {
    console.log('lalalalalla')    
}

let singStringReturned = (): string => {
    return'lalalalalla'
}

// never 
let error = (): never => {    
    throw Error('ooops');
}

// interface -> create a new name usable everywhere MORE RECOMMENDED
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT')
}
// same as 
let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT')
}

// type similar to interfaces, doesn't create a new name usable everywhere. can't be extended or implemented
type RobotArmyT =  {
    count: number,
    type: string,
    magic: string
}

// Type Assertion :start region 
interface CatArmy {
    count: number,
    type: string,
    magic?: string  // magic is optional 
}

let dog = {} as CatArmy
dog.count

let catArmy = (robots: CatArmy) => {
    console.log('FIGHT')
}

catArmy({count: 1, type: 'tiger'}) // note magic isn't passed as it's optional
// Type Assertion :end region 

// Function
let fightRobotArmy3 = (robots: {count: number, type: string, magic: string}) : number => {
    console.log('FIGHT')
    return 5
}

// Classes
class Animal {
    sing: string = 'alalalala'
    private move: string =''
    
    constructor(sound: string){
        this.sing = sound;
    }

    greet() : string{
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAAAAAR')
lion.greet()
// lion.move can't use as this is private

// Union literal is '|' with multiple types on either side
let confused: string | number | boolean = true // it can be of any of the 3 provided types

let x = 4
// x = 'hello' can't reassign as x is set as number type