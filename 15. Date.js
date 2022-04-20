// new Date()


// Date Properties

// 1. new Date()

var dt1 = new Date()
console.log(dt1)

var dt2 = new Date(2020,2)
console.log(dt2)

// 2. Date String
var dateString = new Date("31 August, 2019")
console.log(dateString)

var dateString2 = new Date("2015-03-25")
console.log(dateString2)


// Date Methods

// 1. Date.now
// Retuns the numeric value corresponding to the current time 
// Number of Milliseconds January, 1, 1970 00:00:00 UTC
// Leap seconds are ignored

var milliSecondDate = Date.now(2019,8,8)

console.log(milliSecondDate)

// 2. Date.parse
// The Date.parse() method parses a string represetion of a date, and returns the number of milliseconds
// Since January, 1, 1970

var milliSecondDateParse = Date.parse("November, 23, 2019")
console.log(milliSecondDateParse)

// 3. Date.UTC
var UTCDate = Date.UTC(2019,12,20)
console.log(UTCDate)


// Date Instances
// 1. getDate()
 var date = new Date()
 console.log(date.getDate()) // Current Date

 // 2. getDay()
 console.log(date.getDay()) // Current Day 

 var date1 = new Date('14 January, 2020')
 console.log(date1.getDay()) // 2 for Tuesday

 // 3. getFullYear
  var date2 = new Date()
  console.log(date2.getFullYear())

  // 4. getHours
  console.log(date2.getHours())

  // 5. getMinutes
  console.log(date2.getMinutes())

  // 6. getMonth
  console.log(date2.getMonth())

  // 7. getMilliSeconds
  console.log(date2.getMilliseconds())
  var date3 = Date.now()
  console.log(date3)

  // 8. getSeconds
  console.log(date2.getSeconds())

  // 9. getTime
  console.log(date2.getTime())

  var end, start
  start = new Date(2010,12,19) // Current Date and Time
  end = new Date(2011,12,19)
  console.log('Operation took ' + (end.getTime() - start.getTime() + 'millisec'))