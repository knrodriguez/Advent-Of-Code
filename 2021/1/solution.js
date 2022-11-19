const {readInputFile} = require('../../helpers');

function countTotalIncreases(inputFileName){
    
    return readInputFile("./2021/1", inputFileName)
        .toString()
        .split("\n")
        .map(elem => Number.parseInt(elem))
        .reduce((accumulator, curr, index, arr) => 
            curr > arr[index - 1] ? ++accumulator : accumulator, 0);
}

console.log(countTotalIncreases('./input.txt'));