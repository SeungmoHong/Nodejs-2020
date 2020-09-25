const path= require('path');

console.log(__filename);
console.log(__dirname);

let filename = path.join(__dirname, 'tmp', 'textfile.txt');
let dirtyname = path.join(__dirname, 'tmp','..','txt', 'textfile.txt');
console.log(filename);
console.log(dirtyname);