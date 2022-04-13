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
    class D {
        display(){
            console.log("Class D display function")
        }
    }
    class E extends D{

    }
    class F extends D{

    }
    class G extends D{
        
    }

    var obj5 = new G()
    obj5.display()


// Method Overiding
class I { // Parent Class
    display1(a = 10) {
        console.log( "Display Function in I: " + (a+b))
    }
}
class J extends I{ // Derived Class
    display1 = (a = 12,b = 14) => {
        console.log( "Display Function in J: " + (a*b))
    }
    IclassMethod(){
        super.display1()
    }
}

var obj6 = new J()
obj6.display1(1)
// Method Overloading
class K{
    display2(a,b,c){
        console.log("First Function")
    }
    display2(a,b){
        console.log("Second Function")
    }
    display2(a){
        console.log("Third Function")
    } 
}

var obj7 = new K()
obj7.display2(1,2,3)

// Encapsulation
// Abstraction
// Interfaces

