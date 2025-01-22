// Example 1........
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach(function printval(val){
//     console.log(val**val);
// });


// Example 2........

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach((val)=>{
//     console.log(val);
// });

// console.log(arr);

// Example 3......
// let arr=['pune ','patna','delhi'];

// arr.forEach((val)=>{
//     console.log(val.toUpperCase());
// })

// Example 4........

// let arr=['pune ','patna','delhi'];

// arr.forEach((val,i,a)=>{
//     console.log(val.toUpperCase(),(i*i), a);//(val , index, arritself)
// });

//Example 5......

let arr=['pune ','patna','delhi'];

arr.forEach((val,i,a)=>{
    console.log(val.toUpperCase(),(i*i), a.pop());//(val , index, arritself)
});
