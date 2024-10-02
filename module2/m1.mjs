import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Kies een artiest: ");
console.log("1. Red Hot Chili Peppers");
console.log("2. AC/DC");
console.log("3. Netsky");
console.log("4. De Strangers");

let keuze = parseFloat(await userInput.question("Geef je keuze: "))

switch(keuze){
    case 1:
        console.log("Je koos voor Red Hot Chili Pepers");
        console.log("Zij zijn de artisten achter het album X");
        break;
    case 2:
        console.log("Je koos voor AC/DC");
        console.log("Zij zijn de artisten achter het album Y");
        break;
    case 3:
        console.log("Je koos voor Netsky");
        console.log("Zij zijn de artisten achter het album Z");
        break;
    case 4: 
        console.log("Je koos voor De Strangers");
        console.log("Zij zijn de artisten achter het album Q");
        break;

};

process.exit();