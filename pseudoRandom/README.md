# Uniform Distribution of Numbers (pseudo Random)

[See the Code in action](index.html)

In this file we implement the random function to prove that it can pick a "random" number in an array and produce a visual of rectangles increasing in size but at different times so they are never that same size.

The main script contains the two main functions, setup() & draw(). The draw function calls the objects built in function.
We declare two variables randomCounts, which is an array, and total.
A loop is created to populate the array with twenty 0's.

```js
var randomCounts = [];
var total = 20;

function setup() {
    createCanvas(640,360);
    for (var i = 0; i < total; i++) {
        randomCounts[i] = 0;
    }
}
```

Within the draw function, a variable is created to select and store the random chosen variable. Which is then floored.
A rectangle is created to render the stored results.
The length of the width of the rect is calculated and stored in a variable called w.

Then a for loop is implemented which loops 20 times and creates a rectangle based on the previous array value. Rect(x Start Pos, y Start Pos, width, Height).


```js
function draw() {
   background(127);
    var index = floor(random(total));
    randomCounts[index]++;
    
    //Draw a rect to render results
    stroke(0);
    strokeWeight(2);
    fill(255);
    
    var w = width/randomCounts.length;
    
    for (var x = 0; x < randomCounts.length; x++) {
        rect(x*w, height-randomCounts[x],w-1,randomCounts[x]);
    }
    
}
```