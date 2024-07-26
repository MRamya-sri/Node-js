// filesystem (fs) module to handle, read file system
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files)