var canvas = document.getElementById("gameWindow");
var ctx = canvas.getContext("2d");
var FPS = 30;

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
    var introText = [
        "You wake up.",
        "You realise you are not in your own bed.",
        "You sit bolt upright, noticing you are on the ground.",
        "Your eyes are open, but all you see is black."
    ];
    ctx.width = 640;
    ctx.height = 480;
    
    ctx.font = "normal normal 12pt Calibri";
    ctx.fillStyle= "#fff";
    ctx.textAlign = "left";

    for (i = 0; i < introText.length; i++) {
        //console.log("introText index[" + i + "] - " + introText[i])
        ctx.fillText(introText[i], 5, lineHeight * i);
    }
}
