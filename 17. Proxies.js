let obj = {
    reason: 'some reason',
    code: '12345'
}
console.log(obj.reason)
console.log(obj.code)
console.log(obj.someKey)

let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Key does not exist'
    }
}
// Proxies 
// Syntax:
    // new Proxy(obj, handler) // handler is another object which handles us the current object
    let proxy = new Proxy(obj, handler)

   

    console.log(proxy.reason)
    console.log(proxy.someKey)

