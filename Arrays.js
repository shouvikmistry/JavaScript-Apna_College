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