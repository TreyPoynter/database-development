import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

let maritalStatus = '';

do {
    maritalStatus = await rl.question("Enter Marital Status (Single/Married) : ");
    maritalStatus = maritalStatus.toLowerCase();
} while (maritalStatus !== 'single' && maritalStatus !== 'married');

const taxableIncome = parseFloat(await rl.question("Enter Taxable Income for 2022 : "));
let taxesOwed = 0;

if (maritalStatus === 'single') {
    if (taxableIncome >= 0 && taxableIncome <= 11000)  // 10%
        taxesOwed = taxableIncome * 0.10;
    else if (taxableIncome >= 11001 && taxableIncome <= 44725)  // 12%
        taxesOwed = 1100 + (0.12 * (taxableIncome-11000));
    else if (taxableIncome >= 44726 && taxableIncome <= 95375)  // 22%
        taxesOwed = 5147 + (0.22 * (taxableIncome-44725));
    else if (taxableIncome >= 95376 && taxableIncome <= 182100)  // 24%
        taxesOwed = 16290 + (0.24 * (taxableIncome-95375));
    else if (taxableIncome >= 182101 && taxableIncome <= 231250)  // 32%
        taxesOwed = 37104 + (0.32 * (taxableIncome-182100));
    else if (taxableIncome >= 231251 && taxableIncome <= 578125)  // 35%
        taxesOwed = 52832 + (0.35 * (taxableIncome-231250));
    else if (taxableIncome >= 578126)  // 37%
        taxesOwed = 174238.25 + (0.37 * (taxableIncome-578125));
} else {
    if (taxableIncome >= 0 && taxableIncome <= 22000)  // 10%
        taxesOwed = taxableIncome * 0.10;
    else if (taxableIncome >= 22001 && taxableIncome <= 89450)  // 12%
        taxesOwed = 2200 + (0.12 * (taxableIncome-2200));
    else if (taxableIncome >= 89451 && taxableIncome <= 190750)  // 22%
        taxesOwed = 10294 + (0.22 * (taxableIncome-89450));
    else if (taxableIncome >= 190751 && taxableIncome <= 364200)  // 24%
        taxesOwed = 32580 + (0.24 * (taxableIncome-190750));
    else if (taxableIncome >= 364201 && taxableIncome <= 462500)  // 32%
        taxesOwed = 74208 + (0.32 * (taxableIncome-364200));
    else if (taxableIncome >= 462501 && taxableIncome <= 693750)  // 35%
        taxesOwed = 105664 + (0.35 * (taxableIncome-462500));
    else if (taxableIncome >= 693751)  // 37%
        taxesOwed = 186601.50 + (0.37 * (taxableIncome-693750));
}

if (!taxesOwed || taxesOwed <= 0) {
    console.error("ERROR");
}
else {
    console.log(`Income Tax : $${Math.ceil(taxesOwed)}`);
}
