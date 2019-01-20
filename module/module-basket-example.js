/*
** The module itself is completely self-contained in a global variable called basketModule. 
** The basket array in the module is kept private and so other parts of our application are unable to directly read it. 
** It only exists with the module's closure and so the only methods able to access it are those with access 
** to its scope (i.e. addItem(), getItemCount() etc).
*/

var basketModule = (function(){
    'use strict'

    // Private
    var basket = [];

    function doSomethingPrivate(){
        // ...
    }

    function doSomethingElsePrivate(){
        // ...
    }

    // Return an object exposed to the public
    return {
        addItem: function(values){
            basket.push(values)
        },
        
        getItemCount: function(){
            return basket.length;
        },

        doSomething: doSomethingPrivate,

        getTotal: function(){
            var q = this.getItemCount();
            var p = 0;
            while(q--){
                if (q < 0) break
                p += basket[q].price
            }
            return p;
        }
    }
})()

// Using

basketModule.addItem({
    item: "Bread",
    price: 0.5
})

basketModule.addItem({
    item: "butter",
    price: 0.3
})

basketModule.addItem({
    item: "butter",
    price: 0.3
})

// 3
console.log(basketModule.getItemCount())

// 0.5
console.log(basketModule.getTotal())

//console.log(basket)