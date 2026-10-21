//built in  data types:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

let firstName;
let lastName;
let age;
let userId;
let isactive;
let fullName;
userId = 12345678901234567890n;
firstName = "Hasn";
lastName = "Jarif";
fullName = firstName + " " + lastName;
age = 25;
isactive = true;
console.log("Hello, my name is " + fullName + ". I am " + age + " years old. My user ID is " + userId + " and my account is active: " + isactive);
console.log(fullName.toLowerCase());
export {};
