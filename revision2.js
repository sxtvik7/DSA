//String Reverseal
function revStr(str) {
  return str.split("").reverse().join("");
}
// console.log(revStr("hello"))

//Palindrome
const isPalindrome = (str) => {
  if (str.split("").reverse().join("") === str) {
    return true;
  }
  return false;
};
// console.log(isPalindrome("race"));

// Word Count
const countWords = (str) => {
  return str.split(" ").length;
};
// console.log(countWords("These should give you a good mix of challenges"))

// Array Sum
const arrSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
// console.log(arrSum([3, 4, 5]))

// Array Filtering
const sortEven = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
// console.log(sortEven([2,3,4,5]))

// Array Concatenation
function concatArr(arr1, arr2) {
  return arr1.concat(arr2);
}
// console.log(concatArr(["how are we"], [1, 2, "fine"]))

// String Capitalization
function strCapital(str) {
  var words = str.split(" ");
  var capitalizedWords = words.map(function (word) {
    // console.log(word.charAt(0).toUpperCase() + word.slice(1));
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}
// console.log(strCapital("hello world"))

// String Truncation
function strTruncate(str, leng) {
  if (str.length > leng) {
    return str.slice(0, leng) + "...";
  }
  return str;
}
// console.log(strTruncate("These should give you a good mix of challenges involving strings and arrays in JavaScript.", 28))

// Array Sorting Alphabetically
function sortAlpha(arr) {
  return arr.sort();
}
// sortAlpha(["Apple", "Grape", "Banana", "Mango"])

// String Rotation
function strRotate(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let concat = str1 + str1;

  if (concat.includes(str2)) {
    return true;
  } else {
    return false;
  }
}
// console.log(strRotate("acb", "bca"))

//_______________________________________________________________________________________

var twoSum = function (num, target) {
  let curNum;
  let nextNum;

  for (let i = 0; i < num.length; i++) {
    curNum = num[i];
    nextNum = num[i + 1];

    if (curNum + nextNum === target) {
      console.log(i, i + 1);
    }
  }
};

// twoSum([3, 2, 4], 6)
// twoSum([2,7,11,15], 9)
// twoSum([3,3], 6)

var twoSum = function (nums, target) {
  const numToIndex = {};
  for (let i = 0; i < nums.length; i++) {

    const complement = target - nums[i];

    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], i];
    }

    numToIndex[nums[i]] = i;
  }
  return []; // Return an empty array if no solution is found
};

// Testing
// console.log(twoSum([5, 2, 4], 6)); // Output should be [1, 2]
// console.log(twoSum([2, 7, 11, 15], 9)); // Output should be [0, 1]
// console.log(twoSum([3, 3], 6)); // Output should be [0, 1]

//_______________________________________________________________________________________

// 1️⃣ Find the Maximum and Minimum in an Array
const findMaxMin = (arr) => {
  // arr.sort((a, b) => a -b)
  // return `minimum Number ${arr[0]} Maximum Number ${arr[arr.length-1]}`

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return [min, max];
};
// console.log(findMaxMin([8, 2, 7, 3, 0]))

// 2️⃣ Check if the Array is Sorted

const checkSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] < 0) {
      return "NO";
    }
  }
  return "YES";
};

// console.log(checkSorted([1, 30, 35, 4]))

// 3️⃣ Reverse an Array In-Place

const RevAnArr = (arr) => {
  // let result = [];
  // for(let i = arr.length-1; i>=0; i--){
  //   result.push(arr[i])
  // }
  // return result

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};
// console.log(RevAnArr([1, 2, 3, 4, 5]))

// 4️⃣ Move All Zeros to the End

const moveZero = (arr) => {
  // let result = [];
  // let zero = [];

  // for(let i = 0; i<arr.length; i++){
  //   if(arr[i] !== 0){
  //     result.push(arr[i])
  //   } else {
  //     zero.push(arr[i])
  //   }
  // }

  // return result.concat(zero)

  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  return arr;
};
// console.log(moveZero([0, 1, 0, 3, 12]))

// 5️⃣ Find the Missing Number in Range 1 to N

const findMissNum = (arr) => {
  // for(let i = arr[0]; i<arr.length-1; i++){
  //   if((arr[i+1] - arr[i]) > 1){
  //     return arr[i] + 1;
  //   }
  // }
  // return false

  const N = arr.length + 1;
  const expectedSum = (N * (N + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
};

// console.log(findMissNum([1, 2, 4, 5, 6]))

// let arr = [1, 2, 3, 4, 5];
// [arr[0], arr[4]] = [arr[4], arr[0]];
// console.log(arr);
// let dumArr = [1, 2, 3, dumArr[1]]

// ✅ 2. Strings
// 1️⃣ Check if a String is a Palindrome

const checkPalindrom = (str) => {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
  if (rev == str) {
    return true;
  }
  return false;
};

// console.log(checkPalindrom("racecar"))

// 2️⃣ Count Vowels and Consonants

const vowConCount = (str) => {
  str = str.toLowerCase();
  console.log(str);
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      if ("aeiou".includes(str[i])) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return [vowels, consonants];
};

// console.log(vowConCount("satvik"))

// 3️⃣ Reverse Words in a Sentence

const revWord = (str) => {
  return str.split(" ").reverse().join(" ");
  // can also make a variable to store a split() value and then reverse it using loop, but this works as well.
};
// console.log(revWord("I am Satvik"))

// 4️⃣ Find the First Non-Repeating Character

const nonRepeat = (str) => {
  // for (let i = 1; i < str.length - 1; i++) {
  //   if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
  //     return str[i];
  //   }
  // }

  let map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
    console.log(map);
  }

  for (let char of str) {
    if (map[char] == 1) {
      return char;
    }
  }

  return -1;
};

// console.log(nonRepeat("aabbcdde"));

// ✅ 3. Hashing / Frequency Count

// 🔹 1️⃣ Find the Element That Appears Only Once

const onceElem = (arr) => {
  let map = new Map();

  for (let char of arr) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of arr) {
    if (map[char] == 1) {
      return char;
    }
  }
  return -1;
};
// console.log(onceElem([2, 3, 5, 4, 5, 3, 4]));

// 🔹 2️⃣ Count Frequency of Each Character in a String

const countFreq = (str) => {
  let map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
};
// console.log(countFreq("hello"))

// 🔹 3️⃣ Check if Two Strings Are Anagrams

const checkAnagrams = (str1, str2) => {
  // let map = {}
  // for(let char of str1+str2){
  //   map[char] = (map[char] || 0) + 1;
  // }
  // for(let char of str1+str2){
  //   if(map[char]%2 !== 0){
  //     return false;
  //   }
  // }
  // return true;

  if (str1.length !== str2.length) return false;

  // let map1 = {}
  // let map2 = {}

  // for(let char of str1){
  //   map1[char] = (map1[char] || 0) + 1;
  // }

  // for(let char of str2){
  //   map2[char] = (map2[char] || 0) + 1;
  // }

  // for(let key in map1){
  //   if(map1[key] !== map2[key]) return false;
  // }
  // return true;

  let map = {};

  for (let char of str1) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
};
// console.log(checkAnagrams("map","pam"))

// ✅ 4. Math / Bitwise

// 🔹 1️⃣ Check if a Number is Prime

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return false;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i + 2) {
    if (n % i === 0) return false;
  }

  return true;
}
// console.log(isPrime(9))

// 🔹 2️⃣ Count Number of Set Bits in an Integer

function countSetBits(n) {
  let binary = n.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) {
      count++;
    }
  }
  return count;
}
// console.log(countSetBits(9))

// 🔹 3️⃣ Check if a Number is a Power of Two

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

// console.log(isPowerOfTwo(18))

// ✅ 5. Two Pointer / Sorting

// 🔹 1️⃣ Check if Two Numbers in a Sorted Array Sum to Target

function twoSumSorted(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return true;
    else if (sum < target) left++;
    else right--;
  }
  return false;
}
// console.log(twoSumSorted([1, 2, 4, 6, 9], 10))

// 🔹 2️⃣ Merge Two Sorted Arrays

function mergeSortedArrays(arr1, arr2) {
  // return (arr1.concat(arr2)).sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))

// 3️⃣ Sort 0s, 1s, and 2s (Dutch National Flag Problem)

function sortColors(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      i = 0;
    }
  }
  return arr;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))

// 4️⃣ Remove duplicates from sorted array

function removeDuplicate(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
}
// console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 4]));

function filterWeights(arr) {
  return arr.filter((w) => w < 10 || w > 100);

  let res = [];
  for (let item of arr) {
    if (item < 10 || item > 100) {
      res.push(item);
    }
  }
  return res;
}
// console.log(filterWeights([1, 2, 45, 6, 101, 245, 20]))

function sortBooks(arr, k) {
  let filtered = [];

  for (let item of arr) {
    const [name, strRating] = item.split(":");
    const rating = parseFloat(strRating);

    if (rating >= k) {
      filtered.push({ name, rating });
    }
  }

  filtered.sort((a, b) => {
    if(b.rating !== a.rating) return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  })

  return filtered.map(book => `${book.name}:${book.rating}`)
}
// console.log(sortBooks(["Atomic Habits:4.5","Deep Work:3.9","The Alchemist:4.0","Zero to One:4.5","Ikigai:4.3",], 4.0));

function moveZeros(arr){
  let i = 0; 

  for(let j = 0; j<arr.length; j++){
    if(arr[j] !== 0){
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  return arr;
}
// console.log(moveZeros([0, 1, 0, 3, 12]))

function longestStreak(arr){
  let curr = 0;
  let max = 0;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] !==0 ){
      curr++;
      if(curr>max){
        max = curr;
      }
    } else{
      curr = 0
    }
  }
  return max;
}
// console.log(longestStreak([1, 1, 0, 1, 1, 1]));

function customSort(arr){
  let mid = Math.floor(arr.length/2);

  const firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
  const secHalf = arr.slice(mid, arr.length).sort((a, b) => b - a);

  return [...firstHalf, ...secHalf]
}
// console.log(customSort([1, 2, 3, 4, 5, 6, 7]))


function cost(arr){
let cost = 0;
let current = a[0];

for (let i = 1; i < a.length; i++) {
    if (a[i] % current === 0) {
        a[i] += 1;
        cost = 2;
    }

    for (let j = a.length - 1; j > i; j--) {
        if (a[j] % a[i] === 0) {
            cost = cost + Math.floor(a[j] / a[i]);
        }
    }
  }
}
// console.log(cost([2, 3, 4, 6, 7]));

// important concept
/*
❓ Problem 1: "Selective Removal Cost"
You are given an array of integers. You need to calculate a removal cost based on the following rules:

If a number is less than or equal to the number before it, you must remove it (skip it).

Each removal adds a cost of 1.

After all removals, return the final cost and the resulting array.
*/
function removalCost(arr){
  let cost = 0;
  let res = [];

  for(let i = 0; i<arr.length; i++){
    if(res.length == 0 || arr[i] > res[res.length - 1]){
      res.push(arr[i]);
    } else {
      cost++
    }
  }
  return {
    cost: cost,
    result: res
  };
}
// console.log(removalCost([2, 3, 1, 4, 2, 5]));

/*
❓ Problem 2: "Custom Product Adjustment"
You’re given an array of positive integers. For each element, you want to adjust it so that:

If it is divisible by any earlier element in the array, it is considered "dependent" and must be multiplied by 2.

Every time you do this multiplication, increase the adjustmentCost by 1.

Return the final adjusted array and the total adjustmentCost.
*/
function productAdjustment(arr){
  let cost  = 0;
  let adjusted = [arr[0]];
  
  for(let i = 1; i<arr.length; i++){
    let modified = false;

    for(let j = 0; j< i; j++){
      if(arr[i] % adjusted[j] === 0) {
        arr[i] *= 2;
        cost++;
        modified = true;
        break;
      }
    }
    console.log(arr)
    adjusted.push(arr[i])
  }
    return {
    adjusted,
    adjustmentCost: cost
  };
}
// console.log(productAdjustment([1, 2, 3, 4, 5]))

/*  
❓ Problem 3: "Unique Power Index"
You are given an array of positive integers.
For each element, calculate a power index based on these rules:

An element's power index is the number of unique previous elements that it is divisible by.

If an element has a power index > 0, add it to the strongList.

At the end, return the strongList and the total sum of power indexes (called totalPower).
*/