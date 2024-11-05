import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let lijst = [];



let  num = parseFloat(await userInput.questoin('geef een getal');

while (lijst.length <= 3){
   
        lijst.push(num);
}


console.log(lijst);
process.exit();
