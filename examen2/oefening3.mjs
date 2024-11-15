import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let boodschappenLijst = [];

function voegToe(lijst, item) {
	lijst.push(item);
}
function toon(lijst) {
	for (let i = 0; i < lijst.length; i++) {
		console.log("- " + lijst[i]);
	}
}
async function maakLeeg(lijst) {
	while (lijst.length > 0) {
		lijst.pop();
	}
	console.log("Momenteel is de lijst leeg");
	console.log(lijst);
}

voegToe(boodschappenLijst, "brood");
voegToe(boodschappenLijst, "kip");
voegToe(boodschappenLijst, "fruit");
voegToe(boodschappenLijst, "appel");
voegToe(boodschappenLijst, "wortel");

toon(boodschappenLijst);

maakLeeg(boodschappenLijst);

process.exit();
