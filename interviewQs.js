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
console.log(palindrom(121))
console.log(palindrom(123))