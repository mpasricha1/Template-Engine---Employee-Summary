# Template Engine
![badge](https://img.shields.io/badge/License-Unlicense-blue)

## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Question](#questions)

## Description
This is a node cli application that helps build a quick and easy web page for your team. There are three options that can be selected: Manager, Engineer and Intern. Each has their own set of inputs that need to be answered in order to build their card for the web page. The user inputs base information for an employee and then based on what role was selected, is prompted again with additional information. Once all the information is input the template engine builds and outputs the web page which is not ready to view. 
## Installation
This applications has to required modules, jest in order to test and inquirer in order to take arguments from the command line. A package.json file is supplied. Run npm i to install required modules. Then node index to run the application. 
## Usage 
![Walkthrough](/screenshots/screen-capture.gif)

The application is accessed 100% through the command line, except for viewing the web page of course. There are 4 classes: Employee, Manager, Engineer and Intern. Employee is the base class and extends the other three classes. There are two util files as well that handle most of the information on the screen. employPrompts contains all the prompts that are printed on the screen. screenMessages is a util file that contains any other messages not contained within a prompt. 
## License
This application is licensed by Unlicense
## Contributing
Feel free to fork and contribute to this project however you see fit
## Tests
Each class has a series of test cases. Refer to the folder /test/(class) for the test files for each class. 
## Questions
Questions can be sent to the following email markp862@gmail.com 
OR you can visit my github page [mpasricha1](https://github.com/mpasricha1).

## Sample Output

[![Walkthrough](/screenshots/sample_output.png)]

