
/*
1) Создать массив arr = []

— Записать в него 7 любых многозначных чисел в виде строк

— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
*/

let arr = ['32', '27', '755', '47', '104', '78', '377'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }

}

/*
2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)

— Рядом с каждым числом написать оба делителя данного числа

    Например: “Делители этого числа: 1 и n”
    */


nextPrime: for (let i = 1; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime
    }
    console.log(i + " - Делители этого числа: 1 и " + i)
}