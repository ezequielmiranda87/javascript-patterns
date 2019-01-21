
var mySingleton = (function(c){
    c('******* Singleton Example *******')

    var instance; 

    function init(){
        // Singleton

        function privateMethod(){
            console.log("I am private");
        }

        var privateVariable = "Im also private";

        var privateRandomNumber = Math.random()

        return {
            publicMethod : function(){
                console.log("The public can see me!")
            },

            publicProperty: "I am also public",

            getRandomeNumber: function(){
                return privateRandomNumber;
            }
        }
    }

    return {
        // Get the singleton instance if one exist or create one if it doesn't
        getInstance : function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})(console.log)


const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();

console.log(singleA === singleB)
console.log(singleA.getRandomeNumber() === singleB.getRandomeNumber())
