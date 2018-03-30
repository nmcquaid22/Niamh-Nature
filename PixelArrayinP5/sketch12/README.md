# Pixel Array in p5

[See the Code in action](sketch11.html)

In this example we simply changed the values of the pixels to output this result
```js


function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
}

function draw() {
    loadPixels();
    
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4
            var bright = random(255);
            pixels[index + 0] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
}
  
```
a variable called bright was created where a random number was chosen between 0 and 255.