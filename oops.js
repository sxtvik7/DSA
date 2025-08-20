console.log("Active File: oops.js");

/*
 here inside the user object getUserDetails will try to find userName in upper layers, 
 if this is not used this is what we call the prototypal behaviour in js

 */

// ---------
let userName = "demo" 

function getDetails(){
  console.log(`UserName: ${userName}`);
  // console.log(this)
}


// getDetails()

// This is an object literal with its own data.
// You can create another object (like user2) with the same structure,
// but each one will be a separate instance of Object.

const user = {
userName: "hitesh",
loginCount: 8,
signedIn: true,

getUserDetails: function() {
//console.log("Got user details from database");
// console.log(`Username: ${this.userName}`)
console.log(this)
}
}
console.log(user.userName);
console.log(user.getUserDetails());
// ---------
//--------------------------------------------------

// The new keyword is used with a constructor function or class to create multiple independent instances from the same blueprint.

// Objects created with new (like Promise, Date, Map, Set, or custom classes) 
// produce new instances every time you call them, each with their own data/state.

// example

const p1 = new Promise((resolve) => resolve("done"));
const p2 = new Promise((resolve) => resolve("done"));

// console.log(p1 === p2); // false → different instances 

// Every time you do new Promise(...), you get a fresh Promise object in memory.
// That instance has its own state (pending → fulfilled/rejected).

const d1 = new Date();
const d2 = new Date();

// console.log(d1 === d2); // false → different instances

// Every new Date() call creates a new Date object with its own internal timestamp.
// Even if you call them back-to-back, they’re separate objects.


//--------------------------------------------------

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

// dog.bark();
// dog.eat();