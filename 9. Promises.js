// thingOne()
async function thingOne() {
    setTimeout(console.log("Something"),2000)
    return 10
}

// thingTwo()
async function thingTwo(value) { 
    return value 
}
       
// thingThree()
async function thingThree(value) { 
    return value 
}

async function doManyThings() {
    // Creating a Variable called result and assigning thingOne return statement to it -> 10
    var result = await thingOne(); // Thing Functional Call delayed because of setTimeout

    // Independent of the Functions
    console.log("First Function Finished")

    // Creating a Variable called result2 and assigning thingOne return statement to it -> 10

    var resultTwo =  await thingTwo(result);

    var finalResult = await thingThree(resultTwo);

    return finalResult;
}
// doManyThings() // Do Many Things Functional Calll
        var final = doManyThings();
        console.log(final)
        console.log("End of Script")