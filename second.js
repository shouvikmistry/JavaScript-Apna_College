// ------------Operators-------------- 
let a = 5;
let b = 2;
 // Mathematical Operators
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);
console.log("a ** b = ",a ** b);
 //  ##### Unarry Opperator #####
    // post increment operator 
    console.log("a++ in this line a=",a++);// a=5 in this line but next line it will be a = a+1;
    console.log("next line a =",a); //a = 6
    // pre increment operator 
    console.log("++a in this line a =",++a);// a=7 in this line
    // post decrement operator 
    console.log("b++ in this line a=",b++);// b = 2 in this line but next line it will be b = b+1;
    console.log("next line b =",b); // b = 3
    // pre decrement operator 
    console.log("++b in this line b =",++b);// b=4 in this line

    // Assignment Operator 
    console.log(" a = ",a);
    a += 4; // a = a + 4
    console.log(" a += 4  a = ",a);
    a -= 4; // a = a - 4
    console.log(" a -= 4  a = ",a);
    a *= 2; // a = a * 2
    console.log(" a *= 2  a = ",a);
    a %= 3; // a = a % 3
    console.log(" a %= 3  a = ",a);
    a **= 3; // a = a ** 3
    console.log(" a **= 3  a = ",a);
    
    // Comparison Operators
    console.log(" a = ",a);
    console.log(" b = ",b);
    console.log(" a == b ",a==b);
    console.log(" a != b ",a!=b);
    let c = 2;// Number 
    let d = '2'; // string -> number
    console.log(" c == d ",c==d);// True
    // Thats why we need === Equal to & type
    console.log(" c === d ",c===d);// False
    console.log(" c !== d ",c!==d);// True
    console.log("8 > 4",a>b);// True
    console.log("8 >= 4",a>=b);// True
    console.log("8 < 4",a<b);// False
    console.log("8 <= 4",a<=b);// False
    
    // Logical Operators
    console.log("Logical AND");
    console.log("0 AND 0 = ",0&&0);
    console.log("0 AND 1 = ",0&&1);
    console.log("1 AND 0 = ",1&&0);
    console.log("1 AND 1 = ",1&&1);

    console.log("Logical OR");
    console.log("0 OR 0 = ",0||0);
    console.log("0 OR 1 = ",0||1);
    console.log("1 OR 0 = ",1||0);
    console.log("1 OR 1 = ",1||1);

    console.log("Logical NOT");
    console.log("true NOT = ",!true);
    console.log("false NOT = ",!false);

//----------------Conditional Statements ----------------
 //If Statement
    let age = 61;

    if (age>18) {
        console.log("You can Vote");
    }
    if (age<18) {
        console.log("You can not Vote");
    }
 //If-Else Statement
    if (age>18) {
        console.log("You can Vote");
    }
    else {
        console.log("You can not Vote");
    }
 //Else-if Statement
    if (age>60) {
        console.log("You Older to Vote");
    }
    else if (age>18) {
        console.log("You can Vote");
    }
    else {
        console.log("You can not Vote");
    }
 //  ##### Ternary Opperator #####
    let result = age > 18 ? "Adult" : "Child";
    console.log(result);

     


