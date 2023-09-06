import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

let menuSelection;
let convertedTemp = 0;
do {
    console.log('-- What would you like to convert to --');
    console.log('C - Fahrenheit to Celsius');
    console.log('F - Celsius to Fahrenheit');
    menuSelection = await rl.question("Enter your selection (C/F) : ");
    console.clear();
} while (menuSelection !== 'F' && menuSelection !== 'C');

if (menuSelection == 'C') {
    const temp = parseFloat(await rl.question("Enter Temperature in Fahrenheit : "));
    convertedTemp = (temp-32)*(5/9);
}
else if (menuSelection == 'F') {
    const temp = parseFloat(await rl.question("Enter Temperature in Celsius : "));
    convertedTemp = (temp*(9/5))+32;
}

if (convertedTemp == NaN) {
    console.log("ERROR");
}
else if (menuSelection == 'C') {
    console.log(`Fahrenheit to Celsius : ${convertedTemp.toFixed(2)}`);
}
else if (menuSelection == 'F') {
    console.log(`Celsius to Fahrenheit : ${convertedTemp.toFixed(2)}`);
}
