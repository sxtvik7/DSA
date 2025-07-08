// Regular Expressions 

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// const result = testRegex.test(testStr);
// console.log(result);

// let petString = "James has a pet cat.";
// let petRegex = /dog| cat| bird| fish/; 
// let result1 = petRegex.test(petString);
// console.log(result1);

// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result2 = fccRegex.test(myString);
// console.log(result2);

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; 
// let result3 = extractStr.match(codingRegex); 
// console.log(result3);
//---------------------------------------------------------------------------------

//Given:"Hello World"  Result:"HeLo wOrLd"

function capLetter (string){
final=[]
for(let i=0; i < string.length; i++){
    if(i%2===0){
        final.push(string.charAt(i).toUpperCase());
        } else {
            final.push(string.charAt(i));
    }
  }
console.log(final.toString());
}


const capLetter = (string)=>{
    let final=""
    for(let i=0; i < string.length; i++){
        if(i%2===0){
            final += string[i].toUpperCase()
            } else {
            final += string[i].toLowerCase()
        }
      }
    return final
    }
    
    // console.log(capLetter("Hello World"));

    const demo= (word)=>{
        console.log(word.length);
    }
    let str = "hello World"
    demo(str)    

 const arr = [1,2, [3, 4, [5, 6, [7, 8]]]]
// console.log(arr.flat(3));

//------------------------------------------------

// let hello = "   Hello, World!  ";
// let wsRegex = /^(\w)$/; // Change this line
// let result = hello.match(wsRegex); 
// let result1 = wsRegex.test(hello); 
// console.log(result);console.log(result1);
//------------------------------------------------

function quickCheck(arr, elem) {
    //  console.log(elem);
     let result = arr.indexOf(elem)

     if(result == -1){
        return false
     }
        return true

  }
  
//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//   console.log(quickCheck(["onions", "squash", "shallots"], "onions"));
//   console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
//------------------------------------------------
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let result = 0

      for (const user in allUsers){
        console.log(allUsers[user].online)
        
        if(allUsers[user].online === true){
           result++;
        }
      }
      return result
    // Only change code above this line
  }
  console.log(countOnline(users));
//------------------------------------------------