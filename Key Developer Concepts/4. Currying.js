// Currying

// Function General
const multiplify = (a,b) => a *b 
console.log(multiplify(2,4))

// Curried Function
const curriedMultiply = (a) => (b) => a * b

console.log(curriedMultiply(5)(8))

const curriedMultiplyBy5 = curriedMultiply(5)

console.log(curriedMultiplyBy5(4))