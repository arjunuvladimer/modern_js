// Declaring a Array
var array1 = [1,2,3,4]
var array2 = new Array([1,2,3,4])

// Built in Methods

// 1. Concat Method
// Syntax: Array.concat(array1,array2,...,arrayn)
// Usage: Merging multiple arrays

var alpha = ["a","b","c"]
var numeric = [1,2,3,4]
var numeric1 = [1,2,3,4,6,7,8]

var alphaNumeric = alpha.concat(numeric, numeric1)

console.log("Concat Method: " +  alphaNumeric)

// 2. Every Method
// Syntax: Array.every(callbackFunction)
// Usage: Takes a callback function and tests for each element in the
// array and returns whether that element exists by help of bool
// It only returns bool value

// Notes:
// 1. For the callback function in every method we have set of 
//    parmeters to be passed element, index

// var everyResult = [12,13,33].every(
//     function isBigEnough(element){
//         return element >=20
//     }
// )

var everyResult = [12,13,33].every(element => element>=20)
console.log(`Every Method Element: ${everyResult}`)

var everyResultIndex = [12,13,33].every((element, index) => index <= 2)
console.log(`Every Method Index: ${everyResultIndex}`)

// 3. **** Filter Method ****
// Syntax: Array.filter(callback(element, Index))

var filterResult = [12,5,8].filter((element)=> element>=20)
console.log(`Filter Result Element: ${filterResult}`)

var filterResultIndex = [12,5,8,33,23,44].filter((element,idx)=> idx>1)
console.log(`Filter Result Element: ${filterResultIndex}`)

//4. For Each Method
// Syntax: Array.forEach(callback(element,index))

var nums = new Array(12,13,14,15)

var forEachResult = nums.forEach((element, idx) => {
    console.log(`For Each Method Element:${element>12}`)
    // console.log(`For Each Method Index:` + idx>1)
})

// 5. Reverse Method
// Syntax: Array.reverse()

var reverseArray = nums.reverse()

console.log(`Printing the reversed Array: ${reverseArray}`)

// 6. Index of method
// Syntax: Array.indexof(element)

var indexofArray = [12,5,8,130,44].indexOf(130)

console.log(`Index of Method: ${indexofArray} `)

// 7. Join Method
// Syntax: Array.join(seperator)
var joinArray = new Array("First", "Second", "Third")

var stringJoin = joinArray.join("=>")

console.log(`Join Method: ${stringJoin}`)

// 8. Last Index of
// Syntax: Array.lastIndexof(element)

var indexofLastElement = [12,5,8,9,130,44,4].lastIndexOf(44)
console.log(`Last index of Method: ${indexofLastElement}`)


// 9. *** Map ****
// Syntax: Array.map(callback(element,index))

let arrayForMap = [1,2,3,4,5]

let newArrayForMap = arrayForMap.map((element) => element * 2)

console.log(`Map Method: ${newArrayForMap}`)

