import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let arr = [];
let y = 1; 
let getallen;
while (y < 10){
    getallen = parseFloat(await userInput.question("voeg een getal toe aan de array: "));
    arr.push(getallen);
    y++;
}


console.log('The unsorted array ' + arr);
for (let x = 0; x < arr.length - 1; x++){
    for (let i = 0; i < arr.length - x - 1; i++){
        let temp;
        if (arr[i] < arr[i+1]){
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp;
        }
    }
}

// display the sorted array
console.log(arr);

process.exit();
