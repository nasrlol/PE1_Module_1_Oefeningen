import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function delers(getal) {
  let som = 0;
  for (let i = 0; i <= getal; i++) {
    if (getal % i == 0 && i != getal) {
      console.log(i);
      som += i;
    }
  }
  console.log(`de som is ${som}`);
}

let num = parseFloat(await userInput.question("Geef een getal: "));
delers(num);
process.exit();
