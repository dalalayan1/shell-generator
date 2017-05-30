const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
const copyDir = require('copy-dir').sync;

/**
   * Copies entire content of a directory.
   * @param {string} source path
   * @param {string} destination path
   */
var copyDirectory = function copyDirectory(source,dest){
  copyDir(source,dest);
}

/**
   * Creates a new file.
   * @param {string} file path
   * @param {string} contents to be written
   */
var createFile = function createFile(file,contents){
  writeToFile(file,contents);
}

/**
   * Reads a file.
   * @param {string} file path
   * @return {string} contents of the file
   */
var readTheFile = function readTheFile(source){
    if(exists(source)){
        return readFile(source,'utf8');
    }
    return 'Error! file doesnt exist!';   
}

/**
   * Writes to file.
   * @param {string} file path
   * @param {string} contents to be written
   */
var writeToFile = function writeToFile(source,contents){
    writeFile(source,contents,'utf8');  
}

module.exports = {
    copyDirectory,
    createFile,
    readTheFile,
    writeToFile
}