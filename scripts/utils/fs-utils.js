const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
const copyDir = require('copy-dir').sync;

var copyDirectory = function copyDirectory(source,dest){
  copyDir(source,dest);
}

var createFile = function createFile(file,contents){
  writeToFile(file,contents);
}

var readTheFile = function readTheFile(source){
    if(exists(source)){
        return readFile(source,'utf8');
    }
    return 'Error! file doesnt exist!';   
}

var writeToFile = function writeToFile(source,contents){
    writeFile(source,contents,'utf8');  
}

module.exports = {
    copyDirectory,
    createFile,
    readTheFile,
    writeToFile
}