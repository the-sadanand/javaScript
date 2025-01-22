// example #1

// let str="string";
// let str1="string";
// console.log(str.length);


//  example 2 //.....


// let obj ={
//     item:"pen",
//     price:10,
// };

// console.log("the cost of ", obj.item, "is",obj.price);

// example #3..........
// Template literals..........

// let specialString=`this is a template literals`;

// console.log(typeof specialString);

// let outPut=`the cost of ${obj.item} is ${obj.price} Rs `;

// console.log(outPut);
// // console.log(obj[price]); can't do


// ## String Method in JavaScript


let str="saDanad";
str.toUpperCase(); // dont effect on orignal string
console.log(str);

let str1=str.toLowerCase(); // creating new string
console.log(str1);


res=str+str1+ " kumar";
console.log(res);

console.log(str1.concat(res));

console.log(str1.replace("d","k"));
console.log(str1.replaceAll("d","k"));