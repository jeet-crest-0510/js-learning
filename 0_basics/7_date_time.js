let myDATE = new Date()

// console.log((myDATE));   //2024-12-19T05:57:05.601Z
// console.log((myDATE.toDateString()));   //Thu Dec 19 2024
// console.log((myDATE.toLocaleString()));    //19/12/2024, 11:27:05 am
// console.log((myDATE.toLocaleDateString()));  //19/12/2024

let myDATE1 = new Date(2024,11,19,11,30,35)

// console.log((myDATE1.toLocaleString()));   //19/12/2024, 11:30:35 am

// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))

console.log((myDATE.toLocaleString('default', {
    weekday: 'long',
    day: 'numeric'
})));    //Thursday 19