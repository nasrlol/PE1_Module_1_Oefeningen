import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let maand = await userInput.question("Van welke maand wil je de hoeveelheid dagen weten? :");

switch (maand) {
	case "januari":
		console.log("31");
		break;
	case "februari":
		console.log("28");
		break;
	case "maart":
		console.log("31");
		break;
	case "april":
		console.log("30");
		break;
	case "mei":
		console.log("31");
		break;
	case "juni":
		console.log("30");
		break;
	case "juli":
		console.log("31");
		break;
	case "augustus":
		console.log("31");
		break;
	case "september":
		console.log("30");
		break;
	case "oktober":
		console.log("31");
		break;
	case "november":
		console.log("30");
		break;
	case "december":
		console.log("31");
		break;
}

process.exit();
