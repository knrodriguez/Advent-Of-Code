// Day 1: Sonar Sweep

const {readInputFile} = require('../../helpers');

// Part 1
function countTotalIncreases(inputFileName){
    
    return readInputFile("./2021/Day 1: Sonar Sweep", inputFileName)
        .toString()
        .split("\n")
        .map(elem => Number.parseInt(elem))
        .reduce((accumulator, curr, index, arr) => 
            curr > arr[index - 1] ? ++accumulator : accumulator, 0);
}

console.log("Solution to Part 1: " + countTotalIncreases('./input.txt'));

// Part 2
function countSumOfThreeIncreases(inputFileName){
     
    return readInputFile("./2021/Day 1: Sonar Sweep", inputFileName)
        .toString()
        .split("\n")
        .map(elem => Number.parseInt(elem))
        .reduce(
            (accumulator, curr, index, arr) => {
            
                if(index === 0 || index >= (arr.length - 2)){
                    return accumulator;
                }

                const prevSumOfThree = arr[index - 1] + curr + arr[index + 1];
                const currSumOfThree = curr + arr[index + 1] + arr[index + 2];

                if(currSumOfThree > prevSumOfThree) {
                    return ++accumulator;
                }

                return accumulator;
            }, 0);
}

console.log("Solution to Part 2: " + countSumOfThreeIncreases("./input.txt"));