import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function gem(x) {
	let som = 0;
	// het probleem met de code was dat de lengte verkeerd werd gelezen waardoor er een probleem was in het toevoegen van de som want er werd een oonbestaant element toegevoegd, de functie .length telt elk element in javascript zoals een elk andere variabele waardoor het aantal elemenet in een array altijd groter is dan de laatste index waarde dus werd er altijd een onbestaand element aan de array toegevoegd, een element dat undefined was wat heel de bewerking undefined maakt
	for (let i = 0; i <= x.length - 1; i++) {
		som += x[i];
	}
	console.log(som);
	console.log(`het gemiddelde is ${som / x.length}`);
}

let punten = [];

let punt;
let a = 0;

let aantal = parseFloat(
	await userInput.question("Hoeveel getallen wil je toevoegen? ")
);
while (a < aantal) {
	punt = parseFloat(await userInput.question("Voeg de punten toe: "));
	punten.push(punt);
	a++;
}

console.log(`de punten die we gaan berekenen zijn: ${punten}`);
gem(punten);

process.exit();
