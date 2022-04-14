//11. Table Example Asynchronous Event Mechanism

// Restaurant
function enterRestaurant(){
    console.log("Enter MacD")
}
function exitRestaurant(){
    console.log("Exit MacD")
}
function takeOrder(order){
    return order
}

function kitchen(serving){
    setTimeout(() => console.log(`Serving Dish: ${serving}`, 2000))
}

let table1 = takeOrder 

kitchen(table1("pasta"))
enterRestaurant()
exitRestaurant()

