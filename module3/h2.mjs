import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 0;
let gem  = 0;
let aantal = 0
-
console.log("Geef een getal en ik zal het gemiddelde berekenen zolang het kleiner is dan 25.")
while (gem < 25) {


    getal = parseFloat(await userInput.question("Geef een getal: "));
    aantal++
    gem += getal;
    gem /= aantal;
    console.log("Het gemiddelde nu is: " + gem)

}

console.log("het uiteindelijke gemiddelde is: " + gem);
process.exit();
