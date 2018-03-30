
# Vectors

Ball with no vectors in one direction

[See the Code in action](sketch15.html)

In this sketch we are creating an object and teaching it to move in one direction using speed. The speed has been set at 2.
```js
var x = 320;
var y = 180;

function setup(){
    createCanvas(640,360);
}

function draw(){
    background(51);
    var xspeed = 2;
```
In the next line we will move the ball according to its speed.

```js
x = x + xspeed;

```
Then we want to display the ball at the x position. 

```js
   
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, 180, 48, 48);
}
```


