// 3396. Minimum Number of Operations to Make Elements in Array Distinct

// not valid_______>
var minimumOperations1 = function(nums) { 
    let count = 0;

    let head = nums[0]
    let slow = head; 
    let fast = head;

    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        
        console.log(fast == slow)

        if(fast === slow) {
            nums.splice(0, 3);
            count++
        } else {
            break;
        }
    }
    return count;   
};

// bruteforce____>
var minimumOperations2 = function(nums) {
    let count = 0;

    while(true) {
        let seen = new Set();
        let hasDuplicate = false;

        for(let num of nums){
            if(seen.has(num)){
                hasDuplicate = true;
                break;
            }

            seen.add(num)
        }
        
        if(!hasDuplicate){
            break;
        }

        nums.splice(0, 3);
        count++;
    }   
    return count
}
// console.log(minimumOperations2([1,2,3,4,2,3,3,5,7]))

// Optimal using sliding window

function minimumOperations(nums) {
    let seen = new Set();
    let ops = 0;
    let i = 0;
    let start = 0;

    for(let i = 0; i<nums.length; i++){
        if(seen.has(nums[i])){
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

function subarraySum1(nums, k){
    let sum = 0;
    let count = 0; 
    let start = 0;

    for(let i = 0; i<nums.length; i++){
        sum = sum + nums[i];
        console.log(`sum = ${sum} + ${nums[i]} = ${sum+nums[i]}, i = ${i}`)
        if(sum <= k){
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
function prefixArr(arr){
    let result = [arr[0]];

    for(let i = 0; i<arr.length-1; i++){  
        result.push(result[i] + arr[i+1]);
    }
    return result;
}

// console.log(prefixArr([5, 6, 12, 3]))

// 
function subarraySum(arr, k){
    let map = new Map();
    map.set(0, 1);

}


// console.log(subarraySum([1,1,1], 2))
// console.log(subarraySum([1, -1, 0], 0))
// console.log(subarraySum([1,2,3], 3))

function lengthOfLongestSubstring(str){
    let result = ""

    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<str.length; j++){
            if(str[i] !== str[j] && !result.includes(str[i])){
                result += str[i];
            }
        }
    }
    if(result.length === 0) return 1;
    else{
        return result.length
    }
}

// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("bbbbb"));

function wordCount (str, k){
    let map = new Map();

    for(let char of str){
        map.set(char, (map.get(char) || 0) + 1);
    }

    return map.get(k)
}
// console.log(wordCount("Testing", "e"))

function findCity(arr){
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

      if (JSON.stringify(sub) === JSON.stringify(reversed) && sub.length > maxLen) {
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

function majorityElem(arr){
    let n = Math.floor(arr.length/2);
    let map = new Map();

    for(let char of arr){
        map.set(char, (map.get(char) || 0) + 1);
        if (map.get(char) > n) return char;
    }

    return -1;
}
// console.log(majorityElem([2, 2, 1, 1, 2, 2, 2]));

function twoSum2(arr, k){
    let start = 0;
    let end = arr.length - 1;

    while (start < end){
        let num = arr[start] + arr[end];

        if(num === k) return [start+1, end+1]
        
        if(num > k){
            end--
        } else {
            start++
        }
    }
    return -1;
}
// console.log(twoSum2([2, 7, 11, 15], 9))

function longestSubStr(str) {
let window = "";
let max = 0
let start = 0;
let end = 0;

    while (end<str.length) {
        if(!window.includes(str[end])){
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


function longestSubStr(str){
    let charSet = new Set();
    let left = 0;
    let max = 0;

    for(let right = 0; right<str.length; right++){
        while(charSet.has(str[right])){
            charSet.delete(str[left])
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

function maxArea(arr){
    let left = 0;
    let right = arr.length - 1;
    let max = 0;

    while(left < right){
        let l = Math.min(arr[left], arr[right]);
        let w = right - left;
        let area = l * w;
        max = Math.max(area, max);

        if(arr[left] < arr[right]){
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

function threeSum(arr){
    arr.sort((a, b) => a - b);
    let result = [];

    for(let i = 0; i<arr.length - 2; i++){

        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = arr.length - 1;

        while(left < right){
            const sum = arr[i] + arr[left] + arr[right];

            if(sum === 0){
                result.push([arr[i], arr[left], arr[right]])

                while(arr[left] === arr[left + 1]) left++;
                while(arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            }
            else if(sum<0){
                left++;
            }else {
                right--;
            }
        }
    }
    return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))