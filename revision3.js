function missingNum(arr){
    let n = arr[arr.length - 1]
    let sum = arr.reduce((total, num) => total + num)
    let total = (n*(n+1)/2)
    return total - sum
}
// console.log(missingNum([1, 2, 3, 4, 6, 7]))

function isAnagram(str1, str2){
    let map = new Map();
    for(let char of str1){
        map.set(char, (map.get(char) || 0) + 1);
    }

    for(let char of str2){
        if(!map.has(char)) return false
        map.set(char, map.get(char) - 1)
        console.log(map)
        if(map.get(char)<0) return false
    }

    return true
}

// console.log(isAnagram("listen", "sileent"))

function freqInArr(arr){
let freq = 0;
let map = new Map();

    for(let char of arr){
        map.set(char, (map.get(char) || 0) + 1)
    }
    
    for(let char of map){
        if(char[1]>freq){
            freq = char[1];
        }
    }
    return freq
}
// console.log(freqInArr([1, 2, 3, 3, 3, 2, 1, 5]));