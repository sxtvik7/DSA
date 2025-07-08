function processQueries(arr, queries){
    const mod = 1e9 + 7;
    let total = 0;

    for(let q of queries){
        const type = q[0]; // type of Querry
        let l = q[1] ; // start
        let r = q[2] ; // end
        if(type === 1){
            const base = arr[l]
            for(let i = l; i<=r; i++){
                arr[i] = (i - l + 1) * base;
            }
        } else if(type === 2) {
            let sum = 0;
            for(let i = l; i<= r; i++){
                sum = (sum + arr[i]) ;
            }
            total = (total + sum);
        }
    }
    return total;
}

// console.log(processQueries( [1, 4, 5, 1, 6, 7, 8],  [[1, 1, 6], [1, 1, 5], [2, 5, 5], [2, 3, 4], [2, 3, 3]]));
// console.log(processQueries( [3, 7, 4, 2, 5, 3, 7],  [[1, 0, 4], [2, 0, 1], [1, 3, 6], [2, 3, 3], [2, 0, 5]]));
// console.log(processQueries( [1, 8, 6, 10, 5, 6, 9],  [[2, 0, 3], [1, 2, 3], [1, 0, 6], [2, 1, 4], [2, 6, 6]]));


// console.log(processQueries([1, 2, 3, 4, 5], [[1, 2, 4], [2, 1, 5]]));

function distsum(arr, k) {
    let maxSum = 0; 
    let currSum = 0; 
    let start = 0;

    let map = new Map();

    for(let end = 0; end<arr.length; end++){
        let num = arr[end];
        map.set(num, (map.get(num) || 0) + 1)
        currSum += num;

        while(map.size > 2){
            let removeNum = arr[start]
            map.set(removeNum, map.get(removeNum) - 1);
            if(map.get(removeNum) === 0) map.delete(removeNum);
            currSum -= removeNum
            start++;
        }
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}

// console.log(distsum([1, 2, 2, 3, 2, 3, 5, 1, 2, 1, 1], 2));




function minInitialOil(c, arr){
    let oilLevel = 0; 
    let minLevel = 0;

    for(let op of arr){
        oilLevel += op;
        if(oilLevel<minLevel) {
            minLevel = oilLevel;
        }
    }
    return Math.max(0, -minLevel)
}

console.log(minInitialOil(3, [1, -1, -1]))
// console.log(minInitialOil(3, [1, 1, 1, 1]))