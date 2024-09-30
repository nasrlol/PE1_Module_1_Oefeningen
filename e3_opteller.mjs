// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in

let num1 = parseFloat(await userInput.question("Geef het eerste getal "));
let num2 = parseFloat(await userInput.question("Geef het tweede getal "));

console.log(num1 + num2);



process.exit();
