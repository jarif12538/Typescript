//ENUM - IT STORES A SET OF CONSTANTS (NUMBERS OR STRINGS) AND GIVES THEM A NAME. IT IS USED TO DEFINE A SET OF RELATED VALUES THAT CAN BE REFERENCED BY NAME INSTEAD OF THEIR ACTUAL VALUE.
//dublicate values are not allowed in enum. If you try to assign the same value to multiple members of an enum, TypeScript will throw an error.


// numeric enum
// it starts from 0 by default and increments by 1 for each member. You can also assign specific values to the members of the enum.


enum RequestStatus {
    GetDaata = 1,//you can assign specific values to the members of the enum.
    ReadData,
    UpdateData,
    DeleteData
}

console.log(RequestStatus);
console.log(RequestStatus.GetDaata);//you can access the value of an enum member using its name.


// string enum
// it allows you to assign string values to the members of the enum. You can also assign specific string values to the members of the enum.

enum RequestStatusString {
    GetDaata = "GET_DATA",
    ReadData = "READ_DATA",
    UpdateData = "UPDATE_DATA",
    DeleteData = "DELETE_DATA"
}

console.log(RequestStatusString);