//callback Function
// const add = (x, y)=> x + y;
// const sub = (x, y)=> x - y;

// function display(x, y, operation) {
//     var result = operation(x, y);
//     console.log(result);
// }
// display(10, 5, add)
// display(10, 5, sub)

//Higer-order Function
// function createAdder(number){
//     return function(value){
//         return value + number;
//     }
// }

// const addFive = createAdder(5);
// console.log(addFive(2))

//---------------------------Promise

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const num = Math.floor(Math.random() * 10);

//         if(num<=5){
//             resolve(`Success! Number:${num}`)
//         }
//         else{
//             reject(`Error! Number:${num}`)
//         }
//     },1000)
// }).then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.error(error);
// }) 

//----------------------Classes and objects

// s

// const car1 = new car("BMW", 2025);
// const car2 = new car("McLaren", 2026);
// const car3 = new car("GTR34", 1973);

// console.log(car1.model);
// car1.start()
// console.log(car2.model);
// car2.start()
// console.log(car3.model);
// car3.start()
//-------------------------------------------

// let x = 10;
// const y = 5;

// if (x > y) {
//   let z = x + y;
//   console.log(z);
// } else {
//   let z = x - y;
//   console.log(z);
// }

// console.log(z);
//----------------------------------------------------------------------

// function greet() {
//     message = "Hello, World!";
//     console.log(message);
//     var message;
//   }
  
//   greet();
//   console.log(message);

//----------------------------------------------------------------------

// function addToList(item, list) {
//     list.push(item);
//     list = ["apple", "banana", "cherry"];
//   }
  
//   const myList = ["orange"];
//   addToList("grape", myList);
  
//   console.log(myList);

// function increaseCounter() {
//     let counter = 0;
  
//     function increment() {
//       counter++;
//       console.log(counter);
//     }
  
//     return increment;
//   }
  
//   const myCounter = increaseCounter();
  
//   myCounter(); // Output: ?
//   myCounter(); // Output: ?
//   myCounter(); // Output: ?
//-------------------------------------------------------------

// var x = 5;

// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// var closure = outer();
// closure(); // Output: ?

//-------------------------------------------------------------
var person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// var greetFunction = person.greet;
// var greetFunction = person.greet.bind(person);
// greetFunction(); // Output: Hello, my name is undefined and I am undefined years old.

//When you assign a method from an object to a variable, you're essentially detaching that method from its original object and creating a standalone function. This has implications for how the this keyword works when that function is invoked.
//--------------- var greetFunction = person.greet;

//Here, you're assigning the greet method from the person object to the greetFunction variable. Now, greetFunction is a reference to the function stored in the greet method, but it's not tied to the person object anymore.
//-----------------greetFunction(); 

//The greetFunction() is invoked as a standalone function. At this point, the this keyword inside the greet method loses its context. Normally, when greet is called as person.greet(), this refers to the person object. However, when detached and called as greetFunction(), this doesn't refer to any specific object. It will typically refer to the global object (window in a browser environment), or undefined in strict mode.Because this no longer refers to the person object, this.name and this.age inside the greet function are evaluated to undefined, resulting in the output:
