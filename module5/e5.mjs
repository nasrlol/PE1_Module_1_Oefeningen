import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let num1 = parseFloat(await userInput.question("Geef een getal: "));
let num2 = parseFloat(await userInput.question("Geef een getal: "));
let num3 = parseFloat(await userInput.question("Geef een getal: "));
let num4 = parseFloat(await userInput.question("Geef een getal: "));
let num5 = parseFloat(await userInput.question("Geef een getal: "));

let actie = await userInput.question(
  "Wil je het max of min vinden van de getallen?: "
);

if (actie == "min") {
  let min = Math.min(num1, num2, num3, num4, num5);
  console.log(`het kleinste getal is ${min}`);
} else if (actie == "max") {
  let max = Math.max(num1, num2, num3, num4, num5);
  console.log(`het grootste getal is ${max}`);
}

process.exit();
