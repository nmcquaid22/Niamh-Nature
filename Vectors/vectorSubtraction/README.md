
# Vector Subtraction

[See the Code in action](sketch19.html)

In this example we are looking at vector subtraction using a mouse's location and a line. A line is drawn between the center of the canvas to the mouse's position.

In order to create this we need the two setup and draw functions.

The setup function will just consist of the canvas.

```js
function setup(){
    createCanvas(640,360);
    
    
}
```
The draw function as we remember is redrawn at every frame.

A vector is created for the mouse x and y position.

A vector is also drawn for the center of the canvas

And finally a line is created with the mouse's x and y values subtracted from the centers x and y values.



```js
function draw(){
    background(51);
    
    
    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(center);
    
    
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(2);
    fill(127);
    line(0, 0, vectorLine.x, vectorLine.y);
    
```
