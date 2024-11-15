import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parse } from "node:path";
const userInput = readline.createInterface({ input, output });

let getallen = [];
let kleiner_10 = [];

while (true) {
	let getal_input = parseFloat(await userInput.question("voeg een getal toe: "));
	if (getal_input != 45) {
		getallen.push(getal_input);
	} else {
		break;
	}
}

for (let i = 0; i < getallen.length - 1; i++) {
	if (getallen[i] <= 10) {
		kleiner_10.push(getallen[i]);
	}
}

function gemiddelde(lijst) {
	let som = 0;
	for (let i = 0; i < lijst.length - 1; i++) {
          som += lijst[i];
     }
     let lengte = lijst.length
     console.log("de lengte is " + lengte)
     console.log("de som is " + som)
	return som / lengte;
}

console.log("de getallen zijn " + getallen);
console.log("de getallen kleiner dan 10 zijn " + kleiner_10);
console.log("het gemiddelde is " + gemiddelde(kleiner_10));

process.exit();
