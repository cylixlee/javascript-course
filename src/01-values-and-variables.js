// Values
console.log('strings', typeof 'strings') // string value
console.log(114.514, typeof 114.514) // number value

// Variables
let x = 1 // mutable variable with initial value
let variableWithNoValue // mutable variable with no initial value
console.log(x) // should be 1
x = 2
console.log(x) // should be 2
console.log(variableWithNoValue) // should be undefined

const y = 3 // immutable variable (must be initialized)
// const immutableVariableWithNoValue // error
console.log(y) // should be 3
// y = 4 // error
