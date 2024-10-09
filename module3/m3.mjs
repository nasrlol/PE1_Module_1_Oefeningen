import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let num = parseFloat(await userInput.question("Geef een getal: "));
let priem = true;
let deler = 2;

while (deler < (num / 2)) {

    if (num % deler == 0) {
        priem = false;

    }


    deler++;


}

if (priem) {
    console.log(num + " is een priem getal.");
} else {
    console.log(num + " is geen priem getal.");
}


process.exit();