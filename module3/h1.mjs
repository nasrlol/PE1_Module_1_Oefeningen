import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let ster = "*";
let rij = 3


for (let i = 1; i <= rij; i++) {
    let output = " ";

    for (let j = 1; j <= rij; j++) {
        output += space;

    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        output += ster;

    }
    console.log(output)
}

process.exit()