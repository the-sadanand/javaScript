//Example 1........
// sum function.....
// function sum(a,b){
//     return a+b;
// }

// function sum(a,b){
//     console.log(a+b);
// }

//  let result=sum(34,5);
//  console.log(result);

//  Example 2...........
// function sum(a,b){
//     return a+b;
// }
// let result=sum(45,6);
// console.log(result);
// console.log(sum(4,5));

// Example 3.........

// ArrowSum

// const ArrowSum=(a,b)=>{
//     console.log(a+b);
// }
// console.log(ArrowSum);
// ArrowSum(5,6);


// Example 4.........

function CountVowel(str){
    let count =0;
    for (const char of str){
        if(char=='a' ||
            char=='e' ||
            char=='i' ||
            char=='o' ||
            char=='u' 
        )
        {
            console.log(char);
            count++;
        }
    }
    return count;
}

console.log(CountVowel("sadanand"));
