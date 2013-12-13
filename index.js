//process.on('uncaughtException', function(err) {
//	console.log('Caught exception: ' + err);
//	showResult();
//});


require(['utils', 'recorder', 'classCivilization'], function (utils, recorder, libClass) {
	const classCiv	= libClass.Civilization;
	const classSoc	= libClass.Society;

	var society = new classSoc();

	function showResult () {
		processStep = 1;
		console.log('>> ');
	}

	var evoluteEra = 200, stepPerEra = 20;
	var developEra = evoluteEra;
	var era = 0;
	function develop () {
		var i, step = stepPerEra;
		for (i = 0; i < step; i += 1) {
			society.develop(era);
		}
		era += 1;
		society.draw(era);
	
		developEra -= 1;
		if (developEra > 0) {
			setTimeout(develop, 0);
		}
		else {
			showResult();
		}
	}

	function setVar (command) {
		command = command.split('=');
		command = command.map(function (item) {return item.trim()});
		if (command[0] === 'era') {
			recorder.setEraLength(parseInt(command[1]));
			console.log('Set Done.');
		}
		else {
			console.log('Missing Command: ' + command[0] + " = " + command[1]);
		}
	}

	var processStep = 0;

	develop();
	
	dead = recorder.showDead;
	hasNew = function () {recorder.show(0);};
	die = function () {recorder.show(1);};
	live = function () {recorder.show(2);};
	civ = function () {recorder.show(3);};
	exp = function () {recorder.show(4);};
	found = function () {recorder.show(5);};
	ally = function () {recorder.show(6);};
	atck = function () {recorder.show(7);};
	help = function () {recorder.show(8);};
	show = function () {recorder.show(9);};
	war = function () {recorder.show(10);};
	warP = function () {recorder.show(11);};
	hlp = function () {recorder.show(12);};
	hlpP = function () {recorder.show(13);};
	restart = function() {
			era = 0;
			developEra = evoluteEra;
			society = new classSoc();
			recorder.reset();
			develop();
	};
	set = setVar;
});


