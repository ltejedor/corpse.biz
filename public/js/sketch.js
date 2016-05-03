var instructions = [];
var sketch_p5 = new p5(function(sketch) {

    sketch.setup = function() {
        var myCanvas = sketch.createCanvas(700, 500);
        var canvasContainer = document.getElementById("canvasContainer");
        myCanvas.parent(canvasContainer);
        sketch.colorMode(sketch.RGB);
        sketch.rectMode(sketch.CENTER);
        sketch.ellipseMode(sketch.CENTER);
        sketch.background(235);
        sketch.makeConnectors();
    }

    sketch.makeConnectors = function() {
      sketch.strokeWeight(3);
      sketch.stroke(75);
      var initLineYTop = sketch.height/2 - 5;
      var initLineYBottom = sketch.height/2 + 5;
      for(var i = 0; i < 6; i++){
        var initX = sketch.random(0, sketch.width);
        sketch.line(initX, initLineYTop, initX, initLineYBottom);
      }
    }

    sketch.draw = function() {
        var currentSize = p5controller.size;
        var currentColor = sketch.color('#' + p5controller.color);
        var currentShape = p5controller.shape;
        sketch.fill(currentColor);
        sketch.stroke(currentColor);
        sketch.strokeWeight(currentSize);
        
        if (p5controller.clear) {
          p5controller.clear = false;
          sketch.background(235);
        }

        if (sketch.mouseIsPressed) {
          if (sketch.isClickOnCanvas(sketch.mouseX, sketch.mouseY)) {
            pushInstructions(sketch.mouseX, sketch.mouseY, sketch.pmousex,sketch.pmouseY);
            if (p5controller.shape === "line") {
                sketch.line(sketch.pmouseX, sketch.pmouseY, sketch.mouseX, sketch.mouseY);
            } else if (p5controller.shape === "rect") {
                sketch.rect(sketch.mouseX, sketch.mouseY, currentSize, currentSize);
            } else if (p5controller.shape === "circ") {
                sketch.ellipse(sketch.mouseX, sketch.mouseY, currentSize, currentSize);
            }
        }
      }
    }
    
    sketch.isClickOnCanvas = function(tempMouseX, tempMouseY) {
        if (tempMouseX < 0 || tempMouseY < 0) {return false;}
        if (tempMouseX > sketch.width || tempMouseY > sketch.height) {return false;} 
        return true;
    }
})


function pushInstructions(tempMouseX, tempMouseY, tempPmouseX, tempPmouseY) {
    instructions.push({
        user: p5controller.user,
        role: p5controller.role,
        type: p5controller.shape,
        color: p5controller.color,
        size: p5controller.size,
        mouseX: tempMouseX,
        mouseY: tempMouseY,
        pmouseX: tempPmouseX,
        pmouseY: tempPmouseY
    })
}