console.log("welcome to typescript")

// datatypes
let a1:number=10;
console.log(a1)

let b:string="hello";
console.log(b)

let c:boolean=true;
console.log(c)

let a2:any=10;
console.log(a2)

let b2:any="hello";
console.log(b2)

var c2:any=true;
console.log(c2)

// arrays
let fruits:string[]=['apple','orange','banana'];
console.log(fruits)

let fruit:Array<string>=['apple','orange','banana'];
console.log(fruit[0])

// iterate
for (var i of fruits){
    console.log(i)
}
for (var i in fruits){
    console.log(i)
}

// objects
let per={"name":'rinzy',"age":23};
console.log(per)
console.log(per.name)
console.log(per.age)
for (let i in per){
    console.log(per)
    console.log(per[i])

}

// oops
class Student{
    name:string;
    age:number;
    course:string;
    show():void{
        console.log(this.name+" "+this.age+" "+this.course)
    }
 }
 var obj1=new Student()
 obj1.name="ammu";
 obj1.age=10;
 obj1.course="python"
 obj1.show()


//  constructor case

class Student1{
    name:string;
    age:number;
    course:string;
    show():void{
        console.log(this.name+" "+this.age+" "+this.course)   
    }
    constructor(name:string,age:number,course:string){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    displayage():number{
        return this.age
    }
}
var obj2=new Student1("ammu",10,"python")
obj1.show()
var x=obj2.displayage()
console.log(x)