console.log("Active File: DSA.js");

function secLargest(arr){
    let largest = -Infinity;
    let secLargest = -Infinity;

    for(let char of arr){
        if(char > largest){
            secLargest = largest
            largest = char
        } else if(char > secLargest && char < largest){
            secLargest = char;
        }
    }
    return secLargest === -Infinity ? -1 : secLargest
}
// console.log(secLargest([12, 1, 35, 10, 34, 1]))

function nonDecreasing(arr) {
    let modified = false;

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] > arr[i+1]){
            if(modified) return false;
            modified = true;
            
            if(arr[i] > 0 && arr[i-1] > arr[i+1]){
                arr[i+1] = arr[i];
            } else {
                arr[i] = arr[i + 1];
            }
        }
    }
    return true
}
console.log(nonDecreasing([-2, 7, -1, 0, 1, 2]))