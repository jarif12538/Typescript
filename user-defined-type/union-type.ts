
let userId : string | number | boolean;

userId = 123;
userId = "user123";
userId = true;

function displayUserId(userId: string | number | boolean) {
    console.log(userId);
}
displayUserId(userId);