const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const writeFile = fs.writeFileSync;
const defaults = require('lodash/defaultsDeep');
//console.log('stdout',path.join((process.cwd(),'./package.json')))
const pkgjson = path.join(process.cwd(),'package.json');
const deps = require('./packageJson/deps.js');
// exec('node --version', function (err, stdout, stderr) {
//   console.log(stdout)
// });
console.log(pkgjson)
writeFile(pkgjson,defaults({
  "name": "shell-gen",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": deps
}),'utf8');
// if(!exists(pkgjson)){
//   console.log('stdout')
//   writeFile(pkgjson,JSON.stringify(defaults({
//     dependencies: deps
//   }),null,2),'utf8');
// }
