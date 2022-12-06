// Classes

/*
    Classes are blueprint of an Object.
    A class can have many Objects because class is a template while Object are instances of the class or the concrete implementation. 
    Before we move further into implementation, we should know unlike other Object Oriented Language there are no classes in JavaScript we have only Object.
    To be more precise, JavaScript is a prototype based Object Oriented Language, which means it doesn’t have classes,
    rather it defines behaviors using a constructor function and then reuse it using the prototype. 
    Even the classes provided by ECMA2015 are objects.
*/

// -------------- Defining class using ES6 -------------- 

// Defining class using ES6
class VehicleES {
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
}

// Instantiate object with the help of the constructor
let bike1 = new VehicleES('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new VehicleES('Ninja', 'Kawasaki', '998cc');
 
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails()); // The name of the bike is Hayabusa.

// -------------- Defining class with the Traditional Way -------------- 

// Defining class in a Traditional Way.
function VehicleTraditional(name,maker,engine){
    this.name = name,
    this.maker = maker,
    this.engine = engine
};
 
VehicleTraditional.prototype.getDetails = function(){
    return ('The name of the bike is ' + this.name);
}
 
let bike3 = new VehicleTraditional('Hayabusa','Suzuki','1340cc');
let bike4 = new VehicleTraditional('Ninja','Kawasaki','998cc');
 
console.log(bike3.name); // Hayabusa
console.log(bike4.maker); // Kawasaki
console.log(bike3.getDetails()); // The name of the bike is Hayabusa