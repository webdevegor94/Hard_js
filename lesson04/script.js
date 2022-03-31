'use stict'

let foo = function (action) {
    // 1 START
    if (typeof action !== 'string') {
        return 'Не строка';
    }
    // 1 end
    // 2 start
    let a = action.trim()
    // 2 end
    // 3 start
    if (a.length < 30) {
        return a
    } else {
        return a.substring(0, 30) + '...'
    }
}
console.log(foo(10))
console.log(foo('dglknfkjdnbvjdkvdkjncvdhbkdjfnvjdbvf'))
console.log(foo(true))
console.log(foo('Egor'))
console.log(foo(1010294))
console.log(foo(undefined))

