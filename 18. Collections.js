// ES6 introduced two new data structures: Maps and Sets
// Maps -> This data structure enaable mapping a key to a value in an object
// Sets -> Sets are similar to arrays. However sets do not encourage duplicates

// 1. Map

    var MapCheck = new Map()

    // 1.1 Set Method -> For setting the key value pair
    console.log(MapCheck.set('firstName', 'Arjun'))

    // 1.2 Get Method -> Getting the value of the key
    console.log(MapCheck.get('firstName'))


    // 1.3 has Method

    var hasCheck = new Map()
    hasCheck.set("someName","John")
    console.log(hasCheck.has("someName")) // true

    // has method
    var roles = new Map()
    roles.set('r1', 'User')
    .set('r2','Guest')
    .set('r3', 'Admin')
    console.log(roles.has('r2'))
    

// 2. Set

let dupeArray = [1,1,4,5,4,4,2,1,5]

console.log(dupeArray)

let arraySet = new Set([1,1,4,5,4,4,2,1,5])
console.log(arraySet)