//---------------Functions-------------------------------

function myFunction(msg) { // parameter -> input
    console.log(msg);
}
myFunction("Hello world!"); // Argument

// function -> 2 numbers sum
function sum(a,b) {
    // a,b local variables
    console.log("Before return");
    return a + b;
    console.log("After return");// function ended in return
}
console.log("sum is ",sum(1,2));

// Arrow function
    // mordern javascript
    const arrowSum = (a,b) =>{
        // arrowSum is a function variable it can be used as a normal variable
        console.log("Sum is ",a + b);
    }

    arrowSum(1,2);
    
/*
Let's Practice
Qs. Create a function using the "function" keyword that takes a String as an argument &
returns the number of vowels in the string.
*/
function countVowels(str) {
    let count = 0;
    for (const word of str) {
        if (word === 'A' || word === 'E' || word === 'O' || word === 'I' || word === 'U'|| word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u') {
            // console.log(word);
            count++;
        }
    }
    console.log(count);
}
countVowels("Shouvik");

/*
Qs. Create an arrow function to perform the same task.
*/
let countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === 'A' || char === 'E' || char === 'O' || char === 'I' || char === 'U'|| char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            // console.log(char);
            count++;
        }
    }
    console.log(count);
}
countVow("Hello world!");
//-------------------------------------- Methods ----------------------------------------
//**For each Loop**
    //arr.forEach(callback function)
    // Higher order function take function parameter or return function

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function printValue(value) {// value at each iteration
    console.log(value);
});

//Arrow function
arr.forEach((value) =>{// value at each iteration
    console.log(value);
});

arr = ["pune", "delhi", "mumbai"]
arr.forEach((value, idx, arr) =>{//Three parameters can be passed for each iteration value, index and Array
    console.log(value.toUpperCase(),idx,arr);
});

/*
Let's Practice
Qs. For given array of numbers , print the square of each value using forEach Loop
*/
let Array = [1,2,3,4,5,6,7,8];

Array.forEach((value)=>{console.log(value +" Square Value is "+ value*value);});

//**Map Mtehod**
 //Similar to forEach but its create new array

    let newArr = Array.map((val) => {
        return val**2;
    });
    console.log(newArr);
    
//**Filter Method** 
    //filter even elements
    let evenArr = Array.filter((val) => {
        return val%2===0;
    });
    console.log(evenArr);
    //filter odd elements
    let oddArr = Array.filter((val) => {
        return val%2!==0;
    });
    console.log(oddArr);

// **Reduce Mtehpd**
    //Reduces the array to single value and returns

    // return sum of array 
    let arr1 = [1,2,3,4];

    const output = arr1.reduce((acc,  val) =>{
        //               return sum   next indes
        return acc    +  val;
    //step1    arr[0] +  arr[1]   
    });
    console.log(output);//10

    // return Largest of array 
    arr1 = [6,9,1,2,3,4];
    const output1 = arr1.reduce((acc,  val) =>{
        //               return largest   next indes
        return acc > val ? acc        : val;
    //step1  arr[0]>arr[1] return acc if not retrun val  
    });
    console.log(output1);//9

    // return smallest of array 
    arr1 = [6,9,1,2,3,4];
    const output2 = arr1.reduce((acc,  val) =>{
        //              return smallest   next indes
        return acc < val ? acc        : val;
    //step1  arr[0]<arr[1] return acc if not retrun val  
    });
    console.log(output2);//1

/*
Let's Practice
Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
*/

let marks = [100,98, 100,,70,80,95,93];
let filterMarks = marks.filter(val => {
    // return val >= 90 ? val : null;
    return val >= 90 ;
});

console.log(filterMarks);

/*
Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/

let n = prompt('Enter size of Array : ');
let arr2 = [];
for (let i = 1; i <= n; i++) {
    //arr2[i] = parseInt(prompt('Enter a number : ')); // parseInt() This parameter contains a string that is converted to an integer. // for custom array
    arr2[i-1] = i;

}
console.log(arr2);
let arrr = [1,2,3,4];
const output4 = arr2.reduce((prev , curr) =>{
 return prev + curr;
});
console.log("Sum of Element are : ",output4);

const output5 = arr2.reduce((prev , curr) =>{
 return prev * curr;
});
console.log("Product of Element are : ",output5);