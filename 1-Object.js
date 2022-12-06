// Object

/*
    An Object is a unique entity that contains properties and methods.
    For example “car” is a real life Object, which has some characteristics like color, type, model, horsepower and performs certain actions like drive.
    The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods.
    An Object is an instance of a class.
    Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string.
    A Method in javascript is a property of an object whose value is a function.
*/

// Object can be created in two ways in JavaScript: 

// -------------- Using an Object Literal --------------  

// Defining Object
let person = {
    // Properties
    firstName: 'Roberto',
    lastName: 'Moura',

    // Method
    getFunction: function() {
        return (`The name of the person is ${person.firstName} ${person.lastName}`)
    },

    // Object within Object
    phoneNumber: {
        ddd: '11',
        number: '1234-5678'
    }
}

console.log(person.getFunction()); // The name of the person is Roberto Moura
console.log(person.phoneNumber.ddd + person.phoneNumber.number); // 111234-5678

// -------------- Using an Object Construction --------------  

// Using a Constructor
function personMaker(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let person1 = new personMaker('John', 'Doe'); // John
let person2 = new personMaker('Second', 'Person')

console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`); // Second Person

// -------------- Using Factory Pattern --------------  

// Using Factory Pattern
function personFactory(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName,
    }
}

let person3 = new personFactory('John', 'Doe');
let person4 = new personFactory('Second', 'Person')

console.log(person3.firstName); // John
console.log(`${person4.firstName} ${person4.lastName}`); // Second Person

// -------------- Object.create() method --------------  

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 

// Object.create() example a simple object with some properties and a method
const coder = {
    isStudying : true,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}.`)
    }
}

// Object.create() method
const me = Object.create(coder);
 
// "name" is a property set on "me", but not on "coder"
me.name = 'Roberto';
 
// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction(); // My name is Roberto. Am I studying? true.
