//for summary
//Primitive(call by value)
//7 - types: String ,num , bolean , null , undefined, symbol,BigInt,

//java script is dynamiacally typed language 

const score =100;
const scorevalue=100.3;

 const idLogged=false;
 const outsideTemp=null;
 let userEamil;//undefined jaayega

  const id = Symbol("123");
 const anotherID=Symbol("123");
 console.log(id==anotherID);//gives false

 const bigNumber=5699999899989898n;//bigint bangaya

 const heros = ["shakti","naagraj","doga"];

let myObj ={
        name:"hitesh",
        age:22,


 }
const myFunction=function(){
    console.log("hello world");
}
console.log(typeof bigNumber);

//Reference Type (Non - Primitive)

//Arrayy,objects,functions
//refer the docs before the wuestioning

console.log(typeof myFunction);//function
console.log(typeof myObj);//object
console.log(typeof heros);//object
console.log(typeof anotherID);//symbol
//    https://262.ecma-international.org/