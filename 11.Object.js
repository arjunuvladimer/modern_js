// // Syntax of an Object:
//         // var identifier = {
//         //     Key1:value,
//         //     Key2: function () { 
//         //        //functions 
//         //     }, 
//         //     Key3: ["content1"," content2"] 
//         //     Key4: {
//                         // Key4.1 : Value
//                         // Key4.2 : Value
//         //           }
//         //  } 

// // 1. For an Object you have Properties/Members/Keys that contains Values
// // 2. Your Property/Member/Key should always be either a string or a symbol
// // 3. A value can be of any primitive data type and also can be another object too
// // 4. All the Property Names are case sensitive 
// // 5. You can Access the Property by simple dot notation using your object

// var person = { 
//     firstname:"Tom", 
//     lastname:"Hanks", 
//     func:function(x,y){return x+y},    
// }; 
// //access the object values 
// console.log(person.firstname)  
// person.lastname = "Arjun" 
// console.log(person.lastname) 
// console.log(person.func(2,3))





// var foo = 'bar' 
// var anonymousFunction = function () {
//     console.log("Anonymous Function")
//     return 10
// }
// var baz = { foo , anonymousFunction} 
// console.log(baz.foo)
// console.log(baz.anonymousFunction())

// var foo = 'bar' 
// var a = 'some'
// var baz = { foo:a } // {foo: 'bar'} // {foo: 'bar'}
// console.log(baz.foo)


// // Object Constructor 

//     // Syntax 
//     // var obj_name = new Object()
//     // obj_name.property = value
//     // obj_name["key"] = value

//     var myCar = new Object()
//     // New Key/Property called make for myCar Object
//     myCar.make = "Ford" 
//     myCar.model = "Mustang"
//     myCar.year = 1987

//     console.log(myCar["make"]) // access the object property/key
//     console.log(myCar["model"])
//     console.log(myCar.year)

    
//     function car() {
//         this.make = "Ford"
//         this.model = "F123"
//     }

//     var obj = new car()
//     console.log(obj.make)
//     console.log(obj.model)


// Methods of Objects

    // // 1. Object.create()

    // var roles = {
    //     type: "Admin",
        
    // }
    // console.log(roles.type) // Admin
    // // Using Object.create method it makes your object to have prototype
    // // Create new role type call super_role

    

    // var super_role = Object.create(roles)

    // // console.log(super_role.displayType())
    // super_role.type = "SomeAdmin"
    // console.log(super_role.type)
    // console.log(roles.type) 

    // 2. Object.assign
    // Syntax: Object.assign(target, ...sources)
    var det = { name: "Tom", ID: "E1001"}
    var det1 = {make: "Ford"}
    var copy = Object.assign(det1, det)
    console.log(copy.make)
    console.log(copy)

    for(let val in copy){
        console.log(copy[val])
    }

    var o1 = {a: 10}
    var o2 = {b: 20}
    var o3 = {c: 30}
    var assingObj = Object.assign(o1,o2,o3)
    // o1 is target and two sources o2,o3
    console.log(o1)

    // Delete Operator 

    // var obj8 = {
    //     name:"arjun",
    //     id:123321
    // }

    // console.log(obj8)
    // delete obj8.name
    // console.log(obj8)

    // // // Comparing Objects
    // var compare1 = {name: "Tom"}
    // var compare2 = {name: "Tom"}
    // console.log(compare1 == compare2)
    // console.log(compare1 === compare2)

    // Two distinct objects are never equal, even if it has the same properties.
    // Different Memory address.
    
    // // Object Destructuring
    // var objectDestruct = {name : "John", id:13}

    // var {id,name} = objectDestruct

    // console.log(name)
    // console.log(id)

   

    









   
