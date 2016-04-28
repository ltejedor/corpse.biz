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
    var pct = 1;
    if (p5controller.total_time > 0) {
      pct = 1 - p5controller.timer/p5controller.total_time;
    }
    // fill(color('#'+p5controller.current_color));
    // stroke(color('#'+p5controller.current_color));
    var last_color = color('#'+p5controller.last_color);
    var current_color = color('#'+p5controller.current_color);
    var r = pct * (last_color.levels[0] - current_color.levels[0]) + current_color.levels[0];
    var g = pct * (last_color.levels[1] - current_color.levels[1]) + current_color.levels[1];
    var b = pct * (last_color.levels[2] - current_color.levels[2]) + current_color.levels[2];
    fill(color(r,g,b));
    stroke(color(r,g,b));
    
    if (p5controller.clear) {
      p5controller.clear = false;
      background(235);
    }

    if (mouseIsPressed) {
      if (p5controller.timer > 0) {
        p5controller.timer -= 1; // or else shapes will continue changing size
      } else if (p5controller.timer === 0) {
        p5controller.timer = p5controller.total_time;
      }

      if (p5controller.current_shape === "line") {
        var transition_weight = 0.1 * pct * (p5controller.size - p5controller.last_size) + p5controller.last_size;
        strokeWeight(transition_weight);
        line(pmouseX, pmouseY, mouseX, mouseY);
      } else if (p5controller.current_shape === "rect") {
        var transition_size = pct * (p5controller.size - p5controller.last_size) + p5controller.last_size;
        rect(mouseX, mouseY, transition_size, transition_size);
      } else if (p5controller.current_shape === "circ") {
        var transition_size = pct * (p5controller.size - p5controller.last_size) + p5controller.last_size;
        ellipse(mouseX, mouseY, transition_size, transition_size);
      }

  }
}
