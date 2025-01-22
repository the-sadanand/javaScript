// // Example #1..............

// let marks =[23,23,3,66,56,56,53,60,67,89,47,69,56,97];

// console.log(marks);
// console.log(marks.length);


// let heros=['ironman', 'batman', 'spiderman','superman'];

// console.log(typeof heros );
// console.log(typeof marks);

// let sum=0;
// for (let val of marks){
//     sum+=val;
// }
// console.log(`total marks = ${sum}`);

// Example2 ...............

// let items = [315 ,666,654,463,136];

// let i =0;
// for (let val of items){
//     let offer= val/10;
//     items[i]=items[i]-offer;
//     console.log("new rate of item is = ", items[i]);
//     i++;
// }


let food=['apple', 'rice', 'wheat','baigan'];

console.log(food);
food.push("banana");
console.log(food);
lastOne=food.pop();
console.log(lastOne);
console.log(food);

for (let items in food){
    console.log(items);
}
for (let items in food){
    console.log( food[items]);
}

console.log();
console.group(food.toString());
