import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let jaar = parseFloat(await userInput.question("Geef een jaartal: "));
let februari = 28;

if (jaar % 4 == 0 || jaar % 400 == 0) {
  console.log(
    jaar +
      " is een schrikkel jaar, februari heeft dan " +
      (februari + 1) +
      " dagen"
  );
} else if (jaar % 100 == 0) {
  console.log(
    jaar + " is geen schrikkel jaar, februari heeft dan " + februari + " dagen"
  );
} else {
  console.log(
    jaar + " is geen schrikkel jaar, februari heeft dan " + februari + " dagen"
  );
}

process.exit();
