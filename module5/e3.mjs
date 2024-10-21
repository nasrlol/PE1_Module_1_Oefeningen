import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function converter(temp, isCelcius) {
  if (isCelcius == true) {
    console.log(`het is ${temp} graden.`);
  } else {
    console.log(`het is ${temp * (9 / 5) + 32} graden fahrenheit.`);
  }
}
let isCelcius =
  (await userInput.question("in celsius? (true/false)?: ")) == "true";
let temp = parseFloat(await userInput.question("Hoeveel graden?: "));

converter(temp, isCelcius);

process.exit();
