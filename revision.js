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

function greet() {
    message = "Hello, World!";
    console.log(message);
    var message;
  }
  
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
// var person = {
//   name: "John",
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// };

// console.log(person.greet())


// var greetFunction = person.greet;
// var greetFunction = person.greet.bind(person);
// greetFunction(); // Output: Hello, my name is undefined and I am undefined years old.

//When you assign a method from an object to a variable, you're essentially detaching that method from its original object and creating a standalone function. This has implications for how the this keyword works when that function is invoked.
//--------------- var greetFunction = person.greet;

//Here, you're assigning the greet method from the person object to the greetFunction variable. Now, greetFunction is a reference to the function stored in the greet method, but it's not tied to the person object anymore.
//-----------------greetFunction(); 

//The greetFunction() is invoked as a standalone function. At this point, the this keyword inside the greet method loses its context. Normally, when greet is called as person.greet(), this refers to the person object. However, when detached and called as greetFunction(), this doesn't refer to any specific object. It will typically refer to the global object (window in a browser environment), or undefined in strict mode.Because this no longer refers to the person object, this.name and this.age inside the greet function are evaluated to undefined, resulting in the output:


const numbers = [1, 2, 3, 4, 5];
const person = { name: "Alice", age: 25 };
const newPerson = { ...person, city: "New York" };

const [first, second, ...restNumbers] = numbers;
// console.log(`First: ${first}, Second: ${second}, Rest:`, restNumbers);

const { name, ...restDetails } = newPerson;
// console.log("Name:", name, "Rest Details:", restDetails);


function printUserName(user) {
	console.log("User name is:", user.name.first);
}

// let userData 
const userData = {
    name: "John Doe",
    age: 30,
    };
    

// printUserName(userData);

function access  () {

  function denied () {
    console.log(demo)
    var demo = "demo"
  }
  denied()
}

// access()

function demo () {
  console.log(num1)
  let num1 = 10;

  console.log(num2)
  var num2 = 20;

}

// demo();


function sort(arr){

  let sortedArr = arr.sort((a, b) => a -b)
  return sortedArr;
}

// console.log(sort([2, 5, 7, 9]))

function maxSubArray(arr, k){
  let maxSum = 0;
  
  for(let i = 0; i<arr.length - k; i++){
    let sum = 0;

    for(let j = i; j< i + k; j++){
      sum += arr[j];
      
      if(sum > maxSum){
        maxSum = sum
      }
    }

    sum = 0;
  }
  return maxSum;
}

function maxSubArray(arr, k){
if (arr.length < k) return null;

let maxSum = 0;
let currSum = 0;

for(let i = 0; i<k; i++){
  currSum += arr[i]
}

maxSum = currSum;

for(let i = k; i<arr.length; i++){
  currSum = currSum - arr[i - k] + arr[i];
  maxSum = Math.max(maxSum, currSum);
}

  return maxSum
}

// console.log(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

function secondLargest(arr){
  // arr.sort();
  // return arr[arr.length - 2];

  let largest = -Infinity;
  let secLargest = -Infinity;

  for(let num of arr){
    if(num > largest){
      secLargest = largest
      largest = num;
    }
    else if(num > secLargest && num !== largest) {
      secLargest = num;
    }
  }
    return secLargest === -Infinity ? -1 : secLargest
}
// console.log(secondLargest([1, 4, 3, 2, 7]))

function checkList(arr) {
  for(let i = 0; i<arr.length; i++){
    if((arr[i+1] - arr[i]) < 0){
      return false;
    }
  }
  return true
}
// console.log(checkList([-10, -5, 3, 6]))


function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;

  while(left< right) {
    let mid = Math.floor((left+right) / 2);
    
    if(arr[mid] == target) return mid;

    else if(arr[mid] < target){
      left = mid
    }

    else{
      right = mid;
    }
  }

  return - 1;
}

// console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 13))

function firstAndLast(arr, k){
  let result = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] == k){
      result.push(i);
    }
  }

   if (result.length === 0) {
    return [-1, -1];
  }
  
  return [result[0], result[result.length-1]];
}
// console.log(firstAndLast([1, 2, 2, 2, 3, 4, 5], 2));

function sortByLength(strings) {
  return strings.sort((a, b) => a.length - b.length);
}
// console.log(sortByLength(["apple", "dog", "banana", "cat"]));

function revString(str){
  let res = ""
  for(let i = str.length-1; i >= 0 ; i--){    
    res = res + str[i]
  }
  return res
}
// console.log(revString("satvik"))

function everySubArrSum(arr, k){
  let result = []
  let sum = 0;
  
  for(let i = 0; i<= arr.length - k; i++){
    for(let j = i; j<i + k; j++){
      sum += arr[j];
    }

    result.push(sum);
    sum = 0;
  }
  return result;
}

function everySubArrSum(arr, k){
  let res = [];
  let sum = 0;

  for(let i = 0; i<k; i++){
    sum += arr[i];
  }
  res.push(sum);

  for(let i = k; i < arr.length; i++){
    sum = sum + arr[i] - arr[i-k]
    res.push(sum);
  }
  return res;
}
// console.log(everySubArrSum([1, 2, 3, 4, 5], 3))

function prefixSum (arr) {
  let sum = 0;
  let res = [];

  for(let i = 0; i<arr.length; i++){
    sum += arr[i];
    res.push(sum);
  }
  return res;
}
// console.log(prefixSum([1, 2, 3, 4, 5]))

function countFrequencies(arr) {
  // let map = new Map;
  let map = {};

  for(let item of arr){
    // map.set(item, (map.get(item) || 0) + 1);
    map[item] = (map[item] || 0) + 1;
  }

  // console.log(map)
  return map
}
// console.log(countFrequencies(["apple", "banana", "apple", "orange", "banana", "apple"]))

function operations(arr, queries){
  for(let q of queries){
    let l = q[0]
    let r = q[1]
    let x = q[2]

    for(let i = l-1; i<=r-1; i++) {
      arr[i] += x;
    }

  }
  return arr;
}

function operations(arr, queries){
  const diff = Array(arr.length + 1).fill(0);

  for(let [l, r, x] of queries){
    // console.log([l,r, x])
    diff[l - 1] += x;  // l-1 because queries are 1-based
    console.log("1", diff)
    diff[r] -= x;      // r because diff is offset by one
    console.log("2", diff)
  }
}
// console.log(operations([0, 0, 0, 0, 0], [[1, 3, 2], [2, 5, 1]]));

function checkSubset(a, b){
  let map = new Map();

  for(let char of a){
    map.set(char, (map.get(char) || 0) + 1);
  }

  for(let char of b){
    if(!map.get(char)) return false;
    map.set(char, map.get(char) - 1)
  }

  return true;
}
// console.log(checkSubset([1, 2, 2, 3, 4], [2, 2, 3]))

// for sorted array
function twoSumPointer(arr, k){
  let left = 0;
  let right = arr.length-1;

  while(left < right) {
    if((arr[left] + arr[right]) === k) return true;

    if((arr[left] + arr[right]) > k){
      right--;
    } else {
      left++;
    }
  }
  return false;
}
console.log(twoSumPointer([1, 2, 3, 4, 5], 9))

function removeDuplicate(arr){
  let i = 0;
  for(let j = 0; j<arr.length; j++){
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j];
    }
  }

  return arr.slice(0, i+1)
}
// console.log(removeDuplicate([1, 1, 2, 2, 3]))

function findMaxOne(arr) {
  let zeroCount = 0;
  let i = 0

  let curr = 0;
  let max = 0;

  while(zeroCount<2){
    if(arr[i] == 0) zeroCount++
    i++
    curr++
  }

  max = curr;

  return max
}

// console.log(findMaxOne([1, 0, 1, 1, 0]))