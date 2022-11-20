//Day 03: Binary Diagnostic

const {readInputFile} = require('../../helpers');

//Part 1
function calculatePowerConsumption(inputFileName){
    const input = readInputFile("./2021/Day 03: Binary Diagnostic", inputFileName).toString().split("\n");

    // if bit is a 0, subtract 1
    // if bit is a 1, add 1
    let resultArray = input[0].split("").map(elem => parseInt(elem));

    for(let binaryString of input){

        const binaryArray = binaryString.split("").map(elem => Number.parseInt(elem));
        
        for(let index = 0; index < binaryArray.length; index++) {

            if(binaryArray[index] === 0){
                resultArray[index] -= 1;
            } else {
                resultArray[index] += 1;
            }
        }
    }
    
    let minEpsilon = 0, maxGamma = 0;

    for(let index = 0; index < resultArray.length; index++){
        const multiplier = Math.pow(2, resultArray.length - index - 1);

        if(resultArray[index] < 0){
            maxGamma += (0 * multiplier);
            minEpsilon += (1 * multiplier);
        } else {
            maxGamma += (1 * multiplier);
            minEpsilon += (0 * multiplier);
        }
    }

    return maxGamma * minEpsilon;
}

console.log(calculatePowerConsumption("./input.txt"));

//Part 2
function calculateLifeSupportRating(inputFileName){
    const input = readInputFile("./2021/Day 03: Binary Diagnostic", inputFileName).toString().split("\n");

    const binaryNums = new Array(input.length);

    for(let binaryNumIdx = 0; binaryNumIdx < input.length; binaryNumIdx++){
       binaryNums[binaryNumIdx] = input[binaryNumIdx].split("").map(elem => parseInt(elem));
    }

    for(let binaryNumIndex in input){
        for(let index in input[binaryNumIndex]){
            binaryNums[binaryNumIndex][index] = input[binaryNumIndex].split("").map(elem => parseInt(elem)); 
        }
    }

    console.log(binaryNums);
}

console.log(calculateLifeSupportRating("./input.txt"));