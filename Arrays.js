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

