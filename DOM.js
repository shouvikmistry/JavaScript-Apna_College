// Documents Object Model
console.dir(window.document);// -> print properties and methods
// DOM manupulation

//Access Elements
// by ID
let heading = document.getElementById("heading")//h1
console.dir(heading);// -> print heading

// by class
let headings = document.getElementsByClassName("white")
console.dir(headings); // print html collection Similar to Array.

// by tags
let tags = document.getElementsByTagName("p")
console.dir(tags); // print html collection Similar to Array.

// by Query selector 
// by tags
let firstEl = document.querySelector("p"); // First element
console.dir(firstEl); 
let allEl = document.querySelectorAll("p"); // All element
console.dir(allEl); 

// by class
let firstCl = document.querySelector(".white"); // First element
console.dir(firstCl); 
let allCl = document.querySelectorAll(".white"); // All element
console.dir(allCl); 

// by ID
let firstId = document.querySelector("#heading")