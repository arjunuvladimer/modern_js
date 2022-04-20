// Strings

    // String Constructor
    var str = new String("This is the string")
    console.log("str.constructor is: "+ str.constructor)


    // 1. string.length property

    var strLength = new String("Hello world")
    console.log("Length method: " + strLength.length )


    // 2. string.proptype/ object prototype property
    // (Number, Boolean, String, Date, etc)
    // protype property allows you to add properties and methods to any object 

    function employee(id, name){
        this.id = id
        this.name = name
    }

    var emp = new employee(123,"Smith")

    employee.prototype.email = "smith@abc.com"
    employee.prototype.salary = 4000

    console.log("Employee Id: "+ emp.id)
    console.log("Employee Email: "+ emp.email)


    // Methods of the String

    // 1. CharAt
    // Syntax: string.charAt(index)

    var charAtString = new String("This")
    console.log("str.charAt(0) is: " + str.charAt(0))
    
    // 2. charCodeAt(index)
    var chatCodeAtString = new String("This is a String")
    console.log("str.charCodeAt(0) is: " + str.charCodeAt(0))
     //  https://www.rapidtables.com/code/text/unicode-characters.html -Unicode link
    //  an international encoding standard for use with different languages and scripts, by which each letter, digit, or symbol is assigned a unique numeric value that applies across different platforms and programs.


    // 3. Concat Method
    // Syntax: string.concat(string1, string2, ..., stringn)

    var concatString1 = "This is string one"
    var concatString2 = "This is string two"
    var concatString3 = concatString1.concat(concatString2)

    console.log("concatString1 + concatString2 is: " + concatString3)


    // 4. IndexOf
    // Syntax: string.indexOf(searchValue[, fromIndex])
    // searchValue: A string representing the value to search for
        // fromIndex: The location within the calling string to start the search from.
        //            It can be any integer between 0 and the length of the string

        var indexOfString = new String("This is index of string")

        var indexPosition = indexOfString.indexOf("string",4)
        console.log("Index Position of 4th I: " + indexPosition)

    // 5. LastIndexOf
    // Syntax: string.lastIndexOf(searchValue[,fromIndex])

        var lastIndexOfString = "This is last index of string"
        var indexPostingLast = lastIndexOfString.lastIndexOf("i",3)
        console.log("Index Position from last with the starting position 5: " + indexPostingLast)

    // 6. localeCompare
    // Syntax: string.localeCompare(param)
    // 0 - If the string matches 100%
    // 1- no match, and the parameter value comes before the string objects value in the local sort order


    var localCompareString = new String("This is a beautiful string")
    var localCompareString2 = "This is a beautiful string"
    var indexPosition = localCompareString.localeCompare(localCompareString2)
    console.log("Locale Compare first: "+ indexPosition)

    // 7. Match
    // Syntax:
    // Regular Expresion
    //  //"/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi"

    const sentence = "How Do yOu feEl about chanGINg the world"

    const regex = /[a-z]/g

    const lowerCaseLetters = sentence.match(regex)

    console.log(lowerCaseLetters)

    // 8. Replace
    
    var replaceString = /apples/gi
    var changingString = "Apples are round, and apples are juicy"

    var newString = changingString.replace(replaceString, "Oranges")

    console.log(newString)

    // 9. Search
    // Syntax: string.search()

    var re = /apples/gi
    var searchString = "Apples are round, and apples are juicy"
    if(searchString.search(re) == -1){
        console.log("Does not contain Apples")
    }
    else{
        console.log("Contains Apples")
    }

    // 10. Slice
    // Syntax: string.slice(beginSlice, endSlice)

    var sliceString = "Apples are round, and apples are juicy"
    var slicedtString = sliceString.slice(3,-2)
    console.log(slicedtString)

    // 11. Split
    // Syntax: string.split()
    var splitString = "Apples are round, and apples are juicy"
    var splittedString = splitString.split("", 3)
    console.log(splittedString)

    // 12. SubStr
    // Syntax: string.substring(indexA, indexB)
    var subString = "Apples are round, and apples are juicy"
    console.log("(1,2): "+ subString.substring(1,2))
    console.log("(0,10): "+ subString.substring(0,10))

    // 13. toLocaleLowerCase()
    var lowerCaseString = "Apples are round, and apples are juicy"
    console.log(lowerCaseString.toLocaleLowerCase())
    console.log(lowerCaseString.toLowerCase())

    // 14. toLocaleUpperCase()
    console.log(lowerCaseString.toLocaleUpperCase())
    console.log(lowerCaseString.toUpperCase())

    // 15. toString()
    var num = 22
    console.log(num.toString())

    // 16. Trim
    let sent = "      scotchy scotch    "
    // trim sentence
    let trimmedSentence = sent.trim()
    console.log(trimmedSentence)
    let password = '   p@ssw0rd   '
    console.log(password.trim())

    // 17. Includes 
    const includeString = "are you available for the meeting"

    const searchWord = "meeting"

    const isPresent = includeString.includes(searchWord)

    console.log(isPresent)


    // 18. EndsWith
    // Syntax: string.endsWith(matchString, position)

    var endsWithString = "Hello World !!!"
    console.log(endsWithString.endsWith('Hello'))
    console.log(endsWithString.endsWith('Hello',4))

    // 19. Repeat
    // Syntax: string.repeat(count)

    var myBook = "Perl"
    console.log(myBook.repeat(2))

    // Template Literals

    var name = "Brendan"
    console.log("Hello" + name)
    console.log(`Hello ${name} how are you`)

    function fn() {
        return "Hello World"
    }
    console.log(`Message: ${fn()} !!`)

    // 20. FromCodePoint
    console.log(String.fromCodePoint(42))
    console.log(String.fromCodePoint(65,90))