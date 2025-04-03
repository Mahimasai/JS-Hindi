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

let user1 = {
    email:"user@gmail",
    upi:"6449997",
}
let user2= user1;
user2.email="hihihihihi@gmail.com"

console.log(user1.email);//hihihihihi@gmail.com
console.log(user2.email);//hihihihihi@gmail.com




