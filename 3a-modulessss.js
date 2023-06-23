// Modules
// CommonJS, every file is module
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utilies')
const alternative_data = require('./6-alterative_copy')
//console.log(names)

require('./7-mind-granade')

sayHi("susan")
sayHi(names.john)
sayHi(names.peter)
console.log(alternative_data)
sayHi(alternative_data)                     // prouciti

