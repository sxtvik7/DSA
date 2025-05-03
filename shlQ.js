// Satvik
console.log("SHL questions")
// Automata
// Q1.
/*A cold storage company has N storage units for various products. The company has received N orders that must be
preserved at respective N temperatures inside the storage units. The company manager wants to identify which
products must be preserved at negative temperatures. */
const findNegTemp = (arr) => {

    let result = []

    for(let item of arr){
        // console.log(item)
        if(item < 0){
            result.push(item)
        }
    }

    return result
}

// Q2. 
/* An alternate sort of a list consists of alternate elements (starting from the first position) of the given list after sorting
it in an ascending order. You are given a list of unsorted elements. Write an algorithm to find the alternate sort of the
given list. */
function altSort(arr){
    arr.sort((a, b) => a - b);
    let result = []
    for(let i = 0; i<arr.length; i+=2){
        result.push(arr[i])
    }

    return result;
}
// console.log(altSort([7, 2, 9, 4, 1, 5]))

// Automata Pro

// Q1
/*In an online word recognition game for kids, the user needs to find the number of times the given word occurs in the
sentence. Both the given word and the sentence displayed on the user interface consist of letters from the English
alphabet only and are case insensitive (i.e., ‘toddler’ is same as ‘Toddler’). Neither the word nor the sentence contain
any white-spaces or special symbols.
Write an algorithm to print the number of times the given word appears in the sentence. */
function findAltStrCount(str, k){
    let count = 0;
     str = str.toLowerCase()
     k = k.toLowerCase()
 
     for(let i = 0; i<=str.length - k.length; i++){
         let substring = str.slice(i, (i+k.length))
 
         if(substring == k){
             count+=1
         }
     }
  return count  
 }
//  console.log(findAltStrCount("ToddlerToddlerTODDLERtodDler", "toddler"));

// Q2.
/*
A librarian runs a small library that has N number of student patrons. Each student member has a unique studentID.
The library has a certain number of books on M different subjects. The teacher has given each student an individual
assignment for which they will need to consult several different books. Prior to the assignment, the library had already
issued some books to the students. The students may still take additional books from the library to complete their
respective assignments. After completing their assignments, each student returns the books that they have borrowed.
Only when a book has been returned can another student borrow that book. When assigning books, the librarian
begins with the student with the smallest studentID and then proceeds with the IDs in increasing order. When they
reach the student with the largest studentID, they then go back to the student with the smallest studentID who has
not yet borrowed the book. Then the process continues in the same way. The librarian wants to find the sequence of
studentIDs that is optimal for the students to complete their assignments.
Write an algorithm to help the librarian find the sequence of studentIDs that is optimal for the students to complete
their assignments. If it is not possible for all the students to complete their assignments, output a list of length 1 with
content -1. */

// ____________________________  ____________________________  ____________________________  ____________________________

/*
Automata
Q1.
A company wants to provide a cab service for their N employees. The employees have IDs ranging from 0 to N-1. The
company has calculated the total distance from an employee's residence to the company, considering the path to be
followed by the cab to be a straight path. The distance to the company from itself is 0. The distance for the employees
who live to the left side of the company is represented with a negative sign. The distance for the employees who live
to the right side of the company is represented with a positive sign. The cab will be allotted a range of distance. The
company wants to find the distance for the employees who live within the particular distance range.
Write an algorithm to find the distance for the employees who live within the distance range.
 */
function findDist(d, minD, maxD){
    let result = []

    for(let i = 0; i<d.length; i++){
        if(d[i] >= minD && d[i] <= maxD){
            result.push(d[i])
        }
    }
    return result;
}
// console.log(findDist([-12, -5, 0, 3, 9, 15], -5, 10))
// console.log(findDist([-20, -15, -10, -5, 0, 5, 10, 15], -10, 5))

/*
Q2.
You are given a list of integers of size N. Write an algorithm to sort the first K elements (from list[0] to list[K-1]) of the
list in ascending order and the remaining (list[K] to list[N-1]) elements in descending order.
*/
let intList = [4, 3, 5, 6, 2, 7, 9, 1, 8, 12, 41, 67 ]

function intSort(n, k, list){

    let arrLeft = list.slice(0, k).sort((a, b) => a - b)
    let arrRight = list.slice(k, list.length).sort((a, b) => b - a)

    return arrLeft.concat(arrRight);
    
}
// console.log(intSort(12, 6, intList))

/*
Automata Pro
Q1.
A child's parent goes for a jog every morning. The child follows the parent several minutes later. The parent starts at a
position that is X meters away from their home and runs in a straight line at a constant speed of V meters per step for
N steps.
The child is standing X metres away from their home. They wonder how fast they must run at a constant speed of
V metres per step to achieve a maximum F, where F equals the number of their parent's footsteps that the child will
land on during their run. The first step that the child will land on from their starting position will have been landed on
by their parent.
Note that, if more than one prospective speed results in the same number of maximum common steps, output the
highest prospective speed as V .
Write an algorithm to calculate F and V .

Q2.
A transportation company wants to begin service in the city of Nazeriana. The company has a base location where it
parks all its vehicles. They have identified some pickup locations where the vehicles will collect passengers. Now the
company wants to identify the straight line routes from the base location to the pickup locations. They wish to ensure
the minimum number of routes while ensuring that all the pickup locations are covered.
Write an algorithm to help the company identify the minimum number of straight line routes from the base location to
the pickup locations, covering every pickup location.

 */

// ____________________________  ____________________________  ____________________________  ____________________________

// Automata
/*
Q1.
In a science research lab, combining two nuclear chemicals produces a maximum energy that is the product of the
energy of the two chemicals. The energy values of the chemicals can be negative or positive. The scientist wants to
calculate the sum of the energies of the two chemicals which produces maximum energy on reaction.
Write an algorithm to find the sum of the energy of the two chemicals which produces maximum energy on reaction.
*/
function findEnergySum1(arr) { //wrong cause assumes that the last two numbers always gives the best solution
   
    arr.sort((a, b) => a - b)
    console.log(arr)
    
   if(arr[arr.length-1] < 0){
    return arr[0] + arr[1]
   } else {
    return arr[arr.length-1] + arr[arr.length-2]
   }
}

// console.log(findEnergySum1([-20, -10, 1, 5]))

function findEnergySum(arr){
    arr.sort((a, b) => a - b)
    console.log(arr)

    let positiveNumPrdt = arr[arr.length-1] * arr[arr.length-2];
    let NegativeNumPrdt = arr[0] * arr[1];

    if(positiveNumPrdt > NegativeNumPrdt){
        return arr[arr.length-1] + arr[arr.length-2]
    } else {
        return arr[0] + arr[1]
    }


}

// console.log(findEnergySum([-1, -7, -3, -4]))
// console.log(findEnergySum([1, 7, 3, 4]))