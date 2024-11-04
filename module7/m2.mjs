import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let restaurant = {
	naam: "HOME",
	keuken: "MAROKAANS",
	menu: [],
	object_toevoegen: (naam, prijs) => {
		restaurant.menu.push(naam);
		restaurant.menu.push(prijs);
		console.log(restaurant.menu);
	},
};

let count = 0;
while (count <= 3) {
	let gerecht = await userInput.question("voeg een gerecht toe aan het menu => ");
	let prijs_gerecht = parseFloat(await userInput.question("voeg een prijs toe aan het gerecht => "));

	restaurant.object_toevoegen(gerecht, prijs_gerecht);
}

process.exit();
