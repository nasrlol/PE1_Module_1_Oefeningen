import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function aantal(maand) {
  let schrikkel;
  let dagen = 0;
  if (jaar % 4 == 0 || jaar % 400 == 0) {
    schrikkel = true;
  }

  switch (maand) {
    case "januari":
      dagen = 31;
      break;
    case "februari":
      if (schrikkel == true) {
        dagen = 29;
      } else {
        dagen = 28;
      }
      break;
    case "maart":
      dagen = 31;
      break;
    case "april":
      dagen = 30;
      break;
    case "mei":
      dagen = 31;
      break;
    case "juni":
      dagen = 30;
      break;
    case "juli":
      dagen = 31;
      break;
    case "augustus":
      dagen = 31;
      break;
    case "september":
      dagen = 30;
      break;
    case "oktober":
      dagen = 31;
      break;
    case "november":
      dagen = 30;
      break;
    case "december":
      dagen = 31;
      break;
  }
  return dagen;
}
let jaar = parseFloat(await userInput.question("Geef een jaartal: "));
let maand = await userInput.question("geef een maand: ");

console.log(aantal(maand));
process.exit();
