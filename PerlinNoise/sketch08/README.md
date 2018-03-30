# One Dimensional Noise


[See the Code in action](sketch08.html)

In this sketch we are working with one dimentional noise. One dimentional noise as a linear sequence of values.




The draw function draw a rect with opacity of 15% at each frame every time the walker display and step function is called.

```js
function draw() {
  fill(0,15);
    rect(0,0, width, height);
    walker.step();
    walker.render();
}
```

x.Off is random number between 0 and 1000.
```js
function Walker()  {
    this.x =width/2;
    this.xOff =random(1000);
    
    this.render = function() {
        stroke(0);
        fill(255,45,0,50);
        ellipse(this.x,500,40,40);
    }
    
    this.step = function() {
      
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        this.xOff += 0.005;
    }

}
```

The mapping function takes in a total of 5 arguments: First of all the value we want to map and in this case it xOff. Then we have to give it a max and a min value, followed by the desired range.

