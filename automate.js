const { model } = require("mongoose");

console.log("automate.js")

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
// console.log(revString(-121))

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

        // console.log(map)
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

let arr = [3, 5, 1, 5, 9, 10, 2, 6]
// console.log(alternateNum(arr))

function quickSort(arr, k){
    if(arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter(num => num < pivot);
    let right = arr.filter(num => num > pivot);
    let middle = arr.filter(num => num === pivot);

    // let newArr = [...quickSort(left), ...middle, ...quickSort(right)]

    // console.log(newArr[newArr.length - 2]);

    return [...quickSort(left), ...middle, ...quickSort(right)];

}

// console.log(quickSort(arr, 2))   

// day 1
// Second largest number
// let arr = [2, 4, 5, 6, 8]

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
        // console.log(str[i], count)
        if(str[i] === str[i+1]){
            count++ 
        } else {
            result += str[i] + count
            count = 1
        }
    }

    // return result.length < str.length ? result : str;
    return result
}

console.log(stringCompression("aaabbc")) // "a3b2c1"

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

    for(let i = 0; i<=n; i++){
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] -1] !== arr[i]){
            [arr[arr[i] -1], arr[i]] = [arr[i], arr[arr[i] - 1]]
        }

        console.log(arr)
    }


    for(let i = 0; i<n; i++){
        // console.log(`${arr[i]} !== ${i+1} ? ${arr[i] !== i+1}`)
        if(arr[i] !== i+1){
            return i + 1;
        }
    }

    return n + 1;
}

// console.log(firstMissingPositive([-3, -4, -1, -2]))
// console.log(firstMissingPositive([-40, -39, -46, -38, -13, -30, -26, -28, -37, -36]))
// console.log(firstMissingPositive([3, 4, -1, 1]))
// console.log(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
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

class ListNode{
    constructor(value) {
        this.value = value; 
        this.next = null
    }
}

// create individual node
let head = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

// link nodes together
head.next = node2
node2.next = node3
node3.next = node4
node4.next = node2
// node4.next = null //the last node points to null, indicating the end of the list

let list = [head, node2]

// console.log(list);

function hasCycle(head) {

    let tortoise = head
    let hare = head

    while(hare !== null && hare.next !== null){
        tortoise = tortoise.next;
        hare = hare.next.next;

        if(tortoise === hare) {
            return true;
        }
    }

    return false;
}

// console.log(hasCycle(head))


function detectCycle (head) {

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast === slow){
            
            slow = head;

            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }        
    }

    return null
}

// console.log(detectCycle(head))


function lengthOfCycle(head) {
    let fast = head;
    let slow = head;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast === slow){
            let length = 1;
            let temp = slow.next;
            
            while(temp !== fast){
                length++;
                temp = temp.next;
            }
          return length;
        }
    }
    return 0;
}

// console.log(lengthOfCycle(head))

// ____________________________________________

// input = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// output = [3, 3, 5, 5, 6, 7]

function maxNumInWindow (arr, k) {
let result = []
let n = arr.length
console.log(n - k)
    for(let i = 0; i <= n-k; i++){
        let max = arr[i];
        for(j = 1; j<k; j++) {
          if(arr[i + j] > max) {
              max = arr[j+i];
          } 
        }
        result.push(max)
    }
    return result
}

// console.log(maxNumInWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

function slidingWindowMax(arr, k) {
   
}

// console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3))
// ____________________________________________

function minSubArrayLen (target, nums) {

    for(let i = 0; i< nums.length; i++){

    }

}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
// ____________________________________________

function maxSumOfSubArray (arr, k) {
    let n = arr.length;
    let maxSum = -Infinity;
    
    for(let i = 0; i<=n-k; i++){
        let sum = 0;
        for(let j = i; j < i + k; j++){
            sum = sum + arr[j];
            // console.log(i , sum)
        }
       maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

// console.log(maxSumOfSubArray([2, 1, 5, 1, 3, 2], 3))
// ____________________________________________

function splitDash(str){
    let result = ""
    for(let i = 0; i<str.length; i++){
        result += str[i]

        if(i < str.length - 1){
            result += "-" 
        }
    }
    return result
}

// console.log(splitDash('abc'));
// ____________________________________________



function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
//   console.log(insertionSort([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]

function altSort(arr){
    arr.sort((a, b) => a - b);
    let result = []
    for(let i = 0; i<arr.length; i+=2){
        result.push(arr[i])
    }

    return result;
}
// console.log(altSort([7, 2, 9, 4, 1, 5]))

function peakElem(arr){
     let n = arr.length;

    if (arr[0] > arr[1]) return 0;

    for (let i = 1; i < n - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return i;
        }
    }

    if (arr[n - 1] > arr[n - 2]) return n - 1;

    return -1; 
}
// console.log(peakElem([1, 3, 20, 4, 1, 0])); //2
// console.log(peakElem([5, 10, 7, 8, 7])); //1

function alternateSort(arr){
    arr.sort((a, b)=> a - b);
    let left = 0;
    let right = arr.length-1;
    let result = [];
    while(left < right){
        result.push(arr[right]);
        result.push(arr[left]);
        right--;
        left++;
    }
    return result
}
// console.log(alternateSort([1, 3, 8, 2, 7, 5]));

function moveZeros(arr){
    let index = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index++;
        }
        console.log(arr)
    }
    
    return arr;
}
// console.log(moveZeros([0, 1, 0, 3, 12]))
// console.log(moveZeros([1, 2, 0, 0, 4, 0, 5]))

function remDuplicate(arr){
    let map = new Map();

    for(let char of arr){
        if(map.get(char)) return char
        map.set(char, (map.get(char) || 0) + 1);
    }

    return -1;
}
// console.log(remDuplicate([60, 120, 180, 240, 60, 300]))
// console.log(remDuplicate([15, 30, 45, 60]))
// console.log(remDuplicate([45, 60, 120, 30, 60, 90, 45]))

function longestStreak(arr) {
    let curr = 0;
    let max = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            curr++
            if(curr>max){
                max = curr;
            }
        } else {
            curr = 0;
        } 
    }
    return max;
}
// console.log(longestStreak([1, 1, 0, 1, 1, 1]));

function twoSumPrice(arr, k) {
    const map = new Map();
    
    for(let char of arr){
        let comp = k - char;        
        if(map.has(comp)){
            return true;
        }
        map.set(char, (map.get(char) || 0) + 1);
    }
    return false;
}
// console.log(twoSumPrice([10, 15, 3, 7], 17))
// console.log(twoSumPrice([1, 2, 3, 4], 8))

function findRelKeyword(str, target){
    let start = 0; 
    // let end = 0;
    let minLength = +Infinity;
    let windowMap = new Map();

    let map = new Map();

    for(let char of target){
        map.set(char, (map.get(char) || 0) + 1);  
    }
    
    for(let end = 0; end>str.length; end++){
        let char = str[end];
        windowMap.set(char, (windowMap.get(char) || 0) + 1);
        
        if(minLength > windowMap.size){
            minLength = windowMap.size
        }
        
        /* console.log((map.has("A") && map.has("B") && map.has("C"))); somehow if this condition is true then i'll just
            let removeElem = str[start];
            windowMap.set(removeElem, (windowMap.set(removeElem)) - 1)
            if(map.get(removeElem) == 0) map.delete(removeElem)
            if(windowMao.size < minLength) minlength = windwoMap.size
            start++
        */
        while(windowMap.has()){

        }
    }
}
// console.log(findRelKeyword("ADOBECODEBANC", "ABC"));

function filterAndSortStudents(arr){
    let filtered = [];

    for(let item of arr){
        const [name, markStr] = item.split(":");
        const marks = parseInt(markStr);
        // console.log(marks)

        if(marks >= 50){
            filtered.push({name, marks});
        }
    }

    filtered.sort((a, b) => {
        if(b.marks !== a.marks) return b.marks - a.marks;
        return a.name.localeCompare(b.name);
    })

    // console.log(filtered)
    return filtered.map(student => `${student.name}:${student.marks}`);
}
// console.log(filterAndSortStudents([
//   "Aman:45",
//   "Riya:88",
//   "Ankit:50",
//   "Karan:88",
//   "Meena:60",
//   "Raj:30"
// ]))

function frequentElement(arr, n){
    
    let map = new Map();

    let filtered = [];

    let res = [];

    for(let char of arr){
        map.set(char, (map.get(char) || 0) + 1);
    }

    for(let [value, count] of map){
        filtered.push({value, count})
    }

    filtered.sort((a, b)=>{
        if(b.count !== a.count) return b.count - a.count;
        return a.value - b.value;
    })

    
    for(let i = 0; i<(Math.min(n, filtered.length)); i++){
        res.push(filtered[i].value);
    }
    
    return res
}
// console.log(frequentElement( [7, 7, 7, 6, 6, 5, 5], 3))

function highScoring(arr){
    let studentMap = new Map();

    for (let entry of arr) {
        const [name, subject] = entry.split(":");

        if (!studentMap.has(name)) {
            studentMap.set(name, new Set());
        }

        studentMap.get(name).add(subject); 
    }

    let maxSubjects = 0;
    let topStudents = [];

    for (let [name, subjects] of studentMap) {
        let count = subjects.size;

        if (count > maxSubjects) {
            maxSubjects = count;
            topStudents = [name];
        } else if (count === maxSubjects) {
            topStudents.push(name);
        }
    }

    return topStudents.sort()[0];
}
// console.log(highScoring(
//     [
//   "Riya:Math",
//   "Aman:Physics",
//   "Riya:Chemistry",
//   "Aman:Math",
//   "Riya:Math",   
//   "Karan:Math"
// ]
// ))