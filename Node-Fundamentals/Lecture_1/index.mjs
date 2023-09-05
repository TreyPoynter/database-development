import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const milesDrove = await rl.question('Enter miles driven : ');
const gallonsUsed = await rl.question('Enter gallons used : ');
const mpg = milesDrove / gallonsUsed;

console.log(`Miles Per Gallon : ${mpg}`);
rl.close();