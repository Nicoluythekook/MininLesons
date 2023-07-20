const person = {

    age: 26,
    isRaspizdai: true,
    lenguage: ['en, ge, fr'],
    address: {
        city: 'Moscow',
        street: 'pestelia'
    },
    'bilo norm': 'oke oke',
    [1 + 2]: 'computed value',

    greet() {
        console.log('Greet from person', this)
    },

    arrow: () => {
        console.log('Person arrow', this)
    },

    info() {
        console.log('Person Arrow', this.name)
    },

}
//person.address = undefined
//console.log(person)

//    Деструктуризация
/*
const age = person.age

const name = person.name
const lenguage = person.lenguage
*/
/*
const {age, name: ferstName = 'Zalupa', lenguage} = person

console.log(age, ferstName, lenguage)
*/
/*
for(let key in person) {
   if(person.hasOwnProperty(key)){
       console.log(person[key])
   }
}
*/

//Object.keys(person).forEach((keys) => {
   // console.log(person[keys])  })

 const logger = {
     keys() {
         console.log('Object keys:', Object.keys(this))
     },
     keysAndValue() {
         Object.keys(person).forEach((key) => {
             console.log('key', key)
             console.log('Value:', this[key])
         })
     },
 }
//const bound = logger.keys.bind(person)
//bound()
//logger.keys.call(person, false)
//logger.keys.apply(person, [false])
