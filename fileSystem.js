const fs = require("fs");
fs.readFile("./hello.txt", "Utf-8", (err, data)=>{
    if(err){
        return console.log(err)
    }
    // console.log(data);
})

 fs.writeFileSync("./output.txt", "helloWorld, my name is Hello and i'm demo and nodeJs is amazing");

 const result = fs.readFileSync("./output.txt", "utf-8")
    // console.log(result);

// console.log("Second")

async function countTotalLinesInFiles(filePaths) {
  let totalLines = 0;
  try{
    for(let i = 0; i<filePaths.length; i++){
      const data = fs.readFileSync(filePaths[i], "utf-8")
      const lines = data.split('\n').length
      totalLines += lines
    }
    console.log(totalLines);
   }
   catch(error){
      console.log(`${error.message}`)
   }
}

const Input = ["file1.txt","file2.txt","file3.txt"];
// countTotalLinesInFiles(Input);  

//-----------------------------------------------------

const axios = require('axios');
const { error } = require("console");

function fetchData(urls) {
    // Create an array to hold the promises for each request
    const promises = [];

    // Map each URL to an Axios GET request and push the promise to the array
    urls.forEach((url) => {
        const promise = axios.get(url)
            .then((response) => response.data)
            .catch((error) => {
                // If an error occurs, reject the promise with a meaningful error message
                throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
            });

        promises.push(promise);
    });

    // Use Promise.all to wait for all requests to complete
    return Promise.all(promises);
}

// Example usage:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];

fetchData(urls)
    .then((responses) => {
        console.log('Responses:', responses);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });