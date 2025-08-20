// Second highest number of an Array
// function findSecondHighest(numbers) {
//     // Remove duplicates from the array using Set
//     const uniqueNumbers = Array.from(new Set(numbers));
//     // console.log(uniqueNumbers);

//     // Sort the array in descending order
//     const sortedArray = uniqueNumbers.sort((a, b) => b - a);
//     // console.log(sortedArray);

//     // Check if the array has at least two elements
//     if (sortedArray.length >= 2) {
//       // The second highest number will be at index 1 after sorting
//       return sortedArray[1];
//     } else {
//       // Handle the case when there is no second highest number
//       return "There is no second highest number.";
//     }
//   }
  
// //   // Example usage

//   const numbers = [10, 5, 3, 8, 20, 15, 17, 20, 15];
//   const secondHighest = findSecondHighest(numbers);
//    console.log(secondHighest); // Output should be 15
//---------------------------------------------------------------------------------------------------------------------------

//MAXIMUM and MINIMUM of an array

// function maxmin(arr){
//   //remove duplicates from array
//   const sortedArray = Array.from(new Set(arr)).sort((a, b)=>a - b);
//   //console.log(sortedArray)
//   console.log(`Lowest Number(minimum) = ${sortedArray[0]}`)
//   console.log(`Highest Number(Maximum) = ${sortedArray[sortedArray.length-1]}`)
// } 
// const num = [3, 7, 2, 10, 6,3,3]
// const result = maxmin(num)

//---------------------------------------------------------------------------------------------------------------------------

// function uniqueNumbers(arr){
//     const unique = Array.from(new Set(arr));
//     return unique
// }

// const num = [1, 2, 2, 3, 4, 4, 5]
// const result = uniqueNumbers(num);
// console.log(result)

//---------------------------------------------------------------------------------------------------------------------------

// const num = [3, -2, 7, -8, 4]
// const numm = [3, -2, 7, -8, 4,5]

// let sum = 0;

// function sumPositiveElements(arr){
// for(let i = 0; i<arr.length; i++ ){
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }   
//  } 
//   return sum;
// }

// const result = sumPositiveElements(num)
// console.log(result)
//---------------------------------------------------------------------------------------------------------------------------

// function stringLength(arr){
//   const length = []

//   for(let i = 0; i< arr.length; i++){
//       const currentstring = arr[i]
//       const stringLength = currentstring.length
//       length.push(stringLength);
//   }
//   return length;
// }

// const Input = ['apple', 'banana', 'orange']
// const result = stringLength(Input)
// console.log(result);
//---------------------------------------------------------------------------------------------------------------------------

// function findCommonElements(array1, array2) {
//   const commonElements = [];

//   for (const element of array1) {
//     if (array2.includes(element) && !commonElements.includes(element)) {
//       commonElements.push(element);
//     }
//   }

//   return commonElements;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const result = findCommonElements(array1, array2);
// console.log(result);
//-----------------------------------------------------------------------------------------------------

// function findDuplicate(arr){
//  const occurence = {}

//  for(const num of arr){
//     if(!occurence[num]){
//         occurence[num]=1
//     }else{
//         occurence[num]++
//     }
//  }

//  const duplicates = []

//  for(const num in occurence){
//     if(occurence[num]>1){
//          duplicates.push(parseInt(num))
//     }
//  }
//     return duplicates
// }

// const input = [1, 2, 2, 3, 4, 4, 5]
// const result = findDuplicate(input);
// console.log(result);
//-----------------------------------------------------------------------------------------------------

// function arrangeEvenOdd(arr){
//   const oddArray = []
//   const evenArray = []


//   for(const num of arr){
//     if([num]%2==0){
//       evenArray.push(num)
//     }else{
//       oddArray.push(num)
//   }
// }


//   return evenArray.concat(oddArray);  
// }

// const Input = [3, 8, 2, 5, 10, 6, 4];
// const result = arrangeEvenOdd(Input);
// console.log(result);
//---------------------------------------------------------------------------------------------------------------------------

// function productExceptSelf(nums) {
//   const n = nums.length;
//   const result = new Array(n);

//   let leftProduct = 1;
//   for (let i = 0; i < n; i++) {
//     result[i] = leftProduct;
//     leftProduct *= nums[i];
//   }
//   console.log(leftProduct)
//   let rightProduct = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     result[i] *= rightProduct;
//     rightProduct *= nums[i];
//   } 
//   console.log(rightProduct);

//   return result;
// }
// const inputArray = [1, 2, 3, 4];
// const result = productExceptSelf(inputArray);
// console.log(result);
//---------------------------------------------------------------------------------------------------------------------------

// const arr = []
// let i=5; 
// while(i>=0){
//  arr.push(i)
//  i--
// //  console.log(arr);
// }

// console.log(arr)

//---------------------------------------------------------------------------------------------------------------------------

// function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         product = product * arr[i][j];
//       }
//     }
//     // Only change code above this line
//     console.log(product); 
//   }
//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//---------------------------------------------------------------------------------------------------------------------------

// let arr1 = [1,2,3,4,5]

// function sum(arr, n) {
//     if(n<=0){
//       return 0
//     }else{
//     console.log(arr);
//     console.log(n-1);
//     console.log(arr[n-1]);
//     return sum(arr, n-1) + arr[n-1]
//     }
   
//   }

//   let result = sum(arr1,4)
//   console.log(result);
//---------------------------------------------------------------------------------------------------------------------------

// function randomRange(myMin, myMax) {
//   const result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
//   return result;
// }

// const ans = randomRange(1, 10)
// console.log(ans)

// console.log(Math.floor(0.8 * (10 - 1 + 1)) + 2);
//---------------------------------------------------------------------------------------------------------------------------

// function countdown(n){
//   if(n<1){
//     return [];
//   }else{
//     const countArray = countdown(n-1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(0))
//---------------------------------------------------------------------------------------------------------------------------

// function rangeOfNumbers(startNum, endNum) {
//   let total = endNum - startNum
//   // let arr = []
// if(startNum === endNum){
//   return [];
// }else{
//   const countArray = rangeOfNumbers(endNum>startNum)
//   countArray.push(total);
// }
// return countArray;
// };
//---------------------------------------------------------------------------------------------------------------------------

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }
// }
// console.log(rangeOfNumbers(4,9));
//---------------------------------------------------------------------------------------------------------------------------

// Second smallest number in an array
// function secondSmallestNum(arr){
//   const sortedArray = Array.from(new Set(arr)).sort((a,b)=> a + b);
//   if(sortedArray.length > 1){
//     return `The Second Smallest Number from the array is ${sortedArray[1]}`;
//   }
//   return null;
// }

// let input = [5, 2, 8, 2, 9, 1];
// // let input = [5, 5];

// const result = secondSmallestNum(input);
// console.log(result);
//---------------------------------------------------------------------------------------------------------------------------

// calculates the maximum difference between elements
// function maximumDifference(arr){
//   sortedArray = Array.from(new Set(arr)).sort((a, b)=> a - b);
//    return (sortedArray[arr.length-1] - sortedArray[0]);
// }

// let input = [2, 7, 1, 5, 9, 3, 6, 10,]
// const result = maximumDifference(input)
// console.log(result);
//---------------------------------------------------------------------------------------------------------------------------

// function minmumAndMaximum(arr){
//     const resultarr = []
//     const sortedArray = Array.from(new Set(arr)).sort((a, b)=> a-b)
//     resultarr.push(sortedArray[0])
//     resultarr.push(sortedArray[sortedArray.length-1])

//     return resultarr
// }

// const input = [3, 8, 2, 5, 10, 6, 4]
// const result = minmumAndMaximum(input)
// console.log(result);
//-------------------------------------------------------------------------------------

// let myArray = [1, 2, 3];
// let sum
// let arraySum = myArray.reduce((previous, current) => previous + current)
// console.log(`Sum of array values is: ${arraySum}`);
//-------------------------------------------------------------------------------------

// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     for (let i = 1; i <= m; i++) {
//       // Adds the m-th row into newArray
//     let row = [];
//       for (let j = 1; j <= n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         row.push(0);

//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
//       newArray.push(row);
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);
//-------------------------------------------------------------------------------------

// function getIndexToIns(arr, num) {
//   if(arr.length === 0){
//     // return 0
//     console.log(0)
//   }

//     let newArr = arr.sort((a, b)=> a-b)
//     console.log(newArr)

    
//   for(let i = 0; i<newArr.length; i++){
//     if(num<=newArr[i]){
//       // console.log(i) 
//       return i
//     }
//   }
// }

// // getIndexToIns([40, 70, 60], 50);
// getIndexToIns([], 1);
//-------------------------------------------------------------------------------------

// function mutation(arr) {
//   // console.log(arr[1][2])
// // console.log(arr[0])
//   for(let i = 0; i<arr[1].length; i++){
//     // console.log(arr[1][i])
//     if(arr[0].includes(arr[1][i])){
//       console.log(true) 
//     }else{
//       console.log(false) 
//     }
//   }
//   // return false
// }

// mutation(["hello", "hey"]);
// // mutation(["Alien", "line"]);
//-------------------------------------------------------------------------------------

// function chunkArrayInGroups(arr, size) {
//   let resultArr = []
//   for(let i = 0; i<arr.length; i++){
//     // console.log(arr.slice(0,size))
//     resultArr.push(arr.slice(0,size))
//   }
//   // return resultArr;
//   console.log(resultArr)
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
//-------------------------------------------------------------------------------------

// function make2dArray(cols, rows){
//   let arr = new Array(cols);
//   for(let i = 0; i<arr.length; i++){
//     arr[i] = new Array(rows)
//   }
//   return arr
// }

// console.log(make2dArray(2,3))

//---------------------------------------------------------------------------

const arr = [1, 2, 1, 4, 5, 5]

function checkAge(arr) {
  return arr > 2;
}

const indexFinder = arr.findIndex((num) => {return num > 2})
// console.log(indexFinder)

const filter = arr.filter((num) => {return num > 3 })
// console.log(filter)

console.log("Array.js")

function  makeUniqueArray(arr){
  let map = new Map();
  let result = 0;

  for(let char of arr){
    map.set(char, (map.get(char) || 0) + 1);
  }

  for(let char of map){
    if(char[1]>1){
      result += char[1] - 1;
    }
  }
  return result;
}
// console.log(makeUniqueArray([1, 2, 1, 2]));

function pairSum(arr, k){

  if(arr.length<1) return -1

  let map = new Map();
  let result = 0;

  for(let char of arr){ 
    let compliment = k - char
    
    if(map.has(compliment)){
      result += 1;
    }

    map.set(char, (map.get(char) || 0) + 1)
  }

  if(result == 0) return -1;
  else return result;
}
// console.log(pairSum([1, 2, 3, 4], 5)); // Expected: 2, my Code Returns: 3

function pairSum(arr, k){
  let start = 0;
  let end = arr.length - 1;
  let count = 0;
  // console.log(arr[end] + arr[start])

  while(start < end){
    let sum = arr[start] + arr[end];
    if(sum == k){
      count++;
      start++;
      end--;
    } else if (sum < k){
      start++;
    } else {
      end--;
    }
  }

  return count === 0 ? -1 : count;
}
// console.log(pairSum([1, 2, 3, 4, 5, 6], 7));

function intersectionOfArr(arr1, arr2){
  let map = new Map();
  let result = [];

  for(let char of arr1){
    map.set(char, (map.get(char) || 0) + 1);
  }

  for(let char of arr2){
    if(map.has(char)){
      result.push(char)
      map.set(char, map.get(char) - 1)
      if(map.get(char)<1){
        map.delete(char);
      }
    }
  }
  // console.log(map);
  return result;
}
// console.log(intersectionOfArr([1, 2, 2, 2, 3, 4], [2, 2, 3, 3]));

function moveZeros(arr){
  let index = 0;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] !== 0) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      index++;
    }
  }
  return arr;
}
// console.log(moveZeros([2, 0, 4, 1, 3, 0, 28]));

function sqrt(n){
  return Math.floor(Math.sqrt(n))
}
// console.log(sqrt(7))

// Kadane’s Algoritm ----------------->
function MaxSubArrSum(arr){
  
  let maxSum = arr[0];
  let currSum = arr[0];

  for(let i = 1; i<arr.length; i++){
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// console.log(MaxSubArrSum([1, 2, 7, -4, 3, 2, -10, 9, 1])) //Output: 11
// console.log(MaxSubArrSum([-1, 2, 3, 4, 5]))

function searchInRotatedArr(arr, q){
  let map = new Map();
  let result = [];

  for(let i = 0; i<arr.length; i++){
    map.set(arr[i], i);
  }

  for(let char of q){
    if(map.has(char)){
      result.push(map.get(char))
    }else{
      result.push(-1);
    }
  }

  return result;
}
// console.log(searchInRotatedArr([2, 5, -3, 0], [5, 1]));

function searchInRotatedArr(arr, q) {
  function binarySearch(arr, key){
    let low = 0;
    let high = arr.length - 1;

    while(low<high){
      let mid = Math.floor((low + high) / 2);
      if(arr[mid] === key) return mid;

      if(arr[mid] <= arr[low]){
        if(key >= arr[low] && key < arr[mid]){
          high = mid - 1
        } else {
          low = mid + 1
        }
      } else {
        if(key > arr[mid] && key <= arr[high]){
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }
    return - 1
  }

  let result = [];
  for(let key of q){
    result.push(binarySearch(arr, key))
  }

  return result;
}
// console.log(searchInRotatedArr([2, 5, -3, 0], [5, 1]));

function separateNegativeAndPositive(arr){
  let index = 0;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] < 0){
      [arr[index], arr[i]] = [arr[i], arr[index]];
      index++;
    }
  }
  return arr;
}
// console.log(separateNegativeAndPositive([1, 2, -3, 4, -4, -5]))

function maxArea(arr){
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    let l = Math.min(arr[left], arr[right]);
    let b = right - left;
    let area = l * b;
    maxArea = Math.max(maxArea, area);
    
    if(arr[left] < arr[right]){
      left++;
    }else{
      right--;
    }
  }

  return maxArea
}

// console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
