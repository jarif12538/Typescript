"use strict";
let userNames;
userNames = ["hasn", "Jarif", "Rafiq", "Sakib"];
console.log(userNames[0]);
console.log(userNames.sort());
console.log(userNames.push("Rafi"));
console.log(userNames);
console.log(userNames.pop()); // it removes the last element of the array and returns it
console.log(userNames);
console.log(userNames.splice(0, 1)); // if you want to remove an element from the array, you can use the splice method. The first parameter is the index of the element to remove, and the second parameter is the number of elements to remove. In this case, we are removing the first element of the array (index 0) and only one element (1). The splice method returns an array containing the removed elements.
console.log(userNames);
