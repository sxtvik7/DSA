console.log("file: node.js")

let promise = new Promise((resolve, reject) => {
    // resolve("Success Done");
    // reject("Something went wrong");
});
promise
    .then(result => console.log("resolve: ", result))
    .catch(err => console.log("something went Wrong: ", err))
    .finally(() => console.log("refreshing.."))

// console.log(promise);

const callMe = async () => {
    if(true){
        return "true";
    }   
}

const parent = async () => {
    return await callMe();
}

(async() => {
    const a = await parent()
    console.log(a)
});

/* 
we use get for the data that we are not going to parse in the body at that time 
and we just need to fetch something out of JSON or response JSON Or we need to 
querry through the params.
 */

/*
Promise.resolve()
.then(( ) => console.log(1));

queueMicrotask(() => console.log(2));

setTimeout(() => console.log(3), 0);

console.log(4);

new Promise(() => console.log(5));

(async () => console.log(6))()  
*/

function* count() {
yield 1;
yield 2;
return 3;
}
for (const value of count()) {
// console.log(value)
}

// https://www.youtube.com/watch?v=l2f3xVvZGLA ___________________________________>

// if([] == true){
//     console.log('satvik is absent')
// } else {
//     console.log('satvik is present')
// }

// console.log([] == true)
// console.log('' == true)

// let obj = {
//     a: {
//         b: undefined
        
//         // {
//         //     k: "hello",
//         //     c: {
//         //         d: "left"
//         //     }
//         // }
//     }
// }

// console.log(obj.a?.b?.c?.d??'satvik');

// var abc = 25;

if( function f(){}){
    // abc = abc + typeof(f)
}

// console.log(abc)
// console.log({} == true)
// console.log(function f(){} == true)

let obj1 = { name: "Satvik", age:22, address: { city: "Mumbai" } };
let shallow = { ...obj1 }; //shallow copy

shallow.name = 'sxtvik' //first level of object/arrays are copied 
shallow.address.city = "New York"; //other than first level all other are referenced

// console.log(obj1)
// console.log(shallow.address) // new copy still pointing to same orignal object

let obj2 = { name: "Satvik", address: { city: "Mumbai" }, date: new Date()};
let deep = JSON.parse(JSON.stringify(obj1));  // Deep copy

deep.address.city = "New York";
// console.log(deep);
// console.log(obj2);

// console.log(obj2.address.city);  // Mumbai. new copy having their own sperate obj no pointing to original obj

// const jsonString = '{"name": "Alice", "age": 25, "isStudent": false}';
// const objj = JSON.parse(jsonString);
// console.log(objj);


let obj = {name: "satvik", age:22};
let newObj = {...obj, age: 23}

// let newObj = {age:65, age:23, age:22}

// console.log(newObj)
// console.log(Object.assign (obj))

// setTimeout(()=> console.log(1), 0)
// console.log(2)


// const a = {};
// const b = { key: "b"};
// const c = { key: "c"};
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

/* when you use an object as a key in another object (a[b]), it gets converted to a string. 
 By default, objects convert to "[object Object]" 
 
 a[b] = 123;
// really means:
a["[object Object]"] = 123;

a[c] = 456;
// really means:
a["[object Object]"] = 456;  // overwrites the previous one
 */


// const arr = [,,,]
// console.log(arr.length) // 3 



function abc(a, b, c){}
function xyz(a, b, c = 0){}
function pqr(a=0, b, c){}
// function.length → returns the number of parameters before the first one that has a default value.
// console.log(abc.length) // 3
// console.log(xyz.length) // 2
// console.log(pqr.length) // 0


// const arr1 = []
// const arr2 = []
// console.log(arr1 == arr2)
// console.log(arr1 === arr2)



// if({}){
//     console.log('hello')
// } else {
//     console.log('world')
// }



// const arr = [1, 2, 3]
// const arr1 = [0, ...arr];

// const [x, ...y] = arr
// console.log(x, y)



// console.log('1' + 2 + 2) //122
// console.log(2 + 2 + "1" + 2 + 2) //4122



function sub(x, y) {
  if (y !== undefined) {
    return x - y;
  } else {
    return function(z) {
      return x - z;
    };
  }
}

console.log(sub(8)(3))
console.log(sub(8, 3))