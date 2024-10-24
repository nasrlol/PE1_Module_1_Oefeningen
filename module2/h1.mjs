import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { inflate } from "node:zlib";
const userInput = readline.createInterface({ input, output });

let totaal = 0;
let grootsteGetal = 0;
let kleinsteGetal = Infinity;
let aantalGetallen = parseFloat(await userInput("Hoeveel getallen?: "))

for (let i = 1; i <= aantalGetallen; i++) {
  let num = parseFloat(await userInput.question("Geef een getal: "));
  if (
    num > grootsteGetal // || getal == undefined
  ) {
    grootsteGetal = num;
  }
  if (num < kleinsteGetal // || getal == undefined

  ) {
    kleinsteGetal = num;
  }

  // totaal om het gemiddelde te berekenen
  totaal += num;
}

let gem = totaal / 5;

console.log("Het grootste getal is " + grootsteGetal);
console.log("Het kleinse getal is " + kleinsteGetal);
console.log("Het gemiddelde is " + gem);

process.exit();
