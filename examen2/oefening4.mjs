import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let options = ["krant", "voeding", "medicijne", "restaurant", "overige"];
console.log(options);

let type = await userInput.question("geef het type artikel : ");
let prijs = parseFloat(await userInput.question("geef de prijs van het type : "));

function totaal(type, prijs) {
	switch (type) {
		case "krant":
			return prijs + prijs * (0 / 100);
			break;
		case "voeding":
			return prijs + prijs * (6 / 100);

		case "medicijne":
			return prijs + prijs * (6 / 100);

		case "restaurant":
			return prijs + prijs * (12 / 100);

		case "overige":
			return prijs + prijs * (21 / 100);
	}
}
console.log(totaal(type, prijs));
process.exit();
