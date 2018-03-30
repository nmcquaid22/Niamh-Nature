# Normal/Gaussian Distribution


[See the Code in action](sketch06.html)

In this exercise we explore the gaussian(normal) distribution of data.

```js
function setup() {
    createCanvas(640, 360);
    background(127);
}

function draw() {
    var xloc = randomGaussian();
    console.log(xloc);
    
    var sd = 60;
    var mean = width /2;
    xloc = (xloc * sd) + mean;
    
    fill(0,10);
    noStroke();
    ellipse(xloc, height /2, 16, 16);
}
```
At the begining in our set up function we simply create a canvas with a background of (127).

Within the draw function, we are looking to produce a random number with a normal(gaussian) distribution and store it in the variable xloc.

We declare our standard deviation as 60 and our mean or the average is the width  divided by 2. Our random number(xlox) is multiplied by the standard deviation and then the mean is added to that value.

For the display of these values and ellipse is drawn with a fill of (0,10) and noStroke()