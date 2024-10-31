import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let zee = [[], [], [], [], [], [], [], [], [], []];
for (let i = 0; i < zee.length; i++) {
	for (let j = 0; j < 10; j++) {
		zee[i].push("_");
	}
}

console.log("op welke positie wil je schieten?");

let input_rij = parseFloat(await userInput.question("geef de rij: "));
let input_kolom = parseFloat(await userInput.question("geef de kolom: "));

let juist;
let input_lengte;

do {
	input_lengte = parseFloat(await userInput.question("geef de lengte: "));
	if (input_lengte >= 2 && input_lengte <= 5) {
		juist = true;
	} else if (2 > input_lengte || input_lengte > 5) {
		juist = false;
		console.log("geen passende lengte! \n probeer opnieuw!");
	}
} while (juist == false);

let input_richting = await userInput.question(
	"geef de richting (up - down - left - right): "
);

function error(rij, kolom, lengte, richting) {
	if (
		(richting == "up" && rij - lengte < 0) ||
		(richting == "down" && rij + lengte > 10)
	) {
		return true;
	} else if (
		(richting == "left" && kolom - lengte < 0) ||
		(richting == "right" && kolom + lengte > 10)
	) {
		return true;
	} else {
		return false;
	}
}

function boot_plaats(rij, kolom, lengte, richting, zee) {
	rij -= 1;
	kolom -= 1;
	switch (richting) {
		case "up":
			for (let i = 0; i < lengte; i++) {
				zee[rij - i][kolom] = "B";
			}
			break;
		case "down":
			for (let i = 0; i < lengte; i++) {
				zee[rij + i][kolom] = "B";
			}
			break;
		case "left":
			for (let i = 0; i < lengte; i++) {
				zee[rij][kolom - i] = "B";
			}
			break;
		case "right":
			for (let i = 0; i < lengte; i++) {
				zee[rij][kolom + i] = "B";
			}
			break;
	}
	return zee;
}

let position_error = "het bootje past niet binnen het veld";

if (error(input_rij, input_kolom, input_lengte, input_richting, zee) == true) {
	console.log(position_error);
} else {
	console.log(
		boot_plaats(input_rij, input_kolom, input_lengte, input_richting, zee)
	);
}

process.exit();
