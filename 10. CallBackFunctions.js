// Call Back Functions

function parent(child1,child2){ // Function Defintion of Parent
    child1()// Functional Call for display
}

parent(
    function display(){ // Function Definition/expression
        console.log("Displaying Some text")
    }// As a value i am passing it to child1
    ,12) // Functional Call of Parent


function add(){
    console.log('Add function') // Function Definition/
}

add()// Functional Call