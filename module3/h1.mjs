import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

const space = " "
let ster = "*";

for (let hoogte = 1; hoogte <= 3; hoogte++) {
    let output = "";
    for (let spatie = 3; spatie != 0; spatie = spatie - 1){
        output += space;
        
    }


    console.log(output);
}
process.exit()