// Event Loop
/*
const timeout = setTimeout(() => {
    console.log('pipirka')
}, 2000)

clearTimeout(timeout)

setTimeout(() => {
    console.log('pipirka')
}, 4000)
*/
/*
let count = 0
setInterval(() => {
    console.log('pipirka', ++count)
}, 100)
*/
/*
function delay(callback, time = 1000) {
     setTimeout(callback, time)
}
*/
const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject ) => {
      setTimeout(() => {
          resolve([1, 2, 3])
          reject('Error in delay')
      }, time)
  })
  return promise
}
/*
delay(3000).then((data) => {
    console.log('Timeout', data)
    return data.map((x) => x ** 2)
}).then((data) => {

    console.log(data)
})
    .catch((err) => {
    console.log(err)
}).finally(() => console.log('Finally'))
*/

const getData = () => new Promise ((resolve) => resolve([1, 2, 3]))

async function asyncExample() {
     try {
         await delay(3000)
         const data = await getData()
         console.log(data)
     } catch (err) {
console.log(err)
     } finally {
console.log('Finally')
     }
}
 asyncExample()
 
