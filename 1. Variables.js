
// Variables 

// Category => Var,  identity => a, = => operator,  value => 10

// Characteristics
// You can store a value
// You can change the value that is stored
// You can store only specific data types

var a = 10
a = 11

console.log(a)
console.log(a)

// Data Types

// PRIMITIVE DATA TYPES
    //1. Numeric Data Type/ Number Data Type
    var b = 11
    // 2. Sting/Character Data
    var c = "hello world"
    var d = 'h'
    var e = 'hewrjfakdj'
    // 3. Boolean
    var f = true
    // 4. Undefined
    var g = undefined
    var h 
    // 5. Null
    var i = null

// Non Primitive Data Type

    // 6. Object => Unstructured Data
    var j = {
        fname:'Arjun',
        code:12343433
    }
    console.log(j.code)
    // 7. Arrays => Structured Data
    var k = [1,4,"Something",9]
    // 1 => 0, 4 => 1, Something => 2, 9 => 3
    console.log(k[2])


// Scope of Variables

// 1. Global Scope
    var l = 56
    function print(){
        console.log(l)
    }
    print()
// 2. Local Scope/Functional Scope
    function localScope(){
        var m = 678
    }
    // console.log(m)
    
// 3. Block Scope

    // Declaration
    var o // I am declaring the identity of o as Variable
    o = 12321 // Intialization i am the intializing the value to o
    var p = 243432 // Definition 

    // Variable Hoisting 
    console.log(n)
    var n 
    // All the declarations will be take to the top

    
    console.log("Q Value " + q)
    if(a == 12){
        var q 
    }

    // Block Scope Variables
    // let and const

    {
        let r = 34
        console.log(r)
    }

    {
        const s = 34
        // s = 432432
        console.log(s)
        // Note: You need to give definition for const no declaration
        const t = 21321
    }
    // Temporal Dead Zone

// 4. Lexical Scope

    var u = 89

    function lex1(){
       var u = 34
        console.log(u)
        function lex2(){
            var u = 23234
            console.log(u)
        }
        lex2()
        
    }
    lex1()

    

    
    



















