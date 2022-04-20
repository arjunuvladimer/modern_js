// Static Method

    // Definition: 
    // A static method belongs to the class and the class members/methods
    // But not to the instance of the class

    class Triple{
        static  triple(n =1){
            return n * 3
        }
       

    }

    class BiggerTriple extends Triple{
         usingTriple(){
            return super.triple() * super.triple()
        }
    }

    // Triple Class Instance
    var obj = new Triple()
    console.log(obj.triple1())

    // var obj1 = new Triple()
    // console.log(obj1.triple())

    // BiggerTriple 
    // console.log(BiggerTriple.usingTriple())
    // console.log(Triple.triple())