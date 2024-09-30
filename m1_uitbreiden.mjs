import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = 10
let getal2 = 14

console.log(getal1 + getal2, getal1 - getal2, getal1 * getal2, getal1 / getal2);

process.exit();