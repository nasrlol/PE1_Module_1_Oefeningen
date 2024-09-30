import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maximum = 20
let minimum = 10

let num = parseFloat(await userInput.question("Geef een getal en ik zal bepalen of het tussen het maximum en minimum zit: "));

if (num < maximum && num > minimum ) {

    console.log("het getal ligt tussen " + maximum + " en het " + minimum);

} else {

    console.log("het getal ligt niet tussen " + maximum + " en het " + minimum);

};

process.exit();