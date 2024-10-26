import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let a = [];
let user;
while (user != "S") {
     user = await userInput.question("Voeg iets toe aan de array: ");
     a.push(user);

}
console.log(a);

process.exit();