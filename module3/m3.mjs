import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let num = parseFloat(await userInput.question("Geef een getal: "))
let priem 

if (num % 1 == 0 && num % num == 0) {
    for (let i = 0; i <= 10; i++) {
        if (i == 1 && i == num)
        {
            continue;
        }
        else if (num % i == 0){
            priem == false;

        } else {
            priem = true;
        }
    }
}
switch (priem){
    case true:
        console.log(num + " is een priem getal.");
    case false:
        console.log(num + " is geen priem getal.");
}


process.exit();