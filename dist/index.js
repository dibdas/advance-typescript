"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
;
// Example usage
const result = sumOfAge({
    name: "kirat",
    age: 20
}, {
    name: "raman",
    age: 21
});
console.log(result); // Output: 41
// if interface grows the number of arguments will also grow 
// number of argument cant be more than 5 
function UpdateUser(name, age, password) {
}
function upadteUser1(updateProps) {
}
function upadteUser2(updateProps) {
    console.log(`Name: ${updateProps.name}, 
    Email: ${updateProps.email},age:${updateProps.age}`);
}
function upadteUser23(updateProps) {
    console.log(`Name: ${updateProps.name}, 
    Email: ${updateProps.email},age:${updateProps.age}`);
}
const result2 = upadteUser23({
    name: "kirat",
    age: 20,
});
const g = [9, 4, 6];
g[4] = 4;
console.log(g);
const user1 = {
    name: 'John',
    age: 23
};
//cant reassign the value as readOnluy is defined 
user1.age = 24; // cant be reassigned
user1.name = 'aloo';
const user4 = {
    name: "loop",
    age: 78
};
user4.name = "pooo";
const Config = {
    endPoint: 'https:jhbjkhkj.com',
    apiKey: 'jhdauiikjhdiaj'
};
const users = {
    "rs1": "raman",
    "ras2": "kirat"
};
const users1 = {
    "rs1": { age: 23, name: "raman" },
    "ras2": { age: 76, name: "kirat" }
};
