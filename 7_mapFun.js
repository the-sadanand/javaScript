// //  map function.......

// let nums=[3,6,7];
// let numArr=nums.map((val)=>{
//     // return val%2==0;  // [ false, true, false ] just check
//        return val*val;
// });
// console.log(nums);
// console.log(numArr);

// // Filter function.......
// let arr=[1,2,3,4,5,6,7,8,9,10,11,13];

// let newArr=arr.filter((val)=>{
//     return val%2==0;
// })

// console.log(newArr);

// reduce function..........
const array1=[1,2,3,4];
const initialVal=0;
const sum=array1.reduce((accumulator ,currentValue)=>accumulator+currentValue, initialVal);

console.log(sum);
const outPut=array1.reduce((res,curr)=>{
    return res+curr;
})

console.log(outPut);