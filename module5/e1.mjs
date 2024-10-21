import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function aangenaam(naam) {
  console.log(`Dag ${naam}!!`);
}

let naam = await userInput.question("Hoe heet je? ");

aangenaam(naam);
process.exit();
