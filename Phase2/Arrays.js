// const arr=[1,5,8,9,5];
// //shallow copy it shares a same reference points means the original wala changes
// //deep copy the original one won't change

// //methods

// const myHeroes=["shakti maan","naagraj"];
// const numbers=[1,23,45,6];
// console.log(numbers[0]);

// //Array Methods
// numbers.push(6);
// console.log(numbers);//original array is changed
// numbers.pop();
// console.log(numbers);
// numbers.unshift(9);
// console.log(numbers);
// //adds nine at sarting 
// numbers.shift(0);
// //removes first element 
// console.log(numbers);

// console.log(numbers.includes(1));

// console.log(numbers.indexOf(-9));

// const newArray= numbers.join();//here it converts to string


// console.log(typeof newArray);//string

// //slice and splice

// ;console.log("A",numbers);

// const myn1=  numbers.slice(1,3);//just returns the part the actual array is not changed 

// console.log(myn1);
// console.log(numbers);

// const myn2= numbers.splice(1,3);
// //here the original gets changed
// console.log(myn2);
// console.log(numbers);
// //elments from 1 to 3 inedex are removed 
// //here last elemnet is all included

// const marvel_Heroes=["thor","iron msn.","spiderman"];
// const dc=["superman","flsdh","batman"
// ];

// marvel_Heroes.concat(dc);

// console.log(marvel_Heroes);//it prints a same array because the conact returns a new array so we need a new variable to store it 

// const arrN= marvel_Heroes.concat(dc);
// console.log(arrN);//now we get a concatenated array
//  //push adds it to an existing array but concat needs a new array;

//  //spread the operator

//  //glass breaks and spreads

// const all_Heroes=[...marvel_Heroes,...dc];
// console.log(all_Heroes);//now all heroes are spread and formed into a new array 

// const _Arr=[1,23,4,[5,6,7],[2,3,5,[4,5,6,7]]];

// const real_another_array=_Arr.flat(3);//all subarays are simplifies to simple array//basically 3 is depth it  can be Infinfity as well 
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"));
// //ante idhi array na  kada ani aduguthunam

// //if I wnat to convert to array

// console.log(Array.from("Hitesh"));
// //here array is made from the string 


// //interesting 

// console.log(Arrays.from({name:hitesh}));


// let score1=100;
// let score2=200;
// let score3=300;

// console.log(Array.of(score1,score2,score3));
// //returns an  array of the elements 








