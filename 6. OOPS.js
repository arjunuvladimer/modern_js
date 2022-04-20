// OBJECT ORIENTED CONCEPTS 

// 1. Classes 

// class Reserved Keyword and ClassName => Class Definition
class ES6{
    
    // Note: In Modern Javascript Classes you cannot have variables declared outside the function
    // function reserved keyword
    add(){
       var c = a + b
       console.log(c)
    }

    subtract(){
       var c = a - b
       console.log(c)
    }
    multiply(){
        var c = a * b
        console.log(c)
    }

}

// Object

    var obj1 = new ES6(a = 10, b = 12) 
    obj1.add()

    var obj2 = new ES6(a = 13, b = 18) 
    obj2.add()
    obj2.multiply()


// OOPS Concepts

// 1. Inheritance

    // 1. Single Inheritance 

    class A{
        addition(a,b){
            var c = a + b
            console.log(c)
        }
    }

    class B extends A{
        subtract(){
            var c = a -b 
            console.log(c)
        }
    }

    var obj3 = new B()
    obj3.addition(20,30)

    // 2. Multilevel Inheritance
    class C{
        multiplication(a,b){
            var c = a * b
            console.log(c)
        }
    }
    class D extends C{

    }
    class E extends D{

    }

    var obj4 = new E()
    obj4.multiplication(10,20)

    // 3. Hierarchical Inheritance

    class F {
        division(a,b){
            var c = a /b
            console.log(c)
        }
    }

    class G extends F {}
    class H extends F {}

    var obj5 = new G()
    obj5.division(100,10)
    var obj6 = new H()
    obj6.division(400,8)

    // 4. Overiding
// Single Inheritance
    class superClass{

        addition(a,b){
            var c = a + b
            console.log("Super Class Addtion Function " + c)
        }
        
    }

    class derivedClass extends superClass{

       addition(g,h){
           var c = g + h 
           console.log("Derived Class Addition Function " + c)
       }

       superClassAdditionFunction(){
           super.addition(19,20)
       }
    }

    var obj7 = new derivedClass()
    obj7.addition(10,11)
    obj7.superClassAdditionFunction()
    // obj7.superClassAdditionFunction()

    // 5. Overloading

    class overloadingClass{

        multiplication(a,b,c){
            var c = a * b
            console.log("First Function " + c)
        }

        multiplication(c,d){
            var d = c * d
            console.log("Second Function " + d)
        }
        multiplication(c,d){
            var d = c * d
            console.log("Third Function " + d)
        }
    }

    var obj8 = new overloadingClass()
    obj8.multiplication(10,20,30)

