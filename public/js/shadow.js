
var shadow_p5 = new p5(function(shadow) {
    shadow.setup = function() {
        var myCanvas = shadow.createCanvas(700, 500);
        var canvasContainer = document.getElementById("canvasContainer");
        myCanvas.parent(canvasContainer);
        shadow.colorMode(shadow.RGB);
        shadow.rectMode(shadow.CENTER);
        shadow.ellipseMode(shadow.CENTER);
        shadow.background(235);
    }
    
    shadow.draw = function() {
        shadow.clear();
 
        var currentSize = p5controller.size;
        var currentColor = shadow.color('#' + p5controller.color);
        var currentShape = p5controller.shape;
        shadow.fill(currentColor);
        shadow.stroke(currentColor);
        shadow.strokeWeight(currentSize);
        
        if (p5controller.shape === "line") {
            shadow.line(shadow.pmouseX, shadow.pmouseY, shadow.mouseX, shadow.mouseY);
        } else if (p5controller.shape === "rect") {
            shadow.rect(shadow.mouseX, shadow.mouseY, currentSize, currentSize);
        } else if (p5controller.shape === "circ") {
            shadow.ellipse(shadow.mouseX, shadow.mouseY, currentSize, currentSize);
        }

    }
})