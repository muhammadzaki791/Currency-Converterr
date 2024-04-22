#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currencysValue:any = {
    USD: 1, //Based currency 
    PKR: 278.45,
    INR: 83.59,
    EUR: 0.94,
    CAD: 1.38,
    TRY: 32.51,
    LKR: 301.24,
    SAR: 3.75,
    QAR: 3.64,
    KWD: 0.31,
    CNY: 7.24,
    AUD: 1.56,
    JPY: 154.6,
    GBP: 0.8,
  };
  let q1 = await inquirer.prompt([
    {
        name:"basecurrency",
        type:"list",
        message:chalk.yellow("Choose Your Base Currency"),
        choices: [
            "USD",  
            "PKR", 
            "INR",
            "EUR", 
            "CAD",
            "TRY",
            "LKR", 
            "SAR",
            "QAR",
            "KWD",
            "CNY",
            "AUD",
            "JPY",
            "GBP",

      ]
    },
    {
        name:"tocurrency",
        type:"list",
        message:chalk.rgb(255, 165, 0)("Choose the currency you'd like to convert to"),
        choices: [
            "USD",  
            "PKR", 
            "INR",
            "EUR", 
            "CAD",
            "TRY",
            "LKR", 
            "SAR",
            "QAR",
            "KWD",
            "CNY",
            "AUD",
            "JPY",
            "GBP",
        ]
    },
    {
        name:"amount",
        type:"input",
        message:chalk.rgb(255, 105, 180)("Enter the amount"),
    }
])
let value1 = currencysValue[q1.basecurrency]
let value2 = currencysValue[q1.tocurrency]
let value3 = q1.amount / value1
if(isNaN(value1) || isNaN(value2) || isNaN(value3)){
    console.log(
      chalk.red.yellowBright.italic("Error: Ensure your input consists of valid numbers for optimal results.")
    );
}



else{
let entervalue = q1.amount
let finalValue = value3 * value2
console.log
  (
   chalk.yellow.bgBlack(`Your  ${q1.amount}  ${q1.basecurrency} is converted to ${finalValue.toFixed(0)} ${q1.tocurrency} successfully`)
  );
}


