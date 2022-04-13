const { divide } = require("cypress/types/lodash")

// Asynchronous Functions
function add(a,b){
    var c = a +b
    console.log(c)
}

function multiplication(c,d){
    var e = c * d
    setTimeout(
        ()=> {
        console.log(e)}, 0)
}

multiplication(10,20)
add(11,20)
divide(234,23)

// // Call Back Functions
// function callBackFunction(fnSms, fnEmail){
//     console.log("Call Back Functions")

//     fnSms() // Functional Call of fnSMS
//     fnEmail() // Functional Call of fnEmail
// }

// callBackFunction( 
//     () => console.log("Printing SMS"), // Function Defintion of fnSMS as Pass By Value
//     () => console.log("Printing Email")   // Function Defintion of fnSMS as Pass By Value
 // Functional Call of callBackFunction



// Function 1 => print some message weather application => no delay of time
// Function 2 => google map api => lat, long of a location delhi => delay of time
// Function 3 => lat, long => predict some weather => no delay of time
// Function 4 => display that weather to the console => no delay of time

// Function1() => weather application
// Function3() => no calculation
// Function4() => no display
// Function2() => there is no use



