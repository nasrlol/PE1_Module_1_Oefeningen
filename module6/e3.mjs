import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let namen = [];
let user;

while (user != "S") {
  user = await userInput.question("Nodig mensen uit: ");
  if (user != "S"){
     namen.push(user)
  }
}

for (let i = 0; i < namen.length; i++) {
  console.log(`${namen[i]} is uitgenodigd voor de cursus Programming`);
}

process.exit();
