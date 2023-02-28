const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [

  {
    type: "input",
    name: "title",
    message: "What's the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "A brief description about your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process, if any:"
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?"
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project has?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "GPL2.0", "AFFERO3.0", "LESSER2.1", "BSD2" ,"BSD3", "Mozilla2.0", "None"]
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this project?"
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?"
  },
  {
    type: "input",
    name: "username",
    message: "What's your Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What's your email?"
  }

]

// Function to write README file
function writeToFile(fileName, data) {

}

// Function to initialize program
function init() {

}

// Function call to initialize program
init();