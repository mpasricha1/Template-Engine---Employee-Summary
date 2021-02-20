const inquirer = require("inquirer");

const newEmployeePrompt = () => {
	return inquirer.prompt([
		{
			type: "input", 
			name: "name", 
			message: "Enter employee name: ", 
		}, 
		{
			type: "input", 
			name: "email", 
			message: "Enter employee email: "
		},
		{
			type: "list", 
			name: "role", 
			message: "Select employee role",
			choices: ["Manager", "Engineer", "Intern"]
		}
		]);
}

const managerPrompt = () =>{
	return inquirer.prompt([
		{	
			type: "input", 
			name: "officeNumber", 
			message: "Enter manager's office number: "
		}
	])
}; 

const engineerPrompt = () => {
	return inquirer.prompt([
		{
			type:"input", 
			name: "github", 
			message: "Enter engineer's github username: "
		}
	])
};

const internPrompt = () =>{
	return inquirer.prompt([
		{
			type: "input", 
			name: "school", 
			message: "Enter intern's school name: "
		}
	])
};

const addAnotherEmployee = () =>{
	return inquirer.prompt([
		{
			type: "input", 
			name: "answer", 
			message: "Do you have another employee to enter? Y/N"
		}
	])
	
}

module.exports = {newEmployeePrompt, managerPrompt, engineerPrompt, internPrompt, addAnotherEmployee}