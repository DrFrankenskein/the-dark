var gameWindow = document.getElementById("gameWindow"),
	dialogWindow = document.getElementById("dialog"),
	c2c = document.getElementById("c2c"),
	intro = false,
	actions = ["fwd","bwd","left","right","look","touch","take","drop","throw","use","ask","tell"],
	btns = document.getElementsByTagName("button"),
	loc = 0;

for (i = 0; i < btns.length; i++) {
	var button = btns[i];
	button.addEventListener("click", createButtons);
}

function createButtons() {
	usrAction(this.value);
}

function usrAction(action) {
	switch (action) {
		case "fwd":
			dispDialog("You get up and step forward...",0);
			loc =+ 1;
			alert(locations[loc]);
			break;
		case "bwd":
			dispDialog("You step back...",0);
			loc =- 1;
			alert(locations[loc]);
			break;
		case "left":
			dispDialog("You try to move...",0);
			break;
		case "right":
			dispDialog("You try to move...",0);
			break;
		case "look":
			dispDialog("You try to look around, but all you see is darkness.",0);
			break;
		case "touch":
			dispDialog("You feel the gritty ground under your fingers.",0);
			break;
		case "take":
			dispDialog("There is nothing here to take.",0);
			break;
		case "drop":
			dispDialog("You are not holding anything.",0);
			break;
		case "throw":
			dispDialog("You are not holding anything.",0);
			break;
		case "use":
			dispDialog("Use what?",0);
			break;
		case "ask":
			dispDialog("You call out, but there is no reply.",0);
			break;
		case "tell":
			dispDialog("You call out, but there is no reply.",0);
			break;		
	}			
}

function slowEach(array,interval,callback) {
    if(!array.length) return;
    var i = 0;
    next();
    function next() {
        if(callback(array[i],i) !== false) {
            if( ++i < array.length ) {
                setTimeout(next,interval);
            }
        }
    }
}
	
function dispDialog(text) {
	dialogWindow.innerHTML = text;
}

function introduction() {
	slowEach(dlgIntro, 4000, function(element,index) {
		dialogWindow.classList.add("animFadeIn");
		dispDialog(element);
	});
	
	ctrlWindow.classList.add("animFadeIn");
}

function startGame() {
	if (intro) {
	introduction();
	}
}

startGame();