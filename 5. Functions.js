// Functions 

// 1. General Function Expression

    function add(){
        var a = 10 
        var b = 11
        var c = a + b 
        console.log(c)
    }
    add() // Function Call

// 2. Returning Functions

    function Returning_Function(){
        var d = 11
        var e = 12
        var f = d * e
        return f
    }
    Returning_Function()
    console.log(Returning_Function())

// 3. Parameterized Functions

    function parameterizedFunction(g, h){ // Function Defintion
        var f = g /h
        console.log(f)
    }

    parameterizedFunction(120,10)// Functional Call
    parameterizedFunction(i =180, j = 20) // Pass By Values

// 4. Default Function Parameters

    function defaultFunctionParameter(a, k =10 ){
        var i = a * k
        console.log("Default Function Parameter "+ i)
    }

    defaultFunctionParameter(8,11) // Pass By Values

// 5. Rest Parameterized Function

    // Rest Operator (...)
    function restParameterizedFunction(...a){
        
        console.log(a)

    }

    restParameterizedFunction(1,2,3,4,5);

// 6. Anonymous Function

   
     var anonymousFunction =  function (a,b){
        // var a = 10
        // var b = 11
        var c = a + b
        console.log(c)
      }
    anonymousFunction(18,12)
   



// 7. Recursive Function
      
        // Factorial Problem
      function Factorialrecursive(num){
        if(num <= 0){
            return 1
        }
        else{
            //     6   * Factorialrecursive(6 -1){
                                // 5 * Factorialrecursive(4)
                                // 6 * 5 * 4 * 3 * 2 * 1 * 1
                        //}
            return num * Factorialrecursive(num - 1)
        }
      }

      console.log(Factorialrecursive(6))

      var FactorialAnonymous = function (num){
        if(num <= 0){
            return 1
        }
        else{
            //     6   * Factorialrecursive(6 -1){
                                // 5 * Factorialrecursive(4)
                                // 6 * 5 * 4 * 3 * 2 * 1 * 1
                        //}
            return num * FactorialAnonymous(num - 1)
        }
      }

      console.log(FactorialAnonymous(8))


// 8. Lambda Function

    // General Function Expression
    function functionName(){

    }

    // Anonymous Function
    (function(){

    }) () // Function Call

// 9. Lamda Function / Fat Arrow Function / Arrow Function

    // Function Reserve Keyword =>
    var lambdaFunction = (a,b) => {
        var c = a + b 
        console.log("Lambda Function " + c)
    }

    lambdaFunction(28,12);

// 10. Lambda Function without curly braces

    ( () => console.log(40+5) ) ()

// 11. Functional Hoisting

    console.log("Function Hoisting" + functionalHoisting())

    // Function Defintion
    function functionalHoisting(){
        var a = 10
        var b = 11
        var c = a + b
        return c
    }

// 12. Call Back Functions

    function callBackFunction(fnSms, fnEmail){
        console.log("Call Back Functions")

        fnSms() // Functional Call of fnSMS
        fnEmail() // Functional Call of fnEmail
    }

    callBackFunction( 
        () => console.log("Printing SMS"), // Function Defintion of fnSMS as Pass By Value
        () => console.log("Printing Email")   // Function Defintion of fnSMS as Pass By Value
    ) // Functional Call of callBackFunction


// 13. Rest Parameterized Function
   function restParameterized(...parameters){
       console.log("display params " + parameters)
   }

   restParameterized(1,2,3,4,5,6,6,7,8,9)

// 14. Recursive Function

   // 5! = 1 * 2 * 3 * 4  * 5 = 120
    function factor(num){
        if(num <= 0){
            return 1
        }
        return num * factor(num - 1)
              // 5 * factor(5-1){
              // 4 * factor(4-1){
              // 1 * factor(1 -1)
                    1
              // }
              //}
    }
    console.log(factor(5))


    function a(num){
        return b(num)
    }

    function b(num){
        return c(num)
    }
    
    function c(num){
        return num
    }

    d = a(2) // JS is processing a event




