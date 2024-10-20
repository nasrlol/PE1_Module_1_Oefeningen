import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let opties = ["steen", "papier", "schaar"];
console.log(opties);

let verloren = "VERLOREN";
let gewonnen = "GEWONNEN";
let gelijk = "GELIJK";

let status = 0;
let score = 0;
while (status <= 3) {
  let computer = opties[Math.floor(Math.random() * opties.length)];
  let gebruiker = await userInput.question("Wat wil je gooien?: ");
  if (computer == "papier") {
    console.log(`computer heeft voor ${computer} gekozen`);
    switch (gebruiker) {
      case "steen":
        console.log(verloren);
        status ++;
        break;
      case "papier":
        console.log(gelijk);
        break;
      case "schaar":
        console.log(gewonnen);
        status ++;
        score++;
        break;
    }
  } else if (computer == "schaar") {
    console.log(`computer heeft voor ${computer} gekozen`);
    switch (gebruiker) {
      case "steen":
        console.log(gewonnen);
        status++;
        score++;
        break;
      case "papier":
        console.log(gelijk);
        break;
      case "schaar":
        console.log(verloren);
        status ++;
        break;
    }
  } else if (computer == "steen") {
    console.log(`computer heeft voor ${computer} gekozen`);
    switch (gebruiker) {
      case "steen":
        console.log(gelijk);

        break;
      case "papier":
        console.log(gewonnen);
        status++;
        score++;
        break;
      case "schaar":
        console.log(verloren);
        status++;
        break;
    }
  }
}
console.log(`je score was ${score}`)
process.exit();
