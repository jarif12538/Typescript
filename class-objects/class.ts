class User{
    name: string;// we are not using let or const because we are defining a class property
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}
 let user1 = new User("John Doe", 30, "john.doe@example.com");// tihs is how we create and instance or object of the class User
 user1.display();

 // for abstract we just need to add the abstract keyword before the class name and we cannot create an instance of an abstract class
 //we can only extend an abstract class and implement its methods in the child class