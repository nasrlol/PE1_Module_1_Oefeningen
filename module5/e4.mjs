import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function fact(getal){
   if (getal <= 0) {
      console.error;
   } else {
      let som = 1;
      while( getal >= 1) {
         som *= getal;
         getal--;
      }
      console.log(`Het factorieel is ${som}`);
   }
}

let getal = parseFloat(await userInput.question("Van welk getal wil je het factorieel berekenen?: "));
fact(getal);

process.exit();