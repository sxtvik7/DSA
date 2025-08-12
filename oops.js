console.log("Active File: oops.js");

/* 
Prototypal behavior in JavaScript
When you try to use a property or method on an object, and it’s not found on the object itself, 
JavaScript automatically looks for it in that object’s prototype, then in the prototype’s prototype, 
and so on — this is called the prototype chain.

it provides us this, new keyword  and classes  
*/

const animal = {
  eat() {
    console.log("Eating");
  }
};

const dog = Object.create(animal);

dog.bark = function(){
    console.log("woof!");
}   

dog.bark();
dog.eat();