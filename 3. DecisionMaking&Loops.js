// // Decision Making
//     // 1. IF
   
//     // 2. IF Else
//     // 3. Else IF
//     // 4. Nested IF
    let a = 10 
    let b = 11
    if(a == 10){
        console.log("1. True")
        if(b == 11){
            console.log("Nested IF is True")
        }
    }
    else if(b == 11){
        console.log("2. True")
    }
    else{
        console.log("False")
    }
    // 5. Switch

    switch(a){
        case 1: 
            console.log("Case 1"+true)
        case 2:
            console.log("Case 2"+true)
        case 10:
            console.log("Case 10"+true)
            break
        case 11: 
            console.log("Case 11"+ true)
    }

// // Loops 

// 1. for Loop
    //for(initialization; condition; update){}
    for(var i = 0; i< 10; i++){
        console.log(i)
    }
// 2. for in Loop
    var obj = {
        name: "arjun",
        gender: "male"
    }
    
   for( let i in obj){
       console.log(obj[i])
   }
   
   console.log(obj.name)
// 3. for of Loop
var array = [1,2,5,45,5]
 for(let i of array){
     console.log(i)
 }
// 4. while
var i = 0
i = "some"
while(i<10){
    console.log(i)
    i++
}
console.log(i)
// 5. do while 
    do{
        var i = 0
        console.log(i)
    
    }while(i>1)