// Abstraction

/*
    Abstraction means hiding the implementation details and showing only behavior.
    It’s done on the design level as opposed to encapsulation which is implemented at the application level.
    With abstraction, only essential details are shown to the user.
*/

// -------------- Using Methods -------------- 

// Notice how getSalary method is updating salary in the backend that the end user wouldn’t know.
// In a real application, this bonus can be fetched from some database and added to the base salary.

class Employee{
    #name;
    #baseSalary;
    
    setName(val){
        this.#name = val;
    }
    setBaseSalary(val){
        this.#baseSalary = val;
    }
    
    getName(){
        return this.#name;
    }
    
    getSalary(){
        let bonus = 1000;
        return this.#baseSalary + bonus;
    }
}

var employee = new Employee();
employee.setName("abc");
employee.setBaseSalary(100);

console.log(employee.getName()); // abc
console.log(employee.getSalary()); // 1100

// -------------- Using Function -------------- 

function EmployeeFunction(){
    let name;
    let baseSalary;
    
    var publicApi = {};
    
    publicApi.setName = function (val){
        name = val;
    }
    publicApi.setBaseSalary = function (val){
        baseSalary = val;
    }
    
    publicApi.getName = function (){
        return name;
    }
    
    publicApi.getSalary = function (){
        let bonus = 1000;
        return baseSalary + bonus;
    }
    return publicApi;
}
var emp = new EmployeeFunction();
emp.setName("abc");
emp.setBaseSalary(100);

console.log(emp.getName()); // abc
console.log(emp.getSalary()); // 1100
console.log(emp.name); // undefined