function nonDecreasing(arr) {
    let modified = false;

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            if(modified) return false; 
            modified = true;

            if(i === 0 || arr[i-1] <= arr[i+1]) {
            } else {
            }
        }
    }
    return true;
}

function simulateInput(inputString) {
    let inputArray = inputString.trim().split("\n");
    let index = 0;
    
    function readLine() {
        return inputArray[index++];
    }

    main(readLine);
}

function main(readLine) {
    let testCases = parseInt(readLine());
    while (testCases--) {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(' ').map(Number);
        console.log(nonDecreasing(arr));
    }
}

// Sample test cases input (modify as needed)
let sampleInput = `
2
3
8 4 6
3
8 4 2`;

simulateInput(sampleInput);
