import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aantal = parseFloat(await userInput.question("hoeveel getallen wil je generen? "));
let count = 0;

while (count < aantal) {
	console.log(random(1, 10));
	count++;
}

process.exit();
