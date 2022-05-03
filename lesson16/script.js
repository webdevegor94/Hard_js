'use strict'

class First {
    sayHello() {
        console.log('Привет! я метод родителя')
    }
}

class Second extends First {
    sayHello() {
        super.sayHello();
        console.log('А я наследуемый метод!')
    }
}

const start = new First();
const finish = new Second();
finish.sayHello();



