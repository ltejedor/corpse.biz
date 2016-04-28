var initH, initS, initB, initR, initX, initY;
initS = 130;
initB = 200;
var step = 20;

function setup(){
    var myCanvas = createCanvas(700, 500);
    var canvasContainer = document.getElementById("canvasContainer");
    myCanvas.parent(canvasContainer);
    colorMode(HSB, 100);
    rectMode(CENTER);
    ellipseMode(CENTER);
    background(235);

    initH = random(100);
    initR = random(10, 40);

    initX = random(0, width);
    initY = random(0, height);

    fill(initH, initS, initB);

    //draw the body part lines
    strokeWeight(3);
    stroke(75);
    var initLineYTop = height/2 - 5;
    var initLineYBottom = height/2 + 5;
    for(var i = 0; i < 6; i++){
    	var initX = random(0, width);
    	line(initX, initLineYTop, initX, initLineYBottom);
    }

    stroke(initH, initS, initB);

}


function draw() {
    if (p5controller.clear) {
      p5controller.clear = false;
      background(235);
    }

    if (p5controller.current_shape === "line") {
      if (mouseIsPressed) {
          drawStroke(pmouseX, pmouseY, mouseX, mouseY);
          //noCursor();
      }
    } else if (p5controller.current_shape === "rect") {
      if (mouseIsPressed) {
        colorMode(RGB, 255);
        fill(color('#'+p5controller.current_color));
        stroke(color('#'+p5controller.current_color));
        rect(mouseX, mouseY, p5controller.shape_size, p5controller.shape_size);
      }
    } else if (p5controller.current_shape === "circ") {
    if (mouseIsPressed) {
      colorMode(RGB, 255);
      fill(color('#'+p5controller.current_color));
      stroke(color('#'+p5controller.current_color));
      ellipse(mouseX, mouseY, p5controller.shape_size, p5controller.shape_size);
    }
  }
}

drawStroke = function(xVal, yVal, hVal, rVal){
   colorMode(RGB, 255);
   stroke(color('#'+p5controller.current_color));
   line(xVal, yVal, hVal, rVal);
}
