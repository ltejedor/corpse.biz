var initH, initS, initB, initR, initX, initY;
initS = 130;
initB = 200;
var step = 20;

function setup(){
    var myCanvas = createCanvas(700, 500);
    var canvasContainer = document.getElementById("canvasContainer");
    myCanvas.parent(canvasContainer);
    colorMode(HSB, 100);
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
    var colorPicker = document.getElementById("ColorPicker");

    if (mouseIsPressed) {
        drawStroke(pmouseX, pmouseY, mouseX, mouseY);
        //noCursor();
    }
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}

drawStroke = function(xVal, yVal, hVal, rVal){
   line(xVal, yVal, hVal, rVal);
}