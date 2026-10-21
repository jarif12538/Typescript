"use strict";
let user;
user = [];
let user1;
user1 = {
    name: "hasn Jarif",
    age: 25,
    isAdmin: true
};
let user2;
user2 = {
    name: "John Doe",
    age: 30,
    isAdmin: false
};
user.push(user1);
user.push(user2);
user.pop();
console.log(user);
if (user1.isAdmin) {
    console.log(`${user1.name} is an admin`);
}
else {
    console.log(`${user1.name} is not an admin`);
}
if (user2.isAdmin) {
    console.log(`${user2.name} is an admin`);
}
else {
    console.log(`${user2.name} is not an admin`);
}
