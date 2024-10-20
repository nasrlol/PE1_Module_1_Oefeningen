import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let opties = ['steen', 'papier', 'schaar'];
console.log(opties);

let verloren = "VERLOREN";
let gewonnen = "GEWONNEN";
let gelijk = "GELIJK";

let status = false;
while (status != true) {
  let computer = opties[Math.floor(Math.random()*opties.length)];
  let gebruiker = await userInput.question("Wat wil je gooien:? ");
  if (computer == "papier") {
    console.log(`computer heeft voor ${computer} gekozen`);
    switch (gebruiker) {
      case "steen":
        console.log(verloren);
        break;
      case "papier":
        console.log(gelijk);
        break;
      case "schaar":
        console.log(gewonnen);
        status = true;
        break;
    }
  } else if (computer == "schaar") {
    console.log(`computer heeft voor ${computer} gekozen`);
    switch (gebruiker) {
      case "steen":
        console.log(gewonnen);
        status = true;
        break;
      case "papier":
        console.log(gelijk);
        break;
      case "schaar":
        console.log(verloren);
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
        status = true;
        break;
      case "schaar":
        console.log(verloren);
        break;
    }
  }
}

process.exit();
