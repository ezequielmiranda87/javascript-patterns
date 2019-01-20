var myNamespace = (function(){
    var myPrivateVar;
    var myPrivateMethod;

    var myPrivateVar = 0;

    var myPrivateMethod = function(foo){
        console.log(foo)
    };

    return {
        // A public variable
        myPublicVar: 'foo',

        // A public function utilizing privates
        myPublicFuncrtion: function(bar){
            
            // Increment our priavete counter
            myPrivateVar ++;

            // Call our private method using bar
            myPrivateMethod(bar);
        }
    }
})()