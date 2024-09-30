import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

console.log("Kies een artiest: ");
console.log("1. Red Hot Chili Peppers");
console.log("2. AC/DC");
console.log("3. Netsky");
console.log("4. De Strangers");

let keuze = parseFloat(await userInput.question("Geef je keuze: "))

