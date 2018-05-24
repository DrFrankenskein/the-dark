var canvas = document.getElementById("gameWindow");
var ctx = canvas.getContext("2d");
var FPS = 15;
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
    //buttons
    ctx.fillText('FORWARD', 345, 415);
    ctx.strokeStyle = '#CCC';
    ctx.strokeRect(5, 350, 122, 40);
}

function dispDialog(frame) {
    var dSpeed = frame/100;
    var lineHeight = 20;
    ctx.font = "normal normal 14pt Calibri";
    ctx.fillStyle= "#fff";
    ctx.textAlign = "left";
    ctx.fillText(dialog[dspeed], 5, lineHeight * dSpeed);
}
