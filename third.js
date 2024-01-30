//-----------------Loops------------------------
    // For Loops
        for (let i = 0; i < 5; i++) {
            console.log("Helll World");
        }
        console.log("Loop has ended");

    // Calculate sum of 1 to n numbers
        let sum = 0;
        let n = 5;
        for (let i = 0; i <=n ; i++) {
            sum +=i;
        }
        console.log("Sum is " + sum);
    // While Loops
        let i = 0;
        n = 5;
        while (i < n) {
                console.log("Helll World");
                i++;
            }
            console.log("Loop has ended");
    // Do-While Loops
        let j = 0;
        n = 5;
        do {
            console.log("Helll World");
            j++;
        } while (j < n);
        console.log("Loop has ended");

    // For-of Loop
        // Used for Array and Strings
        let str = "Helloworld";
        for (let val of str) {
            console.log("Value is :",val);
        }
    // For-in Loop
        // Used for Object 
        let student = {
            name: "Student",
            age: 20,
            cgpa: 8.5,
            isPass : true,
        };
        for (let key in student) {
            console.log(key, student[key]);
        }
/*
Practice 
Q1. Print all even numbers from 0 to 100

        for (let i = 1; i <= 100; i++) {
            if (i%2===0) {
                console.log("Even Number is ", i);
            } 
        }

Q2.Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
            let gameNum = 25;

            let userNum = prompt("Gues a game number");
            while (gameNum != userNum) {
                userNum = prompt("you Gues wrong a game number, try again");
                
            }
            alert("Congratulations, You entered a game number");
*/

//******** String ***********

            let str1 = "Hello world!";
            let str2 = 'Shouvik';

            console.log(str1.length); // string.length tells lenth of how many characters
            console.log(str1[0]); // string index Charecter position

            //Template literal
            let specialString =`This is a special string`

            let obj = {
                item: "pen",
                Price: 10,
            };
            let output = `the cost of ${obj.item} is ${obj.Price} rupees`;
            console.log(output);

            console.log("the cost of", obj.item, "is", obj.Price, "rupees");
            // Escape Characters
            console.log("Hello\nworld"); // \n newline
            console.log("Hello\tworld"); // \t Tab
            strEscape ="Hell\nWorld";
            console.log(strEscape.length); //10

            // String Method
            let strM = "Hello World";
            let strNew = strM.toUpperCase(); // toUpperCase Capitalize string
            console.log(strM); ///Don't Change Original String
            console.log(strNew); // Generate new String
            
            let strLow = strM.toLowerCase(); // toUpperCase lowercase string
            console.log(strLow);
            
            strM = "   Hello World   "
            let strTrim = strM.trim(); // remove only Starts and ends Spaces
            console.log(strTrim);
            
            strM = "01234567"
            let strSlice = strM.slice(1,5); // slice starting with start of string ending with end+1
            console.log(strSlice); //1234
            console.log(strM.slice(3)); //34567

            let strA = "Hello";
            let strB = "World";
            let res = strA.concat(strB);// Concatenate 2 Strings
            console.log(res) ;
            res = "I am learning "+strA+ strB;
            console.log(res) ;

            let youtube = "HelloWorld";
            console.log(youtube.replace("HelloWorld", "Youtube")) ; //Replace string 

            let JS = "I Love JS";
            JS[0]= "S"; // String is immutable only change with replace method or new string
            console.log(JS) ;

/*
Let's Practice
Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.
eg: user name = "shradhakhapra", username should be "@shradhakhapra13"

    // let user = "Shouvik";
    let user = prompt("Enter your full name without spaces");
    let strLength = user.length;
    let newUser ='@'+user+strLength;
    console.log(newUser);

*/