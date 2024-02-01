//------------Array-------------

let marks = [97,98,99,85,85,86];
console.log(marks);
console.log(marks.length); //Property

let heros = ["iron man", "Hulk", "Thor", "Spidermnan"];
console.log(heros);
console.log(typeof(heros));

console.log(marks[0]);//index of Array
marks[0] = 100;
console.log(marks[0]);//index of Array is mutable but String is immutable

// Loop over Array
   heros = ["iron man", "Hulk", "Thor", "Spidermnan","Spider","Batman","Flash"];
   // for loop
    for (let i = 0; i < heros.length; i++) {
        console.log(heros[i]);
    }
   //for of loop
   for (const hero of heros) {
    console.log(hero);
   }

/*
Let's Practice
Qs.For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.
*/
   let Marks= [85, 97, 44, 37, 76, 60];
   let totalMarks = 0;
   for (const marks of Marks) {
    totalMarks = totalMarks + marks;
   }
   console.log("Total marks is "+totalMarks);
   let average = totalMarks / Marks.length;
   console.log(`Avarge marks is ${average}`);

   /*
   Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
    All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
   */

    let prices = [250, 645, 300, 900, 50];
    // for (let price of prices) { // it create new value  do nothing with original value so should be used for loop instead
    //     price = price*90/100;
    // }
    for (let i = 0; i < prices.length; i++) {
        prices[i] = prices[i]*90/100;
    }
    console.log(prices);

// Array Methods
    let arrayMethods = [0, 1, 2, 3, 4, 5]
    arrayMethods.push(6); // Added value at end of array
    console.log(arrayMethods);
    arrayMethods.unshift(-1); // Added value at start of array
    console.log(arrayMethods);

    arrayMethods.pop(); // deleted value at end of array
    console.log(arrayMethods);
    arrayMethods.shift(); // deleted value at start of array
    console.log(arrayMethods);
    
    console.log(arrayMethods.toLocaleString()); // to change array to string but doesnt change original array
    console.log(arrayMethods);

    let marvelHeroes = ["thor", "spiderman", "ironman"];
    let dcHeroes = ["superman", "batman"];
    let indianHeroes = ["shaktiman", "krish"];

    let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);//concat arrays but doesnt change original
    console. log (heroes);
    let newHeros = heroes.slice(0,3); // slice(start index, end index(non exclusive)) returns new array but doesn't change original
    console. log (heroes);
    console. log (newHeros);

    //Splice method use add,delete and replace splice(start index, Number of delete items , replace value) ### IT WILL CHANGE THE ORIGINAL ARRAY ###
    let arr = [1, 2, 3, 4, 5, 6, 71];
    arr.splice(2, 2, 101, 102);
    console.log(arr);

    //Add Element
    arr.splice(2, 0, 101);
    console.log(arr);
    
    //Delete Element
    arr.splice(3, 1);
    console.log(arr);
    
    //Replace Element
    arr.splice(3, 1, 103);
    console.log(arr);
    
    //Replace Element
    arr.splice(3, 1, 103);
    console.log(arr);
    
    //cut the array from index
    arr.splice(4); // [5 , 6 , 71]
    console.log(arr);// [1, 2, 101, 103]

/*
Let's Practice
Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/
    let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
    //a
    companies.shift();
    console.log(companies);
    
    //b
    companies.splice(3,1,"Ola")
    console.log(companies);

    //c
    companies.push("Amazon");
    console.log(companies);