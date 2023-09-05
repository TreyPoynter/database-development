import * as readline from 'node:readline/promises';
import {exit, stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

let tableSize = 0;

do {
    tableSize = await rl.question("How big do you want the table to be (1-12) : ");
} while (tableSize < 0 || tableSize > 12);

if (isNaN(tableSize)) {
    console.log("ERROR");
    exit();
}

for (let r = 1; r <= tableSize; r++) {
    for (let c = 1; c <= tableSize; c++) {
        process.stdout.write(`${(r*c).toFixed(0).padStart(4, ' ')}`);
    }
    console.log('');
}