import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { start } from "node:repl";
const userInput = readline.createInterface({ input, output });

let startTop = await userInput.question(
  "Moet het patroon bovenaan beginnen true/false)? "
);

let startLeft = await userInput.question(
  "Moet het patroon links beginnen true/false)? "
);

let hoogte = parseFloat(await userInput.question("Geef een hoogte: "));



let space = " ";



for (let i = 1; i <= hoogte; i++) {
  let rij = " ";

  if (startTop == "true" && startLeft == "true") {
    let number = 1
    for (let j = 1; j <= i; j++) {
 
      rij += number - number + i;
    }
    console.log(rij);
  }

  //---------------------------------------------------
  else if (startTop == "false" && startLeft == "true") {
    let number = hoogte + 1;
    for (let j = hoogte; j >= i; j--) {

      rij += number - i;
    }
    console.log(rij);
  }

  //---------------------------------------------------
  else if (startTop == "true" && startLeft == "false") {
    let number = hoogte + 1;
    for (let j = hoogte; j >= i; j--) {
      rij += space;
    }
    for (let k = 1; k <= i; k++) {
      rij += number - number + i;
    }
    console.log(rij);
  }

  //---------------------------------------------------------------------
  else if (startTop == "false" && startLeft == "false") {
    let number = hoogte + 1;
    for (let k = 1; k <= i; k++) {
      rij += space;
    }
    for (let j = hoogte; j >= i; j--) {
      rij += number - i;
    }

    console.log(rij);
  }
}

process.exit();
