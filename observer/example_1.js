;
((c)=>{
    c('************** Observer Pattern (Pub / Sub) **************');

    // Click representa el sujeto observable (pub)
    class Click{
        constructor(){
            this.handlers = []
        }

        subcribe(fn){
            this.handlers.push(fn)
        }

        unsuscribe(fn){
            this.handlers = this.handlers(filter(item => (item !== fn) ? item : false  ));
        }

        fire(msg){
            // Item is a function
            this.handlers.forEach(item => item(msg))
        }

    }

    // Clase auxiliar que recoje y muestra los resultados
    class Log{
        constructor(){
            this.log = ''
        }

        add(msg){
            this.log += `${msg} \n`
        }

        show(){
            c(this.log)
            this.log = '';
        }
        
    }
    


    const click = new Click()
    const log = new Log();

    // clickHandler es la función observadora (sub) este controla suscribe y cancela la observación, adicionalmente dispara los eventos para visualizar
    // las notificaciones del mismo 

    const clickHandler1 = item => log.add(`Dispara: ${item}`)
    const clickHandler2 = item => log.add(`DisparaOtro: ${item}`)

    click.subcribe(clickHandler1)
    click.subcribe(clickHandler2)
    click.fire('Seguidor 1')
    click.fire('Seguidor 2')
    click.fire('Seguidor 3')
    log.show()

})(console.log)
