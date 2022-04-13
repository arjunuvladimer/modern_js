// Object Oriented


// Class

class ES6{
    constructor(c,d){
        this.a = c
        this.b = d
    }
    print(){
        var c = this.a + this.b
        return c
    }
    multi(){
        var c = this.a * this.b
        return c
    }
}

function division(a,b){
    var c = a/b
    return c
}

console.log(division(9,3))
console.log(division(6,3))

// Object
var obj = new ES6(1,2)
console.log(obj.print())
console.log(obj.multi())

var obj2 = new ES6(3,4)
console.log(obj2.print())
console.log(obj2.multi())


// Inheritance
 // Single Inheritance
    class A{ // Parent Class
        add(){
            console.log("Class A function add")
        }
    }
    class B extends A{ // Derived Class from Class A
        multi(){
            console.log("Class B function multi")
        }
    }

    var obj3 = new B()
    obj3.add()
 // Multilevel Inheritance
    class C extends B{
        divi(){
            console.log("Class C function divi")
        }
    }
    var obj4 = new C()
    obj4.add()
 // Hierichal Inheritance

// Method Overloading
// Method Overiding
// Encapsulation
// Abstraction
// Interfaces

