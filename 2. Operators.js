// Arithematic Opeartors
// [+,-,/,%,++,--]

var a = 10
var b = 11

// output = left operand(a) operator(+) right operand(b)
var c = a + b
console.log(c)
c = a -b
console.log(c)
c = a/b
console.log(c)
c = a %b
console.log(c)


console.log(--a) // a = 1 +a , a = a +1
console.log(a)

// Relational Operators
// [==,===,<=,>=,!=]
var d = 10
var e = 12
if(d != e){
    console.log(true)
}
else{
    console.log(false)
}
// Logical Operators
//[ &&, ||, !]
var f = 125
var g = 122
if( !(f || g) == 125){
    console.log(true)
}else{
    console.log(false)
}
// Bitwise Operators
// [&,|,^,~,<<,>>,>>>]

// And[&]
var h = 10
var i = 11

// Convert them into bits
// h => 1010 => 10
// 1 => 2^3, 0 => 2^2,  1 => 2^1, 0 => 2^0 => 8 + 2 => 10
// i => 1011 => 11
// 1 => 2^3, 0 => 2^2,  1 => 2^1, 1 => 2^0 => 8 + 2 => 11

// 1010
// 1011
// --------
// 1011 => 11

var j = h | i

console.log(j)

// ^ XOR Operator
// 1010 => 10 => h
// 1011 => 11 => i
// ----------------
// 0001  => 2^0 => 1
var k = h ^ i
// 0001
console.log(k)

// ~ Operator

var l = -10

console.log(~l)

// << Left Shift Operator

var m = 10
 
// m  => 1010 => 0101 0000
n = m << 3
n = m >> 2  // => 1010 => 0010
console.log(n)


// >>> Zero Fill Right Shift Operator 

// Assignment Operators
// [=, +=, -=, *=, /=, %=, &=, |=]
var o = 132
var p = 10;
// o = o * p
o*=p
console.log(o)


// Miscileaneous Operators
// [typeof, ?:, ]

// Condition Operator

var q = 10
var r = (q == 11 ? 11: 14)
console.log(r)

var s = "11"
console.log(typeof(s))