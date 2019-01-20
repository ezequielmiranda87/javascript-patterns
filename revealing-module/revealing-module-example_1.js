var myRevealingModule = (function(){
    var privateVar = "Ben Cherry";
    var publicVar  = "Hey There!"

    function privateFunction(){
        console.log(`Name: ${privateVar}`);
    }

    function publicSetName(strName){
        privateVar = strName;
    }

    function publicGetName(){
        privateFunction()
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    }
})()

myRevealingModule.setName("Thom Yorke");
console.log(myRevealingModule.greeting);