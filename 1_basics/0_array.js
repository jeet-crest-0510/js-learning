const array = [1, 2, 3, 4, 5, "Jeet" , true]

// console.log((array));

// console.log((array.push(1))); //returns length 5

// console.log((array));

// array.push(2)
// console.log((array));

// array.pop()
// console.log((array));

// array.unshift(10)
// console.log((array));

// array.shift()
// console.log((array));

// array.shift()
// console.log((array));

// console.log((array.includes(9)));
// console.log((array.indexOf(true)));
// console.log((array.join()));
// console.log((typeof array));

// console.log((array));
// console.log((array.slice(1,3)));

// console.log((array));
// console.log((array.splice(1,3)));
// console.log((array));

// const arr1=[1,2,3], arr2 = [4,5,6]

// console.log((arr1));
// arr1.push(arr2)
// console.log((arr1));
// console.log((arr1.concat(arr2)));
// console.log((arr1));
// const arr3 = arr1.concat(arr2)
// console.log((arr3));

//spread
// const arr3 = [...arr1, ...arr2]
// console.log((arr3));

// const arr1 =[1,2,3, [4,5], 6, [7,8,[9,10]]]
// console.log((arr1));
// console.log((arr1.flat(Infinity)));
// console.log((arr1));
// const arr3 = arr1.flat(0)  //No remove
// console.log((arr3));
// const arr4 = arr1.flat(1) // 1 Inner Bracket removed
// console.log((arr4));
// const arr5 = arr1.flat(2)  //2
// console.log((arr5));
// const arr6 = arr1.flat(3)
// console.log((arr6));

console.log(Array.isArray("Jeet"))
console.log(Array.from("Jeet"))   

const arr = Array.from("Jeet")
console.log(arr)
console.log(Array.from({name: "Jeet"}))  // []

const x1=100, x2=200
console.log(Array.of(x1,x2))



