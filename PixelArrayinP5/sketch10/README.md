# Pixel Array in p5

[See the Code in action](sketch10.html)

In this sketch we are looking to find the value of the pixel in the pixel array.

To find the value of this pixel in the Pixel Array we multiply the Y value by width, add the X value and multiply by 4
```js
 var index = (x + y * width) * 4
 ```

So now we need to create a nested loop which will run through all the Y values. For each Y value we need to run a loop for each X value.

```js
    
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4
            pixels[index + 0] = 255;
            pixels[index + 1] = 0;
            pixels[index + 2] = 0;
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
```
