const {readFileSync, writeFileSync} = require('fs')

// const fs = require('fs'); fs.readFileSync // both are same


console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

console.log('done with this task')
console.log('starting the new one')



