// Function Declaretion
/*
function greeting(name) {
    console.log('hello - ' + name)
}
// Function Exspression
const greeting2 = function (name) {
    console.log('2hello - ' + (name))
}


greeting('Niko')
greeting2('Niko')
*/
/*
setTimeout(function () {
    greeting('Niko3')
}, 1500)
*/
/*
let counter = 0
const interval = setInterval(function (){
if (counter === 5) {
    clearInterval()
} else {
    console.log(++counter)
}
}, 1000)
*/

// Arrow Function
/*
function greeting(name) {
    console.log('hello - ' + name)
}
const arrow = (name, age) => {
    console.log('hello - ', name, age)
}

const arrow2 = (name) => console.log('hello - ', name)
arrow2('Mila')

const pow = (num, exp) => Math.pow(num, exp)
console.log(pow(2, 3))
*/


// ========= Default Parameters

const sum = (a, b) => a + b
console.log(sum(30, 4))

function sumAll (...numbers) {
    return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(1, 2, 3, 4, 5, 10))

// Closures  // ЗАМЫКАНИЕ - функция в функции
 function creatPerson(name) {
    return function (lastName) {
        console.log(name + ' ' + lastName)
    }
}
const lastName = creatPerson('Niko')
lastName('Didi')
