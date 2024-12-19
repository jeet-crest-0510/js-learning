let name1 = "Jeet"
let name2 = name1
name2 = "Jay"

// console.log(name1)
// console.log(name2);

let user1= {
    name: "Jeet",
    age:21
}

let user2 = user1

user2.name = "Jay"

// console.log(user1)
// console.log(user2)

let myFun1 = function(){
    name = "Meet"
    console.log("Hello" + name)
}

let myFun2 = myFun1

myFun2.name = "Jeet"

console.log(myFun1())
console.log(myFun2())