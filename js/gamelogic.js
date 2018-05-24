var canvas = document.getElementById("gameWindow");
var ctx = canvas.getContext("2d");
var FPS = 30;
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
    dispDialog();
}

function draw() {
    ctx.strokeRect(5, 350, 122, 40);
    ctx.font = '10pt Calibri';
    ctx.fillStyle = '#CCC';
    ctx.fillText('Start', 345, 415);
   
}

function dispDialog() {
    var lineHeight = 10;  
    ctx.font = "normal normal 12pt Calibri";
    ctx.fillStyle= "#fff";
    ctx.textAlign = "left";

    for (i = 0; i < dialog.length; i++) {
        ctx.fillText(dialog[i], 5, lineHeight * i);
    }
}
