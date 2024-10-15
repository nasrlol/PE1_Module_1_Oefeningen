import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question("Met welk getal beginnen we?: "));
let end = parseFloat(await userInput.question("Met welk getal eindigen we?: "));
let deler1 = parseFloat(await userInput.question("Wat is het eerste getal waarop ew testen?: "));
let deler2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen?: "));

for (let i = start; i <= end; i++) {
    if (i % deler1 == 0) {
        console.log(i + " is deelbaar door " + deler1)
    } else if (i % deler2 == 0) {
        console.log(i + " is deelbaar door " + deler2)
    }
}

process.exit()
