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
console.log(minimumOperations2([1,2,3,4,2,3,3,5,7]))

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
