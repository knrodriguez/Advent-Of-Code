const fs = require('fs');
const path = require('path');

function readInputFile(relativeFilePath, inputFileName){
    return fs.readFileSync(path.resolve(__dirname, relativeFilePath, inputFileName));
}

module.exports = {
    readInputFile
};