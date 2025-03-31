const { model } = require("mongoose");

console.log("Hello world!")

const tempSwap = (a, b) => {
    const temp = a;
    a = b;
    b = temp;

    return [a, b]
}
// console.log(tempSwap(40, 10))

//  Write a program to swap two numbers without using a third variable.
const swap = (a, b) => {
    a = a + b;
    console.log(a)

    b = a - b;
    console.log(b)

    a = a - b;
    console.log(a)

    return[a, b]
}

// console.log(swap(10, 40))

// Write a function to check if a number is prime.
function isPrime(num){
    // console.log(num/3)
    // console.log(num%3)
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
          return false;
        }  
      }
      return true
}

// console.log(isPrime(17))

// Given a string, count the number of vowels in it.
function countVowels(str) {
    let vowelCount = 0

    for(let i = 0; i<str.length; i++){
        console.log(str[i])
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
            str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
             vowelCount++
         }
    }
    return vowelCount
}

// console.log(countVowels("Hello this a String"))    

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// console.log(countVowels("Hello this a String")) // Output: 5

// Write a program to print the Fibonacci series up to n terms.
function fibonacci(n) {
    if (n < 1) return [];
    if (n === 1) return [0]; 
    
    let prevNum = 0, nextNum = 1;
    let resultArr = [0, 1];

    for (let i = 2; i < n; i++) {
        let newNum = prevNum + nextNum;
        resultArr.push(newNum);
        prevNum = nextNum;
        nextNum = newNum;
    }

    return resultArr;
}

// console.log(fibonacci(10)); 

// Reverse a given string without using built-in functions.
function revString(str){

    let resStr = ""
    for(let i = str.length-1; i>=0; i--){
        resStr = resStr + str[i]
    }

    return resStr;

    return str.split("").reverse().join("");
}

// console.log(revString("Hello this a String"))

// Find the second largest element in an array.
function secondLargest(num){
    const uniqueNumbers = Array.from(new Set(num));

    const sortedArray = uniqueNumbers.sort((a, b) => b - a);

    if(sortedArray.length>2){
        return sortedArray[1]
    } else {
        return "There is no second highest number"
    }
}   

function secondLargest(arr) {
    let first = -Infinity, second = -Infinity; 

    for (let num of arr) {
        if (num > first) {
            second = first; // Update second largest
            first = num; // Update largest
        } else if (num > second && num !== first) {
            second = num; // Update second largest
        }
    }

    return second === -Infinity ? "There is no second highest number" : second;
}

// console.log(secondLargest([4, 5, 3, 8, 8]))

// Implement a stack using an array or list with push and pop operations.

class Stack {
    constructor(){
        this.stack = [];
    }

    // puch element
    push(element){
        this.stack.push(element);
        console.log(`${element} pushed to stack`)
    }

    // pop element
    pop(){
        if(this.isEmpty()) {
            console.log("Stack is empty")
        }
        const poppedElement = this.stack.pop();
        console.log(`${poppedElement} pooped from the stack`)
        return poppedElement
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty")

        }
        console.log(`Top element is ${this.stack[this.stack.length-1]}`)
    }

    display(){
        console.log(stack)
    }

    isEmpty(){
        return this .stack.length === 0
    }

    size(){
        return this.stack.length;
    }
}

const stack = new Stack();
// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.pop()

// stack.display()


function twoSum(arr, target){
    let map = new Map();

    // console.log(map)

    for(let i = 0; i < arr.length; i++){
        const complemnt = target - arr[i]

        if(map.has(complemnt)){
            return[map.get(complemnt), i]
        }

        console.log(map)
        map.set(arr[i], i)
    }
    return [];
}

// console.log(twoSum([15, 11, 7, 5, 2], 9))



function lengthOfLongestSubstring(s) {
    let charSet = new Set();  // Set to store unique characters in the current window
    let left = 0;  // Left pointer of the window
    let maxLength = 0;  // Variable to track the maximum length of the substring
    
    console.log(charSet)

    // Traverse the string with the right pointer
    for (let right = 0; right < s.length; right++) {
        // If the character at 'right' pointer is in the set, move the left pointer
        // to the right of the last occurrence of the character
    console.log(charSet)

        while (charSet.has(s[right])) {
            charSet.delete(s[left]);  // Remove the character at 'left' from the set
            left++;  // Shrink the window from the left
        }
        
        // Add the current character to the set
        charSet.add(s[right]);
        
        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;  // Return the maximum length of the substring without repeating characters
}

// console.log(lengthOfLongestSubstring("abcabcbb"))

function main(arr){

let result = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i]<0){
            result.push(arr[i]);
        }
    }
    return result.length
}

// let arr = [9, -3, 8, -6, 7, -8, 10]
// console.log(main(arr))

function alternateNum(arr){

let result = [];

 arr.sort((a, b) => a - b)

 for(let i = 0; i<arr.length; i+=2){
    result.push(arr[i])
 }

 return result
}

// let arr = [3, 5, 1, 5, 9, 10, 2, 6]
// console.log(alternateNum(arr))

function quickSort(arr){
    if(arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter(num => num < pivot);
    let right = arr.filter(num => num > pivot);
    let middle = arr.filter(num => num === pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];

}

// console.log(quickSort(arr))


// Second largest number
let arr = [2, 4, 5, 6, 8]

const secondLargestNum = (arr) => {

    if(arr.length <= 1) return -1

    let largest = -Infinity
    let secLargest = -Infinity

    for(let num of arr) {
        // console.log(num)

        if(num > largest){
            secLargest = largest;
            largest = num;
        }

        else if(num > secLargest && num !== largest){
            secLargest = num;
        }
    }

    return secLargest === -Infinity ? -1 : secLargest

}

// console.log(secondLargestNum(arr))

    const secondSmallest = (arr) => {

        let smallest = +Infinity;
        let secSmallest = +Infinity;

        for(let num of arr){
            // console.log(num);

            if(num < smallest){
                secSmallest = smallest;
                smallest = num;
            } else if (num < secSmallest && num !== smallest){
                secSmallest = num;
            }
        }

        return secSmallest;
    }

// console.log(secondSmallest([2, 5, 72, 3, 6, 9]))

// k-swaps

function kSwaps(arr, k){
    let n = arr.length;
    k = k % n;

    // for(let i = 0; i<k; i++){
    //     let first = arr.shift();
    //     arr.push(first);
    // }

    const reverse = (start, end) => {
        while(start<end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverse(0, n-1)
    
    reverse(0, n-k-1)
    
    reverse(n-k, n-1)


    return arr;
}

// console.log(kSwaps([1, 2, 3, 4, 5], 3))

// ____________________________________________
/*  A cold storage company has N storage units for various products. The company has received N orders that must be
 preserved at respective N temperatures inside the storage units. The company manager wants to identify which
products must be preserved at negative temperatures. */

const findNegTemp = (arr) => {

    let result = []

    for(let item of arr){
        // console.log(item)
        if(item < 0){
            result.push(item)
        }
    }

    return result
}

// console.log(findNegTemp([9, -3, 8, -6, -7, 8, 10]))
// ____________________________________________

function alternateStr(str1, str2){
    let arr1 = str1.split(",")
    let arr2 = str2.split(",")

    let result = [];

    // console.log(arr1)
    // console.log(arr2)

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i], arr2[i]);
    }    

    return result.join(",")
}

// console.log(alternateStr("a,b,c,d", "p,q,r,s")) // "a,p,b,q,c,r,d,s"
// ____________________________________________

function missingNum(arr) {
    for(let i = 0; i<arr.length -1; i++){

        if((arr[i+1] - arr[i]) > 1){
            return arr[i] + 1
        }
    }
    return
}

// console.log(missingNum([101, 102, 103, 105, 106]))

// ____________________________________________

function stringCompression(str){
    let count = 1;
    let result = "";

    for(let i = 0; i<str.length; i++){
        console.log(str[i], count)
        if(str[i] === str[i+1]){
            count++ 
        } else {
            result += str[i] + count
            count = 1
        }
    }

    return result.length < str.length ? result : str;
}

// console.log(stringCompression("aaabbc")) // "a3b2c1"

// ____________________________________________


// function nonDecreasing(arr) {
//     let modified = false;

//     for(let i = 0; i<arr.length -1; i++){
//         if(arr[i] > arr[i+1]){

//             if(modified) return false;

//             modified = true;

//             if(i === 0 || arr[i-1] <= arr[i+1]){
//                 arr[i] = arr[i+1]
//             } else {
//                 arr[i+1] = arr[i]
//             }
//         }
//     }
//     // console.log(arr)
//     return true
// }

function nonDecreasing(arr) {
    let modified = false;

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            if(modified) return false; 
            modified = true;

            if(i === 0 || arr[i-1] <= arr[i+1]) {
            } else {
            }
        }
    }
    return true;
}


// console.log(nonDecreasing([8, 4, 6,]))
// console.log(nonDecreasing([4, 2, 1]))
// console.log("------")
// console.log(nonDecreasing([-2, 7, 1, 0, 1, 2]))

// ____________________________________________
// Find the Duplicate Number (1 to N)
function findDuplicate (arr) {
    let tortoise = arr[0];
    let hare = arr[0];

    while(true) {
        tortoise = arr[tortoise]
        hare = arr[arr[hare]]
        if(tortoise === hare){
            break;
        }
    }

    tortoise = arr[0];

    while (tortoise !== hare){
        tortoise = arr[tortoise];
        hare = arr[hare];
    }
    return hare;
}

// console.log(findDuplicate([3, 1, 3, 4, 2]))
// console.log(findDuplicate([2, 5, 3, 1, 4, 3])); 

// ____________________________________________
// First Missing Positive

function firstMissingPositive(arr) {
    let n = arr.length;

    for(let i = 0; i<n; i++){
        while (arr[i] > 0 && arr[i] < n && arr[arr[i] -1] !== arr[i]){
            [arr[arr[i] -1], arr[i]] = [arr[i], arr[arr[i] - 1]]
        }
    }

    console.log(arr)

    for(let i = 0; i<n; i++){
        console.log(`${arr[i]} !== ${i+1} ? ${arr[i] !== i+1}`)
        if(arr[i] !== i+1){
            return i + 1;
        }
    }

}

// console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([3, 2, -6, 1, 0]))
// console.log(firstMissingPositive([7, 8, 1, 11]));

function newSort (arr) {
    for(let i = 0; i<arr.length; i++){
        while(arr[i] > 0 && arr[i] < arr.length && arr[arr[i] - 1] !== arr[i]){
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]]
        }
    }

    return arr
}


// console.log(newSort([2, 3, 4, 1, 5]))

