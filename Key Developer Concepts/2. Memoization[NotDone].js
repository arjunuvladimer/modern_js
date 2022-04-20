// Memoization of Caching


function adddTo80(n){
    console.log("Long Time")
    return n + 80
}
console.log(adddTo80(5))
console.log(adddTo80(10))
console.log(adddTo80(6))

let cache = {
    5 : 85
}

function memoizeAddTo80(n){
    if(n in cache){
        return cache[n]
    }
    else {
        console.log('Long Time')
        return cache[n] = n + 80
    }
}

console.log(memoizeAddTo80(5))
console.log(memoizeAddTo80(10))
console.log(memoizeAddTo80(6))


