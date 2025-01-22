// classes and object

// example 1.................................................
 
// const student={
//     fullName:"sadanand kumar",
//     marks:90.6,
//     printMarks:function(){
//         console.log("marks",this.marks);
//     },
// };

// Example 2...........................................................

// const employee={
//     calcTax(){
//         console.log("Tax rate is 10%");
//     },
// };

// const karanArjun={
//     salary:50000,
// }

// karanArjun.__proto__=employee;

// ## classes in JS >>>>>>>>>>.
// Example 1.............................................................

// class Toyotacar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// let fortuner= new Toyotacar();
// fortuner.setBrand("fortuner");
// let lexus = new Toyotacar();


// ### CONSTURCTOR ###

// example 1.............................................................

// class Toyotacar{
//     constructor(){
//         console.log("creating new object ");
//     }
// }

// let fortuner = new Toyotacar();
// let lexus = new Toyotacar();

// Example 2................................................................

// class Toyotacar{
//     constructor(brand){// more parameter can be in a constructor
//     console.log("creating new object");
//     this.brand=brand;
//         }
// }

// let fortuner=new Toyotacar("fortuner");
// let lexus=new Toyotacar();
// console.log(fortuner.brand);
// console.log(lexus.brand);
// lexus.brand="lexus";
// console.log(lexus.brand);

// ## Inheritance in javaScript ## class child extends parent

// Example 1.........................................................

// class person{
//     constructor(){
//         console.log('eat');
//     }
// }

// class engineer extends person{
//     constructor(branch){
//         super();// to invoke parent  class constructor
//         this.branch=branch;
//     }

//     works(){
//         console.log("solve problem build something");
//     }
// }

// let engObj= new engineer("cse");

// Example 2...............................................................

// class person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.species="homo sapeins";
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class engineer extends person{
//     constructor(branch){
//         console.log("enter child consturctor");
//         super();
//         this.branch=branch;
//         console.log("exit chid constructor");
//     }
//     work(){
//         super.eat();
//         console.log("solve problem , build something");
//     }
// }

// let engObj= new engineer("CSE");
// engObj.work();


// Let's Practice ....................................................

let data= "secret information";

class user{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data= ",data);
    }
}

class admin extends user{
    editData(){
        data="some new value";
    }
    constructor(name, email){
        super(name,email);
    }
    }

let student1= new user("sadanand ", "abc@gmail.com");
let student2= new user("aman","aman@gamil.com");
let admin1=new admin("dean","dean@123");
