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
