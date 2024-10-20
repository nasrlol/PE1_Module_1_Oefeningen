import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let som = 0;

for (let getal = 11; getal <= 55; getal++) {
    if (getal % 3 == 0) {

        som += getal;
    }
}
console.log(som)
process.exit()