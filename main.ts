#! /usr/bin/env node

import inquirer from "inquirer";

const answer: {
  Sentence: string;
} = await inquirer.prompt({
  name: "Sentence",
  type: "input",
  message: "Enter the paragraph in which you want to count the words?",
});

const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(words.length);
