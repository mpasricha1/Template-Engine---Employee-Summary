const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const generateProgressBar = require("./utils/generateProgressBar.js");
const prompts = require("./utils/EmployeePrompts");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let availableEmpId = 1 



async function generateIdNumber(){
	const delay = ms => new Promise(res => setTimeout(res, ms)); 

	console.log("")
	console.log("Generating Employee ID"); 
	// generateProgressBar();
	// await delay(1000);

	console.log(`New Employee Id: ${availableEmpId}`); 
	availableEmpId++; 
	
	
	 
}


async function init(){
	try{
		let empInfo = await prompts.newEmployeePrompt(); 
		generateIdNumber();

		console.log("Some more information is needed for this role");

		if(empInfo.role === "Manager"){
			let addInfo = await prompts.managerPrompt();

			empInfo.officeNumber = addInfo.officeNumber;
			console.log(empInfo)
		}else if(empInfo.role === "Engineer"){
			let addInfo = await prompts.engineerPrompt();

			empInfo.github = addInfo.github;
			console.log(empInfo)
		}else{
			let addInfo = await prompts.internPrompt();

			empInfo.school = addInfo.school;
			console.log(empInfo)
		}
		

	}catch(err){
		console.log(err)
	}
}

init();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
