console.log("welcome to typescript");
// datatypes
var a1 = 10;
console.log(a1);
var b = "hello";
console.log(b);
var c = true;
console.log(c);
var a2 = 10;
console.log(a2);
var b2 = "hello";
console.log(b2);
var c2 = true;
console.log(c2);
// arrays
var fruits = ['apple', 'orange', 'banana'];
console.log(fruits);
var fruit = ['apple', 'orange', 'banana'];
console.log(fruit[0]);
// iterate
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var i = fruits_1[_i];
    console.log(i);
}
for (var i in fruits) {
    console.log(i);
}
// objects
var per = { "name": 'rinzy', "age": 23 };
console.log(per);
console.log(per.name);
console.log(per.age);
for (var i_1 in per) {
    console.log(per);
    console.log(per[i_1]);
}
// oops
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.show = function () {
        console.log(this.name + " " + this.age + " " + this.course);
    };
    return Student;
}());
var obj1 = new Student();
obj1.name = "ammu";
obj1.age = 10;
obj1.course = "python";
obj1.show();
//  constructor case
var Student1 = /** @class */ (function () {
    function Student1(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    Student1.prototype.show = function () {
        console.log(this.name + " " + this.age + " " + this.course);
    };
    Student1.prototype.displayage = function () {
        return this.age;
    };
    return Student1;
}());
var obj2 = new Student1("ammu", 10, "python");
obj1.show();
var x = obj2.displayage();
console.log(x);
