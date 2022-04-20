// Boolean Methods

    var bool = new Boolean("Perl", "Tom")

    // Proptotype Property
    Boolean.prototype.price = null
    bool.price = 100
    console.log(bool.price)

    // 1. toString

    var flag = new Boolean(false)
    console.log(flag.toString())

    // 2. Value of
    console.log(flag.valueOf())