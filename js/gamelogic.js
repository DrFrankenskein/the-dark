function runGame() {
  var canvas = document.getElementById("gameWindow");
  var ctx = canvas.getContext("2d");
  var lineHeight = 30;
  var introText = [ "You wake up.",
                    "As you come to, you suddenly realise you are not in your own bed.",
                    "You sit bolt upright, immediately noticing the roughness of the ground you are laying on.",
                    "You take a moment and realise that whilst you eyes are open, there is nothing but darkness."
                  ];
  ctx.font = "normal normal 12px Calibri";
  ctx.fillStyle= "#fff";
  ctx.textAlign = "left";
  
  for (i = 0; i =< introText.length; i++) {
                   ctx.fillText(introText[i],5,lineHeight*introText);
  }
}
