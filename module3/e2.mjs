import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


console.log("De tafel van 5:")
for (let i = 0; i <= 10; i++) {
    console.log(i * 5);
};

process.exit()