const cliProgress = require('cli-progress');

const generateProgressBar = () =>{
	const bar1 = new cliProgress.SingleBar({stopOnComplete: true}, cliProgress.Presets.rect);
	bar1.start(100,0);
	
	const timer = setInterval(() =>{
		bar1.increment();

		if(bar1.isActive === false){
			clearInterval(timer);
		}
	},5)
	return true;
}

module.exports = generateProgressBar;