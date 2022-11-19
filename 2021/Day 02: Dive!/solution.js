//Day 02: Dive!

const {readInputFile} = require('../../helpers');

//Part 1
function calculateHorizontalPositionAndDepth(inputFileName){
    
    //cleaner looking solution to read and understand
    const input = readInputFile("./2021/Day 02: Dive!", inputFileName).toString().split("\n");

    let horizontalPosition = 0, depth = 0;

    for(let command of input){
        let [direction, amountAsString] = command.split(" ");
        
        const amount = Number.parseInt(amountAsString);

        switch(direction) {
            case "forward": 
                horizontalPosition += amount; 
                break;
            case "up": 
                depth -= amount;
                break;
            case "down":
                depth += amount;
                break;
            default:
                console.log("Unknown command!");
        }
    }

    return horizontalPosition * depth;
}

// alternate solution, less straightforward
// function calculateHorizontalPositionAndDepth(inputFileName){
//     return readInputFile("./2021/Day 02: Dive!", inputFileName)
//         .toString()
//         .split("\n")
//         .reduce((accumulator, curr) => {

//             const horizontalPositionIdx = 0, depthIdx = 1;
            
//             const [direction, amountAsString] = curr.split(" ");

//             let amount = Number.parseInt(amountAsString);

//             if(direction === "forward"){
//                 accumulator[horizontalPositionIdx] += amount;
//                 return accumulator;
//             }

//             if(direction === "up"){
//                 amount *= -1;
//             }

//             accumulator[depthIdx] += amount;
//             return accumulator;

//         },[0,0])
//         .reduce(
//             (product, curr, index, arr) => 
//                 index !== 0 ? curr * arr[index - 1] : product, 0);
// }

console.log(calculateHorizontalPositionAndDepth("./input.txt"));


//Part 2
function calculateLocationWithAim(inputFileName){
    const input = readInputFile("./2021/Day 02: Dive!", inputFileName).toString().split("\n");

    let horizontalPosition = 0, depth = 0, aim = 0;

    for(let command of input){
        let [direction, amountAsString] = command.split(" ");
        
        const amount = Number.parseInt(amountAsString);

        switch(direction) {
            case "forward": 
                horizontalPosition += amount;
                depth += (aim * amount); 
                break;
            case "up": 
                aim -= amount;
                break;
            case "down":
                aim += amount;
                break;
            default:
                console.log("Unknown command!");
        }
    }

    return horizontalPosition * depth;
}

console.log(calculateLocationWithAim("./input.txt"));