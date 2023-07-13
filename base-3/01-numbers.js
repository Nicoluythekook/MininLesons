/*
const numbers = 42   //integer

const float = 42.42  //float
const pow = 10e3
const big = 1_000_000  //нижнее подчеркивание для наглядности кол-ва нулей
const negativ = -10 //отрицательное - негативное
 */
/*
console.log(Math)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

const wierd = 23 / undefined
console.log(Number.isNaN(12))
*/
/*
const rrr = 'wrgb'

const strInt = '42'
const strFloat = '42.42'
 // console.log(+strInt, +strFloat)

const fixed = (0.1 + 0.2).toFixed(1)  //можно выводить в константу для того чтоб было понятней
console.log(parseFloat(fixed))
*/
// BigInt
/*
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 23563456n)
console.log(-42n)
//  console.log(42.42n)  //error
//  console.log(10n - 4) //error
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n)  //2n потому что BigInt челочисленный тип
console.log(5 / 2)
*/

// Math.
/*
console.log(Math.E)   //exponent
console.log(Math.PI)  // pi number
console.log(Math.sqrt(25) //5
console.log(Math.abs(-42) //42
console.log(Math.max(2, 5, 76, 100) //100
console.log(Math.min(2, 5, 76, 100) //2
*/
/*
const myNum = 4.9
console.log(Math.floor(myNum))  //округление в меньшую сторону
console.log(Math.ceil(myNum))   // округляет в большую
console.log(Math.round(myNum))  //округляет в близжайшую сторону то есть 5
console.log(Math.trunc(myNum))
console.log(Math.random())  // рандомное число
*/

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const num1 = getRandomNumber(10, 100)
console.log(num1)
