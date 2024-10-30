import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

// h3 => als uitbreiding op h2
// functie om boten ("*") te plaatsten
// lengte van de boot (2-5)
// richting (up - down - left - right)
// controleer of er genoeg plaats is
// plaats in de array je boot met B


// de 2d array
// het zee veld 
// 10 x 10
let zee = [[], [], [], [], [], [], [], [], [], []];
for (let i = 0; i < zee.length - 1; i++) {
	for (let j = 0; j < 10; j++) {
		zee[i].push("");
	}
}


let x, y;
console.log("op welke positie wil je schieten?");

x = parseFloat(await userInput.question("rij"));
y = parseFloat(await userInput.question("kolom"));

zee[x][y] = "*";

console.log(zee);

process.exit();
