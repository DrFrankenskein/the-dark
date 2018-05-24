var canvas = document.getElementById("gameWindow");
var ctx = canvas.getContext("2d");
var FPS = 5;
var timer = 0;
var dialog = [
        "You wake up.",
        "You realise you are not in your own bed.",
        "You sit bolt upright, noticing you are on the ground.",
        "Your eyes are open, but all you see is black."
    ];

setInterval(function() {
    update();
    draw();
    console.log("FRAME");
}, 1000/FPS);

function update() {
    timer =+ 1;
    dispDialog(timer);
}

function draw() {
    ctx.font = '14pt Calibri';
    ctx.fillStyle = '#CCC';
    
    //timer
    ctx.fillText(timer, 5, 600);
    
    //button - DIRECTIONS
    ctx.strokeStyle = '#CCC';
    ctx.strokeRect(5, 350, 122, 90);
    ctx.fillText('F', 10, 355);        
    ctx.fillText('B', 10, 355);
    ctx.fillText('L', 5, 355);
    ctx.fillText('R', 15, 355);
        
    //button - LOOK        
    ctx.strokeStyle = '#CCC';
    ctx.strokeRect(132, 350, 122, 40);
    ctx.fillText('BACKWARD', 7, 355);        
    
    //button - TOUCH                
    ctx.strokeStyle = '#CCC';
    ctx.strokeRect(264, 350, 122, 40);        
    ctx.fillText('LEFT', 7, 355);

    //button - PICKUP                
    //button - DROP
    //button - THROW
    //button - USE
    //button - ASK
    //button - TELL
             
}

function dispDialog(frame) {
    var dSpeed = frame/100;
    var lineHeight = 20;
    ctx.font = "normal normal 14pt Calibri";
    ctx.fillStyle= "#fff";
    ctx.textAlign = "left";
    ctx.fillText(dialog[dSpeed], 5, lineHeight * dSpeed);
}
