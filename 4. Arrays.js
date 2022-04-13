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
  // sum[0][0] => array3[0][0] * array4[0][0] + array3[0][1] * array3[1][0]
  // 10 -> 3 * 5 + 4 * 7  11 -> 3 * 6 + 4 * 8
  // 19 22
  // 43 50


var array3 = [[1,2],[3,4]]
var array4 = [[5,6],[7,8]]
var multi = [[0,0],[0,0]]

//   1 2   5 6 
//   3 4   7 8

  // 00 ->1 * 5 + 2 * 7  01 ->1 * 6 + 2 * 8
  // 10 -> 3 * 5 + 4 * 7  11 -> 3 * 6 + 4 * 8
  // 19 22
  // 43 50


  //   1 2   5 6 
  //   3 4   7 8
for(var i = 0; i < array3.length; i++){
    for(var j = 0; j < array4.length; j++){
        for(var k = 0; k < array4.length; k++){
            // let a = 10, b = 11
            // a += b
            // a = a + b
            multi[i][j] += array3[i][k] * array4[k][j]
            // Iteration 1
            // i = 0, j = 0, k = 0
            // sum[0][0] += array3[0][0] * array4[0][0]
            // sum[0][0] += 1 * 5
            // Iteration 2
            // i = 0, j = 0, k = 1
            // sum[0][0] += array3[0][1] * array4[1][0]
            // sum[0][0] += 2 * 7
            // sum[0][0] = 1 * 5 + 2 * 7 => 19
            // Iteration 3
             // i = 0, j = 1, k = 0
            // sum[0][1] += array3[0][0] * array4[0][1]
            // sum[0][1] += 1 * 6
            // Iteration 4
            // i = 0, j = 1, k = 1
            // sum[0][1] += array3[0][1] * array4[1][1]
            // sum[0][1] += 2 * 8
            // sum[0][1] = 1 * 6 + 2 * 8 => 22
             //   1 2   5 6 
             //   3 4   7 8
            // Iteration 5
            // i = 1, j = 0, k = 0
            // sum[1][0] += array3[1][0] * array4[0][0]
            // sum[1][0] += 3 * 5
            // Iteration 6
            // i = 1, j = 0, k = 1
            // sum[1][0] += array3[1][1] * array4[1][0]
            // sum[1][0] += 4 * 7
            // sum[1][0] = 3 * 5 + 4 * 7 => 43
            // Iteration 7
            // i = 1, j = 1, k = 0
            // sum[1][1] += array3[1][0] * array4[0][1]
            // sum[1][1] += 3 * 6
            // Iteration 8
            // i = 1, j = 1, k = 1
            // sum[1][1] += array3[1][1] * array4[1][1]
            // sum[1][1] += 4 * 8
            // sum[1][1] = 3*6 + 4 * 8 => 50
            // 19 22
            // 43 50
        }
    }
}

console.log(multi)

