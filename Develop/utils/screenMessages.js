const generateProgressBar = require("./generateProgressBar.js");

const printWelcomeScreen = () => {
	console.log("")
	console.log("***********************************************");
	console.log("                 Welcome               	    ");
	console.log("  Lets gather some information about the team  ");
	console.log("											    "); 
	console.log("***********************************************")
};

const additionalInfo = () =>{
	console.log("")
	console.log("Some more information is needed for this role");
};

const printEmpId = (availableEmpId) =>{
	console.log("")
	console.log(`New Employee Id: ${availableEmpId}`); 
}

const generateId = () =>{
	console.log("Generating Employee ID"); 
	generateProgressBar();
}

module.exports = {printWelcomeScreen, additionalInfo, generateId, printEmpId}