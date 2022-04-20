// Asynchronous Functions
function add(a,b){
    var c = a +b
    console.log(c)
}

function multiplication(c,d){
    var e = c * d
    setTimeout(
        ()=> {
        console.log(e)}, 5000)
}

multiplication(10,20)
add(11,20)

// Call Back Functions
function callBackFunction(fnSms, fnEmail){
    console.log("Call Back Functions")

    fnSms() // Functional Call of fnSMS
    fnEmail() // Functional Call of fnEmail
}

callBackFunction( 
    () => console.log("Printing SMS"), // Function Defintion of fnSMS as Pass By Value
    () => console.log("Printing Email")   // Function Defintion of fnSMS as Pass By Value
) // Functional Call of callBackFunction



