// Reduce Function

const array1 = [1,2,3,4]

// reduce(callbackfunc())

function myFunc(total, num){
    return total - num
}
console.log(
    array1.reduce(myFunc)
)