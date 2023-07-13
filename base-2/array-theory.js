const  names = ['Влвдилен','Елена','Игорь','Игорь']
const people = [
    {name: 'Влвдилен', budget: 4200},
    {name: 'Елена', budget: 12345},
    {name: 'Игорь', budget: 9876},
    {name: 'Игорь', budget: 56789},
]
/*const findPerson = people.find(function(person) {
    return  person.budget === 56789
})*/
/*const findPerson = people.findIndex(function(person) {
    return  person.budget === 56789
})*/
/*  let sumBudet = 0
const filtered = people.filter(function (person) {
    return person.budget > 10000
})
console.log(filtered)
filtered.forEach(function(p){
    sumBudet += p.budget
})
console.log(sumBudet) */
/* const byBudget = (p) => p.budget > 10000
const pickBudget = (p) => p.budget

const sumBuget =
    people.filter(byBudget).map(pickBudget).reduce((acc, p) => acc + p, 0)

console.log(sumBuget) */


const string = 'Привет, как дела лох?'
const revers = string.split('').join('')
console.log(revers)