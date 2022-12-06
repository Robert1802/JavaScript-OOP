// Encapsulation

/*
Encapsulation is the process of hiding and securing the properties of objects.
Direct access to encapsulated properties is not possible and we have to provide other mechanisms to operate/read that data.
Typically, this is done by making class variable properties private and providing public class methods to access necessary data.
*/

// -------------- Using Methods -------------- 

function Animal(val){
    var name = val;
    var publicApi = {
        setName: function (val){
            name = val;
        },
        getName: function (){
            return name;
        }
    }
    
    return publicApi;
}

var animal = new Animal("DOG");
animal.setName("CAT");

console.log(animal.getName()); // CAT
console.log(animal.name); // undefined

// The name property of Animal isn’t directly accessible but only via publicApi methods.
// This is because we are returning publicApi object that doesn’t have a name property.
// Its properties(setName and getName) utilize name property from its lexical scope.

// -------------- Using Private Class -------------- 

// Via class, this can be done by making class variables private using # before the name of the variable

class AnimalPrivate{
    #name;
    constructor(name){
        this.#name = name;
    }
    
    setName(val){
        this.#name = val;
    }
    
    getName(){
        return this.#name;
    }
}

var animal = new AnimalPrivate("DOG");
animal.setName("CAT");

console.log(animal.getName()); // CAT
console.log(animal.name); // undefined
