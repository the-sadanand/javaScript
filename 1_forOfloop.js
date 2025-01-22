// example one1  // 

// let str="apna college";
// for(let i of str){   // of 
//     console.log(i);
// }
// let  result=""
// for(let i of str){
//     result+=i;
//     if(i!='a'){
//         console.log(i);
//     }
// }
// console.log(result);

// example #2 //

let Student={
    Name : 'sadanand',
    cgpa:8.67,
    isPass:true,
};
prompt("enter a random number")

for (let key in Student){   //in
    // console.log(key);
    console.log("key=",key,",value of each key=",Student[key]);
}