const tinder=new Object();//sinsgleton 
const tinder2={};//non singleton
//both of them create an empty object

tinder.Id="q1212414";
tinder.name="dfagarg";
tinder.isLogged=false;

const regularUser={
    email:"som@gmail.com",
    fullname:{
        userfullname:{
            firstName:"sdfsj",
            LastName:"kkkkkk"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);//sdfsj

const obj1={
    1:"a",
    2:"b",
}

const obj2={
    3:"c",
    4:"d",
}

// const obj3= Object.assign({},obj1,obj2);
// console.log(obj3);//combines and gives the new object

const obj3={...obj1,...obj2};//spread

console.log(obj3);

const user=[
    {
        id:1,
        email:"fwouefwe"
    },
    {
        id2:3,
        email2:"aerjfvq"
    }

]
user[1].email;

console.log(tinder);
console.log(Object.keys(tinder));
//[ 'Id', 'name', 'isLogged' ]returns an array of the keys
console.log(Object.values(tinder));
//[ 'q1212414', 'dfagarg', false ]
console.log(Object.entries(tinder));
//[ [ 'Id', 'q1212414' ], [ 'name', 'dfagarg' ], [ 'isLogged', false ] ]

console.log(tinder.hasOwnProperty('isLoggedIn'));//has the property or not//false
