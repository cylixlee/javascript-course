// Values are either of primitive type or object type.
// 1. Primitives (7):
//    - number
//    - string
//    - boolean
//    - null
//    - undefined
//    - bigint
//    - symbol

console.assert(typeof 1 === 'number')
console.assert(typeof 'Cylix Lee' === 'string')
console.assert(typeof true === 'boolean')
console.assert(typeof null === 'object')
console.assert(typeof undefined === 'undefined')
console.assert(typeof 1234567890123456789012345678901234567890n === 'bigint')
console.assert(typeof Symbol('Cylix Lee') === 'symbol')
