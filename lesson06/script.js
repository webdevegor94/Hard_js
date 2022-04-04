
function guess() {
    let res = prompt("Загадывание случайного числа от 1 до 100")
    if (res === null) {
        console.log('Отмена')
        finish()
    } else if (!isNumber(res)) {
        console.log('Не число')
        return guess()
    } else {
        console.log('Число')
        return Number(res)
    }

}



function finish() {
    alert('Игра оконченна')
}

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

let guessNumber = guess()// Загаданное число
console.log(guessNumber)

function play() {
    let res = prompt("Угадай число от 1 до 100")
    if (res === null) {
        console.log('Отмена')
        finish()
    } else if (!isNumber(res)) {
        console.log('Не число')
        alert('Введите число')
        play()
    } else {
        console.log('Число')
        res = Number(res)
        if (res < guessNumber) {
            alert('Загаданное число больше')
            play()
        } else if (res > guessNumber) {
            alert('Загаданное число меньше')
            play()
        } else {
            // тут считаем что равно 
            let repeat = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
            if (repeat === true) {
                guessNumber = guess()
                play()
            }

        }

    }
}

play()