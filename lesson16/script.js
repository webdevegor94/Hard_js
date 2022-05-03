'use strict'

class First {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log(`Привет! я метод родителя ${this.name}`)
    }
}

class Second extends First {
    First() {
    }
    sayHello() {
        console.log(`А я наследуемый метод! ${this.name}`)
    }
}

const start = new First('First')
const finish = new Second('Second')

start.sayHello()
finish.sayHello()



