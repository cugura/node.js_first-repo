// file system module SYNCRONIS

//const {readFileSync} = require('fs')
//or
//const fs = require('fs')
//fs.readFileSync

const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const first = readFileSync(`./content/first.txt`, 'utf-8');
const second = readFileSync(`./content/second.txt`, 'utf-8');

//console.log(first, second)

// write - if not exist will create, if exists will overwrite it
//writeFileSync(
    //`./content/result-sync.txt`, 
    //`here is the result: ${first}, ${second}`)

// append - {flag: 'a'}
writeFileSync(
    `./content/result-sync.txt`, 
    `here is the result: ${first}, ${second}`, 
    {flag: 'a'}
    )
console.log('Done with this task')
console.log('Starting with next one')