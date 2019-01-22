class Observable {
    // Each instance of the Observer class
    // Starts with an empy array of things (observer)
    // That react to a state change
    
    constructor(){
        this.observers = []
    }

    // Add the ability to suscribe to a new object /DOM Element
    // Essentially, add something to the observers array

    suscribe(f){
        this.observers.push(f)
    }

    // Add the ability to unsuscribe from a particular object
    // Essentially, remove something from the observers array

    unsuscribe(f){
        this.observers = this.observers.filter(suscriber => suscriber != f)
    }
    
    notify(data){
        this.observers.forEach(observer => obverver(data))
    }
}

let myObser = new Observable()
console.log(myObser)