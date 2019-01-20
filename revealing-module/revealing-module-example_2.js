var myRevealingModule = (function(){

    var privateCounter = 0;

    function privateFunction(){
        privateCounter ++;
    }

    function publicFunction(){
        publicIncrement()
    }

    function publicIncrement(){
        privateFunction();
    }

    function publicgetCount(){
        return privateCounter
    }

    // Reveal public points to
    // Private functions and properties
    return{
        start: publicFunction,
        increment: publicIncrement,
        count: publicgetCount
    }
})()

myRevealingModule.start()
console.log(myRevealingModule.count())