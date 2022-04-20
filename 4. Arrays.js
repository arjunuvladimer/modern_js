// Single Dimensional Array 
 var array = [1,2,3,4,5]
 // 0 1 2  3 4 


 // Multi Dimensional Array
 var array = [[1,2],[3,4]]
 // 0       1
 // 0 1     0 1

var array1 = [[1,2],[3,4]]
var array2 = [[5,6],[7,8]]
var sum = [[],[]]
for(var i = 0; i< array1.length; i++){

    for(var j = 0 ; j< 2; j++){
    // sum [0][0] = array1[0][0] + array2[0][0]
    // sum [0][1] = array1[0][1] + array2[0][1]

    // sum [1][0] = array1[1][0] + array2[1][0]
    // sum [1][1] = array1[1][1] + array2[1][1]
        sum[i][j] = array1[i][j] + array2[i][j]
    }
    
   
}
console.log(sum)

//   1 2   5 6 
//   3 4   7 8

  // 00 ->1 * 5 + 2 * 7  01 ->1 * 6 + 2 * 8
  // 10 -> 3 * 5 + 4 * 7  11 -> 3 * 6 + 4 * 8
  // 19 22
  // 43 50