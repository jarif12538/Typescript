class The_User{
    name: string;// we are not using let or const because we are defining a class property
    age: number;
    email: string;
// constructor is a special method that is called when an instance of the class is created
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // display is a method that is used to display the properties of the class
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}
class student extends The_User {
    studentId: number;
    constructor(name: string, age: number, email: string, studentId: number) {// constructor of the child class student
        super(name, age, email);//super is used to call the constructor of the parent class
        this.studentId = studentId;
    }
    display(): void {
        super.display();
        console.log(`Student ID: ${this.studentId}`);
    }
}
const student1 = new student("John Doe", 20, "john.doe@example.com", 12345);
let student2 = new student("Jane Smith", 22, "jane.smith@example.com", 67890);

student1.display();
student2.display();