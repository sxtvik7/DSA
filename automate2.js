// 3396. Minimum Number of Operations to Make Elements in Array Distinct

// not valid_______>
var minimumOperations1 = function (nums) {
  let count = 0;

  let head = nums[0];
  let slow = head;
  let fast = head;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    console.log(fast == slow);

    if (fast === slow) {
      nums.splice(0, 3);
      count++;
    } else {
      break;
    }
  }
  return count;
};

// bruteforce____>
var minimumOperations2 = function (nums) {
  let count = 0;

  while (true) {
    let seen = new Set();
    let hasDuplicate = false;

    for (let num of nums) {
      if (seen.has(num)) {
        hasDuplicate = true;
        break;
      }

      seen.add(num);
    }

    if (!hasDuplicate) {
      break;
    }

    nums.splice(0, 3);
    count++;
  }
  return count;
};
// console.log(minimumOperations2([1,2,3,4,2,3,3,5,7]))

// Optimal using sliding window

function minimumOperations(nums) {
  let seen = new Set();
  let ops = 0;
  let i = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      ops++;
      start += 3;
      seen.clear();

      i = start - 1;
    } else {
      seen.add(nums[i]);
    }
  }
  return ops;
}

// console.log(minimumOperations([1,2,3,4,2,3,3,5,7]))

// _______________________________________ _______________________________________ _______________________________________ _______________________________________

function subarraySum1(nums, k) {
  let sum = 0;
  let count = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    console.log(`sum = ${sum} + ${nums[i]} = ${sum + nums[i]}, i = ${i}`);
    if (sum <= k) {
      count++;
      start++;
      sum = 0;

      i = start;
    }
  }
  return count;
}

// console.log(subarraySum([-1,-1,1], 1))
// console.log(subarraySum([1,2,3], 3))
// console.log(subarraySum([1,1,1], 2))

// Prefix Array
function prefixArr(arr) {
  let result = [arr[0]];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(result[i] + arr[i + 1]);
  }
  return result;
}

// console.log(prefixArr([5, 6, 12, 3]))

//
function subarraySum(arr, k) {
  let map = new Map();
  map.set(0, 1);
}

// console.log(subarraySum([1,1,1], 2))
// console.log(subarraySum([1, -1, 0], 0))
// console.log(subarraySum([1,2,3], 3))

function lengthOfLongestSubstring(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] !== str[j] && !result.includes(str[i])) {
        result += str[i];
      }
    }
  }
  if (result.length === 0) return 1;
  else {
    return result.length;
  }
}

// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("bbbbb"));

function wordCount(str, k) {
  let map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map.get(k);
}
// console.log(wordCount("Testing", "e"))

function findCity(arr) {
  if (arr.length === 0) return "";

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
  // console.log(arr[0].slice(0,targetStr.length))
}
// console.log(findCity(['rosebjsbdi', 'ros', 'roseemg', 'rosekkkd']));

function longestPalindromicSubarray(arr) {
  let maxLen = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sub = arr.slice(i, j + 1);
      let reversed = [...sub].reverse();

      if (
        JSON.stringify(sub) === JSON.stringify(reversed) &&
        sub.length > maxLen
      ) {
        maxLen = sub.length;
        result = sub;
      }
    }
  }

  return result;
}

// Example
let input = [37, 57, 45, 50, 75, 50, 133];
let output = longestPalindromicSubarray(input);
// console.log(output);  // [133, 50, 75, 50, 133]

// Easy - Medium

function majorityElem(arr) {
  let n = Math.floor(arr.length / 2);
  let map = new Map();

  for (let char of arr) {
    map.set(char, (map.get(char) || 0) + 1);
    if (map.get(char) > n) return char;
  }

  return -1;
}
// console.log(majorityElem([2, 2, 1, 1, 2, 2, 2]));

function twoSum2(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let num = arr[start] + arr[end];

    if (num === k) return [start + 1, end + 1];

    if (num > k) {
      end--;
    } else {
      start++;
    }
  }
  return -1;
}
// console.log(twoSum2([2, 7, 11, 15], 9))

function longestSubStr(str) {
  let window = "";
  let max = 0;
  let start = 0;
  let end = 0;

  while (end < str.length) {
    if (!window.includes(str[end])) {
      window += str[end];
      max = Math.max(max, window.length);
      end++;
    } else {
      window = window.slice(1);
      start++;
    }
  }
  return max;
}

function longestSubStr(str) {
  let charSet = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(str[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

// console.log(longestSubStr("abcabcbb"))
// console.log(longestSubStr("abcde"))
// console.log(longestSubStr("pwwkew"))
// console.log(longestSubStr("aaaaaa"))

function maxArea(arr) {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;

  while (left < right) {
    let l = Math.min(arr[left], arr[right]);
    let w = right - left;
    let area = l * w;
    max = Math.max(area, max);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// for(let i = 0; i<arr.length; i++){
//     let start = i+1
//     let end = start + 1;

//     while(end < arr.length){
//         if((arr[i] + arr[start] + arr[end]) === 0){
//             result.push([arr[i], arr[start], arr[end]]);
//         }
//         start++
//         end++
//     }
// }

function threeSum(arr) {
  arr.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// ____________________________________________________________________-
// LeetCode 238 - productExceptSelf

// brute force
function productExceptSelf(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let n = 0;
    let total = 1;

    while (n < arr.length) {
      if (n !== i) {
        total = total * arr[n];
      }
      n++;
    }
    res.push(total);
  }
  return res;
}
// console.log(productExceptSelf([1, 2, 3, 4]))
// ____________________________________________________________________-
// LeetCode 42 - trap water
function prefixMax(arr) {
  let res = [...arr];
  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] > res[i + 1]) {
      res[i + 1] = res[i];
    }
  }
  return res;
}
// console.log(prefixMax([1,2,3,4]))

function suffixMax(arr) {
  let res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    if (res[i] > res[i - 1]) {
      res[i - 1] = res[i];
    }
  }
  return res;
}
// console.log(suffixMax([1,2,3,4]))

function minBoundaries(arr) {
  let left = prefixMax(arr);
  let right = suffixMax(arr);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let minBound = Math.min(left[i], right[i]);
    total += Math.max(0, minBound - arr[i]);
  }

  return total;
}

// console.log(minBoundaries([3,0,2]))
// console.log(minBoundaries([4,2,0,3,2,5]))
// console.log(minBoundaries([3,0,2,4]))
// console.log(minBoundaries([2, 1, 5, 3, 4]))

function trapWater(arr) {
  let left = [...arr];
  for (let i = 0; i < left.length - 1; i++) {
    if (left[i] > left[i + 1]) {
      left[i + 1] = left[i];
    }
  }
  console.log(left)

  let right = [...arr];
  for (let i = right.length; i > 0; i--) {
    if (right[i] > right[i - 1]) {
      right[i - 1] = right[i];
    }
  }
  console.log(right) 

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += Math.min(left[i], right[i]) - arr[i];
  }

  return total;
}
// console.log(trapWater([3, 0, 2, 4]))

// 20. Valid Parentheses ______________>

function isValidParen(str) {
  if (str.length % 2 !== 0) return false;

  let stack = []
  let map = {")": "(", "]": "[", "}": "{" };

  for(let char of str){
    if(char === "(" || char === "{" || char === "["){
        stack.push(char)
    }
    else{
        if(stack.length === 0 || stack.pop() !== map[char]){
          return false
        }
    }
  }
  return stack.length === 0;
}
// console.log(isValidParen("()[]{}"));
// console.log(isValidParen("([)]"));

// leetcode 239 Sliding Window max
// Brute force
function maxSlidingWindow(arr, k){
  let res = [];

  for(let i = 0; i<arr.length-1; i++){
    let max = 0;
    for(let j = 0; j<k-1; j++){
      max = Math.max(arr[i], arr[i+1])
    }
    res.push(max);
  }
  return res
}

// Optimal
// function maxSlidingWindow(nums, k) {}

// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

// Count Elements Greater Than Previous Average
function responseTimesCoun(arr){
  let sum = arr[0];
  let count = 0;

  for(let i = 1; i<arr.length; i++){
    let avg = sum / i
    if(arr[i] > avg){
      count++
    }
    sum += arr[i]
  }

  return count;
}
// console.log(responseTimesCoun([100, 200, 150,300]))

// 121. Best Time to Buy and Sell Stock (LeetCode)
function maxProfit(arr){
  let max = 0;
  for(let i = 0; i<arr.length-1; i++){
    for(let j = 1; j<arr.length; j++){
      let curr = arr[j] - arr[i]
      max = Math.max(curr, max)
    }
  }
  return max;
}



function maxProfit(arr){
  let map = new Map();
  let max = 0;
  
  for(let i = 0; i<arr.length; i++){
    map.set(arr[i], i);
  }
  
  arr.sort((a, b) => a - b)
  
  let start = 0;
  let end = arr.length-1;
  
  while(start < end){
    if(map.get(arr[end]) > map.get(arr[start])){
      let curr = arr[end] - arr[start]
      max = Math.max(curr, max);
    }
    if(map.get(arr[end]) < map.get(arr[start])){
      end--
    }else{
      start++
    }
    
  }
  return max
}

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}
// console.log(maxProfit([7,1,5,3,6,4]));

function findShortestSubArray(arr){
  let map = new Map();
  let maxNum = arr[0];

  for(let char of arr){
    map.set(char, (map.get(char) || 0) + 1);
    if(map.get(char) > map.get(maxNum)){
      maxNum = char;
    }
  }

  let indexes = [];
 
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === maxNum){
      indexes.push(i);
    }
  }
  return arr.slice(indexes[0], indexes[indexes.length]).length
}

function findShortestSubArray(nums){
  let counts = new Map();
  let firstIndex = new Map();
  let lastIndex = new Map();

  for(let i = 0; i<nums.length; i++){
    let num = nums[i];

    if(!firstIndex.has(num)) firstIndex.set(num, i);
    lastIndex.set(num, i);
    counts.set(num, (counts.get(num)||0) + 1);
  }

  // console.log(counts.values())
  let degree = Math.max(...counts.values());
  let minLength = Infinity;
  // console.log(counts.entries())

  for(let [num, count] of counts.entries()){
    if(count === degree){
      let length = lastIndex.get(num) - firstIndex.get(num) + 1;
      minLength = Math.min(length, minLength);
    }
  }
  return minLength
}

// console.log(findShortestSubArray([1,2,2,3,1,4,2]))

// 28. Find the Index of the First Occurrence in a String

function strStr (haybel, needle){
  let left = 0;

  for(let right = needle.length; right<haybel.length; right++){
    let res = haybel.slice(left, right);

    if(res === needle) return left;
    
    if(res.length === needle.length){
      left++
    } 
  }
  return -1;
}

function strStr (haystack, needle){
  if(needle === "") return 0;

  for(let i = 0; i<=haystack.length - needle.length; i++){
    let subStr = haystack.slice(i, i + needle.length);
    console.log(i, i + needle.length)
    if(subStr === needle) return i;
  }
  return -1;
}
// console.log(strStr("sadbutsad", "sad"))

// 66. Plus One

function plusOne(digits){
 for(let i = digits.length - 1; i>=0; i--){
  if(digits[i] < 9){
    digits[i]++;
    return digits
  }
  digits[i] = 0;
 }
 digits.unshift(1);
 return digits
}
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9]))