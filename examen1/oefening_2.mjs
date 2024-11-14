import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let som = 0;

for (let i = 1; i <= 3; i++) {
	let num = parseFloat(await userInput.question("geef een getal: "));
	if (num < 0) {
		break;
	} else {
		som += num;
	}
}

console.log(som);
process.exit();
