import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let dagen = parseFloat(await userInput.question("Geef het aantal dagen = "));
let uren = parseFloat(await userInput.question("Geef het aantal uren = "));
let min = parseFloat(await userInput.question("Geef het aantal minuten = "));
let sec = parseFloat(await userInput.question("Geef het aantal seconden = "));

let totSec = (dagen * 86400) + (uren * 3600) + (min * 60) + sec;

console.log('Het totale aantal seconden is ' + totSec);

process.exit();