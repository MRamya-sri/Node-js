const os = require('os');
//returns total memory
var totalMemory = os.totalmem();
//returns free memory
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);

console.log(`Free Memory: ${freeMemory}`)
