"use strict";
//ENUM - IT STORES A SET OF CONSTANTS (NUMBERS OR STRINGS) AND GIVES THEM A NAME. IT IS USED TO DEFINE A SET OF RELATED VALUES THAT CAN BE REFERENCED BY NAME INSTEAD OF THEIR ACTUAL VALUE.
//dublicate values are not allowed in enum. If you try to assign the same value to multiple members of an enum, TypeScript will throw an error.
// numeric enum
// it starts from 0 by default and increments by 1 for each member. You can also assign specific values to the members of the enum.
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["GetDaata"] = 1] = "GetDaata";
    RequestStatus[RequestStatus["ReadData"] = 2] = "ReadData";
    RequestStatus[RequestStatus["UpdateData"] = 3] = "UpdateData";
    RequestStatus[RequestStatus["DeleteData"] = 4] = "DeleteData";
})(RequestStatus || (RequestStatus = {}));
console.log(RequestStatus);
console.log(RequestStatus.GetDaata); //you can access the value of an enum member using its name.
// string enum
// it allows you to assign string values to the members of the enum. You can also assign specific string values to the members of the enum.
var RequestStatusString;
(function (RequestStatusString) {
    RequestStatusString["GetDaata"] = "GET_DATA";
    RequestStatusString["ReadData"] = "READ_DATA";
    RequestStatusString["UpdateData"] = "UPDATE_DATA";
    RequestStatusString["DeleteData"] = "DELETE_DATA";
})(RequestStatusString || (RequestStatusString = {}));
console.log(RequestStatusString);
