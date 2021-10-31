const path = require('path');
// console.log(path)
// console.log(path.sep)


const filePath = path.join('/cotent','subfolder', 'content.txt');
console.log(filePath)

const base = path.basename(filePath)
console.log(base);


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'content.txt');
console.log(absolute);
