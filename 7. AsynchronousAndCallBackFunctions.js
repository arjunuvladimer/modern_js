// Synchronous Function 



// Synchronous Functions


function multiplication(c,d){
    var e = c * d;
    return e
}
function add(a,b){
    var c = a +b
    return c
}
function divide(d,e){
    var f = d / e
    return f
}
console.log(multiplication(1,2)) // Functional Call

setTimeout(
    function display(){
        console.log("some text")
    }
    ,2000)// setTimeout Functional Call

console.log(add(2,3))
console.log(divide(100,10))

// Call Back Functions
function callBackFunction(fnSms, fnEmail){
    console.log("Call Back Functions")

    fnSms() // Functional Call of fnSMS
    fnEmail() // Functional Call of fnEmail
}

callBackFunction( 
    () => console.log("Printing SMS"), // Function Defintion of fnSMS as Pass By Value
    () => console.log("Printing Email"))   // Function Defintion of fnSMS as Pass By Value

    //  Functional Call of callBackFunction



// Function 1 => print some message weather application => no delay of time
// Function 2 => google map api => lat, long of a location delhi => delay of time
// Function 3 => lat, long => predict some weather => no delay of time
// Function 4 => display that weather to the console => no delay of time

// Function1() => weather application
// Function3() => no calculation
// Function4() => no display
// Function2() => there is no use



