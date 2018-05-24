function runGame() {
    var canvas = document.getElementById("gameWindow");
    var ctx = canvas.getContext("2d");
    var lineHeight = 30;
    var introText = [
        "You wake up.",
        "You realise you are not in your own bed.",
        "You sit bolt upright, noticing you are on the ground.",
        "Your eyes are open, but all you see is black."
    ];

    ctx.font = "normal normal 12px Calibri";
    ctx.fillStyle= "#fff";
    ctx.textAlign = "left";

    for (i = 0; i < introText.length+1; i++) {
        console.log("introText index[" + i + "] - " + introText[i])
        ctx.fillText(introText[i],5,lineHeight*introText);
    }
}
