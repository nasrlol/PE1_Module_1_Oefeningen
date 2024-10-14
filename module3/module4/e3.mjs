import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let start = parseFloat(await userInput.question("Met welk getal beginnen we?: "));
let end = parseFloat(await userInput.question("Met welk getal eindigen we?: "));

let deler1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen?: "));
let deler2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen?: "));

let deelbaar1 = await userInput.question("moet het getal deelbaar zijn door deler1 (true/false)? "); 
let deelbaar2 = await userInput.question("moet het getal deelbaar zijn door deler2? (true/false)? "); 

if (deelbaar1 == "true" ) {
    deelbaar1 = true
} else if (deelbaar1 == "false"){
    deelbaar1 = false;
}
if (deelbaar2 == "true") {
    deelbaar2 = true
} else if (deelbaar2 == "false"){
    deelbaar2 = false;
}

if (deelbaar1 == true && deelbaar2 == true) {
    for (let i = start; i <= end; i++) {
        if (i % deler1 == 0 && i % deler2 == 0) { 
            console.log(i + " is deelbaar door " + deler1 + " en " + deler2) ;
        }
        else if (i % deler1 == 0) {
            console.log(i + " is deelbaar door " + deler1);
        } 
        else if (i % deler2 == 0) {
            console.log(i + " is deelbaar door " + deler2);
        }
    }
} else if (deelbaar1 == true && deelbaar2 == false) {
    for (let i = start; i <= end; i++){
        if (i % deler1 == 0) {
            console.log(i + " is deelbaar door " + deler1);
        }
    }
}
else if (deelbaar1 == false && deelbaar2 == true) {
    for (let i = start; i <= end; i++) {
        if (i % deler2 == 0) {
            console.log(i + " is deelbaar door " + deler2);
        }
    }
}

process.exit();
