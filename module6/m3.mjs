import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let namen = ["jonas", "thomas", "mehdi", "sanda", "lotte"];
console.log(namen);
let naam = await userInput.question(
	"Van welke naam wil je de locatie weten?: "
);

function index(namen, naam) {
	let gevonden = false;
	for (let i = 0; i <= namen.length; i++) {
		if (namen[i] == naam) {
			gevonden = true;
			return i + 1;
		} else {
			gevonden = false;
		}
	}
	if (gevonden == false) {
		return -1;
	}
}

console.log(index(namen, naam));
process.exit();
