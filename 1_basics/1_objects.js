//Object Literals

// const x = Symbol("123")

// const user = {
//     id: "jeet123",
//     name: "Jeet",
//     // [x]: "456"
// }

// console.log(user.name);
// console.log(user["id"])
// console.log(user[x])
// console.log(x)
// console.log(user)

// Object.freeze(user)  //no modification

// user.name = "Jay"

// console.log(user.name)

// user.greeting = function(){
//     console.log(`Hello ${this.name}`);
    
// }

// user.greeting()

//Constructor

// const user = new Object()
// user.name = "Jeet"
// console.log(user.name);

// user.name = "jay"
// console.log(user.name);

// const regularuser = {
//     fullname: {
//         userfullname:{
//             firstName: "jeet",
//             lastName: "prajapati"
//         }
//     }
// }

// console.log(regularuser.fullname.userfullname.lastName);


// const obj1 = {
//     1: "a",
//     2: "b"
// }

// const obj2 = {
//     3: "c",
//     4: "d"
// }

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
// console.log(obj1);

// const obj4 = Object.assign({}, obj1,obj2)
// console.log(obj4);

// const obj5 = Object.assign(obj1,obj2)
// console.log(obj5);

// const obj3 = {...obj1, ...obj2, ...obj1}   //only unique keys obj1 & obj2
// console.log(obj3);

// users = [
//     {id: 1, name: "jeet"},
//     {id: 2, name: "jay"}
// ]

// console.log(users[0].name);
// console.log(users[1]);

// console.log(Object.keys(users[0]));
// console.log(Object.values(users[0]));
// console.log(Object.entries(users[0]));

//destructure

const obj1 = {
    id: "abc",
    name: "jeet"
}

console.log(obj1.id);

const {id} = obj1
console.log(id);

const {id: i} = obj1
console.log(i);
