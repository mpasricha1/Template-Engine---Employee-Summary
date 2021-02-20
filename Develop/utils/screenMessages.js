const generateProgressBar = require("./generateProgressBar.js");

function printWelcomeScreen(){
	console.log("")
	console.log("***********************************************");
	console.log("                 Welcome               	    ");
	console.log("  Lets gather some information about the team  ");
	console.log("											    "); 
	console.log("***********************************************")
};

function additionalInfo(){
	console.log("")
	console.log("Some more information is needed for this role");
};

function printEmpId(availableEmpId){
	console.log("")
	console.log(`New Employee Id: ${availableEmpId}`); 
}

function generateId(){
	console.log("Generating Employee ID"); 
	generateProgressBar();
}

module.exports = {printWelcomeScreen, additionalInfo, generateId, printEmpId}