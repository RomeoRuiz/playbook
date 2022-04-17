/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello () {
        console.log(`Mi pokemon: ${this.name} Te Saluda`)
    }

    sayMessage (message) {
    console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
  }
