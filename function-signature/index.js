"use strict";
let userinfo1;
let userinfo2;
userinfo1 = () => {
    console.log("User Info: No parameters");
};
userinfo2 = (name, age, email) => {
    console.log(`User Info: Name: ${name}, Age: ${age}, Email: ${email}`);
};
userinfo1();
userinfo2("John Doe", 30, "john.doe@example.com");
//what's happening here is that we are defining a function signature for userinfo1 and userinfo2. 
// userinfo1 is a function that takes no parameters and returns void. userinfo2 is a function that takes three parameters (name, age, email) and returns void. We are then assigning the functions to the variables and calling them.
