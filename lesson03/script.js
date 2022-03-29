
let lang = prompt('Назовите язык', 'ru');
if (lang == 'ru') {
    console.log("Дни недели выводятся на русском")
} else if (lang == 'en') {
    console.log("Дни недели выводяся на английском")
} else {
    console.log("Уссловия не выполняются")
}

switch (lang) {
    case 'ru':
        console.log("Неделя на русском")
        break;
    case 'en':
        console.log("Неделя на английском")
        break;
    default:
        console.log("Условия не выполняются")
}



let en = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let ru = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let langObject = {
    en: en,
    ru: ru
}
console.log(langObject[lang])


let namePerson = prompt("Назовите имя", "Александр")
// let messeage1 = namePerson === "Александр" ? 'Преподаватель' : 'студент'
// let messeage2 = namePerson === "Артем" ? 'директор' : messeage1;

// Краткая запись
let messeage3 = namePerson === "Артем" ? 'директор' : (namePerson === "Александр" ? 'Преподаватель' : 'студент')
console.log(messeage3)



