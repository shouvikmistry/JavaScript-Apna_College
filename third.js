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