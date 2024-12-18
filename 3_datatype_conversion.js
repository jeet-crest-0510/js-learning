let x = 123n
let y = undefined
let z = undefined

console.table( [x, typeof x,  BigInt(x), typeof BigInt(x)]);
console.table( [y, Boolean(y), typeof Boolean(y)]);
console.table( [z, String(z), typeof String(z)]); 

//Operations

// console.log("1" + 2)
// console.log(1 + 2 * 3 + "x");
// console.log("x" + 1 * 2);

// console.log("2" - 1  + 3);
// console.log("2" / 1 + 3);
// console.log("2" * 1 +2);
// console.log("2" % 1  + 2);

// console.log("x" - 1  + 3);
// console.log("x" / 1 + 3);
// console.log("x" * 1 +2);
// console.log("x" % 1  + 2);

// console.log(true + 2.2);
// console.log(true + " 2 ");
// console.log(true + "2");

// console.log(true + "1" + 2)
// console.log(true + 2 + "1")
// console.log("true" + 2 + "1")
// console.log("2" + 2 + true)
// console.log(true + 2 + "1")
// console.log(2 + true + "1")
// console.log(3 + "1" + true)

// console.log(typeof(true + "1" + 2))
// console.log(typeof(true + 2 + "1"))
// console.log(typeof("true" + 2 + "1"))
// console.log(typeof("2" + 2 + true))
// console.log(typeof(true + 2 + "1"))
// console.log(typeof(2 + true + "1"))
// console.log(typeof(3 + "1" + true))

// console.log(typeof(2 + true))
// console.log(typeof(false + true))