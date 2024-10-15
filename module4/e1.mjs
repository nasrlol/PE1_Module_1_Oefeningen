import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let zijde1 = parseFloat(await userInput.question("Geef een lengte: "));
let zijde2 = parseFloat(await userInput.question("Geef een breedte: "));

let opp = zijde1 * zijde2

console.log("De oppervlakte van de recthoek is: " + opp + "m");

process.exit()