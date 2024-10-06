import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num = 0
let totaal = 0

do {
    num = parseFloat(await userInput.question("Geef een getal: "));
    if (num > 0){
        totaal += num

    } else {
        break;
    };
} while (num > 0);


console.log("Het totaal van de gegeven getallen is " + totaal);
process.exit();


