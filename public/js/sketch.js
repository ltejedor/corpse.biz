var initH, initS, initB, initR, initX, initY;
initS = 130;
initB = 200;
var step = 20;

function setup(){
    var myCanvas = createCanvas(700, 500);
    var canvasContainer = document.getElementById("canvasContainer");
    myCanvas.parent(canvasContainer);
    colorMode(RGB);
    rectMode(CENTER);
    ellipseMode(CENTER);
    background(235);

    initH = random(100);
    initR = random(10, 40);

    initX = random(0, width);
    initY = random(0, height);


}

function makeConnectors() {
  strokeWeight(3);
  stroke(75);
  var initLineYTop = height/2 - 5;
  var initLineYBottom = height/2 + 5;
  for(var i = 0; i < 6; i++){
    var initX = random(0, width);
    line(initX, initLineYTop, initX, initLineYBottom);
  }
}

function draw() {
    fill(color('#'+p5controller.current_color));
    stroke(color('#'+p5controller.current_color));

    if (p5controller.clear) {
      p5controller.clear = false;
      background(235);
    }

    if (p5controller.current_shape === "line") {
      if (mouseIsPressed) {
          strokeWeight(p5controller.size/10);
          line(pmouseX, pmouseY, mouseX, mouseY);
          //noCursor();
      }
    } else if (p5controller.current_shape === "rect") {
      if (mouseIsPressed) {
        rect(mouseX, mouseY, p5controller.size, p5controller.size);
      }
    } else if (p5controller.current_shape === "circ") {
    if (mouseIsPressed) {
      ellipse(mouseX, mouseY, p5controller.size, p5controller.size);
    }
  }
}
