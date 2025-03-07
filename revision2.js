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


var twoSum = function(num, target) {
    let curNum
    let nextNum

    for(let i=0; i<num.length; i++){
      curNum = num[i] 
      nextNum = num[i+1]

      if(curNum + nextNum === target){
        console.log(i , i+1)
      }
    }

};

// twoSum([3, 2, 4], 6)
// twoSum([2,7,11,15], 9)
// twoSum([3,3], 6)

var twoSum = function(nums, target) {
  const numToIndex = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      console.log(complement);
      console.log(numToIndex)
      console.log(numToIndex.hasOwnProperty(complement))
      console.log("______________")
      if (numToIndex.hasOwnProperty(complement)) {
          return [numToIndex[complement], i];
      }
      numToIndex[nums[i]] = i;
  }
  return []; // Return an empty array if no solution is found
};

// Testing
console.log(twoSum([5, 2, 4], 6)); // Output should be [1, 2]
// console.log(twoSum([2, 7, 11, 15], 9)); // Output should be [0, 1]
// console.log(twoSum([3, 3], 6)); // Output should be [0, 1]
