// // Variables


// 1. General Variable Declaration

      // Named Space Memory Allocation that can Change/Vary
      var a = 10;
      a = 17;
      var a;
      function add(){}; // DATA Types
      class alpha{};

      var b; // Declaration
      b = 11; // Initialization

      var c = 13; // Definition
      

      console.log(a);

      console.log("10");

      // 2. Data Types

      var a = 10 // Number
      var b = "String some word" // String
      var c = true // Boolean True/False
      var d = null // With any Value Void
      var e = function add(){} // Function 
      var f = {} // Object
      var g = [] // Array 

// 2. Scope of a Var 

    // 1. Global Scope
    var x = 18;
    function display(){
      console.log(x);
    }
    display();
    console.log(x);

    // 2. Functional Scope/ Local Scope
    function displayText(){
      var y = 19;
      {
        console.log(y);
      }
      console.log(y);
    }
    displayText();
    // console.log(y);

// 3. Block Scope Variables 

      // 1. Let Variable / Block Scope Variable
      function letblockScopeVariable(){

        for(let i = 0; i< 5; i++){ // Nearest Block 
          console.log(i);
        }

        // console.log("Outside Block:"+i)
      }

      letblockScopeVariable();

      // 2. Const Variable / Block Scope Variable

      // Note: 1. You cannot reinitialize a value
      //       2. While Declaring only you have to intialize a value
      function constblockScopeVariable(){
        
        
        for(const i = 0; i< 5; i++){ // Block 
          console.log(i);
        }

        console.log(i);
        
      }
      constblockScopeVariable();

// 4. Variable Hoisting

      // All the Variable Declaration are taken to the Top by JavaScript Engine

      console.log(z);

      var z;

      z = 18;

      function add(){
        console.log(k)
        var k;
        k = 1203;
      }
      add();


      // Note: For Let & Const Variable Hoisting doesn't work 