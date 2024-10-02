import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let resultaat = 0
let num1 = parseFloat(await userInput.question("Geef je eerste getal "));
let num2 = parseFloat(await userInput.question("Geef je tweede getal "));

console.log("Je hebt de opties tussen:");
console.log("optellen");
console.log("aftrekken");
console.log("vermenigvuldigen");
console.log("delen");
let operatie = await userInput.question("Welke bewerking wil je doen? : ");


switch (operatie){
    case "optellen":
        resultaat = num1 + num2
        console.log("de som is " + resultaat);
        break;
    case "aftrekken":
        resultaat = num1 - num2
        console.log("het verschil is " + resultaat);
        break;
    case "vermenigvuldigen":
        resultaat = num1 * num2
        console.log("het product is " + resultaat);
        break;
    case "delen":
        resultaat = num1 / num2
        console.log("het quotïent is " + resultaat);
        break;
};

process.exit()