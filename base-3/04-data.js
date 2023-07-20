
/*
console.log(new Date())

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())

 now.setFullYear(2055)
*/
/*
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())
*/
//==
//const now = new Date()
let mode = 'date'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

setInterval(update, 100)
update()
function update() {
    output.textContent = format(mode)
}
// Pure function // стремиться к тому чтоб были только пьюр функции
function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time': return now.toLocaleTimeString()
        case 'date': return now.toLocaleDateString()
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default: return now.toLocaleTimeString()
    }
}

