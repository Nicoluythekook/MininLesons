//let num = 42 //number
//let firstName = 'Niko' //string
//const isProgrammer = true //boolean

//firstName = 'Didi Niko'
//isProgrammer = false
//alert(firstName)
//console.log(firstName)

//console.log(num + 10)
//console.log(num - 10)
//console.log(num * 10)
//console.log(num / 10)
//console.log(num)

 //let num2 = num + 10
//console.log(num, num2)
//console.log(resultElement.textContent)


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')


//console.log(typeof  sum)

submitBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
 }