// 1. Arithematic Operators

    // [+, -, *, %, /, ++, --]

    // 1. Addition Operator
    var a = 33
    var b = 11
    var c = a + b
    console .log("Addition Operator:" +c) 

    // 2. Subtraction Operator
        // a[Left Operand], -[Operator], b[Right Operand]
        c = a - b;
        console.log("Subtraction Operator: "+ c)
    
    // 3. Multiplication Operator 
    var y=  a * b
    console .log("Multipilcation Operator:" +y)

    // 4. Modulus Operator    
    var u=  a % b
    console .log("Modulus Operator:" +u)

    // 5. Division Operator    
    var v=  a / b
    console .log("Division Operator:" +v)
                                                                                                                                                                                                                                                                                                
    // 6. Decrement Operator  
    var t =4
    t--
    var w =t
    console.log("Decrement:"  + w--);

    // 6. Increment Operator
       var inc=5
    inc++
    var inn=inc
   
    console.log("incremanet:"  + inc++);
   
// 2. Relational Operators
        // [==,===, <=, >=, !=, <, >]
        var d = 10 // Number
        var e = "10" // String

        // 1. ==
        if(d == e){
            console.log("Comparison Operator: True")
        }
        else{
            console.log("Comparison Operator: False")
        }

    
        // 2. ===
        if(d === e){
            console.log("Data Type Comparison Operator: True")
        }
        else{
            console.log("Data Type Comparison Operator: False")
        }

        //3. >=
        var gr=14
        var tr=12
        if (gr>=tr){
            console.log("Greater than or equal Comparison Operator: True")
        }
        else{
            console.log("Greater than or equal Comparison Operator: False")
        }
        //4. <=
        var gr=10
        var tr=12
        if (gr<=tr){
            console.log("lesser than or equal Comparison Operator: True")
        }
        else{
            console.log("lesser than or equal Comparison Operator: False")
        }
        //5. >
        var gr=10
        var tr=12
        if (gr>tr){
            console.log("Greater than  Comparison Operator: True")
        }
        else{
            console.log("Greater than Comparison Operator: False")
        }
        //6. <
        var gr=10
        var tr=
        12
        if (gr<tr){
            console.log("lesser than Comparison Operator: True")
        }
        else{
            console.log("lesser than Comparison Operator: False")
        }



// 3. Logical Operators
//    [&&, ||, !]

    var f = 18
    var g = 19

    // 1. And Operator && 
    if(f && g == 18)
    {
        console.log("And Operator where both the statments should be True then it is True")
    }
    else{
        console.log("And Operator where one of the statement is false then it is False")
    }
    // 2. OR Operator || One of the Statment should be True then it is True
    if(f ||g == 18)
    {
        console.log("OR Operator where one of the statment should be True then it is True")
    }
    else{
        console.log("And Operator where both  the statements are false then it is False")
    }

    // NOT LOGICAL OPERATOR
    if (!(f>=g))
    {
        console.log("NOt Operator where  the statments should be True then it is false")
    }
    else{
        console.log("Not Operator where the statement is false then it is true")
    }


// 4. Bitwise Operators

// [&, |, ^(XOR), ~(Not), <<(Left Shift), >>(Right Shift), <<<(Zero Fill Shift) ]

    var h = 10
    var i = 11
    
    // 1. & Bitwise Operator
    var j = h & i
    console.log("Bitwise & Operator: "+ j)

    // h -> 1010 -> 10
    // i -> 1011 -> 11

    // 2. | Opertor
    j = h | i
    console.log("Bitwise | Operator: "+ j)

    // 3. ^(XOR Operator) Both Cannot be True or nor False
    j = h ^ i 
    console.log("Bitwise ^ (XOR) Operator: "+ j)

    // 4. Negation ~ Operator
    var k = 10
    console.log("Negation Operator: "+ ~k)


    k = - 10
    console.log("Negation Operator: "+ ~k)

    // 5. Left Shift << Operator
    var l = 10
    
    console.log("Left Shift Operator: ")
    console.log(l<<3)

    
    // 5. Right Shift >> Operator
    var m = 10
    
    console.log("Right Shift Operator: ")
    console.log(m>>2)
// 5. Assignment Operators
// [=, +=, -=, %=, /=, &=, |=, ^=, ~=]

    var q = 10
    var s = 12
    
    // 1. += Operator
    // q = q + s
    q += s
    console.log("+= Operator: " +q)

// 6. Miscileaneous Operators

    // [1. Conditional Operator(expression?true:false), 2. typeof() Operator,3. delete Operator,4. Comma Operator]

    // 1. Conditional Opeartor
    var n = 10
    var o = (n == 10 ? 13:14)
    console.log("Conditional Operator: "+ o)

    // 2. Type of Operator
    var q =10
    console.log(typeof(q))

    // 3. delete Operator
    // Only use it for Objects and Arrays

        // Objects
        var obj = {fname: "arjun", lname: "sn"}
        delete obj.fname
        console.log(obj.fname)

        // Arrays
        var array1 = [1,2,3,4]
        delete array1[3]
        console.log(array1)

    // 4. Conditional Operator

    var bollean = false

    let value = (bollean == true ? 10 : 15)
    console.log(value)