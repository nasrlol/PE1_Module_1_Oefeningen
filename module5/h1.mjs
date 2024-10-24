import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function perfect(getal) {
  let som = 0;
  for (let i = 0; i <= getal; i++) {
    if (getal % i == 0 && getal != i) {
      som += i;
    }
  }
  if (som == getal) {
    console.log("perfect getal!");
  } else {
    console.log("geef perfect getal!");
  }
}
let num = parseFloat(await userInput.question("Geef een getal: "));
perfect(num);
process.exit();
