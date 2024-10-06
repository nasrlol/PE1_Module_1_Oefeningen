import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let ster = "*";

for (let hoogte = 1; hoogte <= 4; hoogte++) {
    let starStr = "";
    for (let i = 1; i <= hoogte; i++) {
        starStr += ster; 
    }
    console.log(starStr);
}

process.exit();