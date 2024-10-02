import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let punten = 0

let op1 = "brussel"
let op2 = "parijs"
let op3 = "amsterdam"
let op4 = "madrid"
let op5 = "berlijn"

console.log();
let a1 = await userInput.question("Wat is de hoofdstad van België? : ");
if (a1 == op1) {
    punten += 1
    console.log("Je antwoord is juist!")
}else if (a1 != op1 ) {
    punten -= 1;
    console.log("Je antwoord is Fout!")
};

let a2 = await userInput.question("Wat is de hoofdstad van Frankrijk? : ");
if (a2 == op2) {
    console.log("Je antwoord is juist!")
    punten += 1
}else if (a2 != op2 ) {
    punten -= 1;
    console.log("Je antwoord is fout!")

};

let a3 = await userInput.question("Wat is de hoofdstad van Nederland? : ");
if (a3 == op3) {
    console.log("Je antwoord is juist!")
    punten += 1
}else if (a3 != op3 ) {
    punten -= 1;
    console.log("Je antwoord is fout!")
};

let a4 = await userInput.question("Wat is de hoofdstad van Spanje? : ");
if (a4 == op4) {
    punten += 1
    console.log("Je antwoord is juist!")

}else if (a4 != op4 ) {
    console.log("Je antwoord is fout!")
    punten -= 1;
};

let a5 = await userInput.question("Wat is de hoofdstad van Duitsland? : ");
if (a5 == op5) {
    console.log("Je antwoord is juist!")
    punten += 1
}else if (a5 != op5 ) {
    console.log("Je antwoord is fout!")
    punten -= 1;
};

console.log("Je hebt een score van " + punten + "/5 gehaald." )

process.exit()