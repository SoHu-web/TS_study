"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(person) {
    return "Hello," + person.firstName + "" + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
