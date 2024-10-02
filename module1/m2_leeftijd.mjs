import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = 2005 + " "
let toekomstJaar = 2044 + " "

let leeftijdToekomst1 = toekomstJaar - geboorteJaar + " "
let leeftijdToekomst2 = (toekomstJaar - geboorteJaar) - 1 + " ";


console.log('In ' + toekomstJaar + 'zal ik ' + leeftijdToekomst2 + 'of ' + leeftijdToekomst1 + 'zijn ');

process.exit();