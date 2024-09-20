// Declaring and using var
var studentName = "Avish";
var studentAge = 25;
let isEnrolled = true;
console.log(`Hellow my name is ${studentName} and I am ${studentAge} and I am in Humber. ${isEnrolled}`); // Ans: Hellow my name is Avish and I am 25 and I am in Humber. true


// 1. String Values
let schoolName = "Humber";
console.log(schoolName); // Ans: Humber

// 2. Number
let classSize = 60;
console.log(classSize); // Ans: 60

// 3. Boolean
let pass = true;
let fail = false;
console.log(pass);
console.log(fail);  // Ans: true , false

// 4. Array
let subject = ['Web Programming','Javascript','Algo']
console.log(subject[2]); // Ans: Algo
subject.push('Database'); // Ans: adds Database to array list
console.log(subject); // Ans: [ 'Web Programming', 'Javascript', 'Algo', 'Database' ]
subject.pop(); // Ans: removes last element of the array
console.log(subject); // Ans: [ 'Web Programming', 'Javascript', 'Algo' ]

// 5. Object
let profile = {
    firstName : "AAA",
    lastName : "BBB",
    age : 24
};
console.log(profile); // Ans: { firstName: 'AAA', lastName: 'BBB', age: 24 }
console.log(profile.firstName); // Ans: AAA

// Using Basic Operators + - / *

console.log(1+1); // Ans: 2
console.log(1-1); // Ans: 0
console.log(6/3); // Ans: 2
console.log(2*3); // Ans: 6

// Using Comparison Operators == !== === < >

let a = 9;
let b = 5;

console.log(a == b); // Ans: false
console.log(a !== b); // Ans: true
console.log(a === b); // Ans: false
console.log(a < b); // Ans: false
console.log(a > b); // Ans: true

// Using Logical Operator && || !

let c = true;
let d = false;

console.log(c && d); // Ans: false
console.log(c || d); // Ans: true
console.log(!c); // Ans: false











