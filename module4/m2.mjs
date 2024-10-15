import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let startTop = Boolean(
  await userInput.question("Moet het patroon bovenaan beginnen true/false)? ")
);
let startLeft = Boolean(
  await userInput.question("Moet het patroon links beginnen true/false)? ")
);
let hoogte = parseFloat(await userInput.question("Geef een hoogte: "));

let star = "*";
let space = " ";

switch ((startTop, startLeft)) {
  case (true, true):
    for (let i = 1; i <= hoogte; i++) {
      let rij = " ";
      for (let j = hoogte; j >= i; j--) {
        rij += space;
      }
      for (let k = 1; k <= i * 2 - 1; k++) {
        rij += star;
      }
      console.log(rij);
    }
  case (true, false):
  case (false, false):
  case (false, true):
}

process.exit();
