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
            let strMethod = "ApnaCollege";
            let newstr = strMethod.toUpperCase();
            console.log(strMethod);
            console.Log(newstr);