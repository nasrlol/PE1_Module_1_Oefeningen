import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parse } from "node:path";
const userInput = readline.createInterface({ input, output });

let rekenmachine = {
	optellen: (a, b) => {
		return a + b;
	},
	aftrekken: (a, b) => {
		return a - b;
	},
	vermenigvuldigen: (a, b) => {
		return a * b;
	},
	delen: (a, b) => {
		return a / b;
	},
};

let operatie = await userInput.question("wat wil je doen? ");
let num1 = parseFloat(await userInput.question("geef een getal => "));
let num2 = parseFloat(await userInput.question("geef nog een getal => "));

switch (operatie) {
	case "optellen":
		console.log(rekenmachine.optellen(num1, num2));
		break;

	case "aftrekken":
		console.log(rekenmachine.aftrekken(num1, num2));

		break;
	case "vermenigvuldigen":
		console.log(rekenmachine.vermenigvuldigen(num1, num2));

		break;
	case "delen":
		console.log(rekenmachine.delen(num1, num2));

		break;
}

process.exit();
