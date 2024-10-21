import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log("geef een minimum en een maximum getal om tussen te raden =>");

let min = parseFloat(await userInput.question("minmum: "));
let max = parseFloat(await userInput.question("maximum: "));

let waarde = random(min, max);

let gok = parseFloat(await userInput.question("nu mag je gokken!!! : "));

console.log(`Computer gok: ${waarde}`);

if (waarde == gok) {
  console.log("Je hebt juist gegokt!!!");
} else {
  console.log("FOUT!!!");
}

process.exit();
