const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const prompts = require("./utils/EmployeePrompts");
const screenPrint = require("./utils/screenMessages.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const empList = [];
let availableEmpId = 1; 

async function init(){
	try{
		let empInfo = await prompts.newEmployeePrompt(); 
		empInfo.id = availableEmpId; 

		screenPrint.printEmpId(availableEmpId);	
		screenPrint.additionalInfo(); 
		availableEmpId++;

		if(empInfo.role === "Manager"){
			let addInfo = await prompts.managerPrompt();
			empInfo.officeNumber = addInfo.officeNumber;

			let manager = new Manager(empInfo.name, empInfo.id, empInfo.email, empInfo.officeNumber);
			empList.push(manager); 

		}else if(empInfo.role === "Engineer"){
			let addInfo = await prompts.engineerPrompt();
			empInfo.github = addInfo.github;

			let engineer = new Engineer(empInfo.name, empInfo.id, empInfo.email, empInfo.github);
			empList.push(engineer); 
		}else{
			let addInfo = await prompts.internPrompt();
			empInfo.school = addInfo.school;

			let intern = new Intern(empInfo.name, empInfo.id, empInfo.email, empInfo.school); 
			empList.push(intern)
		}
		
		let answer = await prompts.addAnotherEmployee(); 
		if(answer.answer.toLowerCase() === 'y' || answer.answer.toLowerCase() === 'yes'){
			init();
		}else{
			let team = render(empList);
			saveHTMLFile(team);
		}
	}catch(err){
		console.log(err)
	}
}

const saveHTMLFile = (file) => {
	fs.writeFile(outputPath, file, (err) =>{
		err ? console.log(err) : console.log("File Created"); 
	});
};

screenPrint.printWelcomeScreen(); 
init();
