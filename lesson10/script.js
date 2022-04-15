const aside = document.querySelector('.books')
const bookList = document.querySelectorAll('.book')
// Сохраняем изначальную позицую карточек в переменную
const book1 = bookList[1]
const book2 = bookList[0]
const book3 = bookList[4]
const book4 = bookList[3]
const book5 = bookList[5]
const book6 = bookList[2]
// Удаляем изначальное положение карточек
for (let i = 0; i < bookList.length; i++) {
    aside.removeChild(bookList[i])
}
//  Вставляем правильную последовательность карточек
aside.append(book1, book2, book3, book4, book5, book6)


const ReplaceBackground = function () {
    document.body.style.backgroundImage = 'url("/image/you-dont-know-js.jpg")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

}
document.addEventListener("DOMContentLoaded", ReplaceBackground);


book3.querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов'

const adv = document.querySelector('.adv')
const body = document.querySelector('body')
body.removeChild(adv)



const ul = book2.querySelector('ul')
const liList = book2.querySelectorAll('li')
const li1 = liList[0]
const li2 = liList[1]
const li3 = liList[3]
const li4 = liList[6]
const li5 = liList[8]
const li6 = liList[4]
const li7 = liList[5]
const li8 = liList[7]
const li9 = liList[9]
const li10 = liList[10]
const li11 = liList[2]
console.log(liList)

for (let i = 0; i < liList.length; i++) {
    ul.removeChild(liList[i])
}

ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11)


const p = book5.querySelector('ul')
const liListP = book5.querySelectorAll('li')
const p1 = liListP[0] //вед
const p2 = liListP[1] //pt
const p3 = liListP[9] // 1
const p4 = liListP[3] // 2
const p5 = liListP[4]// 3
const p6 = liListP[2] // 4
const p7 = liListP[6] // 5
const p8 = liListP[7] // 6
const p9 = liListP[5] // a
const p10 = liListP[8] // b
const p11 = liListP[10] // c
console.log(liListP)

for (let i = 0; i < liListP.length; i++) {
    p.removeChild(liListP[i])
}

p.append(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)

book6.querySelector('a').textContent = 'Глава 8: За пределами ES6'