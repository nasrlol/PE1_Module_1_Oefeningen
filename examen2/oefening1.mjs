import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });


/*

Maak een script dat aan de gebruiker vraagt hoeveel random getallen hij wil genereren (tussen 1 en 10).
Toon op het einde hoeveel van deze getallen even zijn.

Voorbeelduitvoer: 

Hoeveel willekeurige getallen wil je genereren? 7

De gegenereerde willekeurige getallen zijn: 3, 1, 8, 2, 9, 6, 10

Van de gegenereerde getallen zijn er 4 even.
*/


function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aantal = parseFloat(await userInput.question("hoeveel getallen wil je generen? "));
let getallen = []
let even = []

for (let i = 0; i < aantal; i++){

	getallen.push(random(0,10)); 
}
for (let i = 0; i < getallen.length - 1; i++){
	if (getallen[i] % 2 == 0) {
		even.push(getallen[i])		
	} 
}

console.log("de willekeurige getallen zijn : " + getallen);
console.log("de even getallen zijn : " + even);

process.exit();
