import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let namen = ["hans", "sofie", "amalia", "hamza", "ilias"];
for (let i = 0; i <= namen.length; i++) {
  console.log(
    `${namen[i]} is uitgenodigd voor de cursus Programming Essentials 1`
  );
}

process.exit();
