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

