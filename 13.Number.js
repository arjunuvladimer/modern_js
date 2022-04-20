// Number Properties & Methods

// Properties

// 1. Number.EPSILON
    // Interval between two numbers
    var interval = Number.EPSILON
    console.log(interval)

// 2. Number.MAX_SAFE_INTEGER
    //(2^53-1) = 9007199254740991
    var maxSafeInteger = Number.MAX_SAFE_INTEGER
    console.log(maxSafeInteger)

// 3. Number.MAX_VALUE
    // Maximum +ve number
    var maximumPositiveNumber = Number.MAX_VALUE
    console.log("Value of Number Max Value: "+ maximumPositiveNumber)

// 4 . Number.MIN_VALUE
    var minimumValue = Number.MIN_VALUE
    console.log("Value of Minimum Number of Values: "+ minimumValue)

// Number Methods

// 1. isNaN(value)

    var res = Number.isNaN(10)
    var res1 = Number.isNaN() // 
    console.log(res1)

// 2. Number.isFinite()
    
    var finiteNumber = Number.isFinite(2/10)
    console.log(finiteNumber)

// 3. isInteger()
    console.log(Number.isInteger(0))
    console.log(Number.isInteger(0.1))
    console.log(Number.isInteger(true))

// 4. parseFloat
    console.log(Number.parseFloat(10.4))
    console.log(Number.parseFloat(10.23e-1))

// 5. parseInt
    console.log(Number.parseInt(10.4))
    console.log(Number.parseInt(10.23329081209))

// 6. toExponential 

    var exponentialNumebr = 1225.30
    var convertToExponential = exponentialNumebr.toExponential()
    console.log(convertToExponential)

// 7. toFixed Value

    var fixedNumber = 177.234
    console.log(fixedNumber.toFixed())
    console.log(fixedNumber.toFixed(1))
    console.log(fixedNumber.toFixed(2))

// 8. toLocaleString
    var numToString = 177.234
    console.log(numToString.toLocaleString())

// 9. toPrecision
    var numToPrecision = 7.123456
    console.log(numToPrecision.toPrecision())
    console.log(numToPrecision.toPrecision(1))
    console.log(numToPrecision.toPrecision(2))
