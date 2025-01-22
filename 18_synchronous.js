
// Example 1 ..............................................
// console.log("one");
// console.log("two");
// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,4000);// timeout

// // setTimeout(()=>{
// //     console.log("setTimeout using arrowFunction");
// // }, 4000);

// Example 2................................................................
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator (a,b,Callback){
//     Callback(a,b);
// }

// calculator(4,5,sum);

// setTimeout(()=>sum(2,5),4000);
// setTimeout(()=>calculator(2,3,sum),2000);

// CallBackHell>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Example1...........................................................

// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId)
//     },2000);
// }

// getData(1);
// getData("sadanad");
// getData("just rock it");

//Example 2 ....................................................

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         getNextData();
//     },2000);
// }
// getData(1,getData(2));

//Example 3....................................................

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData)
//         getNextData();
//     },2000);
// }
// getData(1,getData(2));//print at same time

// getData(1,()=>{
//     getData(2);
// });

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// });

// ### Promises ### >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let promise =new Promise((resolve,reject)=>{.....})// function with two handler
// Example 1 .....................................................
// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise ");
//     reject("some errord");// please check console of chrome
//     // resolve(123);
// });

// Example 2.......................................................

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             if(getNextData){
//                 getNextData();
//             }
//                 resolve();
//         },2000);
//     });
// }
// getData(3,4);
// getData(3,()=>getData(4));


// promise.then((res)=>{...........})>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// promise.catch((erro)=>{.......})
// Example 1..........................................................

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// // promise.then(() => {
// //     console.log("promise fulfilled");
// // });

// promise.catch(() => {
//     console.log("promise not fulfilled");
// });

// ### Promise Chain
// Example 1 .....................................................
// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetching data");
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// });

// Example 2.......................................................
// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data");
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// });

// Example 3 ..........................................................

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });

// Example 4 ............................................................

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     console.log(res);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log("success");
// })

// ###  Async--Await>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Example 1 ...........................................................

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api();
    await api();
}

getWeatherData();