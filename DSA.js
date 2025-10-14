console.log("Active File: DSA.js");

function secLargest(arr) {
  let largest = -Infinity;
  let secLargest = -Infinity;

  for (let char of arr) {
    if (char > largest) {
      secLargest = largest;
      largest = char;
    } else if (char > secLargest && char < largest) {
      secLargest = char;
    }
  }
  return secLargest === -Infinity ? -1 : secLargest;
}
// console.log(secLargest([12, 1, 35, 10, 34, 1]))

function nonDecreasing(arr) {
  let modified = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      if (modified) return false;
      modified = true;

      if (arr[i] > 0 && arr[i - 1] > arr[i + 1]) {
        arr[i + 1] = arr[i];
      } else {
        arr[i] = arr[i + 1];
      }
    }
  }
  return true;
}
// console.log(nonDecreasing([-2, 7, -1, 0, 1, 2]))

function subArraySum(arr, k) {
  let sum = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (sum == k) return true;
    sum = sum + arr[right];

    if (sum > k) {
      sum = sum - arr[left];
      left++;
    }
  }
  return false;
}
// console.log(subArraySum([1, 2, 3, -2, 5], 6));
// console.log(subArraySum([4, 1, -3, 2], 3));
// console.log(subArraySum([2, -1, 2], 3));

function longestPalindrome(s) {
  if (!s || s.length < 1) return "";
  let start = 0,
    end = 0;

  function expandAroundCenters(right, left) {
    while (left >= 0 && right <= s.length && s[left] == s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenters(i, i); //odd
    let len2 = expandAroundCenters(i, i + 1); //even
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
// Example:
// console.log(longestPalindrome("babad")); // "bab" or "aba"
// console.log(longestPalindrome("cbbd"));  // "bb"

function firstNonRepeatChar(str) {
  let map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) == 1) {
      return i;
    }
  }
  return -1;
}
// console.log(firstNonRepeatChar("loveleetcode"))

function strCompression(str) {
  let res = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      res = res + str[i] + count;
      count = 1;
    } else {
      count++;
    }
  }
  return res;
}
// console.log(strCompression("aaabbc"));

function majorityElm(arr) {
  let n = Math.floor(arr.length / 2);
  let map = new Map();

  for (let char of arr) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of arr) {
    if (map.get(char) > n) {
      return char;
    }
  }
}
// console.log(majorityElm([2, 2, 1, 1, 1, 2, 2]));

function isAnagram(s, t) {
  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) return false;

    map.set(char, map.get(char) - 1);
    if (map.get(char) == 0) {
      map.delete(char);
    }
  }
  return true;
}
// console.log(isAnagram("listen", "silent"));

function maxArea(arr){
    let left = 0; 
    let right = arr.length - 1;
    let max = 0;

    while(left < right){
        let l = Math.min(arr[left], arr[right]);
        let b = right - left;
        let a = l*b;
        max = Math.max(a, max);

        if(arr[left] < arr[right]){
            left++;
        }else{
            right--;
        }
    }
    return max
}
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))   

// if given array is sorted 
function twoSum(arr, k){
    let left = 0; 
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == k) return true
        else if(sum>k){
            right--
        }else{
            left++
        }
    }
    return false
}

function twoSum(arr, k){
    let map = new Map();

    for(let i = 0; i<arr.length; i++){
        let compliment = k - arr[i]

        if(map.has(compliment)){
            return [map.get(compliment), i]
        }

        map.set(arr[i], i);
    }

    return []
}
// console.log(twoSum([2,7,11,15], 9))

function threeSum(arr){
    arr.sort((a, b)=> a-b);
    let result = [];
    
    for(let i = 0; i<arr.length-1; i++){
        if(i>0 && arr[i] === arr[i-1]) continue;

        let left = i + 1;
        let right = arr.length - 1;

        while(left < right){
            let sum = arr[i] + arr[left] + arr[right];
            console.log(sum)
            if(sum == 0){
                result.push([arr[i], arr[left], arr[right]])
                left++; 
                right--;
            } else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return result;
}
// console.log(threeSum([-1,0,1,2,-1,-4]))

function minimumOperations(arr){
    let seen = new Set();
    let opps = 0;

    for(let i = 0; i<arr.length; i++){
        if(seen.has(arr[i])){
            opps++;
            seen.clear();
        } else {
            seen.add(arr[i]);
        }
    }
    return opps;    
}
// console.log(minimumOperations([1,2,3,4,2,3,3,5,7]));

function isValidParen(str){
    let stack = [];
    let map = {')':'(', '}':'{', ']':'['}

    for(let char of str){
        if(char == '(' || char == '{' || char == '['){
            stack.push(char);
        } else {
            if(stack.length === 0 || stack.pop() !== map[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
}
// console.log(isValidParen("()[]{}"));

function kdistElem(str, k){
  let map = new Map()
  let left = 0; 
  let max = 0

  for(let right = 0; right<str.length; right++){
    let char = str[right];
    map.set(char, (map.get(char) || 0) + 1);

    while(map.size > k){
      let leftChar = str[left]
      map.set(leftChar, map.get(leftChar) - 1);
      if(map.get(leftChar) === 0){
        map.delete(leftChar);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max
}
// console.log(kdistElem('eceba', 2))//3
// console.log(kdistElem('aaabbcc', 2))//5

function minWindowSubStr(s, t){
  if(s.length < t.length) return '';
  
}