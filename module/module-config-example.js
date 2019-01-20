var myModule = (function(){
    
    let myProperty = "someValue";

    let myConfig = {
        useCaching: true,
        language: "en"
    }

    return {
        saySomething: function(){
            console.log("Hello, Stupid human i'm your computer and i'm live")
        },
        reportMyConfig: function(){
            console.log("Caching is: " + myConfig.useCaching ? "enable" : "disable")
        },
        updateMyConfig: function(newConfig){
            if(typeof newConfig === "object"){
                this.myConfig = newConfig;
                console.log(this.myConfig.language)
            }
        }
    }
})()

// Outputs : 
myModule.saySomething();

// Outputs : 
myModule.reportMyConfig();

// Outputs : 
myModule.updateMyConfig({
    language:"fr",
    useCaching: false
});

// Outputs : 
myModule.reportMyConfig();
