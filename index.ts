#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


  console.log(
    chalk.italic.bold.green(
      "=========================== QUIZ START ==============================="
    )
  );
  
let questions =  await inquirer.prompt([
    {
        name:"Name",
        type:"input",
        message:"Enter your Full Name:"
    },
    {
        name:"q1",
        type:"list",
        message:"1-What are the three main 'simple types' in TypeScript?",
        choices:[
            "A. Object String Number",
            "B. Object Array Symbol",
            "C. Array Object Boolean",     
            "D. Boolean String Number"]  //correct
    },
    {
        name:"q2",
        type:"list",
        message:"2-The TypeScript compiler can be configured with which file?",
        choices:[
            "A. Package.json",   
            "B. Tscofig.json"]  //correct
    },
    {
        name:"q3",
        type:"list",
        message:"3-What are the two types of enums?",
        choices:[
            "A. String & Number", //correct
            "B. Number & number array",  
            "C. Number & Boolean",
            "D. String & Boolean"]
    },
    {
        name:"q4",
        type:"list",
        message:"4-Interfaces are similar to type aliases, but only for object types?",
        choices:[
            "A. True",     //correct
            "B. False"]   
    },
    {
        name:"q5",
        type:"list",
        message:"5-Type Aliases are mostly used with ______.?",
        choices:[
            "A. Number", 
            "B. String",   //correct
            "C. Boolean"]
    }    
])

let result = 0

switch (questions.q1) {
    case "D. Boolean String Number":
        console.log(chalk.green("Q1 - Correct"))
        ++result;
        break;
      default:
        console.log(chalk.red("Q1 - Incorrect!")) }

switch (questions.q2) {
    case "B. Tscofig.json":
        console.log(chalk.green("Q2 - Correct"))
        ++result;
        break;
      default:
        console.log(chalk.red("Q2 - Incorrect!")) }

switch (questions.q3) {
    case "A. String & Number":
        console.log(chalk.green("Q3 - Correct"))
        ++result;
        break;
      default:
        console.log(chalk.red("Q3 - Incorrect!")) }

switch (questions.q4) {
    case "A. True":
        console.log(chalk.green("Q4 - Correct"))
        ++result;
        break;
      default:
        console.log(chalk.red("Q4 - Incorrect!")) }

switch (questions.q5) {
    case "B. String":
        console.log(chalk.green("Q5 - Correct"))
        ++result;
        break;
      default:
        console.log(chalk.red("Q5 - Incorrect!")) }


console.log(chalk.bold.green("\n                   =====   RESULT   ======"))

console.log(
    chalk.italic.blue(
      `\n\t ====== ${chalk.bold.bgYellowBright(
        questions.Name
      )}: Score ${chalk.bold.bgYellowBright(result)} out of ${chalk.bold.bgYellowBright(
        5
      )} =======`
    )
  );