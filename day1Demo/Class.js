// TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程。
// 让我们创建一个Student类，它带有一个构造函数和一些公共字段。 注意类和接口可以一起共作，程序员可以自行决定抽象的级别。
// 还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + "" + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
// 等同于
// class Student {
//     fullName: string;
//     firstName:string;
//     middleInitial:string;
//     lastName:string;
//     constructor( firstName,  middleInitial,  lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
