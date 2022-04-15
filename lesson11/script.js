const btn = document.querySelector('button') // создаю переменную с селектором button
// 1 задание
btn.addEventListener('click', function () { // вешаю на кнопку события click 
    const input = document.querySelector('input[type=text]') // создаю переменую imput для ввода значения в поле нужного цвета
    const square = document.querySelector('#square') // создаю переменнкю по поиску квадрата 
    square.style.backgroundColor = input.value // по нажатию на кнопку меняется цвет квадрата заданного в поле

})
// 2 задание
const e_btn = document.querySelector('#e_btn')
e_btn.style = "display: none"

// 3 задание
const range = document.querySelector('#range')

range.addEventListener('input', function () {
    const rangeValue = range.value
    const circle = document.querySelector('#circle')
    circle.style.width = rangeValue + '%'// '20%' 
    circle.style.height = rangeValue + '%'
    const rangeSpan = document.querySelector('#range-span')
    rangeSpan.textContent = rangeValue
})