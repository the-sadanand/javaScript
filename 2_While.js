//guess number 

let gameNum=25;
let UserNum= prompt("Guess the game number");
while(UserNum!=gameNum){
    UserNum=prompt("You enterd wrong number Guess again");
}

console.log("congratulation ,you Entered the right number");