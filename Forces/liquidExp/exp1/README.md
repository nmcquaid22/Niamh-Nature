
# Forces

[See the Code in action](index.html)

In this excercise we create two different object called liquid and mover and create some interaction between them.

Within our mover object we are simply creating a mover class with multiple properties such as velocity, acceleration and location. We also gave the ball mass. Its as simple as adding an instance variable to our mover class except we have to ensure that our values apply to the real world in order for it to work. For example a small metal ball should have more mass than a balloon due to its higher density.

```js
var Mover = function(_x,_y,_vx,_vy,_ax,_ay,_m){
	
    this.location = createVector(_x,_y);
	this.velocity = createVector(_vx,_vy);
	this.accelaration = createVector(_ax,_ay);
	this.mass = _m;



	this.display = function(){
		fill(255,0,0);
		strokeWeight(1);
		ellipse(this.location.x,this.location.y, this.mass*3,this.mass*3);
		
	}
```
The checkedges function is implemented in an if statement in order for the ball to bounce off the edges.

```js
this.checkEdges = function(){
		if(this.location.x < 0 || this.location.x > width){
			this.velocity.x = this.velocity.x * -1;
		}
		if(this.location.y < 0 || this.location.y > height){
			this.velocity.y = this.velocity.y * -1;
		}
	}
```
The force is added to the mover object with the applyForce function.

```js
this.applyForce = function(force){
		var f = p5.Vector.div(force, this.mass);
		this.accelaration.add(f);
```

# liquid.js

Then in the liquid.js file another class is created called liquid. more properties are added here and a new one is coefDrag which will create the liquid simulation.

```js
var Liquid = function (x,y,w,h,co){
	
    this.location = createVector(x,y);
	this.width = w;
	this.height = h;
	this.coefDrag = co;
```
The calculateDrag function is implemented in order to apply a force between the liquid and the ball.

```js
this.calculateDrag = function (m) {
        
        var dragForce = liquid.calculateDrag(ball);
        ball.applyForce(dragForce);
    }
```

Finally in the sketch.js file this all comes together, The variables ball and liquid are declared at the beginning of the file. Then the ball variable is linked to the Mover class and the liquid is linked to the Liquid class.

```js
var ball;
var liquid;

function setup () {
    createCanvas(400,400);
    
    //_x,_y,_vx,_vy,_ax,_ay,_m
    ball = new Mover (200,200,2,2,0,0,5);
    //x,y,w,h,co
    liquid = new Liquid (100,100, 180,50,0);
    }
```
Then we call the draw function, here all the variables along with their properties are rendered to the screen. The if statement is implemented just to show when the ball hits the liquid area.

```js
function draw () {
     
     background(100);
     
     liquid.display();
     
     ball.update();
     ball.display();
     ball.checkEdges();
     
     if (liquid.contains(ball)) {
         console.log("ball hit!");
     }
         
     
 }
```




