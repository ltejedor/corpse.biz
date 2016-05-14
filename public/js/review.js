var sketch_i = 0;
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
    
    sketch.outputImage = function() {
        p5controller.save=false;
        sketch.saveCanvas('woah', 'png');
    };

    sketch.replay = function(currentInstruction) {
        var currentSize = currentInstruction.size;
        var currentColor = sketch.color('#' + currentInstruction.color);
        var currentType = currentInstruction.type;
        var xclick = currentInstruction.mouseX;
        var yclick = currentInstruction.mouseY;
        var pxclick = currentInstruction.pmouseX;
        var pyclick = currentInstruction.pmouseY
        sketch.fill(currentColor);
        sketch.stroke(currentColor);
        sketch.strokeWeight(currentSize);
        
        if (currentType === "line") {
            sketch.line(pxclick, pyclick, xclick, yclick);
        } else if (currentType === "rect") {
            sketch.rect(xclick, yclick, currentSize, currentSize);
        } else if (currentType === "circ") {
            sketch.ellipse(xclick, yclick, currentSize, currentSize);
        } else if (currentType === "clear") {
            sketch.background(235);
        }
    }
    
    sketch.draw = function() {
        var currentInstruction = data[sketch_i];
        sketch_i += 1;
        if (currentInstruction) {
            sketch.replay(currentInstruction);
        }
        if (p5controller.save) {
            sketch.outputImage();
        }
    } 
    
})
