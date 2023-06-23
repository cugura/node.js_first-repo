// Path

const path = require('path')


//console.log(path.sep)

const filePath = path.join('./content/', 'subfolder', 'test.txt')
//console.log(filePath)

// name of the file
const base = path.basename(filePath)
//console.log(base)

//apsolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)