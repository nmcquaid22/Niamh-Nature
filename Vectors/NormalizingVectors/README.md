
# Normalizing Vectors

[See the Code in action](sketch22.html)

Normalizing refers to the process of making something standard or “normal”.

We want to keep the vector pointing in the same direction.

Much similar to the previous sketches, were just adding in the normalize function.

the mult function is used to increase the size of the vector line.


```js
function setup(){
    createCanvas(640,360);
 
}


function draw(){
    background(51);
    
    
    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(center);

    vectorLine.normalize();
    vectorLine.mult(50);
```    