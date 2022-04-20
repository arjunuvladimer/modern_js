// Array Methods

// 1. Concat Method
    // Syntax: 
    // Array.concat(value1, value2, ..., valueN)
    // Used to Merge Multiple Arrays

    var alpha = ["a", "b", "c"]

    var numeric = [1,2,3]

    var alphaNumeric = alpha.concat(numeric)

    console.log("Concat Method: " + alphaNumeric)

// 2. Every Method
    // Syntax: 
    // Array.every(callback[, thisObject])
    // CallBack function to test for each element
    // It only returns boolean values

    // Notes: 
    // 1. For the callback function in every method we have certain parameter to be passed
    // 2. Element/Current Value - The Current Element of the array -> Mandatory
    // 3. Index Position - It is an Optional Value

    // For the Element
    function isBigEnough(element, index){
        return (element >= 20)
    }

    var everyResult = [12,10,33].every(isBigEnough)

    console.log("Tested value for each element: "+ everyResult)

    // For the Index Position
    function isBigEnoughIndex(element, index){
        return (index < 2)
    }
    var everyResultIndex = [10,11,13,14].every(isBigEnoughIndex)
    console.log("Tested Value for Index: " + everyResultIndex )

// ***** Filter Method *****
// 3. Filter Method -> Main Method More Often

    // Syntax: Array.filter(callback())

    // Element

    
    function isBigEnoughFilter(element){
        return (element >= 20)
    }

    var filterResult = [12,5,8,33,23,44].filter(isBigEnoughFilter)
    console.log("Element Value:  "+filterResult)

    // Index Position
    function isBigEnoughFilterIndex(element, index){
        return (index > 1)
    }

    var filterResultIndex = [12,5,8,33,23,44].filter(isBigEnoughFilterIndex)
    console.log("Index Value:  "+filterResultIndex)


// 4. For Each Method

    // Syntax: Array.forEach(callback)

    var nums = new Array(12,13,14,15)
   

    nums.forEach(
        function(element, index){
            console.log("For Each Method Element: "+ element)
            console.log("For Each Method Index: " + index)
        }
    )

// 5. Reverse Method
    
    // Syntax: Array.reverse()

    var reversedArray = nums.reverse() // Reverse the elements of the array

    console.log("Printing the Reversed Array "+ reversedArray)

// 6. Index Of Method

    // Syntax: Array.indexOf(element)

    var indexofArray = [12,5,8,130,44].indexOf(130)

    console.log("Index of Method: "+ indexofArray)

// 7. Join Method

    // Syntax: Array.join(seperator)

    var joinArray1 = new Array("First", "Second", "Third")

    var stringJoin = joinArray1.join(",")

    console.log("Join Method " + stringJoin)

// 8. Split Method // Explain Later

    // Syntax: Array.split(seperator)

    var splitString = "I , want , to , come , home"

    // Split String wherever there is comma
    var splitWordArray = splitString.split(" , ")

    console.log("Split Method: " + splitWordArray)

// 9. Last Index Of
    // Syntax: Array.lastIndexOf(element)

    var indexOfLastElement = [12,5,8,9,130,44,9].lastIndexOf(44)

    console.log("Last Index of Method: "+ indexOfLastElement)

// ****** Map Method ****
// 10. Map Method
    // Syntax: Array.map(callback)

    let arrayForMap = [1,2,3,4,5]

    let newArrayForMap = arrayForMap.map(function(element){
        return element * 2
    })

    console.log("Map Method: "+ newArrayForMap)

// 11. POP Method
    // Syntax: Array.pop()
    // Pops the last element in the array

    const student = ["willliam", "john", "chris", "mike"]

    const newStudents = student.pop()

    console.log("Pop Method: "+ newStudents)

// 12. Push Method
    // Syntax: Array.push()

    let StringArray = ["Johnny", "Peter", "Sammy"]
    let newArrayToPush = StringArray.push("Larry")

    console.log("Push Method: "+ StringArray)

// 14. Reduce Method

    // Syntax: Array.reduce(callback)
    // CallbackFunction(left, right) Parameters
    var reduceNumber = [0,1,2,3,4].reduce(function (a,b){ return a * b})

    console.log("Reduce Method: " + reduceNumber)

// 15. Reduce Right Method

    // Syntax: Array.reduceRight(callback)

    var reduceRightNumber = [0,2,1].reduceRight(function (a,b) { return a -b })

    console.log("Reduce Right Method: "+ reduceRightNumber)

// 16. Shift Method
    // Syntax: Array.shift()

    var shiftNumber = [10,20,30,40,50]
    // Removes First Element
    const newShiftNumber = shiftNumber.shift()
    console.log("Shift Method: "+ shiftNumber)

// 17. Slice Method
    // Syntax: Array.slice(numberOfElements)

    var sliceItems = ['cup','house','spoon','plate']
    var newSliceItems = sliceItems.slice(2)
    console.log("Slice Method: " + newSliceItems)

    // Start and End Element Number
    var newSliceItems2 = sliceItems.slice(2,3)
    console.log("Slice Method with Start and End Element Number: "+ newSliceItems2)

// 18. Splice Method
    // Syntax: Array.splice(startIndex, deleteCount[item1, item2, ...])

    var splicedItems = [1,2,3,4,5]
    // Delete 2 Item starting with 1 index
    var deletedSplicedItems = splicedItems.splice(1,2)

    console.log("Splice Method: "+ splicedItems)

// 19. Unshift Method
    // Syntax: Array.unshift(newElements) it always start from the begining

    var unshiftArray = [0,0.5,1,2,3,4,5]

    var newUnshiftArray = unshiftArray.unshift(22,33)

    console.log("Unshift Method: "+ unshiftArray)

// 20. Some Method
    // Syntax: Array.some(callback(element,index))
    // Some Method tests whether some element in the array passes the test implemented by the provided function

    function isBigEnoughSome(element){
        return (element >=10)
    }

    var someRetval = [2,5,8,9,4].some(isBigEnoughSome)

    console.log("Some Method: "+ someRetval)

// 21. Sort Method
    // Syntax: Array.sort()

    var sortArray = new Array(5,2,3,1,4)

    var sortedArray = sortArray.sort()

    console.log("Sort Method: " + sortedArray)

// 22. toString Method
    // Syntax: Array.toString

    var toStringArray = new Array(1,2,3,4)

    var stringedArray = toStringArray.toString()

    console.log("String Method: "+ typeof(stringedArray))
    console.log("String Method: "+ stringedArray)


// 23. find Method
    // Syntax: Array.find(callback())

    var findNum = [2,3,4,1,5]

    var oddNum = findNum.find((element) => element % 2 == 1)

    console.log("Find Method: " + oddNum)

  // Array Destrcutring 

  var arrayDestruct = [1,2,3,4,5]

  var [x,y,u,z,a,f] = arrayDestruct

  console.log(x)
  console.log(y)
  console.log(u)
  console.log(z)
  console.log(a)
  console.log(f)
    


