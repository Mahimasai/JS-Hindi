// Stack (for all primitives: String,number,undefined,Symbol,null,bool, BigInt )

//heap(non-primtive)

//example:
//call by value
let myYoutubename="jjjjjjjjjjjjjj";
//stack ek ke upar ek

let anothername= myYoutubename;
anothername="jdjdjdjdj";
console.log(anothername);//jdjdjdjdjd
console.log(myYoutubename);//jjjjjjjj

//call by refernece

// let user1 = {
//     email:"user@gmail",
//     upi:"6449997",
// }
// let user2= user1;
// user2.email="hihihihihi@gmail.com"

// console.log(user1.email);//hihihihihi@gmail.com
// console.log(user2.email);//hihihihihi@gmail.com


// const name='tom';
// console.log(`hello my name is ${name} wlccccc`);

// //new way of declaring the String
// const gamename= new String('tomjerry');
// console.log(gamename);

// const name = new String("hloaorld");
// undefined
// console.log(name);
// VM811:1 String {
// 'hloaorld'}
// 0: "h"
// 1: 
// "l"2: 
// "o"3: "a"4: 
// "o"5: 
// "r"6: "l"7: "d"length: 8[[Prototype]]: String[[PrimitiveValue]]: "hloaorld"
//it is directly in the console 

//here string is an object 