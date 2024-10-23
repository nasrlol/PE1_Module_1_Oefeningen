import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question("Geef een getal: "));

function delers() {
  for (let i = 0; i <= getal; i++) {
   if (i % getal == 0 && i != getal) {
      
      console.log(i);
    }
  }
}

delers(getal);
process.exit();
