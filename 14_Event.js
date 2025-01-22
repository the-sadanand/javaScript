// Event object>>>>>>>>>>.
// Example 1........
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     // evt is a variable
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }
// // Example 2...........
// let div=document.querySelector("div");
// div.onmouseover=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clinetX,e.clinetY);
// }

// Event Listeners>>>>>>>>>>>>
// <<<  node.addEventListener(event, callback);   >>>
// Example 1.......

// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",(evt)=>{
//     console.log("handler1");
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);
// })
// // both work on same button
// btn1.addEventListener('click',(evt)=>{
//     console.log("handler2");
// })


// // Example  2   ......
// const handler1=()=>{
//     console.log("button was clicked handler1");
// }
// btn1.addEventListener("click",handler1);
// btn1.removeEventListener("click",handler1);

