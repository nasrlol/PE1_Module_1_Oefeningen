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

let ster = "*";
let space = " ";

for (let i = 1; i <= hoogte; i++) {
  let rij = " ";
  if (startTop == "true" && startLeft == "true") {
    for (let j = 1; j <= i; j++) {
      rij += ster;
    }
    console.log(rij);
  }

  //---------------------------------------------------
  else if (startTop == "false" && startLeft == "true") {
    for (let j = hoogte; j >= i; j--) {
      rij += ster;
    }
    console.log(rij);
  }

  //---------------------------------------------------
  else if (startTop == "true" && startLeft == "false") {
    for (let j = hoogte; j >= i; j--) {
      rij += space;
    }
    for (let k = 1; k <= i; k++) {
      rij += ster;
    }
    console.log(rij);
  }

  //---------------------------------------------------------------------
  else if (startTop == "false" && startLeft == "false") {
    for (let k = 1; k <= i; k++) {
      rij += space;
    }
    for (let j = hoogte; j >= i; j--) {
      rij += ster;
    }

    console.log(rij);
  }
}

process.exit();

/*if (left == "true" && top == "true") {
  for (let i = 1; i <= hoogte; i++){
    let rij = " ";
    for (let j = 1; j <= i; j++){
      rij += ster;
    }
  } 
} else if (left == "true" && top == "false") {
  for (let i = 1; i <= hoogte; i++){
    let rij = " ";
    for (let j = 1; j <= i; j++){
      rij += ster;
    }
  } 
} else if (left == "false" && top == "true") {
  for (let i = 1; i <= hoogte; i++){
    let rij = " ";
    for (let j = 1; j <= i; j++){
      rij += ster;
    }
  } 
} else if (left == "false" && top == "false") {
  for (let i = 1; i <= hoogte; i++){
    let rij = " ";
    for (let j = 1; j <= i; j++){
      rij += ster;
    }
  } 
}


switch (left,top) {
  case true, true:
    console.log("1");
    break;
  case true, false:
    console.log("2");
    break;
  case false, true:
    console.log("3");
    break;
  case false, false:
    console.log("4");
    break;
}*/
