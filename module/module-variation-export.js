/* Exports
** This variation allows us to declare globals without consuming them and could similarly support the concept of clobal import 
**
*/

// Global module
var myModule = (function(){
    // Module object
    var module = {};
    var privateVariable = " Hello World";

    function privateMethod(){
        // ...
    }

    module.publicProperty = "Foobar"

    module.publicMethod = function(){
        console.log(privateVariable)
    }

    return module;
})()
console.log(myModule)