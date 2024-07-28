
const url = require('url');
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const par = url.parse(adr, true);

console.log(par.host); //returns 'localhost:8080'
console.log(par.pathname); //returns '/default.htm'
console.log(par.search); //returns '?year=2017&month=february'

