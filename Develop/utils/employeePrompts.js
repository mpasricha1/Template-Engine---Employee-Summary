const inquirer = require("inquirer");

function newEmployeePrompt() {
	return inquirer.prompt([
		{
			type: "input", 
			name: "name", 
			message: "Enter Employee Name: ", 
		}, 
		{
			type: "input", 
			name: "email", 
			message: "Enter Employee Email: "
		},
		{
			type: "list", 
			name: "role", 
			message: "Select Employee Role",
			choices: ["Manager", "Engineer", "Intern"]
		}
		]);
}

function managerPrompt(){
	return inquirer.prompt([
		{	
			type: "input", 
			name: "officeNumber", 
			message: "Enter Manager's Office Number: "
		}
	])
}; 

function engineerPrompt(){
	return inquirer.prompt([
		{
			type:"input", 
			name: "github", 
			message: "Enter Engineer's Github Username: "
		}
	])
};

function internPrompt(){
	return inquirer.prompt([
		{
			type: "input", 
			name: "school", 
			message: "Enter Intern's School Name: "
		}
	])
};

module.exports = {newEmployeePrompt, managerPrompt, engineerPrompt, internPrompt}