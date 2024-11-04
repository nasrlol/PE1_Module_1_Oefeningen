import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let autogarage = {
	naam: "EL MORABIT",
	autos: [
		{ merk: "COROLLA", bouw: 1966 },
		{ merk: "MUSTANG", bouw: 1964 },
		{ merk: "GOLF", bouw: 1974 },
	],
	vervangAuto: async function () {
		console.log(this.autos);
		let i = await userInput.question("Welke auto wil je vervangen => ");
		switch (i) {
			case "COROLLA":
				i = 0;
				break;
			case "MUSTANG":
				i = 1;
				break;
			case "GOLF":
				i = 2;
				break;
		}
		this.autos[i].bouw += 30;
		console.log(`De auto is vervangen door een auto van het jaar ${this.autos[i].bouw}`);
		console.log(this.autos);
	},
};

console.log(`WELKOM BIJ GARAGE ${autogarage.naam}`);
await autogarage.vervangAuto();

process.exit();
