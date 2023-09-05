import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const milesDrove = parseFloat(await rl.question('Enter Miles Driven : '));
const gallonsUsed = parseFloat(await rl.question('Enter Gallons Used : '));
const mpg = milesDrove / gallonsUsed;

if(!mpg || mpg <= 0)
    console.log("ERROR");
else
    console.log(`Miles Per Gallon : ${mpg.toFixed(2)}`);
rl.close();
