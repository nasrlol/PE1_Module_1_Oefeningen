import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

for (let i = 0; i <= 20; i++){
    if (i % 2 == 0)
    {
        console.log(i);
    } else 
    {
        continue;
    }
};

process.exit();