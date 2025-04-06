//singleton
//literals dosnet make object

//object literals

const mySymbol=Symbol("Symbol");
const Jsuser={
    name:"Hitesh",
    age:18,
    location:"jaipur",
    isLoggedIn:false,
    lastLogIndays:["monday","tuesday"],
    "gender":"male",
    [mySymbol]:"Symbol"

}
//ways to access the object literals 
// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser.name);

// console.log(Jsuser.gender);
// console.log(Jsuser["gender"]);
// //Notice how I am using the symbols
// console.log(Jsuser[mySymbol]);

// //To change the value 
// Jsuser.name="HITESHa";
// //to keep the object same

// Object.freeze(Jsuser);

// console.log(Jsuser);

// Jsuser.greeting=function(){
//     console.log("hello js user");

// }
// console.log(Jsuser.greeting);//function ka reference aata fhai

// console.log(Jsuser.greeting());//its a  method 

//  Jsuser.greeting=function(){
//      console.log(`HELLO JS USER ${this.name}`);
//  }
//  console.log(Jsuser.greeting());

