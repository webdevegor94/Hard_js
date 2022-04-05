
function guess() {
    let res = prompt("Загадывание случайного числа от 1 до 100")
    if (res === null) { // если нажимаем "отмена"
        console.log('Отмена')
        finish() // игра оконченна 
    } else if (!isNumber(res)) { //если вводим не число 
        console.log('Не число')
        return guess() // происходит повторный вызов функции 
    } else { // в остальных случаях вводим число
        console.log('Число')
        return Number(res) // переменую res переопределяем как число 
    }

}



function finish() {
    alert('Игра оконченна')
}

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

let guessNumber = guess() // Загаданное число
let j = 10  // 10 попыток
play() // начали игру 



function play() {

    let res = prompt("Угадай число от 1 до 100")
    if (res === null) { // если нажимаем отмена 
        console.log('Отмена')
        finish() // происходит завершение игры 
    } else if (!isNumber(res)) { // иначе если переменная res не число 
        console.log('Не число')
        alert('Введите число')
        play() // рекурсия функции 
    } else {
        console.log('Число')
        res = Number(res) // переопределяем res в число 
        if (res < guessNumber) { // если res меньше  загаданного числа 
            j = j - 1 // минус 1 попытка
            if (j >= 1) {
                alert('Загаданное число больше, осталось попыток ' + j)
                play() // рекурсия 
            } else {
                let repeat = confirm('Попытки закончились, хотите сыграть еще?')
                if (repeat === true) {
                    guessNumber = guess()
                    j = 10
                    play()
                } else {
                    finish()
                }
            }
        } else if (res > guessNumber) { // если res больше загаданного числа 
            j = j - 1 // минус 1 попытка
            if (j >= 1) {
                alert('Загаданное число меньше, осталось попыток ' + j)
                play() // рекурсия 
            } else {
                let repeat = confirm('Попытки закончились, хотите сыграть еще?')
                if (repeat === true) {
                    guessNumber = guess()
                    j = 10
                    play()
                } else {
                    finish()
                }
            }
        } else {
            // тут считаем что равно 
            let repeat = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
            if (repeat === true) { // нажал ок
                guessNumber = guess()
                j = 10
                play()
            } else {
                finish()
            }

        }

    }
}

