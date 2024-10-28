import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let prijs = 0;
let prijzen = [];
let aantalPrijzen = parseFloat(
	await userInput.question("Hoeveel prijzen wil je toevoegen? ")
);

let a = 0;
while (a < aantalPrijzen) {
	prijs = parseFloat(await userInput.question("Geef een prijs: "));
	prijzen.push(prijs);
	a++;
}

function korting(x) {
	let metKorting = [];
	for (let i = 0; i <= x.length - 1; i++) {
		metKorting.push(x[i] * 0.85);
	}
	return metKorting;
}

console.log(`${korting(prijzen)}`);
process.exit();
