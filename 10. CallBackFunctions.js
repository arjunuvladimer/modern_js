// Call Back Functions

function parent(child1,child2){ // Function Defintion of Parent
    child1()// Functional Call for display
}

parent(
    function display(){ // Function Definition/expression
        console.log("Displaying Some text")
    }// As a value i am passing it to child1
    ,12) // Functional Call of Parent


function setTimeout(){
   display() // Function Definition/
}

setTimeout(function display(){
    console.log("some text")
},2000)// Functional Call