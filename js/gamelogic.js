var gameEngine = function(canvas, FPS) {
  this.FPS = 1000 / FPS;
  this.canvas = canvas;
  this.context2D = canvas.getContext("2d");
  this.gameObjects = [];
  this.setupCanvas();
}
