
//var position;
//var velocity;


function setup(){
    createCanvas(640,360);
    //position = createVector(100,100);
    //velocity = createVector(2,2);
    
}


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
}