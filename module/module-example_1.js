
var testModule = (function(){
    var counter = 0;

    return {
        incrementCounter: function(){
            return counter++;
        },
        getCounter: function(){
            return `The counter is ${counter}`
        },
        resetCounter: function(){
            console.log("Counter Value reset");
            counter = 0;
        }
    }
})()

// Usage:

// increment our counter

testModule.incrementCounter() // Counter 1
testModule.incrementCounter() // counter 2
console.log(testModule.getCounter()) // 2
testModule.resetCounter() // counter 0
console.log(testModule.getCounter()) // counter 0