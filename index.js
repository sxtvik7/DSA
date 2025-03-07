const { log } = require("console");
const http = require("http");
//console.log(http);

const server = http.createServer((req,res)=>{
    if(req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }

   else if(req.url === "/"){
        res.end("<h1>Home Page</h1>")
    }

   else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>")
    }

    else{
        res.end("<h1>Page Not Found</h1>")
    }
});



server.listen(3000,()=>{
    console.log("server is working");
})

// console.log([1,2,3].map(parseInt));
// console.log(parseInt(11,7));


// console.log([1,2,3].parseInt);


// const data = [1,2,3]
// data[10]= data;
// console.log(data.length);

// console.log(data[10]= data)


// console.log([2,2,0].reduce(Math.pow))


// const len = 4;
// const val = [];
// for (var i=0; i<len; i++);{ 
//     //; is the key
//     val.push(i+1);
// }
// console.log(val);



// console.log(parseInt('2', 3));

// console.log(2 + 2);      //4
// console.log(2 + "2")     //22
// console.log("2" + "2");  //22

// console.log(typeof(2 - "2"))    //0
// console.log("2"  -"2")  //0
// console.log("A" - "A")  //NaN
// console.log(2  - "A")    //NaN


// for(var i=0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },100)
// }

//-------------------------------------------

// function isEven(x){
//     if( x%2===0){
//         return console.log("true")
//     }
//     else{
//         return console.log("false")
//     }
// }
// isEven(4)
//-------------------------------------------

// fruits = [ "apple", "orange", "banana", "grape", "pear"]
// fruits.forEach(element => {
//     console.log(element);
// });

// let java = "JavaScript" 
// console.log(java.length)

// function reverseString(str){
//   return str.split('').reverse('').join('')
// }
// console.log(reverseString("satvik"))

// let strg = ['stand','off']
// console.log(strg.join(''))
//-------------------------------------------

// function outer() {
//     let x = 10;
  
//     function inner() {
//       let y = 5;
//       console.log(x + y);
//     }
  
//     inner();
//   }
  
//   outer();
//-------------------------------------------

// function myFunction() {
//     var a = 5;
  
//     if (true) {
//       console.log(a);
//       var a = 10;
//     }
  
//     console.log(a);
//   }
  
//   myFunction();
//-------------------------------------------

// let x = 5;

// function foo() {
//   x = 10;
// }

// function bar() {
//   let x = 15;
// }

// foo();
// console.log(x);

// bar();
// console.log(x);
//-------------------------------------------

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++)
// console.log(i);

// {
//     setTimeout(function() {
//       console.log('Element: ' + arr[i]);
//     }, 1000);
//   }

//   console.log(arr[5]);
//-------------------------------------------

// const arr = [1,2,3,4,4,4,4,5,6,6,2,7,8,9]
// // const uniqueNumbers = new Set(arr); 
// //this creates an object 

// const uniqueNumbers = Array.from(new Set(arr)); 
// //but creates a new array

// console.log(uniqueNumbers);
//-------------------------------------------

// const myArray = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];  
// const randomElement = myArray[Math.floor(Math.random() * myArray.length)];  
// console.log(randomElement)
//-------------------------------------------
// function outer() {
//     var x = 10;
  
//     function inner() {
//       console.log(x);
//     }
  
//     return inner;
//   }
  
//   var closure = outer();
//   var x = 20;
  
//   closure();
//-------------------------------------------

// function foo(){
//     var a = b = 0
//     a++
//     // console.log(a)
//     return a;
// }
// foo();
// console.log(typeof a);
// console.log(typeof b);
//=============================
// console.log(8+'5');
// console.log("8" + - "5");
//=============================
// var name = "John";

// function greet() {
//   console.log("Hello, " + name + "!");
// }

// function changeName(newName) {
//   name = newName;
// }

// greet();
// changeName("Alice");
// greet();
//=============================

// function multiply(x) {
//     return function(y) {
//       return x * y;
//     };
//   }
  
//   var double = multiply(2);
//   var triple = multiply(3);
  
//   console.log(double(5)); // Output: ?
//   console.log(triple(5)); // Output: ? 
//=============================

// function doSomething() {
//     console.log(this);
//   }
  
//   var obj = {
//     name: "John",
//     method: doSomething
//   };
 
//    obj.method();
//=============================
  
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log("Hello, " + this.name + "!");
// };

// var person1 = new Person("Alice");
// var person2 = new Person("Bob");

// person1.greet();
// person2.greet();
//=============================

//IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT

// var fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//   setTimeout(function() { 
//     console.log(fruits[i]);
//   }, 1000);
// }

//=============================

// function delayMessage(message, delay) {
//     setTimeout(function() {
//       console.log(message);
//     }, delay);
//   }
  
//   delayMessage("Hello1", 3000);

//   delayMessage("World", 1000);

function sumPrimes(num) {

    function isPrim(num) {
      const sqrt = Math.sqrt(num);
      for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) 
        return false
      }
      return true
    }
  
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrim(i))
        sum += i;
    }
    return sum;
  }
  console.log(sumPrimes(10));
  sumPrimes(10);