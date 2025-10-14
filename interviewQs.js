function Calculator() {
  this.totalAmt = 0;  
  
  this.lacs = function (amt) {
    this.totalAmt += amt * 100000
    return this
  }
  
  this.thousand = function (amt) {
    this.totalAmt += amt * 1000
    return this
  }

  this.value = function() {
    console.log(this.totalAmt);
    return this.totalAmt;
  }
}

const ComputeAmount = function (){
  return new Calculator();
}

// console.log(ComputeAmount().lacs(14).thousand(2).value())
  

var obj = {
  helloWorld : function(){
    return "helloWorld, " + this.name
  },
  name: "Hello"
}

var obj2 = {
  helloWorld: obj.helloWorld,
  name:"bye"
}


// console.log(obj.helloWorld())
// console.log(obj2.helloWorld())
// console.log(obj2.helloWorld.call(obj))



// Please create a function model(state, element), to bind
// state.value to the HTMLInputElement element.

// const input = document.createElement('input')
// const state = { value: 'Hi' }
// model(state, input)
// console.log(input.value) // 'Hi'
// state.value = 'dev'
// console.log(input.value) // 'dev'
// input.value = 'engineerchirag'
// input.dispatchEvent(new Event('change'))
// console.log(state.value) // 'engineerchirag'



function isPalindrome(str){
  // return newStr.split("").reverse("").join("") === newStr

  let newStr = str.toLowerCase().replace(/[\s\p{P}]/gu, '')

  for(let i = newStr.length-1, j=0 ; i>=0; i--, j++){
    if(newStr[i] !== newStr[j]){
      return false
    }
  }
  return true
}
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // should return true
// console.log(isPalindrome("racecar")); // should return true
// console.log(isPalindrome("hello")); // should return false

// convert arr to key value pairs

function findLongestSubstring(str) {
let maxLength = 0; 
let start = 0;
}

// console.log(findLongestSubstring("abcabcbb")); // should return 3 ("abc")
// console.log(findLongestSubstring("bbbbb")); // should return 1 ("b")
// console.log(findLongestSubstring("pwwkew")); // should return 3 ("wke")
// console.log(findLongestSubstring("")); // should return 0


function twoSum(nums, target){
  let smallNum = 0
  let largeNum = nums.length-1

  nums.sort((a, b) => a - b);

  while(smallNum<largeNum){
    let sum = nums[smallNum] + nums[largeNum]
    
    if(sum === target){
      return [smallNum , largeNum]
    }

    else if(sum>target){
      largeNum = largeNum - 1;
    }

    else{
      smallNum = smallNum + 1;
    }
  }
  return []
}

function twoSum1(nums, target) {
  let numMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {

    let complement = target - nums[i];

    console.log(complement)

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
    
  }

  return [];
}

// console.log(twoSum([2, 7, 11, 15], 9)); // should return [0, 1] because nums[0] + nums[1] == 9
// console.log(twoSum1([3, 2, 4], 6)); // should return [1, 2] because nums[1] + nums[2] == 6
// console.log(twoSum([3, 3], 6)); // should return [0, 1] because nums[0] + nums[1] == 6

// Palindrom check Numbers

function palindromCheck(num){
  let original = num;
  let reversed = 0;

  while(num > 0){
    let digit = num % 10;
    console.log(`digit = ${num} % 10 = ${num%10}`)

    console.log(`${reversed} * 10 + ${digit} = ${reversed * 10 + digit}`)
    reversed = reversed * 10 + digit;
    
    console.log(num)
    num = Math.floor(num/10);
    console.log(`${num} / 10 = ${num/10} = ${Math.floor(num/10)}`)
    console.log(num)
    console.log()
  }
  return original === reversed;
}
// console.log(palindromCheck(123))


function palindrom(num){
 let str = num.toString();
 
  // console.log(typeof(str))
  //  return str.split("").reverse().join == num

  let result = ""

  for(let i = str.length-1; i>=0; i--){    
    result += str[i]
  }

  if(result === str){
    return true;
  } else {
    return false; 
  }

}
// console.log(palindrom(121))
// console.log(palindrom(123))

function rotateMatrix(matrix) {
  let n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row 
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}
// console.log(rotateMatrix([[0,1,1],[1,0,0],[1,0,0]]))
let result = rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

// result.forEach(row => console.log(row));

function setZero(matrix){
  let m = matrix.length;
  let n = matrix[0].length;

  let rows = new Array(m).fill(false);
  let cols = new Array(n).fill(false);

  for(let i = 0; i<m; i++){
    for(let j = 0; j<n; j++){

      console.log(matrix[i][j])
      if(matrix[i][j] === 0){
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  // console.log(rows)
  // console.log(cols)

  for(let i = 0; i<m; i++){
    for(let j = 0; j<n; j++){
      if(rows[i] || cols[j]){
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;

}

let mat = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
];

// console.log(setZero(mat));

function add(a, b){
  while(b !== 0){
    let sum = a ^ b;
    let carry = (a & b) << 1;

    console.log(sum)

    a = sum;
    b = carry;
  }
  return a;
}
// console.log(add(5, 3)); 

function isLeap(year){
  return(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function addDays(day, month, year, x){
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  while(x > 0){
    let daysThisMonth = daysInMonth[month - 1];

    if(month === 2 && isLeap(year)) {
      daysThisMonth = 29;
    }

    let remainigDays = daysThisMonth - day;

    if(x <= remainigDays) {
      day += x;
      x=0
    } else {
      x -= (remainigDays + 1)
      day = 1;
      month++;

      if(month > 12) {
        month = 1;
        year++
      }
    }
  }

  return `${String(day).padStart(2, 0)}/${String(month).padStart(2, 0)}/${year}`;
}
// console.log(addDays(28, 2, 2024, 2));

function spiralOrder(matrix) {
  let result = [];
   if (matrix.length === 0) return result;

   let top = 0,
      bottom = matrix.length - 1,
      left = 0,
      right = matrix[0].length - 1;

  while(top < bottom && left <= right){
    // left-right
    for(let j = left; j<right; j++){
      result.push(matrix[top][j]);
    }
    top++

    // top-bottom
    for(let i = top; i<=bottom; i++){
      result.push(matrix[i][right])
    }
    // right-left

    // bottom-top
  }
  

  return result;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(spiralOrder(matrix)); 
// Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]
