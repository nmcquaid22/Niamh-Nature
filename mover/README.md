
# Mover

[See the Code in action](index.html)

This sketch depicts many mover objects rotating around a particular point on the screen. The chosen point was the curser and in order to create this we having a Mover class and a sketch which renders our results to the screen.

Within the Mover class we create vectors for location, velocity and accelaration. We Floor the location value to a whole number. We multiply the acceleration by 1.

Within the update we add the acceleration to the velocity and limit the velocity to 10. we also add the velocity to location.


```js
function Mover () {
    
    this.location = createVector(Math.floor(random(width))),
    (Math.floor(random(width)))
   
    this.velocity = createVector(3,6);
    this.acceleration = createVector(-0.1,0.5);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(1);
    
    
    //within the update function add acceleration to velocity.
    this.update = function(){
        
        var mouse = createVector (mouseX, mouseY);
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        
        
        
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.normalize();
    }

```

Then we render the reults to the screen and display our mover class as an ellipse with a random rgb selection(color)

```js
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    
    this.render = function (){
     ellipse(this.location.x, this.location.y, 10,10);
     fill(this.r,this.g,this.b);
     noStroke();
    }
```
Checkedges is implemented to make sure the ball bounces off the canvas walls

```js

  this.checkEdges = function () {
        if (this.location.x < 0 || this.location.x > width){
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y < 0 || this.location.y > width){
            this.velocity.y = this.velocity.y * -1;
        }
        
    }
    
```

Finally within the sketch file the mover objects are stored in an array, There will be 20 different mover objects. This is declared in the setup function.

Then within the draw function all of our properties are rendered to the screen.

```js


var mover=[];


function setup () {
    createCanvas(600,600);
    for (var i = 0; i < 20; i++){
    mover[i] = new Mover();
    }
    
}
 function draw () {
     
     background(100,15);
     for (var i = 0; i < 20; i++){
        mover[i].render();
        mover[i].update();
        mover[i].checkEdges();
    
     }
     
     
 }
 
 ```

