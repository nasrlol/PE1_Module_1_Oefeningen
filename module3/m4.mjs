import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = 100


for (let i = 0; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz")
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizz")
    } else if (i % 3 == 0) {
        console.log("fizz")
    }
    else if (i % 5 == 0) {
        console.log("buzz");

    }
    else {
        console.log(i)
    }
}

process.exit();