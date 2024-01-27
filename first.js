// Hello World
console.log("Hello World");
// variables
let fullName = "Tony Stark";
let age = 10;
let price = 99.99;
let x = null; 
let y = undefined;
let z = true;// Boolean
let a = BigInt("123");
let b = Symbol("Hello");
console.log(fullName + " " + age + " " + price);
// Var , Let and Constant
var Age = 10;
var Age = 20;
var Age = 80;
console.log(Age);
let Price = 100;
Price = 200;
Price = 300;
console.log(Price);
const PI =  3.4;
// const PI; Dont have initilizer 
// const PI = 4; Error
// PI = 4; Error
console.log(PI);
typeof PI;
// Objects 
const student = {
    fullName: 'Rahul Kumar',
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
console.log(student);
console.log(student.age);
console.log(student["cgpa"]);
student.fullName = 'Shouvik Mistry';//Const Object Value can be change but const variable can not changed
console.log(student.fullName);

//Let's Practice
// Q1. Create a const object called "product" to store information shown in the picture.
const product ={
    title: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);

//Q2. Create a const object called "profile" to store information shown in the picture.

const instagram={
    userName: "Shradha Khapra",
    post: 196,
    folllower: 569000,
    following: 4,
    isFollo: true,
    bio :"Apna College",
};
console.log(instagram);
console.log(typeof instagram.userName);